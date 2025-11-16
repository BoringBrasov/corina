const STORAGE_KEY = 'boring-mockup-state-v1';

const navItems = [
  { id: 'dashboard', label: 'Overview' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'content', label: 'Content' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'automation', label: 'Automation' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'dm', label: 'DM Inbox' },
  { id: 'leads', label: 'Lead Pipeline' },
  { id: 'brain', label: 'AI Brain' },
];

const tourSteps = [
  {
    view: 'dashboard',
    title: 'Overview zilnic',
    description: 'Vezi pulsul business-ului, statusul zilei și notificările recente.',
  },
  {
    view: 'content',
    title: 'Generatorul de conținut',
    description: 'Gestionezi campanii, aprobări și idei noi într-un singur loc.',
  },
  {
    view: 'calendar',
    title: 'Calendarul de postări',
    description: 'Adaugă manual postări, filtrează pe campanii și pregătește programările.',
  },
  {
    view: 'dm',
    title: 'Inbox DM & Automation',
    description: 'Monitorizează conversațiile automatizate și răspunde manual când e nevoie.',
  },
  {
    view: 'leads',
    title: 'Pipeline complet',
    description: 'Mută lead-urile între stadii și vezi recomandările AI pentru următorul pas.',
  },
  {
    view: 'brain',
    title: 'AI Brain',
    description: 'Comandă analize, idei și explicații direct din creierul central al platformei.',
  },
];

const onboardingToneOptions = [
  'Cald',
  'Premium',
  'Serios',
  'Inovator',
  'Jucăuș',
  'Minimal',
  'Organic',
];

const onboardingGoalOptions = [
  'Atrage distribuitori',
  'Crește vânzările directe',
  'Lansează un produs nou',
  'Construiește comunitate',
  'Generează lead-uri B2B',
];

const onboardingChannelOptions = [
  'Direct către consumator',
  'Distribuitori',
  'Magazine locale',
  'Online store',
  'Marketplace',
];

const onboardingResourceOptions = [
  'Logo vectorial',
  'Fotografii produse',
  'Testimoniale video',
  'Clip fondator',
  'Catalog PDF',
  'Nu avem materiale',
];

const analysisModules = [
  'Analiza site-ului',
  'Analiza Instagram',
  'Analiza TikTok',
  'Analiza competitorilor',
  'Analiza industriei',
  'Best practices globale',
  'Analiza paginilor clientului',
  'Persona end-consumer',
  'Persona distribuitor',
  'Estimare costuri achiziție',
  'Ton recomandat',
  'Volum conținut necesar',
];

const leadStages = [
  'New',
  'Cold',
  'Warm',
  'Hot',
  'Booked Call',
  'Sale',
  'Lost',
];

const contentPlatforms = ['Instagram Reels', 'TikTok', 'LinkedIn', 'Facebook', 'YouTube Shorts'];
const contentPersonas = [
  'Distribuitori regionali',
  'Consumatori tineri',
  'Retail premium',
  'Parteneri HoReCa',
  'Magazine bio locale',
];
const contentPillars = ['Educație', 'Dovadă socială', 'Brand & emoție', 'Vânzare'];
const contentHooks = [
  'De ce livezile noastre inspiră încredere în fiecare livrare',
  'Cum se transformă merele crude în gust premium în 90 de secunde',
  'Partenerii noștri povestesc despre primele 30 de zile cu BORING',
  'Provocarea sezonului: mix & match de sortimente pentru retaileri',
  'Din livadă direct pe raftul tău – traseul complet în imagini',
];

const calendarPlatforms = ['Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Email', 'WhatsApp'];
const rangeOptions = ['7', '30', '90'];

const activityTypeMeta = {
  system: { label: 'Sistem', badge: 'info' },
  analysis: { label: 'Analiză', badge: 'info' },
  content: { label: 'Conținut', badge: 'success' },
  campaign: { label: 'Campanii', badge: 'warning' },
  calendar: { label: 'Calendar', badge: 'info' },
  dm: { label: 'DM', badge: 'info' },
  lead: { label: 'Lead-uri', badge: 'success' },
  note: { label: 'Notiță', badge: 'info' },
};

const activityFilters = ['all', ...Object.keys(activityTypeMeta)];

const analyticsSeeds = {
  '7': [48, 52, 67, 58, 74, 81, 88],
  '30': [42, 55, 60, 58, 62, 68, 71, 76, 79, 83],
  '90': [30, 36, 44, 52, 60, 65, 70, 74, 78, 82, 86, 90],
};

const analyticsLabels = {
  '7': ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'],
  '30': ['Săpt 1', 'Săpt 2', 'Săpt 3', 'Săpt 4', 'Săpt 5', 'Săpt 6', 'Săpt 7', 'Săpt 8', 'Săpt 9', 'Săpt 10'],
  '90': ['Luna 1', 'Luna 2', 'Luna 3', 'Luna 4', 'Luna 5', 'Luna 6', 'Luna 7', 'Luna 8', 'Luna 9', 'Luna 10', 'Luna 11', 'Luna 12'],
};

const defaultState = {
  currentView: 'login',
  user: null,
  onboardingStep: 0,
  onboardingCompleted: false,
  showCommandPalette: false,
  commandQuery: '',
  showTour: false,
  tourStep: 0,
  onboardingData: {
    brandName: '',
    product: '',
    industryGuess: '',
    goals: [],
    primaryChannel: 'Direct către consumator',
    distributorRange: 3,
    capacity: 5,
    tone: [],
    resources: [],
    notes: '',
  },
  analysisProgress: [],
  analysisStarted: false,
  analysisCompleted: false,
  budget: 500,
  analyticsRange: '7',
  counters: {
    content: 3,
    calendar: 4,
    leads: 3,
  },
  campaigns: [
    {
      id: 'camp-1',
      name: 'Distribuitori de primăvară',
      goal: 'Lead-uri B2B pentru parteneriate regionale',
      timeframe: '1-31 martie',
      targetPosts: 12,
      focus: 'Distribuitori & retail',
      status: 'Activ',
    },
    {
      id: 'camp-2',
      name: 'Retail organic premium',
      goal: 'Creștere vânzări directe în magazine specializate',
      timeframe: 'martie - aprilie',
      targetPosts: 8,
      focus: 'Consumatori finali',
      status: 'În pregătire',
    },
  ],
  activeCampaignId: 'camp-1',
  calendarFilter: 'all',
  contentBatch: [
    {
      id: 'post-1',
      platform: 'Instagram Reels',
      persona: 'Distribuitori regionali',
      pillar: 'Dovadă socială',
      hook: 'Din livezi locale către raftul tău în 48h',
      status: 'pending',
      scheduledAt: '2025-03-01 09:30',
      campaignId: 'camp-1',
    },
    {
      id: 'post-2',
      platform: 'TikTok',
      persona: 'Consumatori tineri',
      pillar: 'Brand & emoție',
      hook: 'Sucul care se face singur dimineața',
      status: 'pending',
      scheduledAt: '2025-03-02 18:00',
      campaignId: 'camp-1',
    },
    {
      id: 'post-3',
      platform: 'LinkedIn',
      persona: 'Parteneri HoReCa',
      pillar: 'Educație',
      hook: 'Cum creezi o experiență premium din ingrediente simple',
      status: 'approved',
      scheduledAt: '2025-03-03 08:45',
      campaignId: 'camp-2',
    },
  ],
  calendarSlots: [
    {
      id: 'cal-1',
      date: '01 Mar 2025',
      platform: 'Instagram Reels',
      caption: 'Behind the orchard morning pick',
      status: 'Programat',
      campaignId: 'camp-1',
    },
    {
      id: 'cal-2',
      date: '02 Mar 2025',
      platform: 'TikTok',
      caption: 'Taste test challenge cu distribuitori',
      status: 'În revizie',
      campaignId: 'camp-1',
    },
    {
      id: 'cal-3',
      date: '03 Mar 2025',
      platform: 'LinkedIn',
      caption: 'Studiu de caz: parteneriat retail local',
      status: 'Programat',
      campaignId: 'camp-2',
    },
    {
      id: 'cal-4',
      date: '04 Mar 2025',
      platform: 'Email',
      caption: 'Newsletter: sezonul de mere începe',
      status: 'Draft',
      campaignId: null,
    },
  ],
  leads: [
    {
      id: 'lead-1',
      name: 'Magazin Verde',
      stage: 'Warm',
      score: 62,
      source: 'Instagram DM',
      nextStep: 'Trimite ofertă B2B',
    },
    {
      id: 'lead-2',
      name: 'Distribuitor Cluj',
      stage: 'Hot',
      score: 78,
      source: 'TikTok comment',
      nextStep: 'Programează degustare',
    },
    {
      id: 'lead-3',
      name: 'Fresh Box',
      stage: 'Cold',
      score: 38,
      source: 'Facebook',
      nextStep: 'Trimite material nurturing',
    },
  ],
  dmConversations: {
    'Distribuitor Cluj': {
      persona: 'Distribuitori',
      intent: 'Interes preț',
      messages: [
        { from: 'lead', text: 'Aveți distribuție în Cluj?' },
        {
          from: 'ai',
          text: 'Salut! Avem parteneri locali și căutăm extindere. Ce volum lunar te interesează?',
        },
      ],
    },
    'Magazin Verde': {
      persona: 'Retail specializat',
      intent: 'Interes stoc',
      messages: [
        { from: 'ai', text: 'Bună! Cum pot să te ajut astăzi?' },
        { from: 'lead', text: 'Câte sortimente aveți disponibile săptămâna viitoare?' },
      ],
    },
  },
  dmSelectedConversation: 'Distribuitor Cluj',
  brainHistory: [
    {
      role: 'ai',
      text: 'Salut! Sunt aici să-ți orchestrez marketingul. Spune-mi cu ce începem.',
    },
  ],
  activityFilter: 'all',
  activityLog: [
    {
      id: 'act-1',
      type: 'system',
      detail: 'Strategie v1.2 activată cu buget 500€.',
      timestamp: '2025-02-26T07:45:00Z',
    },
    {
      id: 'act-2',
      type: 'campaign',
      detail: 'Campanie focus: Distribuitori de primăvară.',
      timestamp: '2025-02-27T10:15:00Z',
    },
    {
      id: 'act-3',
      type: 'content',
      detail: 'Postare LinkedIn aprobată pentru partenerii HoReCa.',
      timestamp: '2025-02-28T08:05:00Z',
    },
    {
      id: 'act-4',
      type: 'calendar',
      detail: 'Slot TikTok programat pentru 2 martie.',
      timestamp: '2025-02-28T08:15:00Z',
    },
    {
      id: 'act-5',
      type: 'dm',
      detail: 'AI a răspuns lead-ului „Distribuitor Cluj”.',
      timestamp: '2025-02-28T11:40:00Z',
    },
  ],
};

function createDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function deepMerge(target, source) {
  if (!source) return target;
  Object.keys(source).forEach((key) => {
    const value = source[key];
    if (Array.isArray(value)) {
      target[key] = value;
    } else if (value && typeof value === 'object') {
      target[key] = deepMerge(target[key] ? { ...target[key] } : {}, value);
    } else {
      target[key] = value;
    }
  });
  return target;
}

function loadState() {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return deepMerge(createDefaultState(), parsed);
  } catch (error) {
    console.warn('Nu am putut încărca starea salvată.', error);
    return null;
  }
}

const state = loadState() ?? createDefaultState();

function persistState() {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn('Nu am putut salva starea curentă.', error);
  }
}

function clearPersistedState() {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Nu am putut șterge starea curentă.', error);
  }
}

function resetState() {
  const fresh = createDefaultState();
  Object.keys(state).forEach((key) => {
    delete state[key];
  });
  Object.assign(state, fresh);
  syncCounters();
  clearPersistedState();
  render();
}

function enterDemoMode() {
  state.user = { name: 'Demo User', email: 'demo@boring.ai' };
  state.onboardingData = {
    brandName: 'Sucul Verde',
    product: 'Suc de mere artizanal',
    industryGuess: 'Food & Beverage',
    goals: ['Atrage distribuitori', 'Crește vânzările directe'],
    primaryChannel: 'Distribuitori',
    distributorRange: 4,
    capacity: 7,
    tone: ['Cald', 'Premium'],
    resources: ['Logo vectorial', 'Fotografii produse'],
    notes: 'Păstrează un ton poetic și pragmatic în același timp.',
  };
  state.onboardingCompleted = true;
  state.onboardingStep = 5;
  state.analysisStarted = true;
  state.analysisCompleted = true;
  state.analysisProgress = analysisModules.map((name) => ({ name, status: 'done' }));
  state.showCommandPalette = false;
  state.commandQuery = '';
  state.showTour = false;
  state.tourStep = 0;
  state.currentView = 'dashboard';
  logActivity('system', 'Modul demo a fost activat. Explorează liber aplicația.');
  render();
}

function syncCounters() {
  if (!state.counters) {
    state.counters = { content: 0, calendar: 0, leads: 0 };
  }
  state.counters.content = state.contentBatch?.length ?? 0;
  state.counters.calendar = state.calendarSlots?.length ?? 0;
  state.counters.leads = state.leads?.length ?? 0;
  if (!rangeOptions.includes(state.analyticsRange)) {
    state.analyticsRange = '7';
  }
  ensureActiveCampaign();
  if (!Array.isArray(state.activityLog)) {
    state.activityLog = [...createDefaultState().activityLog];
  }
  if (!state.activityFilter) {
    state.activityFilter = 'all';
  }
}

syncCounters();

function ensureActiveCampaign() {
  if (!Array.isArray(state.campaigns)) {
    state.campaigns = [];
  }
  const hasActive = state.campaigns.some((campaign) => campaign.id === state.activeCampaignId);
  if (!hasActive) {
    state.activeCampaignId = state.campaigns[0]?.id || null;
  }
  if (!state.calendarFilter || (state.calendarFilter !== 'all' && !state.campaigns.some((c) => c.id === state.calendarFilter))) {
    state.calendarFilter = 'all';
  }
}

function render() {
  const root = document.getElementById('app');
  if (!state.user && !['login', 'signup'].includes(state.currentView)) {
    state.currentView = 'login';
  }
  if (state.user && !views[state.currentView]) {
    state.currentView = state.onboardingCompleted ? 'dashboard' : 'onboarding';
  }
  if (state.user && ['login', 'signup'].includes(state.currentView)) {
    state.currentView = state.onboardingCompleted ? 'dashboard' : 'onboarding';
  }
  if (state.user && !state.onboardingCompleted && state.currentView === 'dashboard') {
    state.currentView = 'onboarding';
  }
  const view = views[state.currentView] ?? views.login;
  const { html, afterRender } = view();
  const isAuthed = Boolean(state.user);
  const viewContent = isAuthed ? `${renderTopbar()}${html}` : html;
  const navHtml = isAuthed
    ? `<aside class="sidebar">
        <div>
          <h1>BORING</h1>
          <p style="font-size:13px;color:rgba(255,255,255,0.7);max-width:160px;line-height:1.5;">
            Marketing orchestrat cap-coadă, fără agitație.
          </p>
        </div>
        <nav>
          ${navItems
            .map(
              (item) => `
              <button data-nav="${item.id}" class="${
                state.currentView === item.id ? 'active' : ''
              }">${item.label}</button>
            `
            )
            .join('')}
        </nav>
        <button class="secondary-btn" data-action="logout">Log out</button>
      </aside>`
    : '';

  const shellClass = isAuthed ? 'shell' : 'shell compact';

  root.innerHTML = `
    <div class="${shellClass}">
      ${navHtml}
      <main class="main">${viewContent}</main>
      ${
        isAuthed
          ? `${state.showCommandPalette ? renderCommandPalette() : ''}${state.showTour ? renderTourOverlay() : ''}`
          : ''
      }
    </div>
  `;

  if (isAuthed) {
    document.querySelectorAll('[data-nav]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-nav');
        state.currentView = target;
        render();
      });
    });

    const logoutBtn = document.querySelector('[data-action="logout"]');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        Object.assign(state, {
          currentView: 'login',
          user: null,
          onboardingStep: 0,
          onboardingCompleted: false,
          analysisStarted: false,
          analysisCompleted: false,
          analysisProgress: [],
          showCommandPalette: false,
          commandQuery: '',
          showTour: false,
          tourStep: 0,
        });
        render();
      });
    }
    const resetBtn = document.querySelector('[data-action="reset-demo"]');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetState();
      });
    }
    const commandBtn = document.querySelector('[data-action="open-command"]');
    if (commandBtn) {
      commandBtn.addEventListener('click', () => {
        state.showCommandPalette = true;
        state.commandQuery = '';
        render();
      });
    }
    const tourBtn = document.querySelector('[data-action="open-tour"]');
    if (tourBtn) {
      tourBtn.addEventListener('click', () => {
        state.showTour = true;
        state.tourStep = 0;
        render();
      });
    }
  }

  if (afterRender) {
    afterRender();
  }

  if (state.showCommandPalette) {
    setupCommandPalette();
  }
  if (state.showTour) {
    setupTourOverlay();
  }

  persistState();
}

function renderTopbar() {
  const brandName = state.onboardingData?.brandName || 'Brand demo';
  const product = state.onboardingData?.product || 'Marketing orchestrat complet';
  const campaign = state.campaigns?.find((item) => item.id === state.activeCampaignId);
  const viewLabel = navItems.find((item) => item.id === state.currentView)?.label || 'Overview';
  const analysisBadge = state.analysisCompleted
    ? '<span class="badge success">Analiză completă</span>'
    : state.analysisStarted
    ? '<span class="badge info">Analiză în curs</span>'
    : '<span class="badge warning">Analiză în standby</span>';
  const campaignBadge = campaign ? `<span class="badge warning">Focus: ${campaign.name}</span>` : '';
  return `
    <div class="app-topbar">
      <div class="topbar-meta">
        <p class="overline">${brandName}</p>
        <div class="topbar-row">
          <strong>${viewLabel}</strong>
          <span class="topbar-note">${product}</span>
          ${analysisBadge}
          ${campaignBadge}
        </div>
      </div>
      <div class="topbar-actions">
        <button class="ghost-btn" data-action="open-command">Ctrl + K</button>
        <button class="ghost-btn" data-action="open-tour">Tur ghidat</button>
        <button class="ghost-btn" data-action="reset-demo">Resetează demo</button>
      </div>
    </div>
  `;
}

function getCommandPaletteOptions() {
  const base = navItems.map((item) => ({
    id: item.id,
    label: item.label,
    description: `Navighează rapid la ${item.label}.`,
    type: 'view',
  }));
  return [
    ...base,
    {
      id: 'action-demo',
      label: 'Activează modul demo',
      description: 'Completează automat onboarding-ul și sari direct în aplicație.',
      type: 'action',
    },
    {
      id: 'action-tour',
      label: 'Pornește turul ghidat',
      description: 'Descoperă principalele module pas cu pas.',
      type: 'action',
    },
    {
      id: 'action-reset',
      label: 'Resetează demo-ul',
      description: 'Șterge datele salvate local și reia experiența.',
      type: 'action',
    },
  ];
}

function renderCommandPalette() {
  const options = getCommandPaletteOptions();
  const query = (state.commandQuery || '').toLowerCase();
  const filtered = options.filter((option) => {
    if (!query) return true;
    return (
      option.label.toLowerCase().includes(query) || option.description.toLowerCase().includes(query)
    );
  });
  const listHtml = filtered.length
    ? filtered
        .map(
          (option) => `
            <li data-command-option="${option.id}" data-command-type="${option.type}">
              <strong>${option.label}</strong>
              <span>${option.description}</span>
            </li>
          `
        )
        .join('')
    : '<li class="empty">Nicio comandă nu corespunde căutării.</li>';
  return `
    <div class="overlay command-overlay">
      <div class="command-modal">
        <div class="command-header">
          <input
            id="command-input"
            type="text"
            placeholder="Caută module sau acțiuni (ex: Calendar)"
            value="${state.commandQuery}"
          />
          <button class="ghost-btn" data-command-close>Închide</button>
        </div>
        <ul class="command-list">${listHtml}</ul>
        <p class="command-hint">Enter aplică prima opțiune. Escape închide panoul.</p>
      </div>
    </div>
  `;
}

