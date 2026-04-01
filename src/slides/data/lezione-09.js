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
    <div style="font-size: 0.65em;"><strong style="color: #fb923c;">1. DATI</strong> — Dati digitalizzati e accessibili?<br><span style="color: var(--muted);">1 = cartaceo · 5 = data warehouse</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--secondary);">2. COMPETENZE</strong> — Familiarità con tool digitali?<br><span style="color: var(--muted);">1 = solo email · 5 = usa AI ogni giorno</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--accent);">3. BUDGET</strong> — Budget per innovazione/AI?<br><span style="color: var(--muted);">1 = zero · 5 = allocato e approvato</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--warning);">4. GOVERNANCE</strong> — Policy per uso dati/tech?<br><span style="color: var(--muted);">1 = nessuna · 5 = GDPR + policy IT</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--danger);">5. USE CASE</strong> — Processi ripetitivi identificati?<br><span style="color: var(--muted);">1 = mai pensato · 5 = lista pronta</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: #fb923c;">6. LEADERSHIP</strong> — Management supporta innovazione?<br><span style="color: var(--muted);">1 = resiste · 5 = sponsor attivo</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--secondary);">7. CULTURA</strong> — Apertura al cambiamento?<br><span style="color: var(--muted);">1 = "sempre fatto così" · 5 = sperimentale</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--accent);">8. INFRASTRUTTURA</strong> — Strumenti cloud/SaaS?<br><span style="color: var(--muted);">1 = locale/legacy · 5 = full cloud</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--warning);">9. PROCESSI</strong> — Workflow documentati?<br><span style="color: var(--muted);">1 = conoscenza tribale · 5 = mappati</span></div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 14px 18px;">
    <div style="font-size: 0.65em;"><strong style="color: var(--danger);">10. RISCHIO</strong> — Tolleranza al rischio tech?<br><span style="color: var(--muted);">1 = rischio zero · 5 = fail fast</span></div>
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
      '<strong>Step 2 — COMPILA IL TEMPLATE (15 min):</strong> Rispondi alle 10 domande (slide precedente): punteggio 1-5 + breve motivazione per ogni voto',
      '<strong>Step 3 — CALCOLA LO SCORE:</strong> Somma i punteggi. <strong>10-20:</strong> 🔴 Non pronta — servono fondamenta. <strong>21-35:</strong> 🟡 Parzialmente pronta — quick win possibili. <strong>36-50:</strong> 🟢 Pronta — si può scalare',
      '<strong>Step 4 — CHIEDI ALL\'AI (15 min):</strong> Prompt: "Azienda [settore], [N] dip., score [X]/50. Punti deboli: [lista]. Suggerisci: 1) 3 azioni prioritarie, 2) quick win a budget zero in 2 settimane, 3) rischi da mitigare."',
      '<strong>Step 5 — CREA LA ROADMAP (15 min):</strong> Su Google Docs: Titolo, Score, Top 3 punti deboli + piano d\'azione, Quick win, Timeline 90 giorni',
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
    <div style="font-size: 0.7em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🤨 "Costa troppo"</div>
    <div style="font-size: 0.65em; color: var(--muted); line-height: 1.7;">→ Tool free per partire (€0). Il costo vero è NON adottare: $7.800/dip./anno persi (McKinsey 2025).</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.7em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">😰 "Sostituirà i dipendenti"</div>
    <div style="font-size: 0.65em; color: var(--muted); line-height: 1.7;">→ AI sostituisce task ripetitivi, non persone. 92% aziende AI-adopter ha assunto, non licenziato.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.7em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🔒 "E la privacy/GDPR?"</div>
    <div style="font-size: 0.65em; color: var(--muted); line-height: 1.7;">→ AI Policy: dati classificati, tool approvati, no PII su cloud. AI Act EU: tempo fino al 2027-28.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.7em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🤷 "Non è il momento giusto"</div>
    <div style="font-size: 0.65em; color: var(--muted); line-height: 1.7;">→ Solo 8.2% imprese italiane usa AI (vs 88% mondo). Chi si muove ORA ha 2-3 anni di vantaggio.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.7em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">😵‍💫 "Troppo complicato"</div>
    <div style="font-size: 0.65em; color: var(--muted); line-height: 1.7;">→ 1 use case, 3 persone, 2 settimane. Se funziona, scaliamo. Rischio quasi zero.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 18px;">
    <div style="font-size: 0.7em; font-weight: 700; color: var(--danger); margin-bottom: 8px;">🎯 "Che ROI concreto?"</div>
    <div style="font-size: 0.65em; color: var(--muted); line-height: 1.7;">→ Email triage AI = -3h/sett. a persona. 10 persone = 30h/sett. = ~€36k/anno. Tool: €0.</div>
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
      '<strong>Step 1 — PREPARAZIONE (15 min):</strong> In coppia, decidete i ruoli: CEO scettico e Responsabile innovazione. Il CEO studia le obiezioni dal template. Il Responsabile prepara il pitch con AI: "Pitch 3 min per adottare AI, settore [X], con numeri e risposte alle obiezioni."',
      '<strong>Step 2 — ROUND 1 (10 min):</strong> Il Responsabile presenta il piano (3 min). Il CEO fa obiezioni dal template (5 min di botta e risposta). Prendete appunti sulle obiezioni più difficili',
      '<strong>Step 3 — PAUSA E ADATTA (5 min):</strong> Il Responsabile torna su ChatGPT/Claude: "Il mio CEO ha obiettato che [obiezione difficile]. Come posso rispondere in modo più convincente con dati concreti?"',
      '<strong>Step 4 — ROUND 2 (10 min):</strong> Scambiate i ruoli! Chi era CEO diventa Responsabile e viceversa. Ripetete il pitch + obiezioni',
      '<strong>Step 5 — DEBRIEF (10 min):</strong> Compilate insieme: 3 obiezioni più difficili, risposta migliore per ciascuna, 1 insight inaspettato',
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
      '<strong>Step 1 — CONTESTO (10 min):</strong> Google Docs: "Piano Adozione AI 90 Giorni — [Azienda]". Scrivi: settore, n° dipendenti, problema da risolvere, budget €0',
      '<strong>Step 2 — CHIEDI ALL\'AI (10 min):</strong> Prompt: "Piano adozione AI 90 giorni, budget zero, [settore], [N] dip., problema: [X]. 3 fasi (Pilot/Scale/Measure). Per ogni fase: obiettivo, azioni, tool gratuiti, KPI, rischi."',
      '<strong>Step 3 — MESE 1: PILOT (10 min):</strong> Compila: 1 use case specifico, team pilot (3 persone max), tool gratuito, KPI (tempo risparmiato, qualità), review settimanale 15 min',
      '<strong>Step 4 — MESE 2: SCALE (10 min):</strong> Compila: risultati attesi (numeri), criteri go/no-go, secondo team, training (chi forma chi), AI Policy',
      '<strong>Step 5 — MESE 3: MEASURE (10 min):</strong> Compila: KPI finali (ore, NPS, task automatizzati), report per management, decisione go/no-go, piano 6 mesi',
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
      '<strong>Step 1 — SCEGLI (5 min):</strong> Scegli un corso:<br>• <a href="https://grow.google/certificates/ai-essentials" target="_blank">Google AI Essentials</a> (~10h)<br>• <a href="https://course.elementsofai.com/it/" target="_blank">Elements of AI</a> (italiano, ~30h)<br>• <a href="https://learn.microsoft.com/en-us/ai" target="_blank">Microsoft AI Skills</a> (badge gratuiti)',
      '<strong>Step 2 — ISCRIVITI (5 min):</strong> Crea l\'account e completa la registrazione. Fai uno screenshot della dashboard del corso',
      '<strong>Step 3 — PRIMO MODULO (15 min):</strong> Inizia il primo modulo/lezione del corso scelto. L\'obiettivo è completarlo (o almeno iniziarlo) entro la fine dell\'esercizio',
      '<strong>Step 4 — PIANO DI COMPLETAMENTO (5 min):</strong> Scrivi: "Completerò [corso] entro [data], [N] min al giorno/settimana." Condividi con il gruppo',
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
