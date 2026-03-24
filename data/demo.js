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
