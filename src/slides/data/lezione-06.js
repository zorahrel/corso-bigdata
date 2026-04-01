export const meta = {
  lessonNumber: '06',
  title: 'Lab: Esplora le piattaforme',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '06',
    title: 'Lab: Esplora le\nPiattaforme AI',
    subtitle: 'Giovedì 09/04/2026 · 6h in presenza · Gestita da Tutor',
    style: { '--accent': '#0d9488' },
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda — Oggi solo pratica!',
    items: [
      { emoji: '\u{1F4AC}', text: 'Esercizio 1 — ChatGPT free: Canvas, istruzioni, memoria (45 min)' },
      { emoji: '\u{1F9E0}', text: 'Esercizio 2 — Claude free: Projects, Artifacts, crea un\'app (45 min)' },
      { emoji: '\u2728', text: 'Esercizio 3 — Gemini free: confronto sullo stesso task (45 min)' },
      { emoji: '\u{1F4D3}', text: 'Esercizio 4 — NotebookLM: documenti e podcast automatico (45 min)' },
      { emoji: '\u{1F4CA}', text: 'Esercizio 5 — Confronto finale: tabella comparativa (30 min)' },
    ],
  },

  // 3. REGOLE DEL LAB
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F6A8} Regole del Lab',
    content: `<div style="max-width:700px; margin:0 auto; text-align:left;">
  <ul class="feature-list">
    <li><span class="icon">\u{1F6AB}</span> <strong>ZERO teoria pesante</strong> — oggi si lavora, non si ascolta</li>
    <li><span class="icon">\u{1F4B0}</span> <strong>SOLO tool gratuiti</strong> — nessun account a pagamento richiesto</li>
    <li><span class="icon">\u{1F4F8}</span> <strong>Ogni esercizio ha un deliverable</strong> — screenshot o documento da consegnare</li>
    <li><span class="icon">\u{1F91D}</span> <strong>Aiutatevi tra di voi</strong> — il tutor facilita, voi sperimentate</li>
    <li><span class="icon">\u23F0</span> <strong>Timer attivo</strong> — rispettate i tempi per completare tutto</li>
  </ul>
</div>`,
  },

  // 4. MEME
  {
    type: 'meme',
    image: { src: 'https://devhumor.com/content/uploads/images/April2025/chat_bots.jpg', alt: 'Choosing the right AI tool' },
    caption: '"Scegliere il tool AI giusto nel 2026"',
  },

  // ─── ESERCIZIO 1: ChatGPT ──────────────────────────────────────────────

  // 5. Esercizio 1: ChatGPT free
  {
    type: 'hands-on',
    heading: 'Esercizio 1: ChatGPT Free — Canvas, Istruzioni, Memoria',
    timer: '45 minuti',
    level: 'base',
    tools: ['ChatGPT (chatgpt.com — account gratuito)'],
    deliverable: 'Screenshot di: Custom Instructions, Canvas modificato, Memoria attiva',
    instructions: [
      '<strong>Obiettivo:</strong> scoprire Custom Instructions, Canvas e Memory di ChatGPT free',
      '<strong>Step 1 — Account:</strong> Vai su chatgpt.com → accedi con Google (gratis, 2 min)',
      '<strong>Step 2 — Custom Instructions:</strong> Avatar → "Customize ChatGPT". Compila chi sei (ruolo, settore) e come vuoi le risposte ("italiano, tono professionale, con esempi")',
      '<strong>Step 3 — Testa:</strong> Nuova chat → "Dammi 3 consigli per migliorare la produttività". Nota come la risposta è calibrata su di te!',
      '<strong>Step 4 — Canvas:</strong> Chiedi: "Crea un\'analisi SWOT per il mio settore". Si apre un editor laterale: seleziona una sezione → "espandi" o "riscrivi in tono formale"',
      '<strong>Step 5 — Modifica in Canvas:</strong> Usa i controlli per suggerimenti AI, lunghezza, tono. Fai almeno 3 modifiche',
      '<strong>Step 6 — Memory:</strong> Scrivi: "Ricorda che preferisco bullet point". In una NUOVA chat verifica che ricordi. Controlla in Impostazioni → Memoria',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) Custom Instructions, 2) Canvas modificato, 3) Schermata Memoria',
    ],
  },

  // ─── ESERCIZIO 2: Claude ──────────────────────────────────────────────

  // 6. Esercizio 2: Claude free
  {
    type: 'hands-on',
    heading: 'Esercizio 2: Claude Free — Projects, Artifacts, Crea un\'App',
    timer: '45 minuti',
    level: 'intermedio',
    tools: ['Claude (claude.ai — account gratuito)'],
    deliverable: 'Screenshot del Project con documenti + app creata con Artifacts',
    instructions: [
      '<strong>Obiettivo:</strong> usare Projects (ora GRATIS!) per knowledge base + Artifacts per creare un\'app',
      '<strong>Step 1 — Account:</strong> Vai su claude.ai → accedi con Google (gratis)',
      '<strong>Step 2 — Crea un Project:</strong> Menu laterale → "Projects" → "Create Project". Nome: "Il mio assistente [settore]"',
      '<strong>Step 3 — Aggiungi Knowledge:</strong> "Add Content" → carica 2-3 documenti (PDF, policy, FAQ). Se non ne hai, usa quelli del tutor',
      '<strong>Step 4 — Testa il Project:</strong> Fai 3 domande sui documenti. Nota come Claude cita le fonti specifiche!',
      '<strong>Step 5 — Artifacts:</strong> Nuova chat → "Crea un calcolatore di ROI per adozione AI: input dipendenti, ore risparmiate, costo orario. Output: risparmio annuo, ROI%, payback. Con grafici"',
      '<strong>Step 6 — Itera:</strong> L\'Artifact appare come app funzionante. Prova: "Aggiungi grafico a barre", "Cambia colori", "Aggiungi campo costo licenza"',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) Project con documenti, 2) Risposta con citazioni, 3) App Artifact',
      '<strong>Wow:</strong> Projects + Artifacts gratis da marzo 2026 — prima costava $20/mese!',
    ],
  },

  // ─── ESERCIZIO 3: Gemini ──────────────────────────────────────────────

  // 7. Esercizio 3: Gemini free
  {
    type: 'hands-on',
    heading: 'Esercizio 3: Gemini Free — Confronto sullo Stesso Task',
    timer: '45 minuti',
    level: 'base',
    tools: ['Gemini (gemini.google.com — account Google gratuito)', 'ChatGPT (free)', 'Claude (free)'],
    deliverable: 'Google Doc con le 3 risposte affiancate e valutazione comparativa',
    instructions: [
      '<strong>Obiettivo:</strong> dare lo STESSO prompt a 3 AI e confrontare qualità, stile e completezza',
      '<strong>Step 1:</strong> Apri 3 tab: chatgpt.com, claude.ai, gemini.google.com',
      '<strong>Step 2 — Il prompt:</strong> Copia su tutte e 3: "Consulente aziendale: azienda manifatturiera IT, 200 dipendenti, 30M fatturato, budget 50K. Piano AI in 3 fasi con timeline, costi, KPI, rischi e mitigazioni"',
      '<strong>Step 3:</strong> Invia su tutte e 3 contemporaneamente, aspetta le risposte',
      '<strong>Step 4 — Valuta:</strong> Voto 1-5 per: Completezza, Praticità, Numeri concreti, Struttura, Tono professionale',
      '<strong>Step 5 — Esplora Gemini:</strong> Carica un\'immagine (grafico, documento) e chiedi di analizzarla. Gemini eccelle nel multimodale!',
      '<strong>Step 6 — Google Integration:</strong> Prova: "Crea una tabella comparativa in Google Sheets" — Gemini crea file Workspace',
      '<strong>Step 7 — Documento finale:</strong> Google Doc con risposte affiancate + tabella voti + "VINCITORE per questo task"',
      '<strong>Spoiler:</strong> non esiste un vincitore assoluto — dipende dal task!',
    ],
  },

  // ─── ESERCIZIO 4: NotebookLM ──────────────────────────────────────────

  // 8. Esercizio 4: NotebookLM
  {
    type: 'hands-on',
    heading: 'Esercizio 4: NotebookLM — Documenti e Podcast Automatico',
    timer: '45 minuti',
    level: 'base',
    tools: ['NotebookLM (notebooklm.google.com — gratuito con account Google)'],
    deliverable: 'Screenshot delle risposte con citazioni + link al podcast audio generato',
    instructions: [
      '<strong>Obiettivo:</strong> caricare documenti, fare domande con citazioni precise, generare un podcast audio',
      '<strong>Step 1:</strong> Vai su notebooklm.google.com → "New Notebook"',
      '<strong>Step 2 — Carica 3 fonti:</strong> PDF, articolo Wikipedia, link YouTube, o Google Doc. Se non hai materiale, usa i documenti del tutor',
      '<strong>Step 3 — Domande:</strong> Chiedi: "Quali sono i 3 trend principali?". Nota le citazioni [1], [2] che rimandano ai documenti!',
      '<strong>Step 4 — Incrocia le fonti:</strong> "Ci sono contraddizioni tra le mie fonti?" — NotebookLM confronta automaticamente',
      '<strong>Step 5 — Riassunto:</strong> "Genera un riassunto esecutivo in 200 parole con bullet point"',
      '<strong>Step 6 — Podcast:</strong> "Audio Overview" → "Generate". Podcast 10-15 min con 2 voci AI. Ascolta almeno 3 minuti!',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) Risposta con citazioni, 2) Player del podcast. Condividi il link',
      '<strong>Takeaway:</strong> GRATIS, zero allucinazioni, podcast per ripassare. Il tool piu sottovalutato del 2026.',
    ],
    handsOnMaterial: {
      label: 'Documenti di esempio da caricare (se non hai materiale tuo)',
      documents: [
        {
          filename: 'memo-strategia-digitale-2026.txt',
          content: `MEMO INTERNO — STRATEGIA DIGITALE 2026\nDa: Direzione Generale\nA: Tutti i responsabili di area\nData: 15 gennaio 2026\n\nCONTESTO\nL'azienda ha chiuso il 2025 con un fatturato di 45M euro (+8% vs 2024). La marginalità è rimasta stabile al 12%, ma i costi operativi sono cresciuti del 15%. È necessario un cambio di passo sulla digitalizzazione.\n\nOBIETTIVI 2026\n1. Ridurre i costi operativi del 10% tramite automazione\n2. Implementare almeno 3 progetti AI in produzione entro Q3\n3. Formare il 100% dei dipendenti sugli strumenti AI base\n4. Digitalizzare il processo ordini (oggi 60% cartaceo)\n\nBUDGET ALLOCATO\n- Formazione AI: 120.000 euro\n- Licenze tool AI: 85.000 euro\n- Consulenza esterna: 150.000 euro\n- Infrastruttura cloud: 200.000 euro\nTotale: 555.000 euro (1.2% del fatturato)`,
        },
        {
          filename: 'report-customer-satisfaction-2025.txt',
          content: `REPORT SODDISFAZIONE CLIENTI — ANNO 2025\nCampione: 2.400 clienti (su 8.500 attivi)\n\nNET PROMOTER SCORE (NPS)\n- NPS 2025: 42 (vs 38 nel 2024, +4 punti)\n- Benchmark settore: 35\n\nAREE DI MIGLIORAMENTO\n1. Tempi di risposta assistenza: 3.1/5 — tempo medio prima risposta: 14 ore (target: 4 ore)\n2. Facilità d'uso del portale online: 3.2/5 — il 45% preferisce ancora chiamare\n3. Proattività nella comunicazione: 3.0/5 — solo il 22% riceve notifiche di spedizione\n\nRACCOMANDAZIONI\n1. Implementare chatbot AI per ridurre tempi di prima risposta a <1 ora\n2. Rinnovare il portale clienti con focus mobile\n3. Attivare notifiche automatiche su stato ordine`,
        },
        {
          filename: 'analisi-competitor-q4-2025.txt',
          content: `ANALISI COMPETITIVA — Q4 2025\n\nMercato totale: ~500M euro. Nostra quota: 9% (stabile).\n\nCOMPETITOR A — "TechFlow Solutions" (quota 22%)\nPunti di forza: piattaforma cloud avanzata, forte R&D. Novità 2025: assistente AI integrato nel portale.\n\nCOMPETITOR B — "DataPrime" (quota 18%)\nPunti di forza: prezzo aggressivo, forte su e-commerce. Novità 2025: partnership con grande retailer.\n\nCOMPETITOR C — "InnovaGroup" (quota 15%)\nPunti di forza: innovazione rapida, team giovane. Novità 2025: round 20M, assunzione 50 persone, crescita +40% YoY.\n\nIMPLICAZIONI: TechFlow ha AI integrata — dobbiamo accelerare. Nessun competitor ha servizio clienti AI — opportunità.`,
        },
      ],
      testQuestions: [
        'Quali sono i principali problemi emersi dalla survey clienti?',
        'Quanto budget è stato allocato per la strategia digitale 2026?',
        'Chi è il nostro competitor più pericoloso e perché?',
        "Come potremmo usare l'AI per risolvere il problema dei tempi di risposta?",
        'Genera un podcast audio che riassuma i 3 documenti',
      ],
    },
  },

  // ─── ESERCIZIO 5: Confronto Finale ──────────────────────────────────────

  // 9. Esercizio 5: Confronto finale
  {
    type: 'hands-on',
    heading: 'Esercizio 5: Confronto Finale — Tabella Comparativa',
    timer: '30 minuti',
    level: 'base',
    tools: ['Google Docs o Sheets (free)'],
    deliverable: 'Tabella comparativa delle 4 piattaforme compilata + raccomandazione personale',
    instructions: [
      '<strong>Obiettivo:</strong> sintetizzare tutto in una tabella comparativa delle 4 piattaforme',
      '<strong>Step 1:</strong> Google Sheet → colonne: Criterio | ChatGPT | Claude | Gemini | NotebookLM',
      '<strong>Step 2:</strong> Voti 1-5 per: Facilita d\'uso, Qualita risposte, Funzionalita uniche, Utilita per il MIO lavoro, Velocita, UX',
      '<strong>Step 3:</strong> Riga "Funzionalita killer" — la feature migliore di ciascuna',
      '<strong>Step 4:</strong> Riga "Limite principale" — il difetto piu evidente di ciascuna',
      '<strong>Step 5:</strong> "Per il MIO lavoro, lo stack ideale: [principale] + [secondaria] perche..."',
      '<strong>Step 6:</strong> Prepara una mini-presentazione di 2 min per la classe',
      '<strong>Ricorda:</strong> non esiste la risposta "giusta" — il tool migliore è quello che TU userai davvero ogni giorno!',
    ],
  },

  // 10. Tabella di riferimento
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Cheat Sheet: Le 4 Piattaforme a Confronto',
    columns: ['', 'ChatGPT', 'Claude', 'Gemini', 'NotebookLM'],
    rows: [
      ['Punto forte', 'Canvas, plugin, versatilità', 'Projects, Artifacts, ragionamento', 'Multimodale, Google Workspace', 'Citazioni precise, podcast auto'],
      ['Free tier', 'GPT-5.2, Canvas, memoria', 'Projects, Artifacts, Sonnet', 'Gemini 2.5, integrazione Google', 'Tutto gratis, fino a 50 fonti'],
      ['Limite free', 'Meno messaggi/giorno', 'Meno messaggi, no Opus', 'Meno potente dei competitors', 'Solo fonti caricate, no chat libera'],
      ['Best per', 'Task generici e creativi', 'Analisi documenti, coding, app', 'Chi usa Google Workspace', 'Ricerca su documenti specifici'],
    ],
    footer: '<strong>Consiglio:</strong> non scegliete UNA sola piattaforma. Usate quella giusta per il task giusto. Tutte sono gratuite!',
  },

  // 11. QUOTE
  {
    type: 'quote',
    text: 'The best AI tool is the one your team will actually use every day.',
    source: 'Ethan Mollick, Wharton Professor & AI Researcher',
  },

  // 12. RECAP
  {
    type: 'recap',
    heading: 'Recap — Lab 06',
    items: [
      'ChatGPT free: Canvas, Custom Instructions, Memory',
      'Claude free: Projects + Artifacts per knowledge base e app interattive — ORA GRATIS!',
      'Gemini free: multimodale + integrazione Google Workspace',
      'NotebookLM: citazioni precise, zero allucinazioni, podcast audio automatico',
      'Non esiste il tool "migliore" — esiste quello giusto per il TUO task',
    ],
  },

  // 13. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'ChatGPT — chatgpt.com', url: 'https://chatgpt.com' },
      { label: 'Claude — claude.ai', url: 'https://claude.ai' },
      { label: 'Gemini — gemini.google.com', url: 'https://gemini.google.com' },
      { label: 'NotebookLM — notebooklm.google.com', url: 'https://notebooklm.google.com' },
      { label: 'Claude Projects e Artifacts ora gratis — Tom\'s Guide', url: 'https://www.tomsguide.com/ai/claude-just-made-two-of-its-best-features-free-heres-how-to-use-projects-and-artifacts' },
    ],
  },

  // 14. Prossima lezione
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: '07 · Lab: Automazione\nda Zero',
    subtitle: 'Zapier, Make.com, n8n — costruisci il tuo primo workflow automatico',
    style: { color: 'var(--secondary)' },
  },
]
