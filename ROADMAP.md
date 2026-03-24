# Okaeri — Product Roadmap

What we're building, when, and why — organized by quarter with clear milestones.

---

## Current State (March 2026)

**Prototype:** 79 interactive screens demonstrating the full product vision
**Design partner:** Resonance (active, monthly retainer)
**Fundraise:** $2M pre-seed, Sequoia first meeting complete
**Team:** 4 (Jess CEO, Marcus Engineering, Priya Sales/Ops, James BD)

---

## Q2 2026: Foundation

**Theme:** From prototype to working product. Voice capture → extraction → manual execution.

### April
- [ ] Production voice pipeline: Deepgram real-time + Whisper batch
- [ ] Speaker diarization for 2-4 person meetings
- [ ] Commitment extraction via Claude API with structured output
- [ ] Basic web UI: record → transcript → extracted commitments
- [ ] PostgreSQL schema for meetings, transcripts, commitments
- [ ] User authentication

**Milestone:** Extract commitments from a real meeting with >80% accuracy.

### May
- [ ] Commitment confirmation UI (approve / edit / reject)
- [ ] Linear integration (create ticket, assign, set priority)
- [ ] Slack integration (send message to channel)
- [ ] Google Calendar integration (create event)
- [ ] Execution receipt system
- [ ] Confidence scoring (high / medium / low)
- [ ] Clarification flow for low-confidence items

**Milestone:** End-to-end: meeting → extraction → execution across 3 tools in <5 minutes.

### June
- [ ] Prep brief generation (basic: recent threads + signals)
- [ ] Meeting history and search
- [ ] Execution log
- [ ] Rollback support
- [ ] Onboard 2 additional design partners
- [ ] Close pre-seed round

**Milestone:** 3 design partners using Okaeri for 5+ meetings/week.

---

## Q3 2026: Trust & Intelligence

**Theme:** Earned autonomy. The system starts making decisions about when to auto-execute.

### July
- [ ] Per-tool trust tracking (actions, edits, rollbacks)
- [ ] Trust levels: manual → needs_confirm → auto_execute
- [ ] Trust regression on rollbacks
- [ ] Salesforce integration
- [ ] Gmail integration (draft + send)
- [ ] User-facing trust dashboard

**Milestone:** First auto-executed action with zero user intervention.

### August
- [ ] Voice signal analysis: conviction detection
- [ ] Voice signal → confidence adjustment
- [ ] Relationship data model (touchpoints, health, last contact)
- [ ] Person profiles with interaction history
- [ ] Operator notes (fact/strategy/tactic/rule)
- [ ] Morning and evening briefing generation

**Milestone:** Voice signals correctly adjust confidence in 80%+ of ambiguous cases.

### September
- [ ] Meeting steering: 5 core detectors (no owner, vague deadline, no decision, wrong stakeholder, status overload)
- [ ] Steering suggested lines
- [ ] Meeting quality scoring (5 criteria)
- [ ] Intervention mode selector (silent/standard/high-touch)
- [ ] Change detection across meetings
- [ ] Weekly digest generation

**Milestone:** Steering nudges lead to owner assignment in 80%+ of flagged cases.

---

## Q4 2026: Organizational Memory

**Theme:** Cross-meeting intelligence that compounds over time. The moat.

### October
- [ ] Contradiction detection (structured claim comparison)
- [ ] Decision expiry tracking
- [ ] Commitment attribution graph (suggested by, committed by, can block)
- [ ] Dependency mapping between commitments
- [ ] Relationship strategy objects (response preferences, tactics)
- [ ] Cross-artifact intelligence (meeting → CRM → email → calendar updates)

**Milestone:** System detects 2+ real contradictions per month. Attribution graph active.

### November
- [ ] Operating cadence automation (recurring commitment detection)
- [ ] Smart drafting (strategy-aware follow-ups)
- [ ] Style learning (communication tone, working patterns)
- [ ] Ambient mode (menu bar widget, notifications)
- [ ] Pattern detection (slippage, execution behavior)

