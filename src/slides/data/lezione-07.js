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
      { emoji: '\u26A1', text: 'Esercizio 1 — Zapier free: crea un Zap con AI step (60 min)' },
      { emoji: '\u{1F3A8}', text: 'Esercizio 2 — Make.com free: scenario con modulo AI (60 min)' },
      { emoji: '\u{1F527}', text: 'Esercizio 3 — n8n community: workflow email triage (60 min)' },
      { emoji: '\u{1F3C6}', text: 'Esercizio 4 — Sfida finale: stesso problema, 3 tool diversi (45 min)' },
    ],
  },

  // 3. REGOLE DEL LAB
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F6A8} Regole del Lab',
    content: `<div style="max-width:700px; margin:0 auto; text-align:left;">
  <ul class="feature-list">
    <li><span class="icon">\u{1F4B0}</span> <strong>SOLO free tier</strong> — Zapier, Make, n8n cloud trial</li>
    <li><span class="icon">\u{1F6AB}</span> <strong>Zero teoria</strong> — si costruisce, si testa, si rompe</li>
    <li><span class="icon">\u{1F4F8}</span> <strong>Ogni esercizio = deliverable</strong> — screenshot del workflow</li>
    <li><span class="icon">\u{1F4A1}</span> <strong>Se ti blocchi:</strong> compagno → tutor → mai fermo</li>
    <li><span class="icon">\u{1F916}</span> <strong>AI step obbligatorio</strong> — almeno uno step AI per workflow</li>
  </ul>
</div>`,
  },

  // 4. MEME
  {
    type: 'meme',
    image: { src: 'https://devhumor.com/content/uploads/images/April2025/refactoring_big_plans.jpeg', alt: 'Automation plans' },
    caption: '"I miei piani di automazione vs la realtà del primo workflow"',
  },

  // 5. Quick overview: i 3 tool
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'I 3 Tool di Oggi — Quick Overview',
    columns: ['', 'Zapier', 'Make.com', 'n8n'],
    rows: [
      ['Difficoltà', '\u2B50 Facile', '\u2B50\u2B50 Media', '\u2B50\u2B50\u2B50 Avanzato'],
      ['Free tier', '100 task/mese, 5 Zap', '1000 ops/mese', 'Cloud trial / self-host gratis'],
      ['AI integrata', 'ChatGPT nativo', 'Modulo OpenAI/HTTP', 'Nodo AI Agent + qualsiasi LLM'],
      ['Punto forte', 'Semplicità assoluta', 'Workflow visuale potente', 'Open source, massimo controllo'],
      ['Registrazione', 'zapier.com', 'make.com', 'n8n.cloud'],
    ],
    footer: '<strong>Consiglio:</strong> registratevi su tutti e 3 ADESSO (5 min) — account pronti per gli esercizi.',
  },

  // ─── ESERCIZIO 1: Zapier ──────────────────────────────────────────────

  // 6. Esercizio 1: Zapier free
  {
    type: 'hands-on',
    heading: 'Esercizio 1: Zapier Free — Crea un Zap con AI',
    timer: '60 minuti',
    level: 'base',
    tools: ['Zapier (zapier.com — free tier)', 'Gmail (free)'],
    deliverable: 'Screenshot dello Zap funzionante + risultato nel Google Sheet',
    instructions: [
      '<strong>Obiettivo:</strong> creare un Zap che classifica email con AI',
      '<strong>Step 1 — Registrazione:</strong> zapier.com → "Sign up free" con Google (100 task/mese, 5 Zap)',
      '<strong>Step 2 — Nuovo Zap:</strong> "Create" → "Zaps" → "Create a new Zap"',
      '<strong>Step 3 — Trigger:</strong> Cerca "Gmail" → "New Email" → connetti Gmail → label "INBOX"',
      '<strong>Step 4 — AI Step:</strong> "+" → cerca "ChatGPT" → "Conversation". Prompt: "Classifica email in URGENTE/NORMALE/SPAM. Rispondi con categoria + motivazione 1 riga. Da: {{from}}, Oggetto: {{subject}}, Testo: {{body_plain}}"',
      '<strong>Step 5 — Sheets:</strong> "+" → "Google Sheets" → "Create Row". Crea sheet "Email Triage AI" con colonne: Data, Mittente, Oggetto, Categoria, Motivazione',
      '<strong>Step 6 — Test:</strong> "Test" su ogni step, inviati un\'email di prova',
      '<strong>Step 7 — Attiva:</strong> "Publish" per attivare lo Zap',
      '<strong>Step 8 — Verifica:</strong> Invia 3 email diverse (urgente, normale, spam) e controlla il Sheet',
      '<strong>Bonus:</strong> se categoria = URGENTE → azione Gmail di notifica',
      '<strong>Screenshot:</strong> cattura Zap completo + Sheet con almeno 3 righe',
    ],
  },

  // ─── ESERCIZIO 2: Make.com ──────────────────────────────────────────────

  // 7. Esercizio 2: Make.com free
  {
    type: 'hands-on',
    heading: 'Esercizio 2: Make.com Free — Scenario con Modulo AI',
    timer: '60 minuti',
    level: 'intermedio',
    tools: ['Make.com (make.com — free tier)', 'Google Sheets (free)'],
    deliverable: 'Screenshot dello scenario Make funzionante + output visibile',
    instructions: [
      '<strong>Obiettivo:</strong> scenario Make.com che processa dati con AI e li salva',
      '<strong>Step 1 — Registrazione:</strong> make.com → "Get started free" (1000 ops/mese gratis)',
      '<strong>Step 2 — Nuovo Scenario:</strong> "Create a new scenario"',
      '<strong>Step 3 — Webhook:</strong> "+" → "Webhooks" → "Custom webhook" → "Add" → copia l\'URL',
      '<strong>Step 4 — Testa webhook:</strong> Invia JSON di test: {"nome":"Mario Rossi", "messaggio":"Info prodotto enterprise", "email":"mario@test.it"}',
      '<strong>Step 5 — Modulo AI:</strong> "+" → "OpenAI" → "Create a Completion". Prompt: "Analizza messaggio cliente: 1) Score interesse 1-10, 2) Categoria lead caldo/tiepido/freddo, 3) Bozza risposta. Messaggio: {{messaggio}} Da: {{nome}}"',
      '<strong>Step 6 — Senza API key OpenAI?</strong> Usa modulo "HTTP" per API Gemini gratis, oppure "Google Gemini"',
      '<strong>Step 7 — Sheets:</strong> "+" → "Google Sheets" → "Add a Row". Colonne: Nome, Email, Messaggio, Score, Categoria, Risposta',
      '<strong>Step 8 — Test:</strong> "Run once" → invia JSON al webhook → verifica Sheet',
      '<strong>Step 9 — Screenshot:</strong> cattura scenario Make + Sheet con risultati',
    ],
  },

  // ─── ESERCIZIO 3: n8n ──────────────────────────────────────────────

  // 8. Esercizio 3: n8n — Workflow Email Triage
  {
    type: 'hands-on',
    heading: 'Esercizio 3: n8n Community — Email Triage con AI',
    timer: '60 minuti',
    level: 'avanzato',
    tools: ['n8n (n8n.cloud — trial gratuito)', 'Gmail (free)'],
    deliverable: 'Workflow n8n esportato (JSON) + screenshot del risultato',
    instructions: [
      '<strong>Obiettivo:</strong> workflow n8n di email triage con AI e smistamento automatico',
      '<strong>Step 1 — Registrazione:</strong> n8n.cloud → "Start free" (trial 2500 esecuzioni)',
      '<strong>Step 2 — Nuovo Workflow:</strong> "Add workflow" → nome "Email Triage AI"',
      '<strong>Step 3a — Trigger Gmail:</strong> Nodo "Gmail Trigger" → "Message Received" → connetti Gmail',
      '<strong>Step 3b — Alternativa:</strong> "Manual Trigger" + nodo "Set" con dati email finti',
      '<strong>Step 4 — Nodo AI:</strong> "OpenAI" (o "HTTP Request" per Gemini gratis). Prompt: "Classifica email in JSON: {categoria: URGENTE|NORMALE|SPAM, priorita: 1-5, riassunto, azione_suggerita}"',
      '<strong>Step 5 — Switch:</strong> Nodo "Switch" che smista per categoria: URGENTE / NORMALE / SPAM',
      '<strong>Step 6 — Azioni:</strong> URGENTE → Gmail alert | NORMALE → Sheets log | SPAM → ignora',
      '<strong>Step 7 — Test:</strong> "Execute Workflow" → verifica smistamento',
      '<strong>Step 8 — Esporta:</strong> Menu → "Download" per salvare JSON + screenshot',
    ],
    handsOnMaterial: {
      label: 'Email di test da usare durante l\'esercizio',
      testEmails: [
        {
          label: 'Email URGENTE',
          from: 'marco.bianchi@cliente-top.it',
          subject: 'URGENTE: Piattaforma down — impossibile processare ordini',
          body: 'Da questa mattina la piattaforma restituisce errore 503. Stiamo perdendo circa 15.000€/ora. Serve risoluzione IMMEDIATA.',
        },
        {
          label: 'Email NORMALE',
          from: 'laura.verdi@prospect.it',
          subject: 'Richiesta informazioni — piano Enterprise',
          body: 'Ho partecipato al vostro webinar e vorrei una call di 30 min per discutere il piano Enterprise. Mi interessano pricing, integrazione SAP, e tempistiche.',
        },
        {
          label: 'Email SPAM',
          from: 'deals@best-marketing-ever.xyz',
          subject: 'OFFERTA ESCLUSIVA: 10.000 follower Instagram GARANTITI!!!',
          body: 'Congratulazioni!!! 10.000 follower Instagram REALI per soli 29.99€!!! Clicca QUI per attivare subito >>> Offerta valida solo 24 ore!!!',
        },
      ],
    },
  },

  // ─── ESERCIZIO 4: Sfida Finale ──────────────────────────────────────────

  // 9. Esercizio 4: Sfida Finale
  {
    type: 'hands-on',
    heading: 'Esercizio 4: Sfida Finale — Stesso Problema, 3 Tool',
    timer: '45 minuti',
    level: 'intermedio',
    tools: ['Zapier (free)', 'Make.com (free)', 'n8n (free)'],
    deliverable: 'Tabella comparativa + presentazione di 2 minuti alla classe',
    instructions: [
      '<strong>Obiettivo:</strong> confronta i 3 tool sulla tua esperienza diretta',
      '<strong>Il Problema:</strong> "Feedback cliente → AI analizza sentiment, genera bozza risposta, salva in foglio di log"',
      '<strong>Step 1:</strong> Hai già costruito workflow simili — ora confronta l\'esperienza',
      '<strong>Step 2:</strong> Google Sheet con colonne: Criterio | Zapier | Make.com | n8n',
      '<strong>Step 3:</strong> Voti 1-5 per: Tempo setup, Facilità d\'uso, Flessibilità, Qualità risultato, Free tier, Documentazione',
      '<strong>Step 4:</strong> Aggiungi riga "Pro" e "Contro" per ogni tool — dalla TUA esperienza',
      '<strong>Step 5:</strong> Riga finale: "Per il MIO lavoro sceglierei [X] perché..." (3 motivazioni)',
      '<strong>Step 6:</strong> Mini-presentazione 2 min: tool scelto, perché, consiglio per chi inizia',
      '<strong>Ricorda:</strong> non esiste il tool perfetto — esiste quello giusto per TE',
    ],
  },

  // 10. MEME
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/IPbS5R4fSUl5S/giphy.gif', alt: 'Building automations at 3am' },
    caption: '"Quando il tuo primo workflow funziona al primo tentativo"',
  },

  // 11. RECAP
  {
    type: 'recap',
    heading: 'Recap — Lab 07',
    items: [
      'Zapier: il più semplice — perfetto per partire, AI integrata in 2 click, free tier limitato',
      'Make.com: il più visuale — workflow come diagrammi, free tier generoso (1000 ops/mese)',
      'n8n: il più potente — open source, self-hostabile, AI Agent nativo, curva più ripida',
      'Non esiste il tool perfetto — esiste quello giusto per il TUO livello e contesto',
      'Hai costruito 3+ workflow funzionanti con AI — sei pronto per automatizzare il tuo lavoro!',
    ],
  },

  // 12. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Zapier — zapier.com', url: 'https://zapier.com' },
      { label: 'Make.com — make.com', url: 'https://make.com' },
      { label: 'n8n — n8n.io (open source)', url: 'https://n8n.io' },
      { label: 'n8n AI Agent Tutorial 2026', url: 'https://www.youtube.com/watch?v=PfdnYe2690E' },
      { label: 'Free n8n AI Course — 8 lezioni + certificato', url: 'https://findskill.ai/courses/n8n-ai-automation-workflows/' },
      { label: 'Build Your First AI Automation — Sabrina Ramonov', url: 'https://www.sabrina.dev/p/build-your-first-ai-automation' },
    ],
  },

  // 13. Prossima lezione
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: '08 · Lab: AI per il\nTuo Lavoro',
    subtitle: 'Email, documenti, meeting — costruisci il tuo stack AI personale',
    style: { color: 'var(--secondary)' },
  },
]
