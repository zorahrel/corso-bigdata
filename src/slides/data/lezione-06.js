export const meta = {
  lessonNumber: '06',
  title: 'Power Automate e altri strumenti',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '06',
    title: 'Power Automate &\nTool Emergenti',
    subtitle: 'Giovedi 09/04/2026 · 6h in presenza · Blocco PIATTAFORME',
    style: { '--accent': '#0d9488' },
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '\u{1F3E2}', text: 'Microsoft Power Automate + Copilot' },
      { emoji: '\u{1F52E}', text: 'Google Gemini e Workspace AI' },
      { emoji: '\u{1F9F0}', text: 'Tool emergenti 2026' },
      { emoji: '\u{1F5FA}\uFE0F', text: 'La mappa completa dei tool AI' },
      { emoji: '\u{1F4BB}', text: 'Demo + Workshop pratico' },
    ],
  },

  // 3. MEME
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', alt: 'Choosing the right AI tool' },
    caption: '"Scegliere il tool AI giusto nel 2026"',
  },

  // 4. Microsoft AI nel 2026: l'ecosistema
  {
    type: 'custom',
    layout: 'eco-map',
    heading: "Microsoft AI nel 2026: l'ecosistema",
    center: 'Microsoft Copilot',
    nodes: [
      { icon: '', label: 'Copilot in Word' },
      { icon: '', label: 'Copilot in Excel' },
      { icon: '', label: 'Power Automate' },
      { icon: '', label: 'Azure AI Services' },
      { icon: '', label: 'Copilot in Teams' },
      { icon: '', label: 'Bing AI / Edge' },
      { icon: '', label: 'Copilot in Outlook' },
      { icon: '', label: 'GitHub Copilot' },
    ],
  },

  // 5. Power Automate: automazione no-code
  {
    type: 'concept',
    heading: 'Power Automate:\nautomazione no-code',
    content: `<p class="concept-text">
  <strong>Cos'\u00E8:</strong> piattaforma Microsoft per creare workflow automatici senza scrivere codice.
  <br><br>
  <strong>Cosa fa:</strong> collega app, automatizza processi ripetitivi, gestisce approvazioni, invia notifiche.
  <br><br>
  <strong>Perch\u00E9 \u00E8 potente:</strong> integrazione nativa con tutto l'ecosistema Microsoft 365. Se la tua azienda usa Office, \u00E8 gi\u00E0 li.
</p>`,
    image: { src: 'https://media.giphy.com/media/l0HlNQ03J5JxX2rGU/giphy.gif', alt: 'Automation' },
  },

  // 6. Copilot in azione: Office 365
  {
    type: 'concept',
    centered: true,
    heading: 'Copilot in azione: Office 365',
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F4DD}</span> <strong>Word:</strong> "Riscrivi questo paragrafo in tono formale" — genera, riassume, riscrive documenti</li>
  <li><span class="icon">\u{1F4CA}</span> <strong>Excel:</strong> "Analizza i trend di vendita Q1" — formula automatiche, pivot, grafici da prompt</li>
  <li><span class="icon">\u{1F4E7}</span> <strong>Outlook:</strong> "Rispondi a questa email declinando educatamente" — bozze, riassunti thread lunghi</li>
  <li><span class="icon">\u{1F465}</span> <strong>Teams:</strong> "Cosa mi sono perso nella riunione?" — riassunti meeting, action items automatici</li>
  <li><span class="icon">\u{1F3A8}</span> <strong>PowerPoint:</strong> "Crea una presentazione da questo documento Word" — slide generate da testo</li>
</ul>
<p class="concept-text"><strong>In pratica:</strong> Copilot funziona meglio se siete gia nell'ecosistema Microsoft — il valore e nell'integrazione nativa con i tool che usate ogni giorno.</p>`,
  },

  // 7. Power Automate + AI Builder
  {
    type: 'concept',
    heading: 'Power Automate + AI Builder',
    content: `<p class="concept-text">
  <strong>AI Builder</strong> aggiunge intelligenza ai tuoi workflow senza ML expertise.
  <br><br>
  \u{1F4C4} <strong>Classificazione documenti</strong> — fatture, contratti, ordini smistati automaticamente
  <br><br>
  \u{1F4AC} <strong>Sentiment analysis</strong> — analisi automatica feedback clienti
  <br><br>
  \u{1F4F7} <strong>OCR intelligente</strong> — estrai dati da documenti scannerizzati