**Milestone:** 3+ automated operating rhythms running without manual intervention.

### December
- [ ] Mobile app (iOS): voice capture + post-capture review
- [ ] Mobile → desktop handoff
- [ ] Real-time mobile meeting intel
- [ ] Institutional memory / continuity features
- [ ] Privacy controls (per-meeting/per-person deletion)
- [ ] Benchmarking (which patterns work, which don't)

**Milestone:** Mobile capture → desktop execution in <30 seconds. Continuity score >70%.

---

## Q1 2027: Team & Scale

**Theme:** From founder tool to team operating system.

### January
- [ ] Multi-user accounts
- [ ] Team execution dashboard
- [ ] Delegation tracking with nudge
- [ ] Shared relationship data
- [ ] Team admin and permissions
- [ ] Onboarding flow for new team members

### February
- [ ] Pre-meeting spoken brief (audio via API)
- [ ] In-meeting whisper guidance (earbud/menubar integration)
- [ ] Post-meeting spoken debrief
- [ ] Voice-driven memory updates ("remember that Sarah...")
- [ ] Interruption threshold tuning per meeting type

### March
- [ ] Series A fundraise
- [ ] 10+ active customers
- [ ] SOC 2 Type II process started
- [ ] Enterprise pilot conversations
- [ ] Expanded tool integrations (Notion, GitHub, HubSpot)

**Milestone:** Team of 4+ using Okaeri with 95%+ execution rate. Revenue from first paid customers.

---

## Long-Term Vision (2027+)

### The 3-Layer Product
1. **Memory you speak into** — every rule, preference, and strategy captured and operationalized
2. **Guidance you hear** — briefings, whispers, debriefs that work through earbuds
3. **Behavior that adapts** — the system learns your style and gets better every week

### The Moat
- **Year 1:** Execution (doing what you said you'd do)
- **Year 2:** Intelligence (knowing what you should do)
- **Year 3:** Organizational memory (knowing what the company knows)

Each layer builds on the previous one. Execution without intelligence is automation. Intelligence without memory is transient. Memory without execution is just notes.

### The Market
- **Phase 1:** Founder tool ($50-100/month) — 1,000 founders
- **Phase 2:** Team tool ($200-500/month) — 5,000 teams
- **Phase 3:** Enterprise operating system ($2,000+/month) — Fortune 500

### The Thesis
The company that owns the commitment graph — who said what, to whom, with what conviction, blocked by what, and whether it happened — owns the execution layer of every organization.

That is the endgame.

---

## Key Metrics

| Metric | Current (Prototype) | Q2 Target | Q4 Target | Q1 2027 Target |
|--------|-------------------|-----------|-----------|----------------|
| Extraction accuracy | ~84% (week 1) | >85% | >95% | >97% |
| Execution rate | 60% baseline | 90% | 95% | 97% |
| Auto-execute edit rate | n/a | n/a | <10% | <5% |
| Design partners | 1 | 3 | 5 | 10+ customers |
| Meetings processed | 0 | 50/week | 200/week | 1000/week |
| Trust model active | No | No | Yes | Yes |
| Voice signals | No | No | Yes | Yes + whisper |
| Contradiction detection | No | No | Yes | Yes |
| Revenue | $0 | $0 | $0 | First paid |

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Extraction accuracy plateaus | Users stop trusting the system | Aggressive correction feedback loop, Whisper re-processing |
| Voice signals unreliable | Core moat weakens | Start with hesitation only (highest signal), add others incrementally |
| Trust model feels arbitrary | Users override everything manually | Full evidence transparency, let users see and adjust every threshold |
| Privacy concerns block adoption | Enterprise deals stall | 24-hour voice deletion, explicit consent, SOC 2 early |
| Competition from Otter/Fireflies | Feature parity on extraction | They don't have trust model, attribution, or steering — moat is deeper |
| Founder burnout | Team execution slows | Hire engineer #2 by Q3, use Okaeri internally |
