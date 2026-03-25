// ═══════════════════════════════════════════════════
// OKAERI — Navigation Logic
// ═══════════════════════════════════════════════════

(function() {
  const NAV_STRUCTURE = [
    { section: 'Core Loop', items: [
      { id: 'd00-intro', label: 'Intro' },
      { id: 'd00-comparison', label: 'Before & After' },
      { id: 'd01-home', label: 'Home' },
      { id: 'd02-empty-state', label: 'Empty State' },
      { id: 'd03-live-meeting', label: 'Live Meeting' },
      { id: 'd03b-live-resonance', label: 'Live: Resonance' },
      { id: 'd04-confirm-execute', label: 'Confirm & Execute' },
      { id: 'd04b-debrief', label: 'Meeting Debrief' },
      { id: 'd05-all-clear', label: 'All Clear' },
      { id: 'd06-execution-log', label: 'Execution Log' },
      { id: 'd40-execution-failure', label: 'Execution Failure' },
      { id: 'd45-recurring', label: 'Recurring Patterns' },
      { id: 'd07-voice-inbox', label: 'Voice Inbox' }
    ]},
    { section: 'Voice', items: [
      { id: 'd61-teach-okaeri', label: 'Teach Okaeri' },
      { id: 'd61b-memory-confirmed', label: 'Memory Confirmed' },
      { id: 'd62b-morning-audio', label: 'Morning Brief' },
      { id: 'd62-audio-brief', label: 'Pre-Meeting Brief' },
      { id: 'd63-whisper', label: 'Whisper Guidance' },
      { id: 'd64-spoken-debrief', label: 'Spoken Debrief' }
    ]},
    { section: 'Intelligence', items: [
      { id: 'd08-prep-brief', label: 'Prep Brief' },
      { id: 'd08b-prep-resonance', label: 'Prep: Resonance' },
      { id: 'd09-sarah-profile', label: 'Sarah Rhodes Profile' },
      { id: 'd10-michael-profile', label: 'Michael Kim Profile' },
      { id: 'd10b-marcus-profile', label: 'Marcus Chen Profile' },
      { id: 'd10c-priya-profile', label: 'Priya Rajan Profile' },
      { id: 'd10d-james-profile', label: 'James Wu Profile' },
      { id: 'd11-ask-okaeri', label: 'Ask Okaeri' },
      { id: 'd12-conflict-detection', label: 'Conflict Detection' },
      { id: 'd13-pattern-detection', label: 'Pattern Detection' },
      { id: 'd14-meeting-quality', label: 'Meeting Quality' },
      { id: 'd15-proactive-suggestions', label: 'Proactive Suggestions' },
      { id: 'd16-weekly-digest', label: 'Weekly Digest' },
      { id: 'd44-reasoning', label: 'Reasoning Log' },
      { id: 'd46-attribution', label: 'Attribution Graph' },
      { id: 'd47-change-detection', label: 'Change Detection' },
      { id: 'd48-interventions', label: 'Intervention Rules' },
      { id: 'd49-dependencies', label: 'Dependencies' },
      { id: 'd55-unified-model', label: 'Unified Model' },
      { id: 'd56-meeting-steering', label: 'Meeting Steering' },
      { id: 'd57-meeting-score', label: 'Meeting Score' },
      { id: 'd60-benchmarking', label: 'Benchmarking' }
    ]},
    { section: 'Planning', items: [
      { id: 'd17-goals', label: 'Goals' },
      { id: 'd18-morning-briefing', label: 'Morning Briefing' },
      { id: 'd19-eod-review', label: 'End of Day Review' },
      { id: 'd20-calendar', label: 'Calendar View' },
      { id: 'd21-calendar-defense', label: 'Calendar Defense' },
      { id: 'd50-cadence', label: 'Operating Cadence' }
    ]},
    { section: 'Relationships', items: [
      { id: 'd22-relationship-health', label: 'Relationship Health' },
      { id: 'd23-delegation', label: 'Delegation View' }
    ]},
    { section: 'Team', items: [
      { id: 'd24-team-view', label: 'Team View' },
      { id: 'd25-team-admin', label: 'Team Admin' }
    ]},
    { section: 'Documents', items: [
      { id: 'd26-knowledge-base', label: 'Knowledge Base' },
      { id: 'd27-vocabulary', label: 'Custom Vocabulary' },
      { id: 'd28-templates', label: 'Meeting Templates' },
      { id: 'd29-bundles', label: 'Commitment Bundles' }
    ]},
    { section: 'Artifacts', items: [
      { id: 'd30-lifecycle', label: 'Commitment Lifecycle' },
      { id: 'd31-meeting-brief', label: 'Meeting Brief' },
      { id: 'd32-investor-update', label: 'Investor Update' },
      { id: 'd33-receipt-artifact', label: 'Commitment Receipt' },
      { id: 'd42-meeting-history', label: 'Meeting History' },
      { id: 'd53-outcomes', label: 'Outcome Proof' },
      { id: 'd58-smart-draft', label: 'Smart Draft' }
    ]},
    { section: 'Inbox', items: [
      { id: 'd34-email-triage', label: 'Email Triage' },
      { id: 'd07-voice-inbox', label: 'Voice Inbox' }
    ]},
    { section: 'System', items: [
      { id: 'd35-integrations', label: 'Integrations' },
      { id: 'd36-earned-autonomy', label: 'Earned Autonomy' },
      { id: 'd37-onboarding', label: 'Onboarding' },
      { id: 'd38-notifications', label: 'Notifications' },
      { id: 'd39-search', label: 'Search' },
      { id: 'd41-learning-history', label: 'Learning History' },
      { id: 'd43-settings', label: 'Settings' },
      { id: 'd51-style-learning', label: 'Style Learning' },
      { id: 'd52-continuity', label: 'Continuity' },
      { id: 'd54-privacy', label: 'Privacy' },
      { id: 'd59-ambient-exec', label: 'Ambient Mode' },
      { id: 'd65-how-okaeri-works', label: 'How Okaeri Works' },
      { id: 'd66-week-later', label: 'Week 1 Progression' },
      { id: 'd67-error-states', label: 'Error States' }
    ]},
    { section: 'Mobile', items: [
      { id: 'm01-capture', label: 'Capture' },
      { id: 'm02-post-capture', label: 'Post-Capture' },
      { id: 'm03-realtime-intel', label: 'Real-Time Intel' }
    ]},
    { section: 'Ambient', items: [
      { id: 'a01-menubar', label: 'Menu Bar' },
      { id: 'a02-widgets', label: 'Desktop Widget' }
    ]}
  ];

  // Status text per screen
  const SCREEN_STATUS = {
    'd00-intro': { text: 'welcome', live: false },
    'd00-comparison': { text: 'compare', live: false },
    'd01-home': { text: 'listening', live: false },
    'd02-empty-state': { text: 'all clear', live: false, green: true },
    'd03-live-meeting': { text: 'recording', live: true },
    'd03b-live-resonance': { text: 'recording', live: true },
    'd04-confirm-execute': { text: '4 extracted', live: false },
    'd04b-debrief': { text: 'debrief ready', live: false },
    'd05-all-clear': { text: 'all clear', live: false, green: true },
    'd06-execution-log': { text: 'all clear', live: false },
    'd07-voice-inbox': { text: 'listening', live: false },
    'd08-prep-brief': { text: '28 min away', live: false },
    'd08b-prep-resonance': { text: '4 hours away', live: false },
    'd09-sarah-profile': { text: 'prep ready', live: false },
    'd10-michael-profile': { text: 'prep ready', live: false },
    'd11-ask-okaeri': { text: 'listening', live: false },
    'd12-conflict-detection': { text: '3 conflicts', live: false },
    'd13-pattern-detection': { text: 'all clear', live: false },
    'd14-meeting-quality': { text: 'all clear', live: false },
    'd15-proactive-suggestions': { text: '3 suggestions', live: false },
    'd16-weekly-digest': { text: 'all clear', live: false },
    'd17-goals': { text: 'listening', live: false },
    'd18-morning-briefing': { text: '6:58 am', live: false },
    'd19-eod-review': { text: '6:12 pm', live: false },
    'd20-calendar': { text: 'listening', live: false },
    'd21-calendar-defense': { text: 'listening', live: false },
    'd22-relationship-health': { text: 'all clear', live: false },
    'd23-delegation': { text: 'all clear', live: false },
    'd24-team-view': { text: 'all clear', live: false },
    'd25-team-admin': { text: 'all clear', live: false },
    'd26-knowledge-base': { text: 'listening', live: false },
    'd27-vocabulary': { text: 'listening', live: false },
    'd28-templates': { text: 'listening', live: false },
    'd29-bundles': { text: '12 commits', live: false },
    'd30-lifecycle': { text: 'all clear', live: false },
    'd31-meeting-brief': { text: 'all clear', live: false },
    'd32-investor-update': { text: 'listening', live: false },
    'd33-receipt-artifact': { text: 'verified', live: false, green: true },
    'd34-email-triage': { text: '7 emails', live: false },
    'd35-integrations': { text: 'listening', live: false },
    'd36-earned-autonomy': { text: 'level 3', live: false },
    'd37-onboarding': { text: 'welcome', live: false },
    'd38-notifications': { text: '3 new', live: false },
    'd39-search': { text: 'listening', live: false },
    'd40-execution-failure': { text: '1 failed', live: false },
    'd41-learning-history': { text: '96% accuracy', live: false },
    'd42-meeting-history': { text: '10 meetings', live: false },
    'd43-settings': { text: 'settings', live: false },
    'd44-reasoning': { text: 'transparency', live: false },
    'd45-recurring': { text: '5 patterns', live: false },
    'd46-attribution': { text: 'social graph', live: false },
    'd47-change-detection': { text: '4 shifts', live: false },
    'd48-interventions': { text: '13 delivered', live: false },
    'd49-dependencies': { text: '3 blocked', live: false },
    'd50-cadence': { text: '3 active', live: false },
    'd51-style-learning': { text: '847 signals', live: false },
    'd52-continuity': { text: '78% coverage', live: false },
    'd53-outcomes': { text: '+37% execution', live: false },
    'd54-privacy': { text: 'privacy', live: false },
    'd55-unified-model': { text: 'unified', live: false },
    'd56-meeting-steering': { text: '5 detectors', live: false },
    'd57-meeting-score': { text: '78/100', live: false },
    'd58-smart-draft': { text: 'drafting', live: false },
    'd59-ambient-exec': { text: 'quiet', live: false },
    'd60-benchmarking': { text: 'patterns', live: false },
    'd61-teach-okaeri': { text: '14 memories', live: false },
    'd62-audio-brief': { text: 'brief ready', live: false },
    'd63-whisper': { text: '4 delivered', live: false },
    'd64-spoken-debrief': { text: 'debrief ready', live: false },
    'd65-how-okaeri-works': { text: 'your style', live: false },
    'd66-week-later': { text: 'day 7', live: false },
    'd67-error-states': { text: 'edge cases', live: false },
    'd61b-memory-confirmed': { text: 'saved', live: false },
    'd62b-morning-audio': { text: 'morning', live: false },
    'd10b-marcus-profile': { text: '92% rate', live: false },
    'd10c-priya-profile': { text: '100% rate', live: false },
    'd10d-james-profile': { text: '89% rate', live: false },
    'm01-capture': { text: 'recording', live: true },
    'm02-post-capture': { text: '4 extracted', live: false },
    'm03-realtime-intel': { text: 'live intel', live: true },
    'a01-menubar': { text: 'listening', live: false },
    'a02-widgets': { text: 'all clear', live: false },
    'd00-product-view': { text: 'product', live: false }
  };

  // Build flat index of screen positions for directional transitions
  const SCREEN_INDEX = {};
  (function(){
    var idx = 0;
    NAV_STRUCTURE.forEach(function(section){
      section.items.forEach(function(item){
        SCREEN_INDEX[item.id] = idx++;
      });
    });
  })();

  const collapsedSections = {};
  let currentView = 'desktop'; // desktop | mobile | ambient
  let sidebarCollapsed = (window.OKAERI && window.OKAERI.sidebarCollapsed) || false;

  // ── Demo Mode State ──
  const DEMO_STEPS = [
    { id: 'd01-home', label: 'what matters now', duration: 6000 },
    { id: 'd08-prep-brief', label: 'why this meeting matters', duration: 6000 },
    { id: 'd03-live-meeting', label: 'what okaeri notices', duration: 8000 },
    { id: 'd04-confirm-execute', label: 'what it will do', duration: 10000 },
    { id: 'd05-all-clear', label: 'what changed', duration: 6000 }
  ];
  let demoActive = false;
  let demoStep = 0;
  let demoPaused = false;
  let demoTimer = null;

  function buildSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '';

    // Default collapsed state — only Core Loop and Voice open
    if (Object.keys(collapsedSections).length === 0) {
      NAV_STRUCTURE.forEach(s => {
        if (s.section !== 'Core Loop' && s.section !== 'Voice') {
          collapsedSections[s.section] = true;
        }
      });
    }

    // Apply collapsed class
    sidebar.classList.toggle('collapsed', sidebarCollapsed);

    // Wordmark
    const wm = document.createElement('div');
    wm.className = 'sidebar-wm';
    wm.textContent = sidebarCollapsed ? 'o' : 'okaeri';
    wm.addEventListener('click', () => navigate('d01-home'));
    sidebar.appendChild(wm);

    NAV_STRUCTURE.forEach(section => {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'nav-section';

      const header = document.createElement('div');
      header.className = 'nav-section-header';
      header.textContent = section.section;
      header.addEventListener('click', () => {
        collapsedSections[section.section] = !collapsedSections[section.section];
        buildSidebar();
        highlightActive();
      });
      sectionEl.appendChild(header);

      if (!collapsedSections[section.section]) {
        section.items.forEach(item => {
          const link = document.createElement('div');
          link.className = 'nav-item';
          link.dataset.screen = item.id;
          if (sidebarCollapsed) {
            link.textContent = item.label.substring(0, 2).toUpperCase();
            // Add tooltip
            const tooltip = document.createElement('span');
            tooltip.className = 'nav-tooltip';
            tooltip.textContent = item.label;
            link.appendChild(tooltip);
          } else {
            link.textContent = item.label;
          }
          link.addEventListener('click', () => navigate(item.id));
          sectionEl.appendChild(link);
        });
      }

      sidebar.appendChild(sectionEl);
    });

    // Collapse toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'collapse-toggle';
    toggleBtn.innerHTML = sidebarCollapsed ? '&raquo;' : '&laquo;';
    toggleBtn.title = sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar';
    toggleBtn.addEventListener('click', toggleCollapse);
    sidebar.appendChild(toggleBtn);
  }

  function toggleCollapse() {
    sidebarCollapsed = !sidebarCollapsed;
    // Persist on window.OKAERI
    if (window.OKAERI) window.OKAERI.sidebarCollapsed = sidebarCollapsed;
    buildSidebar();
    highlightActive();
  }

  function highlightActive() {
    const id = window.OKAERI.currentScreen;
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.screen === id);
    });
  }

  function updateTitlebar(screenId) {
    const status = SCREEN_STATUS[screenId] || { text: 'listening', live: false };
    const titleRight = document.getElementById('titleRight');
    if (!titleRight) return;

    const hint = '<span class="kbd-hint">\u2318K</span>';
    if (status.live) {
      titleRight.innerHTML = '<div class="live-dot"></div><span class="tstat" style="color:var(--amber)">' + status.text + '</span>' + hint;
    } else if (status.green) {
      titleRight.innerHTML = '<div class="pulse-dot" style="background:var(--green)"></div><span class="tstat" style="color:var(--green)">' + status.text + '</span>' + hint;
    } else {
      titleRight.innerHTML = '<div class="pulse-dot"></div><span class="tstat">' + status.text + '</span>' + hint;
    }
  }

  function getScreenType(screenId) {
    if (screenId.startsWith('m')) return 'mobile';
    if (screenId.startsWith('a')) return 'ambient';
    return 'desktop';
  }

  function setView(view) {
    currentView = view;
    const mainPanel = document.getElementById('mainPanel');
    const phoneFrame = document.getElementById('phoneFrame');
    const ambientFrame = document.getElementById('ambientFrame');
    const contentDiv = document.getElementById('screenContent');

    document.querySelectorAll('.view-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === view);
    });

    // Toggle product mode class on body
    document.body.classList.toggle('product-mode', view === 'product');

    if (view === 'mobile') {
      mainPanel.style.display = 'none';
      phoneFrame.style.display = 'flex';
      ambientFrame.style.display = 'none';
    } else if (view === 'ambient') {
      mainPanel.style.display = 'none';
      phoneFrame.style.display = 'none';
      ambientFrame.style.display = 'flex';
    } else {
      // desktop and product both use mainPanel
      mainPanel.style.display = 'flex';
      phoneFrame.style.display = 'none';
      ambientFrame.style.display = 'none';
    }
  }

  async function navigate(screenId) {
    const type = getScreenType(screenId);

    // Auto-switch view
    if (type === 'mobile' && currentView !== 'mobile') setView('mobile');
    else if (type === 'ambient' && currentView !== 'ambient') setView('ambient');
    else if (screenId === 'd00-product-view' && currentView !== 'product') setView('product');
    else if (type === 'desktop' && screenId !== 'd00-product-view' && currentView === 'product') setView('desktop');
    else if (type === 'desktop' && currentView !== 'desktop' && currentView !== 'product') setView('desktop');

    // Track history
    if (window.OKAERI.currentScreen !== screenId) {
      window.OKAERI.screenHistory.push(window.OKAERI.currentScreen);
      window.OKAERI.previousScreen = window.OKAERI.currentScreen;
    }
    window.OKAERI.currentScreen = screenId;

    // Determine target container
    let container;
    if (type === 'mobile') {
      container = document.getElementById('phoneScreenContent');
    } else if (type === 'ambient') {
      container = document.getElementById('ambientContent');
    } else {
      container = document.getElementById('screenContent');
    }

    // Fetch screen HTML
    let path;
    if (type === 'mobile') path = 'screens/mobile/' + screenId + '.html';
    else if (type === 'ambient') path = 'screens/ambient/' + screenId + '.html';
    else path = 'screens/desktop/' + screenId + '.html';

    // Show skeleton loading state
    const statusBarEl = container.querySelector('.phone-status-bar');
    const statusBarHTML = (type === 'mobile' && statusBarEl) ? statusBarEl.outerHTML : '';
    container.innerHTML = statusBarHTML
      + '<div style="padding:40px 32px">'
      + '<div class="skeleton-bar" style="width:60%"></div>'
      + '<div class="skeleton-bar" style="width:80%"></div>'
      + '<div class="skeleton-bar" style="width:40%"></div>'
      + '<div class="skeleton-bar" style="width:70%"></div>'
      + '</div>';

    const errorFallback = '<div style="padding:48px 32px;text-align:center">'
      + '<div style="font-size:15px;font-weight:200;color:var(--ink3);letter-spacing:0.32em;margin-bottom:14px">okaeri</div>'
      + '<div style="display:inline-block;border:0.5px solid var(--rule);border-radius:10px;padding:20px 32px;font-size:12px;font-weight:200;color:var(--ink3);letter-spacing:0.14em;margin-bottom:16px">screen not yet built</div>'
      + '<div style="display:flex;gap:16px;justify-content:center;margin-top:16px">'
      + '<button onclick="OKAERI.go(\'' + screenId + '\')" style="font-size:10px;font-weight:200;color:var(--ink3);letter-spacing:0.3em;text-transform:uppercase;background:none;border:none;text-decoration:underline;cursor:pointer;font-family:inherit">retry</button>'
      + '<button onclick="OKAERI.go(\'d01-home\')" style="font-size:10px;font-weight:200;color:var(--ink3);letter-spacing:0.3em;text-transform:uppercase;background:none;border:none;text-decoration:underline;cursor:pointer;font-family:inherit">go home</button>'
      + '</div></div>';

    try {
      const resp = await fetch(path);
      if (!resp.ok) {
        container.innerHTML = errorFallback;
      } else {
        const html = await resp.text();
        var oldIdx = SCREEN_INDEX[window.OKAERI.previousScreen] || 0;
        var newIdx = SCREEN_INDEX[screenId] || 0;
        var slideDir = newIdx >= oldIdx ? '6px' : '-6px';
        container.style.opacity = '0';
        container.style.transform = 'translateY(' + slideDir + ')';
        // Preserve status bar for mobile
        const freshStatusBar = (type === 'mobile' && container.querySelector('.phone-status-bar')) ? container.querySelector('.phone-status-bar').outerHTML : '';
        container.innerHTML = freshStatusBar + html;

        // Execute inline scripts
        container.querySelectorAll('script').forEach(oldScript => {
          const newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });

        // Animate in
        requestAnimationFrame(() => {
          container.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
          container.style.opacity = '1';
          container.style.transform = 'translateY(0)';
        });
      }
    } catch (e) {
      container.innerHTML = errorFallback;
    }

    // Update URL hash
    window.location.hash = screenId;

    // Update sidebar highlight
    highlightActive();

    // Update titlebar status
    updateTitlebar(screenId);

    // Scroll to top
    container.scrollTop = 0;
  }

  function goBack() {
    const history = window.OKAERI.screenHistory;
    if (history.length > 0) {
      const prev = history.pop();
      window.OKAERI.previousScreen = history[history.length - 1] || null;
      navigate(prev);
      // Remove the duplicate entry navigate() adds
      window.OKAERI.screenHistory.pop();
    }
  }

  // ── Demo Mode ──
  function updateDemoIndicator() {
    const el = document.getElementById('demoStepText');
    const pauseBtn = document.getElementById('demoPause');
    if (!el) return;
    const step = DEMO_STEPS[demoStep];
    el.innerHTML = 'step ' + (demoStep + 1) + ' of ' + DEMO_STEPS.length + ' &middot; ' + step.label;
    if (pauseBtn) pauseBtn.textContent = demoPaused ? 'play' : 'pause';
  }

  function demoGoToStep(idx) {
    if (idx < 0 || idx >= DEMO_STEPS.length) return;
    demoStep = idx;
    clearTimeout(demoTimer);
    navigate(DEMO_STEPS[demoStep].id);
    updateDemoIndicator();
    if (!demoPaused) scheduleDemoAdvance();
  }

  function scheduleDemoAdvance() {
    clearTimeout(demoTimer);
    if (!demoActive || demoPaused) return;
    const step = DEMO_STEPS[demoStep];
    demoTimer = setTimeout(function() {
      if (!demoActive || demoPaused) return;
      if (demoStep < DEMO_STEPS.length - 1) {
        demoGoToStep(demoStep + 1);
      } else {
        // Loop back to start
        demoGoToStep(0);
      }
    }, step.duration);
  }

  function startDemo() {
    demoActive = true;
    demoStep = 0;
    demoPaused = false;
    const indicator = document.getElementById('demoIndicator');
    const btn = document.getElementById('demoBtn');
    if (indicator) indicator.classList.add('on');
    if (btn) btn.classList.add('active');
    demoGoToStep(0);
  }

  function stopDemo() {
    demoActive = false;
    demoPaused = false;
    clearTimeout(demoTimer);
    const indicator = document.getElementById('demoIndicator');
    const btn = document.getElementById('demoBtn');
    if (indicator) indicator.classList.remove('on');
    if (btn) btn.classList.remove('active');
  }

  function toggleDemo() {
    if (demoActive) stopDemo();
    else startDemo();
  }

  function toggleDemoPause() {
    demoPaused = !demoPaused;
    updateDemoIndicator();
    if (!demoPaused) scheduleDemoAdvance();
  }

  // ── Presentation Mode ──
  function togglePresentation() {
    document.body.classList.toggle('presentation-mode');
  }

  // ── Dark Mode ──
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    try { localStorage.setItem('okaeri-dark-mode', isDark ? '1' : '0'); } catch(e) {}
    // Update theme-color meta
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#1a1a18' : '#FAFAF8');
  }

  function applyDarkModePreference() {
    try {
      const pref = localStorage.getItem('okaeri-dark-mode');
      if (pref === '1') {
        document.body.classList.add('dark-mode');
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#1a1a18');
      }
    } catch(e) {}
  }

  // ── Keyboard Shortcuts ──
  function handleKeydown(e) {
    // Ignore if typing in an input/textarea
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) {
      // Only handle Escape in inputs
      if (e.key === 'Escape') {
        e.target.blur();
      }
      return;
    }

    // Cmd+Shift+P / Ctrl+Shift+P — Presentation mode
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      togglePresentation();
      return;
    }

    // Cmd+\ or Ctrl+\ — Toggle sidebar collapse
    if ((e.metaKey || e.ctrlKey) && e.key === '\\') {
      e.preventDefault();
      toggleCollapse();
      return;
    }

    // Ctrl+Shift+D — Toggle dark mode
    if (e.ctrlKey && e.shiftKey && (e.key === 'd' || e.key === 'D')) {
      e.preventDefault();
      toggleDarkMode();
      return;
    }

    // Cmd+K / Ctrl+K — Search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      navigate('d39-search');
      // Focus search input after screen loads
      setTimeout(function() {
        var searchInput = document.querySelector('.search-input') || document.querySelector('input[type="text"]');
        if (searchInput) searchInput.focus();
      }, 350);
      return;
    }

    // Escape — close modal, exit demo, or go back
    if (e.key === 'Escape') {
      // Close keyboard shortcuts overlay
      var kbOverlay = document.getElementById('kbShortcutsOverlay');
      if (kbOverlay && kbOverlay.classList.contains('on')) {
        kbOverlay.classList.remove('on');
        return;
      }
      // Close any open modal
      var openModal = document.querySelector('.modal-overlay.on');
      if (openModal) {
        openModal.classList.remove('on');
        return;
      }
      // Exit demo mode
      if (demoActive) {
        stopDemo();
        return;
      }
      // Go back
      goBack();
      return;
    }

    // Enter — execute all on d04
    if (e.key === 'Enter') {
      if (window.OKAERI.currentScreen === 'd04-confirm-execute') {
        var execBtn = document.getElementById('execAllBtn');
        if (execBtn) execBtn.click();
      }
      return;
    }

    // ? — show keyboard shortcuts
    if (e.key === '?') {
      var overlay = document.getElementById('kbShortcutsOverlay');
      if (overlay) {
        overlay.classList.toggle('on');
      }
      return;
    }
  }

  // ── Clock ──
  function tickClock() {
    const now = new Date();
    const h = now.getHours() % 12 || 12;
    const m = String(now.getMinutes()).padStart(2, '0');
    const t = h + ':' + m;
    document.querySelectorAll('[data-clock]').forEach(el => { el.textContent = t; });
  }

  // ── Init ──
  function init() {
    // Apply dark mode preference before building UI
    applyDarkModePreference();

    // Restore sidebar collapse state from window.OKAERI
    if (window.OKAERI && window.OKAERI.sidebarCollapsed) {
      sidebarCollapsed = true;
    }

    buildSidebar();

    // Theme toggle button
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleDarkMode);

    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        setView(view);
        // Navigate to first screen of that type
        if (view === 'product') navigate('d00-product-view');
        else if (view === 'mobile') navigate('m01-capture');
        else if (view === 'ambient') navigate('a01-menubar');
        else navigate(window.OKAERI.currentScreen.startsWith('d') ? window.OKAERI.currentScreen : 'd01-home');
      });
    });

    // Product mode exit button
    var productExitBtn = document.getElementById('productExitBtn');
    if (productExitBtn) {
      productExitBtn.addEventListener('click', function() {
        setView('desktop');
        navigate('d01-home');
      });
    }

    // Present button
    var presentBtn = document.getElementById('presentBtn');
    if (presentBtn) presentBtn.addEventListener('click', togglePresentation);
    var presentExitBtn = document.getElementById('presentExitBtn');
    if (presentExitBtn) presentExitBtn.addEventListener('click', togglePresentation);

    // Demo button
    var demoBtn = document.getElementById('demoBtn');
    if (demoBtn) demoBtn.addEventListener('click', toggleDemo);

    // Demo indicator controls
    var demoPrevBtn = document.getElementById('demoPrev');
    var demoNextBtn = document.getElementById('demoNext');
    var demoPauseBtn = document.getElementById('demoPause');
    if (demoPrevBtn) demoPrevBtn.addEventListener('click', function() { demoGoToStep(demoStep - 1); });
    if (demoNextBtn) demoNextBtn.addEventListener('click', function() { demoGoToStep(demoStep + 1); });
    if (demoPauseBtn) demoPauseBtn.addEventListener('click', toggleDemoPause);

    // Keyboard shortcuts overlay — click outside to dismiss
    var kbOverlay = document.getElementById('kbShortcutsOverlay');
    if (kbOverlay) {
      kbOverlay.addEventListener('click', function(e) {
        if (e.target === kbOverlay) kbOverlay.classList.remove('on');
      });
    }

    // Global keyboard shortcuts
    document.addEventListener('keydown', handleKeydown);

    // Load initial screen from hash or default
    const hash = window.location.hash.slice(1);
    const startScreen = hash || 'd00-intro';
    const startType = getScreenType(startScreen);
    if (startType !== 'desktop') setView(startType);
    navigate(startScreen);

    // Hash change listener
    window.addEventListener('hashchange', () => {
      const id = window.location.hash.slice(1);
      if (id && id !== window.OKAERI.currentScreen) {
        navigate(id);
      }
    });

    // Clock
    tickClock();
    setInterval(tickClock, 15000);

    // Start live data simulation
    if (window.OKAERI && window.OKAERI.startLiveSimulation) {
      window.OKAERI.startLiveSimulation();
    }

    // Live background activity dots
    var dotStyle = document.createElement('style');
    dotStyle.textContent = '.nav-item{position:relative}.nav-activity-dot{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:4px;height:4px;border-radius:50%;background:var(--green);pointer-events:none;opacity:0;transition:opacity 0.3s ease}.nav-activity-dot.on{opacity:1}';
    document.head.appendChild(dotStyle);
    var activityCycle = 0;
    setInterval(function(){
      // Remove old dots after 2 cycles
      if(activityCycle >= 2){
        document.querySelectorAll('.nav-activity-dot.on').forEach(function(d){ d.classList.remove('on'); });
      }
      // Pick 1-2 random nav items to light up
      var items = document.querySelectorAll('.nav-item');
      if(!items.length) return;
      var count = Math.floor(Math.random() * 2) + 1;
      for(var i = 0; i < count; i++){
        var item = items[Math.floor(Math.random() * items.length)];
        if(item.classList.contains('active')) continue;
        var dot = item.querySelector('.nav-activity-dot');
        if(!dot){
          dot = document.createElement('span');
          dot.className = 'nav-activity-dot';
          item.appendChild(dot);
        }
        dot.classList.add('on');
      }
      activityCycle++;
    }, 45000);
  }

  // ── Walkthrough Overlay ──
  const WALKTHROUGH_TIPS = [
    { screen: 'd01-home', text: 'The home screen shows judgment, not just stats. One clear first action.', position: 'below-title' },
    { screen: 'd08-prep-brief', text: 'Prep briefs include what to say, what they care about, and pinned operator guidance.', position: 'below-title' },
    { screen: 'd03-live-meeting', text: 'The steering rail catches structural meeting failures in real time. Notice: signals drive consequences.', position: 'right-panel' },
    { screen: 'd04-confirm-execute', text: 'Cards are grouped by confidence. The uncertain card asks for clarification before executing.', position: 'below-title' },
    { screen: 'd05-all-clear', text: 'Not just "done" — shows what changed in memory, relationships, and trust.', position: 'below-title' }
  ];
  let walkthroughTimer = null;

  function showWalkthroughTip(stepIndex) {
    const tip = document.getElementById('walkthroughTip');
    const textEl = document.getElementById('walkthroughText');
    const stepEl = document.getElementById('walkthroughStep');
    if (!tip || !textEl || !stepEl) return;

    const entry = WALKTHROUGH_TIPS[stepIndex];
    if (!entry) { hideWalkthroughTip(); return; }

    textEl.textContent = entry.text;
    stepEl.textContent = (stepIndex + 1) + ' of ' + WALKTHROUGH_TIPS.length;
    tip.style.top = '120px';
    tip.style.left = '280px';
    tip.style.display = 'block';
  }

  function hideWalkthroughTip() {
    var tip = document.getElementById('walkthroughTip');
    if (tip) tip.style.display = 'none';
    clearTimeout(walkthroughTimer);
  }

  function onDemoStepChange(stepIndex) {
    if (!demoActive) return;
    hideWalkthroughTip();
    var screen = DEMO_STEPS[stepIndex] && DEMO_STEPS[stepIndex].id;
    var tipIndex = -1;
    for (var i = 0; i < WALKTHROUGH_TIPS.length; i++) {
      if (WALKTHROUGH_TIPS[i].screen === screen) { tipIndex = i; break; }
    }
    if (tipIndex >= 0) {
      walkthroughTimer = setTimeout(function() {
        if (demoActive) showWalkthroughTip(tipIndex);
      }, 1500);
    }
  }

  // Wire walkthrough dismiss button
  (function() {
    function wireDismiss() {
      var btn = document.getElementById('walkthroughDismiss');
      if (btn) btn.addEventListener('click', hideWalkthroughTip);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireDismiss);
    else wireDismiss();
  })();

  // Patch demoGoToStep to trigger walkthrough
  var _origDemoGoToStep = demoGoToStep;
  demoGoToStep = function(idx) {
    _origDemoGoToStep(idx);
    onDemoStepChange(idx);
  };

  // Hide walkthrough when demo stops
  var _origStopDemo = stopDemo;
  stopDemo = function() {
    hideWalkthroughTip();
    _origStopDemo();
  };

  // Export navigation functions
  window.OKAERI_NAV = { navigate, goBack, setView, buildSidebar, startDemo, stopDemo, toggleDemo, togglePresentation, toggleCollapse, toggleDarkMode };

  // Init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
