# Okaeri — Technical Architecture (Evaluated)

This document describes the production architecture for Okaeri, with honest evaluation of each decision — what's right, what's risky, and where there are better alternatives.

---

## Architecture Overview

```
Clients (Web · iOS · Slack)
        ↕
    API Gateway
        ↕
┌───────┬───────┬──────────┐
│ Voice │ Intel │ Execution│
│Engine │Engine │ Engine   │
└───┬───┴───┬───┴────┬─────┘
    └───────┼────────┘
      Memory Layer
    (Postgres · Redis · Vector)
```

Six systems: voice, intelligence, execution, memory, real-time, and clients. Each evaluated below.

---

## 1. Voice Engine

### The Design

**Audio capture:** WebRTC from browser, native capture from iOS, streamed via WebSocket in 250ms chunks.

**Dual-path transcription:**
- Live: Deepgram Nova streaming (<500ms latency) for real-time display
- Batch: Whisper large-v3 after meeting ends for permanent record

**Speaker diarization:**
- Live: Deepgram's built-in (decent, ~90%)
- Batch: pyannote.audio (better, ~95%, but slower)

**Voice signal analysis:**
- Bridge: Hume AI expression API for conviction/hesitation/tension
- Long-term: custom classifiers trained on labeled meeting data

### Evaluation

**Dual-path transcription: correct decision.** Live transcription needs speed. Permanent records need accuracy. These are fundamentally different requirements. Trying to do both with one system means compromising on one. The only risk is complexity — you're maintaining two pipelines. At pre-seed, you could defer the Whisper batch path until month 3 and just use Deepgram for everything initially. The accuracy difference matters less than shipping.

**Deepgram as primary STT: good choice, but evaluate alternatives.** Deepgram is the most developer-friendly real-time STT. AssemblyAI's Universal-2 model is competitive on accuracy and has built-in diarization. The honest answer: at pre-seed, pick whichever has better docs and stick with it. Switching STT providers later is straightforward — it's just an API call.

**Hume AI as voice signal bridge: this is the biggest architectural risk.** Hume's API returns emotional expression scores, not commitment-specific signals. "Conviction when making a commitment" is a different thing than Hume's generic "confidence" score. The bridge will feel approximate. It may produce enough signal to be useful, but it won't be the tight "hesitation → lower confidence → needs confirm" loop the prototype shows. The honest path:
- Month 1-4: skip voice signals entirely. Use text-only confidence (did they use hedging words? did they name a specific date?).
- Month 5-6: integrate Hume as a supplementary signal, not primary.
- Month 8+: train custom classifiers once you have enough labeled data from user corrections.

**The voice signal moat is real but takes time.** You won't have defensible voice signal analysis in the first 6 months. The moat builds as you accumulate data. Don't position it as a launch feature — position it as a compounding advantage.

**What I'd change:** Start with text-only confidence scoring. It's simpler, cheaper, and gets you 70% of the value. Add voice signals as an enhancement, not a requirement.

---

## 2. Intelligence Engine

### The Design

**Commitment extraction:** LLM (Claude) with structured output, run incrementally every 30 seconds during live meetings.

**Attribution:** LLM analyzes conversation flow to determine who suggested, committed, can block.

**Meeting steering:** 5 detectors running on a 30-second loop (no owner, vague deadline, no decision, wrong stakeholder, status overload).

**Change detection:** Structured claims extracted per meeting, compared across meetings for contradictions.

### Evaluation

**LLM for extraction: correct, but watch costs.** Claude API at ~$3/million input tokens means a 38-minute meeting (~8,000 words) costs roughly $0.03 per extraction call. Running every 30 seconds = ~76 calls per meeting = ~$2.30 per meeting. At 50 users doing 5 meetings/week, that's ~$575/month just for extraction. Manageable, but it scales linearly. At 500 users it's $5,750/month.

**Mitigation:** Don't run extraction every 30 seconds. Run it on speech-turn boundaries instead (when the speaker changes or there's a 3+ second pause). This cuts calls by 60-70% while capturing the same commitments. The 30-second loop was designed for steering, not extraction — separate them.