</p>`,
    image: { src: 'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif', alt: 'AI Builder' },
  },

  // 8. Connettori: Power Automate parla con tutto
  {
    type: 'concept',
    centered: true,
    heading: 'Connettori: Power Automate parla con tutto',
    content: `<p style="text-align:center; font-size:0.65em; color:var(--muted); margin-bottom:28px;">1000+ connettori disponibili — alcuni esempi di flussi reali:</p>
<ul class="feature-list">
  <li><span class="icon">\u{1F4E7}</span> Nuova email con allegato \u2192 <strong>salva su SharePoint</strong> \u2192 notifica Teams</li>
  <li><span class="icon">\u{1F4CB}</span> Nuovo record in Forms \u2192 <strong>aggiungi riga Excel</strong> \u2192 invia conferma email</li>
  <li><span class="icon">\u{1F514}</span> Mention su Twitter/X \u2192 <strong>analisi sentiment</strong> \u2192 alert se negativo</li>
  <li><span class="icon">\u2705</span> Approvazione manager \u2192 <strong>aggiorna Dynamics 365</strong> \u2192 genera PDF</li>
</ul>
<p class="concept-text"><strong>Il punto chiave:</strong> 1000+ connettori significano che quasi ogni app aziendale puo parlare con le altre — senza scrivere codice.</p>`,
  },

  // 9. Quando scegliere Power Automate?
  {
    type: 'concept',
    centered: true,
    heading: 'Quando scegliere Power Automate?',
    content: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:32px; max-width:800px; margin:0 auto;">
  <div style="background:rgba(0,212,170,0.1); border:1px solid rgba(0,212,170,0.3); border-radius:var(--radius); padding:24px;">
    <h3 style="color:var(--secondary); font-size:0.7em; margin-bottom:12px;">\u2705 Si, se...</h3>
    <ul style="font-size:0.6em; line-height:1.8; padding-left:1em;">
      <li>La tua azienda usa Microsoft 365</li>
      <li>Workflow interni tra app Office</li>
      <li>Processi di approvazione</li>
      <li>Il team non sa programmare</li>
    </ul>
  </div>
  <div style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:var(--radius); padding:24px;">
    <h3 style="color:var(--danger); font-size:0.7em; margin-bottom:12px;">\u274C No, se...</h3>
    <ul style="font-size:0.6em; line-height:1.8; padding-left:1em;">
      <li>Vuoi massima flessibilita</li>
      <li>Hai bisogno di self-hosting</li>
      <li>Budget limitato (le licenze costano)</li>
      <li>Stack non-Microsoft</li>
    </ul>
  </div>
</div>
<p class="concept-text"><strong>Ricorda:</strong> se il vostro stack e Microsoft, Power Automate e la scelta naturale. Altrimenti, valutate Make o n8n per evitare lock-in.</p>`,
  },

  // 10. MEME Power Automate
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif', alt: 'Power Automate when it works' },
    caption: '"Power Automate quando il flusso funziona al primo tentativo"',
  },

  // 11. Google AI nel 2026
  {
    type: 'custom',
    layout: 'eco-map',
    heading: 'Google AI nel 2026',
    center: 'Gemini 2.5 Pro',
    nodes: [
      { icon: '', label: '1M token context' },
      { icon: '', label: 'NotebookLM' },
      { icon: '', label: 'Workspace AI' },
      { icon: '', label: 'Veo (video)' },
      { icon: '', label: 'Imagen 3 (immagini)' },
      { icon: '', label: 'AI Studio' },
    ],
  },

  // 12. Gemini in Google Workspace
  {
    type: 'concept',
    centered: true,
    heading: 'Gemini in Google Workspace',
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F4C4}</span> <strong>Docs:</strong> "Scrivi una proposta commerciale partendo da questi appunti" — genera, espande, riassume</li>
  <li><span class="icon">\u{1F4CA}</span> <strong>Sheets:</strong> "Crea un piano di progetto con timeline" — formule, tabelle pivot, grafici</li>
  <li><span class="icon">\u{1F4E7}</span> <strong>Gmail:</strong> "Rispondi ringraziando e proponendo un meeting" — contextual reply, tone adjustment</li>
  <li><span class="icon">\u{1F5BC}\uFE0F</span> <strong>Slides:</strong> "Genera immagini per questa presentazione" — Imagen integrato nelle slide</li>
