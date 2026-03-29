export const meta = {
  lessonNumber: '08',
  title: "AI per la produttivita ed ecosistema",
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '08',
    title: 'AI per la Produttività',
    subtitle: 'Mercoledi 15/04/2026 · 6h in presenza · Blocco PRODUTTIVITA',
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '🧰', text: 'Stack AI personale: costruire il tuo sistema' },
      { emoji: '📧', text: 'AI nel quotidiano: email, riunioni, ricerca' },
      { emoji: '📊', text: "Metriche e ROI dell'AI in azienda" },
      { emoji: '🛠️', text: 'Workshop: mappa il tuo stack AI ideale' },
    ],
  },

  // 3. Meme
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif', alt: 'Personal AI stack meme' },
    caption: '"Io dopo aver costruito il mio stack AI personale"',
  },

  // 4. Cos'è uno Stack AI Personale
  {
    type: 'concept',
    heading: "Cos'è uno Stack AI Personale",
    content: `La combinazione di tool AI che usi <strong>ogni giorno</strong>,
integrati tra loro per creare un sistema coerente.
<br><br>
Non si tratta di usare un singolo tool, ma di costruire
un <strong>ecosistema</strong> che amplifica le tue capacità.`,
    image: { src: 'https://i.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif', alt: 'Connected tools' },
  },

  // 5. AI Fatigue
  {
    type: 'concept',
    heading: 'Il Problema: AI Fatigue',
    content: `Troppi tool, troppi abbonamenti, <strong>nessuna integrazione</strong>.
<br><br>
La chiave: costruire un sistema <strong>coerente</strong>,
non collezionare tool. Meno è meglio, se ben collegati.
<br><br>
Regola d'oro: ogni tool deve <strong>risparmiare più tempo</strong>
di quanto ne richieda per essere usato.`,
    image: { src: 'https://i.giphy.com/media/l0IylOPCNkiqOgMyA/giphy.gif', alt: 'Too many tools' },
  },

  // 6. 5 Archetipi di Stack
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: '5 Archetipi di Stack AI',
    features: [
      { icon: '👔', title: 'Manager', description: 'Calendar AI, Meeting notes, Email triage, Dashboard' },
      { icon: '💻', title: 'Sviluppatore', description: 'Copilot, Claude Code, Cursor, CI/CD AI' },
      { icon: '📣', title: 'Marketer', description: 'Copy AI, Midjourney, Analytics AI, Social scheduler' },
      { icon: '🎯', title: 'Consulente', description: 'Research AI, Slide builder, CRM AI, Proposal gen' },
      { icon: '🚀', title: 'Imprenditore', description: 'Tutto-in-uno, Automation, Agents, No-code AI' },
    ],
  },

  // 7. AI nel Workflow Email
  {
    type: 'concept',
    heading: 'AI nel Workflow Email',
    content: `<strong>Triage automatico:</strong> categorizzazione, prioritizzazione, flag urgenti.
<br><br>
<strong>Draft automatici:</strong> risposte suggerite basate sul contesto e tono.
<br><br>
<strong>Follow-up:</strong> reminder intelligenti per email senza risposta.
<br><br>
Tool: <strong>Gmail AI</strong>, <strong>Superhuman</strong>, <strong>Copilot per Outlook</strong>`,
    image: { src: 'https://i.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif', alt: 'Email workflow' },
  },

  // 8. AI per Riunioni
  {
    type: 'concept',
    heading: 'AI per Riunioni e Meeting',
    content: `<strong>Trascrizione automatica:</strong> Otter.ai, Fireflies, Google Meet AI
<br><br>
<strong>Riassunti intelligenti:</strong> punti chiave, decisioni prese, azioni da fare.
<br><br>
<strong>Integrazione calendario:</strong> prep automatica pre-meeting con contesto dei partecipanti.`,
    image: { src: 'https://i.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif', alt: 'Meeting AI' },
  },

  // 9. AI per la Ricerca
  {
    type: 'concept',
    heading: 'AI per la Ricerca',
    content: `<strong>Perplexity:</strong> ricerca con fonti citate, ideale per fact-checking rapido.
<br><br>
<strong>NotebookLM:</strong> carica documenti e interrogali. Perfetto per analisi profonda.
<br><br>
<strong>ChatGPT / Claude con web:</strong> ricerca conversazionale, buona per esplorare temi ampi.
<br><br>
<em>Quando usare quale?</em> Fact → Perplexity. Documenti → NotebookLM. Esplorazione → ChatGPT/Claude.`,
    image: { src: 'https://i.giphy.com/media/3o6Zt11R527fgtrIJO/giphy.gif', alt: 'Research AI' },
  },

  // 10. AI per la Produzione di Contenuti
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'AI per la Produzione di Contenuti',
    features: [
      { icon: '✍️', title: 'Testo', description: 'Claude, GPT-4, Gemini — Copy, articoli, report' },
      { icon: '🎨', title: 'Immagini', description: 'Midjourney, DALL-E, Flux — Design, mockup, social' },
      { icon: '🎬', title: 'Video', description: 'Runway, Sora, Kling — Clip, demo, ads' },
      { icon: '🎙️', title: 'Audio', description: 'ElevenLabs, NotebookLM — Voice, podcast, TTS' },
    ],
  },

  // 11. Stats: ROI Produttività
  {
    type: 'stats',
    heading: "ROI dell'AI sulla Produttività",
    stats: [
      { value: 37, suffix: '%', label: 'Aumento produttività media (McKinsey 2025)' },
      { value: 72, suffix: '%', label: 'Knowledge worker che usano AI almeno 1x/settimana' },
      { value: 4, suffix: 'h', label: 'Ore risparmiate a settimana per dipendente (Gartner)' },
    ],
  },

  // 12. Email: da 2h a 30 min
  {
    type: 'concept',
    heading: 'Email: da 2h/giorno a 30 min',
    content: `<strong>Step 1:</strong> Triage automatico — AI categorizza in: urgente, azione, FYI, spam.
<br><br>
<strong>Step 2:</strong> Draft — per ogni email "azione", AI prepara una bozza di risposta.
<br><br>
<strong>Step 3:</strong> Review — tu leggi solo i draft, modifichi e invii. 30 sec/email invece di 3 min.
<br><br>
<strong>Step 4:</strong> Follow-up — AI traccia le email senza risposta e ti ricorda dopo 48h.`,
    image: { src: 'https://i.giphy.com/media/o0vwzuFwCGAFO/giphy.gif', alt: 'Email speed' },
  },

  // 13. Documenti e Report
  {
    type: 'concept',
    heading: 'Documenti e Report: AI come Co-Autore',
    content: `<strong>Struttura:</strong> dai all'AI il brief, lei propone l'outline.
<br><br>
<strong>Prima bozza:</strong> AI scrive, tu dirigi. Sezione per sezione, con il tuo input.
<br><br>
<strong>Revisione:</strong> AI come editor — controlla coerenza, tono, errori.
<br><br>
Il segreto: <strong>iterare</strong>, non accettare la prima versione.`,
    image: { src: 'https://i.giphy.com/media/XIqCQx02E1U9W/giphy.gif', alt: 'Writing together' },
  },

  // 14. RAG su Knowledge Base
  {
    type: 'concept',
    heading: 'Ricerca Aziendale: RAG su Knowledge Base',
    content: `<strong>RAG</strong> = Retrieval-Augmented Generation. L'AI cerca nei tuoi documenti e risponde con contesto.
<br><br>
Invece di cercare in 50 cartelle, <strong>chiedi</strong>: "Qual era la policy sui rimborsi aggiornata a marzo?"
<br><br>
Tool: <strong>Notion AI</strong>, <strong>Confluence AI</strong>, soluzioni custom con embeddings.`,
    image: { src: 'https://i.giphy.com/media/xT9C25UNTwfZuk85WP/giphy.gif', alt: 'Knowledge base search' },
  },

  // 15. Decisioni Data-Driven
  {
    type: 'concept',
    heading: 'Decisioni Data-Driven: AI Analizza per Te',
    content: `<strong>Excel/Sheets + AI:</strong> "Qual è il trend delle vendite Q1?" — risposta con grafico.
<br><br>
<strong>Tableau / Power BI + AI:</strong> query in linguaggio naturale sulle dashboard.
<br><br>
<strong>Il salto:</strong> da "fammi un report" a "dimmi cosa devo sapere".`,
    image: { src: 'https://i.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif', alt: 'Data analysis' },
  },

  // 16. Meme: Inbox
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', alt: 'AI handling inbox' },
    caption: '"Il mio assistente AI che gestisce la mia inbox"',
  },

  // 17. Limiti AI per produttività
  {
    type: 'concept',
    heading: "Quando l'AI Rallenta Invece di Accelerare",
    content: `<strong>Over-reliance:</strong> fidarsi troppo dell'output senza verificare. L'AI sbaglia con sicurezza.
<br><br>
<strong>Output check time:</strong> il tempo per verificare supera il tempo risparmiato.
<br><br>
<strong>Setup cost:</strong> configurare, promptare, integrare. Se il task è raro, fallo a mano.
<br><br>
<strong>Regola:</strong> se passi più tempo a parlare con l'AI che a fare il task, fermati.`,
    image: { src: 'https://i.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif', alt: 'Slowdown' },
  },

  // 18. Come Misurare l'Impatto
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: "Come Misurare l'Impatto dell'AI",
    features: [
      { icon: '⏱️', title: 'Tempo risparmiato', description: 'Minuti per task prima vs dopo AI. Misura su 10+ task identici.' },
      { icon: '⭐', title: 'Qualità output', description: 'NPS interno, tasso di revisione, errori per documento.' },
      { icon: '📈', title: 'Volume gestito', description: 'Email/giorno, report/settimana, clienti/mese gestiti.' },
    ],
  },

  // 19. Stats: Il Paradosso del ROI
  {
    type: 'stats',
    heading: 'Il Paradosso del ROI',
    stats: [
      { value: 96, suffix: '%', label: 'Aziende che riportano guadagni operativi da AI' },
      { value: 95, suffix: '%', label: 'Aziende con ZERO impatto sul P&L (profitto/perdita)' },
    ],
    footer: "Il gap: efficienza locale senza trasformazione organizzativa. I task vanno più veloci, ma l'azienda non cambia.",
  },

  // 20. Perché l'AI Non Porta ROI
  {
    type: 'concept',
    heading: "Perché l'AI Non Porta ROI (Ancora)",
    content: `<strong>Friction organizzativa:</strong> i processi non cambiano, l'AI si sovrappone al vecchio modo.
<br><br>
<strong>KPI sbagliate:</strong> si misura l'adozione (% utenti) non l'impatto (tempo, qualità, revenue).
<br><br>
<strong>Change management mancato:</strong> si compra il tool, non si cambia la cultura.`,
    image: { src: 'https://i.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif', alt: 'ROI gap' },
  },

  // 21. Framework Business Case
  {
    type: 'custom',
    layout: 'flow-diagram',
    heading: 'Come Costruire un Caso Business per AI',
    steps: [
      { icon: '📏', label: '1. Baseline' },
      { icon: '🧪', label: '2. Pilota' },
      { icon: '📊', label: '3. Misura' },
      { icon: '🚀', label: '4. Scala' },
    ],
  },

  // 22. Quote
  {
    type: 'quote',
    text: "La produttività non è fare più cose. È fare le cose giuste, con meno sforzo.",
    source: 'Cal Newport, adattato all\'era AI',
  },

  // 23. Workshop
  {
    type: 'hands-on',
    heading: 'Mappa il Tuo Stack AI Ideale',
    timer: '⏱ 90 minuti',
    instructions: [
      '<strong>Canvas:</strong> lista i tuoi 10 task più ripetitivi (lavoro quotidiano)',
      '<strong>Audit:</strong> per ognuno — esiste un tool AI? Quale? Lo usi già?',
      '<strong>Design:</strong> costruisci il tuo stack ideale — max 5 tool, collegati tra loro',
      '<strong>Piano 30 giorni:</strong> settimana per settimana, cosa adotti e come',
      '<strong>Presentazione:</strong> 2 min per persona — il tuo stack + il primo quick win',
    ],
  },

  // 24. Recap
  {
    type: 'recap',
    heading: 'Recap — Lezione 08',
    items: [
      'Stack AI personale: sistema coerente > collezione di tool',
      'AI nel quotidiano: email, meeting, ricerca, contenuti',
      "Il paradosso del ROI: efficienza ≠ impatto su P&L",
      'Framework: baseline → pilota → misura → scala',
      'Il tuo stack AI ideale (dal workshop)',
    ],
  },

  // 25. Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Superhuman — Email AI', url: 'https://superhuman.com' },
      { label: 'Otter.ai — Trascrizione meeting', url: 'https://otter.ai' },
      { label: 'Perplexity — Ricerca AI con fonti', url: 'https://perplexity.ai' },
      { label: 'NotebookLM — Analisi documenti', url: 'https://notebooklm.google.com' },
      { label: 'ElevenLabs — Voce AI', url: 'https://elevenlabs.io' },
    ],
  },

  // 26. Anteprima Lezione 9
  {
    type: 'title',
    lessonNumber: 'Prossima settimana',
    title: '09 · AI e Azienda: Implementazione',
    subtitle: "Come introdurre l'AI in azienda: governance, change management, casi studio",
  },
]