**Meeting steering every 30 seconds: too expensive as designed.** Steering requires context (the full meeting so far) which means the prompt grows linearly. A 30-minute meeting's steering call at minute 25 includes ~6,000 words of context. Running that every 30 seconds is wasteful.

**Better approach:** Run steering on events, not intervals:
- When a new commitment is extracted → check for missing owner/deadline
- When a topic shift is detected → check for unresolved decision
- When 5 minutes pass without extraction → check for drift
- Event-driven steering uses 80% fewer LLM calls with the same outcomes.

**Claude vs GPT-4 for extraction: Claude is the right choice.** Anthropic's structured output is more reliable for commitment parsing. Claude also handles the "don't over-extract" instruction better — GPT-4 tends to find commitments that aren't there.

**Change detection: simpler than it sounds.** Structured claim extraction → comparison is straightforward. The hard part is knowing when a change is meaningful vs noise. Start by only tracking 5 claim types: strategy direction, explicit decisions, owner assignment, deadlines, deal stage. Don't try to track everything.

**What I'd change:** Event-driven steering instead of interval-based. Separate extraction frequency from steering frequency. Budget LLM costs explicitly from day 1.

---

## 3. Execution Engine

### The Design

**Confidence-gated execution:** confidence score + trust level → auto-execute / confirm / manual.

**5 tool integrations:** Linear, Slack, Calendar, Salesforce, Gmail via OAuth + REST/GraphQL APIs.

**Per-tool trust model:** actions, edits, rollbacks tracked per tool. Trust can regress.

**Rollback support:** every execution stores enough state to reverse.

### Evaluation

**Confidence gating: correct and essential.** This is the right design. The prototype's 3-tier model (safe / confirm / uncertain) maps cleanly to production. No changes needed.

**5 integrations at launch: too many.** Each OAuth integration has setup costs (developer accounts, approval processes, webhook management, token refresh handling). Salesforce alone takes 2-3 weeks to integrate properly. Gmail API has Google's review process.

**Better approach:** Launch with 2 integrations: Linear + Slack. These cover "create ticket" and "send message" — the two most common commitment types. Calendar is month 2. Salesforce and Gmail are month 3-4. Each integration should be a plugin with a standard interface so adding new ones is mechanical.

**Per-tool trust: correct and novel.** No competitor does this. The data model is clean. The only risk is that trust accumulates too slowly if users don't use a tool often. Salesforce might take months to reach "auto-execute" if the user only updates deals weekly. Consider a minimum-actions-per-level threshold that's proportional to usage frequency, not absolute.

**Rollback: necessary but tricky.** Linear ticket deletion is easy. Slack message deletion is possible. Calendar event cancellation is clean. Salesforce rollback requires storing the previous state. Gmail message recall is unreliable. Be honest with users about which tools support clean rollback and which don't.

**What I'd change:** Launch with Linear + Slack only. Add tools one at a time based on partner demand, not a predetermined schedule.

---

## 4. Memory Layer

### The Design

**Postgres** for structured data (commitments, claims, trust, relationships).
**Redis** for real-time state (live meeting, session, hot cache).
**Vector DB** for semantic search (transcript embeddings, cross-meeting search).
**S3** for audio files (24-hour TTL).

### Evaluation

**Postgres as primary: absolutely correct.** The commitment graph is relational data. Joins matter (commitment → meeting → person → trust score). Postgres handles this perfectly. Don't use a graph database — it's overkill and adds operational complexity.

**Supabase vs raw Postgres: Supabase is the right call at pre-seed.** You get Postgres + auth + real-time subscriptions + Row Level Security out of the box. Building auth and real-time from scratch is weeks of work that doesn't differentiate your product. Switch to managed Postgres (RDS/Neon) later if Supabase constraints become a problem.

**pgvector vs Pinecone for vector search: use pgvector.** Keep everything in one database. Cross-meeting search doesn't need Pinecone-scale vector operations. You're searching across hundreds of meetings, not millions. pgvector in Postgres is fast enough and eliminates a whole service dependency. Move to Pinecone only if search latency becomes a problem at scale.

**Redis: correct but maybe premature.** At pre-seed with 10 users, Supabase's real-time subscriptions might be enough for live meeting state. Redis adds operational cost. Defer until you actually need sub-10ms cache reads. Use Supabase Realtime for meeting state updates initially.

