# Okaeri Founder Articles

*By Jess Liu, CEO of Okaeri*

---

## The Execution Gap

Every company has a version of this story. The meeting ends. Everyone leaves aligned. Three weeks later, nothing moved.

I've lived it from both sides. As an operator, I've made commitments in rooms and watched them dissolve the moment I walked out. As someone trying to track what actually happened, I've stared at meeting notes and tried to reverse-engineer what anyone actually agreed to do.

The number we keep coming back to internally is 40%. Roughly four out of ten commitments made in meetings never get executed. Not failed — forgotten. They don't show up in a post-mortem. Nobody flags them as dropped. They just disappear into the space between the conversation and the calendar.

That gap has a name: the handoff.

The handoff from conversation to action is the single most broken moment in organizational execution. It's not a technology problem. It's a structural one. The tools we've built to capture meetings — notes, transcripts, summaries — are built around a single question: what was said? They do a decent job answering it. But that's the wrong question.

The right question is: what was committed?

There's a difference. Saying "we should probably reach out to that investor" is not a commitment. Saying "I'll send the deck by Friday" is. Notes don't distinguish between them. They can't, because they're designed to record language, not intent. They capture surface content. Commitments live underneath, in the moment someone signals they've taken ownership of an outcome.

That signal is almost never a clean declarative sentence. It's a shift in tone. It's someone stepping into a topic they've been avoiding. It's a hesitation before an agreement that tells you the agreement is real, not performative. It's a phrase like "I'll handle it" spoken with a certain weight.

Text tools miss all of that.

What gets lost in the handoff isn't just the task. It's the context — why the task matters, what depends on it, what was explicitly left open. A to-do item that says "follow up with Alex" is almost useless without knowing that Alex is skeptical of the technical approach, that the last three follow-ups went nowhere, and that the team agreed to wait for the bug fix before going back. The task is a skeleton. The context is everything.

The execution gap isn't a reminder problem. Sending more notifications doesn't fix it. The problem is that the systems we use to run organizations treat memory as optional. Every meeting starts from scratch. Every decision gets relitigated. Every relationship gets renegotiated because no one is holding the thread.

Someone in every high-functioning organization plays the role of the thread-holder. Usually it's a founder, a chief of staff, or an EA with twenty years of institutional knowledge. They're the ones who walk into a meeting already knowing what happened last time, what was left unresolved, and what the person across the table actually cares about. They notice when a commitment made three weeks ago is quietly contradicting something that was decided yesterday.

That person is impossible to scale.

The problem isn't that organizations lack ambition. It's that ambition moves faster than memory. Conversations accumulate commitments faster than any human system can track them. So commitments get dropped. Not because people are careless — because the infrastructure doesn't exist to hold them.

Okaeri exists because that infrastructure can be built. The execution gap is real, but it's not inevitable. When you have a system that's present in the moment a commitment is made — that understands not just what was said but what was meant — you can close the gap.

Forty percent is not a rounding error. It's the default operating loss of every organization that doesn't solve this. We're building to get it to zero.

---

## Why Earned Autonomy Is the Only Safe Way to Build AI That Acts

The debate around AI agents usually goes one of two ways. Either you trust the AI to act, or you don't. Either you give it access and let it run, or you keep a human in every loop.

That framing is wrong. It misses the thing that actually makes trust rational: history.

You don't trust a new employee with your most sensitive client relationships on day one. You give them small things. You watch what they do with them. When they get it right, you extend more. When they get it wrong, you pull back and understand why. Trust accumulates through evidence. That's not a soft organizational principle — it's the only epistemically sound way to decide who should act on your behalf.

AI should work the same way.

Okaeri's earned autonomy model starts every agent capability at zero trust. Not distrusted — zero. No history means no permission to act independently. The agent can observe, can flag, can recommend. It cannot execute. That permission has to be earned, action by action, tool by tool.

Trust is per-tool, not per-agent. The fact that an agent has shown good judgment on email drafting tells you almost nothing about whether it should be allowed to reschedule meetings or commit spend. These are different domains with different stakes and different failure modes. Bundling them into a single trust score conflates what needs to stay separate.

Here's the calendar rollback story that clarified the design for me.

Early in testing, a version of the system scheduled a meeting on behalf of a user. The timing logic was sound. The context was correctly interpreted. The meeting was wrong. Not factually wrong — the slot was open, the attendees were right — but wrong in the sense that the user had an unstated preference about how they structured their mornings that the system had no way to know. The user corrected it. The meeting was moved.

