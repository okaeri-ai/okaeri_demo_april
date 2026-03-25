# Okaeri — Pitch Deck Notes

Talk track for the interactive prototype demo. Each section maps to a specific screen. Total runtime: 8-10 minutes for the full pitch, 4-5 minutes for the compressed version.

---

## Opening (30 seconds)

**Screen:** d00-intro

"Every meeting produces commitments. Follow up with Sarah. Create the bug ticket. Schedule the call. Update the deal stage. And about 40% of them never happen. Not because people are lazy — because the handoff from conversation to action is broken. Notes don't close tickets. Okaeri does."

**Click:** "explore the prototype" or "watch the demo"

---

## The Home Screen (45 seconds)

**Screen:** d01-home

"This is what Okaeri looks like when you open it. It's not a dashboard — it's a command surface. It tells you the one thing you need to do right now."

**Point to:**
- The dominant card: "Send materials to Sequoia before the 10am meeting"
- "This isn't 'you have 2 pending items.' This is 'this specific thing matters most, here's why, and here's the button to do it.'"
- The "also watching" items: "Everything else is tracked but doesn't need your attention yet."
- The "if you do nothing" line: "And this is what happens if you ignore it."

---

## Prep Brief (60 seconds)

**Screen:** d08-prep-brief

"Before every meeting, Okaeri builds a prep brief. Not generic notes — it's structured around four questions: what matters, what they care about, what to say, and what not to miss."

**Point to:**
- The "what matters" section with provenance tags: "Every claim has a source. This isn't hallucinated — it's grounded in your Gmail, Slack, and LinkedIn data."
- The person columns: "For each person in the meeting, Okaeri tells you what they care about and what to avoid."
- The pinned guidance: "This is an operator note I saved by voice: 'Sarah backs technical founders.' Okaeri uses it in every prep, every draft, every suggestion."
- The recommended opening and likely objection: "It even suggests how to start and what pushback to expect."

---

## Live Meeting (90 seconds — the core demo moment)

**Screen:** d03-live-meeting

"This is where it gets interesting. During the meeting, Okaeri does three things."

**Point to the transcript:** "First, it transcribes and extracts commitments in real time."

**Wait for Marcus to type, notes to appear.**

**Point to voice signals:** "Second — and this is the moat — it reads voice signals that text tools can't capture. Conviction, hesitation, tension. And each signal has a consequence. Hesitation means lower confidence. Lower confidence means the system won't auto-execute."

**Point to the steering rail:** "Third, it steers the meeting. Right now it's flagging: no explicit owner for the API follow-up. And it's suggesting exactly what to say: 'Who owns this by Friday?'"

"The key is restraint. 72% of potential interventions are held back. It only speaks up when the meeting has a structural problem."

**If they ask about CRM:** "Okaeri isn't replacing Salesforce — it's making it accurate without the data entry. Meeting insights flow into your CRM automatically. Deal stages update based on what was actually committed. Your CRM stays the system of record. Okaeri is the intelligence layer."

**If they ask about repeatable workflows:** "We have operating playbooks — structured workflows for fundraise closes, partner onboarding, sprint planning. They're not generic templates. They adapt based on your team's capacity, your operating history, and relationship context."

---

## Confirm & Execute (60 seconds)

**Screen:** d04-confirm-execute

"After the meeting, Okaeri shows what it extracted — but organized by confidence. These two are high confidence, auto-executable. This one is medium — James hesitated, so Okaeri flags it. And this one is uncertain."

**Point to c4 (uncertain card):** "Here, Okaeri isn't sure if it's 'proposal sent' or 'proposal reviewed.' Instead of guessing, it asks. One tap to clarify, and the plan updates. Trust adjusts."

**Click execute all, watch the cascade.**

"145 milliseconds between each action. Real execution across Linear, Slack, Calendar, Salesforce."

---

## All Clear (45 seconds)

**Screen:** d05-all-clear

"This isn't just 'done.' It shows what changed. Memory updated — Okaeri now knows Marcus owns the rate limit bug. Relationships updated — Sarah is strong, Alex is cooling. And trust adjusted — Linear gets +1 confirmed action, Salesforce gets recalibrated after the correction."

"And at the bottom: 'Next thing Okaeri will watch for.' It's already thinking about what might slip."

---

## The Trust Model (60 seconds)

**Screen:** d36-earned-autonomy

"The whole system runs on earned autonomy. Trust isn't given — it's built action by action."

**Point to the per-domain table:** "Each tool has its own trust score. Linear: 20 actions, 1 edit, 0 rollbacks — auto-execute. Calendar: 12 actions but 1 rollback — needs confirmation."

**Point to the rollback case:** "This is the moment that proves it's real. Okaeri scheduled a meeting on Thursday. James couldn't do Thursday. Okaeri cancelled, rescheduled to Friday, and recorded a rollback. Calendar auto-execution is now paused until 5 successful confirms."

"Trust can go up. Trust can go down. That's what makes it earned."

---

## The Moat (60 seconds — for technical investors)

**Screen:** d46-attribution (or d47-change-detection)

"The moat isn't extraction — everyone can extract. The moat is four things:"

"One: commitment attribution. Not 'Marcus committed.' But 'Jess suggested, Marcus committed with high conviction, nobody can block, and he completes 92% of similar tickets.'"

"Two: change detection. We track how positions shift across meetings. 'You said enterprise-first on March 20. Today you're discussing PLG again. Is this intentional?'"

"Three: the intervention model. During meetings, we catch structural failures in real time. But we hold back 72% of potential nudges. Knowing when NOT to speak is harder than knowing when to speak. That's the product."

"Four: recovery workflows. When something slips — a commitment, a relationship, a deadline — Okaeri doesn't just flag it. It generates a structured recovery plan with prioritized steps. That's the difference between a monitoring tool and an operating system."

---

## The Ask (30 seconds)

"We're raising $2M pre-seed to build the production voice pipeline and onboard our first 10 design partners. Resonance is already active. The execution rate improvement is real: 60% baseline to 97% with Okaeri. That's 12+ hours per month of recovered founder judgment time."

"The prototype you just saw has 89 screens and demonstrates every feature I described — including operating playbooks, CRM integration, and recovery workflows. Happy to go deeper on any of them."

---

## Compressed Version (4-5 minutes)

If time is short, show only:
1. d00-intro (10 sec) — the line
2. d01-home (30 sec) — one action, not a dashboard
3. d03-live-meeting (90 sec) — voice signals + steering
4. d04-confirm-execute (45 sec) — confidence + correction
5. d36-earned-autonomy (45 sec) — trust model with evidence

Skip: prep brief, all clear, moat screens. Reference them verbally.

---

## Questions You'll Get

**"How is this different from Otter?"**
Otter captures transcripts. We close tickets. The commitment graph — who committed, with what conviction, blocked by what — is the differentiator.

**"What if the extraction is wrong?"**
That's the correction flow on d04. The system asks before acting on low-confidence items. Every correction makes future extraction better. Accuracy went from 84% to 96% in 30 days.

**"What about privacy?"**
Recording is explicit, never ambient. All participants are notified. Voice recordings are deleted within 24 hours. Full deletion available per-meeting, per-person, or total reset.

**"What's the technical architecture?"**
Whisper for speech-to-text, speaker diarization for attribution, structured claim extraction for the commitment graph, per-tool execution with confidence scoring.

**"Who's the customer?"**
Seed to Series A founders running 5-10 meetings per week. The person who says "I know I committed to something in that call but I can't remember what."
