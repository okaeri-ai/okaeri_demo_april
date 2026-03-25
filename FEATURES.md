# Okaeri — Feature Design Document

Every feature exists because of a specific product belief. This document captures what each feature does, why it matters, and how it connects to the core thesis: execution, not notes.

---

## Layer 1: The Core Loop

The before → during → after cycle that makes Okaeri useful from day one.

### Home as Command Surface
**What:** Four opinionated judgment cards (top priority, biggest risk, cooling relationship, ready to execute) instead of stats.
**Why:** A dashboard shows what happened. A command surface tells you what to do next. The test: open for 10 seconds, know your #1 action.
**Design decision:** One card is visually dominant (larger, tinted background, "this is your #1 action"). Others are compact single-line items. Avoids the "everything is equally important" trap.
**Connected to:** Morning audio brief, relationship strategy, dependency awareness.

### Prep Brief
**What:** Structured meeting prep with 4 sections: what matters, what they care about, what to say, what not to miss.
**Why:** Generic meeting notes don't change behavior. Structured guidance does. Each claim has provenance (source + date) so it feels earned, not hallucinated.
**Design decisions:**
- Per-person columns showing individual decision drivers
- Pinned operator guidance that the user saved by voice
- Recommended opening line and likely objection
- Open contradictions surfaced before the meeting starts
**Connected to:** Relationship strategy, operator notes, contradiction detection.

### Live Meeting with Steering
**What:** Real-time transcript + commitment extraction + voice signals + meeting steering rail.
**Why:** The live meeting is where the product moat lives. Three things happen simultaneously:
1. Extraction: commitments parsed in real time
2. Voice signals: conviction, hesitation, tension — each with operational consequences
3. Steering: structural meeting failures caught and surfaced with suggested lines
**Design decisions:**
- Steering rail is the primary feature of the right column (above extraction)
- Voice signals show consequences, not just labels ("hesitation detected → confidence lowered → needs confirmation")
- Intervention restraint: 72% of potential nudges are held back
- Mode selector: silent / standard / high-touch
- User can type notes and tag them (action/decision/question)
**Connected to:** Meeting scoring, whisper guidance, intervention philosophy.

### Confirm & Execute with Correction Flow
**What:** Post-meeting commitments grouped by confidence: safe to auto-execute, needs confirmation, uncertain.
**Why:** The correction flow is the single most credibility-building moment. Showing Okaeri get something uncertain, ask a tight question, and learn from the answer proves the system is thoughtful.
**Design decisions:**
- Each card shows confidence rationale with evidence
- Uncertain items ask for clarification before execution (not after)
- Corrections update trust and future confidence
- Advanced features (edit assignee, challenge) hidden behind "..." menu
- "Execute all" cascades with 145ms delay — feels like real action
**Connected to:** Trust model, execution state persistence, learning history.

### All Clear as State Change View
**What:** Not just "done" — shows what changed in memory, relationships, trust, and what Okaeri will watch next.
**Why:** Transactional completion ("4 items done") doesn't build trust. Showing state changes ("memory updated, trust adjusted, watching for James's rollover") makes the system feel cumulative.
**Connected to:** Cross-screen state persistence, morning briefing hydration.

### Transcript Viewer
**What:** Full meeting transcript with chapter markers, full-text search, share, and export. Chapters are auto-generated from topic shifts and key moments.
**Why:** Transcripts are table stakes, but most tools dump a wall of text. Chapters make long meetings navigable. Search makes them retrievable. Share and export make them useful outside Okaeri.
**Design decisions:**
- Chapter markers generated from topic shifts, decisions, and commitment moments
- Full-text search with highlighted results and jump-to navigation
- Share generates a link with optional access controls
- Export to PDF, Markdown, or plain text
**Connected to:** Live meeting, commitment extraction, meeting history.

---

## Layer 2: Voice-First Identity

The features that make Okaeri feel like an executive assistant, not a dashboard.

### Teach Okaeri
**What:** Speak or type rules, preferences, and strategy. Parsed into fact/strategy/tactic/rule.
**Why:** The system needs to know how you think, not just what you said. "Sarah backs technical founders" shapes every future prep brief and draft for Sarah.
**Design decision:** Classification is automatic but editable. User-authored notes are treated as durable instructions. Model-inferred notes are hypotheses.

### Pre-Meeting Audio Brief
**What:** 30-second spoken brief with companion card (lead with / watch for / best next move).
**Why:** Founders walk into meetings, they don't sit at dashboards. The brief should work through AirPods while walking.
**Design decision:** Audio is primary, visual is secondary. Quick asks ("what changed since last time?") get spoken answers.