A normal system would log this as a correction and move on. Ours paused calendar autonomy. Not permanently. The trust level for calendar actions regressed. The system went back to asking before scheduling until it had rebuilt a track record in that specific domain.

This is not overcorrection. It's the point.

If an AI agent can't lose trust, it never earned it. A system with no mechanism for trust regression isn't operating on earned autonomy — it's operating on assumed autonomy. The difference matters enormously when the stakes are high. An agent that schedules wrong is a minor inconvenience. An agent that commits your organization to something it shouldn't have, with no mechanism to account for the error, is a liability.

The architecture forces humility. The system has to demonstrate competence in each domain. It has to do it repeatedly. It has to do it across enough variation that the pattern is real, not coincidental. Only then does it earn the right to act without asking.

This is slower than giving the AI full access from day one. Deliberately so.

There's a version of AI execution tooling that will burn users by moving too fast — by assuming the initial setup or the demo performance is sufficient evidence to act on consequential decisions. That version will create incidents. Users will pull back. The category will get a bad reputation.

We're building the version that takes trust seriously as an engineering constraint, not a philosophical preference. Trust starts at zero. It accumulates per tool. It can regress. That's not a limitation of the system. It's the system working correctly.

---

## Voice Signals Are the Moat

I want to make a precise claim and defend it: the moat in AI execution is not the model. It's the signal.

Every AI tool being built in this space has access to roughly the same underlying models. The differentiation isn't in the architecture of the LLM. It's in what you're feeding into it. Text-based systems — note-takers, summarizers, task extractors — are working from a flat representation of what happened. They're processing transcripts. They're missing half the conversation.

The half they're missing is acoustic.

Hesitation predicts slippage. This is not a hypothesis — it's a pattern we've validated across enough meetings to treat as operationally reliable. When someone agrees to a commitment but there's a 400-millisecond pause before they do, that pause is data. It signals internal friction. That commitment is at elevated risk of not getting executed. A system that ignores the pause treats the agreement as equivalent to one made without hesitation. They are not equivalent.

Conviction predicts follow-through. The inverse is also true. When someone proposes a course of action with a certain vocal energy — a directness, a lack of hedging in the acoustic signal even when the words themselves are qualified — that's a different commitment than one delivered in the same words with trailing uncertainty. The words might be identical. The meaning isn't.

These signals change how we handle execution. A commitment made with hesitation gets earlier follow-up, softer framing, a check-in before the deadline rather than a reminder on the deadline. A commitment made with conviction gets space. The system backs off and trusts the person to follow through. That differentiation is the product.

Text tools cannot do this. Not because of a gap in their prompting or their reasoning — because they don't have the signal. You cannot reconstruct acoustic hesitation from a transcript. The transcript already has the hesitation stripped out. "I'll handle it" looks the same whether it was said with total ownership or with audible ambivalence.

This is an architectural moat, not an algorithmic one.

An algorithmic moat can be closed. Someone can train a better model, write a better prompt, add a better reasoning layer. Architectural moats require a different kind of effort to replicate — you have to rebuild the foundation, not improve the application on top of it. A competitor that wants the acoustic signal has to instrument the meeting, process the audio, build the acoustic feature extraction, validate the signal against real outcomes, and integrate it into their execution engine. That's not a sprint. That's a platform.

We have a head start on the platform.

There are five acoustic features we currently track in active use: hesitation duration, pace variance during commitment statements, pitch consistency (specifically pitch drops that signal conviction), volume normalization anomalies that correlate with discomfort, and something we internally call trailing uncertainty — the acoustic equivalent of an ellipsis after a declarative statement. These five features alone change the execution behavior of the system in meaningful ways.

We're not publishing the exact weighting. Not because it's secret science — because the weighting is the work. The signal is public knowledge in the academic sense. The calibrated, production-validated, operationally integrated version is not.

Voice is where the conversation actually happens. It's where the commitment gets made. It's where the relationship is built or damaged. Every tool that ignores it is reading summaries of the real thing. We're reading the real thing.

---

## What a Chief of Staff Actually Does

Most people who haven't worked closely with a great chief of staff think the job is scheduling. It isn't. Scheduling is the least interesting part, and it's the part most easily automated by calendar software that already exists.

