export const meta = {
  lessonNumber: '09',
  title: "Lab: Piano di adozione AI",
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '09',
    title: 'Lab: Piano di Adozione AI',
    subtitle: 'Mercoledì 22/04/2026 · 6h Lab · Gestita da Tutor · Blocco ADOZIONE',
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda — 4 Esercizi Pratici',
    items: [
      { emoji: '📋', text: 'Esercizio 1 (60 min): AI Readiness Assessment' },
      { emoji: '🎭', text: 'Esercizio 2 (60 min): Role-play — Convincere il CEO scettico' },
      { emoji: '🗺️', text: 'Esercizio 3 (60 min): Piano di adozione 90 giorni' },
      { emoji: '🎓', text: 'Esercizio 4 (30 min): Certificazioni gratuite — primo modulo' },
    ],
  },

  // 3. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif', alt: 'Proposing AI to the board' },
    caption: '"Oggi costruite il vostro piano AI. Niente teoria — solo pratica."',
  },

  // --- ESERCIZIO 1: AI Readiness Assessment ---

  // 4. Intro Esercizio 1
  {
    type: 'concept',
    heading: 'Esercizio 1: AI Readiness Assessment',
    content: `<strong>Obiettivo:</strong> Valutare quanto la vostra azienda (reale o ipotetica) è pronta per l'AI.
<br><br>
<strong>Output:</strong> Score di readiness (1-50) + roadmap personalizzata.
<br><br>
<strong>Perché è importante:</strong> il 73% dei fallimenti AI è dovuto a scarsa preparazione organizzativa, non a problemi tecnici.
<br><br>
<strong>Tempo:</strong> 60 minuti · <strong>Tool:</strong> ChatGPT o Claude (free) + Google Docs`,
    image: { src: 'https://i.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif', alt: 'Assessment' },
  },

  // 5. Template Assessment
  {
    type: 'concept',
    centered: true,
    heading: 'Template: 10 Domande di AI Readiness',
    content: `<div style="max-width: 850px; margin: 0 auto; text-align: left;">
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: #fb923c;">1. DATI</strong> — I dati aziendali sono digitalizzati e accessibili?<br><span style="color: var(--muted);">1 = tutto cartaceo · 5 = data warehouse strutturato</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--secondary);">2. COMPETENZE</strong> — Il team ha familiarità con tool digitali?<br><span style="color: var(--muted);">1 = solo email · 5 = usa già AI quotidianamente</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--accent);">3. BUDGET</strong> — C'è budget dedicato a innovazione/AI?<br><span style="color: var(--muted);">1 = zero · 5 = budget allocato e approvato</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--warning);">4. GOVERNANCE</strong> — Esistono policy per uso dati/tecnologia?<br><span style="color: var(--muted);">1 = nessuna policy · 5 = GDPR compliant + policy IT</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--danger);">5. USE CASE</strong> — Avete identificato processi ripetitivi automatizzabili?<br><span style="color: var(--muted);">1 = mai pensato · 5 = lista prioritizzata pronta</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: #fb923c;">6. LEADERSHIP</strong> — Il management supporta l'innovazione?<br><span style="color: var(--muted);">1 = resiste · 5 = sponsor attivo AI</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--secondary);">7. CULTURA</strong> — L'azienda è aperta al cambiamento?<br><span style="color: var(--muted);">1 = "si è sempre fatto così" · 5 = cultura sperimentale</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--accent);">8. INFRASTRUTTURA</strong> — Avete strumenti cloud/SaaS?<br><span style="color: var(--muted);">1 = tutto locale/legacy · 5 = full cloud</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--warning);">9. PROCESSI</strong> — I workflow sono documentati?<br><span style="color: var(--muted);">1 = conoscenza tribale · 5 = processi mappati e misurati</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.5em;"><strong style="color: var(--danger);">10. RISCHIO</strong> — Qual è la tolleranza al rischio per nuove tecnologie?<br><span style="color: var(--muted);">1 = rischio zero · 5 = fail fast, learn fast</span></div>
  </div>
</div>
</div>`,
  },

  // 6. Esercizio 1 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 1: AI Readiness Assessment',
    timer: '60 minuti',
    level: 'intermedio',
    tools: ['ChatGPT (free) o Claude (free)', 'Google Docs (free)'],
    deliverable: 'Documento con score di readiness (1-50), analisi punti deboli, roadmap 3 azioni prioritarie',
    instructions: [
      '<strong>Step 1 — SCEGLI L\'AZIENDA (5 min):</strong> Usa la tua azienda reale oppure inventane una credibile (settore, dimensione, n° dipendenti, tool attuali)',
      '<strong>Step 2 — COMPILA IL TEMPLATE (15 min):</strong> Rispondi alle 10 domande dalla slide precedente, assegnando un punteggio da 1 a 5 per ciascuna. Scrivi anche una breve motivazione per ogni voto',
      '<strong>Step 3 — CALCOLA LO SCORE:</strong> Somma i punteggi. <strong>10-20:</strong> 🔴 Non pronta — servono fondamenta. <strong>21-35:</strong> 🟡 Parzialmente pronta — quick win possibili. <strong>36-50:</strong> 🟢 Pronta — si può scalare',
      '<strong>Step 4 — CHIEDI ALL\'AI (15 min):</strong> Su ChatGPT o Claude: "La mia azienda ha ottenuto [score]/50 nel readiness assessment AI. I punti più deboli sono: [lista punti bassi]. Settore: [X], dimensione: [N] dipendenti. Suggerisci: 1) Le 3 azioni prioritarie per migliorare la readiness. 2) I quick win implementabili in 2 settimane con budget zero. 3) I rischi principali da mitigare."',
      '<strong>Step 5 — CREA LA ROADMAP (15 min):</strong> Su Google Docs, crea il documento finale: Titolo, Score e interpretazione, Top 3 punti deboli con piano d\'azione, Quick win immediati, Timeline a 90 giorni',
      '<strong>Step 6 — CONDIVIDI (10 min):</strong> Presenta il tuo assessment al gruppo (2 min a testa). Ricevi feedback: "Sei stato troppo generoso/severo su [punto]?"',
    ],
  },

  // --- ESERCIZIO 2: Role-play CEO scettico ---

  // 7. Intro Esercizio 2
  {
    type: 'concept',
    heading: 'Esercizio 2: Role-play — Il CEO Scettico',
    content: `<strong>Obiettivo:</strong> Allenarsi a vendere un progetto AI al management, gestendo obiezioni reali.
<br><br>
<strong>Format:</strong> In coppie. Uno fa il <strong>CEO scettico</strong>, l'altro il <strong>responsabile innovazione</strong> che propone un piano AI.
<br><br>
<strong>Perché è importante:</strong> sapere usare l'AI non basta. Bisogna saper <strong>convincere chi decide il budget</strong>.
<br><br>
<strong>Tempo:</strong> 60 minuti · <strong>Tool:</strong> Template obiezioni + ChatGPT/Claude per preparazione`,
    image: { src: 'https://i.giphy.com/media/dSetNZo2AJfptAk9hp/giphy.gif', alt: 'CEO meeting' },
  },

  // 8. Template obiezioni
  {
    type: 'concept',
    centered: true,
    heading: 'Template: Obiezioni del CEO e Risposte',
    content: `<div style="max-width: 850px; margin: 0 auto;">
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🤨 "Costa troppo"</div>
    <div style="font-size: 0.5em; color: var(--muted); line-height: 1.7;">→ "I tool free bastano per partire. ChatGPT free + Google Docs = €0. Il costo vero è NON adottare: $7.800/dipendente/anno in produttività persa (McKinsey 2025)."</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">😰 "Sostituirà i dipendenti"</div>
    <div style="font-size: 0.5em; color: var(--muted); line-height: 1.7;">→ "L'AI non sostituisce le persone, sostituisce i task ripetitivi. I dipendenti fanno lavoro a più alto valore. Il 92% delle aziende AI-adopter ha assunto, non licenziato."</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🔒 "E la privacy/GDPR?"</div>
    <div style="font-size: 0.5em; color: var(--muted); line-height: 1.7;">→ "Creiamo una AI Policy: dati classificati, tool approvati, niente PII sui tool cloud. L'AI Act EU dà tempo fino al 2027-2028 per l'alto rischio."</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🤷 "Non è il momento giusto"</div>
    <div style="font-size: 0.5em; color: var(--muted); line-height: 1.7;">→ "Solo l'8.2% delle imprese italiane usa AI. Il gap con il mondo (88%) è enorme. Chi si muove ORA ha un vantaggio competitivo di 2-3 anni."</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">😵‍💫 "Troppo complicato"</div>
    <div style="font-size: 0.5em; color: var(--muted); line-height: 1.7;">→ "Partiamo con 1 use case, 3 persone, 2 settimane. Se funziona, scaliamo. Se no, abbiamo perso solo 2 settimane. Rischio quasi zero."</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🎯 "Che ROI concreto?"</div>
    <div style="font-size: 0.5em; color: var(--muted); line-height: 1.7;">→ "Esempio: email triage AI = -3h/settimana per persona. Su 10 persone = 30h/settimana = €36.000/anno risparmiati. Tool: €0 (versioni free)."</div>
  </div>
</div>
</div>`,
  },

  // 9. Esercizio 2 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 2: Role-play CEO Scettico',
    timer: '60 minuti',
    level: 'intermedio',
    tools: ['ChatGPT (free) o Claude (free)', 'Template obiezioni (slide precedente)'],
    deliverable: 'Documento con le 6 obiezioni gestite + risposte personalizzate per la propria azienda',
    instructions: [
      '<strong>Step 1 — PREPARAZIONE (15 min):</strong> In coppia, decidete i ruoli: CEO scettico e Responsabile innovazione. Il "CEO" studia le obiezioni dal template. Il "Responsabile" prepara il pitch usando ChatGPT/Claude: "Devo convincere il mio CEO scettico ad adottare AI in azienda. Settore: [X]. Preparami un pitch di 3 minuti con numeri concreti e risposte alle obiezioni comuni."',
      '<strong>Step 2 — ROUND 1 (10 min):</strong> Il Responsabile presenta il piano (3 min). Il CEO fa obiezioni dal template (5 min di botta e risposta). Prendete appunti sulle obiezioni più difficili',
      '<strong>Step 3 — PAUSA E ADATTA (5 min):</strong> Il Responsabile torna su ChatGPT/Claude: "Il mio CEO ha obiettato che [obiezione difficile]. Come posso rispondere in modo più convincente con dati concreti?"',
      '<strong>Step 4 — ROUND 2 (10 min):</strong> Scambiate i ruoli! Chi era CEO diventa Responsabile e viceversa. Ripetete il pitch + obiezioni',
      '<strong>Step 5 — DEBRIEF (10 min):</strong> Insieme, compilate un documento con: Le 3 obiezioni più difficili che avete incontrato. La risposta migliore per ciascuna. 1 insight che non avevate considerato',
      '<strong>Step 6 — CONDIVISIONE (10 min):</strong> Ogni coppia condivide l\'obiezione più tosta e la risposta migliore con il gruppo',
    ],
  },

  // --- ESERCIZIO 3: Piano 90 giorni ---

  // 10. Intro Esercizio 3
  {
    type: 'concept',
    heading: 'Esercizio 3: Piano di Adozione 90 Giorni',
    content: `<strong>Obiettivo:</strong> Creare un piano concreto e realistico per introdurre l'AI nella propria azienda in 3 mesi.
<br><br>
<strong>Le 3 fasi:</strong>
<br>• <strong>Mese 1 — PILOT:</strong> Sperimentare con 1 use case e 3 persone
<br>• <strong>Mese 2 — SCALE:</strong> Espandere a più team se il pilot funziona
<br>• <strong>Mese 3 — MEASURE:</strong> Misurare ROI e decidere il futuro
<br><br>
<strong>Tempo:</strong> 60 minuti · <strong>Tool:</strong> ChatGPT/Claude (free) + Google Docs`,
    image: { src: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif', alt: 'Planning' },
  },

  // 11. Esercizio 3 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 3: Piano di Adozione 90 Giorni',
    timer: '60 minuti',
    level: 'avanzato',
    tools: ['ChatGPT (free) o Claude (free)', 'Google Docs (free)'],
    deliverable: 'Documento "Piano 90 Giorni" completo con use case, team, metriche, budget (€0), timeline',
    instructions: [
      '<strong>Step 1 — CONTESTO (10 min):</strong> Apri Google Docs. Titolo: "Piano Adozione AI 90 Giorni — [Azienda]". Scrivi: Settore, N° dipendenti, Problema principale da risolvere con AI, Budget: €0 (solo tool gratuiti)',
      '<strong>Step 2 — CHIEDI ALL\'AI (10 min):</strong> Su ChatGPT/Claude: "Sono [ruolo] in un\'azienda di [settore] con [N] dipendenti. Voglio creare un piano di adozione AI in 90 giorni con budget zero. Il problema principale è [X]. Crea un piano con 3 fasi: Mese 1 (Pilot), Mese 2 (Scale), Mese 3 (Measure). Per ogni fase includi: obiettivo, azioni concrete, tool gratuiti da usare, KPI da misurare, rischi."',
      '<strong>Step 3 — MESE 1: PILOT (10 min):</strong> Compila nel doc: <br>• Use case scelto (1 solo, specifico)<br>• Team pilot (3 persone max, nomi/ruoli)<br>• Tool gratuito da usare<br>• KPI: tempo risparmiato, qualità output<br>• Check-point: review settimanale di 15 min',
      '<strong>Step 4 — MESE 2: SCALE (10 min):</strong> Compila: <br>• Risultati attesi dal pilot (numeri)<br>• Criteri go/no-go per espandere<br>• Secondo team da coinvolgere<br>• Training necessario (chi forma chi)<br>• AI Policy da implementare (riferimento L09-Es3 della lezione precedente)',
      '<strong>Step 5 — MESE 3: MEASURE (10 min):</strong> Compila: <br>• KPI finali: ore risparmiate, NPS interno, n° task automatizzati<br>• Report per il management (struttura)<br>• Decisione: continuare / espandere / fermare<br>• Piano per i successivi 6 mesi (se go)',
      '<strong>Step 6 — REVIEW INCROCIATA (10 min):</strong> Scambia il piano con un collega. Ognuno fa 3 domande: "Questo è realistico?", "Cosa manca?", "Come misuri il successo?"',
    ],
  },

  // --- ESERCIZIO 4: Certificazioni gratuite ---

  // 12. Intro Esercizio 4
  {
    type: 'concept',
    heading: 'Esercizio 4: Certificazioni AI Gratuite',
    content: `<strong>Obiettivo:</strong> Iscriversi a una certificazione AI gratuita e completare il primo modulo.
<br><br>
<strong>Perché:</strong> Le certificazioni gratuite sono un modo concreto per continuare a imparare dopo il corso. E fanno bene al CV.
<br><br>
<strong>Opzioni consigliate:</strong>
<br>• <strong>Google AI Essentials</strong> — certificato riconosciuto, ~10h totali
<br>• <strong>Elements of AI</strong> — disponibile in italiano, ~30h, dall'Università di Helsinki
<br><br>
<strong>Tempo:</strong> 30 minuti · <strong>Tool:</strong> Browser + account Google/email`,
    image: { src: 'https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif', alt: 'Learning' },
  },

  // 13. Esercizio 4 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 4: Inizia una Certificazione Gratuita',
    timer: '30 minuti',
    level: 'base',
    tools: ['Browser', 'Account Google o email'],
    deliverable: 'Screenshot dell\'iscrizione completata + primo modulo iniziato/completato',
    instructions: [
      '<strong>Step 1 — SCEGLI (5 min):</strong> Apri uno di questi link e scegli il corso che ti interessa di più:<br>• <a href="https://grow.google/certificates/ai-essentials" target="_blank">Google AI Essentials</a> — certificato Google, ~10h<br>• <a href="https://course.elementsofai.com/it/" target="_blank">Elements of AI</a> — in italiano, dall\'Università di Helsinki<br>• <a href="https://learn.microsoft.com/en-us/ai" target="_blank">Microsoft AI Skills</a> — badge gratuiti Microsoft',
      '<strong>Step 2 — ISCRIVITI (5 min):</strong> Crea l\'account e completa la registrazione. Fai uno screenshot della dashboard del corso',
      '<strong>Step 3 — PRIMO MODULO (15 min):</strong> Inizia il primo modulo/lezione del corso scelto. L\'obiettivo è completarlo (o almeno iniziarlo) entro la fine dell\'esercizio',
      '<strong>Step 4 — PIANO DI COMPLETAMENTO (5 min):</strong> Scrivi su un post-it o Google Keep: "Completerò [nome corso] entro il [data]. Dedicherò [N] minuti al giorno/settimana." Condividi il tuo piano con il gruppo',
      '<strong>Bonus:</strong> Se hai già una certificazione AI, aiuta un collega a iscriversi e scegliere il corso giusto per il suo livello',
    ],
  },

  // --- CHIUSURA ---

  // 14. Quote
  {
    type: 'quote',
    text: "La tecnologia è facile. Le persone sono difficili. Ma le persone che capiscono la tecnologia cambiano il mondo.",
    source: 'Ogni CTO che ha provato a implementare qualcosa',
  },

  // 15. Recap
  {
    type: 'recap',
    heading: 'Recap — Lab Lezione 09',
    items: [
      'AI Readiness Assessment: sapete valutare la vostra azienda',
      'Role-play: sapete gestire le obiezioni del management',
      'Piano 90 giorni: avete una roadmap concreta',
      'Certificazioni: avete iniziato un percorso di apprendimento continuo',
    ],
  },

  // 16. Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Google AI Essentials — certificato gratuito', url: 'https://grow.google/certificates/ai-essentials' },
      { label: 'Elements of AI — in italiano', url: 'https://course.elementsofai.com/it/' },
      { label: 'Microsoft AI Skills — badge gratuiti', url: 'https://learn.microsoft.com/en-us/ai' },
      { label: 'Deloitte State of AI 2026', url: 'https://www.deloitte.com/cy/en/issues/generative-ai/state-of-ai-in-enterprise.html' },
      { label: 'McKinsey — The state of AI', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai' },
    ],
  },

  // 17. Anteprima
  {
    type: 'title',
    lessonNumber: 'Domani — la FINALE',
    title: '10 · Progetto Finale & Recap',
    subtitle: 'Pitch "AI per il mio CEO", presentazioni, 30-Day Challenge, e chiusura del corso',
  },
]
