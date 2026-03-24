# Okaeri — Build Sequence

What to build, in what order, and why. Each phase has a clear deliverable and success metric.

---

## Phase 0: Foundation (Week 1-2)

### Goal
Basic voice capture → text → structured extraction. No execution yet.

### Build
- [ ] Audio capture from browser (WebRTC + MediaRecorder API)
- [ ] Deepgram integration for real-time transcription
- [ ] Basic speaker diarization (2-4 speakers)
- [ ] Claude API integration for commitment extraction
- [ ] Simple web UI: record button → transcript → extracted commitments list
- [ ] PostgreSQL schema for meetings, transcripts, commitments

### Success Metric
Extract 3+ commitments from a 30-minute meeting with >80% accuracy.

### Not Yet
Execution, trust, voice signals, prep briefs — none of that yet.

---

## Phase 1: Extraction + Manual Execution (Week 3-4)

### Goal
Reliable extraction with user confirmation. Manual execution via UI buttons.

### Build
- [ ] Commitment confirmation UI (approve / edit / reject per item)
- [ ] Verb vocabulary system (create, send, schedule, update, draft, review)
- [ ] Assignee detection from speaker diarization
- [ ] Meeting history storage and retrieval
- [ ] Basic execution log (what was confirmed, what was rejected)
- [ ] User authentication (Clerk or Auth0)

### Success Metric
85%+ extraction accuracy. User confirms 4 out of 5 commitments without editing.

### Not Yet
Tool integration, auto-execution, trust model.

---

## Phase 2: Tool Execution (Week 5-8)

### Goal
Actually create tickets, send messages, and schedule meetings.

### Build
- [ ] Linear integration (create issue, assign, set priority)
- [ ] Slack integration (send message to channel)
- [ ] Google Calendar integration (create event, check availability)
- [ ] Execution receipt system (what was done, when, where)
- [ ] Rollback support (undo a single action)
- [ ] Confidence scoring (high / medium / low per commitment)
- [ ] Clarification flow for low-confidence items

### Success Metric
4 commitments extracted from a meeting → 4 actions executed across tools within 5 minutes of meeting end.

### Not Yet
Auto-execution, trust accumulation, voice signals.

---

## Phase 3: Trust Model (Week 9-12)

### Goal
Earned autonomy — the system learns when to auto-execute and when to ask.

### Build
- [ ] Per-tool trust tracking (actions, edits, rollbacks)
- [ ] Trust levels: manual → needs_confirm → auto_execute
- [ ] Trust regression on rollbacks
- [ ] Trust progression thresholds
- [ ] User-facing trust dashboard (earned autonomy screen)
- [ ] Permission toggles per tool
- [ ] Salesforce integration
- [ ] Gmail integration

### Success Metric
After 30 days of usage, high-trust tools auto-execute with <5% edit rate. Calendar requires confirmation due to 1 rollback.

### Not Yet
Voice signals, meeting steering, relationship strategy.

---

## Phase 4: Voice Intelligence (Week 13-16)

### Goal
Voice signal analysis that changes execution behavior.

### Build
- [ ] Conviction detection model (fine-tuned on commitment utterances)
- [ ] Hesitation detection model (filler words, pauses, pitch changes)
- [ ] Voice signals → confidence score adjustment
- [ ] Prep brief generation (what matters, what they care about, what to say)
- [ ] Relationship data model (touchpoints, health score, last contact)
- [ ] Person profile pages
- [ ] Morning/evening briefing generation

### Success Metric
Voice signals correctly adjust confidence in 80%+ of ambiguous cases. Prep briefs rated "useful" by 90%+ of users.

### Not Yet
Meeting steering, contradiction detection, operating cadence.

---

## Phase 5: Meeting Steering (Week 17-20)

### Goal
Real-time structural guidance during meetings.

