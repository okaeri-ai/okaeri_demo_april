// ═══════════════════════════════════════════════════
// OKAERI — Shared State & Sample Data
// ═══════════════════════════════════════════════════

window.OKAERI = {

  // ── Navigation State ──
  currentScreen: 'd01-home',
  previousScreen: null,
  screenHistory: [],

  // ── Execute Card State ──
  pendingCards: 4,
  executedCards: [],
  pendingCount: 2,    // starts at 2 (pre-existing pending)
  totalExecuted: 31,  // starts at 31 (pre-existing executed)

  // ── Ask Okaeri Answers ──
  askAnswers: {
    'what did we decide about go-to-market?': {
      text: 'Across four meetings in the past three weeks, the consistent position is enterprise-first. The clearest statement came in the Q2 roadmap sync on March 20 — ship to enterprise design partners first to compound organizational workflow data, then open PLG once the commitment graph has sufficient signal. There was one moment of ambiguity on March 14 where PLG-first was discussed, but it was not committed to and was explicitly revisited on March 18.',
      evidence: [
        { verb: 'decision', obj: 'enterprise-first · PLG after commitment graph has signal', source: 'Q2 roadmap sync', date: 'Mar 20' },
        { verb: 'discussed', obj: 'PLG-first motion considered but not committed to', source: 'investor prep', date: 'Mar 14' },
        { verb: 'confirmed', obj: 'enterprise-first reaffirmed with Resonance design partner', source: 'design partner call', date: 'Mar 18' }
      ]
    },
    'what is Marcus working on?': {
      text: 'Marcus has three active commitments this sprint. The most urgent is the API rate limit bug, which he committed to as P1 in the Q2 roadmap sync on March 23. He also has an auth flow PR review and the API docs milestone due this week. His 30-day execution rate is 92% — strong, with a slight rollover pattern on longer-horizon commitments.',
      evidence: [
        { verb: 'fix', obj: 'API rate limit bug · P1 · sprint 14', source: 'Q2 roadmap sync', date: 'Mar 23' },
        { verb: 'review', obj: 'auth flow PR', source: 'engineering sync', date: 'this week' },
        { verb: 'write', obj: 'API docs for v1 endpoints', source: 'planning', date: 'this week' }
      ]
    },
    'what slipped last week?': {
      text: 'One commitment slipped last week: the cold outreach to Index Ventures. It was first committed to on March 10, pushed again on March 16, and was not completed by week end. This is now the most overdue item in your execution log. Everything else from the week executed cleanly — 22 of 23 commitments, a 96% execution rate.',
      evidence: [
        { verb: 'draft', obj: 'cold outreach to Index Ventures', source: 'fundraise planning', date: 'Mar 10 · pushed 3×' },
        { verb: 'note', obj: '22 of 23 commitments executed · 96% rate', source: 'all other meetings', date: 'this week' }
      ]
    },
    'show me everything about Acme': {
      text: 'Acme Corp has appeared in 6 meetings over the past three weeks. The deal is at proposal sent stage in Salesforce ($84k ARR opportunity). Priya owns the relationship. The most recent commitment — updating the deal stage — was executed this morning at 9:14am. Their procurement team is reviewing the NDA before moving forward. No open commitments remain on this deal.',
      evidence: [
        { verb: 'update', obj: 'Acme deal → proposal sent · Salesforce', source: 'Q2 roadmap sync', date: 'Mar 23 · done' },
        { verb: 'send', obj: 'pricing proposal recap · Priya · Slack #sales', source: 'Q2 roadmap sync', date: 'Mar 23 · done' },
        { verb: 'review', obj: 'NDA · Acme procurement team', source: 'email thread', date: 'Fri Mar 20' }
      ]
    },
    'how is the fundraise going?': {
      text: 'The fundraise is progressing well. You\'ve had 2 investor meetings in the past week — Sequoia (Series A intro) and the Andreessen follow-up is scheduled for Thursday. Sarah Rhodes confirmed a second meeting after the intro, which is a strong signal. The pre-seed round target is $2M with a May 1 close. Current progress: 58% toward that goal. One gap: the Index Ventures outreach has been pushed three times and is now overdue.',
      evidence: [
        { verb: 'meeting', obj: 'Series A intro · Sequoia · completed', source: 'investor meeting', date: 'Mar 23' },
        { verb: 'scheduled', obj: 'Andreessen follow-up · 30 min', source: 'Q2 roadmap sync', date: 'Thu Mar 26' },
        { verb: 'overdue', obj: 'Index Ventures cold outreach · pushed 3×', source: 'fundraise planning', date: 'Mar 10' }
      ]
    },
    'what\'s the status of the Resonance partnership?': {
      text: 'Resonance is your most active design partner — 12 touchpoints, strong relationship health. They confirmed the monthly retainer on March 19. First usage data is expected this week. The partnership proposal email was sent on March 20. Their team joined today\'s design partner call. The main open item is getting API access configured for their voice infrastructure integration.',
      evidence: [
        { verb: 'confirmed', obj: 'Resonance design partner retainer', source: 'partner call', date: 'Mar 19' },
        { verb: 'sent', obj: 'partnership proposal email', source: 'email', date: 'Mar 20' },
        { verb: 'pending', obj: 'API access configuration', source: 'engineering sync', date: 'this week' }
      ]
    },
    'who needs follow-up?': {
      text: 'Two relationships are cooling and need attention. Alex Chen at Mnemix hasn\'t been contacted in 11 days — the partnership thread has gone quiet. Nina Park at a16z received a warm intro 22 days ago but no follow-up was ever sent. Both are flagged in your relationship health dashboard. Additionally, the Andreessen follow-up is scheduled for next week but no pre-read has been sent.',
      evidence: [
        { verb: 'cooling', obj: 'Alex Chen · Mnemix · 11 days', source: 'relationship health', date: 'flagged' },
        { verb: 'cold', obj: 'Nina Park · a16z · 22 days', source: 'relationship health', date: 'flagged' },
        { verb: 'pending', obj: 'Andreessen pre-read not sent', source: 'calendar', date: 'next week' }
      ]
    },
    'summarize last week': {
      text: 'Last week saw 7 meetings and 23 commitments across the team. 22 were executed (96% rate) — the only miss was the Index Ventures cold outreach, which has now been pushed three times. Key highlights: the Sequoia intro went well with a second meeting confirmed, Resonance was locked in as the first design partner, and the team committed to enterprise-first go-to-market. James has a developing pattern of rollover commitments (38% past deadline). Priya ran a perfect week: 14 commitments, zero slippage.',
      evidence: [
        { verb: 'rate', obj: '22 of 23 executed · 96%', source: 'weekly digest', date: 'Mar 17-23' },
        { verb: 'missed', obj: 'Index Ventures outreach · pushed 3×', source: 'fundraise planning', date: 'overdue' },
        { verb: 'highlight', obj: 'Sequoia second meeting confirmed', source: 'investor meeting', date: 'Mar 23' }
      ]
    },

    // ── Team member patterns ──
    'tell me about Marcus': {
      text: 'Marcus has three active commitments this sprint. The most urgent is the API rate limit bug, which he committed to as P1 in the Q2 roadmap sync on March 23. He also has an auth flow PR review and the API docs milestone due this week. His 30-day execution rate is 92% — strong, with a slight rollover pattern on longer-horizon commitments.',
      evidence: [
        { verb: 'fix', obj: 'API rate limit bug · P1 · sprint 14', source: 'Q2 roadmap sync', date: 'Mar 23' },
        { verb: 'review', obj: 'auth flow PR', source: 'engineering sync', date: 'this week' },
        { verb: 'write', obj: 'API docs for v1 endpoints', source: 'planning', date: 'this week' }
      ]
    },
    'tell me about Priya': {
      text: 'Priya is running a perfect execution week — 14 commitments, zero slippage, 100% rate. She owns the Acme deal ($84k ARR pipeline) and handles all Salesforce updates. Her most recent actions: updated Acme deal stage this morning and sent the pricing proposal recap to Slack #sales. She\'s the most reliable executor on the team.',
      evidence: [
        { verb: 'update', obj: 'Acme deal → proposal sent · Salesforce', source: 'Q2 roadmap sync', date: 'Mar 23 · done' },
        { verb: 'send', obj: 'pricing proposal recap · Slack #sales', source: 'Q2 roadmap sync', date: 'Mar 23 · done' },
        { verb: 'rate', obj: '14 of 14 executed · 100%', source: 'weekly digest', date: 'Mar 17-23' }
      ]
    },
    'tell me about James': {
      text: 'James has 3 open commitments including the overdue Index Ventures outreach (pushed 3 times). His execution rate is 89% with a 38% rollover pattern on deadline commitments. The Andreessen follow-up is scheduled for next week — based on his pattern, Okaeri has flagged this for confirmation. His strength is relationship scheduling; consider pairing him with Priya on cold outreach.',
      evidence: [
        { verb: 'overdue', obj: 'Index Ventures cold outreach · pushed 3×', source: 'fundraise planning', date: 'Mar 10' },
        { verb: 'scheduled', obj: 'Andreessen follow-up · 30 min', source: 'Q2 roadmap sync', date: 'Thu Mar 26' },
        { verb: 'rate', obj: '89% execution · 38% rollover on deadlines', source: 'weekly digest', date: 'Mar 17-23' }
      ]
    },

    // ── Tool patterns ──
    'what happened in Linear': {
      text: 'Linear has 20 confirmed actions with 1 edit and 0 rollbacks in the last 30 days. Most recent: API rate limit bug ticket OKA-214 created today for Marcus. Trust level: high — auto-execute enabled. This sprint (14) has 3 open tickets: rate limit bug (P1), auth flow review, and onboarding flow.',
      evidence: [
        { verb: 'create', obj: 'API rate limit bug · OKA-214', source: 'Q2 roadmap sync', date: 'Mar 23' },
        { verb: 'create', obj: 'onboarding flow ticket · OKA-211', source: 'engineering sync', date: 'Mar 19' },
        { verb: 'stats', obj: '20 actions · 1 edit · 0 rollbacks · 30 days', source: 'integration log', date: 'Mar 23' }
      ]
    },
    'what happened in Slack': {
      text: '18 confirmed messages with 2 edits in 30 days. Most recent: pricing proposal recap sent to #sales for Priya today. Trust level: high — auto-execute enabled. Most active channels: #sales (7 messages), #engineering (5), #investors (4), #partners (2).',
      evidence: [
        { verb: 'send', obj: 'pricing proposal recap · #sales', source: 'Q2 roadmap sync', date: 'Mar 23' },
        { verb: 'send', obj: 'sprint 13 recap · #engineering', source: 'engineering sync', date: 'Mar 17' },
        { verb: 'stats', obj: '18 messages · 2 edits · 30 days', source: 'integration log', date: 'Mar 23' }
      ]
    },
    'what happened in Salesforce': {
      text: '4 confirmed actions with 1 edit in 30 days. Most recent: Acme deal updated to proposal sent (user corrected from "proposal reviewed"). Trust level: building — needs confirmation. Active deals: Acme Corp ($84k ARR, proposal stage), Mnemix (partnership, cooling).',
      evidence: [
        { verb: 'update', obj: 'Acme deal → proposal sent · corrected', source: 'Q2 roadmap sync', date: 'Mar 23' },
        { verb: 'update', obj: 'Mnemix deal stage', source: 'pipeline review', date: 'Mar 14' },
        { verb: 'stats', obj: '4 actions · 1 edit · 30 days', source: 'integration log', date: 'Mar 23' }
      ]
    },

    // ── Meeting patterns ──
    'what happened in the Q2 sync': {
      text: 'The Q2 roadmap sync was 38 minutes with Marcus, Priya, James, and Jess. 4 commitments were extracted: Linear ticket for rate limit bug, Slack pricing recap, Calendar Andreessen follow-up, and Salesforce Acme update. 1 decision was made: ship v1 with Linear + Slack only. Okaeri detected hesitation from James on the Andreessen timeline and high conviction from Priya on the Acme update.',
      evidence: [
        { verb: 'meeting', obj: 'Q2 roadmap sync · 38 min · 4 attendees', source: 'meeting log', date: 'Mar 23' },
        { verb: 'extracted', obj: '4 commitments · 1 decision', source: 'Q2 roadmap sync', date: 'Mar 23' },
        { verb: 'signal', obj: 'hesitation from James · high conviction from Priya', source: 'Q2 roadmap sync', date: 'Mar 23' }
      ]
    }
  },

  // ── Team ──
  team: [
    { name: 'Jess Liu', initials: 'JL', role: 'CEO / founder', rate: 97, trust: 3, color: 'av-a' },
    { name: 'Marcus Chen', initials: 'MC', role: 'Engineering', rate: 92, trust: 2, color: 'av-b' },
    { name: 'Priya Rajan', initials: 'PR', role: 'Sales / Ops', rate: 100, trust: 3, color: 'av-t' },
    { name: 'James Wu', initials: 'JW', role: 'BD', rate: 89, trust: 1, color: 'av-a' }
  ],

  // ── Meetings ──
  meetings: [
    { name: 'Q2 roadmap sync', date: 'March 23', duration: '38 min', attendees: ['Marcus', 'Priya', 'James', 'Jess'] },
    { name: 'Series A investor intro', org: 'Sequoia', date: 'March 23', duration: '45 min', attendees: ['Sarah Rhodes', 'Michael Kim', 'Jess'] },
    { name: 'Design partner call', org: 'Resonance', date: 'March 23', duration: '60 min', attendees: [] }
  ],

  // ── Commitments (from Q2 roadmap sync) ──
  commitments: [
    { id: 'c1', verb: 'create', obj: 'API rate limit bug', tool: 'Linear', toolClass: 'tt-li', assignee: '@marcus', meta: 'P1 · sprint 14', label: 'Ticket created', detail: 'Linear OKA-214' },
    { id: 'c2', verb: 'send', obj: 'pricing proposal recap', tool: 'Slack #sales', toolClass: 'tt-sl', assignee: '@priya', meta: 'today EOD', label: 'Message sent', detail: 'Slack #sales' },
    { id: 'c3', verb: 'schedule', obj: 'Andreessen follow-up · 30 min', tool: 'Calendar', toolClass: 'tt-ca', assignee: '@james', meta: 'next week', label: 'Invite sent', detail: 'Thu Mar 26' },
    { id: 'c4', verb: 'update', obj: 'Acme deal → proposal sent', tool: 'Salesforce', toolClass: 'tt-sf', assignee: '@priya', meta: 'Acme Corp · $84k ARR', label: 'Deal updated', detail: 'Acme Corp' }
  ],

  // ── Relationships ──
  relationships: [
    { name: 'Sarah Rhodes', initials: 'SR', role: 'Partner, Sequoia', health: 5, healthLabel: 'strong', healthColor: 'g', touches: 7, lastContact: '3 days ago', commits: '2 open', commitsColor: 'g', type: 'investor', screen: 'd09-sarah-profile' },
    { name: 'Michael Kim', initials: 'MK', role: 'Principal, Sequoia', health: 3, healthLabel: 'growing', healthColor: 'd', touches: 3, lastContact: '5 days ago', commits: '—', commitsColor: 'n', type: 'investor', screen: 'd10-michael-profile', avatarBg: 'teal-bg', avatarColor: 'teal' },
    { name: 'Alex Chen', initials: 'AC', role: 'CEO, Mnemix', health: 2.5, healthLabel: 'cooling', healthColor: 'a', touches: 4, lastContact: '11 days ago', commits: '1 open', commitsColor: 'n', type: 'partner' },
    { name: 'Resonance team', initials: 'RT', role: 'Design partner', health: 5, healthLabel: 'strong', healthColor: 'g', touches: 12, lastContact: 'today', commits: '3 open', commitsColor: 'g', type: 'partner', avatarBg: 'teal-bg', avatarColor: 'teal' },
    { name: 'Nina Park', initials: 'NP', role: 'Scout, a16z', health: 1, healthLabel: 'cold', healthColor: 'a', touches: 1, lastContact: '22 days ago', commits: '—', commitsColor: 'n', type: 'investor' }
  ],

  // ── Relationship Strategies ──
  relationshipStrategies: {
    'sarah_rhodes': {
      posture: 'engaged',
      what_works: ['Lead with technical depth early', 'Offer proof artifacts instead of generic updates'],
      avoid: ['Broad investor narrative before credibility is established', 'Generic recap without new signal'],
      decision_drivers: ['Technical defensibility', 'Product depth', 'Evidence of compound advantage'],
      best_next_move: 'Send a short proof-led follow-up and offer a CTO Loom.',
      timing: 'now',
      why: ['Your saved note says Sarah backs technical founders', 'Her strongest questions were about defensibility', 'Interest increased, but technical credibility is still the unlock'],
      type: 'investor'
    },
    'michael_kim': {
      posture: 'new',
      what_works: ['Build rapport before pitching', 'Tie commitment graph to his execution-layer thesis'],
      avoid: ['Pitching defensibility without the commitment graph story ready', 'Over-explaining before establishing credibility'],
      decision_drivers: ['Developer tools focus', 'Execution layer infrastructure', 'Bottom-up enterprise adoption'],
      best_next_move: 'Focus on rapport. If positive, offer architecture deep-dive as follow-up.',
      timing: 'now',
      why: ['First meeting — no prior relationship', '4 of 6 portfolio companies are execution layer plays', 'His X post about execution being the gap is your anchor'],
      type: 'investor'
    },
    'alex_chen': {
      posture: 'recoverable',
      what_works: ['Direct technical updates', 'Concrete next steps with clear timeline'],
      avoid: ['Generic check-ins', 'Re-engaging before the blocker is resolved'],
      decision_drivers: ['Technical reliability', 'API quality', 'Clear integration roadmap'],
      best_next_move: 'Wait until the rate limit bug is fixed, then send a concise proof-of-progress note with one proposed next step.',
      timing: 'after_condition',
      why: ['Last momentum came from product-specific progress', 'Current thread stalled around a technical blocker', 'Outreach likely to underperform until that changes'],
      type: 'partner'
    },
    'nina_park': {
      posture: 'cooling',
      what_works: ['Brief high-signal updates', 'Momentum and social proof', 'Easy re-engagement path'],
      avoid: ['Long product explanation', 'Letting the intro sit any longer'],
      decision_drivers: ['Momentum over detail', 'Name recognition', 'Warm signal freshness'],
      best_next_move: 'Send a concise follow-up that gives Nina an easy way to re-engage.',
      timing: 'now',
      why: ['Warm intro is 22 days old and aging out', 'Investor intros decay quickly', 'Prior guidance: momentum matters more than detail'],
      type: 'investor'
    },
    'resonance_team': {
      posture: 'strong',
      what_works: ['Regular technical sync cadence', 'Clear API documentation', 'Responsive to integration questions'],
      avoid: ['Commercial discussion before technical foundation is solid', 'Letting sync cadence slip'],
      decision_drivers: ['Voice infrastructure reliability', 'API quality and documentation', 'Roadmap predictability'],
      best_next_move: 'Maintain weekly Tuesday sync. Prioritize API access credentials and error handling docs.',
      timing: 'now',
      why: ['12 touchpoints, strongest relationship health', 'Monthly retainer confirmed', 'First usage data expected this week'],
      type: 'partner'
    }
  },

  // ── Goals ──
  goals: [
    {
      name: 'Close $2M pre-seed round',
      type: 'primary',
      quarter: 'Q1 2026',
      deadline: 'target close: May 1 · 39 days away',
      pct: 58,
      pctColor: 'g',
      pctLabel: 'on track',
      milestones: [
        { text: 'Sequoia intro', status: 'done' },
        { text: 'Resonance partner', status: 'done' },
        { text: 'Sequoia term sheet', status: 'open' },
        { text: 'a16z intro overdue', status: 'risk' },
        { text: 'close round', status: 'open' }
      ],
      commits: [
        { verb: 'send', obj: 'materials to Sequoia before 10am', status: 'risk', statusLabel: 'at risk' },
        { verb: 'draft', obj: 'Index Ventures cold outreach', status: 'risk', statusLabel: 'overdue' },
        { verb: 'schedule', obj: 'Andreessen follow-up', status: 'open', statusLabel: 'today' },
        { verb: 'update', obj: 'CRM · Sequoia → second meeting', status: 'done', statusLabel: '✓ done' }
      ]
    },
    {
      name: '3–5 active design partners generating usage data',
      type: 'secondary',
      quarter: 'Q1 2026',
      deadline: 'no hard deadline · currently 1 of 5',
      pct: 20,
      pctColor: 'a',
      pctLabel: 'needs attention',
      milestones: [
        { text: 'Resonance confirmed', status: 'done' },
        { text: 'partner 2 · in progress', status: 'open' },
        { text: 'partner 3', status: 'open' },
        { text: 'partner 4', status: 'open' },
        { text: 'partner 5', status: 'open' }
      ],
      commits: []
    }
  ],

  // ── Execution Log ──
  executionLog: [
    { date: 'today · Mon Mar 23', entries: [
      { verb: 'create', obj: 'API rate limit bug', tool: 'Linear', ref: 'OKA-214', time: '9:14 am' },
      { verb: 'send', obj: 'pricing proposal recap', tool: 'Slack', ref: '#sales', time: '9:14 am' }
    ]},
    { date: 'Friday · Mar 20', entries: [
      { verb: 'update', obj: 'Acme deal · proposal sent', tool: 'Salesforce', ref: 'Acme Corp', time: '4:52 pm' },
      { verb: 'schedule', obj: 'Andreessen follow-up · 30 min', tool: 'Calendar', ref: 'Thu Mar 26', time: '4:53 pm' },
      { verb: 'draft', obj: 'partnership proposal email', tool: 'Gmail', ref: 'alex@mnemix.ai', time: '2:11 pm' }
    ]},
    { date: 'Thursday · Mar 19', entries: [
      { verb: 'send', obj: 'design partner brief · Resonance team', tool: 'Gmail', ref: 'resonance.ai', time: '11:44 am' },
      { verb: 'create', obj: 'onboarding flow ticket', tool: 'Linear', ref: 'OKA-211', time: '3:08 pm' }
    ]},
    { date: 'Wednesday · Mar 18', entries: [
      { verb: 'send', obj: 'one-pager to Sarah Rhodes', tool: 'Gmail', ref: 'sarah@sequoia.com', time: '11:02 am' },
      { verb: 'create', obj: 'mobile auth flow ticket', tool: 'Linear', ref: 'OKA-209', time: '2:34 pm' },
      { verb: 'schedule', obj: 'Resonance weekly sync', tool: 'Calendar', ref: 'recurring', time: '3:15 pm' }
    ]},
    { date: 'Tuesday · Mar 17', entries: [
      { verb: 'update', obj: 'pipeline review notes', tool: 'Salesforce', ref: 'Acme Corp', time: '10:18 am' },
      { verb: 'send', obj: 'sprint 13 recap', tool: 'Slack', ref: '#engineering', time: '4:41 pm' },
      { verb: 'draft', obj: 'design partner proposal', tool: 'Gmail', ref: 'resonance.ai', time: '5:02 pm' }
    ]},
    { date: 'Monday · Mar 16', entries: [
      { verb: 'create', obj: 'onboarding UX research ticket', tool: 'Linear', ref: 'OKA-207', time: '9:28 am' },
      { verb: 'send', obj: 'weekly investor update', tool: 'Gmail', ref: 'investors@list', time: '11:55 am' }
    ]},
    { date: 'Friday · Mar 14', entries: [
      { verb: 'schedule', obj: 'board prep call', tool: 'Calendar', ref: 'Mar 20', time: '10:07 am' },
      { verb: 'update', obj: 'Mnemix deal stage', tool: 'Salesforce', ref: 'Mnemix', time: '2:19 pm' },
      { verb: 'send', obj: 'partner feedback summary', tool: 'Slack', ref: '#partners', time: '4:33 pm' }
    ]}
  ],

  // ── Integrations ──
  integrations: {
    execution: [
      { name: 'Linear', icon: '◆', color: '--purple', bg: '--purple-bg', connected: true },
      { name: 'Slack', icon: '#', color: '--yellow', bg: '--yellow-bg', connected: true },
      { name: 'Google Calendar', icon: '◈', color: '--teal', bg: '--teal-bg', connected: true },
      { name: 'Salesforce', icon: '☁', color: '--blue', bg: '--bbg', connected: false },
      { name: 'Gmail', icon: '✉', color: '--red', bg: '--red-bg', connected: false }
    ],
    context: [
      { name: 'LinkedIn', icon: 'in', color: '--blue', bg: '--bbg', connected: false },
      { name: 'X (Twitter)', icon: '𝕏', color: '--ink', bg: '--bg3', connected: false }
    ]
  },

  // ── Live Simulation ──
  liveEvents: [],
  liveNotifications: [],
  _liveSimTimer: null,

  startLiveSimulation: function() {
    var self = this;
    if (self._liveSimTimer) return;

    var commitmentTexts = [
      { verb: 'review', obj: 'onboarding flow PR', tool: 'GitHub', screen: 'd01-home' },
      { verb: 'send', obj: 'weekly metrics update', tool: 'Slack #team', screen: 'd01-home' },
      { verb: 'draft', obj: 'partnership proposal · Mnemix', tool: 'Gmail', screen: 'd01-home' },
      { verb: 'update', obj: 'sprint board · sprint 15', tool: 'Linear', screen: 'd01-home' },
      { verb: 'schedule', obj: 'design review · 30 min', tool: 'Calendar', screen: 'd01-home' },
      { verb: 'create', obj: 'onboarding checklist doc', tool: 'Notion', screen: 'd01-home' }
    ];

    var notificationTexts = [
      { text: 'Sarah Rhodes viewed your materials', screen: 'd38-notifications' },
      { text: 'Marcus completed API rate limit fix', screen: 'd38-notifications' },
      { text: 'Priya updated Acme deal stage', screen: 'd38-notifications' },
      { text: 'Calendar conflict detected for Thursday', screen: 'd12-conflict-detection' },
      { text: 'Resonance meeting prep is ready', screen: 'd08-prep-brief' }
    ];

    var touchpointTexts = [
      { text: 'Sarah Rhodes · last contact updated', screen: 'd22-relationship-health' },
      { text: 'Alex Chen · follow-up overdue 12 days', screen: 'd22-relationship-health' },
      { text: 'Nina Park · new LinkedIn activity detected', screen: 'd22-relationship-health' },
      { text: 'Resonance team · meeting scheduled', screen: 'd22-relationship-health' }
    ];

    function scheduleNext() {
      var delay = 30000 + Math.floor(Math.random() * 10000);
      self._liveSimTimer = setTimeout(function() {
        var roll = Math.random();
        var event;

        if (roll < 0.4) {
          var item = commitmentTexts[Math.floor(Math.random() * commitmentTexts.length)];
          event = { type: 'commitment', verb: item.verb, obj: item.obj, tool: item.tool, text: item.verb + ' ' + item.obj, timestamp: new Date().toISOString(), screen: item.screen };
          self.liveEvents.push(event);
        } else if (roll < 0.7) {
          var notif = notificationTexts[Math.floor(Math.random() * notificationTexts.length)];
          event = { type: 'notification', text: notif.text, timestamp: new Date().toISOString(), screen: notif.screen };
          self.liveNotifications.push(event);
        } else {
          var tp = touchpointTexts[Math.floor(Math.random() * touchpointTexts.length)];
          event = { type: 'touchpoint', text: tp.text, timestamp: new Date().toISOString(), screen: tp.screen };
          self.liveEvents.push(event);
        }

        window.dispatchEvent(new CustomEvent('okaeri-live-event', { detail: event }));
        scheduleNext();
      }, delay);
    }

    scheduleNext();
  },

  // ── Meeting 2: Resonance Design Partner Call ──
  meeting2: {
    name: 'Design partner call · Resonance',
    time: '2:00 pm',
    duration: '60 min',
    attendees: ['Resonance team', 'Jess', 'Marcus'],
    commitments: [
      { id: 'm2c1', verb: 'send', obj: 'API access credentials', tool: 'Slack #resonance', toolClass: 'tt-sl', assignee: '@marcus', meta: 'today', label: 'Credentials sent', detail: 'Slack #resonance' },
      { id: 'm2c2', verb: 'schedule', obj: 'weekly sync · recurring', tool: 'Calendar', toolClass: 'tt-ca', assignee: '@jess', meta: 'starting next week', label: 'Recurring invite created', detail: 'Every Tuesday 2pm' },
      { id: 'm2c3', verb: 'create', obj: 'integration test plan', tool: 'Linear', toolClass: 'tt-li', assignee: '@marcus', meta: 'by Friday', label: 'Ticket created', detail: 'Linear OKA-216' }
    ]
  },

  // ── Navigation Helper ──
  go: function(screenId) {
    if (window.OKAERI_NAV && window.OKAERI_NAV.navigate) {
      window.OKAERI_NAV.navigate(screenId);
    }
  },

  goBack: function() {
    if (window.OKAERI_NAV && window.OKAERI_NAV.goBack) {
      window.OKAERI_NAV.goBack();
    }
  }
};