### Morning Audio Brief
**What:** Daily triage by voice: needs you now / can wait / handled already.
**Why:** The morning is when you set priorities. Audio triage is faster than opening a dashboard.
**Design decision:** Only 2-3 items in "needs you now." Handled items shown at reduced opacity. The brief should take <45 seconds.

### Whisper Guidance
**What:** Private, sparse prompts during meetings (suggest line / hold / dismiss).
**Why:** An executive assistant whispers, not shouts. The guidance should feel like someone who knows your style leaning over and saying one sentence.
**Design decision:** Maximum 2-3 nudges per meeting. Meeting-type presets (investor: only contradictions and missing asks; team: owners and dates; partner: silent unless blocker).

### Spoken Debrief
**What:** Audio summary right after the meeting: what changed, what you committed to, what needs your judgment.
**Why:** Post-meeting is when context is freshest and time is shortest. Audio captures it before the next meeting starts.

### How Okaeri Works With You
**What:** Observed operating style page showing learned communication preferences, meeting behavior, interruption thresholds, and learned phrases.
**Why:** Transparency builds trust. Showing "here's what I learned about you" lets the user correct misunderstandings and verify the system is paying attention.

### Smallest AI TTS Integration
**What:** Production-quality text-to-speech using Smallest AI as the primary voice provider, ElevenLabs as secondary, and Web Speech API as fallback.
**Why:** Voice-first means the voice has to sound good. Browser TTS is inconsistent across platforms. Smallest AI provides low-latency, natural-sounding voices. ElevenLabs provides premium quality for key moments. The three-tier fallback ensures voice always works.
**Design decision:** Smallest AI for real-time briefings (low latency). ElevenLabs for high-fidelity moments (morning brief, debrief). Web Speech API as offline/fallback.

---

## Layer 3: Trust & Autonomy

The features that make earned trust legible and real.

### Earned Autonomy
**What:** 5-level trust model with per-domain scoring, evidence, rollback history, and unlock requirements.
**Why:** "AI that does things for you" is scary without visibility into why. Per-domain trust (Linear: auto-execute, Calendar: needs confirm) makes the model concrete.
**Design decisions:**
- Trust can regress (rollback → drop level, requires N confirms to restore)
- Each permission shows evidence (42 actions, 3 edits, 0 rollbacks)
- "What unlocks next" shows progress toward new capabilities
- Recent trust events show the trust model in motion

### Rollback
**What:** Undo an executed action with trust adjustment.
**Why:** The rollback case is what makes trust real. Without it, "earned autonomy" is just a label.
**Design decision:** Show the full timeline (scheduled → user objected → cancelled → rescheduled → trust adjusted).

### Learning History
**What:** Correction rate declining over time (12 → 7 → 4 → 2), extraction accuracy improving (84% → 96%).
**Why:** Proves the system gets better. This is the answer to "what if it's wrong?" — it's wrong less often every week.

---

## Layer 4: Organizational Intelligence

The features that make Okaeri irreplaceable.

### Commitment Attribution
**What:** Who suggested, who committed, who can block, reliability scores per person per tool.
**Why:** "Marcus committed" is less useful than "Marcus committed with high conviction, Jess suggested it, nobody can block, and he completes 92% of similar tickets." The social graph behind commitments is the moat.
**Design decision:** Over-commitment detection warns when someone has too many open P1s.

### Change Detection
**What:** Stance shifts, priority drift, conviction tracking across meetings.
**Why:** No human can hold 10 meetings worth of positions in their head. Change detection makes organizational coherence possible.
**Design decision:** Show before/after with evidence, not just "this changed."

### Contradiction Detection
**What:** Active inconsistency detection when positions change without acknowledgment.
**Why:** The feature that makes Okaeri irreplaceable. "You said enterprise-first on March 20, but today you're discussing PLG." Not accusation — clarification.
**Design decisions:**
- 4 resolution paths: replaces old, both true in context, unresolved, dismiss
- Surfaces in prep brief before meetings where contradictions are relevant
- Live meeting steering catches contradictions in real time

### Decision Expiry
**What:** "Does this still stand?" for decisions older than 4 weeks where conditions changed.
**Why:** Decisions go stale silently. The hold on outreach made sense 6 weeks ago, but metrics improved since then.
**Design decision:** Only surface when: old enough, still blocking something, conditions plausibly changed.

### Dependencies
**What:** Commitment chains with cascade risk analysis.
**Why:** "This follow-up is blocked by legal" and "if the bug isn't fixed by noon, the demo fails, the partner data is delayed, and the Series A pitch is weaker."
**Design decision:** Visual dependency chains showing 4-step cascades.

