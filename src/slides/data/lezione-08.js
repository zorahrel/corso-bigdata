export const meta = {
  lessonNumber: '08',
  title: 'Lab: AI per il tuo lavoro',
}

export const slides = [
  // 1. TITLE
  {
    type: 'title',
    lessonNumber: '08',
    title: 'Lab: AI per il\nTuo Lavoro',
    subtitle: 'Mercoledì 15/04/2026 · 6h in presenza · Gestita da Tutor',
  },

  // 2. AGENDA
  {
    type: 'agenda',
    heading: 'Agenda — Oggi applichi l\'AI al TUO lavoro!',
    items: [
      { emoji: '\u{1F4C5}', text: 'Esercizio 1 — "La mia settimana AI": mappa 3 momenti AI (45 min)' },
      { emoji: '\u{1F4E7}', text: 'Esercizio 2 — AI per email: scrivi, rispondi, riassumi (45 min)' },
      { emoji: '\u{1F4C4}', text: 'Esercizio 3 — AI per documenti: analisi report (45 min)' },
      { emoji: '\u{1F3A4}', text: 'Esercizio 4 — AI per meeting: trascrivi e genera notes (45 min)' },
      { emoji: '\u{1F680}', text: 'Esercizio 5 — Il mio stack AI ideale (30 min)' },
    ],
  },

  // 3. REGOLE DEL LAB
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F6A8} Regole del Lab',
    content: `<div style="max-width:700px; margin:0 auto; text-align:left;">
  <ul class="feature-list">
    <li><span class="icon">\u{1F3AF}</span> <strong>Oggi è PERSONALE</strong> — lavori sul TUO lavoro reale</li>
    <li><span class="icon">\u{1F4B0}</span> <strong>SOLO tool gratuiti</strong> — ChatGPT, Claude, Gemini, NotebookLM</li>
    <li><span class="icon">\u{1F510}</span> <strong>Privacy first</strong> — NON caricare dati sensibili dell'azienda</li>
    <li><span class="icon">\u{1F4F8}</span> <strong>Deliverable reale</strong> — piano d'azione concreto da portarti a casa</li>
    <li><span class="icon">\u23F0</span> <strong>Timer attivo</strong> — rispettate i tempi!</li>
  </ul>
</div>`,
  },

  // 4. MEME
  {
    type: 'meme',
    image: { src: 'https://devhumor.com/content/uploads/images/January2026/udemy.jpeg', alt: 'AI productivity meme' },
    caption: '"Io dopo aver scoperto quanto tempo posso risparmiare con l\'AI"',
  },

  // ─── ESERCIZIO 1: La mia settimana AI ──────────────────────────────────

  // 5. Esercizio 1: La mia settimana AI
  {
    type: 'hands-on',
    heading: 'Esercizio 1: "La Mia Settimana AI"',
    timer: '45 minuti',
    level: 'base',
    tools: ['Google Sheets (free)', 'ChatGPT o Claude (free)'],
    deliverable: 'Google Sheet: mappa settimanale + 3 "momenti AI" + ore risparmiate',
    instructions: [
      '<strong>Obiettivo:</strong> mappare la tua settimana tipo e identificare dove l\'AI ti fa risparmiare tempo',
      '<strong>Step 1:</strong> Crea un Google Sheet: Giorno | Ora | Attività | Durata | Frequenza | AI può aiutare? | Tool AI | Tempo risparmiato',
      '<strong>Step 2:</strong> Compila lunedì–venerdì, slot da 30 min. Sii onesto: includi anche tempo perso (email, ricerca file, riscritture)',
      '<strong>Step 3:</strong> Per ogni attività chiedi all\'AI: "Può essere assistita da AI? Suggerisci un tool gratuito e come usarlo"',
      '<strong>Step 4:</strong> Compila le colonne "Tool AI" e "Tempo risparmiato" con i suggerimenti',
      '<strong>Step 5 — Il calcolo:</strong> Tempo recuperabile/settimana × 48 settimane = ORE/ANNO. Es: 30 min/giorno = 120h/anno = ~3 settimane lavorative!',
      '<strong>Step 6:</strong> Evidenzia in VERDE i 3 "momenti AI" con il maggiore impatto (tempo × frequenza)',
      '<strong>Step 7:</strong> Prepara 1 frase: "I miei 3 momenti AI sono: 1)… 2)… 3)… e risparmio X ore/anno"',
    ],
  },

  // ─── ESERCIZIO 2: AI per email ──────────────────────────────────────────

  // 6. Esercizio 2: AI per email
  {
    type: 'hands-on',
    heading: 'Esercizio 2: AI per Email — Scrivi, Rispondi, Riassumi',
    timer: '45 minuti',
    level: 'base',
    tools: ['Claude (claude.ai — free)', 'ChatGPT (chatgpt.com — free)', 'Gmail (free)'],
    deliverable: 'Screenshot di 3 email gestite con AI + confronto tempo prima/dopo',
    instructions: [
      '<strong>Obiettivo:</strong> usare AI per scrivere, rispondere e riassumere email — misurando il risparmio di tempo',
      '<strong>Step 1 — Scrivi da zero:</strong> Su Claude: "Scrivi email professionale a un fornitore per preventivo su [prodotto]. Tono cordiale e diretto." Confronta: quanto ci avresti messo tu?',
      '<strong>Step 2 — Rispondi:</strong> Copia un\'email vera (non confidenziale!) su ChatGPT: "Rispondi. Contesto: [breve]. Tono: [professionale]. Punti: [elenca]"',
      '<strong>Step 3 — Riassumi thread:</strong> Thread con 5+ messaggi? Copia su Claude: "Riassumi in: contesto, decisioni, azioni in sospeso, prossimi passi"',
      '<strong>Step 4 — Confronto:</strong> Fai lo stesso task su Claude e ChatGPT. Quale preferisci per le email?',
      '<strong>Step 5 — Misura:</strong> Per 3 email annota: Tempo senza AI | Tempo con AI | Qualità. Risparmio tipico: 40-60%',
      '<strong>Step 6 — Screenshot:</strong> Cattura 3 email gestite con AI (prompt + risultato)',
      '<strong>Attenzione:</strong> NON incollare email con dati sensibili o personali di terzi. Usa email generiche o anonimizzate.',
    ],
  },

  // ─── ESERCIZIO 3: AI per documenti ──────────────────────────────────────

  // 7. Esercizio 3: AI per Documenti
  {
    type: 'hands-on',
    heading: 'Esercizio 3: AI per Documenti — Analisi Report',
    timer: '45 minuti',
    level: 'intermedio',
    tools: ['Claude Projects (claude.ai — free)', 'ChatGPT (free)'],
    deliverable: 'Screenshot analisi AI + riassunto esecutivo generato',
    instructions: [
      '<strong>Obiettivo:</strong> analizzare un documento lungo con AI ed estrarre insight — come un analista junior gratis',
      '<strong>Step 1 — Scegli un documento:</strong> Report del tuo lavoro (trimestrale, analisi, verbale). Se non hai nulla, usa l\'esempio fornito dal tutor',
      '<strong>Step 2 — Claude Projects:</strong> claude.ai → Projects → nuovo Project → carica documento. Chiedi: "Analizza: 1) 5 punti chiave, 2) Criticità, 3) Opportunità nascoste, 4) 3 domande da porci"',
      '<strong>Step 3 — Riassunto esecutivo:</strong> "Genera riassunto esecutivo max 200 parole per il management. Numeri chiave e azioni raccomandate"',
      '<strong>Step 4 — Confronto:</strong> Stesso documento su ChatGPT. Quale analisi preferisci?',
      '<strong>Step 5 — Estrazione dati:</strong> "Estrai numeri e percentuali in una tabella organizzata per tema"',
      '<strong>Step 6 — Follow-up:</strong> "Scrivi un\'email al team con le 3 azioni prioritarie per il prossimo mese"',
      '<strong>Step 7 — Screenshot:</strong> Cattura: analisi punti chiave, riassunto esecutivo, tabella numeri',
    ],
    handsOnMaterial: {
      label: 'Documento di esempio (se non hai un report tuo)',
      text: `RELAZIONE TRIMESTRALE — Q4 2025
Direzione Operativa — TechCorp Italia S.r.l.

1. PERFORMANCE FINANZIARIA
Il Q4 2025 si chiude con ricavi di 12.8M euro (+11% vs Q4 2024). Il margine operativo è al 14.2%, in miglioramento rispetto al 12.1% del trimestre precedente. I costi del personale sono aumentati del 6% per 12 nuove assunzioni tech. I costi cloud sono cresciuti del 22%.

2. PRODOTTO E SVILUPPO
Rilasciate 3 major release. La ricerca AI (beta) ha 34% di adozione tra utenti enterprise. Tempo di risposta piattaforma migliorato del 18%. Backlog ridotto del 25% (da 340 a 255 ticket). Criticità: 2 incidenti severità alta in novembre (downtime: 4.2 ore).

3. COMMERCIALE
42 nuovi clienti (target: 50). Churn rate 4.5% (benchmark settore: 8%). Deal medio cresciuto del 15% (da 32K a 37K €/anno). Pipeline Q1 2026: 3.2M (55% probabilità). Manifatturiero: +28% YoY.

4. CUSTOMER SUCCESS
NPS: 42 (stabile). Tempo medio risoluzione ticket: 12h (target: 8h). Chatbot AI pilota: 22% ticket L1 gestiti, CSAT 3.8/5. 78% clienti enterprise ha rinnovato con upsell. 180 sessioni onboarding (vs 145 Q3).

5. PERSONE
Headcount: 187 (+12). Tempo assunzione: 35 giorni (target: 28). Formazione AI: 145 dipendenti (78%). Engagement: 7.2/10. 3 dimissioni.

6. PRIORITÀ Q1 2026
- Go-live chatbot AI per tutti i clienti (febbraio)
- Analytics predittivo
- Hiring: 8 posizioni (4 dev, 2 sales, 1 PM, 1 data scientist)
- Audit SOC2 Type II (marzo)
- Partnership DACH`,
    },
  },

  // ─── ESERCIZIO 4: AI per meeting ──────────────────────────────────────

  // 8. Esercizio 4: AI per Meeting
  {
    type: 'hands-on',
    heading: 'Esercizio 4: AI per Meeting — Trascrivi e Genera Notes',
    timer: '45 minuti',
    level: 'intermedio',
    tools: ['Whisper Typing (whispertyping.com — free)', 'Claude o ChatGPT (free)', 'NotebookLM (free)'],
    deliverable: 'Trascrizione mini-riunione + meeting notes + action items',
    instructions: [
      '<strong>Obiettivo:</strong> workflow completo: registra → trascrivi → genera notes → estrai action items',
      '<strong>Step 1 — Mini-riunione (10 min):</strong> In coppia/gruppo di 3, riunione di 5 min su un tema a scelta. Parlate normalmente: decisioni, idee, azioni. Un membro prende appunti',
      '<strong>Step 2 — Trascrizione:</strong> Usa whispertyping.com (gratuito, locale nel browser) oppure Google Docs → Digitazione vocale',
      '<strong>Step 3 — Senza audio?</strong> Usa direttamente gli appunti disordinati e vai allo Step 4',
      '<strong>Step 4 — AI Meeting Notes:</strong> Su Claude: "Trasforma in meeting notes: 1) Partecipanti, 2) Riassunto, 3) Decisioni, 4) Action items (chi/cosa/quando), 5) Punti aperti, 6) Email recap"',
      '<strong>Step 5 — NotebookLM:</strong> Carica le notes. Chiedi "Decisioni prese?" e "Genera podcast 2 min" per chi era assente',
      '<strong>Step 6 — Workflow template:</strong> Scrivi il TUO workflow: "Prima: [prep]. Durante: [tool]. Dopo: [AI genera…]"',
      '<strong>Step 7 — Screenshot:</strong> Cattura trascrizione, meeting notes, action items',
      '<strong>Workflow reale:</strong> Meet registra → trascrizione → Claude → notes in 30 sec. Da 20 min a 2 min post-meeting.',
    ],
  },

  // ─── ESERCIZIO 5: Il mio stack AI ideale ──────────────────────────────

  // 9. Esercizio 5: Il Mio Stack AI Ideale
  {
    type: 'hands-on',
    heading: 'Esercizio 5: Il Mio Stack AI Ideale',
    timer: '30 minuti',
    level: 'base',
    tools: ['Google Docs (free)'],
    deliverable: 'Documento "Il Mio Stack AI" + presentazione 2 min alla classe',
    instructions: [
      '<strong>Obiettivo:</strong> sintetizzare le lezioni 06–08 in un piano d\'azione concreto da portare a casa',
      '<strong>Step 1:</strong> Crea un Google Doc: "Il Mio Stack AI — [tuo nome] — [tuo ruolo]"',
      '<strong>Step 2 — I miei 3 momenti AI:</strong> Dall\'Esercizio 1, per ognuno scrivi: cosa faccio oggi → tool AI → tempo risparmiato',
      '<strong>Step 3 — Il mio toolkit:</strong> MAX 5 tool gratuiti. Per ognuno: Nome, Uso, Frequenza. Es: "Claude — documenti/email — ogni giorno"',
      '<strong>Step 4 — Piano 30 giorni:</strong> Sett.1: prova tool 1. Sett.2: prova tool 2. Sett.3: integra. Sett.4: misura risultati',
      '<strong>Step 5 — La metrica:</strong> UNA metrica di successo: "Tra 30 giorni funziona se [es: email in 50% del tempo]"',
      '<strong>Step 6 — Presentazione (2 min):</strong> Chi sei, i 3 momenti AI, il toolkit scelto, cosa farai DOMANI',
      '<strong>Ricorda:</strong> non serve lo stack perfetto. Serve INIZIARE domani mattina.',
    ],
  },

  // 10. Template Stack AI
  {
    type: 'concept',
    centered: true,
    heading: 'Template: Il Mio Stack AI',
    content: `<div style="max-width:700px; margin:0 auto; background:var(--surface); border-radius:var(--radius); padding:28px;">
  <div style="font-size:0.7em; line-height:1.8; color:var(--text);">
    <p><strong>Nome:</strong> _________________ <strong>Ruolo:</strong> _________________</p>
    <br>
    <p><strong>\u{1F4C5} I miei 3 momenti AI:</strong></p>
    <p>1. _____________ → Tool: _____________ → Risparmio: ___min/giorno</p>
    <p>2. _____________ → Tool: _____________ → Risparmio: ___min/giorno</p>
    <p>3. _____________ → Tool: _____________ → Risparmio: ___min/giorno</p>
    <br>
    <p><strong>\u{1F9F0} Il mio toolkit (max 5):</strong></p>
    <p>\u2022 _______________ per _______________</p>
    <p>\u2022 _______________ per _______________</p>
    <p>\u2022 _______________ per _______________</p>
    <br>
    <p><strong>\u{1F4CA} La mia metrica:</strong> Tra 30 giorni saprò che funziona se _____________</p>
    <br>
    <p><strong>\u{1F680} Domani mattina faccio:</strong> _____________________________________________</p>
  </div>
</div>`,
  },

  // 11. Stats motivazionali
  {
    type: 'stats',
    heading: 'Perché Ne Vale la Pena',
    stats: [
      { value: 30, suffix: 'min', label: 'Risparmio medio giornaliero con AI (anche solo email)' },
      { value: 120, suffix: 'h', label: 'Ore/anno risparmiate (30min × 240 giorni lavorativi)' },
      { value: 3, suffix: 'sett', label: 'Settimane lavorative recuperate all\'anno' },
      { value: 0, suffix: '€', label: 'Costo — tutti i tool di oggi sono gratuiti' },
    ],
  },

  // 12. QUOTE
  {
    type: 'quote',
    text: 'La produttività non è fare più cose. È fare le cose giuste, con meno sforzo.',
    source: 'Cal Newport, adattato all\'era AI',
  },

  // ─── AI PER TROVARE LAVORO ──────────────────────────────────────────

  // 13. AI per trovare lavoro
  {
    type: 'concept',
    heading: 'AI per Trovare Lavoro',
    image: { src: 'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif', alt: 'Job interview GIF' },
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F4C4}</span> <strong>CV su misura:</strong> job description + CV in ChatGPT/Claude → CV personalizzato in 5 min</li>
  <li><span class="icon">\u{2709}\u{FE0F}</span> <strong>Lettera contestuale:</strong> cita azienda, valori e ruolo specifico — non generica</li>
  <li><span class="icon">\u{26A0}\u{FE0F}</span> <strong>Attenzione:</strong> 20-40% AI, il resto voce tua — i recruiter riconoscono i template</li>
