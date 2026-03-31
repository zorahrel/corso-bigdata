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
      { emoji: '\u{1F4C5}', text: 'Esercizio 1 — "La mia settimana AI": mappa e identifica 3 momenti AI (45 min)' },
      { emoji: '\u{1F4E7}', text: 'Esercizio 2 — AI per email: scrivi, rispondi, riassumi (45 min)' },
      { emoji: '\u{1F4C4}', text: 'Esercizio 3 — AI per documenti: analisi report con Projects/ChatGPT (45 min)' },
      { emoji: '\u{1F3A4}', text: 'Esercizio 4 — AI per meeting: trascrivi audio, genera notes (45 min)' },
      { emoji: '\u{1F680}', text: 'Esercizio 5 — Il mio stack AI ideale: template e presentazione (30 min)' },
    ],
  },

  // 3. REGOLE DEL LAB
  {
    type: 'concept',
    centered: true,
    heading: '\u{1F6A8} Regole del Lab',
    content: `<div style="max-width:700px; margin:0 auto; text-align:left;">
  <ul class="feature-list">
    <li><span class="icon">\u{1F3AF}</span> <strong>Oggi è PERSONALE</strong> — lavori sul TUO lavoro reale, non su esempi generici</li>
    <li><span class="icon">\u{1F4B0}</span> <strong>SOLO tool gratuiti</strong> — ChatGPT free, Claude free, Gemini free, NotebookLM</li>
    <li><span class="icon">\u{1F510}</span> <strong>Privacy first</strong> — NON caricare dati sensibili o confidenziali dell'azienda su AI</li>
    <li><span class="icon">\u{1F4F8}</span> <strong>Deliverable reale</strong> — alla fine avrai un piano d'azione concreto da portarti a casa</li>
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
    deliverable: 'Google Sheet con mappa settimanale + 3 "momenti AI" identificati + calcolo ore risparmiate',
    instructions: [
      '<strong>Obiettivo:</strong> mappare la tua settimana tipo e identificare dove l\'AI può farti risparmiare tempo — con numeri concreti',
      '<strong>Step 1:</strong> Crea un Google Sheet con le colonne: Giorno | Ora | Attività | Durata (min) | Frequenza (1x/5x settimana) | L\'AI può aiutare? | Tool AI | Tempo risparmiato (stima)',
      '<strong>Step 2:</strong> Compila per una settimana tipo — dal lunedì al venerdì, slot da 30 minuti. Sii ONESTO: includi anche "scrollare email senza agire", "cercare file nelle cartelle", "riscrivere la stessa email per la terza volta"',
      '<strong>Step 3:</strong> Per ogni attività, chiedi a ChatGPT o Claude: "Questa attività può essere automatizzata o assistita da AI? [descrivi l\'attività]. Suggerisci un tool GRATUITO specifico e come usarlo concretamente."',
      '<strong>Step 4:</strong> Compila le colonne "Tool AI" e "Tempo risparmiato" con i suggerimenti ricevuti',
      '<strong>Step 5 — Il calcolo che convince il capo:</strong> In fondo al foglio calcola: Tempo recuperabile/settimana × 48 settimane lavorative = ORE/ANNO risparmiate. Se risparmi 30 min/giorno = 2.5h/settimana = 120h/anno = quasi 3 settimane lavorative!',
      '<strong>Step 6:</strong> Evidenzia in VERDE i 3 "momenti AI" con il maggiore impatto (tempo × frequenza). Questi sono i tuoi primi esperimenti da fare DOMANI',
      '<strong>Step 7:</strong> Prepara 1 slide mentale: "I miei 3 momenti AI sono: 1)... 2)... 3)... e mi farebbero risparmiare X ore/anno"',
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
    deliverable: 'Screenshot di 3 email gestite con AI + confronto tempo (prima vs dopo)',
    instructions: [
      '<strong>Obiettivo:</strong> usare AI per le 3 operazioni email più comuni: scrivere, rispondere, riassumere — e misurare il risparmio',
      '<strong>Step 1 — Scrivi un\'email da zero:</strong> Apri Claude e scrivi: "Scrivi un\'email professionale in italiano a un fornitore per chiedere un preventivo per [prodotto/servizio del tuo lavoro]. Tono: cordiale ma diretto. Includi: chi siamo, cosa ci serve, entro quando, budget indicativo". Valuta: quanto ci avresti messo tu? Quanto ci ha messo l\'AI?',
      '<strong>Step 2 — Rispondi a un\'email:</strong> Prendi un\'email vera dalla tua inbox (non confidenziale!). Copia il testo su ChatGPT e scrivi: "Rispondi a questa email. Contesto: [spiega brevemente]. Tono: [professionale/amichevole]. Punti da toccare: [elenca]". Confronta la bozza AI con quello che avresti scritto tu',
      '<strong>Step 3 — Riassumi un thread lungo:</strong> Hai un thread email con 5+ messaggi? Copia TUTTO su Claude e chiedi: "Riassumi questo thread email in: 1) Contesto in 2 righe, 2) Decisioni prese, 3) Azioni in sospeso con responsabile, 4) Prossimi passi"',
      '<strong>Step 4 — Confronto Claude vs ChatGPT:</strong> Fai lo stesso task di risposta su entrambi. Quale preferisci per le email? Perché?',
      '<strong>Step 5 — Misura:</strong> Per almeno 3 email, annota: Tempo SENZA AI (stima) | Tempo CON AI (reale) | Qualità (migliore/uguale/peggiore). Il risparmio medio è tipicamente 40-60%',
      '<strong>Step 6 — Screenshot:</strong> Cattura 3 email gestite con AI — mostrando il prompt e il risultato',
      '<strong>Attenzione:</strong> NON incollare email con dati sensibili, confidenziali o personali di terzi su tool AI. Usa email generiche o anonimizzate.',
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
    deliverable: 'Screenshot dell\'analisi AI di un documento + riassunto esecutivo generato',
    instructions: [
      '<strong>Obiettivo:</strong> usare Claude Projects o ChatGPT per analizzare un documento lungo e estrarre insight — come avere un analista junior gratis',
      '<strong>Step 1 — Scegli un documento:</strong> Prendi un report del tuo lavoro (trimestrale, analisi di mercato, verbale riunione). Se non hai nulla, usa il report trimestrale di esempio fornito dal tutor',
      '<strong>Step 2 — Claude Projects:</strong> Vai su claude.ai → "Projects" → crea un nuovo Project. Carica il documento. Nella chat del Project chiedi: "Analizza questo report e dimmi: 1) I 5 punti chiave, 2) Le criticità principali, 3) Le opportunità nascoste che potremmo non aver notato, 4) 3 domande che dovremmo porci leggendo questo report"',
      '<strong>Step 3 — Riassunto esecutivo:</strong> Chiedi: "Genera un riassunto esecutivo di massimo 200 parole, adatto da inviare al management. Tono: oggettivo e diretto. Evidenzia numeri chiave e azioni raccomandate"',
      '<strong>Step 4 — Confronto con ChatGPT:</strong> Copia lo stesso documento su ChatGPT e fai le stesse domande. Confronta: quale analisi è più profonda? Quale riassunto è più utile?',
      '<strong>Step 5 — Estrazione dati:</strong> Chiedi all\'AI: "Estrai tutti i numeri e le percentuali da questo documento e presentali in una tabella organizzata per tema"',
      '<strong>Step 6 — Generazione follow-up:</strong> Chiedi: "Basandoti su questo report, scrivi un\'email al team con le 3 azioni prioritarie per il prossimo mese"',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) L\'analisi dei 5 punti chiave, 2) Il riassunto esecutivo, 3) La tabella dei numeri estratti',
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
    deliverable: 'Trascrizione di una mini-riunione + meeting notes strutturate + action items',
    instructions: [
      '<strong>Obiettivo:</strong> simulare il workflow completo di un meeting produttivo: registra → trascrivi → genera notes → estrai action items',
      '<strong>Step 1 — Simulazione meeting (10 min):</strong> In coppia o in gruppo di 3, fate una mini-riunione di 5 minuti su un tema a scelta (es: "Come migliorare il nostro processo di onboarding clienti"). Parlate normalmente — decisioni, idee, dubbi, azioni da fare. Un membro prende appunti disordinati',
      '<strong>Step 2 — Trascrizione con Whisper:</strong> Vai su whispertyping.com (gratuito, gira in locale nel browser). Oppure usa il registratore del telefono + un tool di trascrizione gratuito (es: Google Docs → Strumenti → Digitazione vocale). Se avete registrato audio, caricate il file',
      '<strong>Step 3 — Alternativa senza audio:</strong> Se non avete registrato, prendete gli appunti disordinati della riunione simulata e passate direttamente allo Step 4',
      '<strong>Step 4 — AI genera Meeting Notes:</strong> Incolla la trascrizione (o gli appunti) su Claude e chiedi: "Trasforma questi appunti di riunione in meeting notes professionali. Struttura: 1) Partecipanti, 2) Riassunto in 3 righe, 3) Decisioni prese, 4) Action items (chi, cosa, entro quando), 5) Punti aperti per la prossima riunione, 6) Email di recap pronta da inviare"',
      '<strong>Step 5 — NotebookLM per follow-up:</strong> Carica le meeting notes su NotebookLM. Chiedi: "Quali decisioni sono state prese?" e "Genera un podcast di 2 minuti che riassume la riunione" — perfetto per chi non era presente',
      '<strong>Step 6 — Workflow template:</strong> Scrivi il TUO workflow ideale per i meeting: "Prima della riunione: [prep]. Durante: [strumenti]. Dopo: [AI genera...]". Questo è il tuo template riutilizzabile',
      '<strong>Step 7 — Screenshot:</strong> Cattura: 1) La trascrizione, 2) Le meeting notes generate dall\'AI, 3) Gli action items estratti',
      '<strong>Workflow reale:</strong> Google Meet registra → trascrizione automatica → copia su Claude → meeting notes in 30 secondi. Da 20 minuti di lavoro post-meeting a 2 minuti.',
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
    deliverable: 'Documento "Il Mio Stack AI" completo + presentazione di 2 minuti alla classe',
    instructions: [
      '<strong>Obiettivo:</strong> sintetizzare tutto quello che hai imparato nelle lezioni 06, 07 e 08 in un piano d\'azione concreto che ti porti a casa',
      '<strong>Step 1:</strong> Crea un Google Doc: "Il Mio Stack AI — [tuo nome] — [tuo ruolo]"',
      '<strong>Step 2 — I miei 3 momenti AI (dall\'Esercizio 1):</strong> Copia i 3 momenti della tua settimana dove l\'AI ha il maggiore impatto. Per ognuno scrivi: cosa faccio oggi, quale tool AI userò, quanto tempo risparmio',
      '<strong>Step 3 — Il mio toolkit:</strong> Scegli MAX 5 tool AI dal corso (tutti gratuiti!). Per ognuno scrivi: Nome, Cosa ci faccio, Frequenza d\'uso prevista. Esempio: "Claude free — analisi documenti e email — ogni giorno"',
      '<strong>Step 4 — Piano 30 giorni:</strong> Settimana 1: prova [tool 1] per [task specifico]. Settimana 2: prova [tool 2] per [task specifico]. Settimana 3: integra i migliori. Settimana 4: misura risultati (tempo risparmiato)',
      '<strong>Step 5 — La metrica:</strong> Definisci UNA metrica per misurare il successo: "Tra 30 giorni, saprò che il mio stack AI funziona se [es: rispondo alle email in 50% del tempo, o produco report in metà tempo]"',
      '<strong>Step 6 — Presentazione:</strong> Prepara 2 minuti di presentazione alla classe: 1) Chi sei e cosa fai, 2) I tuoi 3 momenti AI, 3) Il tuo toolkit scelto, 4) Cosa farai DOMANI (il primo passo concreto)',
      '<strong>Ricorda:</strong> non serve lo stack perfetto. Serve INIZIARE con un tool, un task, domani mattina. Il resto viene da sé.',
    ],
  },

  // 10. Template Stack AI
  {
    type: 'concept',
    centered: true,
    heading: 'Template: Il Mio Stack AI',
    content: `<div style="max-width:700px; margin:0 auto; background:var(--surface); border-radius:var(--radius); padding:28px;">
  <div style="font-size:0.6em; line-height:1.8; color:var(--text);">
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
  <li><span class="icon">\u{1F4C4}</span> <strong>CV personalizzato per ogni offerta:</strong> incolla job description + il tuo CV in ChatGPT/Claude → CV su misura in 5 minuti</li>
  <li><span class="icon">\u{2709}\u{FE0F}</span> <strong>Lettera di presentazione contestuale:</strong> non generica, ma che cita l'azienda, i valori, il ruolo specifico</li>
  <li><span class="icon">\u{26A0}\u{FE0F}</span> <strong>Attenzione:</strong> 20-40% AI, il resto voce tua — i recruiter riconoscono i template (Forbes 2026)</li>
</ul>`,
  },

  // 14. Personal branding con AI
  {
    type: 'concept',
    heading: 'Personal Branding con AI',
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F4F1}</span> <strong>LinkedIn:</strong> usa Claude/ChatGPT per riscrivere headline, summary, esperienze con keyword del settore</li>
  <li><span class="icon">\u{1F4AC}</span> <strong>Soft skills storytelling:</strong> chiedi all'AI di trasformare i tuoi risultati in storie STAR (Situation, Task, Action, Result)</li>
  <li><span class="icon">\u{270D}\u{FE0F}</span> <strong>Content creation:</strong> genera post LinkedIn su temi del tuo settore per posizionarti come esperto</li>
  <li><span class="icon">\u{1F6E0}\u{FE0F}</span> <strong>Tool gratuiti:</strong> <a href="https://teal.hq" target="_blank">Teal</a>, <a href="https://careerflow.ai" target="_blank">Careerflow.ai</a>, <a href="https://jobright.ai" target="_blank">Jobright.ai</a></li>
</ul>`,
  },

  // 15. Prepararsi ai colloqui con AI
  {
    type: 'concept',
    heading: 'Prepararsi ai Colloqui con AI',
    image: { src: 'https://media.giphy.com/media/l0MYt5jPR6QX5APm0/giphy.gif', alt: 'Hired celebration GIF' },
    content: `<ul class="feature-list">
  <li><span class="icon">\u{1F3AD}</span> <strong>Mock interview:</strong> chiedi a ChatGPT "Fai finta di essere il recruiter di [azienda X] per il ruolo di [Y]. Intervistami."</li>
  <li><span class="icon">\u{1F50D}</span> <strong>Ricerca azienda:</strong> usa Perplexity/ChatGPT per analizzare l'azienda (ultimi articoli, valori, competitor, sfide)</li>
  <li><span class="icon">\u{2753}</span> <strong>Domande da fare:</strong> genera domande intelligenti da fare al colloquio basate sul ruolo</li>
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
      '<strong>Step 3:</strong> Apri ChatGPT o Claude e incolla: "Ecco il mio CV attuale: [incolla]. Ecco l\'offerta: [incolla]. Riscrivi il mio CV evidenziando le competenze più rilevanti per questa posizione. Mantieni la mia voce."',
      '<strong>Step 4:</strong> Poi chiedi: "Scrivi una lettera di presentazione per questa posizione che menzioni specificamente [nome azienda] e i loro valori."',
      '<strong>Step 5:</strong> Poi: "Quali domande potrebbe farmi il recruiter? Preparami 5 risposte."',
      '<strong>Step 6:</strong> Confronta: fai lo stesso su Claude e ChatGPT. Quale risultato preferisci?',
    ],
  },

  // 17. AI per HR e Recruiting (lato azienda)
  {
    type: 'concept',
    heading: 'AI per HR e Recruiting',
    content: `<div style="max-width:700px; margin:0 auto;">
  <p style="color:var(--muted); margin-bottom:16px; font-size:0.55em;"><em>Il lato azienda — cosa succede dall'altra parte</em></p>
  <ul class="feature-list">
    <li><span class="icon">\u{1F4E5}</span> <strong>Screening CV automatizzato:</strong> come le aziende usano AI per filtrare candidati</li>
    <li><span class="icon">\u{2699}\u{FE0F}</span> <strong>ATS (Applicant Tracking Systems):</strong> come funzionano e come superarli</li>
    <li><span class="icon">\u{1F44B}</span> <strong>AI per onboarding:</strong> chatbot interni, knowledge base per nuovi assunti</li>
    <li><span class="icon">\u{26A0}\u{FE0F}</span> <strong>Bias nell'AI recruiting:</strong> rischi e come mitigarli</li>
    <li><span class="icon">\u{1F4CB}</span> <strong>Product management con AI:</strong> roadmap, user stories, prioritizzazione con Claude/ChatGPT</li>
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
      'Hai analizzato documenti con Claude Projects e ChatGPT — come avere un analista junior gratis',
      'Hai trasformato appunti di riunione in meeting notes professionali in 30 secondi',
      'Hai il TUO stack AI ideale con un piano d\'azione a 30 giorni — ora tocca a te usarlo!',
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
