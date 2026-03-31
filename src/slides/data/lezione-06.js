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
    deliverable: 'Screenshot di: custom instructions configurate, un documento Canvas modificato, e la memoria attiva',
    instructions: [
      '<strong>Obiettivo:</strong> scoprire le 3 funzionalità chiave di ChatGPT free: Custom Instructions, Canvas e Memory',
      '<strong>Step 1 — Account:</strong> Vai su chatgpt.com e accedi con Google (se non hai un account, creane uno gratuito — 2 min)',
      '<strong>Step 2 — Custom Instructions:</strong> Clicca sul tuo avatar in alto a destra → "Customize ChatGPT". Compila: "Cosa vuoi che ChatGPT sappia di te?" → scrivi il tuo ruolo, settore, cosa fai. "Come vuoi che risponda?" → scrivi: "In italiano, tono professionale, risposte pratiche con esempi"',
      '<strong>Step 3 — Testa le istruzioni:</strong> Apri una nuova chat e chiedi: "Dammi 3 consigli per migliorare la produttività". Nota come la risposta è già calibrata sul tuo profilo!',
      '<strong>Step 4 — Canvas:</strong> Scrivi nella chat: "Crea un documento di analisi SWOT per un\'azienda del mio settore". ChatGPT aprirà Canvas — un editor laterale. Prova: seleziona una sezione → chiedi "espandi questo punto" o "riscrivi in tono più formale"',
      '<strong>Step 5 — Modifica in Canvas:</strong> Usa i controlli Canvas per: aggiungere suggerimenti AI, cambiare lunghezza, cambiare tono. Fai almeno 3 modifiche diverse',
      '<strong>Step 6 — Memory:</strong> Nella chat scrivi: "Ricorda che preferisco bullet point invece di paragrafi lunghi". Poi in una NUOVA chat chiedi qualcosa — ChatGPT dovrebbe ricordare la preferenza. Vai su Impostazioni → Personalizzazione → Memoria per vedere cosa ha salvato',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) Le tue Custom Instructions, 2) Il documento Canvas con le modifiche, 3) La schermata Memoria',
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
    deliverable: 'Screenshot del Project con documenti + l\'app interattiva creata con Artifacts',
    instructions: [
      '<strong>Obiettivo:</strong> usare Projects (ora GRATIS!) per creare una knowledge base e Artifacts per generare un\'app interattiva',
      '<strong>Step 1 — Account:</strong> Vai su claude.ai e accedi con Google (gratis)',
      '<strong>Step 2 — Crea un Project:</strong> Nel menu laterale clicca "Projects" → "Create Project". Nome: "Il mio assistente [settore]". Descrizione: "Assistente specializzato per il mio lavoro"',
      '<strong>Step 3 — Aggiungi Knowledge:</strong> Nel Project, clicca "Add Content" e carica 2-3 documenti: possono essere PDF del tuo lavoro, oppure copia-incolla testo di policy aziendali, FAQ, o listini. Se non hai documenti, usa questi testi di esempio (il tutor li condivide)',
      '<strong>Step 4 — Testa il Project:</strong> Nella chat del Project, fai 3 domande sui tuoi documenti. Nota come Claude cita le fonti specifiche! Confronta con ChatGPT: qui le risposte sono ancorate ai TUOI documenti',
      '<strong>Step 5 — Artifacts — Crea un\'app:</strong> Apri una nuova chat (anche fuori dal Project) e scrivi: "Crea un\'app interattiva: un calcolatore di ROI per l\'adozione di AI in azienda. Input: numero dipendenti, ore risparmiate a settimana per dipendente, costo orario medio. Output: risparmio annuo, ROI in %, tempo di payback. Rendilo visualmente accattivante con grafici"',
      '<strong>Step 6 — Itera sull\'app:</strong> L\'Artifact apparirà come un\'app funzionante a destra. Prova a: "Aggiungi un grafico a barre", "Cambia i colori in blu e verde", "Aggiungi un campo per il costo della licenza AI"',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) Il Project con i documenti caricati, 2) Una risposta con citazione dalle fonti, 3) L\'app Artifact funzionante',
      '<strong>Wow moment:</strong> Claude Projects + Artifacts gratis è una delle novità più grosse di marzo 2026. Prima costava $20/mese!',
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
    deliverable: 'Documento Google Docs con le 3 risposte affiancate e valutazione comparativa',
    instructions: [
      '<strong>Obiettivo:</strong> dare lo STESSO prompt a 3 AI diverse e confrontare qualità, stile e completezza',
      '<strong>Step 1:</strong> Apri 3 tab nel browser: chatgpt.com, claude.ai, gemini.google.com',
      '<strong>Step 2 — Il prompt:</strong> Copia questo prompt IDENTICO su tutte e 3: "Sei un consulente aziendale esperto. Un\'azienda manifatturiera italiana con 200 dipendenti e fatturato di 30M€ vuole introdurre l\'AI. Budget disponibile: 50.000€. Crea un piano di implementazione in 3 fasi con: timeline realistica, costi per fase, KPI misurabili, rischi e mitigazioni per ogni fase."',
      '<strong>Step 3:</strong> Invia il prompt su tutte e 3 contemporaneamente. Aspetta le risposte',
      '<strong>Step 4 — Valuta:</strong> Per ogni risposta, dai un voto 1-5 su: Completezza (copre tutti i punti?), Praticità (consigli applicabili?), Numeri concreti (o solo vaghi?), Struttura (facile da leggere?), Tono (professionale?)',
      '<strong>Step 5 — Esplora Gemini:</strong> Prova una funzione unica di Gemini: carica un\'immagine (es: foto di un grafico, un documento cartaceo) e chiedi di analizzarla. Gemini è forte nel multimodale!',
      '<strong>Step 6 — Google Integration:</strong> In Gemini, prova: "Crea una tabella comparativa in Google Sheets" — Gemini può creare direttamente file Google Workspace',
      '<strong>Step 7 — Documento finale:</strong> Crea un Google Doc con le 3 risposte affiancate + la tua tabella di valutazione + una riga "VINCITORE per questo task" con motivazione',
      '<strong>Spoiler:</strong> non esiste un vincitore assoluto. Il vincitore dipende dal task. Questo è il punto dell\'esercizio!',
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
      '<strong>Obiettivo:</strong> caricare documenti su NotebookLM, fare domande con citazioni precise, e generare un podcast audio automatico',
      '<strong>Step 1:</strong> Vai su notebooklm.google.com e clicca "New Notebook"',
      '<strong>Step 2 — Carica 3 fonti diverse:</strong> Scegli almeno 3 tra: un PDF del tuo lavoro, un articolo Wikipedia del tuo settore, un link a un video YouTube di un talk/webinar, un Google Doc con appunti. Se non hai materiale, usa i documenti di esempio forniti dal tutor',
      '<strong>Step 3 — Domande con citazioni:</strong> Nella chat di NotebookLM, chiedi: "Quali sono i 3 trend principali secondo le mie fonti?" Osserva: ogni risposta ha numeri di citazione [1], [2] che rimandano al punto esatto del documento!',
      '<strong>Step 4 — Domande incrociate:</strong> Chiedi: "Ci sono contraddizioni o punti di vista diversi tra le mie fonti?" NotebookLM confronta le fonti tra loro — cosa che ChatGPT/Claude non fanno automaticamente',
      '<strong>Step 5 — Riassunto esecutivo:</strong> Chiedi: "Genera un riassunto esecutivo in 200 parole, evidenziando i punti chiave con bullet point"',
      '<strong>Step 6 — Genera il Podcast:</strong> Clicca su "Audio Overview" → "Generate". NotebookLM creerà un podcast di 10-15 minuti con 2 voci AI che discutono i tuoi documenti. Ascolta almeno 3 minuti — è impressionante!',
      '<strong>Step 7 — Screenshot e condivisione:</strong> Cattura: 1) Una risposta con le citazioni numerate, 2) Il player del podcast. Condividi il link del podcast con un compagno',
      '<strong>Takeaway:</strong> NotebookLM è GRATIS, non allucina (cita sempre le fonti), e il podcast è perfetto per ripassare materiale. È il tool più sottovalutato del 2026.',
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
      '<strong>Obiettivo:</strong> sintetizzare tutto quello che hai imparato oggi in una tabella comparativa delle 4 piattaforme',
      '<strong>Step 1:</strong> Crea un Google Sheet con le colonne: Criterio | ChatGPT | Claude | Gemini | NotebookLM',
      '<strong>Step 2:</strong> Compila le righe con i tuoi voti (1-5) per ogni criterio: Facilità d\'uso, Qualità delle risposte, Funzionalità uniche (Canvas / Projects / Workspace / Podcast), Utilità per il MIO lavoro, Velocità di risposta, Aspetto grafico / UX',
      '<strong>Step 3:</strong> Aggiungi una riga "Funzionalità killer" — per ogni piattaforma, scrivi LA feature che ti ha colpito di più',
      '<strong>Step 4:</strong> Aggiungi una riga "Limite principale" — il difetto più evidente di ciascuna',
      '<strong>Step 5:</strong> In fondo, scrivi: "Per il MIO lavoro, lo stack ideale sarebbe: [piattaforma principale] + [piattaforma secondaria] perché..."',
      '<strong>Step 6:</strong> Prepara una mini-presentazione di 2 minuti per condividere i tuoi risultati con la classe',
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
      'ChatGPT free: Canvas per editare documenti, Custom Instructions per personalizzare, Memory per continuità',
      'Claude free: Projects per knowledge base personalizzate, Artifacts per creare app interattive — ORA GRATIS!',
      'Gemini free: forte su multimodale e integrazione Google Workspace',
      'NotebookLM: citazioni precise, zero allucinazioni, podcast audio automatico — il tool più sottovalutato',
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
