# Okaeri — Technical Architecture

Production architecture for building the voice-first execution engine. This document goes deeper than the product vision into specific technical decisions, data models, and infrastructure.

---

## System Overview

```
Voice Input → Speech Pipeline → Intelligence Layer → Execution Layer → Tool Integrations
                                      ↕
                                Memory Layer
                                      ↕
                               Trust Engine
```

The system is event-driven. A spoken sentence in a meeting can trigger extraction, attribution, confidence scoring, execution, trust updates, and memory writes — all within seconds.

---

## Voice Pipeline

### Speech-to-Text
- **Primary:** OpenAI Whisper (large-v3) for accuracy
- **Fallback:** Deepgram Nova for speed (<500ms latency)
- **Decision:** Use Deepgram for real-time transcription during meetings, Whisper for post-meeting re-processing to improve accuracy
- **Language:** English only at launch

### Speaker Diarization
- **Tool:** pyannote.audio or Deepgram's built-in diarization
- **Purpose:** Attribute speech to specific speakers
- **Accuracy target:** 95%+ speaker identification in 4-person meetings
- **Limitation:** Degrades with >6 speakers or poor audio quality

### Voice Signal Analysis
- **Conviction detection:** Pitch stability, speaking rate, filler word absence
- **Hesitation detection:** Pauses before commitments, pitch rise, filler words ("um", "maybe", "I think")
- **Tension detection:** Topic shift markers, speaking rate changes, interruption patterns
- **Implementation:** Fine-tuned classifier on top of audio features extracted from Whisper encoder
- **Output:** Confidence score (0-1) per utterance, signal type, speaker attribution

### Real-Time Processing
- Target latency: <2 seconds from speech to on-screen extraction
- WebSocket connection between client and processing server
- Chunked audio streaming (250ms chunks)
- Incremental transcription with correction on final results

---

## Intelligence Layer

### Commitment Extraction
Structured claim parsing from natural language.

**Input:** "I'll create the rate limit bug ticket in Linear, P1, sprint 14"

**Output:**
```json
{
  "type": "commitment",
  "verb": "create",
  "object": "rate limit bug ticket",
  "tool": "linear",
  "metadata": {
    "priority": "P1",
    "sprint": 14
  },
  "speaker": "marcus_chen",
  "confidence": 0.94,
  "voice_signals": {
    "conviction": 0.91,
    "hesitation": 0.08
  },
  "attribution": {
    "suggested_by": "jess_liu",
    "committed_by": "marcus_chen",
    "can_block": null
  },
  "timestamp": "2026-03-23T09:41:29Z",
  "meeting_id": "q2_roadmap_sync_20260323"
}
```

**Extraction model:** Fine-tuned LLM (Claude or GPT-4) with structured output parsing. Prompt includes meeting context, speaker history, and verb vocabulary.

**Verb vocabulary:** create, send, schedule, update, draft, review, nudge, ship, fix, cancel + custom verbs learned from usage.

### Attribution Graph
Per-commitment social attribution.

```json
{
  "commitment_id": "c_20260323_001",
  "suggested_by": {
    "person": "jess_liu",
    "signal": "mentioned the bug needed P1 attention",
    "confidence": 0.82
  },
  "committed_by": {
    "person": "marcus_chen",
    "signal": "explicitly said 'I'll take it'",
    "conviction_score": 0.91,
    "confidence": 0.94
  },
  "can_block": {
    "person": null,
    "dependency": "none_detected"
  },
  "reliability": {
    "person": "marcus_chen",
    "domain": "linear",
    "historical_rate": 0.92,
    "avg_completion_days": 1.8,
    "similar_commitments": 18
  }
}
```

### Change Detection
Temporal knowledge graph comparing structured claims across meetings.

