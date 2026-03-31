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
    <li><span class="icon">\u{1F4B0}</span> <strong>SOLO free tier</strong> — Zapier (100 task/mese), Make (1000 ops/mese), n8n cloud (trial gratis)</li>
    <li><span class="icon">\u{1F6AB}</span> <strong>Zero teoria</strong> — oggi si costruisce, si testa, si rompe, si rifà</li>
    <li><span class="icon">\u{1F4F8}</span> <strong>Ogni esercizio = un deliverable</strong> — screenshot del workflow funzionante</li>
    <li><span class="icon">\u{1F4A1}</span> <strong>Se ti blocchi:</strong> chiedi al compagno → poi al tutor → mai restare fermo</li>
    <li><span class="icon">\u{1F916}</span> <strong>AI step obbligatorio</strong> — ogni workflow deve avere almeno uno step con AI</li>
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
    footer: '<strong>Consiglio:</strong> registratevi su tutti e 3 ADESSO (5 min) così avete gli account pronti per gli esercizi.',
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
      '<strong>Obiettivo:</strong> creare il tuo primo Zap che usa AI per classificare automaticamente le email',
      '<strong>Step 1 — Registrazione:</strong> Vai su zapier.com → "Sign up free" con Google. Il piano gratuito include 100 task/mese e 5 Zap attivi',
      '<strong>Step 2 — Nuovo Zap:</strong> Clicca "Create" → "Zaps" → "Create a new Zap"',
      '<strong>Step 3 — Trigger:</strong> Cerca "Gmail" → seleziona "New Email" → connetti il tuo account Gmail → scegli la label "INBOX"',
      '<strong>Step 4 — AI Step:</strong> Clicca "+" per aggiungere un\'azione → cerca "ChatGPT" → seleziona "Conversation". Nel campo "User Message" scrivi: "Classifica questa email in una di queste categorie: URGENTE, NORMALE, SPAM. Rispondi SOLO con la categoria e una motivazione di 1 riga. Email da: {{from}}. Oggetto: {{subject}}. Testo: {{body_plain}}"',
      '<strong>Step 5 — Log su Sheets:</strong> Clicca "+" → cerca "Google Sheets" → "Create Spreadsheet Row". Connetti Google, crea un nuovo Sheet chiamato "Email Triage AI". Colonne: Data, Mittente, Oggetto, Categoria AI, Motivazione',
      '<strong>Step 6 — Test:</strong> Clicca "Test" su ogni step per verificare che funzioni. Inviati un\'email di test dal tuo secondo account (o chiedi a un compagno)',
      '<strong>Step 7 — Attiva:</strong> Clicca "Publish" per attivare lo Zap',
      '<strong>Step 8 — Verifica:</strong> Invia 3 email diverse (una urgente, una normale, una spam) e controlla che il Google Sheet si popoli correttamente',
      '<strong>Bonus:</strong> aggiungi un filtro — se la categoria è "URGENTE", aggiungi un\'azione Gmail che ti manda una notifica con oggetto "⚠️ EMAIL URGENTE: {{subject}}"',
      '<strong>Screenshot finale:</strong> cattura lo Zap completo e il Google Sheet con almeno 3 righe classificate',
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
      '<strong>Obiettivo:</strong> creare uno scenario Make.com che processa dati con AI e li salva automaticamente',
      '<strong>Step 1 — Registrazione:</strong> Vai su make.com → "Get started free". Piano gratis: 1000 operazioni/mese — più generoso di Zapier!',
      '<strong>Step 2 — Nuovo Scenario:</strong> Clicca "Create a new scenario"',
      '<strong>Step 3 — Trigger Webhook:</strong> Clicca il "+" al centro → cerca "Webhooks" → "Custom webhook". Clicca "Add" → dai un nome → copia l\'URL del webhook. Questo URL è il "trigger" del tuo scenario',
      '<strong>Step 4 — Testa il webhook:</strong> Apri un\'altra tab e vai su webhook.site (o usa curl da terminale). Invia un JSON di test al tuo webhook: {"nome": "Mario Rossi", "messaggio": "Vorrei informazioni sul vostro prodotto enterprise", "email": "mario@test.it"}',
      '<strong>Step 5 — Modulo AI:</strong> Clicca "+" dopo il webhook → cerca "OpenAI" (o "HTTP" se preferisci chiamare API direttamente). Usa "Create a Completion". Prompt: "Analizza questo messaggio di un potenziale cliente e genera: 1) Un punteggio di interesse da 1 a 10, 2) La categoria (lead caldo / tiepido / freddo), 3) Una bozza di risposta in italiano. Messaggio: {{messaggio}} Da: {{nome}}"',
      '<strong>Step 6 — Se non hai API key OpenAI:</strong> alternativa gratuita! Usa il modulo "HTTP — Make a request" per chiamare l\'API gratuita di Gemini, oppure usa il modulo "Google Gemini" se disponibile',
      '<strong>Step 7 — Salva su Google Sheets:</strong> Clicca "+" → "Google Sheets" → "Add a Row". Configura: Nome, Email, Messaggio, Score AI, Categoria, Bozza Risposta',
      '<strong>Step 8 — Test completo:</strong> Clicca "Run once" → invia un nuovo JSON al webhook → verifica che il Google Sheet si popoli con la classificazione AI',
      '<strong>Step 9 — Screenshot:</strong> cattura lo scenario Make completo (sarà un bel diagramma visuale!) e il Google Sheet con i risultati',
      '<strong>Nota Make vs Zapier:</strong> Make mostra il flusso come un diagramma visuale — molto più intuitivo per workflow complessi. Il free tier è 10x più generoso di Zapier.',
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
      '<strong>Obiettivo:</strong> costruire un workflow di email triage completo su n8n, con classificazione AI e smistamento automatico',
      '<strong>Step 1 — Registrazione:</strong> Vai su n8n.cloud → "Start free". Il trial gratuito include 2500 esecuzioni — più che sufficienti per il lab',
      '<strong>Step 2 — Nuovo Workflow:</strong> Clicca "Add workflow" → dai il nome "Email Triage AI"',
      '<strong>Step 3 — Trigger (opzione A):</strong> Aggiungi nodo "Gmail Trigger" → "Message Received" → connetti il tuo Gmail. Ogni nuova email farà partire il workflow',
      '<strong>Step 3 — Trigger (opzione B):</strong> Se non vuoi connettere Gmail, usa "Manual Trigger" + un nodo "Set" con dati email finti per testare',
      '<strong>Step 4 — Nodo AI:</strong> Aggiungi un nodo "OpenAI" (o "HTTP Request" per chiamare Gemini gratis). Prompt: "Classifica questa email. Rispondi SOLO in JSON: {\\\"categoria\\\": \\\"URGENTE|NORMALE|SPAM\\\", \\\"priorita\\\": 1-5, \\\"riassunto\\\": \\\"...\\\", \\\"azione_suggerita\\\": \\\"...\\\"}. Email da: {{$json.from}}. Oggetto: {{$json.subject}}. Testo: {{$json.text}}"',
      '<strong>Step 5 — Switch/IF:</strong> Aggiungi un nodo "Switch" che smista in base alla categoria: ramo URGENTE, ramo NORMALE, ramo SPAM',
      '<strong>Step 6 — Azioni per ramo:</strong> Ramo URGENTE → nodo "Gmail — Send Email" che ti manda un alert. Ramo NORMALE → nodo "Google Sheets — Append Row" per logging. Ramo SPAM → nodo "No Operation" (ignora)',
      '<strong>Step 7 — Test:</strong> Clicca "Execute Workflow" (con trigger manuale) o inviati un\'email (con Gmail trigger). Verifica che lo smistamento funzioni correttamente',
      '<strong>Step 8 — Esporta:</strong> Menu → "Download" per salvare il workflow come JSON. Fai screenshot del workflow visuale completo',
      '<strong>Differenza vs Zapier/Make:</strong> n8n ti dà il controllo totale — puoi scrivere codice JavaScript inline, fare branching complesso, e soprattutto è open source. Se vuoi, puoi installarlo sul tuo server (Docker) e i dati restano tuoi.',
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
      '<strong>Obiettivo:</strong> hai usato 3 tool di automazione — ora confrontali sulla tua pelle',
      '<strong>Il Problema:</strong> "Quando ricevo un feedback da un cliente (via form/email/webhook), l\'AI deve: 1) Analizzare il sentiment (positivo/negativo/neutro), 2) Generare una bozza di risposta, 3) Salvare tutto in un foglio di log"',
      '<strong>Step 1:</strong> Hai già costruito versioni simili di questo workflow nei 3 esercizi precedenti. Ora confronta l\'esperienza',
      '<strong>Step 2:</strong> Crea un Google Sheet con le colonne: Criterio | Zapier | Make.com | n8n',
      '<strong>Step 3:</strong> Compila queste righe con voti 1-5: Tempo di setup (quanto ci hai messo?), Facilità d\'uso (intuitivo?), Flessibilità (puoi personalizzare?), Qualità del risultato (funziona bene?), Free tier (generoso?), Documentazione/Help (trovi risposte?)',
      '<strong>Step 4:</strong> Aggiungi una riga "Pro" e una riga "Contro" per ciascun tool — basati sulla TUA esperienza, non su quello che hai letto online',
      '<strong>Step 5:</strong> Riga finale: "Per il MIO lavoro sceglierei [X] perché..." — almeno 3 motivazioni concrete',
      '<strong>Step 6:</strong> Prepara una mini-presentazione di 2 minuti: 1) Quale tool hai scelto, 2) Perché, 3) Un consiglio per chi inizia da zero',
      '<strong>Ricorda:</strong> la risposta "giusta" dipende da TE — il tuo livello tecnico, il tuo budget, il tuo team. Non esiste il tool perfetto!',
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
