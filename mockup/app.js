const STORAGE_KEY = 'boring-mockup-state-v1';

const navItems = [
  { id: 'dashboard', label: 'Overview' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'content', label: 'Content' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'dm', label: 'DM Inbox' },
  { id: 'leads', label: 'Lead Pipeline' },
  { id: 'brain', label: 'AI Brain' },
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
  contentBatch: [
    {
      id: 'post-1',
      platform: 'Instagram Reels',
      persona: 'Distribuitori regionali',
      pillar: 'Dovadă socială',
      hook: 'Din livezi locale către raftul tău în 48h',
      status: 'pending',
      scheduledAt: '2025-03-01 09:30',
    },
    {
      id: 'post-2',
      platform: 'TikTok',
      persona: 'Consumatori tineri',
      pillar: 'Brand & emoție',
      hook: 'Sucul care se face singur dimineața',
      status: 'pending',
      scheduledAt: '2025-03-02 18:00',
    },
    {
      id: 'post-3',
      platform: 'LinkedIn',
      persona: 'Parteneri HoReCa',
      pillar: 'Educație',
      hook: 'Cum creezi o experiență premium din ingrediente simple',
      status: 'approved',
      scheduledAt: '2025-03-03 08:45',
    },
  ],
  calendarSlots: [
    {
      id: 'cal-1',
      date: '01 Mar 2025',
      platform: 'Instagram Reels',
      caption: 'Behind the orchard morning pick',
      status: 'Programat',
    },
    {
      id: 'cal-2',
      date: '02 Mar 2025',
      platform: 'TikTok',
      caption: 'Taste test challenge cu distribuitori',
      status: 'În revizie',
    },
    {
      id: 'cal-3',
      date: '03 Mar 2025',
      platform: 'LinkedIn',
      caption: 'Studiu de caz: parteneriat retail local',
      status: 'Programat',
    },
    {
      id: 'cal-4',
      date: '04 Mar 2025',
      platform: 'Email',
      caption: 'Newsletter: sezonul de mere începe',
      status: 'Draft',
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
}

syncCounters();

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
      <main class="main">${html}</main>
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
        });
        render();
      });
    }
  }

  if (afterRender) {
    afterRender();
  }

  persistState();
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
  };
}

function createCalendarSlot({ date, time, platform, caption, status }) {
  const nextIndex = (state.counters?.calendar ?? state.calendarSlots.length) + 1;
  state.counters.calendar = nextIndex;
  return {
    id: `cal-${nextIndex}`,
    date: formatCalendarDate(date, time) || date,
    platform: platform || 'Instagram',
    caption: caption || 'Postare manuală adăugată',
    status: status || 'Draft',
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
      return `
        <article class="card" data-post="${post.id}">
          <div class="badge ${badgeClass}">${badgeLabel}</div>
          <h3>${post.platform}</h3>
          <p><strong>Persona:</strong> ${post.persona}</p>
          <p><strong>Pilon:</strong> ${post.pillar}</p>
          <p style="font-style:italic;">${post.hook}</p>
          <p style="color:var(--muted);font-size:13px;">Programat: ${post.scheduledAt}</p>
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

  return {
    html: `
      <section class="hero">
        <h2>Generare conținut</h2>
        <p>Mockup-uri realiste pentru fiecare platformă. Acceptă, ajustează sau respinge.</p>
      </section>
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
          render();
        });
      }
      document.querySelectorAll('[data-post]').forEach((card) => {
        const postId = card.getAttribute('data-post');
        card.querySelectorAll('button').forEach((btn) => {
          btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const post = state.contentBatch.find((item) => item.id === postId);
            if (!post) return;
            post.status = action === 'approve' ? 'approved' : 'rejected';
            render();
          });
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
  const slots = state.calendarSlots
    .map((slot) => `
      <div class="calendar-slot">
        <h4>${slot.date}</h4>
        <p style="font-weight:600;">${slot.platform}</p>
        <p>${slot.caption}</p>
        <p class="badge info">${slot.status}</p>
       <label style="font-size:12px;color:var(--muted);">
         Modifică statusul
          <select data-cal="${slot.id}">
            <option value="Draft" ${slot.status === 'Draft' ? 'selected' : ''}>Draft</option>
            <option value="În revizie" ${slot.status === 'În revizie' ? 'selected' : ''}>În revizie</option>
            <option value="Programat" ${slot.status === 'Programat' ? 'selected' : ''}>Programat</option>
            <option value="Publicat" ${slot.status === 'Publicat' ? 'selected' : ''}>Publicat</option>
          </select>
        </label>
      </div>
    `)
    .join('');

  return {
    html: `
      <section class="hero">
        <h2>Calendar de conținut</h2>
        <p>Vizualizează și ajustează programarea postărilor generate.</p>
      </section>
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
          });
          state.calendarSlots = [newSlot, ...state.calendarSlots];
          form.reset();
          const timeInput = form.querySelector('input[name="time"]');
          if (timeInput) {
            timeInput.value = '09:00';
          }
          render();
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

  const timeline = [
    {
      title: 'Strategie v1.2 activă',
      detail: 'Buget 500€ · Mix educație 40% · DM intensitate 12/zi',
    },
    {
      title: 'Lead nou cald',
      detail: 'Distribuitor Cluj a răspuns cu interes pentru 500L/lună',
    },
    {
      title: 'Postare aprobată',
      detail: 'TikTok – Taste test challenge programat pe 2 martie',
    },
  ];

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
      <section class="timeline">
        ${timeline
          .map(
            (item) => `
              <article class="timeline-item">
                <h3>${item.title}</h3>
                <p style="color:var(--muted);">${item.detail}</p>
              </article>
            `
          )
          .join('')}
      </section>
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
  analytics: renderAnalytics,
  dm: renderDM,
  leads: renderLeads,
  dashboard: renderDashboard,
  brain: renderBrain,
};

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