// ── Speech Synthesis (ElevenLabs + Web Speech API fallback) ──
OKAERI._speaking = false;
OKAERI._currentUtterance = null;
OKAERI._audioEl = null;
OKAERI._useElevenLabs = false;

// TTS Provider config (Smallest AI primary, ElevenLabs secondary)
OKAERI._ttsKey = localStorage.getItem('okaeri_tts_key') || '';
OKAERI._ttsVoice = localStorage.getItem('okaeri_tts_voice') || 'sophia';
OKAERI._ttsProvider = localStorage.getItem('okaeri_tts_provider') || 'smallest';

// Check if TTS is configured
OKAERI._useTTS = !!OKAERI._ttsKey;

// Set TTS API key
OKAERI.setTTSKey = function(key) {
  OKAERI._ttsKey = key;
  OKAERI._useTTS = !!key;
  if (key) {
    localStorage.setItem('okaeri_tts_key', key);
  } else {
    localStorage.removeItem('okaeri_tts_key');
  }
};

OKAERI.setTTSVoice = function(voiceId) {
  OKAERI._ttsVoice = voiceId;
  localStorage.setItem('okaeri_tts_voice', voiceId);
};

OKAERI.setTTSProvider = function(provider) {
  OKAERI._ttsProvider = provider;
  localStorage.setItem('okaeri_tts_provider', provider);
};