</ul>`,
  },

  // 14. Personal branding con AI
  {
    type: 'concept',
    heading: 'Personal Branding con AI',
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F4F1}</span> <strong>LinkedIn:</strong> riscrivi headline, summary ed esperienze con keyword del settore</li>
  <li><span class="icon">\u{1F4AC}</span> <strong>Storytelling:</strong> trasforma i tuoi risultati in storie STAR (Situation, Task, Action, Result)</li>
  <li><span class="icon">\u{270D}\u{FE0F}</span> <strong>Content:</strong> genera post LinkedIn per posizionarti come esperto del settore</li>
  <li><span class="icon">\u{1F6E0}\u{FE0F}</span> <strong>Tool gratuiti:</strong> <a href="https://teal.hq" target="_blank">Teal</a>, <a href="https://careerflow.ai" target="_blank">Careerflow.ai</a>, <a href="https://jobright.ai" target="_blank">Jobright.ai</a></li>
</ul>`,
  },

  // 15. Prepararsi ai colloqui con AI
  {
    type: 'concept',
    heading: 'Prepararsi ai Colloqui con AI',
    image: { src: 'https://media.giphy.com/media/l0MYt5jPR6QX5APm0/giphy.gif', alt: 'Hired celebration GIF' },
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F3AD}</span> <strong>Mock interview:</strong> "Fai il recruiter di [azienda X] per il ruolo [Y]. Intervistami"</li>
  <li><span class="icon">\u{1F50D}</span> <strong>Ricerca azienda:</strong> analizza con AI: articoli recenti, valori, competitor, sfide</li>
  <li><span class="icon">\u{2753}</span> <strong>Domande da fare:</strong> genera domande intelligenti basate sul ruolo</li>
  <li><span class="icon">\u{1F4B0}</span> <strong>Negoziazione stipendio:</strong> simula la trattativa con l'AI</li>