function renderTourOverlay() {
  const totalSteps = tourSteps.length;
  const currentIndex = Math.min(Math.max(state.tourStep || 0, 0), totalSteps - 1);
  const step = tourSteps[currentIndex];
  const progress = Math.round(((currentIndex + 1) / totalSteps) * 100);
  const viewLabel = navItems.find((item) => item.id === step.view)?.label || 'Modul';
  return `
    <div class="overlay tour-overlay">
      <div class="tour-modal">
        <div class="tour-progress">
          <div class="progress-track small">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>
          <span>Pas ${currentIndex + 1} / ${totalSteps}</span>
        </div>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
        <div class="tour-tags">
          <span class="badge info">${viewLabel}</span>
        </div>
        <div class="tour-actions">
          <button class="ghost-btn" data-tour-action="close">Închide</button>
          <div class="tour-actions-right">
            <button class="secondary-btn" data-tour-action="prev" ${
              currentIndex === 0 ? 'disabled' : ''
            }>Înapoi</button>
            <button class="primary-btn" data-tour-action="jump">Du-mă acolo</button>
            <button class="primary-btn outline" data-tour-action="next">${
              currentIndex === totalSteps - 1 ? 'Finalizează' : 'Pasul următor'
            }</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function closeCommandPalette() {
  state.showCommandPalette = false;
  state.commandQuery = '';
  render();
}

function handleCommandSelection(optionId, optionType) {
  if (optionType === 'view') {
    state.currentView = optionId;
    closeCommandPalette();
    return;
  }
  if (optionId === 'action-reset') {
    closeCommandPalette();
    resetState();
    return;
  }
  if (optionId === 'action-tour') {
    closeCommandPalette();
    state.showTour = true;
    state.tourStep = 0;
    render();
    return;
  }
  if (optionId === 'action-demo') {
    closeCommandPalette();
    enterDemoMode();
  }
}

function setupCommandPalette() {
  const overlay = document.querySelector('.command-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeCommandPalette();
      }
    });
  }
  const closeBtn = document.querySelector('[data-command-close]');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeCommandPalette());
  }
  const input = document.getElementById('command-input');
  if (input) {
    setTimeout(() => input.focus(), 0);
    input.addEventListener('input', (event) => {
      state.commandQuery = event.target.value;
      render();
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const firstOption = document.querySelector('[data-command-option]');
        if (firstOption) {
          handleCommandSelection(
            firstOption.getAttribute('data-command-option'),
            firstOption.getAttribute('data-command-type')
          );
        }
      }
    });
  }
  document.querySelectorAll('[data-command-option]').forEach((element) => {
    element.addEventListener('click', () => {
      handleCommandSelection(
        element.getAttribute('data-command-option'),
        element.getAttribute('data-command-type')
      );
    });
  });
}

function handleTourAction(action) {
  const totalSteps = tourSteps.length;
  if (action === 'close') {
    state.showTour = false;
    render();
    return;
  }
  if (action === 'prev') {
    state.tourStep = Math.max(0, (state.tourStep || 0) - 1);
    render();
    return;
  }
  if (action === 'next') {
    if ((state.tourStep || 0) >= totalSteps - 1) {
      state.showTour = false;
    } else {
      state.tourStep += 1;
    }
    render();
    return;
  }
  if (action === 'jump') {
    const step = tourSteps[Math.min(state.tourStep || 0, totalSteps - 1)];
    if (step) {
      state.currentView = step.view;
    }
    state.showTour = false;
    render();
  }
}

function setupTourOverlay() {
  const overlay = document.querySelector('.tour-overlay');
  if (overlay) {
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        state.showTour = false;
        render();
      }
    });
  }
  document.querySelectorAll('[data-tour-action]').forEach((element) => {
    element.addEventListener('click', () => {
      handleTourAction(element.getAttribute('data-tour-action'));
    });
  });
}

function guessIndustry(productHint) {
  if (!productHint) return 'Food & Beverage';
  const hint = productHint.toLowerCase();
  if (hint.includes('mere') || hint.includes('suc')) return 'Food & Beverage';
  if (hint.includes('imobil')) return 'Real Estate';
  if (hint.includes('fitness')) return 'Health & Wellness';
  if (hint.includes('software')) return 'Technology';
  return 'Creative Brands';
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date
    .toLocaleString('ro-RO', { month: 'short' })
    .replace(/\./g, '')
    .toLowerCase();
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day} ${capitalizedMonth} ${year} ${hours}:${minutes}`;
}

function formatCalendarDate(dateStr, timeStr) {
  if (!dateStr) return '';
  const iso = timeStr ? `${dateStr}T${timeStr}` : dateStr;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return dateStr;
  const month = date
    .toLocaleString('ro-RO', { month: 'short' })
    .replace(/\./g, '')
    .toLowerCase();
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  return `${String(date.getDate()).padStart(2, '0')} ${capitalizedMonth} ${date.getFullYear()}`;
}

function getActivityLabel(type) {
  return activityTypeMeta[type]?.label || activityTypeMeta.system.label;
}

function formatActivityTimestamp(timestamp) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return timestamp;
  return date.toLocaleString('ro-RO', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function logActivity(type, detail) {
  if (!state.activityLog) {
    state.activityLog = [];
  }
  const resolvedType = activityTypeMeta[type] ? type : 'system';
  const entry = {
    id: `act-${Date.now().toString(36)}-${Math.floor(Math.random() * 999)}`,
    type: resolvedType,
    detail: detail || 'Actualizare automată',
    timestamp: new Date().toISOString(),
  };
  state.activityLog = [entry, ...state.activityLog].slice(0, 40);
}

function computeActivitySummary() {
  const counts = {};
  Object.keys(activityTypeMeta).forEach((type) => {
    counts[type] = 0;
  });
  const entries = state.activityLog || [];
  const last24Threshold = Date.now() - 24 * 60 * 60 * 1000;
  let last24h = 0;
  entries.forEach((entry) => {
    const type = activityTypeMeta[entry.type] ? entry.type : 'system';
    counts[type] = (counts[type] || 0) + 1;
    const ts = new Date(entry.timestamp).getTime();
    if (!Number.isNaN(ts) && ts >= last24Threshold) {
      last24h += 1;
    }
  });
  return { counts, last24h, total: entries.length };
}

function generateMockPost() {
  const nextIndex = (state.counters?.content ?? state.contentBatch.length) + 1;
  state.counters.content = nextIndex;
  const scheduledDate = new Date();
  scheduledDate.setDate(scheduledDate.getDate() + nextIndex);
  scheduledDate.setHours(9 + (nextIndex % 4) * 2, nextIndex % 2 === 0 ? 30 : 0, 0, 0);
  const persona = randomFrom(contentPersonas);
  const pillar = randomFrom(contentPillars);
  const hook = randomFrom(contentHooks);
  const platform = randomFrom(contentPlatforms);
  return {
    id: `post-${nextIndex}`,
    platform,
    persona,
    pillar,
    hook,
    status: 'pending',
    scheduledAt: formatDateTime(scheduledDate),
    campaignId: state.activeCampaignId || null,
  };
}

function createCalendarSlot({ date, time, platform, caption, status, campaignId }) {
  const nextIndex = (state.counters?.calendar ?? state.calendarSlots.length) + 1;
  state.counters.calendar = nextIndex;
  return {
    id: `cal-${nextIndex}`,
    date: formatCalendarDate(date, time) || date,
    platform: platform || 'Instagram',
    caption: caption || 'Postare manuală adăugată',
    status: status || 'Draft',
    campaignId: campaignId || null,
  };
}

function summarizeCampaign(campaign) {
  const assignedPosts = state.contentBatch.filter((post) => post.campaignId === campaign.id);
  const approvedPosts = assignedPosts.filter((post) => post.status === 'approved').length;
  const scheduledSlots = state.calendarSlots.filter((slot) => slot.campaignId === campaign.id);
  const completion = campaign.targetPosts
    ? Math.min(100, Math.round((assignedPosts.length / campaign.targetPosts) * 100))
    : 0;
  return {
    assigned: assignedPosts.length,
    approved: approvedPosts,
    scheduled: scheduledSlots.length,
    completion,
  };
}

function createCampaign({ name, goal, timeframe, targetPosts, focus }) {
  const baseIndex = (state.campaigns?.length || 0) + 1;
  const id = `camp-${baseIndex}-${Date.now().toString(36).slice(-3)}`;
  return {
    id,
    name: name?.trim() || `Campanie ${baseIndex}`,
    goal: goal?.trim() || 'Obiectiv definit de AI',
    timeframe: timeframe?.trim() || 'TBA',
    targetPosts: Number(targetPosts) > 0 ? Number(targetPosts) : 6,
    focus: focus?.trim() || 'General',
    status: 'Activ',
  };
}

function computeAnalytics(range) {
  const baseline = analyticsSeeds[range] || analyticsSeeds['7'];
  const labels = analyticsLabels[range] || analyticsLabels['7'];
  const approvedPosts = state.contentBatch.filter((post) => post.status === 'approved').length;
  const scheduledPosts = state.calendarSlots.filter((slot) => slot.status === 'Programat').length;
  const scale = 1 + approvedPosts * 0.04 + scheduledPosts * 0.02;
  const trend = baseline.map((value) => Math.round(value * scale));
  const leadBreakdown = leadStages
    .map((stage) => ({
      stage,
      count: state.leads.filter((lead) => lead.stage === stage).length,
    }))
    .filter((item) => item.count > 0);
  const totalLeads = state.leads.length;
  const hotLeads = state.leads.filter((lead) => ['Hot', 'Booked Call', 'Sale'].includes(lead.stage)).length;
  const conversionRate = totalLeads ? Math.round((hotLeads / totalLeads) * 100) : 0;
  const averageEngagement = trend.length
    ? Math.round(trend.reduce((sum, value) => sum + value, 0) / trend.length)
    : 0;
  const responseTime = Math.max(1, 4 - Math.floor(approvedPosts / 2));
  const insights = [];
  if (trend[trend.length - 1] > trend[0]) {
    insights.push('Trend ascendent al reach-ului organic în intervalul selectat.');
  } else {
    insights.push('Stabilizează trendul de reach cu formate noi și CTA-uri variate.');
  }
  if (conversionRate >= 15) {
    insights.push('Conversia DM → call depășește pragul țintă de 15%. Menține ritmul.');
  } else {
    insights.push('Optimizează flow-urile DM pentru a crește conversia spre call-uri.');
  }
  if (scheduledPosts >= approvedPosts) {
    insights.push('Postările aprobate sunt deja programate – calendarul este echilibrat.');
  } else {
    insights.push('Există postări aprobate neprogramate. Trimite-le în calendar pentru consistență.');
  }

  return {
    labels,
    trend,
    leadBreakdown,
    averageEngagement,
    approvedPosts,
    scheduledPosts,
    conversionRate,
    responseTime,
    insights,
  };
}

function renderLogin() {
  return {
    html: `
      <section class="hero">
        <h2>Bine ai revenit.</h2>
        <p>Autentifică-te pentru a continua orchestrarea marketingului tău. Totul e pregătit.</p>
        <form id="login-form">
          <label>
            Email
            <input name="email" type="email" placeholder="tu@brand.ro" required />
          </label>
          <label>
            Parolă
            <input name="password" type="password" placeholder="••••••••" required />
          </label>
          <div style="display:flex;gap:12px;">
            <button type="submit" class="primary-btn">Intră în platformă</button>
            <button type="button" id="to-signup" class="secondary-btn">Creează cont</button>
          </div>
          <button type="button" id="demo-mode" class="ghost-btn full-width">Explorează demo-ul instant</button>
        </form>
      </section>
    `,
    afterRender() {
      document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        state.user = {
          email: formData.get('email'),
        };
        state.currentView = state.onboardingCompleted ? 'dashboard' : 'onboarding';
        render();
      });
      document.getElementById('to-signup').addEventListener('click', () => {
        state.currentView = 'signup';
        render();
      });
      document.getElementById('demo-mode').addEventListener('click', () => {
        enterDemoMode();
      });
    },
  };
}