// Legacy aliases for settings screen compatibility
OKAERI.setElevenLabsKey = OKAERI.setTTSKey;
OKAERI.setElevenLabsVoice = OKAERI.setTTSVoice;
OKAERI._elevenLabsKey = OKAERI._ttsKey;

// ── Main speak function ──
OKAERI.speak = function(text, options) {
  if (OKAERI._useTTS && OKAERI._ttsKey) {
    OKAERI._speakAPI(text, options);
  } else {
    OKAERI._speakWebSpeech(text, options);
  }
};

// ── API TTS (Smallest AI or ElevenLabs) ──
OKAERI._speakAPI = function(text, options) {
  try {
    OKAERI.stopSpeech();
    OKAERI._speaking = true;

    var url, headers, body;

    if (OKAERI._ttsProvider === 'elevenlabs') {
      // ElevenLabs
      url = 'https://api.elevenlabs.io/v1/text-to-speech/' + OKAERI._ttsVoice;
      headers = {
        'Content-Type': 'application/json',
        'xi-api-key': OKAERI._ttsKey,
        'Accept': 'audio/mpeg'
      };
      body = JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.5, similarity_boost: 0.75 }
      });
    } else {
      // Smallest AI (default)
      url = 'https://api.smallest.ai/waves/v1/lightning-v3.1/get_speech';
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + OKAERI._ttsKey
      };
      body = JSON.stringify({
        text: text,
        voice_id: OKAERI._ttsVoice,
        sample_rate: 24000,
        output_format: 'mp3'
      });
    }

    fetch(url, { method: 'POST', headers: headers, body: body })
    .then(function(response) {
      if (!response.ok) {
        return response.text().then(function(errText) {
          console.warn('TTS API error (' + response.status + '):', errText);
          OKAERI._speaking = false;
          OKAERI._speakWebSpeech(text, options);
          return null;
        });
      }
      return response.blob();
    })
    .then(function(blob) {
      if (!blob) return;
      var audioUrl = URL.createObjectURL(blob);
      var audio = new Audio(audioUrl);
      OKAERI._audioEl = audio;
      audio.volume = options && options.volume || 0.8;

      audio.onended = function() {
        OKAERI._speaking = false;
        OKAERI._audioEl = null;
        URL.revokeObjectURL(audioUrl);
        if (options && options.onEnd) options.onEnd();
      };
      audio.onerror = function() {
        OKAERI._speaking = false;
        OKAERI._audioEl = null;
        URL.revokeObjectURL(audioUrl);
        OKAERI._speakWebSpeech(text, options);
      };

      audio.play().catch(function() {
        OKAERI._speaking = false;
        OKAERI._speakWebSpeech(text, options);
      });
    })
    .catch(function(err) {
      console.warn('TTS fetch error:', err);
      OKAERI._speaking = false;
      OKAERI._speakWebSpeech(text, options);
    });
  } catch(e) {
    OKAERI._speaking = false;
    OKAERI._speakWebSpeech(text, options);
  }
};

