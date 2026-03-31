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
    image: { src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFqOXR0bHJiNHkxN2h2NXQ3d2dsMXA3MHF4Z3h0cHJ5Y2YzZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IZY2SE2JmPgFCo/giphy.gif', alt: 'Robot taking over' },
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
      { icon: '📡', title: 'Telecom: 48%', description: 'Quasi metà delle telco ha agenti AI in produzione (NVIDIA 2026)' },
      { icon: '🛒', title: 'Retail/CPG: 47%', description: 'Agenti per supply chain, pricing, customer service (NVIDIA 2026)' },
      { icon: '🏢', title: 'Enterprise: 78%', description: 'Adoption AI da 55% a 78% in un anno (AmplifAI)' },
      { icon: '⚠️', title: '22% abbandonato', description: 'Quasi 1 progetto agentico su 4 fallisce per risultati insufficienti' },
      { icon: '🔮', title: 'NVIDIA 2026', description: 'Agentic AI è il trend #1 nel report State of AI 2026' },
      { icon: '📊', title: '150+ data points', description: 'Digital Applied ha raccolto 150+ statistiche sull\'AI agentica' },
    ],
    footer: '<strong>Il messaggio:</strong> l\'AI agentica non è futuro — è presente. Ma il 22% di fallimenti dimostra che serve strategia, non solo tecnologia.',
  },

  // 6. Agente vs Chatbot vs Workflow
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Agente vs Chatbot vs Workflow',
    columns: ['', 'Chatbot', 'Workflow', 'Agente AI'],
    rows: [
      ['Autonomia', 'Nessuna — risponde a domande', 'Fissa — segue regole IF/THEN', 'Alta — pianifica e decide'],
      ['Tool use', 'No (solo testo)', 'Sì, predefiniti', 'Sì, scoperti dinamicamente'],
      ['Adattabilità', 'Zero', 'Bassa', 'Alta — si auto-corregge'],
      ['Esempio', 'FAQ bot', 'Email → Slack → Sheet', 'Monitora competitor, analizza, riporta'],
      ['Complessità setup', 'Bassa', 'Media', 'Alta'],
    ],
    footer: '<strong>Regola pratica:</strong> usa un chatbot per le FAQ, un workflow per processi ripetitivi, un agente per task complessi che richiedono giudizio.',
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
  ⚡ <strong>Zapier:</strong> il più popolare, 7000+ integrazioni, zero codice. Perfetto per PMI.<br>
  🟧 <strong>Make.com:</strong> visual builder potente, più flessibile di Zapier, ottimo rapporto prezzo/features.<br>
  🟩 <strong>n8n:</strong> open source, self-hosted, con nodi AI nativi. Per chi vuole controllo totale.
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
    footer: '<strong>Consiglio:</strong> inizia con Zapier se sei non-tecnico, Make.com per workflow complessi, n8n se vuoi controllo totale e hai risorse tech.',
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

  // ─── SEZIONE 3: AI ACT ───

  // 10. AI Act: lo stato aggiornato
  {
    type: 'concept',
    heading: 'AI Act: lo stato al 2026',
    content: `<p class="concept-text">
  L'<strong>AI Act europeo</strong> è il primo regolamento al mondo sull'intelligenza artificiale.
  <br><br>
  <strong>📅 Timeline aggiornata (26 marzo 2026):</strong><br>
  ✅ Feb 2025 — Divieti pratiche inaccettabili (social scoring, manipolazione)<br>
  ✅ Ago 2025 — Norme sui modelli GPAI (General Purpose AI)<br>
  ⏳ Ago 2026 — <strong>Piena applicabilità generale</strong><br>
  🔄 2027-2028 — Sistemi ad alto rischio (<strong>RINVIATO</strong> il 26/3/2026)
  <br><br>
  <strong>⚠️ Obbligo AI Literacy già in vigore</strong> — le aziende devono formare il personale. Sanzioni fino a <strong>€35M</strong>.
</p>`,
    image: { src: '', alt: '' },
  },

  // 11. AI Act: classificazione rischio
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'AI Act: i 4 livelli di rischio',
    features: [
      { icon: '🚫', title: 'Inaccettabile', description: 'VIETATO: social scoring, manipolazione subliminale, nudificazione AI' },
      { icon: '🔴', title: 'Alto rischio', description: 'Regolato: assunzioni, credito, sanità, giustizia — rinviato a 2027-2028' },
      { icon: '🟡', title: 'Rischio limitato', description: 'Obbligo trasparenza: chatbot devono dichiarare di essere AI' },
      { icon: '🟢', title: 'Rischio minimo', description: 'Libero: la maggior parte delle app AI consumer — nessun obbligo specifico' },
    ],
    footer: '<strong>Per le aziende:</strong> il rinvio sull\'alto rischio dà più tempo, ma l\'obbligo di AI Literacy è GIÀ attivo. Non aspettate.',
  },

  // ─── SEZIONE 4: ADOZIONE AI IN ITALIA ───

  // 12. Adozione AI in Italia: i dati reali
  {
    type: 'concept',
    heading: 'Adozione AI in Italia: Banca d\'Italia',
    content: `<p class="concept-text">
  <strong>Studio empirico QEF N.1005 (marzo 2026)</strong> — primo studio italiano su impatto reale dell'AI nelle imprese.
  <br><br>
  📊 <strong>8,2%</strong> delle imprese italiane (10+ dipendenti) usa AI — media EU: <strong>13,5%</strong><br>
  📈 Chi adotta AI: <strong>+5,2% produttività</strong>, <strong>+2% margini operativi</strong><br>
  👥 Effetto occupazione: <strong>non significativo</strong> — l'AI NON sta tagliando posti in Italia<br>
  💡 Solo il 3% ha soluzioni AI proprie; 29% mix interno/esterno
  <br><br>
  <strong>Barriere:</strong> carenza talenti (39%), difficoltà a trovare use case (27%), governance (27%)
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
      ['Imprese che usano AI', '8,2%', '88% (enterprise)'],
      ['Adozione YoY', 'n.d.', '+23pp (55%→78%)'],
      ['GitHub Copilot', 'In crescita', '4,7M abbonati (+75% YoY)'],
      ['Microsoft Copilot M365', 'In rollout', '41% adoption enterprise'],
      ['Claude business', 'Emergente', '300K+ clienti, $14B run-rate'],
    ],
    footer: '<strong>Il messaggio:</strong> 8% vs 88% — il gap è enorme, ma chi si muove ora ha un vantaggio competitivo colossale.',
  },

  // 14. Case study Italia 2026
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Case study Italia 2026',
    features: [
      { icon: '🏦', title: 'Banca d\'Italia', description: 'QEF N.1005: +5,2% produttività, nessun impatto negativo su occupazione' },
      { icon: '🇮🇹', title: 'Bando vIvA', description: '10 progetti AI selezionati per il Made in Italy (30 marzo 2026)' },
      { icon: '💼', title: 'Dedagroup/DedaAI', description: '€50M investiti in AI, 200+ professionisti dedicati' },
      { icon: '🏛️', title: 'Fondazione Leonardo', description: 'Report AI-readiness + fondi PNRR (25 marzo 2026)' },
    ],
    footer: '<strong>L\'AI in Italia si sta muovendo:</strong> dati empirici, bandi pubblici, investimenti privati. Non è più teoria.',
  },

  // ─── SEZIONE 5: ROI DELL'AI ───

  // 15. ROI dell'AI: numeri concreti
  {
    type: 'concept',
    heading: 'ROI dell\'AI: quanto vale davvero',
    content: `<p class="concept-text">
  <strong>$7.800/dipendente/anno</strong> — il ROI medio dell'AI nelle aziende che l'hanno adottata strutturalmente.
  <br><br>
  <strong>Top 3 use case GenAI (2026):</strong><br>
  📝 Content creation: <strong>71%</strong> delle aziende<br>
  💻 Code generation: <strong>58%</strong><br>
  🤝 Customer interaction: <strong>54%</strong>
  <br><br>
  <strong>In Italia (PMI):</strong><br>
  ⏱️ Tempo risparmiato: 6,5 ore/settimana per dipendente<br>
  💸 Riduzione costi operativi: -12% medio<br>
  📈 ROI primo anno: 180% (chi implementa in modo strutturato)
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
  30 min risparmiati/giorno × 220 giorni lavorativi = <strong>110 ore/anno</strong> = quasi <strong>3 settimane</strong>
  <br><br>
  Con 50 dipendenti: 50 × $7.800 = <strong>$390.000/anno</strong> di valore generato
  <br><br>
  <strong>Costo medio AI per PMI:</strong><br>
  • 10-50 dipendenti: ~€15.000/anno<br>
  • 50-250 dipendenti: ~€65.000/anno<br>
  • Il 45% usa solo tool gratuiti o freemium
  <br><br>
  <strong>Il ROI è spesso &gt;10x</strong> — il problema non è il costo, è non iniziare.
</p>`,
    image: { src: '', alt: '' },
  },

  // 17. MEME
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJ2OWd2NnN1eWFtZzF1MWM0aHB0eDNoMXduMmh2cTd4N3N0a2VnNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/67ThRZlYBvibtMA4AP/giphy.gif', alt: 'Money money money' },
    caption: '"Quando mostri al CEO il ROI dell\'AI e improvvisamente il budget c\'è"',
  },

  // ─── SEZIONE 6: CHANGE MANAGEMENT ───

  // 18. Change management: le resistenze
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Le 5 resistenze più comuni',
    features: [
      { icon: '😰', title: '"Mi ruberà il lavoro"', description: 'Dato Italia: nessun effetto significativo su occupazione (Banca d\'Italia 2026)' },
      { icon: '🤷', title: '"Non sappiamo da dove iniziare"', description: '62% delle PMI — serve un percorso guidato, non un big bang' },
      { icon: '🎓', title: '"Mancano competenze"', description: '58% delle PMI — per questo l\'AI Literacy è obbligatoria per legge' },
      { icon: '💸', title: '"Costa troppo"', description: '45% usa tool gratuiti — il costo non è la vera barriera' },
      { icon: '🙅', title: '"Il management non ci crede"', description: '29% delle PMI — servono numeri concreti ($7.800/dipendente/anno)' },
    ],
    footer: '<strong>Pattern:</strong> la resistenza è quasi sempre culturale, non tecnologica. I numeri aiutano a sbloccare, ma serve anche un champion interno.',
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
    footer: 'Non automazione totale, ma <strong>augmentation</strong>. L\'AI gestisce il volume, l\'umano garantisce la qualità. Questo rassicura il team e produce risultati migliori.',
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
    image: { src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGU0cnVzaGdhMjF1ZWt2Yzlkb3M2YWp6emZwcThqMW1rcW14dmJ4aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btNa0RUYa5E7yl2/giphy.gif', alt: 'This is fine' },
    caption: '"Le aziende italiane che ancora non usano AI guardando l\'88% mondiale"',
  },

  // 23. HANDS-ON
  {
    type: 'hands-on',
    heading: 'Esercitazione: AI Readiness + Pitch',
    timer: '90 minuti',
    instructions: [
      '<strong>AI Readiness Assessment (30 min):</strong> Compila il template di autovalutazione per la tua azienda — dati, competenze, budget, governance, use case. Output: score e roadmap.',
      '<strong>Calcola il ROI (15 min):</strong> Quanti dipendenti? × $7.800/anno = valore potenziale. Confronta con costo tool. Il business case si scrive da solo.',
      '<strong>"Agent vs Workflow" (30 min):</strong> Stesso task (es: monitorare prezzi competitor) — implementalo con un workflow Zapier/Make E con un agente n8n. Confronta setup, flessibilità, costo.',
      '<strong>Pitch per il CEO (15 min):</strong> Prepara un pitch di 3 minuti: use case specifico, ROI stimato, timeline 90 giorni, compliance AI Act.',
    ],
  },

  // 24. RECAP
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Agenti AI: autonomia + tool use + loop — il 48% delle telco li usa già',
      'Workflow automation: Zapier (semplice), Make (flessibile), n8n (open source + agenti)',
      'AI Act: rinvio alto rischio 2027-2028, ma AI Literacy è GIÀ obbligatoria',
      'Italia: 8,2% adozione vs 88% mondiale — gap enorme, opportunità enorme',
      'ROI: $7.800/dipendente/anno, 180% primo anno per chi implementa bene',
      'Change management: la resistenza è culturale, non tecnologica — servono numeri e champion',
    ],
  },

  // 25. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'NVIDIA State of AI Report 2026', url: 'https://blogs.nvidia.com/blog/state-of-ai-report-2026/' },
      { label: 'Banca d\'Italia QEF N.1005 — AI e imprese italiane', url: 'https://www.bancaditalia.it/pubblicazioni/qef/2026-1005/index.html' },
      { label: 'AI Act — rinvio alto rischio (Tom\'s Hardware)', url: 'https://www.tomshw.it/business/ai-act-rinvio-sistemi-alto-rischio-2027-2028' },
      { label: 'Deloitte State of AI in Enterprise 2026', url: 'https://www.deloitte.com/cy/en/issues/generative-ai/state-of-ai-in-enterprise.html' },
      { label: 'n8n AI Agent Tutorial 2026 (YouTube)', url: 'https://www.youtube.com/watch?v=PfdnYe2690E' },
      { label: '150+ Agentic AI Statistics 2026', url: 'https://www.digitalapplied.com/blog/agentic-ai-statistics-2026-definitive-collection-150-data-points' },
    ],
  },

  // 26. Prossima lezione
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: '06 · Lab: Esplora\nle Piattaforme',
    subtitle: 'ChatGPT, Claude, Gemini, NotebookLM — 5 esercizi pratici step-by-step',
    style: { color: 'var(--secondary)' },
  },
]