Here's what the job actually is.

A chief of staff holds context that nobody else in the organization holds in one place. They know that the investor who's coming in next week once said they'd only re-engage if you showed them enterprise traction, and that you have the number now but the relationship has been cold for six months and going in with a deck is the wrong move — you need to warm it first. They know that the head of engineering made a decision three quarters ago that contradicted something the CEO said publicly, and that it was papered over but never actually resolved, and that it's going to resurface when the roadmap meeting happens next month. They know that Alex is going to push back on the timeline not because the timeline is wrong but because Alex doesn't trust the estimation process, and that the way to handle Alex is to let him run his own numbers before you present yours.

That's not administration. That's judgment built on memory.

The chief of staff is the person who walks into every meeting already knowing what matters — not just the agenda item, but the layer underneath the agenda item. They're the one who catches contradictions before they become public conflicts. They're the one who knows which relationships need maintenance and which ones need to be left alone. They're the one who remembers what was decided, not just what was said.

Most organizations can't afford a great chief of staff. And even the organizations that can afford one can't scale them. One person can hold context for maybe a dozen critical relationships and a few dozen ongoing decisions. An organization of any real complexity generates more than that in a week.

The insight behind Okaeri is that this role is learnable by a system that's actually present. Not a system that reads summaries after the fact — a system that's in the room, processing what's happening in real time, building a model of the relationships and decisions and commitments as they accumulate.

The learning doesn't happen from transcripts. It happens from presence. Being present in the moment Alex hesitates before agreeing to a timeline tells you something that no post-meeting summary will ever capture. Being present in the room when the CEO and the head of engineering talk past each other on a technical point lets you flag the contradiction before it becomes a problem.

A human chief of staff can be present in the meetings that matter. A system can be present in all of them.

What we're building is not a scheduler or a note-taker or a task manager. It's a presence that accumulates the context a great chief of staff would accumulate — relationship by relationship, decision by decision, commitment by commitment — and then makes that context operationally useful in the moments when it matters.

The best chiefs of staff I've seen don't react to what's happening. They steer it, gently, from a position of knowing more than everyone else in the room. That's the target. Judgment built on memory. Presence as a structural advantage.

---

## Restraint Is the Product

The thing people don't expect when they see Okaeri in action is how much it doesn't do.

Seventy-two percent of the interventions the system identifies as possible, it holds back. You don't see the flag it almost raised. You don't see the summary it decided not to send. You don't see the recommendation it had and chose not to make.

That's the product.

There's a version of AI assistance that optimizes for visible helpfulness. It surfaces everything it notices. It sends the notification when it detects something. It flags, reminds, summarizes, suggests — constantly. That version of AI is a different kind of cognitive load. It's not managing your attention, it's competing for it.

We made a different choice early in the design process. The question isn't "should I surface this?" The question is "will surfacing this change the outcome?" If the answer is no — if what the system wants to flag would be noted and ignored, or if the moment for action has already passed, or if the insight is interesting but not actionable right now — the right answer is silence.

This required actual rules. Not aspirations. Rules with teeth.

Rule one: never interrupt a commitment being made. If someone is in the middle of taking ownership of an outcome, the system waits. Interrupting that moment — even with something useful — disrupts the decision in progress. The disruption cost is always higher than the information value.

Rule two: never send a status update during active execution. If the person is in the meeting, doing the work, making the call — they don't need a summary of what they're doing while they're doing it. That's noise dressed as helpfulness.

Rule three: if the recommendation requires context the person doesn't currently have access to, hold it. A recommendation they can't act on isn't a recommendation. It's a distraction.

Rule four: when in doubt about urgency, resolve toward later. Most things that feel urgent from the system's perspective are not urgent from the user's perspective. The asymmetry between false urgency interruptions and slightly delayed useful ones always resolves in favor of delayed.

Rule five: measure by outcomes changed, not by interventions made. This is the discipline that holds everything else together. If you're measuring how often the system surfaces insights, you're incentivizing noise. If you're measuring whether the outcomes improved, you're incentivizing restraint.

The minimalism in the interface reflects this philosophy. The visual design has almost no weight — thin lines, light typography, no filled buttons, no aggressive color. Every element earns its presence. The UI doesn't perform activity. It reports reality.

The same principle runs the intervention logic. The system doesn't perform helpfulness. It earns presence by being useful when it's useful and invisible when it isn't.

