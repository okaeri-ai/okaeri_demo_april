# Okaeri — Changelog

What was built, in what order, and why. This prototype was built in a single session, iterating through product reviews and feedback.

---

## Phase 1: Foundation
*cf13774*

Built the complete project architecture from scratch:
- `index.html` shell with sidebar navigation, titlebar, and view toggle
- `styles/system.css` — full design system (Noto Sans JP, 0.5px borders, semantic colors, no filled buttons)
- `components/nav.js` — screen navigation, hash routing, view switching
- `data/demo.js` — shared state, sample data, team/meeting/commitment objects
- 44 screen files across desktop (39), mobile (3), and ambient (2)

Every screen built to match the reference HTML aesthetic: weight 200/300 typography, wide letter-spacing, Japanese minimalist design.

---

## Phase 2: Interaction Polish
*34434f3, e974ab8, f542f08*

Added interactivity that was missing from the initial build:
- Delegation toggle with populated "assigned to you" view
- Team view period toggle (today/week/month) with data switching
- Meeting quality tab switching (30 days/by type/by person)
- Calendar event click-through to prep briefs
- Bundle cascade execution with group status updates
- Integration connect/disconnect toggles
- Earned autonomy permission levels with disabled states
- Execution log live search filtering
- Notification auto-dismiss (green after 4s, amber stays)
- Ask Okaeri evidence rows link to commitment lifecycle
- Calendar day/week/month view switching
- Audio player simulation on briefing screens
- Toast confirmations on send/copy buttons

---

## Phase 3: Cross-Screen State
*34434f3, e974ab8, 2b6a7b3*

Made the prototype feel like a connected system, not isolated screens:
- Executing cards on d04 updates stats on d01, d05, d06
- Morning briefing (d18) reflects execution state
- Weekly digest (d16) updates executed count and narrative
- Pattern detection (d13) adds dynamic "fast streak" pattern
- Mobile post-capture (m02) pulls from shared commitment data
- Ambient widgets (a02) hydrate pending count from live state
- Onboarding name persists to morning/evening greetings
- Voice inbox execute button creates receipts and updates state

---

## Phase 4: Production Touches
*34434f3, f542f08, 414149b, 25ee342, 9d659db*

Polish that makes the prototype feel like a product:
- Demo mode: auto-advance through 5-screen core story with step indicator
- Keyboard shortcuts: Cmd+K search, Escape back, Enter execute, ? help
- Presentation mode: full-screen, enlarged typography (Cmd+Shift+P)
- Dark mode with localStorage persistence (Ctrl+Shift+D)
- Collapsible sidebar with 2-letter abbreviations and tooltips
- Skeleton loading shimmer between screen transitions
- iOS status bar on phone frame
- Sticky sidebar wordmark
- Responsive breakpoints (sidebar hides <900px, overlay <600px)
- Favicon (green dot SVG) and meta description
- Error recovery with retry and go-home buttons
- Live background activity dots on sidebar nav items
- Directional page transitions (up vs down based on nav position)
- Web Audio API notification sounds (execute ping, notify double-tap, success chime)
- Web Speech API for spoken briefings and profile reads
- Deployment configs for Vercel and Railway
- Titlebar layout fixed (all controls inline, no overlap)

---

## Phase 5: Narrative Sharpening
*b1e2531, 5958007, ee2a14b, 9a3c3fc*

Responding to the first product review: "the direction is strong, the main gap is product sharpness."

- **d01 Home rewritten** as command surface: 4 opinionated cards replacing stats dashboard
- **d03 Live Meeting upgraded** with voice signals showing operational consequences (conviction → auto-execute, hesitation → needs confirm)
- **d04 Confirm & Execute rebuilt** with confidence tiers and correction flow (uncertain card asks before acting)
- **d05 All Clear rewritten** to show state changes (memory, relationships, trust), not just completion
- **d36 Earned Autonomy upgraded** with per-domain trust evidence, rollback case, and unlock progress
- **d08 Prep Brief rewritten** with 4-section structure (what matters / what they care about / what to say / what not to miss)
- Demo mode labels updated: "what matters now → why this meeting matters → what okaeri notices → what it will do → what changed"

---

## Phase 6: Missing Flows
*5958007, 2b6a7b3, 663497c*

Building features the reviewer identified as gaps:

- **d04b Meeting Debrief**: what we decided, committed, are uncertain about, might have missed
- **d40 Execution Failure**: API timeout handling, retry queue, manual fallback
- **d41 Learning History**: correction rate declining 12→2, accuracy 84%→96%
- **d42 Meeting History**: 10 meetings over 14 days with execution rates
- **d43 Settings**: notifications, defaults, working hours, briefings, privacy
- **d44 Reasoning Log**: every decision with evidence chain and confidence
- **d45 Recurring Patterns**: 5 recurring commitments with automation suggestions
- **d10b/c/d Team Profiles**: Marcus (92%), Priya (100%), James (89%) with working patterns
- Challenge flow on d04: "tell Okaeri why it's wrong" with contextual adjustment
- 8 more Ask Okaeri answers (15 total) with fuzzy matching for names/tools/meetings

---

## Phase 7: Moat Differentiators
*c7d46dd, 8b44e43*

Responding to the second review: "the biggest gaps are not more screens but stronger moat articulation."

