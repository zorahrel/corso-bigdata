export const meta = {
  lessonNumber: '07',
  title: 'Agenti AI + Zapier + n8n',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '07',
    title: 'Agenti AI +\nZapier + n8n',
    subtitle: 'Lunedi 13/04/2026 · 6h in presenza · Blocco AUTOMAZIONE',
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '\u{1F916}', text: "Cos'e un agente AI e come funziona" },
      { emoji: '\u26A1', text: 'Zapier AI Actions' },
      { emoji: '\u{1F527}', text: 'n8n: workflow avanzati open source' },
      { emoji: '\u{1F534}', text: 'BUILD LIVE: email triage automatico' },
      { emoji: '\u{1F6E0}\uFE0F', text: 'Workshop: costruisci il tuo workflow' },
    ],
  },

  // 3. MEME
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif', alt: 'AI agent does something unexpected' },
    caption: '"Quando il tuo agente AI fa qualcosa di inaspettato"',
  },

  // 4. Da AI passivo ad AI attivo
  {
    type: 'concept',
    centered: true,
    heading: 'Da AI passivo ad AI attivo',
    content: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:32px; max-width:800px; margin:0 auto;">
  <div style="background:var(--surface); border-radius:var(--radius); padding:28px; text-align:center;">
    <h3 style="color:var(--muted); font-size:0.7em; margin-bottom:12px;">\u{1F5E3}\uFE0F LLM classico</h3>
    <p style="font-size:0.6em; color:var(--muted); line-height:1.7;">
      Tu chiedi \u2192 AI risponde<br>
      Nessuna azione<br>
      Nessuna memoria<br>
      Un turno alla volta
    </p>
  </div>
  <div style="background:rgba(108,99,255,0.1); border:1px solid rgba(108,99,255,0.3); border-radius:var(--radius); padding:28px; text-align:center;">
    <h3 style="color:var(--accent); font-size:0.7em; margin-bottom:12px;">\u{1F916} Agente AI</h3>
    <p style="font-size:0.6em; color:var(--text); line-height:1.7;">
      Tu dai un obiettivo \u2192 AI <strong>AGISCE</strong><br>
      Chiama API e tool<br>
      Ha memoria persistente<br>
      Loop autonomo fino al risultato
    </p>
  </div>
</div>
<p style="text-align:center; font-size:0.55em; color:var(--muted); margin-top:24px;">2024: anno degli LLM \u00B7 2025: anno degli agenti \u00B7 2026: agenti in produzione</p>
<div style="text-align:center; margin-top:24px;">
  <img src="assets/diagrams/agent-loop.svg" style="max-width:400px;border-radius:8px;" alt="Agent Loop: Percezione \u2192 Ragionamento \u2192 Pianificazione \u2192 Azione \u2192 Feedback">
</div>`,
  },

  // 5. Anatomia di un agente AI
  {
    type: 'custom',
    layout: 'workflow-diagram',
    heading: 'Anatomia di un agente AI',
    steps: [
      { emoji: '\u{1F441}\uFE0F', label: 'Percezione' },
      { emoji: '\u{1F9E0}', label: 'Ragionamento' },
      { emoji: '\u26A1', label: 'Azione' },
      { emoji: '\u{1F504}', label: 'Feedback' },
    ],
    footer: 'Questo ciclo si ripete fino al raggiungimento dell\'obiettivo',
  },

  // 6. Tool use: l'agente chiama API
  {
    type: 'custom',
    layout: 'workflow-diagram',
    heading: "Tool use: l'agente chiama API",
    steps: [
      { emoji: '\u{1F4CB}', label: 'Task', type: 'trigger' },
      { emoji: '\u{1F9E0}', label: 'Ragionamento', type: 'ai' },
      { emoji: '\u{1F527}', label: 'API Call', type: 'action' },
      { emoji: '\u{1F4CA}', label: 'Risultato' },
      { emoji: '\u{1F9E0}', label: 'Continua', type: 'ai' },
    ],
    footer: "L'agente <strong>sceglie autonomamente</strong> quale tool usare e quando — il programmatore definisce solo i tool disponibili",
  },

  // 7. Memory negli agenti
  {
    type: 'concept',
    centered: true,
    heading: 'Memory negli agenti',
    content: `<div class="memory-types">
  <div class="mem-card">
    <h4>\u{1F4AC} Short-term</h4>
    <p>Il contesto della conversazione corrente. Si resetta ad ogni sessione. Limitata dalla finestra di contesto.</p>
  </div>
  <div class="mem-card">
    <h4>\u{1F4BE} Long-term</h4>
    <p>Database persistente. Preferenze utente, knowledge base. Sopravvive tra sessioni.</p>
  </div>
  <div class="mem-card">
    <h4>\u{1F4D6} Episodic</h4>
    <p>Storico delle azioni passate. "L'ultima volta che ho fatto X, il risultato e stato Y."</p>
  </div>
</div>
<p style="text-align:center; font-size:0.55em; color:var(--muted);">Senza memoria, un agente riparte da zero ogni volta — con memoria, impara e migliora</p>`,
  },

  // 8. Multi-agent: agenti che collaborano
  {
    type: 'custom',
    layout: 'workflow-diagram',
    heading: 'Multi-agent: agenti che collaborano',
    steps: [
      { emoji: '\u{1F464}', label: 'Orchestratore', type: 'trigger' },
      { emoji: '\u{1F50D}', label: 'Agente Ricerca', type: 'ai' },
      { emoji: '\u270D\uFE0F', label: 'Agente Scrittura', type: 'action' },
      { emoji: '\u2705', label: 'Agente Review', type: 'output' },
    ],
    footer: `<strong>Protocolli 2026:</strong> MCP — Model Context Protocol | ACP — Agent Communication Protocol | A2A — Agent-to-Agent (Google)`,
  },

  // 9. STATS — AI Agent Market
  {
    type: 'stats',
    heading: 'AI Agent Market',
    stats: [
      { value: 7, suffix: '', label: 'Miliardi $ (2025)' },
      { value: 93, suffix: '', label: 'Miliardi $ (2032)' },
      { value: 44, suffix: '', label: '% CAGR crescita annua' },
      { value: 82, suffix: '', label: '% aziende Fortune 500 che esplorano agenti' },
    ],
  },

  // 10. Rischi degli agenti
  {
    type: 'custom',
    layout: 'risk-grid',
    heading: 'Rischi degli agenti: cosa puo andare storto',
    risks: [
      { emoji: '\u{1F489}', title: 'Prompt Injection', description: "Input malevoli che dirottano il comportamento dell'agente", mitigation: 'Validazione input, sandbox, permessi granulari' },
      { emoji: '\u{1F4A5}', title: 'Azioni irreversibili', description: "L'agente cancella dati, invia email sbagliate, modifica produzione", mitigation: 'Human-in-the-loop, conferma per azioni critiche' },
      { emoji: '\u{1F504}', title: 'Loop infiniti', description: "L'agente ripete la stessa azione senza convergere", mitigation: 'Timeout, limiti di iterazione, circuit breaker' },
      { emoji: '\u{1F4B8}', title: 'Costi API', description: 'Agenti autonomi possono generare migliaia di chiamate API', mitigation: 'Budget limits, rate limiting, monitoring' },
    ],
    footer: 'Ogni rischio ha una contromisura. La regola d\'oro: mai dare a un agente piu permessi di quelli strettamente necessari, e prevedere sempre un human-in-the-loop per le azioni critiche.',
  },

  // 11. QUOTE
  {
    type: 'quote',
    text: '2026 will be the year agentic AI moves from experimentation to enterprise production — the shift from AI as a tool to AI as a teammate.',
    source: 'IBM Technology Trends & Predictions 2026',
  },

  // 12. Zapier nel 2026
  {
    type: 'concept',
    heading: 'Zapier nel 2026',
    content: `<p class="concept-text">
  <strong>Da automazione semplice a piattaforma agentica.</strong> Non piu solo "quando X, fai Y".
  <br><br>
  \u{1F916} <strong>AI Actions:</strong> inserisci intelligenza nei workflow
  <br><br>
  \u{1F4CA} <strong>Tables:</strong> database integrato nei tuoi Zap
  <br><br>
  \u{1F5A5}\uFE0F <strong>Interfaces:</strong> crea mini-app senza codice
  <br><br>
  7000+ app connesse, 30M+ utenti
</p>`,
    image: { src: 'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif', alt: 'Automation' },
  },

  // 13. Zaps: il blocco base
  {
    type: 'concept',
    centered: true,
    heading: 'Zaps: il blocco base',
    content: `<div class="workflow-diagram" style="margin-bottom:28px;">
  <div class="wf-step wf-trigger">\u{1F4E7} Trigger<br><small>Nuova email</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-action">\u{1F4CB} Action<br><small>Crea task in Notion</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-output">\u{1F4AC} Action<br><small>Avvisa su Slack</small></div>
</div>
<div class="workflow-diagram">
  <div class="wf-step wf-trigger">\u{1F4DD} Trigger<br><small>Nuovo lead in form</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-action">\u{1F4CA} Action<br><small>Aggiungi a CRM</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-action">\u{1F4E7} Action<br><small>Email di benvenuto</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-output">\u{1F4C8} Action<br><small>Log in Google Sheets</small></div>
</div>
<p class="concept-text"><strong>In pratica:</strong> ogni Zap segue la stessa logica: un trigger scatena una catena di azioni. Partite da uno Zap semplice con 2-3 step e aggiungete complessita solo quando serve.</p>`,
  },

  // 14. AI Actions in Zapier
  {
    type: 'concept',
    centered: true,
    heading: 'AI Actions in Zapier',
    content: `<div class="workflow-diagram" style="margin-bottom:28px;">
  <div class="wf-step wf-trigger">\u{1F4E7} Email<br><small>Nuovo feedback cliente</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-ai">\u{1F916} AI Action<br><small>Analisi sentiment + classificazione</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-action">\u{1F500} Filter<br><small>Se negativo...</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-output">\u{1F6A8} Alert<br><small>Slack + ticket urgente</small></div>
</div>
<ul class="feature-list">
  <li><span class="icon">\u270D\uFE0F</span> <strong>Genera testo:</strong> risposte email, riassunti, traduzioni</li>
  <li><span class="icon">\u{1F3F7}\uFE0F</span> <strong>Classifica:</strong> categorizza ticket, lead, feedback</li>
  <li><span class="icon">\u{1F4CA}</span> <strong>Estrai dati:</strong> da email, PDF, form non strutturati</li>
</ul>
<p class="concept-text"><strong>Takeaway:</strong> le AI Actions trasformano Zapier da semplice automazione a workflow intelligente — l'AI analizza, classifica e decide dentro il flusso.</p>`,
  },

  // 15. Zapier Tables + Interfaces
  {
    type: 'concept',
    heading: 'Zapier Tables + Interfaces',
    content: `<p class="concept-text">
  <strong>Tables:</strong> un database integrato dentro Zapier. Niente Google Sheets, niente Airtable esterno.
  <br><br>
  <strong>Interfaces:</strong> crea form, dashboard, portali — mini-app senza scrivere codice.
  <br><br>
  <strong>Quando Zapier diventa un app builder:</strong> form raccolta dati \u2192 Zap AI processa \u2192 Table salva \u2192 Interface mostra risultati.
</p>`,
    image: { src: 'https://media.giphy.com/media/l0HlNQ03J5JxX2rGU/giphy.gif', alt: 'App builder' },
  },

  // 16. MEME Zapier
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif', alt: 'When your Zap finally works' },
    caption: '"Quando il tuo Zap funziona finalmente al primo tentativo"',
  },

  // 17. n8n: cos'e e perche e diverso
  {
    type: 'concept',
    heading: "n8n: cos'e e perche e diverso",
    content: `<p class="concept-text">
  <strong>Open source</strong> — codice sorgente pubblico, community attiva, 50K+ stars su GitHub.
  <br><br>
  <strong>Self-hostabile</strong> — i tuoi dati restano sui tuoi server. Compliance e privacy garantite.
  <br><br>
  <strong>Piu flessibile di Zapier</strong> — nodi custom, codice JavaScript inline, branching complesso.
  <br><br>
  <strong>Piu potente</strong> — sub-workflow, error handling avanzato, webhook bidirezionali.
</p>`,
    image: { src: 'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif', alt: 'n8n workflow' },
  },

  // 18. L'interfaccia n8n
  {
    type: 'concept',
    centered: true,
    heading: "L'interfaccia n8n",
    content: `<div style="max-width:800px; margin:0 auto;">
  <div class="workflow-diagram" style="background:var(--surface); border-radius:var(--radius); padding:32px; flex-direction:column; gap:20px;">
    <div style="display:flex; align-items:center; gap:0; justify-content:center;">
      <div class="wf-step wf-trigger" style="min-width:100px;">Trigger<br><small>Webhook / Cron / Event</small></div>
      <div class="wf-arrow">\u2192</div>
      <div class="wf-step" style="min-width:100px;">Nodo 1<br><small>HTTP Request</small></div>
      <div class="wf-arrow">\u2192</div>
      <div class="wf-step wf-ai" style="min-width:100px;">AI Node<br><small>OpenAI / Claude</small></div>
      <div class="wf-arrow">\u2192</div>
      <div class="wf-step wf-action" style="min-width:100px;">IF / Switch<br><small>Branching</small></div>
      <div class="wf-arrow">\u2192</div>
      <div class="wf-step wf-output" style="min-width:100px;">Output<br><small>Email / Slack / DB</small></div>
    </div>
    <p style="text-align:center; font-size:0.5em; color:var(--muted);">Ogni nodo riceve dati in input, li trasforma, e li passa al nodo successivo — drag & drop visuale</p>
  </div>
</div>`,
  },

  // 19. n8n + AI Agents
  {
    type: 'concept',
    centered: true,
    heading: 'n8n + AI Agents',
    content: `<div class="workflow-diagram" style="margin-bottom:20px;">
  <div class="wf-step wf-trigger">\u{1F4E5} Input<br><small>Richiesta utente</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-ai" style="border-width:2px; min-width:180px;">\u{1F916} AI Agent Node<br><small>Ragiona + sceglie tool</small></div>
  <div class="wf-arrow">\u2192</div>
  <div style="display:flex; flex-direction:column; gap:8px;">
    <div class="wf-step wf-action" style="min-width:130px;">\u{1F527} Tool 1<br><small>Cerca nel DB</small></div>
    <div class="wf-step wf-action" style="min-width:130px;">\u{1F527} Tool 2<br><small>Chiama API</small></div>
    <div class="wf-step wf-action" style="min-width:130px;">\u{1F527} Tool 3<br><small>Scrivi file</small></div>
  </div>
</div>
<ul class="feature-list">
  <li><span class="icon">\u{1F504}</span> <strong>Loop autonomo:</strong> l'agente decide quante iterazioni servono</li>
  <li><span class="icon">\u{1F4BE}</span> <strong>Memory:</strong> buffer, summary, vector store integrati</li>
  <li><span class="icon">\u{1F6E1}\uFE0F</span> <strong>Guardrails:</strong> limiti di iterazione, timeout, human approval</li>
</ul>`,
  },

  // 20. n8n come MCP Hub
  {
    type: 'concept',
    heading: 'n8n come MCP Hub',
    content: `<p class="concept-text">
  <strong>Novita 2026:</strong> n8n puo consumare MCP server esterni e esporre i propri workflow come MCP tools.
  <br><br>
  <strong>Cosa significa:</strong> qualsiasi agente AI (Claude, GPT, custom) puo usare i tuoi workflow n8n come strumenti.
  <br><br>
  <strong>Esempio:</strong> Claude Code chiama un tool "analizza_fattura" \u2192 n8n esegue OCR + classificazione + salva in DB.
  <br><br>
  <strong>Bidirezionale:</strong> n8n usa MCP server (GitHub, Slack, DB) e altri usano n8n come MCP server.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="display:flex; flex-direction:column; gap:12px; align-items:center;">
  <div style="background:var(--accent); color:#fff; padding:12px 24px; border-radius:var(--radius); font-size:0.6em; font-weight:600;">Claude / GPT / Agent</div>
  <div style="color:var(--muted); font-size:1.2em;">\u2195\uFE0F MCP</div>
  <div style="background:var(--secondary); color:#0f1117; padding:16px 32px; border-radius:var(--radius); font-size:0.7em; font-weight:700;">n8n Hub</div>
  <div style="display:flex; gap:12px;">
    <div style="background:var(--surface); padding:8px 14px; border-radius:8px; font-size:0.5em;">GitHub</div>
    <div style="background:var(--surface); padding:8px 14px; border-radius:8px; font-size:0.5em;">Slack</div>
    <div style="background:var(--surface); padding:8px 14px; border-radius:8px; font-size:0.5em;">Database</div>
  </div>
</div>`,
  },

  // 21. n8n vs Zapier vs Make
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'n8n vs Zapier vs Make',
    columns: ['', 'n8n', 'Zapier', 'Make'],
    rows: [
      ['Licenza', 'Open source / Fair code', 'Proprietario', 'Proprietario'],
      ['Self-host', '\u2705 Docker, K8s', '\u274C Solo cloud', '\u274C Solo cloud'],
      ['AI Agent', '\u2705 Nodo nativo + MCP', '\u2705 AI Actions', '\u26A0\uFE0F Limitato'],
      ['Codice custom', '\u2705 JS/Python inline', '\u26A0\uFE0F Limitato', '\u26A0\uFE0F Limitato'],
      ['Curva', 'Media-alta', 'Bassa', 'Media'],
      ['Best per', 'Team tech, privacy, potenza', 'PMI, non-tech, quick wins', 'Workflow visivi complessi'],
    ],
    footer: '<strong>Ricorda:</strong> n8n per team tecnici che vogliono controllo e self-hosting, Zapier per chi vuole partire subito senza codice, Make per workflow visivi a costo contenuto.',
  },

  // 22. 15 use case aziendali con n8n
  {
    type: 'custom',
    layout: 'usecase-grid',
    heading: '15 use case aziendali con n8n',
    usecases: [
      { emoji: '\u{1F4E7}', title: 'Email triage automatico' },
      { emoji: '\u{1F4CA}', title: 'Report settimanali AI' },
      { emoji: '\u{1F504}', title: 'CRM sync bidirezionale' },
      { emoji: '\u{1F4F1}', title: 'Social media posting' },
      { emoji: '\u{1F3F7}\uFE0F', title: 'Lead scoring con AI' },
      { emoji: '\u{1F9FE}', title: 'Invoice processing' },
      { emoji: '\u{1F4CB}', title: 'Onboarding automatico' },
      { emoji: '\u{1F514}', title: 'Alert monitoring' },
      { emoji: '\u{1F4DD}', title: 'Meeting notes \u2192 task' },
      { emoji: '\u{1F310}', title: 'Web scraping + analisi' },
      { emoji: '\u{1F4AC}', title: 'Chatbot multi-canale' },
      { emoji: '\u{1F4E6}', title: 'Inventory tracking' },
      { emoji: '\u{1F3AB}', title: 'Ticket routing AI' },
      { emoji: '\u{1F4C8}', title: 'Competitor monitoring' },
      { emoji: '\u{1F510}', title: 'Compliance check' },
    ],
    footer: 'Non cercate di automatizzare tutto insieme. Scegliete un solo use case ad alto impatto, fatelo funzionare, poi espandete.',
  },

  // 23. MEME
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/IPbS5R4fSUl5S/giphy.gif', alt: 'Building automations at 3am' },
    caption: '"Costruire automazioni alle 3 di notte perche \'ancora un nodo e ho finito\'"',
  },

  // 24. BUILD LIVE — Email triage
  {
    type: 'demo',
    heading: 'Email triage automatico',
    description: `Costruiamo insieme un workflow completo, passo dopo passo.
<div class="workflow-diagram">
  <div class="wf-step wf-trigger">\u{1F4E7} Trigger<br><small>Nuova email</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-ai">\u{1F916} AI Classifica<br><small>Urgente / Normale / Spam</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-action">\u{1F500} Switch<br><small>Smista per categoria</small></div>
  <div class="wf-arrow">\u2192</div>
  <div style="display:flex; flex-direction:column; gap:8px;">
    <div class="wf-step wf-output" style="font-size:0.5em;">\u{1F6A8} Urgente \u2192 Slack + Task</div>
    <div class="wf-step" style="font-size:0.5em;">\u{1F4C1} Normale \u2192 Categorizza</div>
    <div class="wf-step" style="font-size:0.5em; opacity:0.5;">\u{1F5D1}\uFE0F Spam \u2192 Archivia</div>
  </div>
</div>`,
    badgeText: 'BUILD LIVE',
    demoMaterial: {
      label: 'Email di test da usare durante la demo',
      setup: [
        'Creare account n8n cloud gratuito su n8n.cloud (o usare Zapier)',
        'Configurare un trigger email (Gmail o Outlook)',
        'Avere un canale Slack/Teams di test pronto',
        'Inviare le email qui sotto durante la demo per testare il workflow',
      ],
      aiPrompt: `Classifica la seguente email in una di queste categorie: URGENTE, NORMALE, SPAM.
Rispondi SOLO con un JSON: {"categoria": "...", "motivo": "...", "priorita": 1-5}

Email:
{{email_body}}`,
      testEmails: [
        {
          label: 'Email URGENTE',
          from: 'marco.bianchi@cliente-top.it',
          subject: 'URGENTE: Piattaforma down — impossibile processare ordini',
          body: `Buongiorno,

da questa mattina alle 7:30 la vostra piattaforma restituisce errore 503 su tutte le pagine. Non riusciamo a processare ordini e stiamo perdendo circa 15.000 euro/ora di fatturato.

Abbiamo gia provato a svuotare la cache e cambiare browser. Il problema persiste su tutti i dispositivi.

Abbiamo bisogno di una risoluzione IMMEDIATA. Se entro le 10:00 non abbiamo una risposta, saremo costretti a attivare il piano di contingenza con il fornitore alternativo.

Cordiali saluti,
Marco Bianchi
Direttore Operativo — ClienteTop S.p.A.
Tel: +39 02 1234567 (chiamatemi direttamente)`,
        },
        {
          label: 'Email NORMALE',
          from: 'laura.verdi@prospect.it',
          subject: 'Richiesta informazioni — piano Enterprise',
          body: `Buongiorno,

ho partecipato al vostro webinar di ieri e sono rimasta molto colpita dalla demo della funzionalita di analytics predittivo.

Lavoro in un'azienda manifatturiera con circa 300 dipendenti e stiamo valutando diverse soluzioni. Potremmo organizzare una call di 30 minuti la prossima settimana per discutere il piano Enterprise?

In particolare mi interessano:
- Pricing per 50+ utenti
- Possibilita di integrazione con SAP
- Tempistiche di implementazione

Grazie mille,
Laura Verdi
Responsabile IT — ProspectManufacturing S.r.l.`,
        },
        {
          label: 'Email SPAM',
          from: 'deals@best-marketing-ever.xyz',
          subject: 'OFFERTA ESCLUSIVA: 10.000 follower Instagram GARANTITI!!!',
          body: `Congratulazioni!!!

Sei stato selezionato per la nostra OFFERTA ESCLUSIVA del mese!

10.000 follower Instagram REALI per soli 29.99 euro!!!
50.000 visite al sito GARANTITE!!!
Primo posto su Google IN 24 ORE!!!

Clicca QUI per attivare subito >>> [link sospetto]

Offerta valida solo per le prossime 24 ore!!!
Non perdere questa INCREDIBILE opportunita!!!

Best Marketing Agency
Unsubscribe: [link]`,
        },
        {
          label: 'Email NORMALE (feedback)',
          from: 'giuseppe.rossi@cliente-storico.it',
          subject: 'Feedback sull\'ultimo aggiornamento',
          body: `Ciao,

volevo darvi un feedback sull'aggiornamento della piattaforma rilasciato lunedi.

Positivo:
- La nuova dashboard e molto piu intuitiva, complimenti
- Il caricamento delle pagine e notevolmente piu veloce
- La funzione di export in PDF funziona finalmente bene

Da migliorare:
- Il filtro per data a volte non salva la selezione
- Manca ancora la possibilita di esportare in formato Excel
- Il menu laterale si chiude da solo su tablet

Niente di urgente, ma sarebbe bello avere queste cose nelle prossime release.

Grazie per il lavoro!
Giuseppe Rossi`,
        },
      ],
    },
  },

  // 25. BUILD LIVE — AI Draft
  {
    type: 'demo',
    heading: 'Aggiungiamo AI: risposta in bozza',
    description: `L'AI legge l'email, capisce il contesto, e prepara una bozza di risposta.
<div class="workflow-diagram">
  <div class="wf-step wf-trigger">\u{1F4E7} Email<br><small>Classificata "Normale"</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-ai">\u{1F9E0} AI Context<br><small>Legge storico conversazione</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-ai">\u270D\uFE0F AI Draft<br><small>Genera bozza risposta</small></div>
  <div class="wf-arrow">\u2192</div>
  <div class="wf-step wf-output">\u{1F4E7} Bozza<br><small>Salvata in Drafts</small></div>
</div>
<p style="text-align:center; font-size:0.55em; color:var(--secondary); margin-top:20px;">Human-in-the-loop: l'AI prepara, tu approvi e invii</p>`,
    badgeText: 'BUILD LIVE',
    demoMaterial: {
      label: 'Prompt per generare la bozza di risposta',
      aiPrompt: `Sei un customer success manager professionale. Leggi l'email del cliente e genera una bozza di risposta.

Regole:
- Tono: professionale ma cordiale
- Ringrazia per il feedback o la segnalazione
- Rispondi punto per punto
- Se e un problema tecnico, rassicura e dai una timeline
- Se e una richiesta commerciale, proponi un meeting
- Firma come "Team Customer Success — TechCorp Italia"

Email del cliente:
{{email_body}}

Genera la bozza di risposta:`,
      note: 'Usare l\'email "NORMALE (feedback)" di Giuseppe Rossi dalla demo precedente come input di test. L\'AI dovrebbe generare una risposta che ringrazia per il feedback positivo e conferma la presa in carico dei 3 punti di miglioramento.',
    },
  },

  // 26. HANDS-ON
  {
    type: 'hands-on',
    heading: 'Costruisci il tuo workflow',
    timer: '90 minuti',
    instructions: [
      '<strong>Scegli</strong> un processo ripetitivo del tuo lavoro quotidiano',
      '<strong>Mappa</strong> il flusso: trigger \u2192 step intermedi \u2192 output desiderato',
      '<strong>Costruisci</strong> il workflow in n8n (cloud gratuito) o Zapier',
      '<strong>Aggiungi AI:</strong> almeno uno step con AI (classificazione, generazione testo, analisi)',
      '<strong>Testa</strong> con dati reali e fai troubleshooting',
      '<strong>Presenta:</strong> 2 minuti per mostrare il tuo workflow alla classe',
    ],
  },

  // 27. RECAP
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Gli agenti AI agiscono autonomamente: percezione \u2192 ragionamento \u2192 azione \u2192 feedback',
      'Zapier: automazione facile con AI Actions integrato',
      'n8n: open source, self-host, AI Agent nativo + MCP hub',
      'Il mercato agenti: $7B \u2192 $93B entro il 2032',
      'Rischi reali: prompt injection, azioni irreversibili, costi — servono guardrail',
      'Hai costruito il tuo primo workflow AI-powered',
    ],
  },

  // 28. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'n8n AI Agents Examples — blog.n8n.io', url: 'https://blog.n8n.io/ai-agents-examples/' },
      { label: 'n8n as Agentic MCP Hub — infralovers.com', url: 'https://infralovers.com/blog/2026-03-09-n8n-agentic-mcp-hub/' },
      { label: 'IBM AI Trends & Predictions 2026', url: 'https://ibm.com/think/news/ai-tech-trends-predictions-2026' },
      { label: 'AI Agent Statistics 2025-2032 — azumo.com', url: 'https://azumo.com/artificial-intelligence/ai-insights/ai-agent-statistics' },
    ],
  },
]