**Claim schema:**
```json
{
  "subject": "go_to_market_strategy",
  "predicate": "priority_motion",
  "object": "enterprise_first",
  "confidence": 0.91,
  "source": "q2_roadmap_sync",
  "speaker": "jess_liu",
  "date": "2026-03-20",
  "superseded_by": null
}
```

**Detection algorithm:**
1. Extract structured claims from each meeting
2. Group by subject
3. Compare object values within same subject
4. Flag if: same speaker + same subject + different object + no explicit supersession
5. Score contradiction confidence based on recency, speaker consistency, and stake level

### Meeting Steering
Real-time meeting structure analysis.

**Tracked metrics:**
- Decision frame presence (has a decision been explicitly stated?)
- Owner assignment (has every action item been assigned?)
- Deadline specificity (specific date vs "soon" / "next week"?)
- Stakeholder coverage (are the right people in the room?)
- Time allocation (status vs decisions vs blockers?)
- Commitment confidence (conviction vs hesitation in speaker voice?)

**Intervention threshold:**
- Default: 2-3 nudges per meeting maximum
- Modes: silent (0), standard (2-3), high-touch (5+)
- Suppression rules: never interrupt a commitment being made, never interrupt high-conviction speaker, prefer post-meeting clarification over in-meeting disruption

---

## Execution Layer

### Tool Integration Architecture

```
Commitment → Confidence Check → Trust Check → Execute or Queue

If confidence >= 0.8 AND trust_level == "auto_execute":
  → Execute immediately
  → Record receipt
  → Update trust score

If confidence >= 0.6 AND trust_level == "needs_confirm":
  → Queue for user confirmation
  → Show in confirm screen

If confidence < 0.6:
  → Flag for clarification
  → Present options to user
```

### Supported Tools

**Linear (tickets)**
- API: Linear GraphQL API
- Actions: create issue, update status, assign, set priority
- Auth: OAuth 2.0
- Latency: <1 second

**Slack (messages)**
- API: Slack Web API
- Actions: send message, post to channel, DM
- Auth: OAuth 2.0 with bot token
- Latency: <500ms

**Google Calendar (scheduling)**
- API: Google Calendar API v3
- Actions: create event, update event, delete event, check availability
- Auth: OAuth 2.0
- Latency: <1 second

**Salesforce (CRM)**
- API: Salesforce REST API
- Actions: update opportunity, log activity, update contact
- Auth: OAuth 2.0 with refresh token
- Latency: 1-2 seconds

**Gmail (email)**
- API: Gmail API
- Actions: draft email, send email
- Auth: OAuth 2.0
- Latency: <1 second

### Rollback Support
Every execution stores enough state to reverse:
```json
{
  "execution_id": "exec_20260323_003",
  "action": "create_issue",
  "tool": "linear",
  "request": { ... },
  "response": { "issue_id": "OKA-214" },
  "rollback_action": "delete_issue",
  "rollback_params": { "issue_id": "OKA-214" },
  "rolled_back": false,
  "trust_impact": "+1 confirmed"
}
```

---

## Trust Engine

### Per-Domain Trust Model

```json
{
  "user_id": "jess_liu",
  "tool": "linear",
  "trust_level": "auto_execute",
  "stats": {
    "total_actions": 20,
    "edits": 1,
    "edit_rate": 0.05,
    "rollbacks": 0,
    "rollback_rate": 0.0,
    "avg_confidence": 0.92
  },
  "thresholds": {
    "auto_execute_requires": "edit_rate < 0.15 AND rollbacks == 0 AND total_actions >= 10",
    "regression_trigger": "rollback OR edit_rate > 0.25",
    "next_level_requires": "total_actions >= 30 AND edit_rate < 0.10"
  }
}
```

### Trust State Machine
```
MANUAL → NEEDS_CONFIRM → AUTO_EXECUTE → AUTONOMOUS

Progression: consistent execution + low edit rate + zero rollbacks
Regression: rollback → drop to NEEDS_CONFIRM, requires N successful confirms to restore
```

