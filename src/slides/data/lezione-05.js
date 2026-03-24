export const meta = {
  lessonNumber: '05',
  title: 'Claude: Chat, Cowork e Claude Code',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '05',
    title: 'Claude: Projects,\nArtifacts & MCP',
    subtitle: 'Mercoledi 08/04/2026 · 6h in presenza · Blocco PIATTAFORME',
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '\u{1F3DB}\uFE0F', text: 'Anthropic & Claude: la visione' },
      { emoji: '\u{1F4C2}', text: 'Projects: workspace persistente' },
      { emoji: '\u{1F3A8}', text: 'Artifacts: app live nella chat' },
      { emoji: '\u{1F50C}', text: 'MCP: Model Context Protocol' },
      { emoji: '\u{1F91D}', text: 'Cowork: collaborazione uomo-AI' },
      { emoji: '\u{1F6E0}\uFE0F', text: 'Workshop: costruisci il tuo Claude workspace' },
    ],
  },

  // 3. MEME
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif', alt: 'Sophisticated choice' },
    caption: '"Utenti Claude vs utenti ChatGPT quando si parla di qualita del testo"',
  },

  // 4. Anthropic & Claude: la visione
  {
    type: 'concept',
    heading: 'Anthropic & Claude: la visione',
    content: `<p class="concept-text">
  <strong>Constitutional AI:</strong> l'AI si auto-corregge seguendo principi scritti, non solo dati di training.
  <br><br>
  <strong>Safety-first:</strong> Anthropic nasce per costruire AI sicura. E la differenza filosofica chiave con OpenAI.
  <br><br>
  <strong>Fondatori:</strong> Dario e Daniela Amodei, ex VP di OpenAI. Hanno lasciato per divergenze sulla sicurezza.
  <br><br>
  <strong>Modelli:</strong> Claude Haiku (veloce), Sonnet (bilanciato), Opus (potente). Famiglia 4.5/4.6.
</p>`,
    image: { src: '', alt: '' },
    footer: null,
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 28px; text-align: center;">
  <div style="font-size: 2em; margin-bottom: 12px;">\u{1F3DB}\uFE0F</div>
  <div style="font-size: 0.6em; color: var(--accent); font-weight: 700;">ANTHROPIC</div>
  <div style="font-size: 0.5em; color: var(--muted); margin-top: 8px;">"The responsible development<br>and maintenance of<br>advanced AI for the long-term<br>benefit of humanity"</div>
</div>`,
  },

  // 5. Claude nel 2026: cosa puo fare
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Claude nel 2026: cosa puo fare',
    features: [
      { icon: '\u{1F9E0}', title: 'Ragionamento lungo', description: 'Extended thinking: ragiona per minuti su problemi complessi' },
      { icon: '\u270D\uFE0F', title: 'Scrittura eccellente', description: 'Tono naturale, stile adattabile, testi lunghi senza degradare' },
      { icon: '\u{1F4BB}', title: 'Codice & analisi', description: 'Genera, debugga, refactora. Analizza CSV e documenti' },
      { icon: '\u{1F4C2}', title: 'Projects', description: 'Workspace persistente con knowledge base e istruzioni' },
      { icon: '\u{1F3A8}', title: 'Artifacts', description: 'App, grafici, documenti — live nella chat' },
      { icon: '\u{1F50C}', title: 'MCP', description: 'Collega Claude ai tuoi tool e dati esterni' },
    ],
    footer: '<strong>In pratica:</strong> Claude si distingue per ragionamento profondo, scrittura naturale e l\'ecosistema MCP — non e solo un chatbot, e un collaboratore.',
  },

  // 6. Claude Projects: workspace persistente
  {
    type: 'concept',
    heading: 'Claude Projects: workspace persistente',
    content: `<p class="concept-text">
  Un <strong>Project</strong> e uno spazio di lavoro dedicato: istruzioni + documenti + cronologia conversazioni.
  <br><br>
  <strong>Come funziona:</strong><br>
  1. Crei un Project e dai istruzioni di sistema<br>
  2. Carichi documenti (knowledge base)<br>
  3. Ogni nuova chat in quel Project ha accesso a tutto
  <br><br>
  <strong>vs ChatGPT:</strong> Memory e trasversale (ricorda tutto). Projects e focalizzato (ogni workspace e separato).
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 24px;">
  <div style="font-size: 0.55em; color: var(--muted); font-family: 'JetBrains Mono', monospace; line-height: 1.8;">
    <span style="color: var(--accent);">Project:</span> "Analisi Vendite Q1"<br><br>
    <span style="color: var(--warning);">Knowledge:</span><br>
    \u{1F4C4} report-vendite.pdf<br>
    \u{1F4CA} dati-Q1.csv<br>
    \u{1F4CB} template-analisi.md<br><br>
    <span style="color: var(--secondary);">Istruzioni:</span><br>
    "Sei un analista vendite senior..."
  </div>
</div>`,
  },

  // 7. Artifacts: app live nella chat
  {
    type: 'concept',
    heading: 'Artifacts: app live nella chat',
    content: `<p class="concept-text">
  Claude genera <strong>contenuti interattivi</strong> in un pannello laterale: codice eseguibile, grafici, documenti, app complete.
  <br><br>
  <strong>Cosa puoi generare:</strong><br>
  \u2022 App React funzionanti (dashboard, form, giochi)<br>
  \u2022 Grafici SVG interattivi<br>
  \u2022 Documenti formattati<br>
  \u2022 Calcolatrici, converter, tool
  <br><br>
  <strong>La magia:</strong> chiedi una modifica e l'artifact si aggiorna in tempo reale.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 24px; text-align: center;">
  <div style="font-size: 0.55em; color: var(--muted); font-family: 'JetBrains Mono', monospace; line-height: 1.8; text-align: left;">
    <span style="color: var(--secondary);">User:</span> "Crea una dashboard vendite<br>con dati di esempio"<br><br>
    <span style="color: var(--accent);">Claude:</span> *genera Artifact*<br>
    \u2192 App React con grafici<br>
    \u2192 Filtri interattivi<br>
    \u2192 Responsive, scaricabile<br><br>
    <span style="color: var(--secondary);">User:</span> "Aggiungi un grafico a torta"<br>
    <span style="color: var(--accent);">\u2192</span> Artifact aggiornato live \u2728
  </div>
</div>`,
  },

  // 8. Extended thinking: ragionamento profondo
  {
    type: 'concept',
    heading: 'Extended thinking: ragionamento profondo',
    content: `<p class="concept-text">
  Claude puo <strong>"pensare a lungo"</strong> prima di rispondere — come un esperto che riflette prima di parlare.
  <br><br>
  <strong>Quando attivarlo:</strong><br>
  \u2022 Problemi matematici o logici complessi<br>
  \u2022 Analisi multi-step di documenti<br>
  \u2022 Codice complesso con molte dipendenze<br>
  \u2022 Strategia e pianificazione
  <br><br>
  <strong>Costo:</strong> piu token = piu costoso, ma risultati drasticamente migliori sui task difficili.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 28px; text-align: center;">
  <div style="font-size: 2em; margin-bottom: 12px;">\u{1F9E0}</div>
  <div style="font-size: 0.6em; color: var(--accent); font-weight: 700;">EXTENDED THINKING</div>
  <div style="font-size: 0.5em; color: var(--muted); margin-top: 12px;">
    Domanda semplice \u2192 risposta immediata<br>
    Problema complesso \u2192 pensa 30s-2min \u2192 risposta precisa
  </div>
</div>`,
  },

  // 9. Claude per scrivere: perche e diverso
  {
    type: 'concept',
    heading: 'Claude per scrivere: perche e diverso',
    content: `<p class="concept-text">
  Claude e considerato il <strong>miglior modello per la scrittura</strong> — tono naturale, zero "AI slop".
  <br><br>
  <strong>Punti di forza:</strong><br>
  \u2022 Testi lunghi senza degradare in qualita<br>
  \u2022 Adatta stile e registro con precisione<br>
  \u2022 Non usa frasi fatte da AI ("In definitiva...", "E importante notare...")<br>
  \u2022 Eccellente per email professionali, report, content marketing
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 24px;">
  <div style="font-size: 0.55em; color: var(--muted); font-family: 'JetBrains Mono', monospace; line-height: 1.8;">
    <span style="color: var(--danger);">\u274C AI slop tipico:</span><br>
    "In un mondo in continua evoluzione,<br>e fondamentale sottolineare che..."<br><br>
    <span style="color: var(--secondary);">\u2705 Claude:</span><br>
    "Il mercato italiano dell'e-commerce<br>e cresciuto del 13% nel 2025.<br>Tre settori guidano la crescita."
  </div>
</div>`,
  },

  // 10. Claude per analizzare documenti
  {
    type: 'concept',
    heading: 'Claude per analizzare documenti',
    content: `<p class="concept-text">
  Carica PDF, contratti, report — Claude li legge, estrae dati, risponde a domande.
  <br><br>
  <strong>Cosa puoi fare:</strong><br>
  \u2022 Riassumere un contratto di 50 pagine in 5 punti<br>
  \u2022 Estrarre clausole specifiche e confrontarle<br>
  \u2022 Analizzare report finanziari e trovare anomalie<br>
  \u2022 Domande in linguaggio naturale sui tuoi dati
  <br><br>
  <strong>Context window:</strong> fino a 200K token (~500 pagine) in una singola conversazione.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 28px; text-align: center;">
  <div style="font-size: 2.5em; font-weight: 900; color: var(--accent);">200K</div>
  <div style="font-size: 0.6em; color: var(--muted); margin-top: 8px;">token di context window<br>~500 pagine in una conversazione</div>
</div>`,
  },

  // 11. Claude vs ChatGPT: benchmark 2026
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Claude vs ChatGPT: benchmark 2026',
    columns: ['Benchmark', 'Claude Opus 4.6', 'GPT-4o', 'o3'],
    rows: [
      ['MMLU Pro', '89.4%', '87.2%', '90.1%'],
      ['HumanEval (coding)', '93.7%', '90.2%', '92.8%'],
      ['GPQA (reasoning)', '68.4%', '53.6%', '79.3%'],
      ['Scrittura (arena ELO)', '\u{1F947} #1', '#3', '#4'],
      ['Context window', '200K', '128K', '200K'],
    ],
    footer: '<strong>Takeaway:</strong> Claude domina in scrittura e ragionamento, o3 nel reasoning puro, GPT-4o resta versatile. Scegliete in base al task, non al brand.',
  },

  // 12. Cos\'e MCP
  {
    type: 'concept',
    heading: "Cos'e MCP",
    content: `<p class="concept-text">
  <strong>Model Context Protocol</strong> — un protocollo standard per collegare AI a tool esterni.
  <br><br>
  Pensa a <strong>USB-C per i modelli AI</strong>: un unico standard per connettere qualsiasi strumento.
  <br><br>
  <strong>Prima di MCP:</strong> ogni integrazione richiedeva codice custom, API diverse, formati diversi.
  <br><br>
  <strong>Con MCP:</strong> un server MCP espone tool standard. Qualsiasi client MCP li usa immediatamente.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div class="diagram-flow" style="flex-direction: column; gap: 8px;">
  <div class="node" style="border-color: var(--accent);">Claude / AI Client</div>
  <div class="arrow">\u2195 <span style="font-size: 0.5em; color: var(--accent);">MCP</span></div>
  <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
    <div class="node" style="font-size: 0.5em; min-width: 70px; border-color: var(--secondary);">Filesystem</div>
    <div class="node" style="font-size: 0.5em; min-width: 70px; border-color: var(--secondary);">GitHub</div>
    <div class="node" style="font-size: 0.5em; min-width: 70px; border-color: var(--secondary);">Notion</div>
    <div class="node" style="font-size: 0.5em; min-width: 70px; border-color: var(--secondary);">Database</div>
  </div>
</div>`,
  },

  // 13. MCP in pratica
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'MCP in pratica',
    features: [
      { icon: '\u{1F4C1}', title: 'Filesystem', description: 'Claude legge e scrive file sul tuo computer' },
      { icon: '\u{1F419}', title: 'GitHub', description: 'Crea PR, legge issue, analizza codice direttamente' },
      { icon: '\u{1F4DD}', title: 'Notion', description: 'Cerca e aggiorna pagine, database, documenti' },
      { icon: '\u2601\uFE0F', title: 'Google Drive', description: 'Accede ai tuoi doc, sheet, slide' },
      { icon: '\u{1F5C4}\uFE0F', title: 'Database', description: 'Query PostgreSQL, SQLite, MongoDB' },
      { icon: '\u{1F310}', title: 'Browser', description: 'Naviga, scrape, interagisce con pagine web' },
    ],
    footer: '<strong>Il punto chiave:</strong> MCP trasforma l\'AI da assistente isolato a hub connesso. Un solo protocollo per accedere a file, database, API e tool aziendali.',
  },

  // 14. Anthropic ha creato lo standard
  {
    type: 'concept',
    heading: 'Anthropic ha creato lo standard',
    content: `<p class="concept-text">
  MCP e <strong>open source</strong> — Anthropic l'ha creato, ma chiunque puo adottarlo.
  <br><br>
  <strong>Chi l'ha adottato:</strong><br>
  \u2022 <strong>n8n</strong> — automazioni con nodi MCP<br>
  \u2022 <strong>Cursor, Windsurf</strong> — IDE con MCP integrato<br>
  \u2022 <strong>Replit</strong> — sviluppo cloud con MCP<br>
  \u2022 <strong>Enterprise tools</strong> — Salesforce, Notion, Slack
  <br><br>
  E uno standard aperto: il valore cresce con l'adozione.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 28px; text-align: center;">
  <div style="font-size: 2em; margin-bottom: 12px;">\u{1F50C}</div>
  <div style="font-size: 0.6em; color: var(--accent); font-weight: 700;">OPEN STANDARD</div>
  <div style="font-size: 0.5em; color: var(--muted); margin-top: 8px;">Creato da Anthropic<br>Adottato dall'ecosistema<br>Open source su GitHub</div>
</div>`,
  },

  // 15. MCP vs API tradizionale
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'MCP vs API tradizionale',
    columns: ['', 'MCP', 'API custom'],
    rows: [
      ['Setup', 'Plug & play: installa il server MCP', 'Scrivi codice di integrazione'],
      ['Standardizzazione', 'Formato unico per tutti i tool', 'Ogni API ha il suo formato'],
      ['Scoperta tool', "L'AI scopre i tool automaticamente", 'Devi descrivere manualmente ogni endpoint'],
      ['Flessibilita', 'Limitato ai tool esposti dal server', 'Totale controllo'],
      ['Quando usarlo', 'Integrazioni standard, prototipazione', 'Logica business complessa, produzione'],
    ],
    footer: '<strong>Ricorda:</strong> usa MCP per integrazioni rapide e standard; scegli API custom quando hai logica di business complessa o serve controllo totale.',
  },

  // 16. MEME — When MCP just works
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif', alt: 'Magic' },
    caption: '"Quando configuri MCP e Claude accede ai tuoi file al primo tentativo"',
  },

  // 17. Claude Code: AI nel terminale
  {
    type: 'concept',
    heading: 'Claude Code: AI nel terminale',
    content: `<p class="concept-text">
  Un <strong>agente AI</strong> che lavora direttamente nel tuo terminale: legge file, scrive codice, esegue comandi.
  <br><br>
  <strong>Cosa fa:</strong><br>
  \u2022 Naviga il codebase e capisce il contesto<br>
  \u2022 Scrive e modifica codice su piu file<br>
  \u2022 Esegue test, commit, debug<br>
  \u2022 Usa MCP per accedere a tool esterni
  <br><br>
  Non e un chatbot: e un <strong>collega AI nel terminale</strong>.
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: #0d1117; border: 1px solid #30363d; border-radius: var(--radius); padding: 20px;">
  <div style="font-size: 0.5em; font-family: 'JetBrains Mono', monospace; line-height: 1.8; color: #c9d1d9;">
    <span style="color: var(--secondary);">$</span> claude<br>
    <span style="color: var(--accent);">Claude></span> Analizza i test falliti<br>
    <span style="color: var(--muted);">\u2192 Legge 12 file...</span><br>
    <span style="color: var(--muted);">\u2192 Trova il bug in auth.ts:42</span><br>
    <span style="color: var(--muted);">\u2192 Applica la fix</span><br>
    <span style="color: var(--muted);">\u2192 Tutti i test passano \u2705</span>
  </div>
</div>`,
  },

  // 18. Cowork: nuova modalita di lavoro
  {
    type: 'concept',
    heading: 'Cowork: nuova modalita di lavoro',
    content: `<p class="concept-text">
  Non "usa l'AI" — ma <strong>lavora CON l'AI in tempo reale</strong>.
  <br><br>
  <strong>Il paradigma shift:</strong><br>
  \u274C "Chiedi all'AI e copia-incolla la risposta"<br>
  \u2705 "Lavora insieme all'AI su un output condiviso"
  <br><br>
  <strong>Esempi concreti:</strong><br>
  \u2022 Scrivi un report insieme in un Project<br>
  \u2022 Costruisci una dashboard in Artifacts<br>
  \u2022 Debugga codice con Claude Code
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div class="diagram-flow" style="flex-direction: column; gap: 8px;">
  <div style="display: flex; gap: 16px; align-items: center;">
    <div class="node" style="border-color: var(--secondary);">\u{1F464} Tu</div>
    <div class="arrow">\u21C4</div>
    <div class="node" style="border-color: var(--accent);">\u{1F916} Claude</div>
  </div>
  <div class="arrow">\u2193</div>
  <div class="node" style="border-color: var(--warning); min-width: 200px;">\u{1F4C4} Output condiviso</div>
</div>`,
  },

  // 19. Workflow ibrido: human-in-the-loop
  {
    type: 'custom',
    layout: 'workflow-diagram',
    heading: 'Workflow ibrido: human-in-the-loop',
    steps: [
      { emoji: '\u{1F916}', label: 'AI propone', type: 'ai' },
      { emoji: '\u{1F464}', label: 'Umano decide', type: 'human' },
      { emoji: '\u{1F916}', label: 'AI implementa', type: 'ai' },
    ],
    footer: 'Il valore non e nell\'automazione totale, ma nel <strong>moltiplicare le capacita umane</strong>. L\'AI gestisce il volume, l\'umano garantisce la qualita.',
  },

  // 20. Il pair programming con AI
  {
    type: 'concept',
    heading: 'Il pair programming con AI',
    content: `<p class="concept-text">
  Un developer + Claude Code = <strong>pair programming</strong> con un collega che conosce tutto il codebase.
  <br><br>
  <strong>Ma non e solo per developer:</strong><br>
  \u2022 <strong>Marketing:</strong> scrivi campagne in un Project con brand guidelines<br>
  \u2022 <strong>Legal:</strong> analizza contratti, estrai clausole, confronta versioni<br>
  \u2022 <strong>Sales:</strong> crea pitch deck con Artifacts, personalizza per cliente<br>
  \u2022 <strong>HR:</strong> analizza survey dipendenti, genera report
</p>`,
    image: { src: '', alt: '' },
    _visual: `<div style="background: var(--surface); border-radius: var(--radius); padding: 24px; text-align: center;">
  <div style="font-size: 1.5em; margin-bottom: 12px;">\u{1F91D}</div>
  <div style="font-size: 0.6em; color: var(--accent); font-weight: 700;">PAIR WORK</div>
  <div style="font-size: 0.5em; color: var(--muted); margin-top: 8px;">Qualsiasi professione puo<br>lavorare in coppia con l'AI</div>
</div>`,
  },

  // 21. QUOTE
  {
    type: 'quote',
    text: 'The best use of AI is augmentation, not automation. The goal isn\'t to replace human judgment — it\'s to give every person superpowers.',
    source: 'Dario Amodei, CEO Anthropic',
  },

  // 22. DEMO — Claude Projects
  {
    type: 'demo',
    heading: 'Claude Projects: costruiamo un workspace',
    description: `<strong>Step per il docente:</strong><br>
1. Apri claude.ai \u2192 Projects \u2192 New Project<br>
2. Nome: "Analisi Mercato AI Italia"<br>
3. Istruzioni: (vedi sotto)<br>
4. Carica i documenti preparati come knowledge base<br>
5. Avvia una chat: "Quali sono i trend principali?"<br>
6. Mostra come il Project ricorda il contesto tra chat diverse`,
    demoMaterial: {
      label: 'Materiale per la demo Claude Projects',
      systemPrompt: `Sei un analista di mercato senior specializzato nel settore AI in Italia. Analizza i documenti caricati e rispondi con dati concreti, citando sempre la fonte. Usa un tono professionale ma accessibile. Quando confronti dati, presenta tabelle. Se un dato non e presente nei documenti, dillo esplicitamente.`,
      documents: [
        {
          filename: 'report-ai-italia-2026.txt',
          content: `REPORT: IL MERCATO AI IN ITALIA — 2026
Fonte: Osservatorio Artificial Intelligence, Politecnico di Milano (dati fittizi per demo)

DIMENSIONE DEL MERCATO
- Mercato AI Italia 2025: 1.2 miliardi di euro (+34% vs 2024)
- Previsione 2026: 1.7 miliardi di euro (+42%)
- Il 73% della spesa e concentrata nel Nord Italia
- Milano rappresenta il 38% del mercato nazionale

ADOZIONE PER SETTORE
- Banche e assicurazioni: 28% (leader nell'adozione)
- Manifatturiero: 22% (in forte crescita, +55% YoY)
- Retail e GDO: 18% (focus su personalizzazione e supply chain)
- Sanita: 12% (AI diagnostica in espansione)
- Pubblica Amministrazione: 8% (frenata da burocrazia e GDPR)
- Altro: 12%

TECNOLOGIE PIU ADOTTATE
1. NLP e chatbot aziendali (42% delle implementazioni)
2. Computer vision per quality control (28%)
3. Predictive analytics per vendite (22%)
4. Generative AI per content e codice (18% — in forte crescita)

BARRIERE ALL'ADOZIONE
1. Mancanza di competenze interne (67% delle aziende)
2. Costi di implementazione (54%)
3. Preoccupazioni su privacy e GDPR (48%)
4. Resistenza culturale al cambiamento (41%)
5. Difficolta a misurare il ROI (38%)

PREVISIONI 2027-2030
- Il mercato italiano AI raggiunger\u00E0 3.5 miliardi entro il 2028
- Il 60% delle aziende medio-grandi avra almeno un progetto AI in produzione
- L'AI generativa sara il segmento a crescita piu rapida (+80% CAGR)`,
        },
        {
          filename: 'survey-ai-pmi-italiane.txt',
          content: `SURVEY: AI NELLE PMI ITALIANE — 2025/2026
Campione: 1.200 PMI italiane (10-250 dipendenti)
Fonte: Confindustria Digitale (dati fittizi per demo)

STATO DELL'ADOZIONE
- Il 34% delle PMI usa almeno un tool AI (vs 18% nel 2024)
- Il 52% sta "esplorando" (proof of concept, test interni)
- Il 14% non ha ancora considerato l'AI

TOOL PIU USATI NELLE PMI
1. ChatGPT (78% di chi usa AI)
2. Microsoft Copilot (32%)
3. Google Gemini (24%)
4. Claude (12%)
5. Tool verticali di settore (18%)

CASI D'USO PIU DIFFUSI
1. Scrittura email e documenti (72%)
2. Traduzione (58%)
3. Customer service / chatbot (34%)
4. Analisi dati e reportistica (28%)
5. Generazione contenuti marketing (26%)
6. Coding e automazione IT (14%)

IMPATTO MISURATO
- Tempo risparmiato: media 6.5 ore/settimana per dipendente che usa AI
- Riduzione costi operativi: -12% medio (chi ha misurato)
- Soddisfazione clienti: +8% (aziende con chatbot AI)
- ROI medio primo anno: 180% (per chi ha implementato in modo strutturato)

OSTACOLI SPECIFICI PMI
- "Non sappiamo da dove cominciare" (62%)
- "Mancano competenze nel team" (58%)
- "Budget limitato" (45%)
- "Paura di sbagliare" (38%)
- "Il management non ci crede" (29%)

INVESTIMENTO MEDIO
- PMI piccole (10-50 dip.): 15.000 euro/anno in tool AI
- PMI medie (50-250 dip.): 65.000 euro/anno
- Il 45% usa solo tool gratuiti o freemium`,
        },
        {
          filename: 'trend-ai-globali-2026.txt',
          content: `TREND AI GLOBALI — RILEVANTI PER IL MERCATO ITALIANO
Fonte: McKinsey Global AI Survey 2026 (dati fittizi per demo)

I 5 TREND CHIAVE DEL 2026

1. AI AGENTI IN PRODUZIONE
- Il 35% delle Fortune 500 ha almeno un agente AI in produzione
- Casi d'uso principali: customer service, data entry, code review
- Rischio: il 22% dei progetti agentici e stato abbandonato per risultati insufficienti

2. SMALL LANGUAGE MODELS (SLM)
- Modelli piu piccoli (1-7B parametri) per uso locale e privacy
- Il 28% delle aziende europee preferisce SLM per compliance GDPR
- Performance: 80-90% di un modello grande per task specifici, 10x meno costosi

3. AI ACT EUROPEO — IMPATTO REALE
- Entrato in vigore: agosto 2024, piena applicazione 2026
- Classificazione rischio: inaccettabile, alto, limitato, minimo
- Il 45% delle aziende italiane non e ancora compliant
- Sanzioni: fino al 7% del fatturato globale

4. MULTIMODALE COME STANDARD
- Il 90% dei nuovi modelli e multimodale (testo + immagini + audio)
- Impatto su settori: sanita (diagnostica per immagini), manifatturiero (quality control), retail (visual search)
- L'Italia e in ritardo: solo il 15% delle implementazioni AI e multimodale

5. AI E SOSTENIBILITA
- Training GPT-4: ~50 GWh di energia (come 5.000 famiglie/anno)
- Il 67% dei CTO considera l'impatto energetico un fattore nella scelta del modello
- Trend: modelli piu efficienti, inference locale, green data center`,
        },
      ],
      testQuestions: [
        'Quali sono i trend principali del mercato AI in Italia?',
        'Quanto spendono le PMI italiane in AI?',
        'Quali sono le principali barriere all\'adozione?',
        'Come si confronta l\'Italia con il trend globale sull\'AI multimodale?',
        'Qual e il ROI medio per chi implementa AI in modo strutturato?',
      ],
    },
  },

  // 23. DEMO — Artifacts
  {
    type: 'demo',
    heading: 'Artifacts: app dal prompt',
    description: `<strong>Step per il docente:</strong><br>
1. Apri claude.ai \u2192 nuova chat<br>
2. Prompt: "Crea una dashboard interattiva con dati di vendita fittizi per 4 regioni italiane, con grafici a barre e filtri"<br>
3. Mostra l'Artifact generato — e funzionante!<br>
4. Chiedi modifica: "Aggiungi un grafico a linee con il trend mensile"<br>
5. Mostra aggiornamento live<br>
6. Scarica il codice e mostralo`,
  },

  // 24. HANDS-ON
  {
    type: 'hands-on',
    heading: 'Costruisci il tuo Claude workspace',
    timer: '90 minuti',
    instructions: [
      '<strong>Crea un Project</strong> con knowledge base del tuo settore (carica 2-3 documenti reali)',
      '<strong>Scrivi istruzioni di sistema</strong> — ruolo, competenze, formato output, limiti',
      '<strong>Genera 3 Artifacts utili:</strong> Un template di report per il tuo lavoro; Una dashboard dati interattiva; Un form o calcolatrice specifica del tuo settore',
      '<strong>Testa con 10 domande reali</strong> del tuo lavoro — annota qualita risposte',
      '<strong>Confronta</strong> con la stessa domanda su ChatGPT — nota le differenze',
      '<strong>Presenta</strong> il tuo workspace alla classe (2 min ciascuno)',
    ],
  },

  // 25. RECAP
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Anthropic: safety-first, Constitutional AI, filosofia diversa',
      'Projects: workspace persistente con knowledge e istruzioni',
      'Artifacts: app funzionanti generate nella chat',
      'MCP: standard aperto per collegare AI a tool (USB-C dei modelli)',
      'Claude Code: agente AI nel terminale, non solo per developer',
      'Cowork: lavora CON l\'AI, non chiederle di fare per te',
    ],
  },

  // 26. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Guida completa agli Artifacts di Claude', url: 'https://albato.com/blog/publications/how-to-use-claude-artifacts-guide' },
      { label: 'Claude: features gratuite — Tom\'s Guide', url: 'https://tomsguide.com/ai/claude-just-made-two-of-its-best-features-free' },
      { label: 'MCP — Annuncio ufficiale Anthropic', url: 'https://anthropic.com/news/model-context-protocol' },
      { label: 'Claude Code per produzione — Dev.to', url: 'https://dev.to/lizechengnet/how-to-structure-claude-code-for-production' },
    ],
  },
]
