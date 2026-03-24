export const meta = {
  lessonNumber: '09',
  title: "AI e Azienda: implementazione",
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '09',
    title: 'AI e Azienda: Implementazione',
    subtitle: 'Mercoledì 22 Aprile 2026 · Blocco Adozione',
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '🏢', text: "Come introdurre l'AI in azienda" },
      { emoji: '🔄', text: 'Change management e resistenza' },
      { emoji: '📋', text: 'Casi studio: successi e fallimenti' },
      { emoji: '🎭', text: 'Role-play: proponi AI al tuo team' },
    ],
  },

  // 3. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif', alt: 'Proposing AI to the board' },
    caption: '"Quando proponi l\'AI al board e ti guardano come se parlassi alieno"',
  },

  // 4. Il Problema dell'Adozione
  {
    type: 'concept',
    heading: "Il Problema dell'Adozione",
    content: `Il problema <strong>non è tecnologico</strong>. I tool funzionano. Il problema è <strong>umano</strong>.
<br><br>
Change management: come far sì che le persone <strong>cambino abitudini</strong> consolidate.
<br><br>
L'80% dei fallimenti AI non è tecnico — è organizzativo.`,
    image: { src: 'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif', alt: 'Change is hard' },
  },

  // 5. Le 3 Fasi dell'Adozione
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: "Le 3 Fasi dell'Adozione AI",
    features: [
      { icon: '🧪', title: '1. Sperimentazione', description: 'Singoli utenti provano tool AI. Nessuna policy. Risultati individuali. "Wow, funziona!"' },
      { icon: '⚙️', title: '2. Integrazione', description: 'AI nei processi aziendali. Policy definite. Training strutturato. KPI misurabili.' },
      { icon: '🚀', title: '3. Trasformazione', description: 'AI cambia il modello di business. Nuovi prodotti, servizi, ruoli. Cultura AI-first.' },
    ],
  },

  // 6. Quick Win
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Dove Iniziare: i Quick Win',
    features: [
      { icon: '📧', title: 'Email triage', description: 'Basso rischio, alto volume' },
      { icon: '📝', title: 'Meeting notes', description: 'Visibile, immediato' },
      { icon: '📊', title: 'Report draft', description: 'Risparmio ore/sett' },
      { icon: '🔍', title: 'FAQ interne', description: 'Riduce ticket IT' },
      { icon: '🌐', title: 'Traduzioni', description: 'Multilingua instant' },
    ],
  },

  // 7. Governance AI
  {
    type: 'concept',
    heading: 'Governance AI Aziendale',
    content: `<strong>Policy d'uso:</strong> chi può usare cosa, per quali scopi, con quali dati.
<br><br>
<strong>Dati consentiti:</strong> classificazione dei dati (pubblici, interni, confidenziali, PII).
<br><br>
<strong>Provider approvati:</strong> lista dei tool autorizzati, con motivazione.
<br><br>
<strong>Training:</strong> formazione obbligatoria prima dell'accesso ai tool AI.`,
    image: { src: 'https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif', alt: 'Governance' },
  },

  // 8. Privacy e GDPR
  {
    type: 'concept',
    heading: "Privacy e GDPR con l'AI",
    content: `<strong>Mai dare ai modelli:</strong> dati personali (PII), segreti aziendali, codice proprietario, dati sanitari.
<br><br>
<strong>Zona grigia:</strong> dati aggregati, comunicazioni interne, bozze di documenti. Serve una policy chiara.
<br><br>
<strong>Soluzioni:</strong> modelli on-premise, API con data processing agreement, anonimizzazione pre-invio.`,
    image: { src: 'https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif', alt: 'Privacy shield' },
  },

  // 9. AI Policy Template
  {
    type: 'concept',
    centered: true,
    heading: 'AI Policy: Template Base',
    content: `<div style="max-width: 800px; margin: 0 auto; background: var(--surface); border-radius: var(--radius); padding: 28px 32px; text-align: left;">
<div style="font-size: 0.6em; padding: 8px 0; border-bottom: 1px solid rgba(100,116,139,0.2);">
  <strong style="color: #fb923c;">1. Scopo e ambito</strong> — A chi si applica, perché esiste
</div>
<div style="font-size: 0.6em; padding: 8px 0; border-bottom: 1px solid rgba(100,116,139,0.2);">
  <strong style="color: var(--secondary);">2. Tool approvati</strong> — Lista provider + livello di accesso per ruolo
</div>
<div style="font-size: 0.6em; padding: 8px 0; border-bottom: 1px solid rgba(100,116,139,0.2);">
  <strong style="color: var(--accent);">3. Classificazione dati</strong> — Cosa si può dare all'AI e cosa no
</div>
<div style="font-size: 0.6em; padding: 8px 0; border-bottom: 1px solid rgba(100,116,139,0.2);">
  <strong style="color: var(--warning);">4. Responsabilità</strong> — L'output AI va sempre verificato. Responsabile = l'umano
</div>
<div style="font-size: 0.6em; padding: 8px 0; border-bottom: 1px solid rgba(100,116,139,0.2);">
  <strong style="color: var(--danger);">5. Incidenti</strong> — Come segnalare uso improprio o data leak
</div>
<div style="font-size: 0.6em; padding: 8px 0;">
  <strong style="color: var(--muted);">6. Revisione</strong> — Policy rivista ogni 6 mesi (l'AI cambia veloce)
</div>
</div>`,
  },

  // 10. Metriche di Successo
  {
    type: 'concept',
    heading: 'Metriche di Successo',
    content: `<strong>Usage rate:</strong> % dipendenti che usano AI almeno 1x/settimana.
<br><br>
<strong>Task completion:</strong> tempo medio per completare task chiave (prima vs dopo).
<br><br>
<strong>NPS interno:</strong> "Quanto è utile l'AI nel tuo lavoro?" (1-10).
<br><br>
Target: >60% usage, -30% tempo task, NPS >7 dopo 3 mesi.`,
    image: { src: 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif', alt: 'Metrics' },
  },

  // 11. Stats: Crescita
  {
    type: 'stats',
    heading: 'AI Adoption: i Numeri',
    stats: [
      { value: 3, suffix: 'x', label: 'Crescita più veloce per aziende che adottano AI' },
      { value: 72, suffix: '%', label: 'Aziende che hanno adottato AI in almeno 1 funzione (2026)' },
      { value: 44, suffix: '%', label: 'Dipendenti che usano AI senza dirlo al manager' },
    ],
  },

  // 12. Perché le Persone Resistono
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: "Perché le Persone Resistono all'AI",
    features: [
      { icon: '😰', title: 'Paura del lavoro', description: '"Mi sostituiranno con l\'AI"' },
      { icon: '🫣', title: 'Paura di sbagliare', description: '"E se faccio un errore con l\'AI?"' },
      { icon: '🤨', title: 'Sfiducia', description: '"Non mi fido di quello che scrive"' },
      { icon: '😵‍💫', title: 'Complessità', description: '"Troppo complicato, non fa per me"' },
    ],
  },

  // 13. Curva di Adozione
  {
    type: 'concept',
    heading: 'La Curva di Adozione',
    content: `<strong>Innovatori (2.5%):</strong> già usano AI ovunque. Sono i tuoi alleati.
<br><br>
<strong>Early adopters (13.5%):</strong> curiosi, disposti a provare se vedono valore.
<br><br>
<strong>Early majority (34%):</strong> aspettano che qualcun altro provi prima. Vogliono prove.
<br><br>
<strong>Late majority + Laggards (50%):</strong> cambiano solo se obbligati. Servono incentivi chiari.`,
    image: { src: 'https://media.giphy.com/media/3oKIPjHCmuXqdSupvW/giphy.gif', alt: 'Adoption curve' },
  },

  // 14. Strategie Change Management
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Strategie di Change Management',
    features: [
      { icon: '🏆', title: 'Quick wins', description: 'Risultati visibili in 2 settimane. Crea momentum.' },
      { icon: '🦸', title: 'Champions interni', description: '1 persona per team che guida e supporta.' },
      { icon: '📚', title: 'Formazione continua', description: 'Non un corso una tantum. Sessioni settimanali brevi.' },
      { icon: '📢', title: 'Comunicazione', description: 'Trasparenza su obiettivi, impatto su ruoli, supporto.' },
    ],
  },

  // 15. Il Ruolo del Leader
  {
    type: 'concept',
    heading: "Il Ruolo del Leader nell'Adozione AI",
    content: `<strong>Usa per primo:</strong> se il CEO/manager non usa AI, perché dovrebbe farlo il team?
<br><br>
<strong>Dà l'esempio:</strong> condividi pubblicamente come AI ti ha aiutato in una decisione.
<br><br>
<strong>Crea lo spazio:</strong> tempo dedicato alla sperimentazione. "AI Friday" — 2h/settimana per esplorare.`,
    image: { src: 'https://media.giphy.com/media/dSetNZo2AJfptAk9hp/giphy.gif', alt: 'Leader' },
  },

  // 16. AI-Washing
  {
    type: 'concept',
    heading: "Evitare l'AI-Washing",
    content: `<strong>AI-washing:</strong> dire "usiamo l'AI" senza che cambi nulla. Marketing interno vuoto.
<br><br>
<strong>Segnali:</strong> slide deck pieni di "AI-powered", zero metriche, nessun processo cambiato.
<br><br>
<strong>Antidoto:</strong> mostra i numeri. Prima/dopo. Task concreti. Risparmio misurabile.`,
    image: { src: 'https://media.giphy.com/media/8YBm95B5JNIXTWp5on/giphy.gif', alt: 'AI washing' },
  },

  // 17. Meme: Employee Reaction
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/l0IylOPCNkiqOgMyA/giphy.gif', alt: 'Employee reaction to AI' },
    caption: '"La reazione del team quando annunci l\'ennesimo tool AI obbligatorio"',
  },

  // 18. Quote
  {
    type: 'quote',
    text: "La tecnologia è facile. Le persone sono difficili.",
    source: 'Ogni CTO che ha provato a implementare qualcosa',
  },

  // 19. Case Study 1: PMI Italiana
  {
    type: 'concept',
    centered: true,
    heading: 'Case Study 1: Studio Commercialisti (PMI)',
    content: `<p style="text-align:center; font-size: 0.5em; color: var(--muted); margin-bottom: 24px;">Milano, 15 dipendenti, settore consulenza fiscale</p>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;">
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 12px;">Problema</div>
    <div style="font-size: 0.45em; color: var(--muted); line-height: 1.6;">8h/settimana per redigere pareri fiscali. Ricerca normativa manuale. Errori di copia.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--secondary); margin-bottom: 12px;">Soluzione</div>
    <div style="font-size: 0.45em; color: var(--muted); line-height: 1.6;">Claude per bozze pareri + RAG su normativa interna. Training 2h/settimana per 4 settimane.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: #fb923c; margin-bottom: 12px;">Risultato</div>
    <div style="font-size: 0.45em; color: var(--muted); line-height: 1.6;">-60% tempo per parere. 3h/settimana liberate. ROI positivo in 6 settimane. NPS interno: 8.2/10.</div>
  </div>
</div>`,
  },

  // 20. Case Study 2: Enterprise
  {
    type: 'concept',
    centered: true,
    heading: 'Case Study 2: Enterprise Globale',
    content: `<p style="text-align:center; font-size: 0.5em; color: var(--muted); margin-bottom: 24px;">McKinsey & Company — adozione interna AI (2024-2026)</p>
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;">
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--accent); margin-bottom: 12px;">Approccio</div>
    <div style="font-size: 0.45em; color: var(--muted); line-height: 1.6;">Lilli (AI interna). 70.000 utenti. Integrata in ricerca, analisi, generazione slide.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--secondary); margin-bottom: 12px;">Chiave del successo</div>
    <div style="font-size: 0.45em; color: var(--muted); line-height: 1.6;">Champion per ogni practice. Training obbligatorio. Metriche settimanali. Leadership che usa per prima.</div>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: #fb923c; margin-bottom: 12px;">Risultato</div>
    <div style="font-size: 0.45em; color: var(--muted); line-height: 1.6;">+40% velocità research. Adozione >90% in 6 mesi. Nuovo standard di mercato per la consulenza.</div>
  </div>
</div>`,
  },

  // 21. Case Study 3: Fallimento
  {
    type: 'concept',
    centered: true,
    heading: 'Case Study 3: Cosa NON Fare',
    content: `<p style="text-align:center; font-size: 0.5em; color: var(--danger); margin-bottom: 24px;">Azienda manifatturiera — adozione fallita in 4 mesi</p>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 800px; margin: 0 auto;">
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--danger); margin-bottom: 12px;">Errori commessi</div>
    <ul style="font-size: 0.42em; color: var(--muted); line-height: 1.8; padding-left: 16px;">
      <li>Tool imposto dall'alto, zero consultazione</li>
      <li>Nessun training, solo email "usate questo"</li>
      <li>KPI: solo "% login" (vanity metric)</li>
      <li>Nessun champion, nessun supporto</li>
    </ul>
  </div>
  <div style="background: var(--surface); border-radius: var(--radius); padding: 24px 20px;">
    <div style="font-size: 0.55em; font-weight: 700; color: var(--warning); margin-bottom: 12px;">Lezioni</div>
    <ul style="font-size: 0.42em; color: var(--muted); line-height: 1.8; padding-left: 16px;">
      <li>L'adozione top-down senza buy-in fallisce</li>
      <li>Il training non è opzionale</li>
      <li>Le metriche devono misurare impatto, non attività</li>
      <li>Serve supporto umano, non solo documentazione</li>
    </ul>
  </div>
</div>`,
  },

  // 22. Pattern Comuni
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Pattern Comuni nei Successi',
    features: [
      { icon: '⬆️', title: 'Bottom-up', description: "L'adozione parte da chi fa il lavoro, non dal board" },
      { icon: '🦸', title: 'Champion program', description: '1 persona per team, formata e motivata' },
      { icon: '🔁', title: 'Iterazione rapida', description: 'Sprint di 2 settimane, misura, adatta, ripeti' },
      { icon: '📊', title: 'Metriche reali', description: 'Tempo, qualità, revenue — non "login count"' },
    ],
  },

  // 23. Role-Play
  {
    type: 'hands-on',
    heading: 'Proponi AI al Tuo Team',
    timer: '⏱ 90 minuti',
    instructions: [
      '<strong>Scenario:</strong> sei il CTO/manager. Devi convincere il board o il team ad adottare AI.',
      '<strong>Prepara 3 slide:</strong> Problema → Soluzione AI → ROI atteso (con numeri!)',
      '<strong>Presentazione:</strong> 5 min di pitch + 3 min di Q&A dal "board" (i tuoi colleghi)',
      '<strong>Feedback:</strong> il "board" vota: approvato / da rivedere / bocciato. Motivazione.',
    ],
  },

  // 24. Recap
  {
    type: 'recap',
    heading: 'Recap — Lezione 09',
    items: [
      "L'adozione AI è un problema umano, non tecnologico",
      '3 fasi: Sperimentazione → Integrazione → Trasformazione',
      'Governance: policy, GDPR, provider approvati',
      'Change management: champions, quick wins, leadership',
      'Casi studio: cosa funziona e cosa no',
    ],
  },

  // 25. Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Global AI Adoption Statistics 2026', url: 'https://allaboutai.com/resources/ai-statistics/global-ai-adoption/' },
      { label: 'AI Adoption Statistics — MedhaCloud', url: 'https://medhacloud.com/blog/ai-adoption-statistics-2026' },
      { label: 'AI Agents and Enterprise Transformation', url: 'https://itbrief.asia/story/ai-agents-and-enterprise-transformation' },
    ],
  },

  // 26. Anteprima Lezione Finale
  {
    type: 'title',
    lessonNumber: 'Prossima lezione — la FINALE',
    title: '10 · Progetto Finale & Recap',
    subtitle: 'Presentazioni dei progetti, recap del corso, e uno sguardo al futuro',
  },
]