</ul>
<p style="text-align:center; font-size:0.6em; color:var(--muted); margin-top:20px;">Vantaggi vs Copilot: costo inferiore, contesto piu lungo, multimodale nativo</p>
<p class="concept-text"><strong>In pratica:</strong> se usate Google Workspace, Gemini e gia integrato e costa meno di Copilot. Il contesto da 1M token lo rende ideale per documenti lunghi.</p>`,
  },

  // 13. NotebookLM: il tuo ricercatore AI
  {
    type: 'concept',
    heading: 'NotebookLM:\nil tuo ricercatore AI',
    content: `<p class="concept-text">
  <strong>Carica documenti</strong> — PDF, Google Docs, siti web, video YouTube. Fino a 50 fonti.
  <br><br>
  <strong>Fa ricerca per te</strong> — risposte con citazioni precise dalle tue fonti. Zero allucinazioni.
  <br><br>
  <strong>Genera podcast audio</strong> — due voci AI discutono i tuoi documenti. 10-15 minuti. Perfetto per ripassare.
  <br><br>
  <strong>Gratis</strong> — incluso nell'account Google. Nessun costo aggiuntivo.
</p>`,
    image: { src: 'https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif', alt: 'Research' },
  },

  // 14. Gemini vs ChatGPT vs Claude
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Gemini vs ChatGPT vs Claude',
    columns: ['', 'Gemini 2.5 Pro', 'ChatGPT (GPT-4o)', 'Claude (Opus 4)'],
    rows: [
      ['Forza', 'Context 1M, multimodale, gratis', 'Ecosistema plugin, GPTs, DALL-E', 'Ragionamento, codice, sicurezza'],
      ['Debolezza', 'Meno creativo, a volte generico', 'Costo elevato, privacy concerns', 'No generazione immagini, no plugin'],
      ['Best per', 'Ricerca su documenti lunghi', 'Task creativi e generali', 'Analisi complesse, coding, writing'],
      ['Prezzo', 'Gratis / $20 Advanced', '$20/mese Plus', '$20/mese Pro'],
    ],
    footer: '<strong>Takeaway:</strong> non esiste il "migliore" in assoluto. Gemini per ricerca e contesto lungo, ChatGPT per versatilita e plugin, Claude per ragionamento e codice.',
  },

  // 15. QUOTE
  {
    type: 'quote',
    text: 'The best AI tool is the one your team will actually use every day.',
    source: 'Ethan Mollick, Wharton Professor & AI Researcher',
  },

  // 16. Perplexity: il search AI
  {
    type: 'concept',
    heading: 'Perplexity:\nil search AI',
    content: `<p class="concept-text">
  <strong>Cos'\u00E8:</strong> motore di ricerca che risponde con fonti citate. Non genera: <em>trova e sintetizza</em>.
  <br><br>
  <strong>Per l'azienda:</strong> ricerca di mercato, analisi competitor, fact-checking in tempo reale.
  <br><br>
  <strong>Pro vs Google:</strong> risposte dirette, fonti verificabili, niente SEO spam. Meno rumore, piu segnale.
</p>`,
    image: { src: 'https://media.giphy.com/media/3oKIPnAiaMCJ8rJ1wk/giphy.gif', alt: 'Search' },
  },

  // 17. Cursor: scrivere codice con AI
  {
    type: 'concept',
    heading: 'Cursor:\nscrivere codice con AI',
    content: `<p class="concept-text">
  <strong>Cos'\u00E8:</strong> editor di codice (fork di VS Code) con AI integrata. Legge il tuo progetto, scrive codice, fa debug.
  <br><br>
  <strong>Per i non-dev:</strong> questo e il futuro. Chi sa "parlare" all'AI potra creare software senza essere programmatore.
  <br><br>
  <strong>Impatto:</strong> sviluppatori 2-5x piu produttivi. Junior che producono come senior. Il gap si riduce.