function renderSignup() {
  return {
    html: `
      <section class="hero">
        <h2>Începe aventura BORING.</h2>
        <p>Creează un cont și lasă AI-ul să-ți structureze marketingul fără stres.</p>
        <form id="signup-form">
          <label>
            Nume complet
            <input name="name" type="text" placeholder="Ana Pop" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="tu@brand.ro" required />
          </label>
          <label>
            Parolă
            <input name="password" type="password" minlength="6" placeholder="••••••" required />
            <small style="color:var(--muted); font-size:12px;">Parolă poetică sugerată: robin_stele_219!</small>
          </label>
          <label style="flex-direction:row;align-items:center;gap:10px;">
            <input name="terms" type="checkbox" required />
            Accept termenii și politica de confidențialitate
          </label>
          <button type="submit" class="primary-btn">Creează contul</button>
        </form>
      </section>
    `,
    afterRender() {
      document.getElementById('signup-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        state.user = {
          name: formData.get('name'),
          email: formData.get('email'),
        };
        state.onboardingStep = 0;
        state.currentView = 'onboarding';
        render();
      });
    },
  };
}

function renderOnboarding() {
  const step = state.onboardingStep;
  const data = state.onboardingData;
  const totalSteps = 6;

  const stepHeader = `
    <header class="hero">
      <p class="badge info">Pas ${step + 1} din ${totalSteps}</p>
      <h2>${getOnboardingStepTitle(step)}</h2>
      <p>${getOnboardingStepSubtitle(step)}</p>
    </header>
  `;

  function renderNavigationButtons({ showBack = true, onContinue } = {}) {
    return {
      attach(container) {
        const nav = document.createElement('div');
        nav.style.display = 'flex';
        nav.style.justifyContent = 'space-between';
        nav.style.marginTop = '24px';
        nav.innerHTML = `
          <button class="secondary-btn" type="button" ${showBack ? '' : 'style="visibility:hidden"'}>Înapoi</button>
          <button class="primary-btn" type="submit">Continuă</button>
        `;
        container.appendChild(nav);
        const [backBtn, continueBtn] = nav.querySelectorAll('button');
        if (showBack) {
          backBtn.addEventListener('click', () => {
            state.onboardingStep = Math.max(0, state.onboardingStep - 1);
            render();
          });
        }
        continueBtn.addEventListener('click', (event) => {
          if (onContinue) {
            onContinue(event);
          }
        });
      },
    };
  }

  if (step === 0) {
    return {
      html: `
        ${stepHeader}
        <form id="onboarding-identitate">
          <label>
            Numele brandului
            <input name="brandName" type="text" value="${data.brandName}" placeholder="Sucul Verde" required />
          </label>
          <label>
            Ce vinzi?
            <input name="product" type="text" value="${data.product}" placeholder="suc de mere artizanal" required />
          </label>
        </form>
      `,
      afterRender() {
        const form = document.getElementById('onboarding-identitate');
        const nav = renderNavigationButtons({
          showBack: false,
          onContinue: (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const brandName = formData.get('brandName');
            const product = formData.get('product');
            state.onboardingData.brandName = brandName;
            state.onboardingData.product = product;
            state.onboardingData.industryGuess = guessIndustry(product);
            state.onboardingStep = 1;
            render();
          },
        });
        nav.attach(form);
      },
    };
  }

  if (step === 1) {
    return {
      html: `
        ${stepHeader}
        <form id="onboarding-goals">
          <div class="checkbox-grid">
            ${onboardingGoalOptions
              .map((goal) => {
                const checked = data.goals.includes(goal) ? 'checked' : '';
                return `
                  <label style="flex-direction:row;align-items:center;gap:12px;">
                    <input type="checkbox" name="goals" value="${goal}" ${checked} />
                    ${goal}
                  </label>
                `;
              })
              .join('')}
          </div>
          <label>
            Alte obiective
            <input name="customGoal" type="text" placeholder="ex: Intrare în retail modern" />
          </label>
        </form>
      `,
      afterRender() {
        const form = document.getElementById('onboarding-goals');
        const nav = renderNavigationButtons({
          onContinue: (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const selectedGoals = formData.getAll('goals');
            const customGoal = formData.get('customGoal');
            state.onboardingData.goals = selectedGoals;
            if (customGoal) {
              state.onboardingData.goals.push(customGoal);
            }
            state.onboardingStep = 2;
            render();
          },
        });
        nav.attach(form);
      },
    };
  }

  if (step === 2) {
    return {
      html: `
        ${stepHeader}
        <form id="onboarding-questions">
          <label>
            Canal principal de vânzare
            <select name="primaryChannel">
              ${onboardingChannelOptions
                .map(
                  (channel) => `
                    <option value="${channel}" ${
                      data.primaryChannel === channel ? 'selected' : ''
                    }>${channel}</option>
                  `
                )
                .join('')}
            </select>
          </label>
          <label>
            Distribuție (local → internațional)
            <input type="range" name="distributorRange" min="1" max="5" value="${data.distributorRange}" />
          </label>
          <label>
            Capacitate de producție
            <input type="range" name="capacity" min="1" max="10" value="${data.capacity}" />
          </label>
          <div>
            <p style="margin-bottom:8px;color:var(--muted);">Tonul brandului</p>
            <div class="pill-grid">
              ${onboardingToneOptions
                .map((tone) => {
                  const selected = data.tone.includes(tone) ? 'selected' : '';
                  return `<div class="pill ${selected}" data-tone="${tone}">${tone}</div>`;
                })
                .join('')}
            </div>
          </div>
        </form>
      `,
      afterRender() {
        const form = document.getElementById('onboarding-questions');
        document.querySelectorAll('[data-tone]').forEach((pill) => {
          pill.addEventListener('click', () => {
            const value = pill.getAttribute('data-tone');
            const toneList = new Set(state.onboardingData.tone);
            if (toneList.has(value)) {
              toneList.delete(value);
              pill.classList.remove('selected');
            } else {
              toneList.add(value);
              pill.classList.add('selected');
            }
            state.onboardingData.tone = Array.from(toneList);
          });
        });
        const nav = renderNavigationButtons({
          onContinue: (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            state.onboardingData.primaryChannel = formData.get('primaryChannel');
            state.onboardingData.distributorRange = Number(formData.get('distributorRange'));
            state.onboardingData.capacity = Number(formData.get('capacity'));
            state.onboardingStep = 3;
            render();
          },
        });
        nav.attach(form);
      },
    };
  }

  if (step === 3) {
    return {
      html: `
        ${stepHeader}
        <form id="onboarding-resources">
          <div class="checkbox-grid">
            ${onboardingResourceOptions
              .map((resource) => {
                const checked = data.resources.includes(resource) ? 'checked' : '';
                return `
                  <label style="flex-direction:row;align-items:center;gap:12px;">
                    <input type="checkbox" name="resources" value="${resource}" ${checked} />
                    ${resource}
                  </label>
                `;
              })
              .join('')}
          </div>
          <label>
            Note suplimentare pentru AI
            <textarea name="notes" placeholder="Ce ai vrea să știe AI-ul despre brand?">${data.notes}</textarea>
          </label>
        </form>
      `,
      afterRender() {
        const form = document.getElementById('onboarding-resources');
        const nav = renderNavigationButtons({
          onContinue: (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            state.onboardingData.resources = formData.getAll('resources');
            state.onboardingData.notes = formData.get('notes');
            state.onboardingStep = 4;
            render();
          },
        });
        nav.attach(form);
      },
    };
  }

  if (step === 4) {
    return {
      html: `
        ${stepHeader}
        <section class="card-grid">
          <article class="card">
            <h3>Identitate</h3>
            <p><strong>Brand:</strong> ${data.brandName || 'Nesetat'}</p>
            <p><strong>Produs:</strong> ${data.product || 'Nesetat'}</p>
            <p><strong>Industrie:</strong> ${data.industryGuess}</p>
          </article>
          <article class="card">
            <h3>Obiective</h3>
            <ul style="display:flex;flex-direction:column;gap:6px;font-size:14px;color:var(--muted);">
              ${(data.goals || [])
                .map((goal) => `<li>${goal}</li>`)
                .join('') || '<li>Nesetat</li>'}
            </ul>
          </article>
          <article class="card">
            <h3>Ton & capacitate</h3>
            <p><strong>Ton:</strong> ${data.tone.join(', ') || 'Nesetat'}</p>
            <p><strong>Canal principal:</strong> ${data.primaryChannel}</p>
            <p><strong>Capacitate producție:</strong> ${data.capacity}/10</p>
          </article>
          <article class="card">
            <h3>Resurse</h3>
            <p>${data.resources.length ? data.resources.join(', ') : 'Vom genera materiale noi.'}</p>
            <p style="margin-top:8px;color:var(--muted);">${
              data.notes ? `Notă: ${data.notes}` : 'Fără note suplimentare.'
            }</p>
          </article>
        </section>
        <div style="display:flex;gap:12px;margin-top:24px;">
          <button class="secondary-btn" id="back">Înapoi</button>
          <button class="primary-btn" id="confirm">Confirma profilul</button>
        </div>
      `,
      afterRender() {
        document.getElementById('back').addEventListener('click', () => {
          state.onboardingStep = 3;
          render();
        });
        document.getElementById('confirm').addEventListener('click', () => {
          state.onboardingStep = 5;
          render();
        });
      },
    };
  }

  return {
    html: `
      ${stepHeader}
      <div class="card" style="align-items:flex-start;gap:18px;">
        <h3>Perfect. Am înțeles cine ești.</h3>
        <p>Urmează să pornim analiza automată și să construim întreaga strategie.</p>
        <div class="badge success">Profil complet</div>
        <button class="primary-btn" id="start-analysis">Începe analiza</button>
      </div>
    `,
    afterRender() {
      document.getElementById('start-analysis').addEventListener('click', () => {
        state.onboardingCompleted = true;
        state.currentView = 'analysis';
        if (state.analysisProgress.length === 0) {
          state.analysisProgress = analysisModules.map((name) => ({
            name,
            status: 'pending',
          }));
        }
        render();
      });
    },
  };
}