// ── Web Speech API fallback ──
OKAERI._speakWebSpeech = function(text, options) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    OKAERI._speaking = true;

    var utter = new SpeechSynthesisUtterance(text);
    utter.rate = options && options.rate || 0.95;
    utter.pitch = options && options.pitch || 1.05;
    utter.volume = options && options.volume || 0.7;

    var voices = speechSynthesis.getVoices();
    var preferred = null;
    var naturalNames = ['Zoe','Ava','Google UK English Female','Google US English','Microsoft Aria','Microsoft Jenny','Samantha','Karen'];
    for (var i = 0; i < naturalNames.length; i++) {
      preferred = voices.find(function(v) { return v.name.indexOf(naturalNames[i]) !== -1; });
      if (preferred) break;
    }
    if (!preferred) preferred = voices.find(function(v) { return v.lang === 'en-US'; }) || voices[0];
    if (preferred) utter.voice = preferred;

    OKAERI._currentUtterance = utter;
    utter.onend = function() { OKAERI._speaking = false; OKAERI._currentUtterance = null; if (options && options.onEnd) options.onEnd(); };
    utter.onerror = function() { OKAERI._speaking = false; OKAERI._currentUtterance = null; };

    window.speechSynthesis.speak(utter);
  } catch(e) { OKAERI._speaking = false; }
};

