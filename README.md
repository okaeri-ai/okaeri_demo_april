# Okaeri

**Notes don't close tickets. Okaeri does.**

Okaeri is a voice-first execution engine for founders and operators. It captures spoken commitments from meetings and executes them across your tools — with earned autonomy, not blind automation.

## Live Prototype

**[okaeridemoapril.vercel.app](https://okaeridemoapril.vercel.app)**

89 interactive screens. No build step. Pure HTML/CSS/JS.

## What It Does

Okaeri listens to your meetings, extracts commitments, and turns them into executed actions across Linear, Slack, Google Calendar, Salesforce, and Gmail. But extraction is just the beginning.

**Before the meeting:** Prep briefs with relationship strategy, operator notes, and pinned guidance per person.

**During the meeting:** Real-time steering that catches structural failures — no explicit owner, vague deadlines, meeting drift, wrong stakeholders, false alignment. Voice signals detect conviction, hesitation, and tension.

**After the meeting:** Commitments grouped by confidence. Uncertain items get clarification before execution. Corrections update the trust model. State changes propagate to memory, relationships, and autonomy levels.

**Over time:** Okaeri learns your operating style — your tone, your escalation threshold, your follow-up cadence, who you want nudged vs handled personally. It detects contradictions, tracks decision expiry, and maps commitment dependencies.

## The Demo

Click **demo** in the toolbar to walk through the 5-screen core story:

1. **Home** — what matters now (one clear first action)
2. **Prep Brief** — why this meeting matters (what to say, what they care about)
3. **Live Meeting** — what Okaeri notices (steering rail + voice signals + interventions)
4. **Confirm & Execute** — what it will do (confidence tiers + correction flow)
5. **All Clear** — what changed (memory, relationships, trust)

## Key Screens

| Category | Screens | Highlights |
|----------|---------|------------|
| Core Loop | 14 | Home, before & after, empty state, live meeting (2 variants), confirm & execute, debrief, all clear, execution log, transcript viewer, failure handling, recurring patterns, voice inbox |
| Voice | 6 | Teach Okaeri, memory confirmed, morning brief, pre-meeting brief, whisper guidance, spoken debrief |
| Intelligence | 24 | Prep brief (2 variants), 5 person profiles, ask okaeri, conflict detection, pattern detection, meeting quality, proactive suggestions, weekly digest, reasoning log, attribution graph, change detection, intervention rules, dependencies, unified model, meeting steering, meeting score, benchmarking, recovery plans |
| Planning | 8 | Goals, morning/evening briefing, calendar, calendar defense, operating cadence, playbooks, smart scheduling |
| Relationships | 2 | Relationship health with strategy cards, delegation view |
| Team | 2 | Team view, team admin |
| Documents | 4 | Knowledge base, vocabulary, templates, bundles |
| Artifacts | 7 | Commitment lifecycle, meeting brief, investor update, receipt, meeting history, outcome proof, smart draft |
| System | 15 | Integrations, earned autonomy, onboarding, notifications, search, learning history, settings, style learning, continuity, privacy, ambient mode, how Okaeri works, week 1 progression, error states, CRM integration |
| Inbox | 2 | Email triage, voice inbox |
| Mobile | 3 | Capture (live mic), post-capture, real-time intel |
| Ambient | 2 | Menu bar, desktop widgets |

## Features

- **Demo mode** — auto-advance through the core story with walkthrough tooltips
- **Presentation mode** — full-screen, enlarged typography (Cmd+Shift+P)
- **Dark mode** — full dark theme (Ctrl+Shift+D)
- **Keyboard shortcuts** — Cmd+K search, Escape back, Enter execute, ? help
- **Collapsible sidebar** — 89 screens organized, most sections collapsed by default
- **Audio** — Smallest AI TTS (primary) + ElevenLabs (secondary) + Web Speech API fallback for briefings, debriefs, and profile reads; Web Audio API for execution sounds
- **Live microphone** — mobile capture uses actual mic input for waveform visualization
- **Cross-screen state** — executing on d04 updates home, all-clear, execution log, morning briefing, weekly digest, pattern detection
- **Live simulation** — background timer generates events every 30-40 seconds

## Running Locally

```bash
cd okaeri_demo_april
python3 -m http.server 8000
# Open http://localhost:8000
```

No dependencies. No build step. No framework.

## Deployed

- **Vercel:** [okaeridemoapril.vercel.app](https://okaeridemoapril.vercel.app)
- **Railway:** [okaeri-demo-april-production.up.railway.app](https://okaeri-demo-april-production.up.railway.app)

Auto-deploys on push to main.

## Architecture

```
okaeri_demo_april/
├── index.html              <- shell with sidebar, titlebar, view toggle
├── styles/system.css       <- complete design system (single source of truth)
├── components/nav.js       <- navigation, demo mode, keyboard shortcuts, dark mode
├── data/demo.js            <- shared state, sample data, speech/sound utilities
├── screens/
│   ├── desktop/            <- 84 desktop screens
│   ├── mobile/             <- 3 mobile screens (phone frame)
│   └── ambient/            <- 2 ambient screens (widgets)
├── Dockerfile              <- Railway deployment (nginx)
├── vercel.json             <- Vercel deployment config
└── nginx.conf              <- Static file serving
```

## Design System

- **Font:** Noto Sans JP, weights 200 and 300 only
- **Borders:** 0.5px everywhere (no 1px)
- **Buttons:** No filled buttons — underline text only
- **Colors:** Semantic — green (executed), amber (urgent), blue (informational)
- **Aesthetic:** Japanese minimalism, wide letter-spacing, negative space is structural

## Built With

HTML, CSS, JavaScript. No frameworks. No build tools. No dependencies. Voice: Smallest AI TTS (primary), ElevenLabs TTS (secondary), Web Speech API (fallback).