</ul>`,
  },

  // 16. Esercizio: Il tuo CV potenziato con AI
  {
    type: 'hands-on',
    heading: 'Esercizio: Il Tuo CV Potenziato con AI',
    timer: '30 minuti',
    level: 'intermedio',
    tools: ['ChatGPT free', 'Claude free'],
    deliverable: 'CV personalizzato + lettera + 5 risposte a domande frequenti',
    instructions: [
      '<strong>Step 1:</strong> Trova un\'offerta di lavoro reale che ti interessa (LinkedIn, Indeed, InfoJobs)',
      '<strong>Step 2:</strong> Copia la job description completa',
      '<strong>Step 3:</strong> Su ChatGPT/Claude: "Ecco CV e offerta [incolla]. Riscrivi il CV per questa posizione. Mantieni la mia voce."',
      '<strong>Step 4:</strong> "Scrivi lettera di presentazione che menzioni [azienda] e i loro valori"',
      '<strong>Step 5:</strong> "Quali domande farà il recruiter? Preparami 5 risposte"',
      '<strong>Step 6:</strong> Confronta: fai lo stesso su Claude e ChatGPT. Quale risultato preferisci?',
    ],
  },

  // 17. AI per HR e Recruiting (lato azienda)
  {
    type: 'concept',
    centered: true,
    heading: 'AI per HR e Recruiting',
    content: `<div style="max-width:700px; margin:0 auto;">
  <p style="color:var(--muted); margin-bottom:16px; font-size:0.7em;"><em>Il lato azienda — cosa succede dall'altra parte</em></p>
  <ul class="feature-list">
    <li><span class="icon">\u{1F4E5}</span> <strong>Screening CV automatizzato:</strong> come le aziende filtrano candidati con AI</li>
    <li><span class="icon">\u{2699}\u{FE0F}</span> <strong>ATS:</strong> come funzionano i sistemi di tracking e come superarli</li>
    <li><span class="icon">\u{1F44B}</span> <strong>AI onboarding:</strong> chatbot interni e knowledge base per nuovi assunti</li>
    <li><span class="icon">\u{26A0}\u{FE0F}</span> <strong>Bias nel recruiting AI:</strong> rischi e mitigazione</li>
    <li><span class="icon">\u{1F4CB}</span> <strong>Product management:</strong> roadmap, user stories, prioritizzazione</li>
  </ul>