**S3 with 24-hour TTL for audio: correct.** Audio is sensitive data. Process it quickly, extract what you need (transcript + voice features), delete the audio. This is both a technical and privacy decision. The 24-hour window gives you time for batch re-processing without long-term storage liability.

**The schema I proposed is mostly right** but has one gap: no explicit "meeting_goal" or "agenda" table. Meeting steering needs to compare actual discussion against intended purpose. Add:

```sql
CREATE TABLE meeting_goals (
  meeting_id UUID REFERENCES meetings(id),
  goal TEXT NOT NULL,
  source TEXT, -- 'user_stated', 'calendar_description', 'inferred'
  achieved BOOLEAN DEFAULT false
);
```

**What I'd change:** Start with Supabase (Postgres + auth + real-time). Skip Redis initially. Use pgvector not Pinecone. Add meeting goals table.

---

## 5. Real-Time System

### The Design

WebSocket-based meeting session manager coordinating audio processing, extraction, steering, and signal analysis workers.

### Evaluation

**WebSockets: correct for live meetings.** Server-Sent Events (SSE) would work for one-directional updates, but meetings need bidirectional communication (audio up, events down). WebSockets are the right call.

**Session manager pattern: correct but needs graceful degradation.** If the WebSocket connection drops mid-meeting (network blip, laptop sleep), the system needs to:
- Buffer audio client-side during disconnection
- Resume transcription from where it left off on reconnect
- Not lose any extracted commitments

This is a real engineering challenge. Design for it from day 1.