// ── Pause / Resume / Stop ──
OKAERI.pauseSpeech = function() {
  if (OKAERI._audioEl && !OKAERI._audioEl.paused) {
    OKAERI._audioEl.pause();
  } else if (window.speechSynthesis && speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
};

OKAERI.resumeSpeech = function() {
  if (OKAERI._audioEl && OKAERI._audioEl.paused) {
    OKAERI._audioEl.play();
  } else if (window.speechSynthesis && speechSynthesis.paused) {
    speechSynthesis.resume();
  }
};

OKAERI.stopSpeech = function() {
  if (OKAERI._audioEl) {
    OKAERI._audioEl.pause();
    OKAERI._audioEl.currentTime = 0;
    OKAERI._audioEl = null;
  }
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
  }
  OKAERI._speaking = false;
  OKAERI._currentUtterance = null;
};

OKAERI.toggleSpeech = function() {
  if (OKAERI._audioEl) {
    if (OKAERI._audioEl.paused) { OKAERI._audioEl.play(); return 'playing'; }
    else { OKAERI._audioEl.pause(); return 'paused'; }
  }
  if (window.speechSynthesis) {
    if (speechSynthesis.paused) { speechSynthesis.resume(); return 'playing'; }
    else if (speechSynthesis.speaking) { speechSynthesis.pause(); return 'paused'; }
  }
  return 'idle';
};

// ── Notification Sounds (Web Audio API) ──
OKAERI.playSound = function(type) {
  try {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'execute') {
      osc.frequency.value = 880;
      osc.type = 'sine';
      gain.gain.value = 0.08;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'notify') {
      osc.frequency.value = 660;
      osc.type = 'sine';
      gain.gain.value = 0.05;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
      setTimeout(function() {
        var osc2 = ctx.createOscillator();
        var gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.frequency.value = 880;
        osc2.type = 'sine';
        gain2.gain.value = 0.05;
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc2.start(ctx.currentTime);
        osc2.stop(ctx.currentTime + 0.15);
      }, 120);
    } else if (type === 'success') {
      osc.frequency.value = 523;
      osc.type = 'sine';
      gain.gain.value = 0.06;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
      setTimeout(function() {
        var osc2 = ctx.createOscillator();
        var gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.frequency.value = 784;
        osc2.type = 'sine';
        gain2.gain.value = 0.06;
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc2.start(ctx.currentTime);
        osc2.stop(ctx.currentTime + 0.3);
      }, 150);
    }
  } catch(e) {}
};