</p>`,
    image: { src: 'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif', alt: 'Coding' },
  },

  // 18. v0 by Vercel: UI dal prompt
  {
    type: 'concept',
    heading: 'v0 by Vercel:\nUI dal prompt',
    content: `<p class="concept-text">
  <strong>Cos'\u00E8:</strong> scrivi una descrizione testuale, ottieni un'interfaccia web funzionante. Gratis.
  <br><br>
  <strong>Esempio:</strong> "Crea una dashboard con grafico vendite, tabella clienti e filtro per data" \u2192 interfaccia completa in 30 secondi.
  <br><br>
  <strong>Per chi:</strong> product manager, designer, chiunque voglia prototipare velocemente senza aspettare il team dev.
</p>`,
    image: { src: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', alt: 'UI generation' },
  },

  // 19. Notion AI: knowledge management
  {
    type: 'concept',
    heading: 'Notion AI:\nknowledge management',
    content: `<p class="concept-text">
  <strong>Wiki aziendale potenziata:</strong> cerca e trova risposte nella knowledge base dell'azienda, non solo keyword.
  <br><br>
  <strong>Scrittura:</strong> genera report, riassumi meeting notes, traduci documenti — dentro Notion.
  <br><br>
  <strong>Q&A:</strong> "Qual era la decisione presa nel meeting del 15 marzo?" — risponde con link alla pagina.
</p>`,
    image: { src: 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif', alt: 'Knowledge' },
  },

  // 20. Make vs Zapier vs n8n
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Make vs Zapier vs n8n',
    columns: ['', 'Zapier', 'Make', 'n8n'],
    rows: [
      ['Facilita', '\u2B50\u2B50\u2B50\u2B50\u2B50', '\u2B50\u2B50\u2B50\u2B50', '\u2B50\u2B50\u2B50'],
      ['Potenza', '\u2B50\u2B50\u2B50', '\u2B50\u2B50\u2B50\u2B50', '\u2B50\u2B50\u2B50\u2B50\u2B50'],
      ['Prezzo', 'Da $20/mese', 'Da $9/mese', 'Gratis (self-hosted)'],
      ['Self-host', 'No', 'No', 'Si'],
      ['Best per', 'Automazioni semplici', 'Workflow visivi complessi', 'Dev team, massima flessibilita'],
    ],
    footer: '<strong>Ricorda:</strong> Zapier per semplicita, Make per workflow visivi complessi, n8n per massimo controllo e self-hosting. Il budget e il livello tecnico del team guidano la scelta.',
  },

  // 21. La mappa dei tool AI — 2026
  {
    type: 'concept',
    centered: true,
    heading: 'La mappa dei tool AI — 2026',
    content: `<div class="tool-map" style="gap:12px;">
  <div class="tool-category">
    <h4>\u{1F4AC} Chat</h4>
    <div class="tool-items">ChatGPT · Claude · Gemini · Copilot</div>
  </div>
  <div class="tool-category">
    <h4>\u{1F50D} Search</h4>
    <div class="tool-items">Perplexity · Bing AI · Google AI</div>
  </div>
  <div class="tool-category">
    <h4>\u{1F4BB} Coding</h4>
    <div class="tool-items">Cursor · GitHub Copilot · v0</div>
  </div>
  <div class="tool-category">
    <h4>\u26A1 Automazione</h4>
    <div class="tool-items">Zapier · Make · n8n · Power Automate</div>
  </div>
  <div class="tool-category">
    <h4>\u{1F3A8} Creative</h4>
    <div class="tool-items">Midjourney · DALL-E 3 · Sora · Runway</div>
  </div>
  <div class="tool-category">
    <h4>\u{1F4CB} Produttivita</h4>
    <div class="tool-items">Notion AI · NotebookLM · Gamma</div>
  </div>