**Worker coordination: use a message queue, not direct calls.** The proposed architecture has the session manager calling workers directly. Better: session manager publishes events to a queue (BullMQ with Redis, or Supabase's built-in queue). Workers consume independently. This means if the steering worker is slow, it doesn't block transcript updates.

**What I'd change:** Add a message queue between session manager and workers. Design reconnection handling from the start.

---

## 6. Client Applications

### The Design

- Web: Next.js/SvelteKit
- iOS: Native Swift
- Slack: Bot with slash commands and interactive messages

### Evaluation

**Web framework: Next.js is fine but SvelteKit might be better here.** The Okaeri web app is highly interactive (live meeting view, real-time steering updates, drag-and-drop). Svelte's reactivity model is cleaner for real-time UIs than React's. Less boilerplate, smaller bundle, better performance. That said, Next.js has a larger ecosystem and hiring pool. Either works. Pick based on the CTO's preference.

**Native iOS: correct but expensive.** React Native or Expo would be faster to ship and share code with web. The argument for native is audio capture quality — but React Native's audio APIs are good enough for recording. You're not doing on-device ML.

**Honest recommendation:** Ship the Slack bot first as the "mobile" experience. Most founders are in Slack all day. DM briefs, slash commands, and confirmations cover 80% of the mobile use case. Build a proper iOS app in month 6-8 when you know exactly what mobile features matter.

**What I'd change:** Web (Next.js or SvelteKit), Slack bot as first "mobile" surface, iOS native deferred to month 6+. Consider Expo/React Native for iOS when you do build it.

---

## Build Sequence (Revised)

Based on the evaluation, here's the adjusted build order:

### Month 1-2: Minimum Viable Loop
- Browser audio capture → Deepgram streaming transcription
- Claude extraction on speech-turn boundaries (not 30-second intervals)
- Simple web UI: record → transcript → commitments → confirm
- Linear + Slack execution (2 tools only)
- Supabase for everything (Postgres + auth + real-time)
- Text-only confidence scoring (no voice signals yet)

**Ship milestone:** extract commitments from a real meeting, execute in Linear.

### Month 3-4: Trust + Corrections
- Per-tool trust accumulation
- User correction flow → extraction model improves
- Confidence gating (auto / confirm / manual)
- Google Calendar integration (tool #3)
- Basic prep brief generation
- Slack bot for briefs and confirmations

**Ship milestone:** first auto-executed action with zero user intervention.

### Month 5-6: Intelligence
- Event-driven meeting steering (not interval-based)
- Batch Whisper re-processing for better transcripts
- Relationship data model and basic strategy
- Cross-meeting search (pgvector)
- Operator notes (voice capture via Web Speech API)
- Salesforce integration (tool #4)

**Ship milestone:** steering nudge leads to an owner being assigned during a meeting.

### Month 7-9: Voice Signals + Moat
- Hume AI integration for conviction/hesitation
- Voice signals modulate confidence scoring
- Change detection and contradiction flagging
- Operating playbooks (pattern → reusable sequence)
- Gmail integration (tool #5)
- Begin collecting labeled data for custom voice classifiers

**Ship milestone:** voice signal correctly changes an execution decision.

### Month 10-12: Mobile + Scale
- iOS app (or Expo) with audio capture and briefs
- Multi-user support and team features
- Custom voice signal model (trained on your data)
- SOC 2 process started
- Billing and subscription

**Ship milestone:** team of 4 using Okaeri across all meetings.

---

## Cost Model (Realistic)

### 10 users, 50 meetings/week:
| Service | Monthly Cost |
|---------|-------------|
| Deepgram (STT) | ~$150 |
| Claude API (extraction + steering) | ~$300 |
| Supabase (Postgres + auth + real-time) | $25 |
| Vercel (web hosting) | $20 |
| S3 (audio temp storage) | $5 |
| **Total** | **~$500/month** |

### 50 users, 250 meetings/week:
| Service | Monthly Cost |
|---------|-------------|
| Deepgram | ~$600 |
| Claude API | ~$1,200 |
| Hume AI (voice signals) | ~$200 |
| Supabase Pro | $75 |
| Redis (Upstash) | $30 |
| Vercel Pro | $20 |
| S3 | $15 |
| **Total** | **~$2,140/month** |

### 500 users, 2500 meetings/week:
| Service | Monthly Cost |
|---------|-------------|
| Deepgram | ~$4,000 |
| Claude API | ~$8,000 |
| Hume AI | ~$1,500 |
| Managed Postgres | ~$200 |
| Redis | ~$100 |
| Compute (Railway/Fly) | ~$500 |
| S3 | ~$50 |
| **Total** | **~$14,350/month** |

LLM API costs dominate. The key optimization is reducing unnecessary LLM calls through event-driven architecture rather than interval-based polling.

---

## What's Right About This Architecture

1. **Dual-path transcription** — speed for live, accuracy for permanent record
2. **Per-tool trust** — novel and defensible, clean data model
3. **Postgres as primary** — relational data, don't over-engineer
4. **Confidence gating** — the right execution model
5. **Plugin interface for tools** — makes adding integrations mechanical
6. **Audio deleted in 24 hours** — privacy by design

## What's Risky

1. **Voice signals won't be ready at launch** — plan for text-only confidence initially
2. **LLM costs scale linearly with meetings** — event-driven architecture is essential
3. **5 tool integrations at once is too many** — start with 2
4. **Native iOS is expensive** — Slack bot first, mobile app later
5. **Hume AI is an approximate bridge** — commitment-specific voice signals need custom training

## What I'd Do Differently If Starting Over

1. **Ship Linear + Slack execution in 6 weeks, not 8.** The core loop is simple enough to build fast.
2. **Skip voice signals entirely for months 1-6.** Text-based confidence is good enough to prove the concept.
3. **Use Supabase for everything initially.** Don't set up separate Redis, vector DB, or queue systems until you need them.
4. **Event-driven steering from day 1.** Don't build the 30-second polling loop and then refactor.
5. **Slack bot as the first non-web surface.** It's faster than iOS and tests the "meets you where you work" thesis.

---

## The Honest Summary

The architecture is sound. The main risk isn't technical design — it's scope. A pre-seed team of 2-3 engineers building all 6 systems simultaneously will ship nothing. The path to product-market fit is:

**Week 1-6:** Meeting → extraction → execution in Linear + Slack. Nothing else.
**Week 7-12:** Trust model + corrections + Calendar. Still no voice signals.
**Week 13-20:** Steering + relationship data + search. Voice signals as enhancement.
**Week 21+:** Everything else, driven by partner feedback.

The prototype shows 96 screens of vision. The production product should ship 5 screens of reality first, then expand.