### Decision Expiry
```json
{
  "decision_id": "dec_20260210_001",
  "text": "Wait on Index outreach until metrics improve",
  "created": "2026-02-10",
  "age_days": 42,
  "expiry_trigger": "condition_changed",
  "condition": "execution_rate_improved",
  "condition_met": true,
  "blocking": ["index_ventures_outreach"],
  "status": "needs_review"
}
```

---

## Memory Layer

### Relationship Strategy Object
```json
{
  "person_id": "sarah_rhodes",
  "current_posture": "engaged",
  "response_preferences": ["technical depth", "concrete proof", "short messages"],
  "negative_patterns": ["generic updates", "pitch before proof"],
  "decision_drivers": ["technical credibility", "execution speed"],
  "operator_notes": [
    {
      "type": "fact",
      "text": "Backs highly technical founders",
      "source": "user_authored",
      "created": "2026-03-24"
    },
    {
      "type": "strategy",
      "text": "Lead with technical differentiation",
      "source": "user_authored",
      "created": "2026-03-24"
    },
    {
      "type": "tactic",
      "text": "CTO Loom may outperform generic update",
      "source": "user_authored",
      "status": "candidate"
    }
  ],
  "recommended_action": {
    "type": "send_follow_up",
    "timing": "within_24h",
    "style": "proof_led_technical"
  }
}
```

### Operating Style Object
```json
{
  "user_id": "jess_liu",
  "communication": {
    "email_tone": "direct_concise",
    "avg_sentences": 3,
    "draft_edit_rate": 0.25,
    "learned_phrases": [
      "the thing that matters here is the technical wedge",
      "before we wrap, who owns this?"
    ]
  },
  "meeting_behavior": {
    "end_trigger": "extraction_count >= 4",
    "preferred_duration": 30,
    "interruption_threshold": "structural_only"
  },
  "execution_patterns": {
    "peak_hours": "9am-11am",
    "morning_rate": 0.73,
    "afternoon_rate": 0.41
  }
}
```

---

## Infrastructure

### Production Stack
- **Compute:** AWS ECS or Railway containers
- **Database:** PostgreSQL for structured data, Redis for real-time state
- **File storage:** S3 for temporary audio (24h TTL)
- **Real-time:** WebSockets for live meeting streaming
- **LLM:** Anthropic Claude API for extraction and analysis
- **Speech:** Deepgram (real-time) + Whisper (batch re-processing)
- **Auth:** Clerk or Auth0
- **Monitoring:** Sentry for errors, PostHog for product analytics

### Data Flow
```
Browser/Mobile → WebSocket → Audio Processor → Deepgram
                                    ↓
                            Transcript Buffer
                                    ↓
                        Commitment Extractor (Claude)
                                    ↓
                    Attribution + Confidence Scoring
                                    ↓
                    Trust Check → Execute or Queue
                                    ↓
                    Tool APIs (Linear, Slack, etc.)
                                    ↓
                    Receipt → Trust Update → Memory Write
```

### Security
- All audio encrypted in transit (TLS 1.3) and at rest (AES-256)
- Voice recordings deleted within 24 hours of processing
- Per-user encryption keys for stored data
- SOC 2 Type II target within 12 months
- Participant notification on every recording
- Full data deletion available per-meeting, per-person, or total reset

---

## Scaling Considerations

### Year 1 (5-50 users)
- Single server, single database
- Direct API calls to LLM and speech services
- Manual monitoring

### Year 2 (50-500 users)
- Horizontal scaling with container orchestration
- Message queue for execution (SQS or Redis Streams)
- Caching layer for frequently accessed trust scores and relationship data
- Background workers for batch processing (weekly digest, pattern detection)

### Year 3 (500+ users)
- Multi-tenant architecture with data isolation
- Custom speech model fine-tuned on commitment vocabulary
- Edge processing for real-time transcription (reduce latency)
- Multi-region deployment for global teams
