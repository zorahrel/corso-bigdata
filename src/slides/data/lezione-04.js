export const meta = {
  lessonNumber: '04',
  title: 'Piattaforme AI: il tour completo',
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '04',
    title: 'Piattaforme AI:\nil tour completo',
    subtitle: 'Mercoledì 01/04/2026 · 6h in presenza · Blocco PIATTAFORME',
    style: { color: 'var(--secondary)' },
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '🟢', text: 'ChatGPT: Canvas, GPTs custom, API, Excel' },
      { emoji: '🟠', text: 'Claude: Projects & Artifacts, MCP, plugin Office' },
      { emoji: '🔵', text: 'Gemini: Personal Intelligence, Deep Research, NotebookLM' },
      { emoji: '🟣', text: 'Microsoft: Copilot, Power Automate' },
      { emoji: '⚡', text: 'Tool emergenti: Perplexity, Cursor, v0.dev' },
      { emoji: '🔥', text: 'Demo live comparativa: stesso task, 3 piattaforme' },
    ],
  },

  // 3. Meme - troppi tool AI
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif', alt: 'Dog confused WHAT' },
    caption: '"Io che cerco di scegliere tra ChatGPT, Claude, Gemini e Copilot"',
  },

  // ═══════════════════════════════════════
  // SEZIONE 1: ChatGPT
  // ═══════════════════════════════════════

  // 4. ChatGPT: l'ecosistema 2026
  {
    type: 'concept',
    heading: 'ChatGPT: l\'ecosistema 2026',
    content: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #10a37f;">
    <strong style="color:#10a37f;">🧠 Modelli</strong><br>
    <span style="font-size:0.5em;">GPT-4o · GPT-5.2 <span style="background:#10a37f;color:white;padding:1px 4px;border-radius:3px;font-size:0.8em;">FREE</span> · GPT-5.4 · o3 · o4-mini</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #f59e0b;">
    <strong style="color:#f59e0b;">🎨 Immagini & Video</strong><br>
    <span style="font-size:0.5em;">DALL-E 3 · GPT-4o vision · Sora</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #6c63ff;">
    <strong style="color:#6c63ff;">🔧 Infrastruttura</strong><br>
    <span style="font-size:0.5em;">API · Playground · Assistants · GPT Store · 60+ app connectors</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #ef4444;">
    <strong style="color:#ef4444;">📊 Numeri</strong><br>
    <span style="font-size:0.5em;">300M utenti/sett · 92% Fortune 500 · 3M+ GPTs</span>
  </div>
</div>
<p style="font-size:0.48em;color:var(--muted);margin-top:10px;text-align:center;">ChatGPT 2026 non è più un chatbot — è una piattaforma: Codex (coding agentico), Deep Research, Record Mode (trascrizione meeting), Memory persistente, Shopping assistance.</p>`,
    footer: '<strong>In pratica:</strong> OpenAI non è solo ChatGPT — è un ecosistema completo per testo, immagini, audio, video e API.',
  },

  // 5. Canvas: ora GRATUITO per tutti
  {
    type: 'concept',
    heading: '🆓 Canvas: ora gratuito per tutti',
    content: `Un editor inline dove <strong>tu e l'AI lavorate sullo stesso documento</strong> in tempo reale.
<br><br>
Da marzo 2026: Canvas è disponibile anche nel piano Free — non più riservato a Plus/Pro.
<br><br>
<strong>Cosa puoi fare:</strong><br>
• Editing collaborativo di testi, codice, report<br>
• Comandi inline: accorcia, espandi, cambia tono, traduci<br>
• Versioning: torna indietro tra le versioni<br>
• Sandbox React/HTML: esegue codice con tutti i pacchetti npm
<br><br>
<strong>vs Artifacts (Claude):</strong> Canvas → editing collaborativo | Artifacts → genera app/visualizzazioni standalone`,
    footer: '<strong>Takeaway:</strong> Canvas trasforma ChatGPT da "genera e incolla" a "lavoriamo insieme". Ora è gratis — non ci sono scuse per non provarlo.',
  },

  // 5b. Canvas: come si usa in 3 step
  {
    type: 'hands-on',
    heading: 'Canvas in pratica: 3 step',
    timer: '⏱ 5 minuti per provare',
    instructions: [
      '<strong>Step 1 — Attiva Canvas:</strong> Apri chatgpt.com → scrivi "use canvas" oppure chiedi qualcosa che genera >10 righe di testo/codice. Si apre una vista split: chat a sinistra, editor a destra.',
      '<strong>Step 2 — Editing diretto:</strong> Clicca sull\'editor e modifica direttamente il testo. Seleziona un paragrafo → appare un popup per chiedere modifiche specifiche ("rendi più conciso", "traduci in inglese").',
      '<strong>Step 3 — Menu scorciatoie:</strong> Clicca l\'icona ✨ in basso a destra → scegli: regola lunghezza, cambia tono, debug codice, suggerisci edit. Per tornare indietro usa il bottone "back" (version history).',
      '<strong>Prova ora:</strong> Scrivi "use canvas — scrivi un\'email di follow-up per un cliente che non risponde da 2 settimane". Poi seleziona un paragrafo e chiedi "rendi più assertivo".',
    ],
  },

  // 6. GPTs custom: la killer feature
  {
    type: 'concept',
    heading: 'GPTs custom: la killer feature',
    content: `Un <strong>GPT custom</strong> è un ChatGPT specializzato: istruzioni + knowledge + azioni, zero codice.
<br><br>
<strong>Come si costruisce (5 step):</strong><br>
1. <strong>Vai su</strong> chatgpt.com → sidebar → "Explore GPTs" → "Create"<br>
2. <strong>Istruzioni:</strong> scrivi ruolo, tono, limiti, cosa NON deve fare<br>
3. <strong>Knowledge:</strong> carica PDF, CSV, documenti (knowledge base)<br>
4. <strong>Capabilities:</strong> attiva/disattiva Web Browsing, DALL-E, Code Interpreter<br>
5. <strong>Pubblica:</strong> Privato, Link-only, o Public nel GPT Store
<br><br>
<strong>3 milioni di GPTs</strong> già creati — intere aziende li usano per onboarding, FAQ, supporto clienti.`,
    footer: '<strong>Il punto chiave:</strong> un GPT custom è il modo più veloce per creare un assistente AI specializzato. In 10 minuti hai un prototipo funzionante, senza scrivere codice.',
  },

  // 6b. GPTs: esempio aziendale concreto
  {
    type: 'concept',
    heading: 'GPT aziendale: esempio concreto',
    content: `<div style="background:var(--surface);padding:16px;border-radius:8px;border-left:3px solid #10a37f;margin-bottom:12px;">
  <strong style="color:#10a37f;">📋 "Contract Summarizer" — per un ufficio legale</strong>
</div>
<strong>Instructions:</strong> <em>"Sei un assistente legale. Riassumi contratti in italiano, evidenzia clausole rischiose, calcola scadenze. NON dare mai pareri legali — suggerisci solo di consultare un avvocato."</em>
<br><br>
<strong>Knowledge:</strong> Template contratti standard dell'azienda (PDF), lista clausole pericolose (CSV)
<br><br>
<strong>Capabilities:</strong> ✅ Code Interpreter (per calcoli scadenze) · ✅ Web Browsing (per normativa aggiornata)
<br><br>
<strong>Conversation starters:</strong><br>
• "Riassumi questo contratto in 5 punti"<br>
• "Ci sono clausole rischiose?"<br>
• "Quando scade questo accordo?"
<br><br>
<strong>Risultato:</strong> L'intero ufficio legale usa un GPT che conosce i loro template. Tempo di review ridotto del 60%.`,
    footer: '<strong>Prova tu:</strong> pensa al compito più ripetitivo nel tuo lavoro. Probabilmente un GPT custom lo può fare.',
  },

  // 7. ChatGPT for Excel
  {
    type: 'concept',
    heading: '📊 ChatGPT for Excel: AI nelle celle',
    content: `<div style="background:var(--surface);padding:16px;border-radius:8px;border-left:3px solid #10a37f;margin-bottom:12px;">
  <strong>Add-in ufficiale OpenAI per Excel</strong> — powered by GPT-5.4 <span style="font-size:0.55em;background:#f59e0b;color:white;padding:2px 6px;border-radius:4px;">BETA marzo 2026</span>
</div>
<strong>Cosa può fare concretamente:</strong><br>
• <strong>Costruire modelli:</strong> "Crea un modello di budget per un progetto IT" → Excel si popola<br>
• <strong>Scenario analysis:</strong> "Cosa succede se il fatturato cala del 20%?" → ricalcola tutto<br>
• <strong>Spiegare formule:</strong> "Spiega come funziona questa formula" → plain Italian<br>
• <strong>Ragionare tra fogli:</strong> capisce come fogli e formule si collegano tra loro
<br><br>
<strong>Trasparenza totale:</strong><br>
• Spiega cosa sta facendo · Linka le celle che referenzia · Chiede permesso prima di modificare · Puoi annullare ogni modifica
<br><br>
<strong>Benchmark:</strong> performance su task finanziari da 43.7% (GPT-5) a 87.3% (GPT-5.4 Thinking)`,
    footer: '<strong>In pratica:</strong> non è magia nascosta — le formule restano native Excel. Puoi tracciare assunzioni e verificare tutto.',
  },

  // 8. API overview
  {
    type: 'concept',
    heading: '🔌 API OpenAI: per sviluppatori',
    content: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
  <div style="background:var(--surface);padding:16px;border-radius:8px;">
    <strong style="color:#10a37f;">Playground</strong>
    <ul style="font-size:0.48em;margin:8px 0 0;padding-left:16px;">
      <li>platform.openai.com/playground</li>
      <li>Testa API senza scrivere codice</li>
      <li>Scegli modello, temperatura, system prompt</li>
      <li>Perfetto per prototipare</li>
    </ul>
  </div>
  <div style="background:var(--surface);padding:16px;border-radius:8px;">
    <strong style="color:#f59e0b;">Pricing (per 1M token)</strong>
    <ul style="font-size:0.48em;margin:8px 0 0;padding-left:16px;">
      <li><strong>GPT-5.4:</strong> $2.50 in / $15 out</li>
      <li><strong>GPT-5.4-mini:</strong> $0.75 in / $4.50 out</li>
      <li><strong>GPT-5.4-nano:</strong> $0.20 in / $1.25 out</li>
      <li>Cached input: sconto 90%!</li>
    </ul>
  </div>
</div>
<p style="font-size:0.48em;color:var(--muted);margin-top:10px;text-align:center;">Function calling: l'AI decide quale tool usare, il tuo codice esegue. Context window fino a 1M token.</p>`,
    footer: '<strong>Calcolo rapido:</strong> 1000 query da 500 token con GPT-5.4-nano = circa $0.10. L\'AI via API costa molto meno di quanto pensi.',
  },

  // ═══════════════════════════════════════
  // SEZIONE 2: Claude
  // ═══════════════════════════════════════

  // 9. Claude: l'alternativa che convince
  {
    type: 'concept',
    heading: 'Claude: l\'alternativa che convince',
    content: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #d97706;">
    <strong style="color:#d97706;">🏢 Anthropic</strong><br>
    <span style="font-size:0.5em;">300K+ clienti business · $14B revenue run-rate</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #6c63ff;">
    <strong style="color:#6c63ff;">🧠 Modelli</strong><br>
    <span style="font-size:0.5em;">Opus 4.6 (top) · Sonnet 4.5 (fast) · Haiku 4.5 (cheap)</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #00d4aa;">
    <strong style="color:#00d4aa;">📏 Context</strong><br>
    <span style="font-size:0.5em;">200K token — legge interi documenti, report, contratti</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #ef4444;">
    <strong style="color:#ef4444;">💪 Punti di forza</strong><br>
    <span style="font-size:0.5em;">Scrittura · analisi lunga · ragionamento · sicurezza</span>
  </div>
</div>
<p style="font-size:0.5em;color:var(--muted);margin-top:12px;text-align:center;"><em>Risposte più naturali e meno robottiche di GPT, soprattutto per testi lunghi.</em></p>`,
    footer: '<strong>Takeaway:</strong> Claude non è "il secondo classificato" — in molti task di scrittura e analisi è il migliore. Conoscere entrambi è un vantaggio competitivo.',
  },

  // 10. Projects: come si crea step-by-step
  {
    type: 'concept',
    heading: '🆓 Claude Projects: workspace con memoria',
    content: `Da marzo 2026, Projects è nel <strong>piano gratuito</strong>. È un workspace persistente che mantiene il contesto tra sessioni.
<br><br>
<strong>Come si crea un Project (5 step):</strong><br>
1. Vai su <strong>claude.ai</strong> → sidebar sinistra → "Projects" → "New Project"<br>
2. Dai un <strong>nome e descrizione</strong> (es. "Analisi Vendite Q1")<br>
3. Carica file nella <strong>Project Knowledge</strong>: PDF, CSV, TXT, codice, immagini<br>
4. Aggiungi <strong>Custom Instructions</strong>: il system prompt che Claude segue sempre<br>
5. Ogni nuova chat nel progetto ha <strong>accesso automatico</strong> a tutti i file e istruzioni
<br><br>
<strong>Esempio:</strong> crei il progetto "Report Mensile", carichi i dati di vendita, scrivi nelle istruzioni "rispondi sempre con grafici e bullet point". Ogni chat futura parte già informata.`,
    footer: '<strong>Free vs Pro:</strong> Free = ~20-40 messaggi/sessione (reset ogni 5h), modelli Sonnet e Haiku. Pro ($20/mese) = 5x messaggi + Opus 4.6 + memoria persistente.',
  },

  // 11. Artifacts: app senza codice
  {
    type: 'concept',
    heading: '🆓 Artifacts: genera app interattive',
    content: `<strong>Artifacts</strong> genera contenuti interattivi in un pannello dedicato accanto alla chat — senza scrivere una riga di codice.
<br><br>
<strong>Tipi di artifact:</strong><br>
• <strong>React components:</strong> calcolatori, dashboard, giochi, quiz interattivi<br>
• <strong>Diagrammi Mermaid:</strong> flowchart, organigrammi, sequenze<br>
• <strong>Documenti:</strong> report formattati, presentazioni<br>
• <strong>SVG:</strong> grafiche vettoriali, loghi, illustrazioni
<br><br>
<strong>Esempi concreti già testati:</strong><br>
• "Crea un calcolatore di mutuo interattivo" → slider per importo, tasso, durata<br>
• "Dashboard vendite con grafico a barre e filtri per regione"<br>
• "Quiz di 10 domande sul mio PDF" → quiz interattivo con punteggio<br>
• "Gioco del snake" → sì, funziona davvero 🐍
<br><br>
Puoi iterare: "cambia i colori", "aggiungi un export CSV", "fai i bottoni più grandi". Poi <strong>pubblica e condividi</strong> con un link.`,
    footer: '<strong>Prova ora:</strong> vai su claude.ai e scrivi "Crea un calcolatore che converte temperature Celsius/Fahrenheit con un grafico". Guarda cosa succede.',
  },

  // 12. MCP & Claude in Office
  {
    type: 'concept',
    heading: 'MCP & Claude in Excel/PowerPoint',
    content: `<strong>MCP (Model Context Protocol)</strong> — standard aperto di Anthropic per connettere AI a qualsiasi sistema.<br>
• Database, file system, API, tool aziendali<br>
• Già adottato da: VS Code, JetBrains, Zed, n8n<br>
• Idea: un protocollo universale come USB-C, ma per l'AI
<br><br>
<strong>🆕 Claude in Excel & PowerPoint</strong> — add-in Office nativi:<br>
• <strong>Conversazione cross-app:</strong> analizzi dati in Excel → chiedi a Claude di creare le slide → tutto nella stessa chat<br>
• <strong>Claude Skills:</strong> azioni riutilizzabili, salvabili e condivisibili nel team<br>
• Attiva "Let Claude work across files" nelle impostazioni<br>
<br>
<strong>Esempio pratico:</strong> Analista apre Excel con vendite Q1 → "Analizza i trend" → "Ora crea una presentazione PowerPoint con i risultati" → Claude legge i dati e genera le slide.`,
    footer: '<strong>Il punto chiave:</strong> MCP è la visione di un\'AI che si connette a tutto. I plugin Office sono il primo passo concreto. Disponibili per Pro/Max/Team/Enterprise.',
  },

  // ═══════════════════════════════════════
  // SEZIONE 3: Gemini
  // ═══════════════════════════════════════

  // 13. Gemini: Google Personal Intelligence
  {
    type: 'concept',
    heading: 'Gemini: Google Personal Intelligence',
    content: `Da gennaio 2026, Gemini diventa <strong>Personal Intelligence</strong> — si connette ai tuoi dati Google. <strong>Da marzo 2026: gratis per tutti.</strong>
<br><br>
<strong>Come si attiva:</strong> Impostazioni Gemini → attiva Personal Intelligence → scegli app da connettere
<br><br>
<strong>Accesso a:</strong> Gmail, Google Photos, YouTube, Search, Calendar, Drive<br>
<strong>Esempi concreti:</strong><br>
• "Quando parte il mio volo?" → cerca nella mail di conferma<br>
• "Riassumi le email importanti di questa settimana" → analizza Gmail<br>
• "Mostrami le foto della vacanza in Sicilia" → accede a Google Photos
<br><br>
<strong>Gemini Drops (marzo 2026):</strong><br>
• Trasferimento chat history da altri AI (es. ChatGPT → Gemini)<br>
• Gemini Live 3.1: conversazioni vocali più fluide, contesto 2x<br>
• Lyria 3 Pro: generazione musica fino a 3 minuti`,
    footer: '<strong>Takeaway:</strong> Gemini non compete solo sulla qualità del modello — compete sull\'accesso ai tuoi dati. Se usi Google, è l\'AI che ti conosce meglio.',
  },

  // 14. Deep Research: l'agente ricercatore
  {
    type: 'concept',
    heading: '🔍 Deep Research: l\'agente ricercatore',
    content: `<strong>Gemini Deep Research</strong> esplora autonomamente centinaia di siti web per generare report approfonditi.
<br><br>
<strong>Come funziona (step-by-step):</strong><br>
1. Vai su <strong>gemini.google.com/deepresearch</strong><br>
2. Inserisci la domanda (es. "Confronta i 3 principali framework Python per data science nel 2026")<br>
3. Deep Research genera un <strong>piano di ricerca</strong> suddiviso in punti — puoi modificarlo<br>
4. Approva → l'agente esplora il web autonomamente (vedi il ragionamento in tempo reale)<br>
5. Genera un <strong>report multi-pagina con fonti citate</strong>
<br><br>
<strong>Bonus con Workspace:</strong> può accedere anche a Gmail, Drive, Chat per combinare dati web pubblici + dati interni aziendali.
<br><br>
<strong>Output:</strong> puoi trasformare il report in Canvas interattivo, audio overview, o quiz.`,
    footer: '<strong>Gratuito</strong> su gemini.google.com/deepresearch. Perfetto per: analisi competitive, due diligence, report di mercato.',
  },

  // 15. NotebookLM: il tool più sottovalutato
  {
    type: 'concept',
    heading: '🎧 NotebookLM: podcast AI dai tuoi documenti',
    content: `<strong>NotebookLM</strong> è il tool Google più sottovalutato: carica documenti → l'AI diventa esperta di quei contenuti. <strong>Completamente gratuito.</strong>
<br><br>
<strong>Come generare un podcast (step-by-step):</strong><br>
1. Vai su <strong>notebooklm.google.com</strong> → "Nuovo notebook"<br>
2. <strong>Carica fonti:</strong> PDF, Google Docs, URL di siti web, video YouTube, testo (fino a 50 fonti, 500K parole/fonte)<br>
3. <strong>Chat Q&A:</strong> fai domande → risposte con citazioni delle fonti originali<br>
4. <strong>Audio Overview:</strong> clicca a destra → "Generate" → scegli formato:<br>
&nbsp;&nbsp;• Deep Dive (2 host AI discutono in profondità)<br>
&nbsp;&nbsp;• Briefing (sommario conciso) · Lecture (formato lezione) · Custom<br>
5. <strong>Ascolta:</strong> in 2-5 minuti hai un podcast professionale sui TUOI documenti
<br><br>
<strong>Perfetto per:</strong> formazione aziendale, onboarding nuovi dipendenti, studio, preparazione meeting.`,
    footer: '<strong>Demo obbligatoria:</strong> prepara 3-4 articoli di settore, caricali su NotebookLM e fai ascoltare il podcast alla classe. Momento "wow" garantito.',
  },

  // ═══════════════════════════════════════
  // SEZIONE 4: Microsoft
  // ═══════════════════════════════════════

  // 16. Microsoft Copilot: i numeri
  {
    type: 'stats',
    heading: 'Microsoft Copilot: i numeri',
    stats: [
      { value: 41, suffix: '%', label: 'Adoption tra clienti M365 enterprise' },
      { value: 4.7, suffix: 'M', label: 'Abbonati GitHub Copilot (+75% YoY)' },
      { value: 77, suffix: 'K', label: 'Clienti enterprise GitHub Copilot' },
      { value: 7800, suffix: '$', label: 'ROI medio per dipendente/anno' },
    ],
    footer: 'Copilot non è un esperimento: è lo strumento AI più adottato in ambito enterprise. Fonte: Microsoft Q1 2026, AmplifAI.',
  },

  // 17. Copilot: cosa fa CONCRETAMENTE in Office
  {
    type: 'concept',
    heading: 'Copilot in Office: cosa fa davvero',
    content: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #0078d4;">
    <strong style="color:#0078d4;">📝 Word</strong><br>
    <span style="font-size:0.48em;">• "Crea una proposta commerciale per [cliente]" → documento completo<br>
    • Seleziona un paragrafo → "riscrivi in tono più formale"<br>
    • Documento 30 pagine → "riassumi i punti chiave"<br>
    • <strong>Agent Mode:</strong> edita e formatta autonomamente</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #217346;">
    <strong style="color:#217346;">📊 Excel</strong><br>
    <span style="font-size:0.48em;">• "Trend vendite ultimi 6 mesi?" → grafici + insight<br>
    • "Calcola margine lordo per prodotto" → scrive la formula<br>
    • "Grafico a barre vendite per regione" → lo genera<br>
    • <strong>Python in Excel:</strong> script per analisi avanzate</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #b7472a;">
    <strong style="color:#b7472a;">📊 PowerPoint</strong><br>
    <span style="font-size:0.48em;">• "Presentazione digital marketing, 10 slide" → genera tutto<br>
    • "Crea slide da questo documento Word" → trasforma<br>
    • Suggerisce layout, immagini, transizioni<br>
    • Genera <strong>speaker notes</strong> automatiche</span>
  </div>
  <div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #0072c6;">
    <strong style="color:#0072c6;">📧 Teams & Outlook</strong><br>
    <span style="font-size:0.48em;">• Teams: riassume riunioni, genera action items<br>
    • "Cosa mi sono perso?" → recap della call<br>
    • Outlook: draft email, riassumi thread lunghi<br>
    • Suggerisce risposte intelligenti</span>
  </div>
</div>`,
    footer: '<strong>Vantaggio unico:</strong> non serve cambiare tool. L\'AI è dove lavori già. Se la tua azienda usa M365, Copilot è a un click.',
  },

  // 18. Power Automate + AI Builder
  {
    type: 'concept',
    heading: 'Power Automate + AI Builder',
    content: `<strong>Power Automate</strong> = automazione low-code · <strong>AI Builder</strong> = AI nei flussi (GPT, OCR, classificazione)
<br><br>
<strong>5 flussi AI concreti che puoi creare oggi:</strong>
<br><br>
<div style="font-size:0.48em;">
📧 <strong>Triage email:</strong> email arriva → AI classifica sentiment → se negativo, crea ticket urgente in Teams<br><br>
📄 <strong>Estrazione fatture:</strong> PDF fattura → AI estrae importo, data, fornitore → salva in SharePoint<br><br>
💬 <strong>Risposte automatiche:</strong> cliente invia richiesta → AI genera bozza risposta con GPT → invia per approvazione<br><br>
⚠️ <strong>Analisi rischi:</strong> descrizione progetto → AI genera lista rischi potenziali → salva in Planner<br><br>
🌍 <strong>Traduzione:</strong> documento caricato → Power Automate rileva lingua → AI traduce → salva versione tradotta
</div>`,
    footer: '<strong>Come funziona:</strong> Trigger (evento) → Azione AI Builder (modello AI) → Azione successiva (salva, notifica, crea). 1000+ connettori disponibili.',
  },

  // 19. Meme - Copilot già installato
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', alt: 'Shocked' },
    caption: '"Quando scopri che il tuo abbonamento M365 include già un\'AI e non lo sapevi"',
  },

  // ═══════════════════════════════════════
  // SEZIONE 5: Tool Emergenti
  // ═══════════════════════════════════════

  // 20. Perplexity: ricerca AI con fonti
  {
    type: 'concept',
    heading: '🔍 Perplexity: Google killer?',
    content: `<strong>Motore di ricerca AI</strong> che risponde a domande complesse con fonti citate. Non "inventa" — cerca e sintetizza.
<br><br>
<strong>Quick Search vs Pro Search:</strong>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px;">
  <div style="background:var(--surface);padding:12px;border-radius:8px;">
    <strong>Quick Search</strong> <span style="font-size:0.55em;background:#10a37f;color:white;padding:2px 6px;border-radius:4px;">ILLIMITATA</span><br>
    <span style="font-size:0.48em;">Risposta rapida con modello base.<br>
    Esempio: "Cos'è Kubernetes?" → risposta in 5 secondi con 3-4 fonti</span>
  </div>
  <div style="background:var(--surface);padding:12px;border-radius:8px;">
    <strong>Pro Search</strong> <span style="font-size:0.55em;background:#f59e0b;color:white;padding:2px 6px;border-radius:4px;">3-5/GIORNO FREE</span><br>
    <span style="font-size:0.48em;">Multi-step, fa follow-up automatici, usa GPT-4/Claude.<br>
    Esempio: "Confronta pricing AWS vs Azure per 10K utenti" → tabella comparativa dettagliata</span>
  </div>
</div>
<br>
<strong>Quando usare Perplexity vs ChatGPT:</strong><br>
• <strong>Perplexity:</strong> quando servono fatti verificabili con fonti (ricerca, fact-checking, confronti)<br>
• <strong>ChatGPT:</strong> quando serve creatività, editing, generazione (testi, codice, immagini)`,
    footer: '<strong>Pro ($20/mese):</strong> 300+ Pro Search/giorno, upload illimitati, accesso a tutti i modelli. Ma il free tier è già molto utile.',
  },

  // 21. Cursor & v0.dev: tool per developer
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Cursor & v0.dev: AI per chi sviluppa',
    features: [
      { icon: '💻', title: 'Cursor', description: 'Fork di VS Code AI-native. Capisce l\'intero progetto (non solo singole righe). Agent Mode: "aggiungi autenticazione" → modifica più file e testa. Tab completions predittive. $20/mese (Pro) — free tier limitato.' },
      { icon: '🎨', title: 'v0.dev', description: 'Da Vercel. Descrivi un\'interfaccia → genera React + Tailwind funzionante. "Dashboard ordini con tabella e filtri" → componente pronto. Può generare da screenshot. Deploy su Vercel in un click.' },
      { icon: '🔨', title: 'Bolt.new / Lovable / Replit', description: 'App builder AI: descrivi un\'app → codice full-stack + preview live. Bolt per prototipi rapidi, Lovable per non-developer, Replit per zero-DevOps (hosting + DB integrati).' },
    ],
    footer: '<strong>Nota:</strong> questi tool non sostituiscono ChatGPT/Claude/Gemini — li complementano. Sono per chi costruisce software.',
  },

  // ═══════════════════════════════════════
  // SEZIONE 6: Confronto & Demo
  // ═══════════════════════════════════════

  // 22. Free tier a confronto (tabella dettagliata)
  {
    type: 'custom',
    layout: 'compare-table',
    heading: '🆓 Free tier a confronto: cosa c\'è gratis?',
    columns: ['', 'ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Perplexity'],
    rows: [
      ['<strong>Modello</strong>', 'GPT-5.2', 'Sonnet 4.5 + Haiku', 'Gemini 3.1', 'GPT base', 'Vari'],
      ['<strong>Messaggi</strong>', 'Illimitati (GPT-5.2)', '~20-40/sessione (reset 5h)', 'Illimitati', 'Illimitati', 'Quick: ∞ · Pro: 3-5/g'],
      ['<strong>Context</strong>', '128K token', '200K token', '2M token (!)', '128K token', 'N/A'],
      ['<strong>Upload file</strong>', '✅', '✅', '✅', '❌', '~3 file/giorno'],
      ['<strong>Canvas/Artifacts</strong>', '✅ Canvas', '✅ Artifacts', '❌', '❌', '❌'],
      ['<strong>Projects/Workspace</strong>', '❌ (solo Plus)', '✅ Projects', '❌', '❌', 'Spaces limitati'],
      ['<strong>Ricerca web</strong>', '✅', '✅', '✅ + Deep Research', '✅', '✅ (core feature)'],
      ['<strong>Immagini</strong>', '✅ DALL-E', '❌', '✅ Imagen', 'Limitato', '❌'],
      ['<strong>Plugin Office</strong>', '❌', '❌ (solo Pro+)', '✅ Workspace', '❌ (solo Pro+)', '❌'],
    ],
    footer: '<strong>Takeaway:</strong> ogni piattaforma regala qualcosa di diverso. ChatGPT è il più generoso sui messaggi, Claude sugli artifact, Gemini sul context window (2M!).',
  },

  // 23. La mappa delle piattaforme (quando usare cosa)
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Quando usare cosa: guida pratica',
    columns: ['Task', 'Piattaforma consigliata', 'Perché'],
    rows: [
      ['<strong>Scrivere testi lunghi</strong>', '🟠 Claude', 'Tono più naturale, 200K context, meno "robotico"'],
      ['<strong>Editing collaborativo</strong>', '🟢 ChatGPT Canvas', 'Edit inline, versioning, scorciatoie'],
      ['<strong>Creare un\'app/demo</strong>', '🟠 Claude Artifacts', 'Genera React/HTML funzionante senza codice'],
      ['<strong>Ricerca con fonti</strong>', '⚡ Perplexity', 'Fonti citate, fatto per quello'],
      ['<strong>Analisi dati Excel</strong>', '🟢 ChatGPT for Excel', 'Add-in nativo, formule trasparenti'],
      ['<strong>Report da documenti</strong>', '🔵 NotebookLM', 'Carica PDF → podcast + Q&A gratis'],
      ['<strong>Ricerca approfondita</strong>', '🔵 Deep Research', 'Agente autonomo, report multi-pagina'],
      ['<strong>Lavoro in M365</strong>', '🟣 Copilot', 'Integrato in Word/Excel/PPT/Teams'],
      ['<strong>Assistente aziendale</strong>', '🟢 GPT Custom', '10 min per un prototipo, zero codice'],
    ],
    footer: '<strong>Regola d\'oro:</strong> non esiste "il migliore". Esiste quello giusto per il task specifico. I professionisti li usano tutti.',
  },

  // 24. Quote
  {
    type: 'quote',
    text: '"The best AI tool is the one that integrates with how you already work."',
    source: 'Ethan Mollick, Wharton School (2026)',
    style: { background: 'linear-gradient(135deg, var(--secondary), #00997a)' },
  },

  // 25. Demo live comparativa
  {
    type: 'demo',
    heading: 'Demo: stesso task su 3 piattaforme',
    description: `<strong>🔴 Stesso task, 3 piattaforme in parallelo</strong>
<br><br>
<div style="background:var(--surface);padding:14px;border-radius:8px;border-left:3px solid #6c63ff;margin-bottom:12px;">
  <strong>Task:</strong> <em>"Analizza questo report vendite Q1 e genera un executive summary con 3 action item"</em>
</div>
<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;text-align:center;font-size:0.5em;">
  <div style="background:var(--surface);padding:8px;border-radius:6px;">⚡ Velocità</div>
  <div style="background:var(--surface);padding:8px;border-radius:6px;">📐 Struttura</div>
  <div style="background:var(--surface);padding:8px;border-radius:6px;">🔍 Dettaglio</div>
  <div style="background:var(--surface);padding:8px;border-radius:6px;">🔄 Follow-up</div>
  <div style="background:var(--surface);padding:8px;border-radius:6px;">📝 Formato</div>
</div>
<br>
<strong>Bonus:</strong> <em>"Scrivi un'email di follow-up per un cliente che non risponde da 2 settimane"</em> — confrontare tono e naturalezza.`,
    demoMaterial: {
      label: 'Preparare un CSV o PDF di report vendite fittizio da caricare su tutte e 3 le piattaforme',
    },
  },

  // 26. Hands-on: Canvas & NotebookLM
  {
    type: 'hands-on',
    heading: 'Canvas collaborativo & NotebookLM',
    timer: '⏱ 60 minuti (30+30)',
    instructions: [
      '<strong>Parte 1 — Canvas (30 min):</strong> apri ChatGPT, scrivi "use canvas" e crea un\'analisi SWOT della tua azienda. Usa le scorciatoie AI: accorcia, espandi, cambia tono. Prova a selezionare un paragrafo e chiedere una modifica specifica.',
      '<strong>Parte 2 — NotebookLM (30 min):</strong> vai su notebooklm.google.com → nuovo notebook → carica 3-5 articoli del tuo settore',
      'Genera l\'<strong>Audio Overview</strong> (formato "Deep Dive") — ascolta i primi 2 minuti',
      'Fai 5 domande ai tuoi documenti tramite la chat di NotebookLM — nota come cita le fonti',
      'Confronta: quale strumento userai di più nel tuo lavoro?',
      '<strong>Condividi</strong> con la classe: cosa ti ha sorpreso di più?',
    ],
  },

  // 27. Meme - podcast NotebookLM
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif', alt: 'Kitten relaxing - podcast vibes' },
    caption: '"Io che ascolto il podcast generato da NotebookLM sui miei appunti"',
  },

  // 28. Stats - AI adoption mondo vs Italia
  {
    type: 'stats',
    heading: 'AI adoption: mondo vs Italia',
    stats: [
      { value: 88, suffix: '%', label: 'Enterprise nel mondo usa AI' },
      { value: 8.2, suffix: '%', label: 'Imprese italiane usa AI (10+ dip.)' },
      { value: 5.2, suffix: '%', label: 'Aumento produttività con AI (Italia)' },
      { value: 71, suffix: '%', label: 'Top use case: content creation' },
    ],
    footer: 'Il gap Italia-mondo è enorme (8% vs 88%). Chi si muove ora ha un vantaggio competitivo reale. Fonte: Banca d\'Italia QEF 2026, McKinsey.',
  },

  // 29. Hands-on: esplora le piattaforme
  {
    type: 'hands-on',
    heading: 'Tour guidato: prova tutte le piattaforme',
    timer: '⏱ 60 minuti',
    instructions: [
      '<strong>Scegli un task reale</strong> del tuo lavoro (email, report, analisi dati, presentazione)',
      '<strong>Eseguilo su ChatGPT</strong> — annota tempo e qualità (voto 1-5)',
      '<strong>Eseguilo su Claude</strong> — stesso task, stesse metriche',
      '<strong>Eseguilo su Gemini</strong> — bonus: prova Deep Research se il task è di ricerca',
      '<strong>Compila la scheda comparativa</strong> (fornita dal docente)',
      '<strong>Presenta alla classe (2 min):</strong> quale piattaforma ha vinto per il tuo caso d\'uso? Perché?',
    ],
  },

  // 30. Recap
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'ChatGPT: Canvas gratuito, GPTs custom in 10 min, ChatGPT for Excel — l\'ecosistema più completo',
      'Claude: Projects & Artifacts gratis, MCP (USB-C per AI), plugin Office cross-app — il migliore per scrittura e analisi',
      'Gemini: Personal Intelligence gratis, Deep Research autonomo, NotebookLM podcast — il più integrato con Google',
      'Copilot: 41% adoption enterprise, AI in Word/Excel/PPT/Teams, Power Automate — il re di M365',
      'Tool emergenti: Perplexity (ricerca con fonti), Cursor (coding AI), v0.dev (UI in secondi)',
      'Non esiste il tool migliore: esiste quello giusto per il TUO task specifico — i pro li usano tutti',
    ],
  },

  // 31. Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'OpenAI Platform — API, Playground, GPTs', url: 'https://platform.openai.com' },
      { label: 'Claude — Projects & Artifacts', url: 'https://claude.ai' },
      { label: 'Gemini — Google AI', url: 'https://gemini.google.com' },
      { label: 'NotebookLM — Podcast e Q&A sui tuoi documenti', url: 'https://notebooklm.google.com' },
      { label: 'Gemini Deep Research', url: 'https://gemini.google.com/deepresearch' },
      { label: 'Microsoft Copilot — AI in M365', url: 'https://copilot.microsoft.com' },
      { label: 'Perplexity — Ricerca AI con fonti', url: 'https://perplexity.ai' },
      { label: 'Cursor — Editor AI per developer', url: 'https://cursor.com' },
      { label: 'v0.dev — UI da prompt', url: 'https://v0.dev' },
    ],
  },

  // 32. Closing
  {
    type: 'closing',
    heading: 'Prossima lezione',
    content: '05 · Automazione, Agenti e AI in Azienda',
    subtitle: 'Agenti AI, workflow automation (Zapier/n8n/Make), AI Act 2026, ROI e change management',
  },
]
