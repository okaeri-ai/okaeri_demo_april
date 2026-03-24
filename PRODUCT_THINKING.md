# Okaeri — Product Thinking

Key decisions and insights that shaped the product, captured during the prototype build process. This is the thinking behind the features — the conversations, reviews, and iterations that led to the current design.

---

## The Core Insight

**The gap isn't information. It's execution.**

Every meeting tool captures what was said. None of them reliably turn it into what gets done. The handoff from conversation to action is where 40% of commitments die.

Okaeri exists to close that gap. Not with more notes, but with actual execution across real tools — earned through trust, not assumed.

---

## Key Product Decisions

### 1. Command Surface, Not Dashboard

**Before:** The home screen showed stats — 31 executed, 2 pending, 97% rate.
**After:** The home screen shows one dominant action card with a consequence line.
**Why we changed:** A reviewer pointed out: "The home screen is competent, but not indispensable. It shows activity, not judgment." The test became: open for 10 seconds, know what to do next.
**Lesson:** Stats are for reporting. Judgment is for operating.

### 2. Voice Signals Are the Moat

**Before:** The live meeting showed transcript + extraction (same as competitors).
**After:** Voice signals show conviction, hesitation, tension — each with an operational consequence.
**Why it matters:** Text tools can extract "James said next week." Only voice analysis can detect that he hesitated before saying it. Hesitation → lower confidence → needs confirmation instead of auto-execute. That's the product.
**Lesson:** The moat isn't what you extract. It's what you know about HOW it was said.

### 3. The Correction Flow Is More Important Than the Happy Path

**Before:** All 4 commitment cards executed cleanly.
**After:** One card is deliberately uncertain. Okaeri asks for clarification instead of guessing.
**Why we changed:** A reviewer said: "Show a bad case. One screen where Okaeri extracts something wrong, asks a tight clarification, learns, and gets better. That increases credibility more than another happy-path screen."
**Lesson:** Showing imperfection with graceful handling builds more trust than showing perfection.

### 4. Restraint Is the Product

**Before:** Okaeri surfaced every insight it detected during meetings.
**After:** 72% of potential interventions are held back.
**Why:** A reviewer asked: "What makes Okaeri different from a noisy AI?" The answer: knowing when NOT to speak. The intervention philosophy has 5 rules, starting with "never interrupt a commitment being made."
**Lesson:** Value per intervention matters more than intervention count.

### 5. Trust Must Be Earned AND Visible

**Before:** Autonomy levels were labels (1-5) without evidence.
**After:** Per-domain trust scores with actions/edits/rollbacks, plus a real rollback story.
**Why we changed:** A reviewer noted: "The trust story is present but not proved." Labels without data are decorative. Showing "Calendar: 12 actions, 1 rollback → needs confirm" and a specific rollback timeline makes trust legible.
**Lesson:** Don't label trust. Prove it.

### 6. Contradictions Are the Killer Feature

**Insight:** Most decisions are treated as permanent but aren't. "Wait on outreach until metrics improve" was smart 6 weeks ago. Metrics improved. Nobody revisited the decision.
**Why it's powerful:** No human can track stance shifts across 10 meetings. Okaeri can say: "This position changed without acknowledgment. Is it intentional?"
**Design choice:** Frame as clarification, not accusation. 4 resolution paths: replaces old, both true in context, unresolved, dismiss.
**Lesson:** Organizational coherence is a product, not a feature.

### 7. Relationship Strategy, Not Just Health

**Before:** "Alex Chen — 11 days, cooling."
**After:** "Alex responds to direct asks with technical proof. Don't send a generic follow-up. Wait for the bug fix, then send proof-of-progress."
**Why:** Status tells you what happened. Strategy tells you what to do about it. Operator notes (fact/strategy/tactic/avoid) shape every future interaction.
**Lesson:** The shift from status to playbook is what makes the system feel like a chief of staff.

### 8. Voice-First Means the Dashboard Is Secondary

**Insight:** The strongest version of Okaeri has 3 layers: memory you speak into, guidance you hear, behavior that adapts. The dashboard exists for exploration, not as the primary interface.
**Implication:** Pre-meeting briefs should be heard, not read. Post-meeting debriefs should be spoken, not typed. Corrections should be conversational, not form-based.
**Lesson:** If it can be heard, don't make them read it.

### 9. Meeting Steering > Meeting Notes

**Insight from a reviewer:** "Meeting notes answer: what was said. Meeting steering answers: what is not happening that needs to happen before this meeting ends."
**The 5 detectors:** no explicit owner, no explicit deadline, no decision after prolonged discussion, wrong stakeholder missing, too much time on status.
**Why it's differentiated:** Most tools summarize afterward. Steering changes the outcome before the meeting ends. That's the jump from memory to execution to live operational control.

### 10. The Prototype Is the Product Story

**Decision:** Build 79 screens instead of 15 polished ones.
**Why:** Breadth shows vision. Depth shows understanding. The reviewer said "it has a real point of view, which most prototypes don't." That point of view came from building every surface, not just the demo path.
**Lesson:** The prototype isn't a mockup. It's a product argument in interactive form.

---

## What We Learned From Reviews

### Review 1: "Concept atlas"
"The prototype still feels like a concept atlas. There are too many screens in the nav, so the wedge gets diluted."
**Response:** We kept all screens but narrowed the demo to 5. The sidebar collapses secondary sections. Breadth is available but doesn't compete with the core story.

### Review 2: "Prove trust, don't label it"
"I can see autonomy levels, but not why Okaeri earned them."
**Response:** Added per-domain evidence tables, rollback stories, trust regression, and "what unlocks next" progress bars.

### Review 3: "Voice advantage is asserted, not demonstrated"
"The live meeting screen mostly shows transcript extraction; it doesn't show what voice uniquely gives you."
**Response:** Added voice signals with operational consequences and meeting steering with intervention restraint.

### Review 4: "The strongest missing differentiators"
"Commitment attribution, change detection, real-time intervention with restraint."
**Response:** Built all three as full screens. Attribution graph, change detection with conviction tracking, and intervention philosophy with 72% hold-back rate.

### Review 5: "Shift from dashboards to behavior"
"Voice-native capture of strategy. Personal operating style learning. In-the-moment whisper guidance. Spoken memory retrieval."
**Response:** Built the complete voice-first loop: teach → brief → whisper → debrief → adapt.

---

## Open Questions

These are unresolved product questions that will be answered by real usage:

1. **How many whisper nudges before it gets annoying?** Current default is 2-3 per meeting. This may be too many or too few depending on meeting type and user personality.

2. **Should contradiction detection be always-on or opt-in?** Some users may not want to be told they changed their mind. Others will find it invaluable.

3. **How fast should trust accumulate?** Too slow and users get frustrated. Too fast and they don't trust the trust model itself.

4. **Is the 5-level autonomy model right?** Maybe 3 levels is enough. Maybe the levels should be per-tool only, not global.

5. **How do you handle meetings with people outside the organization?** External participants didn't consent to being profiled. What data is OK to store?

6. **When does Okaeri become too much?** There's a point where the system knows too much about your organization and the power dynamics become uncomfortable. Where is that line?

7. **Does voice-first actually win?** Maybe the dashboard IS the primary interface and voice is a secondary input. Real usage will tell.

---

## The Thesis, Restated

The company that owns the commitment graph — who said what, to whom, with what conviction, blocked by what, and whether it happened — owns the execution layer of every organization.

Notes capture information. Okaeri captures intent, tracks behavior, earns trust, and executes. That's the difference between a tool and an operating partner.