- **d46 Attribution Graph**: who suggested, committed, can block — the social graph behind commitments
- **d47 Change Detection**: stance shifts, priority drift, conviction tracking across meetings
- **d48 Intervention Rules**: 72% held back — restraint is the product
- **d49 Dependencies**: commitment chains with cascade risk analysis
- **d50 Operating Cadence**: patterns → automated rhythms
- **d51 Style Learning**: tone, timing, escalation adapted from 847 signals
- **d52 Continuity**: 78% coverage if founder unavailable
- **d53 Outcome Proof**: 60% → 97% execution, 12+ hrs/month recovered
- **d54 Privacy**: explicit consent, 24-hour voice deletion, full data control
- **d55 Unified Model**: one statement propagates to 7 surfaces

---

## Phase 8: Meeting Steering
*589e303*

The feature that makes Okaeri a chief of staff, not a recorder:

- **d03 Live Meeting restructured** with meeting steering rail as the primary right-column feature
- 5 progressive steering alerts: no owner, vague deadline, drift, weak agreement, steering complete
- Intervention mode selector: silent / standard / high-touch
- Suggest/handled/hold actions on each alert
- **d56 Meeting Steering config**: 5 detectors with toggles, 4 intervention modes
- **d57 Meeting Score**: post-meeting 78/100 scorecard with 5 criteria

---

## Phase 9: Relationship Strategy & Voice-First Identity
*127e242, 76a728b, 6e851eb, 2cb4fee*

The final product identity: memory you speak into, guidance you hear, behavior that adapts.

**Relationship strategy:**
- Operator notes on profiles (fact/strategy/tactic/avoid) with add-note input
- Pinned guidance on prep briefs per person
- Strategy cards on relationship health (responds to / avoid / timing)
- **d58 Smart Draft**: strategy-aware follow-ups using saved notes

**Voice-first:**
- **d61 Teach Okaeri**: voice capture with Web Speech Recognition, parsed into structured memory
- **d61b Memory Confirmed**: trust-building confirmation with classification
- **d62 Pre-Meeting Audio Brief**: 30-second spoken brief with companion card
- **d62b Morning Audio Brief**: daily triage (needs you now / can wait / handled)
- **d63 Whisper Guidance**: 6-moment meeting timeline, 4 delivered, 2 held back
- **d64 Spoken Debrief**: post-meeting audio summary with action card
- **d65 How Okaeri Works With You**: observed style, learned phrases, adaptation log

**Additional:**
- **d59 Ambient Executive Mode**: only what changed — deltas, not dashboards
- **d60 Benchmarking**: which patterns work (proof-led 82% vs generic 31%)
- Contradiction detection across 5 screens (home, live meeting, prep brief, conflicts, changes)
- Decision expiry across 3 screens (home, conflicts, changes)

---

## Phase 10: Final Polish
*1026c2d, 1e6b2f1, 257d34e, 0b9b57e*

- **d00-intro landing screen**: "notes don't close tickets" for cold opens
- Guided walkthrough tooltips during demo mode
- Home simplified to 1 dominant card + compact watch items
- Sidebar reorganized: Voice section added, secondary sections collapsed by default
- SVG stroke fixes across remaining screens
- Titlebar layout fixed (all controls inline, no overlap)
- README, product vision, strategy docs, feature catalog, roadmap, and product thinking docs

---

## Phase 11: Table Stakes Tightening
*86000f5*

Filling the gaps that make a prototype feel like a product:

- **Draft personalization** with relationship strategy notes shaping tone and content
- **Memory reuse** across prep briefs, drafts, and suggestions
- **d71 Recovery Plans**: structured recovery workflows when commitments slip or relationships cool
- **d72 CRM Integration**: bidirectional Salesforce sync — meeting insights update deals, CRM data informs prep briefs
- Unified relationship strategy: one object, four compression levels across all surfaces

---

## Phase 12: Operating Playbooks & Smart Scheduling
*1235d49*

Turning recurring operational patterns into executable workflows:

- **d69 Playbooks**: structured workflows for fundraise closes, design partner onboarding, sprint planning, incident response
- **d70 Smart Scheduling**: context-aware calendar intelligence — considers energy patterns, participant preferences, meeting stakes, and strategic timing
- Voice cache fix for faster audio playback

---

## Phase 13: Transcript Viewer
*fc340e3*

- **d68 Transcript**: best-in-class transcript viewer with chapter markers, full-text search, share, and export
- Chapters auto-generated from topic shifts, decisions, and commitment moments
- Export to PDF, Markdown, or plain text

---

## Phase 14: Voice Provider Integration
*af5455c, d270f13, ea89cb0, c9d1fb6*

Production-quality voice with three-tier fallback:

- **Smallest AI TTS** as primary voice provider (low latency, natural voices)
- **ElevenLabs TTS** as secondary option for premium quality
- **Web Speech API** as offline/fallback
- Correct model endpoints, voice ID validation, and graceful degradation

---

## Phase 15: Dead Button Fixes
*993fae8*

23 interactions across 16 screens wired up:

- All buttons, audio players, and navigation elements now functional
- Voice note capture added to all person profiles (905295c)
- Speech pause/resume support, natural voice selection, auto-stop on navigate (9ab4b40)

---

## Current State

**89 screens. 14 documents. One product thesis.**

The prototype demonstrates every feature described in the product vision across desktop, mobile, and ambient surfaces — including operating playbooks, smart scheduling, recovery workflows, CRM integration, and a full transcript viewer. It's deployed on Vercel and Railway, works offline-capable, and runs with zero dependencies.

Built in one session. Iterated through 3 product reviews and 5 additional build phases. Every iteration made the product sharper.