</div>`,
  },

  // 18. RECAP
  {
    type: 'recap',
    heading: 'Recap — Lab 08',
    items: [
      'Hai mappato la tua settimana e trovato 3 "momenti AI" concreti',
      'Hai gestito email con AI: scrivi, rispondi, riassumi — 40-60% più veloce',
      'Hai analizzato documenti con Claude Projects e ChatGPT',
      'Hai trasformato appunti di riunione in meeting notes in 30 secondi',
      'Hai il TUO stack AI con un piano a 30 giorni — ora tocca a te!',
    ],
  },

  // 14. RISORSE
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'ChatGPT — chatgpt.com', url: 'https://chatgpt.com' },
      { label: 'Claude — claude.ai', url: 'https://claude.ai' },
      { label: 'Gemini — gemini.google.com', url: 'https://gemini.google.com' },
      { label: 'NotebookLM — notebooklm.google.com', url: 'https://notebooklm.google.com' },
      { label: 'Whisper Typing — trascrizione gratuita nel browser', url: 'https://whispertyping.com' },
    ],
  },

  // 15. Prossima lezione
  {
    type: 'title',
    lessonNumber: 'Prossima lezione',
    title: '09 · Lab: Piano di\nAdozione AI',
    subtitle: 'AI Readiness Assessment, role-play CEO, piano 90 giorni, certificazioni gratuite',
  },
]