</div>`,
  },

  // 22. DEMO — Power Automate
  {
    type: 'demo',
    heading: 'Automazione base con Power Automate',
    description: `Creiamo un flusso: nuova email con allegato \u2192 salva su SharePoint \u2192 notifica Teams.<br>
Dall'idea al workflow funzionante in 5 minuti.`,
    demoMaterial: {
      label: 'Checklist pre-demo (preparare PRIMA della lezione)',
      checklist: [
        'Account Microsoft 365 con licenza Power Automate (anche trial)',
        'Accesso a Outlook, SharePoint e Teams sullo stesso tenant',
        'Creare una cartella SharePoint di test: "Demo-Corso-AI"',
        'Creare un canale Teams di test: "Demo AI Corso"',
        'Preparare 2-3 email di test con allegati PDF da inviare durante la demo',
        'Verificare che il browser sia loggato su make.powerautomate.com',
        'Piano B: se M365 non disponibile, mostrare la demo con screenshot/video preparato',
      ],
      planB: 'Se non si ha accesso a M365: usare il template gratuito Power Automate "Save email attachments to OneDrive" come walkthrough visuale, mostrando i passaggi senza eseguire.',
    },
  },

  // 23. DEMO — NotebookLM
  {
    type: 'demo',
    heading: 'NotebookLM su documenti aziendali',
    description: `Carichiamo 3 documenti interni, facciamo domande, e generiamo<br>
un podcast audio che riassume i punti chiave.`,
    demoMaterial: {
      label: 'Documenti da caricare su NotebookLM',
      note: 'Usare gli stessi 3 report della demo Claude Projects (lezione 05) oppure i seguenti documenti specifici:',
      documents: [
        {
          filename: 'memo-strategia-digitale-2026.txt',
          content: `MEMO INTERNO — STRATEGIA DIGITALE 2026
Da: Direzione Generale
A: Tutti i responsabili di area
Data: 15 gennaio 2026

CONTESTO
L'azienda ha chiuso il 2025 con un fatturato di 45M euro (+8% vs 2024). La marginalita e rimasta stabile al 12%, ma i costi operativi sono cresciuti del 15%. E necessario un cambio di passo sulla digitalizzazione.

OBIETTIVI 2026
1. Ridurre i costi operativi del 10% tramite automazione
2. Implementare almeno 3 progetti AI in produzione entro Q3
3. Formare il 100% dei dipendenti sugli strumenti AI base
4. Digitalizzare il processo ordini (oggi 60% cartaceo)

BUDGET ALLOCATO
- Formazione AI: 120.000 euro
- Licenze tool AI: 85.000 euro
- Consulenza esterna: 150.000 euro
- Infrastruttura cloud: 200.000 euro
Totale: 555.000 euro (1.2% del fatturato)

RISCHI IDENTIFICATI
- Resistenza del personale senior (eta media 48 anni)
- GDPR compliance per dati clienti processati da AI
- Dipendenza da fornitori cloud USA
- Possibile impatto su 15-20 posizioni ripetitive (piano di riqualificazione necessario)

PROSSIMI PASSI
- Febbraio: selezione fornitori e kick-off formazione
- Marzo: primi POC su customer service e analisi ordini
- Giugno: go-live primo progetto AI
- Settembre: assessment risultati e piano 2027`,
        },
        {
          filename: 'report-customer-satisfaction-2025.txt',
          content: `REPORT SODDISFAZIONE CLIENTI — ANNO 2025
Campione: 2.400 clienti (su 8.500 attivi)
Metodologia: NPS + survey strutturata

NET PROMOTER SCORE (NPS)
- NPS 2025: 42 (vs 38 nel 2024, +4 punti)
- Benchmark settore: 35
- Promotori (9-10): 52%
- Passivi (7-8): 28%
- Detrattori (0-6): 20%

PUNTI DI FORZA (top 3)
1. Qualita del prodotto: 4.3/5
2. Competenza del team commerciale: 4.1/5
3. Rapporto qualita-prezzo: 3.9/5

AREE DI MIGLIORAMENTO (top 3)
1. Tempi di risposta assistenza: 3.1/5 (target: 4.0)
   - Tempo medio prima risposta: 14 ore (target: 4 ore)
   - Il 35% dei ticket richiede 3+ interazioni per la risoluzione
2. Facilita d'uso del portale online: 3.2/5
   - Il 45% preferisce ancora chiamare per fare un ordine
   - Mobile experience giudicata "scarsa" dal 60% degli utenti
3. Proattivita nella comunicazione: 3.0/5
   - I clienti vogliono aggiornamenti automatici sullo stato ordine
   - Solo il 22% riceve notifiche di spedizione

VERBATIM SIGNIFICATIVI
"Il prodotto e ottimo ma quando ho un problema devo aspettare giorni per una risposta"
"Perche non posso tracciare il mio ordine online come faccio su Amazon?"
"Il vostro commerciale e bravissimo, ma il sito sembra del 2010"

RACCOMANDAZIONI
1. Implementare chatbot AI per ridurre tempi di prima risposta a <1 ora
2. Rinnovare il portale clienti con focus mobile
3. Attivare notifiche automatiche su stato ordine e spedizione
4. Creare area self-service per FAQ e documentazione tecnica`,
        },
        {
          filename: 'analisi-competitor-q4-2025.txt',
          content: `ANALISI COMPETITIVA — Q4 2025
Preparato da: Marketing & Strategy

PANORAMICA MERCATO
- Mercato totale: ~500M euro (nostro segmento)
- Nostra quota: 9% (stabile)
- Top 3 competitor coprono il 55% del mercato

COMPETITOR A — "TechFlow Solutions"
- Quota mercato: 22% (leader)
- Fatturato stimato: 110M euro
- Punti di forza: piattaforma cloud avanzata, forte R&D, brand riconosciuto
- Debolezze: prezzi alti (+30% vs noi), servizio clienti standardizzato
- Novita 2025: hanno lanciato assistente AI integrato nel loro portale
- Minaccia: stanno acquisendo PMI nel nostro segmento

COMPETITOR B — "DataPrime"
- Quota mercato: 18%
- Fatturato stimato: 90M euro
- Punti di forza: prezzo aggressivo, forte su e-commerce
- Debolezze: qualita prodotto inferiore, alto churn rate (22%)
- Novita 2025: partnership con grande retailer, espansione in Spagna
- Minaccia: guerra di prezzo in corso, margini in compressione

COMPETITOR C — "InnovaGroup"
- Quota mercato: 15%
- Fatturato stimato: 75M euro
- Punti di forza: innovazione rapida, team giovane, forte su social
- Debolezze: poca presenza enterprise, supporto post-vendita debole
- Novita 2025: round di finanziamento 20M, assunzione 50 persone
- Minaccia: crescita veloce (+40% YoY), ci stanno superando su clienti <50 dip.

IMPLICAZIONI STRATEGICHE
1. TechFlow ha AI integrata: dobbiamo accelerare i nostri progetti AI
2. DataPrime compete sul prezzo: non possiamo seguirli, puntare su valore
3. InnovaGroup cresce su PMI: proteggere il segmento con offerta dedicata
4. Nessun competitor ha un servizio clienti AI: opportunita di differenziazione`,
        },
      ],
      testQuestions: [
        'Quali sono i principali problemi emersi dalla survey clienti?',
        'Quanto budget e stato allocato per la strategia digitale 2026?',
        'Chi e il nostro competitor piu pericoloso e perche?',
        'Come potremmo usare l\'AI per risolvere il problema dei tempi di risposta?',
        'Genera un podcast audio che riassuma i 3 documenti (funzione NotebookLM)',
      ],
    },
  },

  // 24. HANDS-ON
  {
    type: 'hands-on',
    heading: 'Confronto piattaforme sullo stesso task',
    timer: '90 minuti',
    instructions: [
      '<strong>Task:</strong> "Riassumi il documento qui sotto e scrivi un\'email con i 5 punti chiave al tuo manager"',
      '<strong>Fallo con:</strong> ChatGPT, Claude, Gemini, e (se Microsoft-shop) Copilot',
      '<strong>Valuta:</strong> qualita output, facilita d\'uso, velocita, costo',
      '<strong>Bonus:</strong> prova lo stesso task su NotebookLM e Perplexity',
      '<strong>Output:</strong> tabella di confronto personale con il tuo "vincitore"',
    ],
    handsOnMaterial: {
      label: 'Documento condiviso per l\'esercizio (tutti usano lo stesso)',
      text: `RELAZIONE TRIMESTRALE — Q4 2025
Direzione Operativa — TechCorp Italia S.r.l.

1. PERFORMANCE FINANZIARIA
Il Q4 2025 si chiude con ricavi di 12.8M euro (+11% vs Q4 2024). Il margine operativo e al 14.2%, in miglioramento rispetto al 12.1% del trimestre precedente. I costi del personale sono aumentati del 6% a causa di 12 nuove assunzioni nel reparto tech. I costi infrastruttura cloud sono cresciuti del 22%, principalmente per il nuovo ambiente di staging e i test AI.

2. PRODOTTO E SVILUPPO
Rilasciate 3 major release della piattaforma. La funzionalita di ricerca AI (beta) ha registrato un tasso di adozione del 34% tra gli utenti enterprise. Tempo medio di risposta della piattaforma migliorato del 18% grazie alla migrazione a microservizi. Il backlog e stato ridotto del 25% (da 340 a 255 ticket). Criticita: 2 incidenti di severita alta in novembre (downtime totale: 4.2 ore).

3. COMMERCIALE
42 nuovi clienti acquisiti (target: 50). Churn rate stabile al 4.5% (benchmark settore: 8%). Il deal medio e cresciuto del 15% (da 32K a 37K euro/anno). Pipeline Q1 2026: 3.2M euro (55% probabilita media). Il settore manifatturiero e il verticale con crescita piu rapida (+28% YoY).

4. CUSTOMER SUCCESS
NPS: 42 (stabile). Tempo medio di risoluzione ticket: 12 ore (target: 8 ore). Il chatbot AI pilota ha gestito il 22% dei ticket di primo livello con un CSAT di 3.8/5. Il 78% dei clienti enterprise ha rinnovato con upsell. Il team ha condotto 180 sessioni di onboarding (vs 145 nel Q3).

5. PERSONE E ORGANIZZAZIONE
Headcount: 187 (+12 nel trimestre). Tempo medio di assunzione: 35 giorni (target: 28). Completato il primo ciclo di formazione AI: 145 dipendenti formati (78%). Engagement score (survey interna): 7.2/10 (vs 6.8 nel Q3). 3 dimissioni nel trimestre (2 junior dev, 1 marketing).

6. PRIORITA Q1 2026
- Go-live chatbot AI per tutti i clienti (target: febbraio)
- Lancio funzionalita di analytics predittivo
- Hiring: 8 posizioni aperte (4 dev, 2 sales, 1 PM, 1 data scientist)
- Preparazione per audit SOC2 Type II (marzo)
- Kick-off partnership strategica con distributore DACH`,
      prompt: 'Riassumi questa relazione trimestrale e scrivi un\'email al tuo manager con i 5 punti chiave, evidenziando successi, criticita e azioni prioritarie per il prossimo trimestre.',
    },
  },

  // 25. RECAP
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Power Automate: potente se sei nell\'ecosistema Microsoft',
      'Gemini + NotebookLM: l\'alternativa Google, gratis e potente',
      'Non esiste il tool perfetto — esiste quello giusto per il tuo contesto',
      'Perplexity, Cursor, v0: tool verticali che fanno UNA cosa molto bene',
      'La prossima lezione: agenti AI + workflow avanzati con Zapier e n8n',
    ],
  },

  // 26. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Power Automate — make.powerautomate.com', url: 'https://make.powerautomate.com' },
      { label: 'NotebookLM — notebooklm.google.com', url: 'https://notebooklm.google.com' },
      { label: 'Perplexity — perplexity.ai', url: 'https://perplexity.ai' },
      { label: 'Cursor — cursor.sh', url: 'https://cursor.sh' },
      { label: 'v0 by Vercel — v0.dev', url: 'https://v0.dev' },
    ],
  },
]
