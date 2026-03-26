export const meta = {
  lessonNumber: '04',
  title: 'OpenAI: ChatGPT, Playground e piattaforma',
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '04',
    title: 'OpenAI: ChatGPT,\nPlayground & API',
    subtitle: 'Mercoledi 01/04/2026 \u00b7 6h in presenza \u00b7 Blocco PIATTAFORME',
    style: { color: 'var(--secondary)' },
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '\ud83c\udf10', text: 'OpenAI nel 2026: l\'ecosistema' },
      { emoji: '\ud83d\udcac', text: 'ChatGPT avanzato: GPTs, Canvas, Memory' },
      { emoji: '\ud83e\uddea', text: 'Playground: il laboratorio dei modelli' },
      { emoji: '\ud83d\udd11', text: 'API: chiavi, modelli, pricing' },
      { emoji: '\ud83c\udfe2', text: 'Use case aziendali reali' },
      { emoji: '\ud83d\udee0\ufe0f', text: 'Workshop: crea il tuo GPT custom' },
    ],
  },

  // 3. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif', alt: 'Mind blown' },
    caption: '"Io quando ho scoperto ChatGPT per la prima volta"',
  },

  // 4. OpenAI nel 2026: l'ecosistema
  {
    type: 'concept',
    heading: 'OpenAI nel 2026: l\'ecosistema',
    content: `Non solo ChatGPT: un ecosistema completo di modelli e strumenti per ogni esigenza.
<br><br>
<strong>Testo:</strong> GPT-4o, o3, o4-mini<br>
<strong>Immagini:</strong> DALL-E 3, GPT-4o vision<br>
<strong>Audio:</strong> Whisper (STT), TTS<br>
<strong>Video:</strong> Sora<br>
<strong>Infrastruttura:</strong> API, Playground, Assistants`,
    image: { src: '', alt: '' },
    footer: '<strong>In pratica:</strong> OpenAI non e solo ChatGPT. E un ecosistema completo: testo, immagini, audio, video e infrastruttura API per costruire qualsiasi applicazione AI.',
  },

  // 5. ChatGPT: non e solo una chat
  {
    type: 'concept',
    heading: 'ChatGPT: non e solo una chat',
    content: `<strong>Custom Instructions</strong> \u2014 personalizza tono, ruolo, contesto permanente
<br><br>
<strong>Memory</strong> \u2014 ricorda chi sei tra sessioni diverse
<br><br>
<strong>Canvas</strong> \u2014 documenti collaborativi editabili con l'AI
<br><br>
<strong>Web Search</strong> \u2014 cerca e sintetizza info aggiornate dal web
<br><br>
<strong>Plugins / GPTs</strong> \u2014 estensioni personalizzate per task specifici`,
    image: { src: '', alt: '' },
    footer: '<strong>Takeaway:</strong> la maggior parte degli utenti usa solo la chat base. Memory, Canvas, Custom Instructions e GPTs sono funzionalita nascoste che moltiplicano la produttivita.',
  },

  // 6. GPTs custom: la killer feature
  {
    type: 'concept',
    heading: 'GPTs custom: la killer feature',
    content: `Un <strong>GPT custom</strong> e un ChatGPT specializzato: istruzioni + knowledge + azioni, zero codice.
<br><br>
<strong>Come si costruisce:</strong><br>
1. Dai istruzioni di sistema (ruolo, tono, limiti)<br>
2. Carichi documenti (knowledge base)<br>
3. Attivi tool: web, DALL-E, code interpreter<br>
4. Pubblichi: privato, link, o GPT Store`,
    image: { src: '', alt: '' },
    footer: '<strong>Il punto chiave:</strong> un GPT custom e il modo piu veloce per creare un assistente AI specializzato senza scrivere una riga di codice. In 10 minuti hai un prototipo funzionante.',
  },

  // 7. Canvas: documenti collaborativi con AI
  {
    type: 'concept',
    heading: 'Canvas: documenti collaborativi con AI',
    content: `Un editor inline dove <strong>tu e l'AI lavorate sullo stesso documento</strong> in tempo reale.
<br><br>
<strong>vs Artifacts (Claude):</strong> Canvas e piu orientato all'editing collaborativo; Artifacts genera app/visualizzazioni standalone.
<br><br>
Ideale per: report, email, codice, testi lunghi da rifinire insieme.`,
    image: { src: '', alt: '' },
    footer: '<strong>Ricorda:</strong> Canvas trasforma ChatGPT da "genera e incolla" a "lavoriamo insieme sul documento". Ideale per testi lunghi che richiedono piu iterazioni.',
  },

  // 8. ChatGPT Memory
  {
    type: 'concept',
    heading: 'ChatGPT Memory: quando l\'AI ricorda chi sei',
    content: `ChatGPT salva dettagli tra le conversazioni: il tuo ruolo, le tue preferenze, i tuoi progetti.
<br><br>
<strong>Come funziona:</strong> l'AI decide cosa memorizzare. Puoi vedere, cancellare o disattivare le memory.
<br><br>
\u26a0\ufe0f <strong>Privacy:</strong> le memory sono usate per personalizzare, non per training. Puoi cancellare tutto in qualsiasi momento.`,
    image: { src: '', alt: '' },
    footer: '<strong>In pratica:</strong> la Memory rende ChatGPT un assistente personale che migliora nel tempo. Piu lo usi, piu le risposte diventano pertinenti al tuo contesto lavorativo.',
  },

  // 9. GPT-4o vs o3: quando usare quale (compare-table)
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'GPT-4o vs o3: quando usare quale',
    columns: ['', 'GPT-4o', 'o3'],
    rows: [
      ['<strong>Velocita</strong>', '\u26a1 Rapidissimo', '\ud83d\udc22 Piu lento (ragiona)'],
      ['<strong>Forza</strong>', 'Creativita, chat, multimodale', 'Matematica, logica, codice complesso'],
      ['<strong>Costo</strong>', '\ud83d\udcb0 Moderato', '\ud83d\udcb0\ud83d\udcb0\ud83d\udcb0 Alto'],
      ['<strong>Uso ideale</strong>', 'Chat, content, analisi rapida', 'Problemi complessi, audit, ricerca'],
    ],
    footer: '<strong>Takeaway:</strong> non esiste il modello migliore in assoluto. La scelta giusta dipende dal task: velocita e costo per il lavoro quotidiano, potenza di ragionamento per i problemi complessi.',
  },

  // 10. Stats - ChatGPT in numeri
  {
    type: 'stats',
    heading: 'ChatGPT in numeri',
    stats: [
      { value: 300, suffix: 'M', label: 'Milioni di utenti settimanali' },
      { value: 92, suffix: '%', label: 'delle Fortune 500 lo usa' },
      { value: 3, suffix: 'M', label: 'Milioni di GPTs custom creati' },
      { value: 200, suffix: 'B$', label: 'Miliardi $ valutazione OpenAI' },
    ],
    footer: 'Numeri che confermano: ChatGPT non e piu un esperimento, e uno strumento di lavoro adottato su scala globale.',
  },

  // 11. Quote - Sam Altman
  {
    type: 'quote',
    text: '"AI will be the most transformative technology humanity has ever built. We want to get it right \u2014 and make it available to everyone."',
    source: 'Sam Altman, CEO OpenAI (2025)',
    style: { background: 'linear-gradient(135deg, var(--secondary), #00997a)' },
  },

  // 12. OpenAI Playground: il laboratorio
  {
    type: 'concept',
    heading: 'OpenAI Playground: il laboratorio',
    content: `Un'interfaccia web per <strong>testare i modelli</strong> senza scrivere codice.
<br><br>
<strong>Parametri chiave:</strong><br>
\u2022 <code>temperature</code> \u2014 creativita (0 = deterministico, 2 = wild)<br>
\u2022 <code>max_tokens</code> \u2014 lunghezza massima risposta<br>
\u2022 <code>top_p</code> \u2014 alternativa a temperature<br>
\u2022 <code>system prompt</code> \u2014 istruzioni di base`,
    image: { src: '', alt: '' },
    footer: '<strong>In pratica:</strong> il Playground e il posto dove sperimentare prima di integrare. Cambia temperature, modello e system prompt fino a trovare la configurazione perfetta per il tuo use case.',
  },

  // 13. API Keys: come funzionano
  {
    type: 'concept',
    heading: 'API Keys: come funzionano',
    content: `Un <strong>API key</strong> e una password che permette al tuo software di parlare con i modelli OpenAI.
<br><br>
<strong>Come si ottiene:</strong> platform.openai.com \u2192 API Keys \u2192 Create
<br><br>
<strong>Pricing:</strong> paghi per token (parola ~ 1.3 token). GPT-4o: ~$2.50/1M input tokens.
<br><br>
<strong>Rate limits:</strong> limiti su richieste/minuto. Aumentano con l'uso.
<br><br>
\u26a0\ufe0f <strong>Mai</strong> condividere la key. Usa variabili d'ambiente.`,
    image: { src: '', alt: '' },
    footer: '<strong>Ricorda:</strong> una API key esposta e un conto in bianco per chiunque la trovi. Usa sempre variabili d\'ambiente e non committarla mai nel codice sorgente.',
  },

  // 14. I modelli disponibili via API (compare-table)
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'I modelli disponibili via API',
    columns: ['Modello', 'Tipo', 'Prezzo indicativo (input)'],
    rows: [
      ['<code>gpt-4o</code>', 'Testo + visione', '~$2.50 / 1M tokens'],
      ['<code>o3</code>', 'Ragionamento avanzato', '~$10 / 1M tokens'],
      ['<code>gpt-4o-mini</code>', 'Testo economico', '~$0.15 / 1M tokens'],
      ['<code>whisper-1</code>', 'Speech-to-Text', '~$0.006 / minuto'],
      ['<code>tts-1</code>', 'Text-to-Speech', '~$15 / 1M chars'],
      ['<code>dall-e-3</code>', 'Generazione immagini', '~$0.04 / immagine'],
    ],
    footer: 'Prezzi indicativi a Marzo 2026 \u2014 verificare su platform.openai.com/pricing',
  },

  // 15. Assistants API: quando serve davvero
  {
    type: 'concept',
    heading: 'Assistants API: quando serve davvero',
    content: `Un assistant e un <strong>agente persistente</strong> con memoria, tool e file propri.
<br><br>
<strong>Tool integrati:</strong><br>
\ud83d\udd0d <strong>File Search</strong> \u2014 cerca nei tuoi documenti (RAG automatico)<br>
\ud83d\udcbb <strong>Code Interpreter</strong> \u2014 esegue Python, crea grafici<br>
\u26a1 <strong>Function Calling</strong> \u2014 chiama le tue API
<br><br>
Pensa a un <em>GPT custom programmabile</em> via API.`,
    image: { src: '', alt: '' },
    footer: '<strong>Takeaway:</strong> usa le Assistants API quando serve persistenza (memoria, file, thread). Per chiamate singole senza stato, la Chat Completions API e piu semplice e costa meno.',
  },

  // 16. Function calling (flow-diagram)
  {
    type: 'custom',
    layout: 'flow-diagram',
    heading: 'Function calling: l\'AI che chiama tool',
    steps: [
      { label: 'Utente\n"Che tempo fa a Roma?"' },
      { label: 'GPT-4o\nget_weather("Roma")' },
      { label: 'Tua API\n{"temp": 22, "sky": "\u2600\ufe0f"}' },
      { label: 'GPT-4o\n"A Roma ci sono 22\u00b0..."' },
    ],
    footer: '<strong>Il punto chiave:</strong> il function calling e il ponte tra AI e sistemi reali. L\'AI decide cosa fare, il tuo codice lo esegue \u2014 con pieno controllo e sicurezza.',
  },

  // 17. Meme - API bill
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', alt: 'Shocked' },
    caption: '"Quando vedi la tua prima fattura API di OpenAI"',
  },

  // 18. 5 use case aziendali (feature-grid)
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: '5 use case aziendali con OpenAI',
    features: [
      { icon: '\ud83c\udfa7', title: 'Customer Support', description: 'Chatbot che risponde alle FAQ, smista ticket, escalation automatica' },
      { icon: '\u270d\ufe0f', title: 'Content Generation', description: 'Email, post social, newsletter, schede prodotto \u2014 brandizzati' },
      { icon: '\ud83d\udcca', title: 'Data Analysis', description: 'Carica un CSV, chiedi insight. Code Interpreter fa grafici' },
      { icon: '\ud83d\udd0d', title: 'Code Review', description: 'Analisi codice, bug detection, refactoring suggestions' },
      { icon: '\ud83d\udcc4', title: 'Document Processing', description: 'Estrazione dati da contratti, fatture, report \u2014 strutturati' },
    ],
    footer: '<strong>In pratica:</strong> non serve un progetto enorme per iniziare. Scegli un use case con alto volume e bassa complessita \u2014 li troverai il ROI piu rapido.',
  },

  // 19. Case study: riduzione tempo email
  {
    type: 'concept',
    heading: 'Case study: -70% tempo sulle email',
    content: `Un'azienda B2B con 50 dipendenti gestiva <strong>~200 email/giorno</strong> di richieste clienti.
<br><br>
<strong>Soluzione:</strong> GPT custom con knowledge base prodotti + template risposta. L'operatore riceve una bozza pre-compilata, revisiona e invia.
<br><br>
<strong>Risultato:</strong> tempo medio per email da 12 min a 3.5 min. Qualita percepita invariata (survey clienti).
<br><br>
<strong>Costo:</strong> ~$150/mese di API. ROI in 2 settimane.`,
    image: { src: '', alt: '' },
    footer: '<strong>Takeaway:</strong> l\'impatto reale non e "l\'AI fa tutto da sola", ma "l\'AI prepara la bozza, l\'umano revisiona e invia". Questo modello ibrido e quello che funziona davvero in azienda.',
  },

  // 20. Limiti e rischi nell'uso aziendale (feature-grid)
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Limiti e rischi nell\'uso aziendale',
    features: [
      { icon: '\ud83d\udd12', title: 'Data Privacy', description: 'I dati passano ai server OpenAI. Valutare DPA e compliance' },
      { icon: '\ud83c\uddea\ud83c\uddfa', title: 'GDPR', description: 'Serve base giuridica e informativa aggiornata' },
      { icon: '\ud83c\udfad', title: 'Allucinazioni', description: 'L\'AI inventa fatti plausibili. Revisione umana obbligatoria' },
      { icon: '\u00a9\ufe0f', title: 'Proprieta intellettuale', description: 'L\'output e tuo, ma attenzione al training dei modelli' },
    ],
    footer: '<strong>Ricorda:</strong> adottare l\'AI in azienda senza valutare privacy, GDPR e allucinazioni e un rischio concreto. La revisione umana resta obbligatoria per qualsiasi output critico.',
  },

  // 21. Enterprise vs Consumer (compare-table)
  {
    type: 'custom',
    layout: 'compare-table',
    heading: 'Enterprise vs Consumer',
    columns: ['', 'ChatGPT Free/Plus', 'ChatGPT Enterprise'],
    rows: [
      ['<strong>Training sui dati</strong>', 'Opt-out disponibile', 'Mai usati per training'],
      ['<strong>Crittografia</strong>', 'In transit', 'In transit + at rest'],
      ['<strong>SSO / SCIM</strong>', 'No', 'Si'],
      ['<strong>Admin console</strong>', 'No', 'Si \u2014 analytics, policy, utenti'],
      ['<strong>Context window</strong>', 'Standard', '128K+ garantito'],
      ['<strong>SLA</strong>', 'No', '99.9% uptime'],
    ],
    footer: '<strong>Il punto chiave:</strong> per un uso aziendale serio, il piano Enterprise non e un lusso ma una necessita. SSO, niente training sui dati e SLA garantito fanno la differenza.',
  },

  // 22. Meme - GPT doing my job
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', alt: 'Relaxing' },
    caption: '"Io dopo aver chiesto a GPT di fare il mio lavoro"',
  },

  // 23. Demo - Costruiamo un GPT custom
  {
    type: 'demo',
    heading: 'Costruiamo un GPT custom',
    description: `<strong>Step per il docente:</strong><br>
1. Apri chat.openai.com \u2192 Explore GPTs \u2192 Create<br>
2. Dai un nome e istruzioni (es. "Assistente HR aziendale")<br>
3. Carica 2-3 documenti come knowledge base<br>
4. Attiva Code Interpreter + Web Browsing<br>
5. Testa con domande reali \u2192 mostra come risponde<br>
6. Pubblica come "Only me" o "Anyone with a link"`,
    demoMaterial: {
      label: 'Documenti da caricare come knowledge base (preparati dal docente)',
      systemPrompt: `Sei l'Assistente HR di TechCorp Italia, un'azienda di 200 dipendenti nel settore tecnologico. Rispondi in modo professionale e preciso alle domande dei dipendenti su policy aziendali, benefit, ferie e processi HR. Se non trovi l'informazione nei documenti forniti, dillo chiaramente. Non inventare policy.`,
      documents: [
        {
          filename: 'policy-ferie-permessi.txt',
          content: `POLICY FERIE E PERMESSI — TechCorp Italia S.r.l.
Aggiornamento: Gennaio 2026

FERIE ANNUALI
- Tutti i dipendenti: 26 giorni lavorativi/anno
- Dirigenti: 30 giorni lavorativi/anno
- Maturazione: 2.17 giorni/mese (proporzionale)
- Le ferie non godute entro il 30 giugno dell'anno successivo vengono pagate

PERMESSI RETRIBUITI
- Matrimonio: 15 giorni consecutivi
- Lutto (parente 1° grado): 5 giorni
- Lutto (parente 2° grado): 3 giorni
- Nascita figlio: 10 giorni (padre), come da legge
- Visita medica: fino a 16 ore/anno con giustificativo
- Donazione sangue: 1 giorno per donazione (max 4/anno)

SMART WORKING
- Fino a 3 giorni/settimana per ruoli compatibili
- Richiesta minimo 48h prima al proprio manager
- Obbligatorio almeno 2 giorni/settimana in sede
- Attrezzatura: laptop aziendale + rimborso 50 euro/mese per connessione

RICHIESTA FERIE
- Tramite portale HR (hr.techcorp.it)
- Approvazione manager entro 72h
- Ferie estive (luglio-agosto): richiesta entro il 30 aprile
- Almeno 2 settimane consecutive obbligatorie nel periodo estivo`,
        },
        {
          filename: 'benefit-aziendali.txt',
          content: `BENEFIT AZIENDALI — TechCorp Italia S.r.l.
Aggiornamento: Gennaio 2026

WELFARE
- Buoni pasto: 8 euro/giorno (anche in smart working)
- Assicurazione sanitaria integrativa: Fondo Est per tutti
- Convenzione palestra: sconto 40% su catena FitActive
- Bonus nascita figlio: 1.000 euro una tantum

FORMAZIONE
- Budget formazione individuale: 1.500 euro/anno
- 5 giorni/anno dedicati alla formazione (retribuiti)
- Accesso a piattaforma e-learning aziendale (Coursera for Business)
- Rimborso certificazioni professionali al 100%

RETRIBUZIONE VARIABILE
- Bonus annuale: 0-15% della RAL, basato su obiettivi individuali (70%) e aziendali (30%)
- Valutazione performance: dicembre di ogni anno
- Stock option: disponibili per ruoli senior (da Senior Manager in su)

MOBILITA
- Abbonamento trasporto pubblico: rimborso 50%
- Parcheggio aziendale: gratuito (lista d'attesa)
- Auto aziendale: solo per ruoli commerciali e dirigenti
- Rimborso km: 0.30 euro/km per trasferte con auto propria`,
        },
        {
          filename: 'processo-onboarding.txt',
          content: `PROCESSO DI ONBOARDING — TechCorp Italia S.r.l.
Aggiornamento: Gennaio 2026

PRIMA DEL PRIMO GIORNO
- HR invia email di benvenuto con checklist (7 giorni prima)
- IT prepara laptop, account email, accessi VPN
- Manager prepara piano di inserimento 30-60-90 giorni
- Buddy assegnato (collega di riferimento per i primi 3 mesi)

PRIMO GIORNO
- 09:00 — Accoglienza HR: documenti, badge, tour ufficio
- 10:00 — Setup IT: laptop, email, tool aziendali (Slack, Jira, Google Workspace)
- 11:30 — Incontro con il manager: obiettivi, aspettative, piano 30-60-90
- 14:00 — Pranzo con il team
- 15:00 — Incontro con il buddy
- 16:00 — Primo task guidato

PRIMA SETTIMANA
- Completare i corsi obbligatori su piattaforma e-learning (sicurezza, privacy, codice etico)
- Shadow di almeno 2 colleghi del team
- Primo 1-to-1 con il manager (venerdi)

PRIMO MESE
- Completare 3 task reali con supervisione
- Feedback 360 informale dal team
- Check-in HR: come sta andando?

VALUTAZIONI
- 30 giorni: check-in manager + HR
- 60 giorni: prima valutazione strutturata
- 90 giorni: conferma o piano di miglioramento`,
        },
      ],
      testQuestions: [
        'Quanti giorni di ferie ho all\'anno?',
        'Posso lavorare da casa il venerdi?',
        'Come funziona il bonus annuale?',
        'Ho un colloquio medico martedi, come faccio?',
        'Cosa succede il primo giorno di lavoro per un nuovo assunto?',
      ],
    },
  },

  // 24. Demo - Playground: parametri
  {
    type: 'demo',
    heading: 'Playground: esperimenti con parametri',
    description: `<strong>Step per il docente:</strong><br>
1. Apri platform.openai.com/playground<br>
2. Imposta system prompt: "Sei un copywriter creativo"<br>
3. Chiedi: "Scrivi uno slogan per un caffe artigianale"<br>
4. Mostra: temp=0.2 vs temp=1.5 \u2014 stessa domanda, risposte diverse<br>
5. Cambia modello: gpt-4o-mini vs gpt-4o \u2192 confronta qualita<br>
6. Mostra il contatore token e il costo stimato`,
    demoMaterial: {
      label: 'Configurazioni da testare live nel Playground',
      experiments: [
        {
          name: 'Esperimento 1: temperature bassa vs alta',
          systemPrompt: 'Sei un copywriter creativo specializzato in brand del food.',
          userMessage: 'Scrivi uno slogan per un caffè artigianale siciliano.',
          configs: [
            { param: 'temperature', value: '0.2', expected: 'Slogan preciso, prevedibile, formale' },
            { param: 'temperature', value: '1.5', expected: 'Slogan creativo, insolito, a volte bizzarro' },
          ],
        },
        {
          name: 'Esperimento 2: modello economico vs avanzato',
          systemPrompt: 'Sei un analista finanziario.',
          userMessage: 'Elenca 3 rischi di investire in startup AI nel 2026.',
          configs: [
            { param: 'model', value: 'gpt-4o-mini', expected: 'Risposta rapida, economica, discreta qualità' },
            { param: 'model', value: 'gpt-4o', expected: 'Risposta più articolata e contestualizzata' },
          ],
        },
      ],
      tip: 'Mostra il contatore token in basso a destra — utile per capire il costo prima di andare in produzione.',
    },
  },

  // 25. Workshop - Crea il tuo GPT custom
  {
    type: 'hands-on',
    heading: 'Crea il tuo GPT custom',
    timer: '\u23f1 90 minuti',
    instructions: [
      '<strong>Scegli un use case</strong> del tuo lavoro reale (es. assistente clienti, analista dati, FAQ interne)',
      '<strong>Scrivi le istruzioni</strong> \u2014 ruolo, tono, cosa puo/non puo fare, formato risposte',
      '<strong>Prepara 2-3 documenti</strong> da caricare come knowledge (PDF, CSV, testo)',
      '<strong>Costruisci il GPT</strong> su chat.openai.com \u2192 Create',
      '<strong>Testa con 10 domande reali</strong> \u2014 annota dove funziona e dove no',
      '<strong>Itera:</strong> migliora le istruzioni basandoti sui risultati',
      '<strong>Presenta</strong> il tuo GPT alla classe (2 min ciascuno)',
    ],
  },

  // 26. Recap
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Ecosistema OpenAI: ChatGPT, Playground, API, Assistants',
      'GPTs custom: istruzioni + knowledge + tool, zero codice',
      'Playground: testa modelli e parametri prima di integrare',
      'Function calling: l\'AI decide, il tuo codice esegue',
      'Rischi: privacy, GDPR, allucinazioni, IP \u2014 sempre revisione umana',
    ],
  },

  // 27. Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'platform.openai.com \u2014 Dashboard, API Keys, Playground', url: 'https://platform.openai.com' },
      { label: 'cookbook.openai.com \u2014 Esempi pratici e tutorial ufficiali', url: 'https://cookbook.openai.com' },
      { label: 'Assistants API \u2014 Documentazione ufficiale', url: 'https://platform.openai.com/docs/assistants' },
      { label: 'Function Calling \u2014 Guida e best practices', url: 'https://platform.openai.com/docs/guides/function-calling' },
    ],
  },
]