Most AI tools are built to be demonstrably active. The demo shows the notifications firing, the summaries generating, the flags appearing. That's legible. It looks like the product is working.

Our demo looks quieter. The value is in what didn't interrupt you. That's harder to show and harder to explain. We're betting that when people live with it, they understand the difference — and that they can't go back to the noisy version.

Restraint is not a feature. It's the design principle that every other feature is built around.

---

## Relationship Strategy, Not Relationship Management

There's a category of software that promises to help you manage your professional relationships. CRMs, contact enrichment tools, relationship intelligence platforms. They all converge on the same output: a status. Last contacted 11 days ago. Engagement score: medium. Sentiment: neutral.

That's not strategy. That's accounting.

"Last contacted 11 days ago" tells you nothing about whether you should reach out today. It tells you a number. The number has no operational value without context. If you reached out 11 days ago and got a warm response, reach out again. If you reached out 11 days ago with a big ask and got a polite no, the 11 days is irrelevant — what matters is that you asked too soon and the timing was wrong and you need to wait for conditions to change.

The conditions, not the calendar, are the strategy.

Here's what useful relationship context actually looks like. Alex is the technical decision-maker at a company you've been talking to. He doesn't respond well to high-level pitches — if you come in with a concept, he'll say he needs to see it working. He responds to direct asks that include technical specifics. The last interaction went sideways because you came in before the bug he's been dealing with was resolved, and he was distracted and defensive. The right move right now is to wait for the fix to ship, confirm it shipped, then reach out with a concrete technical question that lets him demonstrate his knowledge. That sequence has a high probability of working. Going in with another deck does not.

That's a playbook. It's built from signal — from what you know about how this specific person operates, what they're dealing with right now, and what your history with them suggests about what works. It's not generic relationship advice. It's strategy for this person, at this moment, given everything you know.

Status tells you what happened. Playbooks tell you what to do.

The difference in output is significant. A system that gives you status surfaces a number and leaves the strategy to you. A system that gives you playbooks has already done the reasoning — it's telling you not just where you stand but what move makes sense and why.

Sometimes the playbook is wait. This is undervalued. Most relationship management tools create implicit pressure to keep contact cadences active. The dashboard shows lapsing relationships and flags them as at-risk. But some relationships are best served by patience. You've asked for something. The answer is coming. Reaching out again before it arrives signals anxiety, not interest. The system should know when the right move is to do nothing.

The relationships that matter most in any organization aren't managed through contact frequency. They're managed through judgment — knowing what the person cares about, what they're dealing with, what they need from you, and when the moment is right. That judgment is learnable from signal. It requires presence: being in the conversations where the signal is generated, not just reading summaries of what was said.

Okaeri's relationship layer is built around playbooks, not status. For every significant relationship, the system builds a model: communication style, decision-making triggers, current context, history of asks and responses, what works and what doesn't. The output is not a dashboard of contact hygiene. The output is a recommended next move — and when the recommended next move is wait, the system says wait.

Relationship management is about not losing track. Relationship strategy is about knowing what to do with what you know.

---

## Meeting Steering: From Memory to Live Operational Control

Every meeting tool is built to answer the same question: what happened?

Record it. Transcribe it. Summarize it. Extract the action items. Send the recap. The entire category serves memory. You end the meeting, and the tool helps you remember it.

That's useful. It's also entirely backward-looking.

The question that matters most is forward-looking: what needs to happen before this meeting ends?

There's a window. It opens when the meeting starts and closes when the last person leaves. Inside that window, things can be steered — commitments can be made explicit before they become implicit, contradictions can be surfaced before they become assumptions, decisions can be clarified before they calcify into two different versions of what was agreed. After the window closes, all you can do is follow up on the wreckage.

Most tools help after. We help during.

Meeting steering requires detecting what's actually happening in real time, not summarizing it later. Okaeri runs five detectors in live meetings.

The commitment detector identifies when someone is taking ownership of an outcome. It distinguishes between "we should do this" and "I'll do this" — not just lexically, but via the acoustic and contextual signals that separate genuine ownership from social agreement.

The contradiction detector tracks what's been stated against what's being said now. If a decision was made earlier in the meeting — or in a previous meeting — and something being said now contradicts it, the system flags it. Not loudly. The flag is quiet, held for the right moment. But it's held, not dropped.

