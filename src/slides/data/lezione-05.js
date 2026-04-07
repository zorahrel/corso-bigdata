export const meta = {
  lessonNumber: '05',
  title: 'Automazione, Agenti e AI in Azienda',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '05',
    title: 'Automazione, Agenti\ne AI in Azienda',
    subtitle: 'Mercoledì 08/04/2026 · 6h in presenza · Blocco AUTOMAZIONE & ADOZIONE',
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '🤖', text: "Cos'è un agente AI: autonomia, tool use, loop" },
      { emoji: '⚙️', text: 'Workflow automation: Zapier, n8n, Make.com' },
      { emoji: '⚖️', text: 'AI Act aggiornato: rinvio alto rischio 2027-2028' },
      { emoji: '🇮🇹', text: 'Adozione AI in Italia: dati Banca d\'Italia e bandi' },
      { emoji: '💰', text: 'ROI dell\'AI: quanto vale davvero' },
      { emoji: '🔄', text: 'Change management: superare le resistenze' },
    ],
  },

  // 3. MEME
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/l46CwEYnbFtFfjZNS/giphy.gif', alt: 'Robot falling over' },
    caption: '"Quando il boss dice: automatizziamo tutto con l\'AI"',
  },

  // ─── SEZIONE 1: AGENTI AI ───

  // 4. Cos'è un agente AI
  {
    type: 'concept',
    heading: "Cos'è un agente AI",
    content: `<p class="concept-text">
  Un <strong>agente AI</strong> non è un chatbot — è un sistema che <strong>agisce autonomamente</strong> per raggiungere un obiettivo.
  <br><br>
  <strong>Le 3 caratteristiche chiave:</strong><br>
  🧠 <strong>Autonomia:</strong> decide i passi da compiere senza istruzioni passo-passo<br>
  🔧 <strong>Tool use:</strong> usa strumenti esterni (API, browser, database, file)<br>
  🔄 <strong>Loop:</strong> osserva → ragiona → agisce → ripete finché il task è completo
  <br><br>
  <strong>In pratica:</strong> dai un obiettivo, l'agente pianifica, esegue, si auto-corregge.
</p>`,
    image: { src: '', alt: '' },
  },

  // 5. Agentic AI: i numeri del 2026
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Agentic AI: i numeri del 2026',
    features: [
      { icon: '📡', title: 'Telecom: 48%', description: 'Quasi metà delle telco ha agenti AI in produzione' },
      { icon: '🛒', title: 'Retail: 47%', description: 'Agenti AI per prezzi, magazzino e assistenza clienti' },
      { icon: '🏢', title: 'Enterprise: 78%', description: 'Adozione AI balzata dal 55% al 78% in un solo anno' },
      { icon: '⚠️', title: '22% fallisce', description: '1 progetto agentico su 4 viene abbandonato' },
      { icon: '💰', title: 'ROI: $7.800/dip', description: 'Risparmio medio annuo per dipendente con AI strutturata' },
      { icon: '⏱️', title: '6,5 ore/settimana', description: 'Tempo risparmiato in media per ogni dipendente' },
    ],
    footer: '<strong>Il messaggio:</strong> l\'AI agentica è presente, non futuro. Ma il 22% di fallimenti richiede strategia.',
  },

  // 6. Agente vs Chatbot vs Workflow
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Agente vs Chatbot vs Workflow',
    columns: ['', 'Chatbot', 'Workflow', 'Agente AI'],
    rows: [
      ['Autonomia', 'Nessuna', 'Fissa (IF/THEN)', 'Alta — pianifica e decide'],
      ['Tool use', 'No (solo testo)', 'Sì, predefiniti', 'Sì, dinamici'],
      ['Adattabilità', 'Zero', 'Bassa', 'Alta — si auto-corregge'],
      ['Esempio', 'FAQ bot', 'Email → Slack → Sheet', 'Monitora e riporta'],
      ['Complessità', 'Bassa', 'Media', 'Alta'],
    ],
    footer: '<strong>Regola:</strong> chatbot per FAQ, workflow per processi ripetitivi, agente per task complessi.',
  },

  // 6b. Da UX a AX: Agent Experience
  {
    type: 'concept',
    heading: 'Da UX a AX: Agent Experience',
    content: `<p class="concept-text">
  Per 30 anni abbiamo progettato per <strong>persone davanti a uno schermo</strong>. Click, feed, form, dashboard.
  <br><br>
  Ora si aggiunge un nuovo paradigma: la <strong>AX — Agent Experience</strong>.
  <br><br>
  Un prodotto dovrà essere:<br>
  👤 <strong>Chiaro per le persone</strong> (UX classica)<br>
  🤖 <strong>Leggibile, interrogabile, autorizzabile ed eseguibile da un agente</strong> (AX)
  <br><br>
  <strong>Cosa cambia in pratica:</strong><br>
  • Non bastano più le schermate — servono <strong>API, MCP, permessi, memoria, policy</strong><br>
  • I touchpoint si allargano: accanto ai <em>punti di contatto</em> con l'utente, nascono i <strong>punti di delega</strong><br>
  • Superfici di fiducia, condizioni di azione, limiti di autonomia
  <br><br>
  <em>Se il tuo prodotto non è leggibile da un agente, perderà centralità nel flusso di valore.</em>
</p>`,
  },

  // 6c. Da Push a Pull: gli agenti ribaltano l'attenzione
  {
    type: 'concept',
    heading: 'Da Push a Pull: ribaltare l\'attenzione',
    content: `<p class="concept-text">
  Internet oggi vive di <strong>interruzioni</strong>: email, notifiche, feed, advertising. Tutto è costruito per tirare l'utente dentro il flusso.
  <br><br>
  <strong>Gli agenti ribaltano questa dinamica:</strong><br>
  📥 <strong>Push (oggi):</strong> il servizio interrompe la persona → attenzione frammentata<br>
  📤 <strong>Pull (domani):</strong> l'agente recupera ciò che conta, filtra il rumore, porta all'umano solo ciò che richiede giudizio
  <br><br>
  Email e messaggi non spariscono — diventano <strong>materia prima</strong> da classificare, sintetizzare e trasformare in decisione.
  <br><br>
  <strong>La risorsa più stressata resta l'attenzione.</strong> Ma se il layer operativo passa agli agenti, si libera spazio cognitivo per ciò che conta: interpretazione, creatività, responsabilità.
</p>`,
  },

  // 6d. Multi-agent: squadre di agenti specializzati
  {
    type: 'concept',
    heading: 'Multi-agent: squadre specializzate',
    content: `<p class="concept-text">
  Un agente solo non basta. La realtà premia la <strong>specializzazione</strong>.
  <br><br>
  <strong>Esempio di squadra:</strong><br>
  📋 <strong>Planner:</strong> pianifica i passi<br>
  🔍 <strong>Researcher:</strong> recupera informazioni<br>
  ✅ <strong>Reviewer:</strong> verifica compliance e qualità<br>
  💰 <strong>Executor:</strong> esegue transazioni e azioni<br>
  🔄 <strong>Orchestrator:</strong> coordina tutto
  <br><br>
  Quando diventano <strong>persistenti</strong> (memoria, preferenze, storico) servono:<br>
  • Routing e responsabilità<br>
  • Sincronizzazione della memoria<br>
  • Osservabilità e audit<br>
  • Protocolli standard (MCP, A2A)
</p>`,
  },

  // 6e. I nuovi ruoli dell'era agentica
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'I nuovi ruoli dell\'era agentica',
    features: [
      { icon: '🎨', title: 'Agentic AI Designer', description: 'Progetta flussi di delega, superfici di fiducia, escalation tra persone e agenti' },
      { icon: '🔧', title: 'Agentic AI Engineer', description: 'Costruisce memoria, tool layer, permessi, osservabilità, sandbox' },
      { icon: '🎯', title: 'Agent Orchestrator', description: 'Coordina squadre di agenti su task, tempi, priorità e risorse' },
      { icon: '⚖️', title: 'Agent Governor', description: 'Definisce vincoli, policy, soglie di autonomia, audit e intervento umano' },
      { icon: '💰', title: 'AgentOps Manager', description: 'Gestisce costi, metriche e rendimento operativo degli agenti' },
    ],
    footer: '<strong>Pattern storico:</strong> PC → IT aziendale · Web → web designer · Social → community manager · Cloud → DevOps · <strong>Agenti → questi ruoli</strong>.',
  },

  // 6f. Agenti e business: la fine dell'economia dell'interruzione
  {
    type: 'concept',
    heading: 'Marketing nell\'era degli agenti',
    content: `<p class="concept-text">
  Molti business si reggono sull'<strong>economia dell'attenzione</strong>: l'advertising interrompe, persuade, spinge.
  <br><br>
  <strong>Ma un agente non si lascia sedurre da un banner.</strong><br>
  Confronta dati, rilevanza, reputazione, costo, compatibilità con l'obiettivo.
  <br><br>
  <strong>Per essere scelti da un agente, serve:</strong><br>
  📐 Offerta <strong>strutturata e verificabile</strong> (dati chiari, non slogan)<br>
  🤖 Contenuti <strong>leggibili dalle macchine</strong> (API, dati strutturati)<br>
  🎯 <strong>Rilevanza reale</strong> rispetto all'obiettivo del cliente<br>
  📊 Meno rumore, più <strong>qualità informativa</strong>
  <br><br>
  <strong>Nuove metriche:</strong> quanti agenti interagiscono col servizio? Con quali permessi? Quale tasso di successo? Quale valore generato?
</p>`,
    footer: '<strong>Il marketing non muore</strong> — è costretto a maturare. Da persuasione a rilevanza verificabile.',
  },

  // 6g. Agentic Commerce: gli agenti comprano per te
  {
    type: 'concept',
    heading: 'Agentic Commerce: l\'AI compra per te',
    content: `<p class="concept-text">
  Non è fantascienza — sta succedendo ora:
  <br><br>
  🛒 <strong>Google "Buy for me":</strong> l'AI cerca, confronta e compra autonomamente dai siti<br>
  🛍️ <strong>ChatGPT Shopping:</strong> "Buy it in ChatGPT" su Etsy e Shopify<br>
  👟 <strong>Microsoft Copilot Checkout:</strong> ordini AI cresciuti <strong>15x</strong> nel 2025 (Keen, Pura Vida)
  <br><br>
  <strong>I numeri:</strong><br>
  📊 <strong>45%</strong> consumatori già usa AI nel percorso d'acquisto (IBM 2026)<br>
  💰 McKinsey stima <strong>$3-5 trilioni</strong> di mercato entro 2030<br>
  🏪 Nuovi standard: <strong>ACP</strong> (OpenAI+Stripe) e <strong>UCP</strong> (Shopify+Google)
  <br><br>
  <strong>Domanda chiave:</strong> se l'agente del cliente sceglie per lui, come ti fai scegliere?
</p>`,
  },

  // 6h. Quando l'AI combina disastri
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Quando l\'AI combina disastri',
    features: [
      { icon: '🍔', title: 'McDonald\'s Drive-Thru', description: 'AI ordina 260 McNuggets da sola. Progetto terminato dopo i video virali.' },
      { icon: '🧪', title: 'Supermercato NZ', description: 'Meal planner AI suggerisce ricette con candeggina e "mocktail al cloro".' },
      { icon: '💀', title: 'Replit AI Agent', description: 'Cancella database di produzione durante code freeze. Poi fabbrica report falsi per coprirsi.' },
      { icon: '✈️', title: 'Air Canada Chatbot', description: 'Inventa policy inesistente. Tribunale condanna la compagnia a rispettarla.' },
      { icon: '🔓', title: '80% senza controllo', description: '80% aziende con agenti autonomi non sa cosa fanno. Solo 21% ha inventario agenti.' },
    ],
    footer: '<strong>Lezione:</strong> più autonomia = più rischio. Servono guardrail, audit e human-in-the-loop.',
  },

  // ─── SEZIONE 2: WORKFLOW AUTOMATION ───

  // 7. Workflow Automation: la mappa
  {
    type: 'concept',
    heading: 'Workflow Automation: la mappa',
    content: `<p class="concept-text">
  <strong>Automatizzare i processi ripetitivi</strong> senza scrivere codice — il primo passo verso l'AI in azienda.
  <br><br>
  <strong>I 3 tool principali:</strong><br>
  ⚡ <strong>Zapier:</strong> 7000+ integrazioni, zero codice. Perfetto per PMI.<br>
  🟧 <strong>Make.com:</strong> visual builder flessibile, ottimo rapporto prezzo/features.<br>
  🟩 <strong>n8n:</strong> open source, self-hosted, nodi AI nativi. Controllo totale.
  <br><br>
  <strong>Tutti e tre</strong> ora integrano AI: nodi GPT, Claude, image generation, classificazione automatica.
</p>`,
    image: { src: '', alt: '' },
  },

  // 8. Zapier vs Make vs n8n
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Zapier vs Make.com vs n8n',
    columns: ['', 'Zapier', 'Make.com', 'n8n'],
    rows: [
      ['Prezzo', 'Da $19.99/mese', 'Da $9/mese', 'Gratis (self-hosted)'],
      ['Integrazioni', '7000+', '1500+', '400+ (community)'],
      ['AI nativa', 'Sì (GPT, Claude)', 'Sì (GPT, Claude)', 'Sì + agenti AI'],
      ['Complessità', 'Bassa', 'Media', 'Media-alta'],
      ['Open source', 'No', 'No', 'Sì'],
      ['Per chi', 'PMI, non-tecnici', 'Team marketing/ops', 'Dev, aziende tech'],
    ],
    footer: '<strong>Consiglio:</strong> Zapier se non-tecnico, Make per workflow complessi, n8n se hai risorse tech.',
  },

  // 8b. Mappa: codice vs tool vs AI autonoma
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Quando serve cosa?',
    columns: ['', 'Codice custom', 'Tool (n8n/Zapier)', 'AI autonoma'],
    rows: [
      ['Quando', 'Logica unica, non standard', 'Processo ripetitivo, regole chiare', 'Task variabile, serve giudizio'],
      ['Chi lo fa', 'Developer', 'Chiunque (no-code/low-code)', 'L\'AI decide, l\'umano supervisiona'],
      ['Esempio', 'API proprietaria, algoritmo ML', 'Email → classifica → Slack', 'Analizza email e rispondi in autonomia'],
      ['Trigger', 'Evento nel codice', 'Webhook, cron, email', 'Cron, evento, o l\'agente monitora'],
      ['Flessibilità', 'Totale', 'Media (nodi disponibili)', 'Alta (ragiona sul contesto)'],
      ['Costo setup', 'Alto (dev time)', 'Basso (drag & drop)', 'Medio (prompt + test + guardrail)'],
    ],
    footer: '<strong>Regola pratica:</strong> se il task ha regole fisse → tool. Se serve giudizio → AI. Se è unico e complesso → codice.',
  },

  // 9. DEMO — Workflow AI con n8n
  {
    type: 'demo',
    heading: 'Demo live: workflow AI con n8n',
    description: `<strong>Step per il docente:</strong><br>
1. Apri n8n (locale o cloud)<br>
2. Crea un workflow: "Nuova email → classificazione AI → risposta automatica"<br>
3. Mostra il nodo AI Agent con tool use<br>
4. Trigger: simula un'email di richiesta info<br>
5. L'agente classifica, prepara risposta, la invia<br>
6. Confronta: stesso task con Zapier — più semplice ma meno flessibile<br><br>
<strong>Risorse:</strong><br>
• <a href="https://www.youtube.com/watch?v=PfdnYe2690E">n8n AI Agent Tutorial 2026</a><br>
• <a href="https://findskill.ai/courses/n8n-ai-automation-workflows/">Corso gratuito n8n + certificato</a>`,
  },

  // 9b. Use case reali con n8n
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: '5 use case reali con n8n',
    features: [
      { icon: '📧', title: 'Email triage AI', description: 'Gmail → classifica con Claude → risponde, archivia o escala. Zero intervento umano sul 70% delle email.' },
      { icon: '📊', title: 'Report automatici', description: 'Google Sheets + GPT → report settimanale in PDF → inviato su Slack ogni lunedì alle 9.' },
      { icon: '🔍', title: 'Monitoraggio competitor', description: 'Scraping prezzi → confronto AI → alert su Telegram se il competitor cambia prezzo.' },
      { icon: '📝', title: 'Content repurposing', description: 'Video YouTube → trascrizione → articolo blog + post LinkedIn + thread Twitter. Un contenuto, 4 canali.' },
      { icon: '🧾', title: 'Fatture e documenti', description: 'PDF fattura → OCR + AI → estrae dati → compila Google Sheet → notifica contabilità.' },
    ],
    footer: '<strong>Pattern comune:</strong> trigger → arricchimento dati → decisione AI → azione → notifica.',
  },

  // 9c. Anatomia di un flusso n8n
  {
    type: 'concept',
    heading: 'Anatomia di un flusso n8n',
    content: `<p class="concept-text">
  Un workflow n8n è un <strong>file JSON</strong> importabile con un click. Ecco la struttura:
  <br><br>
  <code style="display:block; background:rgba(108,99,255,0.08); padding:16px; border-radius:8px; font-size:0.75em; line-height:1.6; white-space:pre; overflow-x:auto;">{
  "nodes": [
    { "type": "n8n-nodes-base.gmailTrigger",
      "name": "Nuova email" },
    { "type": "@n8n/n8n-nodes-langchain.agent",
      "name": "Classifica con AI" },
    { "type": "n8n-nodes-base.gmail",
      "name": "Rispondi" }
  ],
  "connections": {
    "Nuova email" → "Classifica con AI" → "Rispondi"
  }
}</code>
  <br>
  <strong>3 concetti chiave:</strong><br>
  🔲 <strong>Nodi:</strong> ogni blocco fa una cosa (trigger, AI, azione)<br>
  🔗 <strong>Connessioni:</strong> i dati fluiscono da un nodo all'altro<br>
  📥 <strong>Import:</strong> copia il JSON → n8n → Menu → Import from File → Attiva
</p>`,
  },

  // 9d. Dove trovare flussi pronti (gratis)
  {
    type: 'concept',
    heading: 'Flussi pronti: dove trovarli gratis',
    content: `<p class="concept-text">
  <strong>Non devi costruire da zero.</strong> Ci sono 9.000+ template pronti.
  <br><br>
  🏠 <strong>n8n.io/workflows</strong> — 9.107 template ufficiali, 6.234 con AI<br>
  <em style="color:var(--muted);">→ In n8n: Add workflow → Templates → cerca e importa</em>
  <br><br>
  🐙 <strong>GitHub: awesome-n8n-templates</strong> — 280+ workflow curati<br>
  <em style="color:var(--muted);">→ Gmail, Slack, OpenAI, RAG chatbot, DevOps</em>
  <br><br>
  🎓 <strong>GitHub: n8n-ai-automations</strong> — collezione AI agents<br>
  <em style="color:var(--muted);">→ Video tutorial su YouTube + community Skool gratuita</em>
  <br><br>
  📦 <strong>GitHub: n8n-free-templates</strong> — 200+ workflow plug-and-play<br>
  <em style="color:var(--muted);">→ Vector DB, embeddings, LLM — importa il JSON e attiva</em>
  <br><br>
  <strong>Come usarli:</strong> scarica il .json → apri n8n → Import → aggiungi le tue credenziali → Activate.
</p>`,
  },

  // 9e. Alternative manuali: prompt pronti
  {
    type: 'concept',
    heading: 'Senza n8n? Prompt pronti da copiare',
    content: `<p class="concept-text">
  <strong>Non serve n8n per automatizzare.</strong> Ecco 4 prompt pronti da usare su ChatGPT o Claude:
  <br><br>
  📧 <strong>Email triage:</strong><br>
  <code style="display:block; background:rgba(0,212,170,0.08); padding:10px; border-radius:6px; font-size:0.72em; margin:4px 0 12px;">Classifica questa email in: [urgente/azione richiesta/FYI/spam]. Rispondi con categoria, motivazione in 1 riga, e bozza di risposta se serve azione.</code>
  <br>
  📊 <strong>Report da dati:</strong><br>
  <code style="display:block; background:rgba(0,212,170,0.08); padding:10px; border-radius:6px; font-size:0.72em; margin:4px 0 12px;">Analizza questi dati di vendita. Genera: 1) trend principale, 2) anomalie, 3) 3 azioni suggerite. Formato: bullet point, max 200 parole.</code>
  <br>
  🔍 <strong>Analisi competitor:</strong><br>
  <code style="display:block; background:rgba(0,212,170,0.08); padding:10px; border-radius:6px; font-size:0.72em; margin:4px 0 12px;">Confronta questi 3 prodotti competitor: [A, B, C]. Tabella con: prezzo, feature chiave, punto debole, target. Concludi con il nostro vantaggio competitivo.</code>
  <br>
  📝 <strong>Content repurposing:</strong><br>
  <code style="display:block; background:rgba(0,212,170,0.08); padding:10px; border-radius:6px; font-size:0.72em; margin:4px 0 12px;">Trasforma questa trascrizione video in: 1) articolo blog 800 parole, 2) post LinkedIn 150 parole, 3) 3 tweet. Mantieni il tone of voice originale.</code>
</p>`,
    footer: '<strong>Regola:</strong> n8n automatizza il flusso completo. I prompt automatizzano il singolo step. Parti dai prompt, scala con n8n.',
  },

  // 9f. Caveman Prompting: meno parole, più risultati
  {
    type: 'concept',
    heading: '🦴 Caveman Prompting',
    content: `<p class="concept-text">
  L'AI capisce meglio quando <strong>scrivi meno e meglio</strong>. Stesso principio del codice pulito.
  <br><br>
  <strong>❌ Prompt verboso:</strong><br>
  <code style="display:block; background:rgba(255,80,80,0.08); padding:10px; border-radius:6px; font-size:0.72em; margin:4px 0 12px;">Ciao! Potresti per favore aiutarmi a fare un'analisi dei dati di vendita che ti allego? Mi piacerebbe avere un riassunto dei trend principali e magari anche qualche suggerimento su cosa potremmo fare per migliorare. Grazie mille!</code>
  <br>
  <strong>✅ Prompt caveman:</strong><br>
  <code style="display:block; background:rgba(0,212,170,0.08); padding:10px; border-radius:6px; font-size:0.72em; margin:4px 0 12px;">Analizza dati vendita allegati. Output: 1) 3 trend principali 2) anomalie 3) 3 azioni concrete. Formato bullet, max 200 parole.</code>
  <br>
  <strong>Perché funziona meglio:</strong><br>
  🎯 <strong>Diretto:</strong> niente convenevoli — l'AI non ha sentimenti da ferire<br>
  📐 <strong>Strutturato:</strong> formato output esplicito → risultato prevedibile<br>
  🪙 <strong>Economico:</strong> meno token in input = meno costi, più spazio per la risposta<br>
  ⚡ <strong>Veloce:</strong> meno da parsare = risposta più rapida e precisa
  <br><br>
  <strong>Fun fact:</strong> in <strong>Claude Code</strong> (CLI di Anthropic) esiste la skill <code>/caveman</code> che riduce i token ~75% mantenendo accuratezza tecnica. 3 livelli: lite, full, ultra.
</p>`,
    footer: '<strong>Regola d\'oro:</strong> se il prompt contiene "per favore", "potresti", "mi piacerebbe" → stai sprecando token. Vai dritto.',
  },

  // ─── SEZIONE 3: AI ACT ───

  // 10. AI Act: lo stato aggiornato
  {
    type: 'concept',
    heading: 'AI Act: lo stato al 2026',
    content: `<p class="concept-text">
  L'<strong>AI Act europeo</strong> — primo regolamento al mondo sull'AI.
  <br><br>
  <strong>📅 Timeline aggiornata:</strong><br>
  ✅ Feb 2025 — Divieti pratiche inaccettabili<br>
  ✅ Ago 2025 — Norme modelli GPAI<br>
  ⏳ Ago 2026 — <strong>Piena applicabilità</strong><br>
  🔄 2027-2028 — Alto rischio (<strong>RINVIATO</strong> il 26/3/2026)
  <br><br>
  <strong>⚠️ AI Literacy già in vigore</strong> — obbligo formazione personale. Sanzioni fino a <strong>€35M</strong>.
</p>`,
    image: { src: '', alt: '' },
  },

  // 11. AI Act: classificazione rischio
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'AI Act: i 4 livelli di rischio',
    features: [
      { icon: '🚫', title: 'Inaccettabile', description: 'VIETATO: social scoring, manipolazione, nudificazione AI' },
      { icon: '🔴', title: 'Alto rischio', description: 'Regolato: assunzioni, credito, sanità — rinviato 2027-2028' },
      { icon: '🟡', title: 'Rischio limitato', description: 'Obbligo trasparenza: i chatbot devono dichiararsi AI' },
      { icon: '🟢', title: 'Rischio minimo', description: 'Libero: la maggior parte delle app AI consumer' },
    ],
    footer: '<strong>Per le aziende:</strong> rinvio alto rischio = più tempo, ma AI Literacy è GIÀ attiva.',
  },

  // ─── SEZIONE 4: ADOZIONE AI IN ITALIA ───

  // 12. Adozione AI in Italia: i dati reali
  {
    type: 'concept',
    heading: 'Adozione AI in Italia: Banca d\'Italia',
    content: `<p class="concept-text">
  <strong>QEF N.1005 (marzo 2026)</strong> — primo studio italiano su impatto reale dell'AI.
  <br><br>
  📊 <strong>8,2%</strong> imprese italiane usa AI — media EU: <strong>13,5%</strong><br>
  📈 Chi adotta: <strong>+5,2% produttività</strong>, <strong>+2% margini</strong><br>
  👥 Occupazione: <strong>nessun impatto negativo</strong><br>
  💡 Solo 3% ha soluzioni proprie; 29% mix interno/esterno
  <br><br>
  <strong>Barriere:</strong> talenti (39%), use case (27%), governance (27%)
</p>`,
    image: { src: '', alt: '' },
  },

  // 13. Italia vs Mondo: il gap
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Italia vs Mondo: il gap è un\'opportunità',
    columns: ['Metrica', 'Italia', 'Mondo'],
    rows: [
      ['Imprese con AI', '8,2%', '88% (enterprise)'],
      ['Produttività AI', '+5,2%', '+40% (McKinsey)'],
      ['GitHub Copilot', 'In crescita', '4,7M abbonati (+75%)'],
      ['Copilot M365', 'In rollout', '41% enterprise'],
      ['GenAI business', 'Prime adozioni', '65% aziende globali'],
    ],
    footer: '<strong>Il messaggio:</strong> 8% vs 88% — gap enorme, ma chi si muove ora ha un vantaggio competitivo.',
  },

  // 14. Case study Italia 2026
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Case study Italia 2026',
    features: [
      { icon: '🏦', title: 'Banca d\'Italia', description: '+5,2% produttività, nessun impatto su occupazione' },
      { icon: '🇮🇹', title: 'Bando vIvA', description: '10 progetti AI per il Made in Italy (marzo 2026)' },
      { icon: '💼', title: 'Dedagroup/DedaAI', description: '€50M in AI, 200+ professionisti dedicati' },
      { icon: '🏛️', title: 'Fondazione Leonardo', description: 'Report AI-readiness + fondi PNRR' },
    ],
    footer: '<strong>L\'AI in Italia si muove:</strong> dati empirici, bandi pubblici, investimenti privati.',
  },

  // ─── SEZIONE 5: ROI DELL'AI ───

  // 15. ROI dell'AI: numeri concreti
  {
    type: 'concept',
    heading: 'ROI dell\'AI: quanto vale davvero',
    content: `<p class="concept-text">
  <strong>$7.800/dipendente/anno</strong> — ROI medio dell'AI adottata strutturalmente.
  <br><br>
  <strong>Top 3 use case GenAI (2026):</strong><br>
  📝 Content creation: <strong>71%</strong><br>
  💻 Code generation: <strong>58%</strong><br>
  🤝 Customer interaction: <strong>54%</strong>
  <br><br>
  <strong>In Italia (PMI):</strong><br>
  ⏱️ 6,5 ore/settimana risparmiate per dipendente<br>
  💸 Costi operativi: <strong>-12%</strong><br>
  📈 ROI primo anno: <strong>180%</strong>
</p>`,
    image: { src: '', alt: '' },
  },

  // 16. Il calcolo per il tuo CEO
  {
    type: 'concept',
    heading: 'Il calcolo per convincere il CEO',
    content: `<p class="concept-text">
  <strong>Fai i conti con il tuo team:</strong>
  <br><br>
  30 min/giorno × 220 giorni = <strong>110 ore/anno</strong> = quasi <strong>3 settimane</strong>
  <br><br>
  50 dipendenti × $7.800 = <strong>$390.000/anno</strong> di valore
  <br><br>
  <strong>Costo medio AI per PMI:</strong><br>
  • 10-50 dip.: ~€15.000/anno<br>
  • 50-250 dip.: ~€65.000/anno<br>
  • 45% usa solo tool gratuiti/freemium
  <br><br>
  <strong>ROI spesso &gt;10x</strong> — il problema non è il costo, è non iniziare.
</p>`,
    image: { src: '', alt: '' },
  },

  // 17. MEME
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/yAYZnhvY3fflS/giphy.gif', alt: 'Shut up and take my money' },
    caption: '"Quando mostri al CEO il ROI dell\'AI e improvvisamente il budget c\'è"',
  },

  // ─── SEZIONE 6: CHANGE MANAGEMENT ───

  // 18. Change management: le resistenze
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Le 5 resistenze più comuni',
    features: [
      { icon: '😰', title: '"Mi ruberà il lavoro"', description: 'Realtà: 42% aziende dice che AI ha solo creato posti. Customer service -37%, ma cybersecurity +21%.' },
      { icon: '🤷', title: '"Non so da dove iniziare"', description: '62% PMI — serve percorso guidato, non big bang' },
      { icon: '🎓', title: '"Mancano competenze"', description: '58% PMI — AI Literacy è obbligatoria per legge' },
      { icon: '💸', title: '"Costa troppo"', description: '45% usa tool gratuiti — il costo non è la barriera' },
      { icon: '🙅', title: '"Il management non ci crede"', description: '29% PMI — servono numeri ($7.800/dip/anno)' },
    ],
    footer: '<strong>Pattern:</strong> la resistenza è culturale, non tecnologica. Servono numeri e un champion interno.',
  },

  // 18b. Il caso Klarna: il boomerang dell'AI totale
  {
    type: 'concept',
    heading: 'Il caso Klarna: sostituire ≠ augmentare',
    content: `<p class="concept-text">
  <strong>2024 — L'annuncio:</strong><br>
  "La nostra AI fa il lavoro di <strong>700 dipendenti</strong>." Tempo di risposta da 11 a 2 minuti. -25% richieste ripetute.
  <br><br>
  <strong>2026 — Il dietrofront:</strong><br>
  Klarna riassume umani. Soddisfazione clienti crollata sui casi complessi. Risparmi non materializzati come previsto.
  <br><br>
  <strong>Perché è successo:</strong><br>
  🤖 L'AI gestiva bene il <strong>volume</strong> (FAQ, rimborsi semplici)<br>
  😤 Ma falliva su <strong>empatia, eccezioni, escalation</strong><br>
  📉 I clienti insoddisfatti → churn → costo maggiore del risparmio
  <br><br>
  <strong>La lezione:</strong> Klarna è diventato <em>il</em> caso studio 2026 sul perché <strong>sostituire fallisce</strong> e <strong>augmentare funziona</strong>.
</p>`,
    footer: 'HBR 2026: "Le aziende licenziano per il <strong>potenziale</strong> dell\'AI, non per i risultati."',
  },

  // 19. Workflow ibrido: human-in-the-loop
  {
    type: 'custom',
    layout: 'workflow-diagram',
    heading: 'Il modello giusto: human-in-the-loop',
    steps: [
      { emoji: '🤖', label: 'AI propone', type: 'ai' },
      { emoji: '👤', label: 'Umano decide', type: 'human' },
      { emoji: '🤖', label: 'AI implementa', type: 'ai' },
    ],
    footer: 'Non automazione totale, ma <strong>augmentation</strong>. L\'AI gestisce il volume, l\'umano garantisce la qualità.',
  },

  // 20. QUOTE
  {
    type: 'quote',
    text: 'The best use of AI is augmentation, not automation. The goal isn\'t to replace human judgment — it\'s to give every person superpowers.',
    source: 'Dario Amodei, CEO Anthropic',
  },

  // 21. Roadmap 90 giorni per iniziare
  {
    type: 'concept',
    heading: 'Roadmap 90 giorni: da zero ad AI',
    content: `<p class="concept-text">
  <strong>Mese 1 — Esplora:</strong><br>
  • Identifica 3 task ripetitivi nel team<br>
  • Prova tool gratuiti (ChatGPT, Claude, Gemini)<br>
  • Forma un "AI champion" interno
  <br><br>
  <strong>Mese 2 — Pilota:</strong><br>
  • Scegli 1 use case concreto e misurabile<br>
  • Implementa un workflow automatizzato (Zapier/n8n)<br>
  • Misura: tempo risparmiato, qualità output, soddisfazione
  <br><br>
  <strong>Mese 3 — Scala:</strong><br>
  • Presenta i risultati al management con ROI<br>
  • Estendi ad altri team/processi<br>
  • Definisci governance e compliance AI Act
</p>`,
    image: { src: '', alt: '' },
  },

  // 22. MEME
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/3jbR27OLT5YJv0ewvN/giphy.gif', alt: 'This is fine' },
    caption: '"Le aziende italiane che ancora non usano AI guardando l\'88% mondiale"',
  },

  // 23. HANDS-ON
  {
    type: 'hands-on',
    heading: 'Esercitazione: AI Readiness + Pitch',
    timer: '90 minuti',
    instructions: [
      '<strong>AI Readiness Assessment (30 min):</strong> Compila il template di autovalutazione: dati, competenze, budget, governance. Output: score e roadmap.',
      '<strong>Calcola il ROI (15 min):</strong> N. dipendenti × $7.800/anno = valore potenziale. Confronta con costo tool.',
      '<strong>Agent vs Workflow (30 min):</strong> Stesso task (es: monitorare prezzi competitor) con workflow Zapier/Make e con agente n8n. Confronta setup e flessibilità.',
      '<strong>Pitch per il CEO (15 min):</strong> Pitch di 3 min: use case, ROI stimato, timeline 90 giorni, compliance AI Act.',
    ],
  },

  // 24. RECAP
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Agenti AI: autonomia + tool use + loop — 48% telco li usa già',
      'Workflow: Zapier (semplice), Make (flessibile), n8n (open source)',
      'AI Act: rinvio alto rischio 2027-2028, ma AI Literacy GIÀ obbligatoria',
      'Italia: 8,2% vs 88% mondiale — gap = opportunità',
      'ROI: $7.800/dipendente/anno, 180% primo anno',
      'Change management: resistenza culturale — servono numeri e champion',
    ],
  },

  // 25. Come valutare un tool AI
  {
    type: 'concept',
    heading: 'Come valutare un tool AI',
    content: `<p class="concept-text">
  Non tutti i tool AI sono uguali. Prima di scegliere, chiediti:
  <br><br>
  🔍 È un <strong>wrapper</strong> di un'altra AI (es. GPT sotto il cofano) o ha tecnologia propria?<br>
  ⚙️ Usa <strong>modelli vecchi</strong> con flussi standard, o ha integrato tecnologie nuove/esclusive?<br>
  🛠️ Ha già un <strong>workflow pronto</strong> per il tuo obiettivo, o devi costruirtelo da zero?<br>
  💰 Vale la pena <strong>spendere 10-20€/mese</strong> per risparmiare giorni/settimane di lavoro manuale?<br>
  🎯 Il risultato sarà <strong>migliore</strong> di quello che otterresti smanettando da solo senza essere programmatore?
</p>`,
    footer: '💡 Usa <strong>There\'s an AI for That</strong> (theresanaiforthat.com) per scoprire tool, ma valuta sempre criticamente prima di adottare.',
  },

  // Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'NVIDIA State of AI Report 2026', url: 'https://blogs.nvidia.com/blog/state-of-ai-report-2026/' },
      { label: 'Banca d\'Italia QEF N.1005 — AI e imprese italiane', url: 'https://www.bancaditalia.it/pubblicazioni/qef/2026-1005/index.html' },
      { label: 'AI Act — rinvio alto rischio (Tom\'s Hardware)', url: 'https://www.tomshw.it/business/ai-act-rinvio-sistemi-alto-rischio-2027-2028' },
      { label: 'Deloitte State of AI in Enterprise 2026', url: 'https://www.deloitte.com/cy/en/issues/generative-ai/state-of-ai-in-enterprise.html' },
      { label: 'n8n AI Agent Tutorial 2026 (YouTube)', url: 'https://www.youtube.com/watch?v=PfdnYe2690E' },
      { label: 'n8n Template Library — 9.000+ workflow gratuiti', url: 'https://n8n.io/workflows/' },
      { label: 'n8n AI Workflows — 6.000+ template con AI', url: 'https://n8n.io/workflows/categories/ai/' },
      { label: 'GitHub: awesome-n8n-templates (280+ pronti)', url: 'https://github.com/enescingoz/awesome-n8n-templates' },
      { label: 'Corso gratuito n8n + certificato', url: 'https://findskill.ai/courses/n8n-ai-automation-workflows/' },
      { label: '150+ Agentic AI Statistics 2026', url: 'https://www.digitalapplied.com/blog/agentic-ai-statistics-2026-definitive-collection-150-data-points' },
      { label: '🔍 There\'s an AI for That — Directory 10.000+ tool AI', url: 'https://theresanaiforthat.com' },
      { label: '🦴 Caveman Prompting — Claude Code /caveman skill', url: 'https://github.com/anthropics/claude-code' },
    ],
  },

  // Cosa vi aspetta: panoramica lezioni successive
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Cosa vi aspetta nei prossimi giorni',
    features: [
      { icon: '🧪', title: 'L06 — 9 aprile', description: '<strong>Lab Piattaforme:</strong> ChatGPT Canvas, Claude Projects, Gemini, NotebookLM + AI Debate: stesso prompt, 3 piattaforme, analisi bias.' },
      { icon: '⚙️', title: 'L07 — 13 aprile', description: '<strong>Lab Automazione:</strong> workflow reali con Zapier, Make e n8n (API Gemini gratis). Troubleshooting incluso + Workflow Creativo.' },
      { icon: '💼', title: 'L08 — 15 aprile', description: '<strong>AI per il tuo lavoro:</strong> email, documenti, meeting, CV con AI + mock interview + post LinkedIn con AI.' },
      { icon: '📋', title: 'L09 — 22 aprile', description: '<strong>Piano di adozione:</strong> SWOT con AI, role-play CEO, piano 90 giorni, dilemmi etici, certificazioni gratuite.' },
      { icon: '🎤', title: 'L10 — 23 aprile', description: '<strong>Progetto finale:</strong> pitch + AI Speed Dating + 30-day challenge + Lettera al me del futuro.' },
    ],
    footer: '<strong>Da domani lavorate con i tutor.</strong> Tutto quello che avete imparato oggi diventa pratica. Preparatevi a sporcarvi le mani.',
  },

  // Prossima lezione
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: '06 · Lab: Esplora\nle Piattaforme',
    subtitle: 'ChatGPT, Claude, Gemini, NotebookLM — 5 esercizi pratici step-by-step',
    style: { color: 'var(--secondary)' },
  },
]