### Build
- [ ] Meeting goal tracking (explicit vs implicit)
- [ ] Owner detection (assigned vs unassigned action items)
- [ ] Deadline specificity scoring
- [ ] Time allocation tracking (status vs decisions vs blockers)
- [ ] Steering alert system (no owner, vague deadline, drift, wrong stakeholders)
- [ ] Suggested lines for the user to say
- [ ] Intervention mode selector (silent / standard / high-touch)
- [ ] Meeting quality scoring (5 criteria, real-time update)

### Success Metric
Steering nudges lead to owner assignment in 80%+ of flagged cases. Meeting quality scores improve by 10+ points over 4 weeks.

### Not Yet
Contradiction detection, change tracking, operating cadence.

---

## Phase 6: Organizational Intelligence (Week 21-26)

### Goal
Cross-meeting memory that compounds over time.

### Build
- [ ] Change detection across meetings (stance shifts, priority drift)
- [ ] Contradiction detection (structured claim comparison)
- [ ] Decision expiry tracking
- [ ] Commitment attribution graph (suggested by, committed by, can block)
- [ ] Dependency mapping between commitments
- [ ] Relationship strategy objects (response preferences, negative patterns)
- [ ] Operator notes system (fact / strategy / tactic / rule)
- [ ] Cross-artifact intelligence (meeting data → CRM → email → calendar)
- [ ] Weekly digest generation
- [ ] Pattern detection (execution patterns, slippage patterns)

### Success Metric
System detects 2+ contradictions per month that users confirm were real. Relationship strategy notes influence 50%+ of prep briefs.

### Not Yet
Mobile app, team features, operating cadence automation.

---

## Phase 7: Operating Cadence + Mobile (Week 27-32)

### Goal
Automated operating rhythms and mobile voice capture.

### Build
- [ ] Recurring commitment detection
- [ ] Operating cadence automation (weekly investor update, sprint review)
- [ ] Mobile app (iOS) with voice capture
- [ ] Mobile → desktop handoff
- [ ] Real-time mobile intel during meetings
- [ ] Ambient mode (menu bar widget, notifications)
- [ ] Style learning (communication tone, working patterns)

### Success Metric
3+ automated rhythms running without manual intervention. Mobile capture → desktop execution in <30 seconds.

---

## Phase 8: Scale + Team (Week 33+)

### Goal
Multi-user support and team features.

### Build
- [ ] Multi-user accounts with shared trust model
- [ ] Team execution dashboard
- [ ] Delegation tracking
- [ ] Team admin and permissions
- [ ] Shared relationship data
- [ ] Institutional memory / continuity features
- [ ] Onboarding flow for new team members
- [ ] Billing and subscription management

### Success Metric
Team of 4 using Okaeri for all meetings with 95%+ execution rate across the team.

---

## Key Technical Risks

| Risk | Mitigation | Phase |
|------|------------|-------|
| Extraction accuracy too low | Fine-tune on user corrections, build feedback loop | 1-2 |
| Diarization fails with >4 speakers | Limit to 4 speakers initially, improve later | 0-1 |
| Voice signal model unreliable | Start with hesitation only (highest signal), add conviction later | 4 |
| Tool API rate limits | Queue with backoff, batch where possible | 2-3 |
| Latency too high for real-time | Use Deepgram for live, Whisper for batch re-processing | 0 |
| Trust model feels arbitrary | Show all evidence, let users see and override every decision | 3 |
| Privacy concerns block adoption | Delete voice in 24h, explicit consent, full data control | 0+ |

---

## Success Metrics by Phase

| Phase | Metric | Target |
|-------|--------|--------|
| 0 | Extraction accuracy | >80% |
| 1 | User confirmation rate | >85% |
| 2 | End-to-end execution time | <5 min |
| 3 | Auto-execute edit rate | <5% |
| 4 | Confidence adjustment accuracy | >80% |
| 5 | Steering-driven owner assignment | >80% |
| 6 | Contradiction detection precision | >70% |
| 7 | Automated rhythm reliability | >95% |
| 8 | Team execution rate | >95% |
