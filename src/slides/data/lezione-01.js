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

  // 2. CHI SONO
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

  // 3. PATTO D'AULA
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

  // 4. CONTATTI
  {
    type: 'concept',
    centered: true,
    heading: 'Trovami qui',
    content: `<p style="font-size:16px; color:var(--muted); margin-bottom:32px;">Aggiungimi su LinkedIn — se hai domande dopo il corso, mi trovi li. Rispondo sempre.</p>
<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; max-width:700px; margin:0 auto;">
  <a href="https://www.linkedin.com/in/attiliocianci/" target="_blank" rel="noopener" style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:20px 28px; display:flex; align-items:center; gap:14px; text-decoration:none; color:var(--text); min-width:200px;">
    <span style="font-size:24px;">🔗</span>
    <div>
      <div style="font-size:12px; color:var(--muted);">LinkedIn</div>
      <div style="font-size:15px; font-weight:600;">Attilio Cianci</div>
    </div>
  </a>
  <a href="https://calendly.com/attiliocianci/1-1" target="_blank" rel="noopener" style="background:var(--surface); border:1px solid rgba(255,255,255,0.08); border-radius:var(--radius); padding:20px 28px; display:flex; align-items:center; gap:14px; text-decoration:none; color:var(--text); min-width:200px;">
    <span style="font-size:24px;">📅</span>
    <div>
      <div style="font-size:12px; color:var(--muted);">Vuoi una call?</div>
      <div style="font-size:15px; font-weight:600;">Prenota qui</div>
    </div>
  </a>
</div>
<div style="margin-top:32px; display:flex; align-items:center; gap:12px; padding:16px 28px; background:rgba(108,99,255,.08); border:1px solid rgba(108,99,255,.2); border-radius:var(--radius); justify-content:center;">
  <div style="text-align:left;">
    <div style="font-size:16px; font-weight:700;">Armonia</div>
    <div style="font-size:13px; color:var(--muted);">Web agency & digital studio · armonia.studio · Salerno</div>
  </div>
</div>`,
  },

  // 5. AGENDA
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

  // 3. ICEBREAKER
  {
    type: 'meme',
    heading: 'Icebreaker',
    image: {
      src: 'https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif',
      alt: 'AI thinking',
    },
    caption: '"Che AI hai usato questa settimana? E per fare cosa?"',
  },

  // 4. TIMELINE AI
  {
    type: 'concept',
    heading: "L'AI nel 2026: dove siamo",
    content: `<strong>2017</strong> — Transformer (Google) 🔬<br>\
<strong>2018</strong> — BERT cambia l'NLP<br>\
<strong>2020</strong> — GPT-3: 175B parametri 🤯<br>\
<strong>2022</strong> — ChatGPT: AI per tutti<br>\
<strong>2023</strong> — GPT-4, Claude 2, modelli multimodali<br>\
<strong>2024</strong> — Reasoning models (o1), agenti AI<br>\
<strong>2025–26</strong> — GPT-4o, Claude 4.5, Gemini 3.1, 10M token context, agenti autonomi 🚀`,
    image: {
      src: 'assets/diagrams/llm-timeline.svg',
      alt: 'LLM Timeline 2017-2026',
    },
    footer: `<strong>In pratica:</strong> in meno di 4 anni siamo passati da "l'AI sa scrivere email" a "l'AI ragiona, vede, ascolta e agisce". La velocità di questa evoluzione non ha precedenti.`,
  },

  // 5. I 3 PARADIGMI
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

  // 6. MODELLI PRINCIPALI 2026
  {
    type: 'custom',
    layout: 'player-grid',
    heading: 'Modelli principali 2026',
    players: [
      { emoji: '🟢', name: 'GPT-4o', strength: 'Versatile, multimodale, veloce' },
      { emoji: '🟠', name: 'Claude 4.5', strength: 'Codice, ragionamento, contesto lungo' },
      { emoji: '🔵', name: 'Gemini 3.1', strength: '1M token context, integrato Google' },
      { emoji: '🦙', name: 'Llama 4', strength: 'Open source, 10M context (Scout)' },
      { emoji: '🇨🇳', name: 'DeepSeek-R1', strength: 'Reasoning, open, costo bassissimo' },
      { emoji: '🇫🇷', name: 'Mistral Large', strength: 'Europeo, multilingue, efficiente' },
    ],
    footer: `<strong>Takeaway:</strong> non esiste IL modello migliore. Il panorama è diversificato e ogni modello ha punti di forza specifici — la scelta dipende dal vostro caso d'uso.`,
  },

  // 7. REASONING MODELS
  {
    type: 'concept',
    heading: 'Reasoning models: la novità',
    content: `I modelli "reasoning" <strong>pensano prima di rispondere</strong>.<br><br>\
Come funziona: generano una catena di ragionamento interna (chain-of-thought) prima di dare la risposta finale.<br><br>\
⏱️ Più lenti, ma molto più accurati su problemi complessi: matematica, logica, codice, analisi.<br><br>\
Esempi: <code>o3</code> (OpenAI), Claude con <em>extended thinking</em>, DeepSeek-R1`,
    image: {
      src: 'https://media.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif',
      alt: 'Thinking',
    },
    footer: `<strong>Ricorda:</strong> i reasoning model fanno la differenza quando il problema richiede logica multi-step. Per task semplici, un modello standard è più veloce e costa meno.`,
  },

  // 8. CONTEXT WINDOW
  {
    type: 'stats',
    heading: 'Context window: da 4K a 10M token',
    stats: [
      { value: 4, suffix: '', label: 'K token — GPT-3 (2020)' },
      { value: 128, suffix: '', label: 'K token — GPT-4 (2023)' },
      { value: 1000, suffix: '', label: 'K token — Gemini 3.1 (1M)' },
      { value: 10000, suffix: '', label: 'K token — Llama 4 Scout (10M!)' },
    ],
    footer: '1 token ≈ ¾ parola · 128K ≈ un libro di 300 pagine · 10M ≈ un\'intera biblioteca',
  },

  // 9. AI MULTIMODALE
  {
    type: 'concept',
    heading: 'AI multimodale',
    content: `📝 <strong>Testo</strong> — scrive, traduce, riassume, ragiona<br>\
🖼️ <strong>Immagini</strong> — capisce foto, genera immagini<br>\
🎵 <strong>Audio</strong> — trascrive, genera voce, capisce parlato<br>\
🎬 <strong>Video</strong> — analizza video, genera clip<br>\
💻 <strong>Codice</strong> — scrive, debugga, spiega, esegue<br><br>\
Un solo modello, tutti i formati. Questo è il 2026.`,
    image: {
      src: 'https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif',
      alt: 'Technology',
    },
    footer: `<strong>Il punto chiave:</strong> il multimodale è il nuovo standard. Oggi un'AI che gestisce solo testo è già obsoleta — aspettatevi di lavorare con immagini, audio e video come input naturali.`,
  },

  // 10. MAPPA DEL POTERE
  {
    type: 'custom',
    layout: 'player-grid',
    heading: "Chi produce l'AI: la mappa del potere",
    players: [
      { emoji: '🏢', name: 'OpenAI', strength: 'ChatGPT, GPT-4o, o3 — il più popolare' },
      { emoji: '🛡️', name: 'Anthropic', strength: 'Claude — focus su sicurezza e codice' },
      { emoji: '🔍', name: 'Google', strength: "Gemini — integrato in tutto l'ecosistema" },
      { emoji: '📘', name: 'Meta', strength: 'Llama — open source, record di contesto' },
      { emoji: '🇫🇷', name: 'Mistral', strength: 'Europeo — privacy e multilingue' },
      { emoji: '🇨🇳', name: 'DeepSeek', strength: 'Cinese — reasoning a basso costo' },
    ],
    footer: `<strong>In pratica:</strong> il potere dell'AI è concentrato in poche aziende, quasi tutte americane e cinesi. L'Europa sta recuperando con Mistral, ma la dipendenza tecnologica resta un tema strategico.`,
  },

  // 11. QUOTE
  {
    type: 'quote',
    text: '"AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire."',
    source: '— Sundar Pichai, CEO Google (Davos 2024)',
  },

  // 12. COSA SA FARE
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
      src: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
      alt: 'Superpowers',
    },
    footer: `<strong>Takeaway:</strong> le capacità dell'AI si espandono ogni mese. Quello che ieri era impossibile, oggi è routine. Tenetevi aggiornati perché il confine si sposta continuamente.`,
  },

  // 13. COSA NON SA FARE
  {
    type: 'concept',
    heading: 'Cosa NON sa fare',
    content: `🚫 <strong>Memoria persistente</strong> — di default, ogni chat riparte da zero<br><br>\
🚫 <strong>Fatti recenti</strong> — ha un training cutoff, non sa cosa è successo ieri<br><br>\
🚫 <strong>Matematica complessa</strong> — può sbagliare calcoli lunghi (migliora con reasoning)<br><br>\
🚫 <strong>Accesso a internet</strong> — di default non naviga (servono plugin/tool)<br><br>\
🚫 <strong>Capire davvero</strong> — pattern matching sofisticato, non comprensione`,
    image: {
      src: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
      alt: 'Confused',
    },
    footer: `<strong>Ricorda:</strong> conoscere i limiti dell'AI è tanto importante quanto conoscerne le capacità. Chi sa cosa l'AI NON sa fare, la usa meglio di tutti.`,
  },

  // 14. ALLUCINAZIONI
  {
    type: 'concept',
    heading: 'Allucinazioni: il nemico invisibile',
    content: `L'AI può <strong>inventare informazioni con totale sicurezza</strong>.<br><br>\
📄 <strong>Esempio classico:</strong> chiedi di citare un paper scientifico → inventa titolo, autori, DOI. Tutto falso, tutto credibile.<br><br>\
⚖️ <strong>Caso reale:</strong> un avvocato USA ha citato in tribunale casi legali inventati da ChatGPT (2023).<br><br>\
🔑 <strong>Regola d'oro:</strong> verifica sempre le fonti. L'AI non sa cosa non sa.`,
    image: {
      src: 'https://media.giphy.com/media/3oEjHAUOqG3lSS0f1C/giphy.gif',
      alt: 'Illusion',
    },
    footer: `<strong>Regola d'oro:</strong> verificate SEMPRE i fatti critici generati dall'AI, specialmente citazioni, numeri e riferimenti specifici. Se non potete verificare, non pubblicate.`,
  },

  // 15. BIAS NEI DATI
  {
    type: 'concept',
    heading: 'Bias nei dati',
    content: `L'AI impara dai dati. <strong>Se i dati sono distorti, l'AI sarà distorta.</strong><br><br>\
👤 <strong>Riconoscimento facciale:</strong> accuratezza del 99% su volti bianchi maschili, del 65% su volti neri femminili (studio MIT 2018).<br><br>\
💼 <strong>Recruiting:</strong> Amazon ha ritirato un tool AI che penalizzava i CV femminili perché i dati storici erano sbilanciati.<br><br>\
🌍 <strong>Lingua:</strong> i modelli sono molto migliori in inglese che in altre lingue — gap culturale e linguistico.`,
    image: {
      src: 'https://media.giphy.com/media/l2JhORT5IFnj6ioko/giphy.gif',
      alt: 'Bias',
    },
    footer: `<strong>In pratica:</strong> ogni volta che usate l'AI per decisioni che riguardano persone (assunzioni, valutazioni, screening), chiedetevi: "i dati di training erano rappresentativi?" Il bias non si elimina, si gestisce con consapevolezza.`,
  },

  // 16. TRAINING CUTOFF
  {
    type: 'concept',
    heading: 'Training cutoff',
    content: `📅 Ogni modello ha una <strong>data limite di conoscenza</strong> — il "training cutoff".<br><br>\
Dopo quella data, il modello <strong>non sa cosa è successo</strong> nel mondo.<br><br>\
<strong>Workaround:</strong><br>\
🔍 <strong>Web search</strong> — il modello cerca su internet in tempo reale<br>\
📦 <strong>RAG</strong> — gli dai tu i documenti aggiornati<br>\
🔧 <strong>Tool use</strong> — il modello chiama API e database`,
    image: {
      src: 'https://media.giphy.com/media/3o7btZ1Gm7ZL25pLMs/giphy.gif',
      alt: 'Calendar',
    },
    footer: `<strong>Takeaway:</strong> prima di fidarvi di una risposta sull'attualità, chiedetevi sempre: "il modello poteva saperlo?" Se il fatto è successivo al cutoff, la risposta è inventata.`,
  },

  // 17. STRUMENTO, NON ORACOLO
  {
    type: 'quote',
    text: '"Trust, but verify."',
    source: "L'AI è uno strumento potentissimo — ma resta uno strumento.<br>Il pensiero critico è tuo, non suo.",
  },

  // 18. MEME — TRUST AI
  {
    type: 'meme',
    image: {
      src: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
      alt: 'Everything is fine',
    },
    caption: '"Quando ti fidi al 100% della risposta dell\'AI senza verificare"',
  },

  // 19. DEMO — ChatGPT vs Claude
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
        'Bias di sopravvivenza: si citano solo le aziende che hanno avuto successo con l\'AI, ignorando i fallimenti ("le poche che hanno fallito non avevano il mindset giusto")',
        'Bias di conferma: il dato del 95% di manager soddisfatti non specifica chi e stato intervistato (probabilmente solo chi ha mantenuto l\'AI, non chi l\'ha abbandonata)',
        'Correlazione vs causalita: il 40% di aumento produttivita e attribuito all\'AI, ma non si considerano altri fattori (mercato, nuove assunzioni, altri investimenti)',
        'Bias di autorita: "afferma il CEO di una nota azienda tech" — appello all\'autorita senza fonte verificabile',
        'Bias geografico/culturale: il successo e misurato con metriche Silicon Valley applicate al contesto italiano senza adattamento',
      ],
    },
  },

  // 20. DEMO — Multimodale
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
        '3. Una carta d\'identita di esempio (usare un documento fittizio o un generatore online)',
      ],
      prompt: 'Prompt da dare all\'AI: "Analizza questa immagine. Estrai tutti i dati in formato JSON strutturato: nome, data, importi, codici, indirizzi. Segnala i campi che non riesci a leggere."',
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

  // 21. DEMO — Reasoning
  {
    type: 'demo',
    heading: 'Reasoning model in azione',
    description: `🧩 Problema: "Se un treno parte da Milano alle 9:15 a 120km/h e un altro da Roma alle 9:45 a 150km/h, dove si incontrano?"<br>\
🔍 Osserviamo il processo di ragionamento step-by-step<br>\
⚡ Confronto: modello standard vs reasoning model (o3 / Claude extended thinking)`,
  },

  // 22. HANDS-ON
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

  // 23. RECAP
  {
    type: 'recap',
    heading: 'Cosa hai imparato oggi',
    items: [
      "Lo stato dell'arte dell'AI nel 2026 e i modelli principali",
      'I 3 paradigmi: LLM, Multimodal, Agents',
      'Cosa l\'AI sa e non sa fare — e perché "allucinam"',
      'Bias, training cutoff e come mitigarli',
      'Hai testato ChatGPT e Claude con occhio critico',
    ],
  },

  // 24. RISORSE
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

  // 25. ANTEPRIMA LEZIONE 2
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: 'Come funzionano i modelli',
    subtitle: 'Tokenizzazione · Embedding · Attention · Training\nLezione 02 — Blocco FONDAMENTA',
  },

  // 26. MEME FINALE
  {
    type: 'meme',
    image: {
      src: 'https://media.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif',
      alt: 'See you tomorrow',
    },
    caption: '"Ci vediamo domani — e stavolta portate i portatili carichi! 🔋"',
  },
]