The alignment gap detector identifies when two people in a meeting are agreeing on words but not on meaning. This happens constantly. "We'll move fast on this" means different things to different people in every room it's said. The system watches for the gap.

The drift detector tracks whether the meeting is moving toward a decision or circling. Circling has a pattern — the same ground gets covered multiple times, the energy stays high, but nothing closes. When the pattern appears, the system surfaces a steering option.

The closure detector identifies when a meeting is ending without resolution on something that was raised. The window is closing. If something important was opened and not closed, this is the last moment to close it.

None of this replaces human judgment in the room. The steering isn't autonomous. It's operational intelligence surfaced at the moment it's actionable. The person in the meeting decides what to do with it. The system's job is to make sure they have the right information before the window closes.

The after-meeting tools are not going away. Memory is valuable. But organizations lose the most in the gap between what was actually committed and what people remember was committed. That gap is closed inside the window, not after it.

---

## Designing for Weight 200

The product runs on Noto Sans JP at weight 200.

That's not a small choice. Weight 200 is the second-lightest variant of the typeface. It has almost no visual mass. At normal reading sizes, individual letterforms are thin enough that the space around each character becomes as present as the character itself. The text doesn't push. It rests.

This was a deliberate decision made early and defended against pressure to go heavier. The argument for heavier was legibility, authority, the visual confidence of something that looked substantial. The argument for lighter was that we're building a tool that operates in moments of high cognitive load — active meetings, critical decisions, contexts where the user's attention is already fully committed — and a tool that pushes in those moments is working against the user.

The design philosophy is this: every pixel that isn't there is a decision.

The borders in the interface are 0.5 pixels. Half a pixel. On modern displays, that renders as a line so fine it's almost a suggestion. The border announces itself only when you look for it. It doesn't announce itself while you're reading.

There are no filled buttons in the primary interface. Filled buttons signal urgency. They say: press me. That signal is appropriate for checkout flows, form submissions, destructive actions that need confirmation. It's inappropriate for an interface that's trying not to compete with your attention. The buttons in Okaeri exist. They don't perform existence.

Letter-spacing is wide throughout. This is uncommon in modern product design, which has trended toward tighter tracking for density. Wide spacing slows the eye slightly. It makes the reading experience slightly more deliberate. For an interface that's surfacing information in high-stakes moments, deliberate reading is better than fast scanning. You should read the thing the system is showing you. It should be worth reading.

The background is nearly white. The text is not fully black. The contrast is high enough for legibility and low enough that the interface doesn't feel like it's competing with the room.

None of this is aesthetic minimalism in the sense of minimalism as a style choice. Every trend cycles. If the design were minimal because minimal is what's in, it would age badly and read as dated in five years. The design is minimal because the constraint is real: this product needs to be present without being present. It needs to surface information without surfacing itself.

A tool that competes for your attention in the middle of a meeting has already failed its core design requirement. The interface should recede. The information should arrive. You should be able to act on it and return your attention to the room without the act of consulting the tool being noticeable to anyone watching.

That level of visual restraint requires choices that feel extreme at the component level. Weight 200 feels too light when you see it in isolation. 0.5px borders feel invisible on a component card. Wide letter-spacing feels like a mistake when you first apply it to body copy.

Together, they produce an interface that operates at the edge of perception. You can see it. You don't feel seen by it. That's the design target, and it's much harder to achieve than it looks.

---

## The Commitment Graph

Behind every organization's execution layer is a graph that nobody has built yet.

The nodes are commitments. Not tasks — commitments. Tasks are declared by systems. Commitments are made by people, in specific moments, with varying degrees of conviction, in the context of specific relationships and decisions. They're not the same thing, and treating them as the same thing is the error every task management system makes.

The edges in the graph are relationships between commitments: who made them, what they're blocked by, what they contradict, what they depend on. A commitment made by the CTO to ship a feature by end of quarter depends on a commitment made by a vendor three weeks ago to deliver an API integration. If the vendor commitment slips, the CTO commitment is at risk — and the person who needs to know that probably doesn't, because the two commitments were made in different meetings, logged in different systems, and nobody is holding the thread between them.

The commitment graph holds the thread.