function getOnboardingStepTitle(step) {
  return [
    'Hai să începem. Spune-mi doar esența.',
    'În industria ta, scopurile obișnuite sunt acestea.',
    'Hai să calibrăm întrebările cheie.',
    'Arată-mi ce ai ca să pot crea în stilul tău.',
    'Rezumat brand persona',
    'Confirmare finală',
  ][step] || '';
}

function getOnboardingStepSubtitle(step) {
  switch (step) {
    case 0:
      return 'Numele brandului și produsul principal sunt suficiente pentru început.';
    case 1:
      return 'Selectează ce contează acum sau adaugă propriile ținte.';
    case 2:
      return 'Context rapid despre canale, capacitate și ton.';
    case 3:
      return 'Spune-ne ce materiale ai deja și ce ar trebui să generăm.';
    case 4:
      return 'Revizuiește profilul sintetizat înainte de a-l trimite către AI.';
    case 5:
      return 'Ești gata. Dă startul analizei automate.';
    default:
      return '';
  }
}

function renderAnalysis() {
  if (state.analysisProgress.length === 0) {
    state.analysisProgress = analysisModules.map((name) => ({ name, status: 'pending' }));
  }
  if (!state.analysisStarted) {
    startAnalysisSimulation();
  }

  const progressHtml = state.analysisProgress
    .map((item) => {
      const statusLabel =
        item.status === 'done'
          ? '<span class="badge success">Complet</span>'
          : item.status === 'active'
          ? '<span class="badge info">În curs</span>'
          : '<span class="badge warning">În așteptare</span>';
      return `
        <div class="progress-item">
          <span>${item.name}</span>
          <span class="status">${statusLabel}</span>
        </div>
      `;
    })
    .join('');

  return {
    html: `
      <section class="hero">
        <h2>Analiza automată rulează.</h2>
        <p>Colectăm date din toate sursele conectate și pregătim insight-urile.</p>
      </section>
      <div class="progress-list">${progressHtml}</div>
      ${
        state.analysisCompleted
          ? `<button class="primary-btn" id="to-strategy">Vezi strategia propusă</button>`
          : '<p style="color:var(--muted);">Analizele se marchează automat pe măsură ce se finalizează...</p>'
      }
    `,
    afterRender() {
      const btn = document.getElementById('to-strategy');
      if (btn) {
        btn.addEventListener('click', () => {
          state.currentView = 'strategy';
          render();
        });
      }
    },
  };
}

function startAnalysisSimulation() {
  state.analysisStarted = true;
  let index = 0;
  const step = () => {
    if (index > 0) {
      state.analysisProgress[index - 1].status = 'done';
    }
    if (index >= state.analysisProgress.length) {
      state.analysisCompleted = true;
      if (state.currentView === 'analysis') {
        render();
      }
      return;
    }
    state.analysisProgress[index].status = 'active';
    if (state.currentView === 'analysis') {
      render();
    }
    index += 1;
    setTimeout(step, 900);
  };
  step();
}

function computeStrategy(budget) {
  const baseline = 500;
  const ratio = budget / baseline;
  return {
    postsPerMonth: Math.round(30 * ratio),
    reelsPerWeek: Math.max(2, Math.round(3 * ratio)),
    dmPerDay: Math.round(12 * ratio),
    productionLevel: ratio >= 2 ? 'Premium' : ratio >= 1 ? 'Standard +' : 'Lean',
    mix: {
      educatie: Math.round(40 * ratio),
      dovada: Math.round(30 * ratio),
      brand: Math.round(20 * ratio),
      vanzare: Math.round(10 * ratio),
    },
  };
}

function renderStrategy() {
  const insights = computeStrategy(state.budget);
  return {
    html: `
      <section class="hero">
        <h2>Strategia ta orchestrată</h2>
        <p>Plan complet pe platforme și bugete, ajustabil în timp real.</p>
      </section>
      <div class="slider-wrapper">
        <label>
          Buget lunar (${state.budget} €)
          <input type="range" id="budget-slider" min="150" max="1500" step="50" value="${state.budget}" />
        </label>
        <div class="metrics-grid">
          <div class="metric-card">
            <span>Postări / lună</span>
            <strong>${insights.postsPerMonth}</strong>
          </div>
          <div class="metric-card">
            <span>Reels / săptămână</span>
            <strong>${insights.reelsPerWeek}</strong>
          </div>
          <div class="metric-card">
            <span>DM-uri / zi</span>
            <strong>${insights.dmPerDay}</strong>
          </div>
          <div class="metric-card">
            <span>Nivel producție</span>
            <strong>${insights.productionLevel}</strong>
          </div>
        </div>
      </div>
      <section class="card-grid">
        <article class="card">
          <h3>Mix conținut</h3>
          <p>Educație: ${insights.mix.educatie}%</p>
          <p>Dovadă socială: ${insights.mix.dovada}%</p>
          <p>Brand & emoție: ${insights.mix.brand}%</p>
          <p>Vânzare directă: ${insights.mix.vanzare}%</p>
        </article>
        <article class="card">
          <h3>Platforme cheie</h3>
          <ul style="display:flex;flex-direction:column;gap:8px;color:var(--muted);">
            <li>TikTok – creștere organică accelerată</li>
            <li>Instagram (Feed, Stories, Reels)</li>
            <li>LinkedIn pentru parteneriate B2B</li>
            <li>Email + WhatsApp pentru nurturing</li>
          </ul>
        </article>
        <article class="card">
          <h3>Recomandări AI</h3>
          <p>Testează 2 formate ASMR/săptămână și documentează livezi locale pentru autenticitate.</p>
          <p>Activează DM automation pentru follow-up distribuitori.</p>
        </article>
      </section>
    `,
    afterRender() {
      document.getElementById('budget-slider').addEventListener('input', (event) => {
        state.budget = Number(event.target.value);
        render();
      });
    },
  };
}

