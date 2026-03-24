// ═══════════════════════════════════════════════════
// OKAERI — Navigation Logic
// ═══════════════════════════════════════════════════

(function() {
  const NAV_STRUCTURE = [
    { section: 'Core Loop', items: [
      { id: 'd01-home', label: 'Home' },
      { id: 'd02-empty-state', label: 'Empty State' },
      { id: 'd03-live-meeting', label: 'Live Meeting' },
      { id: 'd04-confirm-execute', label: 'Confirm & Execute' },
      { id: 'd05-all-clear', label: 'All Clear' },
      { id: 'd06-execution-log', label: 'Execution Log' },
      { id: 'd07-voice-inbox', label: 'Voice Inbox' }
    ]},
    { section: 'Intelligence', items: [
      { id: 'd08-prep-brief', label: 'Prep Brief' },
      { id: 'd09-sarah-profile', label: 'Sarah Rhodes Profile' },
      { id: 'd10-michael-profile', label: 'Michael Kim Profile' },
      { id: 'd11-ask-okaeri', label: 'Ask Okaeri' },
      { id: 'd12-conflict-detection', label: 'Conflict Detection' },
      { id: 'd13-pattern-detection', label: 'Pattern Detection' },
      { id: 'd14-meeting-quality', label: 'Meeting Quality' },
      { id: 'd15-proactive-suggestions', label: 'Proactive Suggestions' },
      { id: 'd16-weekly-digest', label: 'Weekly Digest' }
    ]},
    { section: 'Planning', items: [
      { id: 'd17-goals', label: 'Goals' },
      { id: 'd18-morning-briefing', label: 'Morning Briefing' },
      { id: 'd19-eod-review', label: 'End of Day Review' },
      { id: 'd20-calendar', label: 'Calendar View' },
      { id: 'd21-calendar-defense', label: 'Calendar Defense' }
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
      { id: 'd33-receipt-artifact', label: 'Commitment Receipt' }
    ]},
    { section: 'Inbox', items: [
      { id: 'd34-email-triage', label: 'Email Triage' },
      { id: 'd35-integrations', label: 'Integrations' }
    ]},
    { section: 'System', items: [
      { id: 'd36-earned-autonomy', label: 'Earned Autonomy' },
      { id: 'd37-onboarding', label: 'Onboarding' },
      { id: 'd38-notifications', label: 'Notifications' },
      { id: 'd39-search', label: 'Search' }
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
    'd01-home': { text: 'listening', live: false },
    'd02-empty-state': { text: 'all clear', live: false, green: true },
    'd03-live-meeting': { text: 'recording', live: true },
    'd04-confirm-execute': { text: '4 extracted', live: false },
    'd05-all-clear': { text: 'all clear', live: false, green: true },
    'd06-execution-log': { text: 'all clear', live: false },
    'd07-voice-inbox': { text: 'listening', live: false },
    'd08-prep-brief': { text: '28 min away', live: false },
    'd09-sarah-profile': { text: 'prep ready', live: false },
    'd10-michael-profile': { text: 'prep ready', live: false },
    'd11-ask-okaeri': { text: 'listening', live: false },
    'd12-conflict-detection': { text: 'all clear', live: false },
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
    'm01-capture': { text: 'recording', live: true },
    'm02-post-capture': { text: '4 extracted', live: false },
    'm03-realtime-intel': { text: 'live intel', live: true },
    'a01-menubar': { text: 'listening', live: false },
    'a02-widgets': { text: 'all clear', live: false }
  };

  const collapsedSections = {};
  let currentView = 'desktop'; // desktop | mobile | ambient

  function buildSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '';

    // Wordmark
    const wm = document.createElement('div');
    wm.className = 'sidebar-wm';
    wm.textContent = 'okaeri';
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
          link.textContent = item.label;
          link.addEventListener('click', () => navigate(item.id));
          sectionEl.appendChild(link);
        });
      }

      sidebar.appendChild(sectionEl);
    });
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

    if (status.live) {
      titleRight.innerHTML = '<div class="live-dot"></div><span class="tstat" style="color:var(--amber)">' + status.text + '</span>';
    } else if (status.green) {
      titleRight.innerHTML = '<div class="pulse-dot" style="background:var(--green)"></div><span class="tstat" style="color:var(--green)">' + status.text + '</span>';
    } else {
      titleRight.innerHTML = '<div class="pulse-dot"></div><span class="tstat">' + status.text + '</span>';
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

    if (view === 'mobile') {
      mainPanel.style.display = 'none';
      phoneFrame.style.display = 'flex';
      ambientFrame.style.display = 'none';
    } else if (view === 'ambient') {
      mainPanel.style.display = 'none';
      phoneFrame.style.display = 'none';
      ambientFrame.style.display = 'flex';
    } else {
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
    else if (type === 'desktop' && currentView !== 'desktop') setView('desktop');

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

    try {
      const resp = await fetch(path);
      if (!resp.ok) {
        container.innerHTML = '<div style="padding:48px 32px;text-align:center"><div style="font-size:15px;font-weight:200;color:var(--ink3);letter-spacing:0.32em;margin-bottom:14px">okaeri</div><div style="display:inline-block;border:0.5px solid var(--rule);border-radius:10px;padding:20px 32px;font-size:12px;font-weight:200;color:var(--ink3);letter-spacing:0.14em">screen not yet built</div></div>';
      } else {
        const html = await resp.text();
        container.style.opacity = '0';
        container.style.transform = 'translateY(6px)';
        container.innerHTML = html;

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
      container.innerHTML = '<div style="padding:48px 32px;text-align:center"><div style="font-size:15px;font-weight:200;color:var(--ink3);letter-spacing:0.32em;margin-bottom:14px">okaeri</div><div style="display:inline-block;border:0.5px solid var(--rule);border-radius:10px;padding:20px 32px;font-size:12px;font-weight:200;color:var(--ink3);letter-spacing:0.14em">screen not yet built</div></div>';
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
    buildSidebar();

    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        setView(view);
        // Navigate to first screen of that type
        if (view === 'mobile') navigate('m01-capture');
        else if (view === 'ambient') navigate('a01-menubar');
        else navigate(window.OKAERI.currentScreen.startsWith('d') ? window.OKAERI.currentScreen : 'd01-home');
      });
    });

    // Load initial screen from hash or default
    const hash = window.location.hash.slice(1);
    const startScreen = hash || 'd01-home';
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
  }

  // Export navigation functions
  window.OKAERI_NAV = { navigate, goBack, setView, buildSidebar };

  // Init when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
