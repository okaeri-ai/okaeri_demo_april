# Okaeri — Product Vision & Strategy

## One-Line

A voice-first execution engine that captures spoken commitments and turns them into completed work — with earned trust, not blind automation.

## The Problem

Meetings produce commitments. Commitments produce follow-ups. Follow-ups produce more meetings. Somewhere in this cycle, ~40% of what people agree to do simply doesn't happen. Not because of malice — because of memory.

The current toolchain fails at the handoff:
- Meeting notes capture what was said, not what was committed
- CRM updates require manual entry after every call
- Task trackers only know what someone typed in, not what they said they'd do
- Follow-ups depend on someone remembering to send them
- Relationships cool because nobody tracked the last touchpoint

The gap isn't information. It's execution.

## The Insight

**Notes don't close tickets. Okaeri does.**

The real value isn't in capturing meetings — every tool does that now. The value is in:
1. Understanding who actually committed to what (not just who was mentioned)
2. Knowing whether to execute automatically or ask first
3. Getting better at both over time

That requires a system that earns trust, not one that demands it.

## The Product

Okaeri is three layers:

### Layer 1: Memory You Speak Into
- Capture strategy, rules, and preferences by voice
- "Remember: Sarah cares about technical depth" becomes durable operating guidance
- Every note shapes future prep briefs, drafts, and suggestions
- The system classifies into facts, strategy, tactics, and rules

### Layer 2: Guidance You Hear
- Pre-meeting: spoken 30-second briefing with what to say, what to avoid, best next move
- During meeting: whisper guidance for structural failures (no owner, vague deadline, drift, contradiction)
- Post-meeting: spoken debrief with what changed, what you committed to, and what Okaeri can handle
- The key is restraint — 72% of potential interventions are held back

### Layer 3: Behavior That Adapts
- Learns your communication style (concise, direct, proof-led)
- Learns your working patterns (peak hours, meeting preferences, tool routing)
- Learns your phrases ("the thing that matters here is the technical wedge")
- Adapts interruption threshold by meeting type
- Every correction makes future behavior more aligned

## The Trust Model

Okaeri uses **earned autonomy** — trust is built through consistent, transparent behavior.

### 5 Levels
1. **Observer** — listens, extracts, suggests. User executes everything manually.
2. **Confirmed Executor** — executes after user confirmation on each action.
3. **Trusted Partner** — auto-executes high-trust tools, confirms the rest.
4. **Autonomous Agent** — handles routine operations independently.
5. **Strategic Advisor** — proactive suggestions, draft generation, operating rhythm automation.

### Per-Domain Trust
Each tool has its own trust score:
- Linear: 20 actions, 1 edit, 0 rollbacks -> auto-execute
- Slack: 18 actions, 2 edits, 0 rollbacks -> auto-execute
- Calendar: 12 actions, 3 edits, 1 rollback -> needs confirm
- Salesforce: 4 actions, 1 edit, 0 rollbacks -> needs confirm
- Gmail: 2 actions, 0 edits, 0 rollbacks -> manual only

Trust can regress. If a Calendar scheduling is rolled back, auto-execute pauses until 5 successful confirms with 0 rollbacks.

## Moat Differentiators

### 1. Commitment Attribution
Not "Marcus committed to X" but "Jess suggested, Marcus committed with high conviction, nobody can block, 92% reliability on Linear tickets." The social graph behind every commitment.

### 2. Change Detection
Track stance shifts, priority drift, and conviction changes across meetings. "Last week you said enterprise-first. This week you're hedging toward PLG. Priya's conviction on Acme weakened between Tuesday and Friday."

### 3. Real-Time Intervention with Restraint
Meeting steering catches structural failures: no owner, vague deadlines, wrong stakeholders, false alignment. But 72% of potential interventions are held back. The system knows when to stay quiet.

### 4. Contradiction Detection
Active inconsistency detection across meetings. "You said enterprise-first on March 20, but today you're prioritizing PLG again." Not accusation — clarification with resolution paths.

### 5. Decision Expiry
"Wait on outreach until metrics improve" — but that was 6 weeks ago and metrics improved. Okaeri asks: "Does this still stand?"

### 6. Dependency Awareness
"This follow-up is blocked by legal." "This deadline is risky because Marcus already has 3 P1s." Commitment chains with cascade risk analysis.