function renderContent() {
  const campaignCards = state.campaigns.length
    ? state.campaigns
        .map((campaign) => {
          const summary = summarizeCampaign(campaign);
          const isActive = campaign.id === state.activeCampaignId;
          const badgeClass = campaign.status === 'Activ' ? 'success' : 'info';
          return `
            <article class="card campaign-card ${isActive ? 'active' : ''}" data-campaign="${campaign.id}">
              <div class="badge ${badgeClass}">${isActive ? 'Campanie focus' : campaign.status}</div>
              <h3>${campaign.name}</h3>
              <p class="subtitle">${campaign.goal}</p>
              <p style="color:var(--muted);font-size:13px;">${campaign.timeframe}</p>
              <div class="progress-track">
                <div class="progress-fill" style="width:${summary.completion}%"></div>
              </div>
              <small>${summary.assigned}/${campaign.targetPosts} postări asociate · ${summary.approved} aprobate · ${summary.scheduled} programate</small>
              <div class="campaign-meta">
                <span>${campaign.focus}</span>
              </div>
              <button class="secondary-btn small" data-set-active="${campaign.id}" ${
                isActive ? 'disabled' : ''
              }>${isActive ? 'Campanie curentă' : 'Focusează AI-ul aici'}</button>
            </article>
          `;
        })
        .join('')
    : '<p style="color:var(--muted);">Adaugă o campanie pentru a organiza postările pe obiective.</p>';

  const cards = state.contentBatch
    .map((post) => {
      const badgeClass =
        post.status === 'approved'
          ? 'success'
          : post.status === 'rejected'
          ? 'negative'
          : 'info';
      const badgeLabel =
        post.status === 'approved'
          ? 'Aprobat'
          : post.status === 'rejected'
          ? 'Respins'
          : 'În revizie';
      const campaign = post.campaignId
        ? state.campaigns.find((item) => item.id === post.campaignId)
        : null;
      const campaignSelectOptions = [
        '<option value="">Fără campanie</option>',
        ...state.campaigns.map(
          (campaignOption) => `
            <option value="${campaignOption.id}" ${
              campaignOption.id === post.campaignId ? 'selected' : ''
            }>${campaignOption.name}</option>
          `
        ),
      ].join('');
      return `
        <article class="card" data-post="${post.id}">
          <div class="badge ${badgeClass}">${badgeLabel}</div>
          <h3>${post.platform}</h3>
          <p><strong>Persona:</strong> ${post.persona}</p>
          <p><strong>Pilon:</strong> ${post.pillar}</p>
          <p style="font-style:italic;">${post.hook}</p>
          <p style="color:var(--muted);font-size:13px;">Programat: ${post.scheduledAt}</p>
          ${
            campaign
              ? `<p class="badge warning" style="width:max-content;">${campaign.name}</p>`
              : '<p class="badge info" style="width:max-content;">Fără campanie</p>'
          }
          <label class="campaign-field">
            <span>Campanie</span>
            <select data-post-campaign="${post.id}">${campaignSelectOptions}</select>
          </label>
          <div style="display:flex;gap:10px;">
            <button class="primary-btn" data-action="approve" ${
              post.status === 'approved' ? 'disabled' : ''
            }>Aprobă</button>
            <button class="secondary-btn" data-action="reject" ${
              post.status === 'rejected' ? 'disabled' : ''
            }>Respinge</button>
          </div>
        </article>
      `;
    })
    .join('');

  const campaignForm = `
    <section class="card">
      <h3>Adaugă o campanie</h3>
      <form id="campaign-form" class="form-grid">
        <label>
          Nume campanie
          <input type="text" name="name" placeholder="Ex: Lansare vară" required />
        </label>
        <label>
          Obiectiv
          <input type="text" name="goal" placeholder="Ex: Lead-uri retail premium" required />
        </label>
        <label>
          Interval
          <input type="text" name="timeframe" placeholder="Ex: aprilie - mai" />
        </label>
        <label>
          Țintă postări
          <input type="number" min="3" name="targetPosts" value="8" />
        </label>
        <label class="full">
          Focus creativ
          <input type="text" name="focus" placeholder="Distribuitori, consumatori, etc." />
        </label>
        <div class="form-actions full">
          <button type="submit" class="primary-btn">Salvează campania</button>
        </div>
      </form>
    </section>
  `;

  return {
    html: `
      <section class="hero">
        <h2>Generare conținut</h2>
        <p>Mockup-uri realiste pentru fiecare platformă. Acceptă, ajustează sau respinge.</p>
      </section>
      <section class="card-grid campaign-grid">${campaignCards}</section>
      ${campaignForm}
      <div class="action-row">
        <button class="primary-btn outline" id="generate-post">Generează o idee nouă</button>
      </div>
      <section class="card-grid">${cards}</section>
    `,
    afterRender() {
      const generateBtn = document.getElementById('generate-post');
      if (generateBtn) {
        generateBtn.addEventListener('click', () => {
          const newPost = generateMockPost();
          state.contentBatch = [newPost, ...state.contentBatch];
          logActivity('content', `AI a generat o idee ${newPost.platform} pentru ${newPost.persona}.`);
          render();
        });
      }
      const campaignFormEl = document.getElementById('campaign-form');
      if (campaignFormEl) {
        campaignFormEl.addEventListener('submit', (event) => {
          event.preventDefault();
          const formData = new FormData(campaignFormEl);
          const newCampaign = createCampaign({
            name: formData.get('name'),
            goal: formData.get('goal'),
            timeframe: formData.get('timeframe'),
            targetPosts: formData.get('targetPosts'),
            focus: formData.get('focus'),
          });
          state.campaigns = [newCampaign, ...state.campaigns];
          state.activeCampaignId = newCampaign.id;
          campaignFormEl.reset();
          logActivity('campaign', `Campanie nouă: ${newCampaign.name}.`);
          render();
        });
      }
      document.querySelectorAll('[data-set-active]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-set-active');
          state.activeCampaignId = id;
          const campaign = state.campaigns.find((item) => item.id === id);
          logActivity('campaign', `Focus mutat pe ${campaign?.name || 'campania selectată'}.`);
          render();
        });
      });
      document.querySelectorAll('[data-post]').forEach((card) => {
        const postId = card.getAttribute('data-post');
        card.querySelectorAll('button').forEach((btn) => {
          btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const post = state.contentBatch.find((item) => item.id === postId);
            if (!post) return;
            post.status = action === 'approve' ? 'approved' : 'rejected';
            const actionLabel = action === 'approve' ? 'aprobată' : 'respinsă';
            logActivity('content', `${post.platform} a fost ${actionLabel}.`);
            render();
          });
        });
      });
      document.querySelectorAll('[data-post-campaign]').forEach((select) => {
        select.addEventListener('change', (event) => {
          const postId = select.getAttribute('data-post-campaign');
          const post = state.contentBatch.find((item) => item.id === postId);
          if (!post) return;
          post.campaignId = event.target.value || null;
          const campaign = state.campaigns.find((item) => item.id === post.campaignId);
          logActivity('campaign', `Postarea ${post.platform} a fost asociată ${campaign ? campaign.name : 'fără campanie'}.`);
          render();
        });
      });
    },
  };
}

function renderCalendar() {
  const platformOptions = calendarPlatforms
    .map((platform) => `<option value="${platform}">${platform}</option>`)
    .join('');
  const statusOptions = ['Draft', 'În revizie', 'Programat', 'Publicat']
    .map((status) => `<option value="${status}">${status}</option>`)
    .join('');
  const campaignFilterOptions = [
    `<option value="all" ${state.calendarFilter === 'all' ? 'selected' : ''}>Toate campaniile</option>`,
    ...state.campaigns.map(
      (campaign) => `<option value="${campaign.id}" ${
        state.calendarFilter === campaign.id ? 'selected' : ''
      }>${campaign.name}</option>`
    ),
  ].join('');
  const campaignSelectOptions = [
    '<option value="">Fără campanie</option>',
    ...state.campaigns.map((campaign) => `<option value="${campaign.id}">${campaign.name}</option>`),
  ].join('');
  const filteredSlots =
    state.calendarFilter === 'all'
      ? state.calendarSlots
      : state.calendarSlots.filter((slot) => slot.campaignId === state.calendarFilter);
  const slots = filteredSlots
    .map((slot) => `
      <div class="calendar-slot">
        <h4>${slot.date}</h4>
        <p style="font-weight:600;">${slot.platform}</p>
        <p>${slot.caption}</p>
        <p class="badge info">${slot.status}</p>
        <p class="campaign-tag">${
          slot.campaignId
            ? state.campaigns.find((campaign) => campaign.id === slot.campaignId)?.name || 'Campanie ștearsă'
            : 'Fără campanie'
        }</p>
        <label style="font-size:12px;color:var(--muted);">
          Modifică statusul
          <select data-cal="${slot.id}">
            <option value="Draft" ${slot.status === 'Draft' ? 'selected' : ''}>Draft</option>
            <option value="În revizie" ${slot.status === 'În revizie' ? 'selected' : ''}>În revizie</option>
            <option value="Programat" ${slot.status === 'Programat' ? 'selected' : ''}>Programat</option>
            <option value="Publicat" ${slot.status === 'Publicat' ? 'selected' : ''}>Publicat</option>
          </select>
        </label>
        <label style="font-size:12px;color:var(--muted);">
          Campanie
          <select data-cal-campaign="${slot.id}">
            <option value="" ${slot.campaignId ? '' : 'selected'}>Fără</option>
            ${state.campaigns
              .map(
                (campaign) => `<option value="${campaign.id}" ${
                  campaign.id === slot.campaignId ? 'selected' : ''
                }>${campaign.name}</option>`
              )
              .join('')}
          </select>
        </label>
      </div>
    `)
    .join('');
  const activeCampaign = state.campaigns.find((campaign) => campaign.id === state.activeCampaignId);

  return {
    html: `
      <section class="hero">
        <h2>Calendar de conținut</h2>
        <p>Vizualizează și ajustează programarea postărilor generate.</p>
      </section>
      <div class="filter-row">
        <label>
          Filtrează după campanie
          <select id="calendar-filter">${campaignFilterOptions}</select>
        </label>
        <div class="active-campaign-pill">
          Focus curent: <strong>${activeCampaign?.name || 'Neselectat'}</strong>
        </div>
      </div>
      <section class="card">
        <h3>Adaugă o postare manual</h3>
        <form id="calendar-form" class="form-grid">
          <label>
            Data
            <input type="date" name="date" required />
          </label>
          <label>
            Ora
            <input type="time" name="time" value="09:00" required />
          </label>
          <label>
            Platformă
            <select name="platform">${platformOptions}</select>
          </label>
          <label class="full">
            Descriere
            <input type="text" name="caption" placeholder="Ex: Lansare nou sortiment" required />
          </label>
          <label>
            Status
            <select name="status">${statusOptions}</select>
          </label>
          <label>
            Campanie
            <select name="campaignId">${campaignSelectOptions}</select>
          </label>
          <div class="form-actions full">
            <button type="submit" class="primary-btn">Adaugă în calendar</button>
          </div>
        </form>
      </section>
      <div class="calendar-grid">${slots}</div>
    `,
    afterRender() {
      document.querySelectorAll('[data-cal]').forEach((select) => {
        select.addEventListener('change', (event) => {
          const id = select.getAttribute('data-cal');
          const slot = state.calendarSlots.find((item) => item.id === id);
          if (!slot) return;
          slot.status = event.target.value;
          render();
        });
      });
      const form = document.getElementById('calendar-form');
      if (form) {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const formData = new FormData(form);
          const newSlot = createCalendarSlot({
            date: formData.get('date'),
            time: formData.get('time'),
            platform: formData.get('platform'),
            caption: formData.get('caption'),
            status: formData.get('status'),
            campaignId: formData.get('campaignId'),
          });
          state.calendarSlots = [newSlot, ...state.calendarSlots];
          form.reset();
          const timeInput = form.querySelector('input[name="time"]');
          if (timeInput) {
            timeInput.value = '09:00';
          }
          logActivity('calendar', `${newSlot.platform} programat pe ${newSlot.date}.`);
          render();
        });
      }
      const filterSelect = document.getElementById('calendar-filter');
      if (filterSelect) {
        filterSelect.addEventListener('change', (event) => {
          state.calendarFilter = event.target.value;
          render();
        });
      }
      document.querySelectorAll('[data-cal-campaign]').forEach((select) => {
        select.addEventListener('change', (event) => {
          const slotId = select.getAttribute('data-cal-campaign');
          const slot = state.calendarSlots.find((item) => item.id === slotId);
          if (!slot) return;
          slot.campaignId = event.target.value || null;
          const campaign = state.campaigns.find((item) => item.id === slot.campaignId);
          logActivity('calendar', `Slotul ${slot.platform} a fost atribuit ${campaign ? campaign.name : 'fără campanie'}.`);
          render();
        });
      });
    },
  };
}

