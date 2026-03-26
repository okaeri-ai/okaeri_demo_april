# Okaeri — Technical Cofounder / CTO Brief

## The Company

Okaeri is a voice-first AI operating partner for founders and operators. It listens to meetings, learns how you operate — your relationships, your judgment, your communication style — and earns the right to act on your behalf.

We're pre-seed, raising $2M. One active design partner (Resonance). Sequoia second meeting confirmed. 96-screen interactive prototype demonstrating the full product vision.

## Why This Role Matters

The product's moat is technical. Voice signal analysis (conviction, hesitation, tension detection), the earned autonomy trust model, and the commitment graph are architecturally defensible — but only if they're built by someone who understands both the audio ML layer and the product execution layer. The CTO doesn't just build the product. The CTO IS the moat.

## What You'd Own

### Year 1: Build the Core

**Voice Pipeline (months 1-4)**
- Real-time speech-to-text with <2s latency (Deepgram for live, Whisper for batch)
- Speaker diarization for 2-6 person meetings (95%+ accuracy)
- Voice signal classifiers: conviction, hesitation, tension detection from prosody, pitch, speech rate, filler words
- Streaming audio processing over WebSockets
- This is the hardest and most defensible part. Getting voice signals right is the moat.

**Intelligence Layer (months 3-8)**
- Commitment extraction via LLM with structured output (verb, object, tool, assignee, confidence)
- Attribution graph: who suggested vs who committed vs who can block
- Confidence scoring that integrates voice signals with text analysis
- Change detection: structured claim comparison across meetings
- Contradiction detection with resolution paths

**Execution Layer (months 4-8)**
- Tool integrations: Linear, Slack, Google Calendar, Salesforce, Gmail
- Per-tool trust accumulation with regression on rollbacks
- Confidence-gated execution: auto-execute / needs confirm / manual only
- Rollback support with trust adjustment

**Memory Layer (months 6-10)**
- Relationship strategy objects (per-person playbooks from voice notes + interaction history)
- Operator notes: fact/strategy/tactic/rule classification from natural language
- Style learning: communication tone, working patterns, phrase preferences
- Cross-artifact intelligence: one meeting statement updates 7 surfaces

### Year 2: Scale and Deepen

- Meeting steering: real-time structural failure detection during live calls
- Operating playbooks: pattern detection → reusable executable sequences
- Mobile app (iOS): voice capture, briefs, whisper guidance
- Multi-user: shared trust model, team execution dashboard, delegation
- Enterprise readiness: SOC 2, data isolation, admin controls

## What We're Looking For

### Must Have

**Voice/Audio ML depth.** You've worked with speech-to-text, speaker diarization, or audio feature extraction. You understand prosody, pitch analysis, and how to train classifiers on acoustic features. You've built something that processes real-time audio — not just transcription, but signal extraction from how things are said.

**LLM product engineering.** You've shipped a product that uses LLMs for structured output, tool calling, or agent-style execution. Not chatbots — real systems where an LLM makes decisions that trigger actions with consequences. You understand prompt engineering, output parsing, confidence scoring, and safety constraints.

**Full-stack product instinct.** You can build the backend, wire the APIs, and make product decisions about what to ship first. You care about user experience, not just infrastructure. You've shipped something end-to-end.

### Strong Signals

- Worked at a speech/audio company: Deepgram, AssemblyAI, Hume AI, Speechmatics, Whisper team, Spotify audio ML
- Built voice-powered products (not just ASR — products that use voice as a primary interface)
- Experience with real-time systems: WebSockets, streaming, low-latency processing
- Shipped agent/tool-calling products with trust or safety constraints
- Comfortable with ambiguity: pre-seed means building the plane while flying it

### What We Don't Need

- Pure ML researcher who hasn't shipped product
- Generic full-stack engineer learning audio from scratch
- Someone whose AI experience is only chatbot/RAG
- Enterprise architect who overbuilds before PMF
- Someone who needs a 20-person team to move

## The Technical Bet

The voice signal layer is the bet. If we can reliably detect conviction, hesitation, and tension from meeting audio — and use those signals to modulate execution confidence — we have something no text-based tool can replicate. That's not a feature advantage. It's an architectural advantage. Competitors would need to rebuild their entire pipeline to access this signal.

The person who figures out how to train reliable voice signal classifiers on meeting audio IS the moat. Everything else (extraction, execution, integrations) is important but buildable. The voice signal layer is the hard problem that makes the company defensible.

## The Opportunity

This is a cofounder role, not a hired CTO position. Meaningful equity. You'd be building the technical foundation of a company that sits at the intersection of voice AI, organizational intelligence, and autonomous execution — a category that doesn't fully exist yet.

The prototype demonstrates 96 screens of product vision. The technical architecture is designed. The market is validated ($4.2B, competitors have $100M+ ARR but none execute). What's missing is the person who can build the voice pipeline that makes it all real.

## How It Works Day to Day

- Small team (4 people now, hiring eng #2 with the raise)
- Direct collaboration with the CEO on product decisions
- Ship weekly, not quarterly
- Design partners provide real meeting data from week 1
- You'd be writing code, not managing — at least for the first year
- Remote-friendly, SF-based

## Compensation

- Cofounder-level equity (negotiable based on stage of joining)
- Competitive salary for pre-seed (benchmarked to SF market)
- $2M raise gives 18+ months of runway

## The Prototype

See the full product vision in action: [okaeridemoapril.vercel.app](https://okaeridemoapril.vercel.app)

96 screens. Voice-first identity. Earned autonomy. Meeting steering. Relationship strategy. Operating playbooks. Everything described in this brief is prototyped and interactive.

## Contact

jess@okaeri.ai

---

*Okaeri means "welcome home" in Japanese. The product should feel like coming back to a system that already knows what you need.*
