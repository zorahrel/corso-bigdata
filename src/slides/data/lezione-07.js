export const meta = {
  lessonNumber: '07',
  title: 'Lab: Automazione da zero',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '07',
    title: 'Lab: Automazione\nda Zero',
    subtitle: 'Lunedì 13/04/2026 · 6h in presenza · Gestita da Tutor',
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda — Oggi costruiamo!',
    items: [
      { emoji: '\u{1F4CB}', text: 'Setup & Registrazione piattaforme (30 min)' },
      { emoji: '\u26A1', text: 'Esercizio 1 — Zapier free: crea un Zap con AI step (60 min)' },
      { emoji: '\u2615', text: 'Pausa caffè (15 min)' },
      { emoji: '\u{1F3A8}', text: 'Esercizio 2 — Make.com free: scenario con modulo AI (60 min)' },
      { emoji: '\u{1F527}', text: 'Esercizio 3 — n8n community: workflow email triage (60 min)' },
      { emoji: '\u{1F355}', text: 'Pausa pranzo (15 min)' },
      { emoji: '\u{1F3C6}', text: 'Esercizio 4 — Sfida finale: stesso problema, 3 tool diversi (60 min)' },
      { emoji: '\u{1F4A1}', text: 'Bonus — Workflow Creativo: progetta il tuo workflow ideale (30 min)' },
      { emoji: '\u{1F4CA}', text: 'Recap & deliverable finali (10 min)' },
    ],
  },

  // 3. SCHEDULE
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F552} Schedule della Giornata',
    content: `<div style="max-width:750px; margin:0 auto; text-align:left; font-size:1.1em;">
  <table style="width:100%; border-collapse:collapse;">
    <tr style="border-bottom:2px solid var(--primary);"><th style="text-align:left; padding:8px;">Orario</th><th style="text-align:left; padding:8px;">Blocco</th><th style="text-align:right; padding:8px;">Durata</th></tr>
    <tr><td style="padding:6px 8px;">09:00 – 09:30</td><td style="padding:6px 8px;">\u{1F4CB} Setup & Registrazione piattaforme</td><td style="text-align:right; padding:6px 8px;">30 min</td></tr>
    <tr style="background:rgba(255,255,255,0.05);"><td style="padding:6px 8px;">09:30 – 10:30</td><td style="padding:6px 8px;">\u26A1 Esercizio 1 — Zapier</td><td style="text-align:right; padding:6px 8px;">60 min</td></tr>
    <tr><td style="padding:6px 8px;">10:30 – 10:45</td><td style="padding:6px 8px;">\u2615 <strong>Pausa caffè</strong></td><td style="text-align:right; padding:6px 8px;">15 min</td></tr>
    <tr style="background:rgba(255,255,255,0.05);"><td style="padding:6px 8px;">10:45 – 11:45</td><td style="padding:6px 8px;">\u{1F3A8} Esercizio 2 — Make.com</td><td style="text-align:right; padding:6px 8px;">60 min</td></tr>
    <tr><td style="padding:6px 8px;">11:45 – 12:45</td><td style="padding:6px 8px;">\u{1F527} Esercizio 3 — n8n</td><td style="text-align:right; padding:6px 8px;">60 min</td></tr>
    <tr style="background:rgba(255,255,255,0.05);"><td style="padding:6px 8px;">12:45 – 13:00</td><td style="padding:6px 8px;">\u{1F355} <strong>Pausa pranzo</strong></td><td style="text-align:right; padding:6px 8px;">15 min</td></tr>
    <tr><td style="padding:6px 8px;">13:00 – 14:00</td><td style="padding:6px 8px;">\u{1F3C6} Esercizio 4 — Sfida finale</td><td style="text-align:right; padding:6px 8px;">60 min</td></tr>
    <tr style="background:rgba(255,255,255,0.05);"><td style="padding:6px 8px;">14:00 – 14:30</td><td style="padding:6px 8px;">\u{1F4A1} Bonus — Workflow Creativo</td><td style="text-align:right; padding:6px 8px;">30 min</td></tr>
    <tr><td style="padding:6px 8px;">14:30 – 14:40</td><td style="padding:6px 8px;">\u{1F4CA} Recap & consegna deliverable</td><td style="text-align:right; padding:6px 8px;">10 min</td></tr>
    <tr style="border-top:2px solid var(--primary); font-weight:bold;"><td style="padding:8px;" colspan="2">Totale</td><td style="text-align:right; padding:8px;">340 min + 20 min pause = 6h</td></tr>
  </table>
</div>`,
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: tieni d\'occhio i tempi. Se un esercizio sfora, riduci il bonus ma non tagliare le pause.',
  },

  // 4. REGOLE DEL LAB
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F6A8} Regole del Lab',
    content: `<div style="max-width:700px; margin:0 auto; text-align:left;">
  <ul class="feature-list">
    <li><span class="icon">\u{1F4B0}</span> <strong>SOLO free tier</strong> — Zapier, Make, n8n cloud trial</li>
    <li><span class="icon">\u{1F6AB}</span> <strong>Zero teoria</strong> — si costruisce, si testa, si rompe</li>
    <li><span class="icon">\u{1F4F8}</span> <strong>Ogni esercizio = deliverable</strong> — screenshot del workflow</li>
    <li><span class="icon">\u{1F4A1}</span> <strong>Se ti blocchi:</strong> compagno \u2192 tutor \u2192 mai fermo</li>
    <li><span class="icon">\u{1F916}</span> <strong>AI step obbligatorio</strong> — almeno uno step AI per workflow</li>
    <li><span class="icon">\u{1F4B3}</span> <strong>Niente carte di credito!</strong> — se chiede la carta, usa l'alternativa gratuita indicata</li>
  </ul>
</div>`,
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: verifica che NESSUNO inserisca dati di pagamento. Le alternative gratuite sono indicate in ogni esercizio.',
  },

  // 5. MEME
  {
    type: 'meme',
    image: { src: 'https://devhumor.com/content/uploads/images/April2025/refactoring_big_plans.jpeg', alt: 'Automation plans' },
    caption: '"I miei piani di automazione vs la realt\u00e0 del primo workflow"',
  },

  // 6. Quick overview: i 3 tool
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'I 3 Tool di Oggi \u2014 Quick Overview',
    columns: ['', 'Zapier', 'Make.com', 'n8n'],
    rows: [
      ['Difficolt\u00e0', '\u2B50 Facile', '\u2B50\u2B50 Media', '\u2B50\u2B50\u2B50 Avanzato'],
      ['Free tier', '100 task/mese, 5 Zap', '1000 ops/mese', 'Cloud trial / self-host gratis'],
      ['AI integrata', 'ChatGPT nativo', 'Modulo OpenAI/HTTP', 'Nodo AI Agent + qualsiasi LLM'],
      ['AI gratis', 'Chatbot built-in (free)', 'HTTP \u2192 Gemini API (free)', 'HTTP \u2192 Gemini API (free)'],
      ['Punto forte', 'Semplicit\u00e0 assoluta', 'Workflow visuale potente', 'Open source, massimo controllo'],
      ['Registrazione', 'zapier.com', 'make.com', 'n8n.cloud'],
    ],
    footer: '<strong>\u26A0\uFE0F Registratevi su tutti e 3 nella prossima slide!</strong> Servono ~30 min \u2014 non saltate questo step.',
  },

  // ─── SETUP & REGISTRAZIONE ──────────────────────────────────────────────

  // 7. Setup & Registrazione
  {
    type: 'hands-on',
    heading: 'Setup & Registrazione Piattaforme',
    timer: '30 minuti',
    level: 'base',
    tools: ['Browser', 'Account Google (per login rapido)'],
    deliverable: 'Screenshot della dashboard di ciascuna piattaforma (3 screenshot)',
    instructions: [
      '<strong>Obiettivo:</strong> creare account gratuiti su tutte e 3 le piattaforme PRIMA di iniziare gli esercizi',
      '<strong>\u{1F6A8} Importante:</strong> usa lo STESSO account Google per tutte e 3 \u2014 semplifica le integrazioni Gmail/Sheets',
      '<strong>--- Zapier (10 min) ---</strong>',
      '<strong>Step 1:</strong> Vai su <a href="https://zapier.com" target="_blank">zapier.com</a> \u2192 "Sign up free" \u2192 accedi con Google',
      '<strong>Step 2:</strong> Completa il wizard iniziale (settore, ruolo \u2192 metti quello che vuoi)',
      '<strong>Step 3:</strong> Verifica di essere nella dashboard \u2192 screenshot',
      '<strong>--- Make.com (10 min) ---</strong>',
      '<strong>Step 4:</strong> Vai su <a href="https://make.com" target="_blank">make.com</a> \u2192 "Get started free" \u2192 accedi con Google',
      '<strong>Step 5:</strong> Completa il wizard \u2192 scegli "Education" o "Other" come settore',
      '<strong>Step 6:</strong> Verifica di essere nella dashboard \u2192 screenshot',
      '<strong>--- n8n (10 min) ---</strong>',
      '<strong>Step 7:</strong> Vai su <a href="https://n8n.cloud" target="_blank">n8n.cloud</a> \u2192 "Start free" \u2192 accedi con Google',
      '<strong>Step 8:</strong> Trial gratuito = 2500 esecuzioni. <strong>NON serve carta di credito</strong>',
      '<strong>Step 9:</strong> Verifica di essere nella dashboard \u2192 screenshot',
      '<strong>\u2705 Checklist finale:</strong> hai 3 tab aperte (Zapier, Make, n8n) tutte loggate? Ottimo, sei pronto!',
    ],
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: gira tra i banchi. Problemi comuni: email di verifica in spam, wizard che richiede "team name" (basta inventare). Se qualcuno ha problemi con Google login, usi email+password.',
  },

  // ─── ESERCIZIO 1: Zapier ──────────────────────────────────────────────

  // 8. Esercizio 1: Zapier free
  {
    type: 'hands-on',
    heading: 'Esercizio 1: Zapier Free \u2014 Crea un Zap con AI',
    timer: '60 minuti',
    level: 'base',
    tools: ['Zapier (zapier.com \u2014 free tier)', 'Gmail (free)'],
    deliverable: 'Screenshot dello Zap completo (tutti gli step visibili) + Google Sheet con almeno 3 righe classificate',
    instructions: [
      '<strong>Obiettivo:</strong> creare un Zap che classifica email con AI',
      '<strong>Step 1 \u2014 Nuovo Zap:</strong> "Create" \u2192 "Zaps" \u2192 "Create a new Zap"',
      '<strong>Step 2 \u2014 Trigger:</strong> Cerca "Gmail" \u2192 "New Email" \u2192 connetti Gmail \u2192 label "INBOX"',
      '<strong>Step 3 \u2014 AI Step (opzione A \u2014 ChatGPT):</strong> "+" \u2192 cerca "ChatGPT" \u2192 "Conversation". Prompt: "Classifica email in URGENTE/NORMALE/SPAM. Rispondi con categoria + motivazione 1 riga. Da: {{from}}, Oggetto: {{subject}}, Testo: {{body_plain}}"',
      '<strong>\u26A0\uFE0F Step 3 \u2014 AI Step (opzione B \u2014 fallback gratuito):</strong> Se ChatGPT richiede piano a pagamento, usa "Zapier Chatbot" (gratuito, integrato) oppure il modulo "Code by Zapier" con JavaScript che chiama l\'API Gemini gratuita (vedi slide Risorse)',
      '<strong>Step 4 \u2014 Sheets:</strong> "+" \u2192 "Google Sheets" \u2192 "Create Row". Crea sheet "Email Triage AI" con colonne: Data, Mittente, Oggetto, Categoria, Motivazione',
      '<strong>Step 5 \u2014 Test:</strong> "Test" su ogni step, inviati un\'email di prova',
      '<strong>Step 6 \u2014 Attiva:</strong> "Publish" per attivare lo Zap',
      '<strong>Step 7 \u2014 Verifica:</strong> Invia 3 email diverse (urgente, normale, spam) e controlla il Sheet',
      '<strong>Bonus:</strong> se categoria = URGENTE \u2192 azione Gmail di notifica',
      '<strong>Screenshot:</strong> cattura Zap completo + Sheet con almeno 3 righe',
    ],
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: il modulo ChatGPT potrebbe richiedere un piano Zapier a pagamento. In quel caso guida gli studenti verso l\'opzione B (Zapier Chatbot o Code). Se Gmail non si connette, verifica che l\'account Google abbia "App meno sicure" abilitate o che sia stato concesso il permesso OAuth.',
  },

  // ─── ESERCIZIO 2: Make.com ──────────────────────────────────────────────

  // 9. Esercizio 2: Make.com free
  {
    type: 'hands-on',
    heading: 'Esercizio 2: Make.com Free \u2014 Scenario con Modulo AI',
    timer: '60 minuti',
    level: 'intermedio',
    tools: ['Make.com (make.com \u2014 free tier)', 'Google Sheets (free)'],
    deliverable: 'Screenshot dello scenario Make completo (tutti i moduli visibili) + Google Sheet con almeno 2 righe analizzate',
    instructions: [
      '<strong>Obiettivo:</strong> scenario Make.com che processa dati con AI e li salva',
      '<strong>Step 1 \u2014 Nuovo Scenario:</strong> "Create a new scenario"',
      '<strong>Step 2 \u2014 Webhook:</strong> "+" \u2192 "Webhooks" \u2192 "Custom webhook" \u2192 "Add" \u2192 copia l\'URL',
      '<strong>Step 3 \u2014 Testa webhook:</strong> Apri un nuovo tab, vai su <a href="https://reqbin.com" target="_blank">reqbin.com</a>. Metodo POST, incolla URL webhook, body JSON:<br><code>{"nome":"Mario Rossi", "messaggio":"Info prodotto enterprise", "email":"mario@test.it"}</code>',
      '<strong>Step 4 \u2014 Modulo AI (opzione A \u2014 HTTP + Gemini gratis):</strong> "+" \u2192 "HTTP" \u2192 "Make a request". URL: <code>https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=TUA_API_KEY</code> \u2014 Metodo POST, Body JSON:<br><code>{"contents":[{"parts":[{"text":"Analizza messaggio cliente: 1) Score interesse 1-10, 2) Categoria lead caldo/tiepido/freddo, 3) Bozza risposta. Messaggio: {{messaggio}} Da: {{nome}}"}]}]}</code>',
      '<strong>\u{1F511} Come ottenere la API key Gemini gratis:</strong> Vai su <a href="https://aistudio.google.com/apikey" target="_blank">aistudio.google.com/apikey</a> \u2192 "Create API key" \u2192 copia la chiave. \u00C8 gratuita, nessuna carta richiesta.',
      '<strong>Step 4 \u2014 Modulo AI (opzione B):</strong> Se hai gi\u00e0 una API key OpenAI: "+" \u2192 "OpenAI" \u2192 "Create a Completion". Stesso prompt di sopra.',
      '<strong>Step 5 \u2014 Sheets:</strong> "+" \u2192 "Google Sheets" \u2192 "Add a Row". Colonne: Nome, Email, Messaggio, Score, Categoria, Risposta',
      '<strong>Step 6 \u2014 Test:</strong> "Run once" \u2192 invia JSON al webhook \u2192 verifica Sheet',
      '<strong>Step 7 \u2014 Screenshot:</strong> cattura scenario Make + Sheet con risultati',
    ],
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: la Gemini API key si crea in 1 minuto su aistudio.google.com/apikey. Se il webhook non risponde, verifica che lo scenario sia in "Run once" (modalit\u00e0 ascolto). Errore 400 su HTTP? Controlla che il body sia JSON valido (virgolette doppie, non singole).',
  },

  // ─── ESERCIZIO 3: n8n ──────────────────────────────────────────────

  // 10. Esercizio 3: n8n — Workflow Email Triage
  {
    type: 'hands-on',
    heading: 'Esercizio 3: n8n Community \u2014 Email Triage con AI',
    timer: '60 minuti',
    level: 'avanzato',
    tools: ['n8n (n8n.cloud \u2014 trial gratuito)', 'Gmail (free)'],
    deliverable: 'Workflow n8n esportato (JSON scaricato) + screenshot del risultato con almeno 2 email smistate correttamente',
    instructions: [
      '<strong>Obiettivo:</strong> workflow n8n di email triage con AI e smistamento automatico',
      '<strong>Step 1 \u2014 Nuovo Workflow:</strong> "Add workflow" \u2192 nome "Email Triage AI"',
      '<strong>Step 2a \u2014 Trigger Gmail:</strong> Nodo "Gmail Trigger" \u2192 "Message Received" \u2192 connetti Gmail',
      '<strong>Step 2b \u2014 Alternativa:</strong> "Manual Trigger" + nodo "Set" con dati email finti (usa le email di test qui sotto)',
      '<strong>Step 3 \u2014 Nodo AI (opzione A \u2014 HTTP + Gemini gratis):</strong> Nodo "HTTP Request" \u2192 URL: <code>https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=TUA_API_KEY</code> \u2014 Metodo POST, Body JSON con prompt: "Classifica email in JSON: {categoria: URGENTE|NORMALE|SPAM, priorita: 1-5, riassunto, azione_suggerita}"',
      '<strong>\u{1F511} API key Gemini:</strong> stessa chiave dell\'esercizio 2! Se non l\'hai ancora: <a href="https://aistudio.google.com/apikey" target="_blank">aistudio.google.com/apikey</a> \u2192 gratis, nessuna carta.',
      '<strong>Step 3 \u2014 Nodo AI (opzione B):</strong> Se hai API key OpenAI: nodo "OpenAI" con stesso prompt. Attenzione: OpenAI costa ~$0.01 per richiesta.',
      '<strong>Step 4 \u2014 Switch:</strong> Nodo "Switch" che smista per categoria: URGENTE / NORMALE / SPAM',
      '<strong>Step 5 \u2014 Azioni:</strong> URGENTE \u2192 Gmail alert | NORMALE \u2192 Sheets log | SPAM \u2192 ignora',
      '<strong>Step 6 \u2014 Test:</strong> "Execute Workflow" \u2192 verifica smistamento con le email di test',
      '<strong>Step 7 \u2014 Esporta:</strong> Menu \u2192 "Download" per salvare JSON + screenshot',
    ],
    handsOnMaterial: {
      label: 'Email di test da usare durante l\'esercizio',
      testEmails: [
        {
          label: 'Email URGENTE',
          from: 'marco.bianchi@cliente-top.it',
          subject: 'URGENTE: Piattaforma down \u2014 impossibile processare ordini',
          body: 'Da questa mattina la piattaforma restituisce errore 503. Stiamo perdendo circa 15.000\u20AC/ora. Serve risoluzione IMMEDIATA.',
        },
        {
          label: 'Email NORMALE',
          from: 'laura.verdi@prospect.it',
          subject: 'Richiesta informazioni \u2014 piano Enterprise',
          body: 'Ho partecipato al vostro webinar e vorrei una call di 30 min per discutere il piano Enterprise. Mi interessano pricing, integrazione SAP, e tempistiche.',
        },
        {
          label: 'Email SPAM',
          from: 'deals@best-marketing-ever.xyz',
          subject: 'OFFERTA ESCLUSIVA: 10.000 follower Instagram GARANTITI!!!',
          body: 'Congratulazioni!!! 10.000 follower Instagram REALI per soli 29.99\u20AC!!! Clicca QUI per attivare subito >>> Offerta valida solo 24 ore!!!',
        },
      ],
    },
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: se il nodo HTTP d\u00e0 errore 403, la API key Gemini potrebbe non essere attiva (aspettare 1-2 min dopo la creazione). Se Gmail Trigger non si attiva, usare Manual Trigger + Set come alternativa. Il JSON di risposta Gemini va parsato: usa nodo "Set" con espressione {{$json.candidates[0].content.parts[0].text}}.',
  },

  // ─── ESERCIZIO 4: Sfida Finale ──────────────────────────────────────────

  // 11. Esercizio 4: Sfida Finale
  {
    type: 'hands-on',
    heading: 'Esercizio 4: Sfida Finale \u2014 Stesso Problema, 3 Tool',
    timer: '60 minuti',
    level: 'intermedio',
    tools: ['Zapier (free)', 'Make.com (free)', 'n8n (free)'],
    deliverable: 'Google Sheet "Confronto Tool AI" con tabella comparativa compilata + presentazione 2 min alla classe',
    instructions: [
      '<strong>Obiettivo:</strong> confronta i 3 tool sulla tua esperienza diretta',
      '<strong>Il Problema:</strong> "Feedback cliente \u2192 AI analizza sentiment, genera bozza risposta, salva in foglio di log"',
      '<strong>--- Parte 1: Tabella comparativa (30 min) ---</strong>',
      '<strong>Step 1:</strong> Crea Google Sheet "Confronto Tool AI" con colonne: Criterio | Zapier | Make.com | n8n',
      '<strong>Step 2:</strong> Compila voti 1-5 per: Tempo setup, Facilit\u00e0 d\'uso, Flessibilit\u00e0, Qualit\u00e0 risultato AI, Generosit\u00e0 free tier, Qualit\u00e0 documentazione',
      '<strong>Step 3:</strong> Aggiungi riga "Pro" e "Contro" per ogni tool \u2014 dalla TUA esperienza di oggi',
      '<strong>Step 4:</strong> Riga finale: "Per il MIO lavoro sceglierei [X] perch\u00e9..." (3 motivazioni concrete)',
      '<strong>--- Parte 2: Mini-presentazione (30 min) ---</strong>',
      '<strong>Step 5:</strong> Prepara 2-3 slide mentali: 1) Tool scelto e perch\u00e9, 2) Cosa ti ha sorpreso, 3) Consiglio per chi inizia',
      '<strong>Step 6:</strong> Presentazione 2 min a testa davanti alla classe',
      '<strong>Step 7:</strong> Dopo ogni presentazione: 1 domanda dal pubblico',
      '<strong>Ricorda:</strong> non esiste il tool perfetto \u2014 esiste quello giusto per TE',
    ],
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: nella parte presentazioni, tieni il timer a 2 min/persona (usa il telefono). Se la classe \u00e8 grande (>15), fai presentare solo i volontari e raccogli gli Sheet di tutti. Stimola il dibattito chiedendo "Qualcuno ha scelto diversamente?".',
  },

  // ─── BONUS: Workflow Creativo ──────────────────────────────────────────

  // 12. Bonus: Workflow Creativo
  {
    type: 'hands-on',
    heading: 'Bonus: Workflow Creativo \u2014 Progetta il Tuo Workflow Ideale',
    timer: '30 minuti',
    level: 'base',
    tools: ['Carta e penna / Lavagna / Google Slides'],
    deliverable: 'Schema del workflow su carta/lavagna o slide + pitch di 1 minuto',
    instructions: [
      '<strong>Obiettivo:</strong> progettare (su carta!) un workflow AI che risolva un problema REALE del tuo lavoro o vita quotidiana',
      '<strong>\u{1F6AB} Niente codice, niente piattaforme</strong> \u2014 solo pensiero creativo!',
      '<strong>--- Fase 1: Brainstorming (10 min) ---</strong>',
      '<strong>Step 1:</strong> Pensa a un\'attivit\u00e0 ripetitiva che fai almeno 1 volta a settimana',
      '<strong>Step 2:</strong> Disegna il workflow: Trigger \u2192 Step 1 \u2192 Step 2 \u2192 ... \u2192 Risultato',
      '<strong>Step 3:</strong> Per ogni step indica: quale tool useresti (Zapier/Make/n8n) e perch\u00e9',
      '<strong>Step 4:</strong> Almeno 1 step deve usare AI \u2014 quale modello e per fare cosa?',
      '<strong>--- Fase 2: Pitch & Votazione (20 min) ---</strong>',
      '<strong>Step 5:</strong> Ogni studente presenta il suo workflow in 1 minuto (max!)',
      '<strong>Step 6:</strong> Dopo tutte le presentazioni: votazione per alzata di mano',
      '<strong>\u{1F3C6} Categorie di voto:</strong> "Pi\u00f9 utile", "Pi\u00f9 creativo", "Pi\u00f9 folle"',
      '<strong>Esempio:</strong> "Ogni luned\u00ec mattina \u2192 Gmail scrape newsletter \u2192 AI riassume le top 5 news \u2192 Slack post nel canale #team \u2192 Sheets log"',
    ],
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: questo esercizio funziona come buffer se gli esercizi precedenti hanno sforato. Se sei in ritardo, riducilo a 15 min (solo brainstorming, niente pitch). Se sei in anticipo, lascia pi\u00f9 tempo per le presentazioni.',
  },

  // 13. MEME
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/IPbS5R4fSUl5S/giphy.gif', alt: 'Building automations at 3am' },
    caption: '"Quando il tuo primo workflow funziona al primo tentativo"',
  },

  // 14. Troubleshooting Rapido
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F6E0}\uFE0F Troubleshooting Rapido',
    content: `<div style="max-width:750px; margin:0 auto; text-align:left;">
  <ul class="feature-list">
    <li><span class="icon">\u{1F534}</span> <strong>Gmail non si connette:</strong> Verifica permessi OAuth \u2192 riprova \u2192 se fallisce, usa Manual Trigger con dati finti</li>
    <li><span class="icon">\u{1F534}</span> <strong>Gemini API key non funziona:</strong> Aspetta 2 min dopo la creazione. Controlla di aver copiato la chiave INTERA. Rigenera se necessario.</li>
    <li><span class="icon">\u{1F534}</span> <strong>Webhook non riceve dati:</strong> Verifica che lo scenario/workflow sia in modalit\u00e0 ascolto ("Run once" su Make, "Execute" su n8n). URL corretto?</li>
    <li><span class="icon">\u{1F534}</span> <strong>Errore 429 (rate limit):</strong> Stai mandando troppe richieste. Aspetta 1 minuto e riprova.</li>
    <li><span class="icon">\u{1F534}</span> <strong>JSON non parsato:</strong> Controlla virgolette doppie (non singole), niente virgola dopo l'ultimo campo, parentesi bilanciate.</li>
    <li><span class="icon">\u{1F534}</span> <strong>Free tier esaurito:</strong> Zapier (100 task) \u2014 cancella Zap di test e ricrea. Make (1000 ops) \u2014 difficile esaurirle in 1 giorno.</li>
    <li><span class="icon">\u{1F7E2}</span> <strong>Regola d'oro:</strong> se non funziona dopo 5 min, chiedi al compagno. Dopo 10 min, chiama il tutor. Mai fermi!</li>
  </ul>
</div>`,
    footer: '\u{1F9D1}\u200D\u{1F3EB} Tutor: stampa o tieni aperta questa slide sul tuo laptop. I problemi pi\u00f9 frequenti sono OAuth Gmail e JSON malformato.',
  },

  // 15. RECAP
  {
    type: 'recap',
    heading: 'Recap \u2014 Lab 07',
    items: [
      'Zapier: il pi\u00f9 semplice \u2014 perfetto per partire, AI integrata in 2 click, free tier limitato',
      'Make.com: il pi\u00f9 visuale \u2014 workflow come diagrammi, free tier generoso (1000 ops/mese)',
      'n8n: il pi\u00f9 potente \u2014 open source, self-hostabile, AI Agent nativo, curva pi\u00f9 ripida',
      'Gemini API: alternativa gratuita a OpenAI \u2014 funziona su tutte e 3 le piattaforme via HTTP',
      'Non esiste il tool perfetto \u2014 esiste quello giusto per il TUO livello e contesto',
      'Hai costruito 3+ workflow funzionanti con AI \u2014 sei pronto per automatizzare il tuo lavoro!',
    ],
  },

  // 16. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Zapier \u2014 zapier.com', url: 'https://zapier.com' },
      { label: 'Make.com \u2014 make.com', url: 'https://make.com' },
      { label: 'n8n \u2014 n8n.io (open source)', url: 'https://n8n.io' },
      { label: 'Gemini API Key (gratuita)', url: 'https://aistudio.google.com/apikey' },
      { label: 'Gemini API Docs \u2014 REST quickstart', url: 'https://ai.google.dev/gemini-api/docs/get-started/rest' },
      { label: 'n8n AI Agent Tutorial 2026', url: 'https://www.youtube.com/watch?v=PfdnYe2690E' },
      { label: 'Free n8n AI Course \u2014 8 lezioni + certificato', url: 'https://findskill.ai/courses/n8n-ai-automation-workflows/' },
      { label: 'Build Your First AI Automation \u2014 Sabrina Ramonov', url: 'https://www.sabrina.dev/p/build-your-first-ai-automation' },
    ],
  },

  // 17. Prossima lezione
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: '08 \u00b7 Lab: AI per il\nTuo Lavoro',
    subtitle: 'Email, documenti, meeting \u2014 costruisci il tuo stack AI personale',
    style: { color: 'var(--secondary)' },
  },
]