function renderAutomation() {
  const selectedFilter = state.activityFilter || 'all';
  const entries = state.activityLog || [];
  const filteredEntries =
    selectedFilter === 'all' ? entries : entries.filter((entry) => entry.type === selectedFilter);
  const summary = computeActivitySummary();
  const filterOptions = activityFilters
    .map(
      (value) => `
        <option value="${value}" ${value === selectedFilter ? 'selected' : ''}>
          ${value === 'all' ? 'Toate tipurile' : getActivityLabel(value)}
        </option>
      `
    )
    .join('');
  const entryList = filteredEntries.length
    ? filteredEntries
        .map(
          (entry) => `
            <article class="activity-item">
              <div>
                <span class="badge ${activityTypeMeta[entry.type]?.badge || 'info'} activity-pill">${getActivityLabel(
                  entry.type
                )}</span>
                <p>${entry.detail}</p>
                <p class="activity-meta">${formatActivityTimestamp(entry.timestamp)}</p>
              </div>
            </article>
          `
        )
        .join('')
    : '<p style="color:var(--muted);">Nicio activitate pentru filtrul selectat.</p>';
  const typeOptions = Object.keys(activityTypeMeta)
    .map((type) => `<option value="${type}">${getActivityLabel(type)}</option>`)
    .join('');

  return {
    html: `
      <section class="hero">
        <h2>Automation & Logs</h2>
        <p>Monitorizează toate evenimentele generate de AI și adaugă note manuale.</p>
      </section>
      <div class="metrics-grid tight">
        <div class="metric-card">
          <span>Evenimente totale</span>
          <strong>${summary.total}</strong>
        </div>
        <div class="metric-card">
          <span>Ultimele 24h</span>
          <strong>${summary.last24h}</strong>
        </div>
        <div class="metric-card">
          <span>Filtru curent</span>
          <strong>${selectedFilter === 'all' ? 'Toate' : getActivityLabel(selectedFilter)}</strong>
        </div>
      </div>
      <section class="card">
        <div class="filter-row">
          <label class="full">
            Filtru tip eveniment
            <select id="activity-filter">${filterOptions}</select>
          </label>
          <button type="button" class="secondary-btn" id="copy-activity">Copiază raportul</button>
        </div>
        <div class="activity-log">${entryList}</div>
      </section>
      <section class="card">
        <h3>Notează o actualizare manuală</h3>
        <form id="activity-note-form" class="form-grid">
          <label>
            Tip
            <select name="type">${typeOptions}</select>
          </label>
          <label class="full">
            Detalii
            <textarea name="detail" placeholder="Ex: Lead strategic confirmat pentru campania Q2" required></textarea>
          </label>
          <div class="form-actions full">
            <button type="submit" class="primary-btn">Salvează nota</button>
          </div>
        </form>
      </section>
    `,
    afterRender() {
      const filterSelect = document.getElementById('activity-filter');
      if (filterSelect) {
        filterSelect.addEventListener('change', (event) => {
          state.activityFilter = event.target.value;
          render();
        });
      }
      const noteForm = document.getElementById('activity-note-form');
      if (noteForm) {
        noteForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const formData = new FormData(noteForm);
          logActivity(formData.get('type') || 'note', formData.get('detail'));
          noteForm.reset();
          render();
        });
      }
      const copyBtn = document.getElementById('copy-activity');
      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          const excerpt = (state.activityLog || [])
            .slice(0, 5)
            .map(
              (entry) => `[${getActivityLabel(entry.type)}] ${formatActivityTimestamp(entry.timestamp)} – ${entry.detail}`
            )
            .join('\n');
          const payload = excerpt || 'Nicio activitate disponibilă.';
          try {
            if (!navigator.clipboard) {
              throw new Error('Clipboard API indisponibil');
            }
            await navigator.clipboard.writeText(payload);
            copyBtn.textContent = 'Copiat ✅';
            setTimeout(() => {
              copyBtn.textContent = 'Copiază raportul';
            }, 1800);
          } catch (error) {
            window.alert('Copierea automată a eșuat. Poți selecta manual textul dorit din log.');
          }
        });
      }
    },
  };
}

function renderAnalytics() {
  const range = state.analyticsRange || '7';
  const analytics = computeAnalytics(range);
  const maxValue = analytics.trend.length ? Math.max(...analytics.trend) : 0;
  const toggles = rangeOptions
    .map(
      (value) => `
        <button type="button" class="secondary-btn ${value === range ? 'active' : ''}" data-range="${value}">
          ${value} zile
        </button>
      `
    )
    .join('');
  const bars = analytics.trend
    .map((value, index) => {
      const height = maxValue ? Math.round((value / maxValue) * 100) : 0;
      return `
        <div class="chart-bar">
          <div class="chart-bar-track">
            <div class="chart-bar-fill" style="height:${height}%"></div>
          </div>
          <span>${value}%</span>
          <small>${analytics.labels[index] || ''}</small>
        </div>
      `;
    })
    .join('');
  const leadItems = analytics.leadBreakdown.length
    ? analytics.leadBreakdown
        .map((item) => `<li><strong>${item.stage}:</strong> ${item.count}</li>`)
        .join('')
    : '<li>Pipeline stabil, fără activitate nouă.</li>';
  const insightItems = analytics.insights.map((item) => `<li>${item}</li>`).join('');

  return {
    html: `
      <section class="hero">
        <h2>Analytics & KPI</h2>
        <p>Monitorizează pulsul campaniilor și impactul automatizărilor în timp real.</p>
      </section>
      <section class="card">
        <div class="analytics-header">
          <h3>Engagement organic (${range} zile)</h3>
          <div class="toggle-group">${toggles}</div>
        </div>
        <div class="chart-bars">${bars}</div>
      </section>
      <div class="metrics-grid">
        <div class="metric-card">
          <span>Engagement mediu</span>
          <strong>${analytics.averageEngagement}%</strong>
        </div>
        <div class="metric-card">
          <span>Postări aprobate</span>
          <strong>${analytics.approvedPosts}</strong>
        </div>
        <div class="metric-card">
          <span>Postări programate</span>
          <strong>${analytics.scheduledPosts}</strong>
        </div>
        <div class="metric-card">
          <span>Conversie DM → Call</span>
          <strong>${analytics.conversionRate}%</strong>
        </div>
      </div>
      <section class="card-grid">
        <article class="card">
          <h3>Lead breakdown</h3>
          <ul class="insight-list">${leadItems}</ul>
        </article>
        <article class="card">
          <h3>Insights recomandate</h3>
          <ul class="insight-list">${insightItems}</ul>
        </article>
        <article class="card">
          <h3>Timpi de răspuns</h3>
          <p><strong>${analytics.responseTime}h</strong> timp mediu de răspuns DM în ultimele ${range} zile.</p>
          <p style="color:var(--muted);">Ținta recomandată este sub 3h pentru lead-uri fierbinți.</p>
        </article>
      </section>
    `,
    afterRender() {
      document.querySelectorAll('[data-range]').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.analyticsRange = btn.getAttribute('data-range');
          render();
        });
      });
    },
  };
}

function renderDM() {
  const conversationNames = Object.keys(state.dmConversations);
  const selected = state.dmSelectedConversation || conversationNames[0];
  const conversation = state.dmConversations[selected];

  const conversationHtml = conversation
    ? conversation.messages
        .map(
          (message) => `
            <div class="chat-message ${message.from === 'ai' ? 'ai' : 'user'}">${message.text}</div>
          `
        )
        .join('')
    : '<p>Nicio conversație selectată.</p>';

  const listHtml = conversationNames
    .map((name) => `
      <button class="secondary-btn" data-convo="${name}" ${
        name === selected ? 'style="background:rgba(17,24,39,0.12);"' : ''
      }>${name}</button>
    `)
    .join('');

  return {
    html: `
      <section class="hero">
        <h2>DM Automation</h2>
        <p>Toate conversațiile într-un inbox stil WhatsApp, cu propuneri AI.</p>
      </section>
      <div class="chat-window">
        <div class="chat-controls">
          <h3>Lead-uri active</h3>
          <div style="display:flex;flex-direction:column;gap:10px;">${listHtml}</div>
          <div class="card">
            <h3>Flow selectat</h3>
            <p><strong>Persona:</strong> ${conversation?.persona || '-'}</p>
            <p><strong>Intent:</strong> ${conversation?.intent || '-'}</p>
          </div>
        </div>
        <div class="chat-thread">
          ${conversationHtml}
        </div>
      </div>
      <form id="dm-form" style="margin-top:18px;display:flex;gap:12px;">
        <input type="text" name="message" placeholder="Răspuns propus" required />
        <button type="submit" class="primary-btn">Trimite</button>
      </form>
    `,
    afterRender() {
      document.querySelectorAll('[data-convo]').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.dmSelectedConversation = btn.getAttribute('data-convo');
          render();
        });
      });
      const form = document.getElementById('dm-form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = new FormData(form).get('message');
        if (!message) return;
        const current = state.dmConversations[state.dmSelectedConversation];
        current.messages.push({ from: 'ai', text: message });
        current.messages.push({
          from: 'lead',
          text: 'Mulțumesc! Revin cu răspuns după ce discut cu echipa.',
        });
        form.reset();
        logActivity('dm', `AI a răspuns conversației ${state.dmSelectedConversation}.`);
        render();
      });
    },
  };
}

