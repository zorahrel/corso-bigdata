export const meta = {
  lessonNumber: '01',
  title: "Cos'è davvero l'AI oggi",
  author: 'Attilio Cianci',
}

export const slides = [
  // 1. TITLE SLIDE
  {
    type: 'title',
    lessonNumber: '01',
    title: "Cos'è davvero l'AI oggi",
    subtitle: 'Mercoledì 25/03/2026 · 6h in presenza · Blocco FONDAMENTA',
  },

  // 2. COSA PORTI A CASA
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Cosa porti a casa da questo corso',
    features: [
      { icon: '🔍', title: 'Scegliere il tool giusto', description: 'Capirai quale AI usare per ogni task — non esiste una risposta unica per tutto.' },
      { icon: '✍️', title: 'Scrivere prompt professionali', description: "Imparerai a comunicare con l'AI in modo efficace, ottenendo risultati utili al primo colpo." },
      { icon: '⚡', title: 'Automatizzare 3 processi', description: 'Costruirai workflow concreti che fanno risparmiare ore ogni settimana.' },
      { icon: '🏢', title: "Guidare l'adozione AI", description: "Avrai gli strumenti per introdurre l'AI nel tuo team senza frizioni." },
      { icon: '🔒', title: "Usare l'AI in modo critico", description: 'Saprai riconoscere allucinazioni, bias e rischi — e come gestirli.' },
      { icon: '🤝', title: 'Fare network', description: "Sei in una stanza con 25+ persone che stanno imparando l'AI. Vale più di qualsiasi certificato." },
    ],
  },

  // 3. CHI SONO
  {
    type: 'concept',
    centered: true,
    heading: 'Il tuo docente',
    content: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:48px; max-width:900px; text-align:left;">
  <div>
    <div style="font-size:clamp(36px,4vw,48px); font-weight:800; letter-spacing:-2px; line-height:1; margin-bottom:8px;">Attilio<br>Cianci</div>
    <div style="font-size:16px; color:var(--muted); margin-bottom:24px;">Co-founder & CTO · 30 anni · Salerno</div>
    <div style="display:flex; flex-wrap:wrap; gap:8px;">
      <span style="background:rgba(108,99,255,.15); border:1px solid rgba(108,99,255,.3); color:var(--accent); border-radius:50px; padding:5px 14px; font-size:13px; font-weight:500;">Web & AI</span>
      <span style="background:rgba(108,99,255,.15); border:1px solid rgba(108,99,255,.3); color:var(--accent); border-radius:50px; padding:5px 14px; font-size:13px; font-weight:500;">Product</span>
      <span style="background:rgba(255,249,107,.08); border:1px solid rgba(255,249,107,.3); color:var(--warning); border-radius:50px; padding:5px 14px; font-size:13px; font-weight:500;">Startup</span>
      <span style="background:rgba(0,212,170,.08); border:1px solid rgba(0,212,170,.3); color:var(--secondary); border-radius:50px; padding:5px 14px; font-size:13px; font-weight:500;">Open Source</span>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; gap:16px;">
    <div style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:20px;">
      <div style="font-size:11px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:6px;">Azienda</div>
      <div style="font-size:18px; font-weight:700;">Armonia</div>
      <div style="font-size:13px; color:var(--muted); margin-top:4px;">Web agency & digital studio · Salerno · dal 2021</div>
    </div>
    <div style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:20px;">
      <div style="font-size:11px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:6px;">Cosa faccio</div>
      <div style="font-size:15px; font-weight:600; line-height:1.5;">Costruisco prodotti digitali — siti, app, sistemi AI — per startup e aziende che vogliono crescere con la tecnologia.</div>
    </div>
  </div>
</div>`,
  },

  // 4. ICEBREAKER (spostato qui)
  {
    type: 'meme',
    heading: 'Icebreaker',
    image: {
      src: 'https://i.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif',
      alt: 'AI thinking',
    },
    caption: '"Che AI hai usato questa settimana? E per fare cosa?"',
  },

  // 5. PATTO D'AULA
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: "Il patto d'aula",
    features: [
      { icon: '\uD83D\uDCF5', title: 'Telefono in tasca', description: 'Se devi rispondere a qualcosa di importante, esci fuori — nessun problema. Ma qui dentro, siamo presenti.' },
      { icon: '\uD83D\uDEB6', title: 'Bagno libero', description: "Non c'e bisogno di alzare la mano e chiedere. Sei un adulto, fidati." },
      { icon: '\uD83C\uDFA4', title: 'Dillo a tutti', description: "Se hai una cosa da dire all'amico vicino, dilla ad alta voce — se e interessante ridiamo tutti, se no ti prendiamo in giro." },
      { icon: '\uD83D\uDD17', title: 'Fate network', description: "Siete in una stanza con 25 persone che stanno imparando l'AI. Questo vale di piu di qualsiasi certificato." },
      { icon: '\uD83D\uDCBC', title: 'LinkedIn ora', description: 'Aggiungiti con il tuo compagno di sinistra e di destra. Adesso. Lo facciamo insieme come primo esercizio.' },
      { icon: '\u2753', title: 'Domande sempre', description: "Non esiste la domanda stupida. Se una cosa non e chiara, fermami — probabilmente ci sono altri 5 che pensano la stessa cosa." },
    ],
  },

  // 6. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda del giorno',
    items: [
      { emoji: '🌍', text: "Panoramica: stato dell'arte dell'AI nel 2026" },
      { emoji: '🧠', text: 'I 3 paradigmi: LLM, Multimodal, Agents' },
      { emoji: '✅', text: "Cosa SA fare l'AI (e cosa NO)" },
      { emoji: '⚠️', text: 'Allucinazioni, bias e limiti' },
      { emoji: '🎬', text: 'Demo live: ChatGPT vs Claude' },
      { emoji: '🛠️', text: 'Hands-on: esplorate voi!' },
      { emoji: '📚', text: 'Risorse e prossimi passi' },
    ],
  },

  // 7. TIMELINE AI
  {
    type: 'concept',
    heading: "L'AI nel 2026: dove siamo",
    centered: true,
    content: `<div style="display:flex; flex-direction:column; gap:10px; max-width:700px; margin:0 auto; text-align:left;">
  ${[
    ['2017', '#6c63ff', 'Transformer (Google) — nasce l\'architettura moderna'],
    ['2020', '#6c63ff', 'GPT-3: 175B parametri — l\'AI inizia a stupire'],
    ['2022', '#00d4aa', 'ChatGPT: l\'AI arriva a tutti — 100M utenti in 2 mesi'],
    ['2023', '#00d4aa', 'GPT-4, Claude 2, multimodale — visione + testo'],
    ['2024', '#ffd700', 'Reasoning models (o1) — l\'AI "pensa" step by step'],
    ['2025', '#ffd700', 'Agenti autonomi, 1M token context, AI ovunque'],
    ['2026', '#ff6b6b', 'GPT-5, Claude Opus 4.6, Gemini 2.5 — siamo qui 🚀'],
  ].map(([year, color, text]) => `
  <div style="display:flex; align-items:center; gap:16px;">
    <div style="min-width:52px; font-size:13px; font-weight:700; color:${color}; text-align:right;">${year}</div>
    <div style="width:12px; height:12px; border-radius:50%; background:${color}; flex-shrink:0;"></div>
    <div style="font-size:14px; color:var(--text); line-height:1.4;">${text}</div>
  </div>`).join('')}
</div>`,
    footer: `<strong>In pratica:</strong> in meno di 4 anni siamo passati da "l'AI sa scrivere email" a "l'AI ragiona, vede, ascolta e agisce autonomamente". Velocità senza precedenti nella storia della tecnologia. — ChatGPT ha raggiunto 1M utenti in 5 giorni. Netflix: 3,5 anni. iPhone: 74 giorni.`,
  },

  // 7B. ROI REALE
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'ROI reale: cosa ci guadagno?',
    features: [
      {
        icon: '💳',
        title: 'Klarna — Customer Service',
        description: "1 agente AI = lavoro di 700 agenti umani. Risolve in 2 minuti (vs 11 minuti umani). Soddisfazione clienti pari agli agenti umani. (Feb 2024 — fonte: OpenAI/Klarna)",
      },
      {
        icon: '💻',
        title: 'GitHub Copilot — Sviluppo',
        description: "I developer completano i task il 55% più velocemente con Copilot. Su 1.000 developer, risparmio stimato: centinaia di ore/anno. (Studio Microsoft, verificato)",
      },
      {
        icon: '📊',
        title: 'McKinsey — Dati globali 2025',
        description: "64% delle aziende afferma che l'AI abilita l'innovazione. In marketing e vendite, oltre il 10% di crescita ricavi è attribuito all'AI. (McKinsey State of AI, Nov 2025)",
      },
      {
        icon: '🇮🇹',
        title: 'Italia — Mercato AI 2025',
        description: "Il mercato AI italiano vale €1,8 miliardi, in crescita del +50% rispetto al 2024. Il 71% delle grandi imprese ha avviato almeno un progetto AI. (Osservatori.net, Feb 2026)",
      },
    ],
    footer: '💡 Il ROI non è teorico — è misurabile. Le aziende che usano l\'AI bene crescono più dei competitor. Quelle che aspettano rischiano di non recuperare il divario.',
  },

  // 7C. AI IN ITALIA E NEL MONDO
  {
    type: 'stats',
    heading: "L'AI in Italia e nel mondo",
    stats: [
      { value: 71, suffix: '%', label: 'grandi imprese italiane con almeno 1 progetto AI attivo (Osservatori, 2025)' },
      { value: 8, suffix: '%', label: 'PMI italiane che usano AI — il divario con le grandi aziende è +37 punti (ISTAT, 2025)' },
      { value: 1.8, suffix: 'B€', label: 'valore mercato AI in Italia — crescita +50% vs 2024 (Osservatori.net, Feb 2026)' },
      { value: 78, suffix: '%', label: 'aziende Fortune 500 che usano AI — dal 55% nel 2023 (McKinsey 2025)' },
    ],
    footer: "L'Italia accelera nelle grandi aziende, ma le PMI restano indietro. Chi adotta prima ottiene un vantaggio competitivo che diventa sempre più difficile da colmare.",
  },

  // 8. I 3 PARADIGMI
  {
    type: 'concept',
    heading: "I 3 paradigmi dell'AI moderna",
    centered: true,
    cards: [
      { emoji: '💬', label: 'LLM', description: 'Modelli di linguaggio che generano testo, codice, ragionamento' },
      { emoji: '👁️', label: 'Multimodal', description: 'Capiscono e generano testo + immagini + audio + video' },
      { emoji: '🤖', label: 'Agents', description: 'Agiscono autonomamente: usano tool, navigano il web, scrivono codice' },
    ],
    footer: `<strong>Il punto chiave:</strong> capire questi 3 paradigmi vi permette di scegliere lo strumento giusto per ogni problema. Non esiste un'AI unica per tutto.`,
  },

  // 9. MODELLI PRINCIPALI 2026
  {
    type: 'custom',
    layout: 'player-grid',
    heading: 'Modelli principali 2026',
    players: [
      { emoji: '🟢', name: 'GPT-5', strength: 'Versatile, multimodale, reasoning avanzato' },
      { emoji: '🟠', name: 'Claude Opus 4.6', strength: 'Codice, ragionamento, contesto lungo' },
      { emoji: '🔵', name: 'Gemini 2.5 Pro', strength: '1M token context, integrato Google' },
      { emoji: '🦙', name: 'Llama 4 Scout', strength: 'Open source, 10M context — gratuito' },
      { emoji: '🇨🇳', name: 'DeepSeek-R1', strength: 'Reasoning, open source, costo bassissimo' },
      { emoji: '🇫🇷', name: 'Mistral Large', strength: 'Europeo, privacy, multilingue' },
    ],
    footer: `<strong>Takeaway:</strong> non esiste IL modello migliore. Il panorama è diversificato e ogni modello ha punti di forza specifici — la scelta dipende dal vostro caso d'uso.`,
  },

  // 10. QUANTO COSTA?
  {
    type: 'concept',
    heading: "Quanto costa usare l'AI?",
    centered: true,
    content: `<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px; max-width:900px;">
  <div style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:24px; text-align:center;">
    <div style="font-size:13px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:8px;">ChatGPT Free</div>
    <div style="font-size:36px; font-weight:800; color:var(--text);">€0</div>
    <div style="font-size:13px; color:var(--muted); margin-top:8px;">GPT-4o mini · limite giornaliero</div>
  </div>
  <div style="background:var(--surface); border:1px solid rgba(108,99,255,0.4); border-radius:var(--radius); padding:24px; text-align:center;">
    <div style="font-size:13px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:8px;">ChatGPT Plus</div>
    <div style="font-size:36px; font-weight:800; color:var(--accent);">€20<span style="font-size:16px;">/mese</span></div>
    <div style="font-size:13px; color:var(--muted); margin-top:8px;">GPT-4o + DALL-E + Sora</div>
  </div>
  <div style="background:var(--surface); border:1px solid rgba(108,99,255,0.4); border-radius:var(--radius); padding:24px; text-align:center;">
    <div style="font-size:13px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:8px;">Claude Pro</div>
    <div style="font-size:36px; font-weight:800; color:var(--accent);">€20<span style="font-size:16px;">/mese</span></div>
    <div style="font-size:13px; color:var(--muted); margin-top:8px;">Claude Sonnet + Projects</div>
  </div>
  <div style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:24px; text-align:center;">
    <div style="font-size:13px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:8px;">Gemini Advanced</div>
    <div style="font-size:36px; font-weight:800; color:var(--text);">€22<span style="font-size:16px;">/mese</span></div>
    <div style="font-size:13px; color:var(--muted); margin-top:8px;">Gemini Ultra · integrato Google</div>
  </div>
  <div style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:24px; text-align:center;">
    <div style="font-size:13px; text-transform:uppercase; letter-spacing:2px; color:var(--muted); margin-bottom:8px;">Copilot M365</div>
    <div style="font-size:36px; font-weight:800; color:var(--text);">€24<span style="font-size:16px;">/mese</span></div>
    <div style="font-size:13px; color:var(--muted); margin-top:8px;">Per utente · integrato Office</div>
  </div>
</div>`,
    footer: '💡 €20/mese = 1 ora del tuo tempo. Il ROI si raggiunge in pochi minuti di utilizzo quotidiano.',
  },

  // 11. REASONING MODELS
  {
    type: 'concept',
    heading: 'Reasoning models: la novità',
    content: `I modelli "reasoning" <strong>pensano prima di rispondere</strong>.<br><br>\
Come funziona: generano una catena di ragionamento interna (chain-of-thought) prima di dare la risposta finale.<br><br>\
⏱️ Più lenti, ma molto più accurati su problemi complessi: matematica, logica, codice, analisi.<br><br>\
Esempi: <code>o3</code> (OpenAI), Claude con <em>extended thinking</em>, DeepSeek-R1<br><br>\
💼 <strong>Caso d'uso business:</strong> analisi di un contratto multi-clausola, identificazione di rischi nascosti, decisione su pricing con 10+ variabili, valutazione di candidati con trade-off complessi.`,
    footer: `<strong>Ricorda:</strong> i reasoning model fanno la differenza quando il problema richiede logica multi-step. Per task semplici, un modello standard è più veloce e costa meno.`,
  },

  // 12. CONTEXT WINDOW
  {
    type: 'stats',
    heading: 'Context window: da 4K a 10M token',
    stats: [
      { value: 4, suffix: '', label: 'K token — GPT-3 (2020)' },
      { value: 128, suffix: '', label: 'K token — GPT-4 (2023)' },
      { value: 1000, suffix: '', label: 'K token — Gemini 2.5 Pro (1M)' },
      { value: 10000, suffix: '', label: 'K token — Llama 4 Scout (10M!)' },
    ],
    footer: "1 token ≈ ¾ parola · 128K ≈ un libro di 300 pagine · 10M ≈ un'intera biblioteca",
  },

  // 13. AI MULTIMODALE
  {
    type: 'concept',
    heading: 'AI multimodale',
    content: `📝 <strong>Testo</strong> — scrive, traduce, riassume, ragiona<br>\
🖼️ <strong>Immagini</strong> — capisce foto, genera immagini<br>\
🎵 <strong>Audio</strong> — trascrive, genera voce, capisce parlato<br>\
🎬 <strong>Video</strong> — analizza video, genera clip<br>\
💻 <strong>Codice</strong> — scrive, debugga, spiega, esegue<br><br>\
<strong>3 use case aziendali concreti:</strong><br>\
🏭 <strong>Produzione:</strong> foto di un difetto → AI classifica il problema, suggerisce causa, apre ticket di qualità automaticamente<br>\
🚗 <strong>Assicurazioni:</strong> foto del sinistro auto → stima dei danni in 30 secondi (Tractable.ai, già usato da 20+ assicuratori)<br>\
👥 <strong>HR:</strong> video del colloquio → trascrizione + sentiment analysis + segnalazione di elementi critici da approfondire`,
    footer: `<strong>Il punto chiave:</strong> il multimodale è il nuovo standard. Oggi un'AI che gestisce solo testo è già obsoleta — aspettatevi di lavorare con immagini, audio e video come input naturali.`,
  },

  // 14. MAPPA DEL POTERE
  {
    type: 'custom',
    layout: 'player-grid',
    heading: "Chi produce l'AI: la mappa del potere",
    players: [
      { emoji: '🏢', name: 'OpenAI', strength: 'ChatGPT, GPT-5, o3 — il più diffuso al mondo' },
      { emoji: '🛡️', name: 'Anthropic', strength: 'Claude — focus su sicurezza e codice' },
      { emoji: '🔍', name: 'Google', strength: "Gemini — integrato in tutto l'ecosistema" },
      { emoji: '📘', name: 'Meta', strength: 'Llama — open source, record di contesto' },
      { emoji: '🇫🇷', name: 'Mistral', strength: 'Europeo — privacy e multilingue' },
      { emoji: '🇨🇳', name: 'DeepSeek', strength: 'Cinese — reasoning a basso costo' },
    ],
    footer: `<strong>In pratica:</strong> il potere dell'AI è concentrato in poche aziende, quasi tutte americane e cinesi. L'Europa sta recuperando con Mistral, ma la dipendenza tecnologica resta un tema strategico.`,
  },

  // 15. QUOTE
  {
    type: 'quote',
    text: '"AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."',
    source: '— Sundar Pichai, CEO Google (Davos 2024)',
  },

  // 16. COSA SA FARE
  {
    type: 'concept',
    heading: 'Cosa SA fare oggi',
    content: `✍️ Scrivere testi di ogni tipo<br>\
🌐 Tradurre 100+ lingue<br>\
📊 Analizzare dati e documenti<br>\
💻 Programmare (e debuggare)<br>\
🧠 Ragionare su problemi complessi<br>\
🖼️ Creare immagini da testo<br>\
🎵 Generare e trascrivere audio<br>\
🎬 Analizzare e generare video<br>\
🔍 Fare ricerca e sintesi<br>\
⚡ Automatizzare workflow`,
    image: {
      src: 'https://i.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
      alt: 'Superpowers',
    },
    footer: `<strong>Takeaway:</strong> le capacità dell'AI si espandono ogni mese. Quello che ieri era impossibile, oggi è routine. Tenetevi aggiornati perché il confine si sposta continuamente.`,
  },

  // 17. COSA NON SA FARE
  {
    type: 'concept',
    heading: 'Cosa NON sa fare',
    content: `🚫 <strong>Memoria persistente</strong> — di default, ogni chat riparte da zero<br><br>\
🚫 <strong>Fatti recenti</strong> — ha un training cutoff, non sa cosa è successo ieri<br><br>\
🚫 <strong>Matematica complessa</strong> — può sbagliare calcoli lunghi (migliora con reasoning)<br><br>\
🚫 <strong>Accesso a internet</strong> — di default non naviga (servono plugin/tool)<br><br>\
🚫 <strong>Capire davvero</strong> — pattern matching sofisticato, non comprensione`,
    image: {
      src: 'https://i.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
      alt: 'Confused',
    },
    footer: `<strong>Ricorda:</strong> conoscere i limiti dell'AI è tanto importante quanto conoscerne le capacità. Chi sa cosa l'AI NON sa fare, la usa meglio di tutti.`,
  },

  // 18. ALLUCINAZIONI
  {
    type: 'concept',
    centered: true,
    heading: 'Allucinazioni: il nemico invisibile',
    content: `L'AI può <strong>inventare informazioni con totale sicurezza</strong>.<br><br>\
📄 <strong>Esempio classico:</strong> chiedi di citare un paper scientifico → inventa titolo, autori, DOI. Tutto falso, tutto credibile.<br><br>\
📊 <strong>Dati 2026:</strong> su query legali specifiche, i modelli allucinano tra il 69% e l'88% delle volte — e spesso non se ne accorgono (Suprmind Research, 2026). Il 91% delle aziende ha già implementato protocolli espliciti contro le allucinazioni (feb 2026). I top model general purpose scendono sotto l'1% su fatti generali — ma il rischio esplode su dati specialistici.<br><br>\
⚖️ <strong>In pratica:</strong> nel 2025, i giudici di tutto il mondo hanno emesso centinaia di decisioni su citazioni legali inventate da AI — circa il 90% di tutti gli incidenti noti in ambito legale.`,
    footer: `<strong>Regola d'oro:</strong> verificate SEMPRE i fatti critici generati dall'AI, specialmente citazioni, numeri e riferimenti specifici. Se non potete verificare, non pubblicate.`,
  },

  // 19. IL CASO DELL'AVVOCATO (sostituisce il meme "tutto bene")
  {
    type: 'concept',
    heading: "Quando l'AI sbaglia: casi reali",
    content: `<div style="display:flex; flex-direction:column; gap:20px; max-width:1000px;">
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
    <div style="background:rgba(255,50,50,0.08); border:1px solid rgba(255,50,50,0.3); border-radius:12px; padding:24px;">
      <div style="font-size:24px; margin-bottom:8px;">⚖️</div>
      <div style="font-size:16px; font-weight:700; margin-bottom:8px;">Avvocato USA (2023)</div>
      <p style="font-size:14px; color:var(--text);">6 casi legali inventati da ChatGPT citati in tribunale. Multa <strong>$5.000</strong>. ChatGPT aveva generato nomi di giudici, date, numeri — tutto falso, tutto credibile.</p>
    </div>
    <div style="background:rgba(255,50,50,0.08); border:1px solid rgba(255,50,50,0.3); border-radius:12px; padding:24px;">
      <div style="font-size:24px; margin-bottom:8px;">✈️</div>
      <div style="font-size:16px; font-weight:700; margin-bottom:8px;">Air Canada (Feb 2024)</div>
      <p style="font-size:14px; color:var(--text);">Il chatbot AI ha promesso uno sconto lutto che non esisteva. Il tribunale canadese ha condannato Air Canada a pagarlo: le aziende sono responsabili delle risposte dei propri chatbot. (Fonte: BBC, Feb 2024)</p>
    </div>
  </div>
  <div style="background:rgba(255,180,0,0.08); border:1px solid rgba(255,180,0,0.3); border-radius:12px; padding:24px;">
    <div style="font-size:24px; margin-bottom:8px;">📉</div>
    <div style="font-size:16px; font-weight:700; margin-bottom:8px;">Google Bard — Demo pubblica (Feb 2023)</div>
    <p style="font-size:14px; color:var(--text);">Durante la presentazione ufficiale, Bard ha risposto in modo errato a una domanda sul James Webb Space Telescope. Alphabet ha perso <strong>$100 miliardi</strong> di capitalizzazione in un giorno. La prima impressione conta — anche per i modelli AI. (Fonte: The Verge, Reuters)</p>
  </div>
</div>`,
  },

  // 20. BIAS NEI DATI
  {
    type: 'concept',
    heading: 'Bias nei dati',
    content: `L'AI impara dai dati. <strong>Se i dati sono distorti, l'AI sarà distorta.</strong><br><br>\
👤 <strong>Riconoscimento facciale:</strong> accuratezza del 99% su volti bianchi maschili, del 65% su volti neri femminili (studio MIT Gender Shades — dato fondativo, ancora rilevante).<br><br>\
💼 <strong>Recruiting:</strong> Amazon ha ritirato un tool AI che penalizzava i CV femminili perché i dati storici erano sbilanciati. Casi simili vengono segnalati tuttora.<br><br>\
🏥 <strong>Medicina (2023):</strong> sistemi di triage AI approvati dalla FDA sottostimavano sistematicamente il dolore in pazienti di colore rispetto ai pazienti bianchi con condizioni equivalenti (studio New England Journal of Medicine, 2023).<br><br>\
🌍 <strong>Lingua:</strong> i modelli sono molto migliori in inglese — la performance cala del 30-40% su lingue meno rappresentate nei dati di training.`,
    footer: `<strong>In pratica:</strong> ogni volta che usate l'AI per decisioni che riguardano persone (assunzioni, valutazioni, screening medico), chiedetevi: "i dati di training erano rappresentativi?" Il bias non si elimina, si gestisce con consapevolezza.`,
  },

  // 21. TRAINING CUTOFF
  {
    type: 'concept',
    heading: 'Training cutoff',
    content: `📅 Ogni modello ha una <strong>data limite di conoscenza</strong> — il "training cutoff".<br><br>\
Dopo quella data, il modello <strong>non sa cosa è successo</strong> nel mondo.<br><br>\
🎯 <strong>Demo live da fare in aula:</strong> chiediamo a un modello senza web search "Chi ha vinto le ultime elezioni?" o "Qual è il prezzo attuale di [materia prima]?" — vedremo come risponde e perché non ci si può fidare.<br><br>\
<strong>Workaround:</strong><br>\
🔍 <strong>Web search</strong> — il modello cerca su internet in tempo reale<br>\
📦 <strong>RAG</strong> — gli dai tu i documenti aggiornati<br>\
🔧 <strong>Tool use</strong> — il modello chiama API e database`,
    footer: `<strong>Takeaway:</strong> prima di fidarvi di una risposta sull'attualità, chiedetevi sempre: "il modello poteva saperlo?" Se il fatto è successivo al cutoff, la risposta è inventata.`,
  },

  // 22. STRUMENTO, NON ORACOLO
  {
    type: 'quote',
    text: '"Trust, but verify."',
    source: "L'AI è uno strumento potentissimo — ma resta uno strumento. Il pensiero critico è tuo, non suo.",
  },

  // 23. DEMO — ChatGPT vs Claude
  {
    type: 'demo',
    heading: 'ChatGPT vs Claude: stesso task',
    description: `📋 <strong>Task:</strong> "Analizza questo testo e trova 3 bias nascosti"<br>
🔀 Stessa richiesta, due modelli diversi — confrontiamo le risposte<br>
👀 Guardate: tono, profondita, struttura, errori`,
    demoMaterial: {
      label: 'Testo da analizzare',
      text: `L'intelligenza artificiale sta rivoluzionando il mondo del lavoro. Secondo uno studio recente, le aziende che adottano l'AI registrano un aumento di produttivita del 40%. I programmatori della Silicon Valley sono stati i primi a beneficiarne, dimostrando che chi investe in tecnologia vince sempre.

In Italia, le startup AI stanno crescendo a ritmi record. Milano si sta affermando come hub europeo dell'innovazione, attirando talenti da tutto il Paese. "Chi non adotta l'AI entro il 2027 sara fuori dal mercato", afferma il CEO di una nota azienda tech.

Un sondaggio su 500 manager mostra che il 95% e soddisfatto dopo aver introdotto strumenti AI nel proprio team. I risultati parlano chiaro: l'intelligenza artificiale e la soluzione ai problemi di produttivita che affliggono le aziende italiane da decenni. Le poche aziende che hanno fallito nell'adozione semplicemente non avevano il mindset giusto.`,
      biasHints: [
        "Bias di sopravvivenza: si citano solo le aziende che hanno avuto successo con l'AI, ignorando i fallimenti (\"le poche che hanno fallito non avevano il mindset giusto\")",
        "Bias di conferma: il dato del 95% di manager soddisfatti non specifica chi e stato intervistato (probabilmente solo chi ha mantenuto l'AI, non chi l'ha abbandonata)",
        "Correlazione vs causalita: il 40% di aumento produttivita e attribuito all'AI, ma non si considerano altri fattori (mercato, nuove assunzioni, altri investimenti)",
        'Bias di autorita: "afferma il CEO di una nota azienda tech" — appello all\'autorita senza fonte verificabile',
        'Bias geografico/culturale: il successo e misurato con metriche Silicon Valley applicate al contesto italiano senza adattamento',
      ],
    },
  },

  // 24. DEMO — Multimodale
  {
    type: 'demo',
    heading: "AI multimodale: carica un'immagine",
    description: `📸 Carichiamo la foto di un documento (fattura, ricevuta, carta d'identita)<br>
🤖 Chiediamo all'AI di estrarre tutti i dati strutturati<br>
📊 Output: JSON con nome, data, importi — tutto estratto automaticamente`,
    demoMaterial: {
      label: 'Documento fac-simile da usare',
      note: 'Il docente puo usare uno dei seguenti (preparare prima della lezione):',
      options: [
        '1. Una fattura di esempio (es. fattura energia/telefono con dati personali oscurati)',
        '2. Uno scontrino fiscale fotografato col telefono',
        "3. Una carta d'identita di esempio (usare un documento fittizio o un generatore online)",
      ],
      prompt: "Prompt da dare all'AI: \"Analizza questa immagine. Estrai tutti i dati in formato JSON strutturato: nome, data, importi, codici, indirizzi. Segnala i campi che non riesci a leggere.\"",
      expectedOutput: `{
  "tipo_documento": "Fattura",
  "emittente": "...",
  "destinatario": "...",
  "data_emissione": "...",
  "numero_fattura": "...",
  "importo_totale": "...",
  "iva": "...",
  "voci": [...]
}`,
    },
  },

  // 25. DEMO — Reasoning
  {
    type: 'demo',
    heading: 'Reasoning model in azione',
    description: `🧩 <strong>Problema HR:</strong> "Ho 3 candidati per una posizione manager: A ha 10 anni di esperienza ma chiede €80K, B ne ha 5 ma chiede €55K e ha già lavorato nel nostro settore, C è junior ma ha contribuito a 2 startup di successo. Il budget approvato è €65K. Chi scelgo e perché?"<br>\
🔍 Osserviamo il processo di ragionamento step-by-step — come il modello bilancia trade-off, ambiguità e variabili multiple<br>\
⚡ Confronto: modello standard vs reasoning model (o3 / Claude extended thinking) — la differenza è visibile`,
  },

  // 26. CASO REALE — Prompt foto Giappone
  {
    type: 'demo',
    heading: 'Prompt reale: editing foto con AI',
    description: `📸 <strong>Caso d'uso:</strong> editing di 188 foto di viaggio in stile cinematico giapponese — con un solo prompt.<br>
🎯 <strong>Il punto:</strong> non "migliora questa foto" ma un sistema di istruzioni preciso che replica lo stesso stile su centinaia di immagini.<br>
💡 <strong>Takeaway:</strong> la differenza tra un prompt generico e uno professionale è la differenza tra un risultato mediocre e un risultato consistente.`,
    demoMaterial: {
      label: 'Il prompt usato (ChatGPT, image editing)',
      text: `Use image generation to edit this photo.

Base Rules: Use the original image as strict base. Editing only (no generation). Do NOT add/remove elements. Do NOT alter composition or structure.

Realism & Materials: Preserve textures, materials, and natural grain. Maintain full surface realism. No smoothing. No plastic effect. No artificial sharpening.

Lighting (Cinematic & Natural): Preserve original lighting direction and sources. Do NOT introduce new light or alter scene logic. Preserve original time-of-day and overall scene mood. Amplify existing light only: Increase light/shadow contrast (no detail loss). Gently boost natural highlights. Deepen shadows without crushing blacks. Add soft gradients following original light.

Bloom / Glare + White Enhancement: Apply ONLY on existing bright sources. Keep soft, diffused, physically plausible. No heavy glow or washed highlights. Subtle lens flare only if coherent. Gently lift whites ONLY where naturally illuminated. Increase brightness without clipping details. Preserve texture inside highlights. Blend whites seamlessly into bloom. Avoid flat pure white. Keep transitions soft, airy, and natural.

Color Grading: Preserve original color balance of the scene. Maintain natural greens and blues. Respect scene context (daylight, night tones, artificial lighting). Pink tones: Brighter, lighter, more airy, slightly desaturated. Slightly warm highlights. Neutral, clean shadows. Preserve smooth color transitions.

Enhancements: Remove only minor distractions. Apply subtle perspective correction. Maintain full detail fidelity.

Subject Handling: Keep subject sharp and naturally separated via light contrast. No artificial depth of field.

Motion Blur: Apply ONLY to already moving elements. Keep subtle and realistic.

Hard Constraints: No AI artifacts. No fake lighting. No inconsistent shadows. No HDR or overprocessed look.

Style: Cinematic, minimal, Japanese photography. Soft atmospheric light. Delicate colors. Refined bloom. Premium editorial look with preserved texture and authentic mood.

OUTPUT THE EDITED IMAGE.`,
    },
  },

  // 27. HANDS-ON
  {
    type: 'hands-on',
    heading: 'Ora tocca a voi!',
    timer: '45 minuti',
    instructions: [
      'Aprite <strong>ChatGPT</strong> (chat.openai.com) e <strong>Claude</strong> (claude.ai)',
      'Fate la <strong>stessa domanda</strong> a entrambi — scegliete voi il tema',
      'Trovate <strong>3 cose che fanno bene</strong> e <strong>3 che fanno male</strong>',
      'Provate a farli <strong>"allucinare"</strong> — chiedete fatti specifici e verificate',
      'Preparate 2 slide (carta e penna) con i vostri risultati per la discussione',
    ],
  },

  // 27. RECAP
  {
    type: 'recap',
    heading: 'Cosa hai imparato oggi',
    items: [
      "Lo stato dell'arte dell'AI nel 2026 e i modelli principali",
      "I 3 paradigmi: LLM, Multimodal, Agents",
      'Cosa l\'AI sa e non sa fare — e perché "allucinam"',
      'Bias, training cutoff e come mitigarli',
      'Hai testato ChatGPT e Claude con occhio critico',
    ],
  },

  // 28. RISORSE
  {
    type: 'resource',
    heading: 'Risorse per approfondire',
    links: [
      { label: 'llm-stats.com — aggiornamenti giornalieri sui modelli', url: 'https://llm-stats.com/llm-updates', icon: '🔗' },
      { label: 'Zapier — confronto modelli per non-tecnici', url: 'https://zapier.com/blog/best-llm/', icon: '🔗' },
      { label: 'Azumo — Top 10 LLM del 2025/26', url: 'https://azumo.com/artificial-intelligence/ai-insights/top-10-llms-0625', icon: '🔗' },
      { label: 'Medium — Storia dei LLM: dai Transformer a DeepSeek-R1', url: 'https://medium.com/@lmpo/a-brief-history-of-lmms-from-transformers-2017-to-deepseek-r1-2025', icon: '🔗' },
    ],
  },

  // 29. ANTEPRIMA LEZIONE 2
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: 'Come funzionano i modelli',
    subtitle: 'Tokenizzazione · Embedding · Attention · Training\nLezione 02 — Blocco FONDAMENTA',
  },

  // 30. CONTATTI (penultima slide)
  {
    type: 'concept',
    centered: true,
    heading: 'Trovami qui',
    content: `<p style="font-size:16px; color:var(--muted); margin-bottom:40px;">Se avete domande dopo il corso, cercatemi su LinkedIn o GitHub. Rispondo sempre.</p>
<div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; max-width:700px; margin:0 auto;">
  <a href="https://www.linkedin.com/in/attiliocianci/" target="_blank" rel="noopener" style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:28px 36px; display:flex; align-items:center; gap:18px; text-decoration:none; color:var(--text); min-width:260px;">
    <span style="font-size:32px;">🔗</span>
    <div>
      <div style="font-size:13px; color:var(--muted);">LinkedIn</div>
      <div style="font-size:18px; font-weight:700;">Attilio Cianci</div>
    </div>
  </a>
  <a href="https://github.com/zorahrel" target="_blank" rel="noopener" style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:28px 36px; display:flex; align-items:center; gap:18px; text-decoration:none; color:var(--text); min-width:260px;">
    <span style="font-size:32px;">🐙</span>
    <div>
      <div style="font-size:13px; color:var(--muted);">GitHub</div>
      <div style="font-size:18px; font-weight:700;">@zorahrel</div>
    </div>
  </a>
</div>`,
  },

  // 31. MEME FINALE
  {
    type: 'meme',
    image: {
      src: 'https://i.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif',
      alt: 'See you tomorrow',
    },
    caption: '"Ci vediamo domani — e stavolta portate i portatili carichi! 🔋"',
  },
]