Four attributes matter for every commitment in the graph. Attribution: who made this commitment, in what context, to whom. Conviction: how firm was it — was this a clear ownership statement or a soft "I'll try to"? Was the acoustic signal consistent with the verbal signal, or was there hesitation? Dependencies: what does this commitment require in order to complete, and which of those requirements are themselves commitments by other people? Status: did it happen, and if not, why not — was it blocked, was it deprioritized, was it forgotten, was it made obsolete by a subsequent decision?

The fifth dimension of the graph is contradiction. Commitments contradict each other constantly. Someone commits to a scope in a customer meeting and commits to a different scope in an internal planning meeting. Someone commits to a timeline to an investor and commits to a different timeline to the team. These contradictions are usually invisible until they're catastrophic. The graph surfaces them early.

The company that owns this graph owns the execution layer.

This is not hyperbole. Right now, the execution layer of every organization lives in fragmented pieces: some in project management tools, some in email, some in calendar, some in meeting notes, most in the memory of whoever happened to be in the room. The fragmentation means no one has a complete picture. No one can see the contradiction between two commitments made in different contexts. No one can trace the dependency chain from a missed commitment to its downstream effects.

A connected commitment graph changes the operational capability of an organization. You can ask: what is at risk right now, and why? You can trace the answer through the graph. You can see that three commitments are blocking a fourth, that one of the three has a conviction score that suggests it's at risk, that the person who made it has a pattern of hesitation before ownership statements that historically correlates with slippage.

You can act before the slippage, not after.

The graph is the thing we're actually building. The interface, the voice analysis, the meeting steering — those are the data collection. The graph is the asset. Every meeting Okaeri is present in, every commitment it tracks, every conviction signal it reads, every dependency it maps — all of it accumulates into the graph.

Over time, the graph becomes the organizational memory. Not the memory of what was said, but the memory of what was meant, what was committed, what was followed through, and what wasn't.

That's the execution layer. We're building it.

---

## What Your Organization Forgets When the Founder Steps Away

What breaks when the founder steps away from the day-to-day isn't the tasks. Someone else will run the standup. Someone else will manage the roadmap. The operational surface area — meetings, decisions, shipping — continues.

What breaks is context.

Context is not documented anywhere because it was never meant to need documentation. It lives in the founder's understanding of the relationships, the history, the unstated agreements, the things that were decided without being announced. It's the information that explains why the organization is doing what it's doing, not just what it's doing.

Here's what that looks like in practice. There's an investor who is supportive but cautious, and the last conversation left an implicit condition: they want to see three months of enterprise retention before the next check-in. The founder knows this. It shapes how the team thinks about the current quarter. When the founder steps away, nobody briefs the new point person on the condition — because it was never written down. It was a read from a conversation. The next call with that investor lands wrong because nobody in the room understood the implicit bar.

There's a decision that was made six months ago about a product direction. It was made under constraints that have since changed. The team is executing on the original decision without knowing the constraints changed, because the founder was holding the thread between the original reasoning and the current situation. When the founder steps away, the thread breaks. The team does work that the founder would have immediately recognized as obsolete.

There's a reason you're waiting on Alex that has nothing to do with Alex's timeline. It's because your last ask came too fast after a previous one, and the relationship needs space, and the founder knows to wait. Nobody else knows to wait. Someone reaches out. The relationship gets harder.

These are not edge cases. They are the normal operating conditions of any organization that has grown faster than its documentation. Which is almost all of them.

Okaeri's continuity coverage metric is 78%. That number represents the proportion of critical operational context that remains accessible when the primary holder of that context is unavailable. It's a coverage floor, not a ceiling — the goal is to get it higher.

The way you get it higher is by being present when the context is created. Not by asking people to write things down after the fact. Post-hoc documentation captures the surface, not the meaning. The investor meeting recap says "discussed Q3 metrics." It doesn't say "investor signaled implicit retention condition." The nuance that matters is the nuance that doesn't get written down, because to the person who understood it, it felt like the obvious interpretation of what happened.

A system that's present in the room when the investor signals the condition captures it at the moment it's created. It becomes part of the graph — this relationship, this condition, this context that shapes what happens next.

The difference between 78% continuity coverage and the default, which is closer to 30%, is the difference between an organization that runs without the founder and one that gradually loses coherence until the founder returns to debug the drift.

Founders are not bottlenecks because they want to be. They're bottlenecks because the context lives with them and nowhere else. The solution isn't better documentation practices. It's infrastructure that captures context as a byproduct of presence — so that when the founder steps away, the memory doesn't go with them.