### Relationship Strategy
**What:** Per-person playbooks: what moves them, what reduces confidence, best next move, timing, operator notes.
**Why:** "Alex is cooling" is less useful than "Alex responds to direct asks with technical proof. Don't send a generic follow-up. Wait for the bug fix."
**Design decisions:**
- Notes classified as fact/strategy/tactic/avoid
- User-authored notes shape prep, drafts, and suggestions
- "Add note" input on every profile
- Strategy cards on relationship health page

### Unified Model
**What:** One piece of information propagates to 7 surfaces (CRM, investor update, relationship health, digest, goals, ask okaeri).
**Why:** Single-surface tools create data silos. Cross-artifact intelligence is the long-term moat.

### Operating Cadence
**What:** Patterns turned into automated rhythms (weekly investor update, sprint review, partner check-ins).
**Why:** The goal isn't automating tasks — it's automating the judgment of when tasks need to happen.

### Institutional Memory
**What:** 78% continuity coverage if the founder is unavailable.
**Why:** If everything is in one person's head, the organization is fragile. Okaeri makes knowledge organizational.

### Operating Playbooks
**What:** Structured, repeatable workflows for recurring operational scenarios — fundraise closing, design partner onboarding, sprint planning, incident response.
**Why:** Founders repeat the same operational patterns but never codify them. Playbooks turn tribal knowledge into executable sequences that adapt based on context, team capacity, and relationship history.
**Design decisions:**
- Playbooks are suggested based on detected patterns, not manually created
- Each step can be auto-executed, confirmed, or manual depending on trust level
- Playbooks adapt: if a team member is overloaded, steps get redistributed
**Connected to:** Operating cadence, recurring patterns, earned autonomy.

### Recovery Workflows
**What:** Structured recovery plans when commitments slip, relationships cool, or execution fails. Prioritized steps with estimated timelines and success criteria.
**Why:** Every tool flags problems. Few help you fix them. Recovery is a first-class workflow, not just a notification.
**Design decisions:**
- Recovery plans are generated with specific, actionable steps
- Each step has an estimated timeline and success metric
- Plans adapt based on the severity and type of failure
**Connected to:** Relationship health, execution failure, pattern detection.

### Smart Scheduling
**What:** Calendar intelligence that considers meeting context, participant preferences, energy patterns, and strategic timing — not just availability.
**Why:** "Find a free slot" is table stakes. Smart scheduling considers: is this person a morning or afternoon person? Is this meeting high-stakes enough to deserve your peak hours? Should this be batched with related meetings?
**Connected to:** Calendar defense, operating cadence, relationship strategy.

### CRM Integration
**What:** Bidirectional sync between Okaeri and Salesforce. Meeting insights, deal stage updates, relationship health, and commitment tracking flow automatically.
**Why:** CRM data entry is the tax founders hate most. Okaeri eliminates it — meetings update deals, commitments update next steps, relationship signals update health scores. The CRM stays the system of record; Okaeri makes it accurate.
**Design decisions:**
- Intelligence layer, not replacement — Okaeri enriches your CRM, doesn't compete with it
- Bidirectional: CRM data informs prep briefs, meeting insights update CRM
- Field mapping is configurable per deal stage and object type
**Connected to:** Execution layer, relationship strategy, unified model.

---

## Layer 5: System & Privacy

### Privacy
**What:** Explicit recording, participant notification, 24-hour voice deletion, full data control.
**Why:** Voice-first means trust-first. If participants don't consent, Okaeri doesn't listen.

### Smart Drafting
**What:** Follow-up drafts that use relationship strategy notes to choose tone and content.
**Why:** A generic follow-up to Sarah is worse than a proof-led, technical, concise note that matches her response patterns.

### Ambient Executive Mode
**What:** "Only what changed" — shows deltas, not dashboards.
**Why:** The strongest version of Okaeri may not be a dashboard. It's a quiet layer that surfaces only when something meaningfully changes.

### Benchmarking
**What:** Which meeting types create progress, which follow-up patterns work, which commitment types slip.
**Why:** Turns Okaeri into a system for improving how you operate, not just tracking work.

### Meeting Scoring
**What:** 5-criteria real-time scoring: did we decide, assign, clarify, bring right people, spend time well.
**Why:** Most meeting tools measure duration. This measures outcome quality.

---

## Design Principles

1. **Judgment over tracking.** Every screen should tell you what to do, not just what happened.
2. **Restraint over noise.** Hold back 72% of potential interventions. Silence is a feature.
3. **Evidence over assertion.** Every claim has provenance. Every trust level has data behind it.
4. **Correction over perfection.** The system will be wrong. The correction flow is what builds trust.
5. **Voice over dashboard.** If it can be heard, don't make them read it.
6. **Earned over granted.** Trust accumulates through behavior, not configuration.
7. **Cumulative over transactional.** Every interaction makes the system smarter.
