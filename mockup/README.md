# BORING Marketing Mockup

Acest prototip static oferă o experiență interactivă pentru fluxurile MVP descrise în documentul tehnic:

- Login & Signup
- Onboarding cu 6 pași și rezumat de brand
- Analiză automată cu progres simulată
- Strategia ajustabilă pe buget
- Generarea de conținut cu feedback (approve/reject)
- Calendar de postări, DM Inbox, Lead Pipeline și Dashboard
- Analytics & KPI cu grafice dinamice și selecție interval (7 / 30 / 90 zile)
- Agentul Central (AI Brain) cu răspunsuri demonstrative
- Persistență locală a datelor (localStorage) și buton de reset din Dashboard
- Generator rapid de idei noi de conținut + formular pentru adăugarea manuală a postărilor în calendar
- Planificator de campanii cu carduri dedicate, progres și formular de creare rapidă
- Posibilitatea de a asocia fiecare postare sau intrare din calendar la o campanie, plus filtre și focus AI

## Cum rulezi mockup-ul

1. Deschide fișierul `index.html` din folderul `mockup/` într-un browser modern.
2. Nu sunt necesare servere sau instalări suplimentare – este o aplicație statică (HTML, CSS, JS).

### Deploy pe Vercel

Repo-ul conține un `index.html` în rădăcină care redirecționează spre `mockup/index.html`, astfel încât deploy-ul direct pe Vercel să
funcționeze fără configurații suplimentare. Atunci când creezi proiectul în Vercel:

1. Alege repository-ul și păstrează `Root Directory` implicit (rădăcina repo-ului).
2. Lasă câmpul „Build Command” gol și setează „Output Directory” la `.` pentru a servi fișierele statice existente.
3. După deploy, URL-ul principal va încărca mockup-ul automat; dacă este nevoie, link-ul direct rămâne `https://<project>/mockup/index.html`.

## Notă

Mockup-ul simulează comportamentele aplicației: status-urile de analiză, aprobarea postărilor, mutarea lead-urilor și răspunsurile AI sunt generate local pentru a demonstra UX-ul și logica principală. Starea se salvează în browser prin `localStorage`; folosește butonul „Resetează demo-ul” din Dashboard pentru a reveni la starea inițială dacă vrei să reiei experiența de la zero.