### 7. Relationship Strategy
Not just "Alex is cooling" but "this person responds to direct asks with technical proof. Don't send a generic follow-up. Wait for the bug fix, then send proof-of-progress."

### 8. Cross-Artifact Intelligence
One piece of information from a meeting propagates to Salesforce, investor updates, relationship health, weekly digest, goals, and Ask Okaeri. One model of reality across all tools.

### 9. Institutional Memory
If the founder is unavailable for a week, 78% of operational tasks continue without intervention. Every meeting, every commitment, every relationship touchpoint becomes organizational knowledge.

### 10. Operating Cadence Automation
Recurring patterns become delegated rhythms: weekly investor update, sprint review, design partner check-ins — running autonomously with 0 edits needed.

### 11. Operating Playbooks
Structured, repeatable workflows for recurring operational scenarios — fundraise closes, design partner onboarding, sprint planning, incident response. Not generic templates: playbooks that adapt based on your operating history, team capacity, and relationship context. The system knows which playbook to trigger and when.

### 12. Recovery Workflows
When commitments slip, relationships cool, or execution fails, Okaeri doesn't just flag it — it generates structured recovery plans with prioritized steps, estimated timelines, and success criteria. Recovery is a first-class capability, not an afterthought.

## Market Position

**Okaeri is not:**
- A meeting transcription tool (Otter, Fireflies)
- A task management app (Linear, Asana)
- A CRM (Salesforce, HubSpot)
- An AI assistant (ChatGPT, Copilot)

**Okaeri is:**
An execution layer that sits between conversation and action, learning how you operate and earning the right to act on your behalf.

**On CRM specifically:** Okaeri integrates with your CRM — it doesn't replace it. The CRM integration is an intelligence layer: meeting insights flow into Salesforce automatically, deal stages update based on commitment extraction, and relationship health syncs bidirectionally. Your CRM stays the system of record. Okaeri makes it accurate without the data entry.

The closest analogy is a chief of staff who has spent a year working with you — they know what matters, who to follow up with, when to interrupt, and when to stay quiet.

## Go-To-Market

### Phase 1: Founder Tool (Now)
- Target: seed/Series A founders and operators
- Wedge: meeting -> execution loop
- Distribution: design partner program, founder networks
- Metric: execution rate improvement (60% baseline -> 95%+)

### Phase 2: Team Tool
- Expand from founder to team (3-8 people)
- Add delegation tracking, team view, shared trust model
- Distribution: word-of-mouth from Phase 1 founders

### Phase 3: Operating System
- Full organizational execution layer
- Multi-team, cross-department commitment tracking
- Enterprise sales motion

## Technical Architecture (Production)

### Voice Pipeline
- Speech-to-text: Whisper or Deepgram
- Text-to-speech: Smallest AI (primary), ElevenLabs (secondary), Web Speech API (fallback)
- Speaker diarization: who said what
- Voice signal analysis: conviction, hesitation, tension detection
- Real-time processing: <2s latency for live steering

### Intelligence Layer
- Commitment extraction: structured claim parsing from natural language
- Attribution graph: who suggested, committed, can block
- Change detection: temporal knowledge graph across meetings
- Contradiction detection: structured claim comparison
- Dependency mapping: commitment chain analysis

### Execution Layer
- Tool integrations: Linear, Slack, Calendar, Salesforce, Gmail
- Confidence scoring: per-action, per-tool, per-person
- Earned autonomy: trust accumulation with regression
- Rollback support: undo with trust adjustment

### Memory Layer
- Relationship strategy: per-person operating guidance
- Operator notes: fact/strategy/tactic/rule classification
- Style learning: communication preferences, working patterns
- Decision tracking: expiry detection, contradiction resolution

## Team

- **Jess Liu** — CEO / Founder
- **Marcus Chen** — Engineering
- **Priya Rajan** — Sales / Ops
- **James Wu** — Business Development

## Design Partners
- **Resonance** — voice infrastructure (active, monthly retainer)
- **Mnemix** — AI memory (cooling, needs re-engagement)

## Fundraise
- Target: $2M pre-seed
- Status: Sequoia first meeting complete, second meeting confirmed
- Timeline: May 1 close

---

*This document describes the product as prototyped. The interactive prototype at [okaeridemoapril.vercel.app](https://okaeridemoapril.vercel.app) demonstrates every feature described above across 89 screens.*