function renderLeads() {
  const columns = leadStages
    .map((stage) => {
      const leads = state.leads.filter((lead) => lead.stage === stage);
      const cards = leads
        .map(
          (lead) => `
            <div class="lead-card" data-lead="${lead.id}">
              <h4>${lead.name}</h4>
              <p>Scor: ${lead.score}</p>
              <p>Sursă: ${lead.source}</p>
              <p style="color:var(--muted);">${lead.nextStep}</p>
              <button class="primary-btn" data-action="advance">Mută mai departe</button>
            </div>
          `
        )
        .join('');
      return `
        <section class="pipeline-column">
          <h3>${stage}</h3>
          ${cards || '<p style="color:var(--muted);font-size:13px;">Nimic momentan.</p>'}
        </section>
      `;
    })
    .join('');

  return {
    html: `
      <section class="hero">
        <h2>Lead Pipeline</h2>
        <p>Monitorizează stadiile și mută lead-urile cu un click.</p>
      </section>
      <div class="pipeline">${columns}</div>
    `,
    afterRender() {
      document.querySelectorAll('[data-lead]').forEach((card) => {
        const id = card.getAttribute('data-lead');
        card.querySelector('[data-action="advance"]').addEventListener('click', () => {
          advanceLead(id);
        });
      });
    },
  };
}

function advanceLead(id) {
  const lead = state.leads.find((item) => item.id === id);
  if (!lead) return;
  const currentIndex = leadStages.indexOf(lead.stage);
  if (currentIndex < leadStages.length - 2) {
    lead.stage = leadStages[currentIndex + 1];
    lead.nextStep = suggestNextStep(lead.stage);
    lead.score = Math.min(100, lead.score + 8);
  } else if (currentIndex === leadStages.length - 2) {
    lead.stage = 'Sale';
    lead.nextStep = 'Finalizează contractul';
    lead.score = 95;
  } else {
    lead.stage = 'Lost';
    lead.nextStep = 'Reintră în nurturing după 30 zile';
    lead.score = 20;
  }
  logActivity('lead', `${lead.name} este acum în stadiul ${lead.stage}.`);
  render();
}

function suggestNextStep(stage) {
  switch (stage) {
    case 'Warm':
      return 'Programează un call de descoperire';
    case 'Hot':
      return 'Trimite ofertă personalizată';
    case 'Booked Call':
      return 'Confirmă agenda întâlnirii';
    case 'Sale':
      return 'Finalizează contractul';
    default:
      return 'Continuă nurturing-ul';
  }
}

function renderDashboard() {
  const approved = state.contentBatch.filter((item) => item.status === 'approved').length;
  const scheduled = state.calendarSlots.filter((slot) => slot.status === 'Programat').length;
  const hotLeads = state.leads.filter((lead) => ['Hot', 'Booked Call', 'Sale'].includes(lead.stage))
    .length;
  const campaignHighlights = state.campaigns.length
    ? state.campaigns
        .slice(0, 3)
        .map((campaign) => {
          const summary = summarizeCampaign(campaign);
          const label = campaign.id === state.activeCampaignId ? 'Campanie focus' : campaign.status;
          return `
            <article class="card">
              <div class="badge info">${label}</div>
              <h3>${campaign.name}</h3>
              <p class="subtitle">${campaign.goal}</p>
              <div class="progress-track small">
                <div class="progress-fill" style="width:${summary.completion}%"></div>
              </div>
              <small>${summary.assigned}/${campaign.targetPosts} postări cartografiate · ${summary.approved} aprobate · ${summary.scheduled} programate</small>
            </article>
          `;
        })
        .join('')
    : '<article class="card"><p style="color:var(--muted);">Nicio campanie încă. Adaugă una din modulul de conținut.</p></article>';

  const timelineEntries = (state.activityLog || []).slice(0, 4);
  const timeline = timelineEntries.length
    ? timelineEntries
        .map((entry) => `
          <article class="timeline-item">
            <span class="badge ${activityTypeMeta[entry.type]?.badge || 'info'} activity-pill">${getActivityLabel(
              entry.type
            )}</span>
            <h3>${entry.detail}</h3>
            <p class="activity-meta">${formatActivityTimestamp(entry.timestamp)}</p>
          </article>
        `)
        .join('')
    : '<article class="timeline-item"><p style="color:var(--muted);">Nicio activitate recentă. Interacționează cu modulele pentru a vedea jurnalul.</p></article>';

  return {
    html: `
      <section class="hero">
        <h2>Dashboard</h2>
        <p>Pulse-ul marketingului tău într-o singură privire.</p>
      </section>
      <div class="metrics-grid">
        <div class="metric-card">
          <span>Postări aprobate</span>
          <strong>${approved}</strong>
        </div>
        <div class="metric-card">
          <span>Postări programate</span>
          <strong>${scheduled}</strong>
        </div>
        <div class="metric-card">
          <span>Lead-uri fierbinți</span>
          <strong>${hotLeads}</strong>
        </div>
      </div>
      <section class="card-grid">${campaignHighlights}</section>
      <section class="timeline">${timeline}</section>
      <div class="action-row end">
        <button class="secondary-btn" id="reset-demo">Resetează demo-ul</button>
      </div>
    `,
    afterRender() {
      const resetBtn = document.getElementById('reset-demo');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const confirmed = window.confirm(
            'Vrei să revii la starea inițială a prototipului? Toate datele salvate local vor fi șterse.'
          );
          if (confirmed) {
            resetState();
          }
        });
      }
    },
  };
}

function renderBrain() {
  const historyHtml = state.brainHistory
    .map(
      (entry) => `
        <div class="chat-message ${entry.role === 'ai' ? 'ai' : 'user'}">${entry.text}</div>
      `
    )
    .join('');

  return {
    html: `
      <section class="hero">
        <h2>Agentul Central</h2>
        <p>O singură interfață pentru comenzi poetice și execuție instantă.</p>
      </section>
      <div class="chat-thread" style="max-height:420px;">
        ${historyHtml}
      </div>
      <form id="brain-form" style="display:flex;gap:12px;margin-top:16px;">
        <input name="prompt" type="text" placeholder="Ex: Propune 5 idei de Reels pentru distribuitori" required />
        <button type="submit" class="primary-btn">Trimite</button>
      </form>
    `,
    afterRender() {
      document.getElementById('brain-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const prompt = formData.get('prompt');
        if (!prompt) return;
        state.brainHistory.push({ role: 'user', text: prompt });
        const response = generateBrainResponse(prompt);
        state.brainHistory.push({ role: 'ai', text: response });
        event.target.reset();
        render();
      });
    },
  };
}

function generateBrainResponse(prompt) {
  if (/idei/i.test(prompt) && /reel|reels|video/i.test(prompt)) {
    return `1. Povestea livezii la răsărit · 2. Provocare mix & match mere · 3. Turul depozitului în 30s · 4. Degustare cu un distribuitor · 5. Mini masterclass despre diferențiatori.`;
  }
  if (/funnel/i.test(prompt)) {
    return `Am identificat 3 blocaje: lipsă follow-up în 24h, DM-uri fără CTA clar și ofertă pentru volume mici. Propun să activăm nurturing cu 3 mesaje și să adăugăm un video explicativ.`;
  }
  if (/analizeaz/i.test(prompt)) {
    return `Ultimele 30 de zile arată un reach +28%, conversii DM → call 19% și creștere lead-uri calde +3. Recomandăm diversificarea formatelor educaționale.`;
  }
  return `Am notat. Generez un plan în 4 etape: analiză context, propuneri creative, calendar și DM automation ajustat. Verifică în 2 minute.`;
}

const views = {
  login: renderLogin,
  signup: renderSignup,
  onboarding: renderOnboarding,
  analysis: renderAnalysis,
  strategy: renderStrategy,
  content: renderContent,
  calendar: renderCalendar,
  automation: renderAutomation,
  analytics: renderAnalytics,
  dm: renderDM,
  leads: renderLeads,
  dashboard: renderDashboard,
  brain: renderBrain,
};

document.addEventListener('keydown', (event) => {
  const key = (event.key || '').toLowerCase();
  if (!key) return;
  if ((event.metaKey || event.ctrlKey) && key === 'k') {
    event.preventDefault();
    if (!state.user) return;
    state.showCommandPalette = !state.showCommandPalette;
    state.commandQuery = '';
    render();
  }
  if (key === 'escape') {
    if (state.showCommandPalette) {
      state.showCommandPalette = false;
      state.commandQuery = '';
      render();
    } else if (state.showTour) {
      state.showTour = false;
      render();
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (state.user) {
    const fallback = state.onboardingCompleted ? 'dashboard' : 'onboarding';
    if (!views[state.currentView] || ['login', 'signup'].includes(state.currentView)) {
      state.currentView = fallback;
    }
  } else {
    state.currentView = 'login';
  }
  render();
});
