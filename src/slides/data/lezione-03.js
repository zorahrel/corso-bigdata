export const meta = {
  lessonNumber: '03',
  title: 'Prompting e context engineering',
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '03',
    title: 'Prompting &\nContext Engineering',
    subtitle: 'Lunedi 30/03/2026 \u00b7 6h in presenza \u00b7 Blocco INTERAZIONE',
    style: { color: 'var(--warning)' },
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda',
    items: [
      { emoji: '\ud83c\udfaf', text: 'Tecniche di prompting: da zero-shot a chain-of-thought' },
      { emoji: '\ud83e\uddf1', text: 'Context engineering: costruire il sistema informativo' },
      { emoji: '\ud83d\udccb', text: 'System prompt, ruoli e formati strutturati' },
      { emoji: '\ud83d\udd28', text: 'Workshop: costruisci la tua prompt library' },
      { emoji: '\ud83e\uddea', text: 'Esercizio: system prompt per il tuo settore' },
    ],
  },

  // 3. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', alt: 'Before vs After learning prompt engineering' },
    caption: '"Prima e dopo aver imparato il prompt engineering"',
  },

  // 4. Cos'e il prompting davvero
  {
    type: 'concept',
    heading: "Cos'\u00e8 il prompting davvero",
    content: `Non \u00e8 "scrivere bene" \u2014 \u00e8 <strong>programmare in linguaggio naturale</strong>.
<br><br>
Un prompt \u00e8 un set di istruzioni che determina il comportamento dell'AI, esattamente come una funzione determina il comportamento di un programma.
<br><br>
La differenza tra un prompt mediocre e uno ottimizzato? <strong>Lo stesso gap tra un junior e un senior developer.</strong>`,
    image: { src: '', alt: '' },
    footer: '<strong>In pratica:</strong> il prompting non e improvvisazione \u2014 e comunicazione strutturata. Piu sei preciso nelle istruzioni, piu l\'output sara utile.',
  },

  // 5. Zero-shot prompting
  {
    type: 'concept',
    centered: true,
    heading: 'Zero-shot prompting',
    content: `Chiedi direttamente, senza fornire esempi. Il modello usa solo il suo training.
<br><br>
<div class="prompt-box">Traduci in inglese: "Il progetto \u00e8 in ritardo di due settimane"</div>
<br>
<strong style="color: var(--secondary);">Funziona quando:</strong> task semplici, ben definiti, comuni<br>
<strong style="color: var(--danger);">Fallisce quando:</strong> task ambigui, di nicchia, o che richiedono un formato specifico`,
    footer: '<strong>Ricorda:</strong> lo zero-shot basta per task semplici e comuni. Se il risultato non ti convince, passa subito a tecniche piu avanzate.',
  },

  // 6. Few-shot prompting
  {
    type: 'concept',
    centered: true,
    heading: 'Few-shot prompting',
    content: `Fornisci 2-3 esempi di input/output prima della richiesta. Il modello <strong>impara il pattern</strong>.
<br><br>
<div class="prompt-box">Classifica il sentiment di queste recensioni:

"Prodotto fantastico, lo ricomprerei!" \u2192 POSITIVO
"Consegna lenta ma prodotto ok" \u2192 NEUTRO
"Non funziona, soldi buttati" \u2192 NEGATIVO

"Buon rapporto qualit\u00e0-prezzo, spedizione veloce" \u2192 ?</div>
<br>
<strong style="color: var(--warning);">Regola d'oro:</strong> gli esempi devono coprire i casi-limite, non solo quelli facili.`,
    footer: '<strong>Takeaway:</strong> 2-3 esempi ben scelti valgono piu di 100 parole di istruzioni. Gli esempi insegnano il pattern meglio di qualsiasi spiegazione.',
  },

  // 7. Chain-of-Thought (CoT)
  {
    type: 'concept',
    centered: true,
    heading: 'Chain-of-Thought (CoT)',
    content: `"Pensa passo per passo" \u2014 forza il modello a <strong>ragionare esplicitamente</strong>.
<br><br>
<div class="compare-grid">
<div>
<div class="prompt-box bad"><span class="label">\u274c Senza CoT</span>
Un negozio vende 45 magliette a 12\u20ac.
Applica sconto 20%. Quanto incassa?

\u2192 "Il negozio incassa 432\u20ac"</div>
</div>
<div>
<div class="prompt-box good"><span class="label">\u2705 Con CoT</span>
Un negozio vende 45 magliette a 12\u20ac.
Applica sconto 20%. Pensa passo per passo.

\u2192 Prezzo originale: 45 \u00d7 12\u20ac = 540\u20ac
\u2192 Sconto 20%: 540 \u00d7 0.20 = 108\u20ac
\u2192 Totale: 540 - 108 = 432\u20ac</div>
</div>
</div>`,
    footer: '<strong>Il punto chiave:</strong> forzare il ragionamento esplicito riduce drasticamente gli errori. Se il task richiede logica, chiedi sempre di "pensare passo per passo".',
  },

  // 8. Role prompting
  {
    type: 'concept',
    centered: true,
    heading: 'Role prompting',
    content: `Assegna un'identit\u00e0 all'AI. Cambia <strong>tono, profondit\u00e0 e prospettiva</strong> dell'output.
<br><br>
<div class="compare-grid">
<div>
<div class="prompt-box bad"><span class="label">Senza ruolo</span>
Come posso migliorare la customer retention?</div>
</div>
<div>
<div class="prompt-box good"><span class="label">Con ruolo</span>
Sei un esperto di marketing con 20 anni
di esperienza nel retail. Analizza 3
strategie per migliorare la customer
retention di un e-commerce con AOV di
45\u20ac e churn rate del 35%.</div>
</div>
</div>
<br>
Il ruolo attiva conoscenze specifiche del dominio e imposta aspettative di qualit\u00e0.`,
    footer: '<strong>Ricorda:</strong> assegnare un ruolo specifico e il modo piu semplice per alzare la qualita dell\'output. Piu il contesto e dettagliato, piu la risposta sara da "esperto".',
  },

  // 9. Output formatting
  {
    type: 'concept',
    centered: true,
    heading: 'Output formatting',
    content: `Specifica esattamente il formato che vuoi. L'AI \u00e8 bravissima a rispettare strutture precise.
<br><br>
<div class="compare-grid">
<div>
<div class="prompt-box">Rispondi in formato JSON:
{
  "prodotto": "...",
  "pro": ["...", "..."],
  "contro": ["...", "..."],
  "voto": 1-10
}</div>
</div>
<div>
<div class="prompt-box">Rispondi come tabella Markdown:
| Metrica | Q1 | Q2 | Delta |
|---------|----|----|-------|
| ...     |    |    |       |</div>
</div>
</div>`,
    footer: '<strong>In pratica:</strong> specificare il formato di output elimina il lavoro di riformattazione. JSON per automazioni, Markdown per documenti, tabelle per confronti.',
  },

  // 10. Prompt chaining
  {
    type: 'custom',
    layout: 'flow-diagram',
    heading: 'Prompt chaining',
    steps: [
      { label: '1. Analizza\nil problema' },
      { label: '2. Genera\nsoluzioni' },
      { label: '3. Valuta\npro/contro' },
      { label: '4. Scrivi\nil report' },
    ],
    footer: '<strong>Takeaway:</strong> un task complesso non va risolto in un unico prompt. Spezzalo in step: ogni passaggio sara piu preciso e il risultato finale molto migliore.',
  },

  // 11. Stats
  {
    type: 'stats',
    heading: 'Quanto migliora un prompt ottimizzato?',
    stats: [
      { value: 60, suffix: '%', label: 'accuracy in pi\u00f9 con CoT\nsu task di ragionamento' },
      { value: 40, suffix: '%', label: 'miglioramento con\nfew-shot vs zero-shot' },
      { value: 3, suffix: '\u00d7', label: 'output pi\u00f9 strutturato\ncon format esplicito' },
      { value: 5, suffix: '', label: 'elementi del prompt\nperfetto (framework)' },
    ],
    footer: 'Questi numeri mostrano che investire 5 minuti in un prompt migliore fa risparmiare ore di lavoro sull\'output.',
  },

  // 12. I 5 elementi di un prompt perfetto (framework-box)
  {
    type: 'concept',
    centered: true,
    heading: 'I 5 elementi di un prompt perfetto',
    content: `<div class="framework-box" style="max-width:700px; margin:20px auto;">
<div class="fw-item"><span class="fw-num">1</span> <div><strong>Ruolo</strong> \u2014 Chi \u00e8 l'AI? Che expertise ha?</div></div>
<div class="fw-item"><span class="fw-num" style="background:var(--secondary)">2</span> <div><strong>Contesto</strong> \u2014 Qual \u00e8 la situazione? Che dati ha?</div></div>
<div class="fw-item"><span class="fw-num" style="background:var(--warning)">3</span> <div><strong>Task</strong> \u2014 Cosa deve fare, esattamente?</div></div>
<div class="fw-item"><span class="fw-num" style="background:var(--danger)">4</span> <div><strong>Formato output</strong> \u2014 Come deve presentare il risultato?</div></div>
<div class="fw-item"><span class="fw-num" style="background:#a855f7">5</span> <div><strong>Esempi</strong> \u2014 Mostra il risultato atteso su casi concreti</div></div>
</div>`,
    footer: '<strong>Il punto chiave:</strong> questi 5 elementi sono un framework, non una checklist rigida. Usali come guida: anche solo aggiungerne 2-3 migliora enormemente il risultato.',
  },

  // 13. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', alt: 'Writing prompts over and over' },
    caption: '"Io che scrivo la 47esima versione dello stesso prompt"',
  },

  // 14. Prompt anti-pattern (antipattern-list)
  {
    type: 'concept',
    centered: true,
    heading: 'Prompt anti-pattern: cosa NON fare',
    content: `<ul class="antipattern-list">
<li><span style="color:var(--danger); font-size:1.2em;">\u2717</span> <div><strong>Troppo vago</strong> \u2014 "Fammi un report" \u2192 di cosa? per chi? quanto lungo?</div></li>
<li><span style="color:var(--danger); font-size:1.2em;">\u2717</span> <div><strong>Muro di testo</strong> \u2014 500 parole senza struttura \u2192 il modello perde le istruzioni chiave</div></li>
<li><span style="color:var(--danger); font-size:1.2em;">\u2717</span> <div><strong>Zero esempi su task complessi</strong> \u2014 se il formato conta, mostralo</div></li>
<li><span style="color:var(--danger); font-size:1.2em;">\u2717</span> <div><strong>Istruzioni contraddittorie</strong> \u2014 "sii breve ma copri tutto in dettaglio"</div></li>
<li><span style="color:var(--danger); font-size:1.2em;">\u2717</span> <div><strong>Non iterare</strong> \u2014 il primo prompt non \u00e8 mai quello giusto. Testa e migliora</div></li>
</ul>`,
    footer: '<strong>Ricorda:</strong> il 90% dei prompt mediocri soffre di uno di questi errori. Riconoscerli e il primo passo per scrivere prompt che funzionano davvero.',
  },

  // 15. Confronto side-by-side
  {
    type: 'concept',
    centered: true,
    heading: 'Stesso task, prompt diversi',
    content: `<div class="compare-grid" style="margin-top: 20px;">
<div>
<div class="prompt-box bad"><span class="label">\u274c Prompt base</span>
Scrivi un'email per un cliente
che ha un problema.</div>
<div class="prompt-box bad" style="border-left-color: var(--muted); margin-top:8px; font-size:0.55em; color: var(--muted);">Output: email generica, tono sbagliato, nessun dato specifico, non risolutiva</div>
</div>
<div>
<div class="prompt-box good"><span class="label">\u2705 Prompt ottimizzato</span>
Ruolo: customer success manager B2B SaaS
Contesto: cliente enterprise (ARR 50K\u20ac),
ha segnalato downtime di 3h ieri sera.
Task: scrivi email di scuse + piano d'azione
Tono: professionale ma empatico
Formato: oggetto + corpo (max 150 parole)
+ 3 bullet point con next steps</div>
<div class="prompt-box good" style="border-left-color: var(--muted); margin-top:8px; font-size:0.55em; color: var(--secondary);">Output: email precisa, personalizzata, con action items concreti e tono calibrato</div>
</div>
</div>`,
  },

  // 16. Context engineering: il prossimo livello
  {
    type: 'concept',
    heading: 'Context engineering:\nil prossimo livello',
    content: `<strong>Prompt engineering</strong> = ottimizzare <em>una singola query</em>.
<br><br>
<strong>Context engineering</strong> = costruire l'<em>intero sistema informativo</em> che l'AI riceve.
<br><br>
Non si tratta solo di COSA chiedi, ma di <strong>TUTTO CIO CHE L'AI SA</strong> quando risponde: istruzioni, memoria, strumenti, esempi.`,
    image: { src: '', alt: '' },
    footer: '<strong>In pratica:</strong> il prompt e solo la punta dell\'iceberg. Il vero vantaggio competitivo sta nel costruire l\'intero ecosistema informativo attorno all\'AI.',
  },

  // 17. I 4 strati del context (layer-stack)
  {
    type: 'custom',
    layout: 'layer-stack',
    heading: 'I 4 strati del context',
    layers: [
      { title: 'System prompt', description: 'Le istruzioni fondamentali. La "costituzione" dell\'AI.' },
      { title: 'Memory', description: 'Cosa sa gia: cronologia, preferenze, dati utente.' },
      { title: 'Tools', description: 'Cosa puo fare: API, ricerca web, database, calcolo.' },
      { title: 'Examples', description: 'Come deve comportarsi: few-shot, template, output atteso.' },
    ],
    footer: '<strong>Takeaway:</strong> ogni strato aggiunge intelligenza al sistema. Un\'AI con tutti e 4 gli strati ben configurati e ordini di grandezza piu utile di una con solo il prompt.',
  },

  // 18. System prompt: la Costituzione
  {
    type: 'concept',
    centered: true,
    heading: 'System prompt: la Costituzione del tuo AI',
    content: `<div class="prompt-box" style="font-size:0.55em;">
<span class="label" style="color:var(--warning);">System prompt \u2014 Assistente vendite B2B</span>

RUOLO: Sei l'assistente AI di VendoCRM, piattaforma CRM per PMI italiane.
TONO: Professionale, diretto, mai aggressivo. Dai del "Lei" al cliente.
VINCOLI:
- Non inventare funzionalit\u00e0 che non esistono
- Non dare prezzi: rimanda sempre al commerciale
- Se non sai la risposta, d\u00ec "La metto in contatto con il team"
FORMATO: Risposte max 100 parole. Usa bullet point per liste.
KNOWLEDGE BASE: Hai accesso alla documentazione prodotto v3.2.</div>
<br>
Il system prompt definisce i <strong>confini</strong>: cosa l'AI puo e non puo fare.`,
    footer: '<strong>Il punto chiave:</strong> il system prompt e le fondamenta del tuo assistente AI. Senza di esso, ogni conversazione parte da zero e senza regole.',
  },

  // 19. Memory nei sistemi AI
  {
    type: 'concept',
    centered: true,
    heading: 'Memory nei sistemi AI',
    content: `Tre tipi di memoria per dare continuita all'interazione:
<br><br>
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px;">
<div style="background:var(--surface); padding:20px; border-radius:var(--radius); text-align:center;">
<div style="font-size:1.4em; margin-bottom:8px;">\ud83d\udcac</div>
<div style="font-size:0.65em; font-weight:700; color:var(--accent); margin-bottom:8px;">In-context</div>
<div style="font-size:0.55em; color:var(--muted);">Nella conversazione attuale. Limitata dalla context window.</div>
</div>
<div style="background:var(--surface); padding:20px; border-radius:var(--radius); text-align:center;">
<div style="font-size:1.4em; margin-bottom:8px;">\ud83d\uddc4\ufe0f</div>
<div style="font-size:0.65em; font-weight:700; color:var(--secondary); margin-bottom:8px;">External</div>
<div style="font-size:0.55em; color:var(--muted);">Database esterno. RAG, knowledge base, vector store.</div>
</div>
<div style="background:var(--surface); padding:20px; border-radius:var(--radius); text-align:center;">
<div style="font-size:1.4em; margin-bottom:8px;">\ud83e\udde0</div>
<div style="font-size:0.65em; font-weight:700; color:var(--warning); margin-bottom:8px;">Episodic</div>
<div style="font-size:0.55em; color:var(--muted);">Ricorda sessioni passate. Preferenze e contesto utente.</div>
</div>
</div>`,
    footer: '<strong>In pratica:</strong> la memoria trasforma un chatbot generico in un assistente personale. Scegli il tipo giusto in base a quanto deve "ricordare" e per quanto tempo.',
  },

  // 20. Tool use (flow-diagram)
  {
    type: 'custom',
    layout: 'flow-diagram',
    heading: 'Tool use: quando l\'AI chiama API esterne',
    steps: [
      { icon: '\ud83d\udc64', label: 'Utente\n"Che tempo fa\na Milano?"' },
      { icon: '\ud83e\udd16', label: 'AI\nDecide di usare\ntool "meteo"' },
      { icon: '\ud83c\udf10', label: 'API\nweather.api\n\u2192 18\u00b0C, sole' },
      { icon: '\ud83d\udcac', label: 'Risposta\n"A Milano ci sono\n18\u00b0C con sole"' },
    ],
    footer: '<strong>Ricorda:</strong> i tool trasformano l\'AI da "genera testo" a "agisce nel mondo reale". E il salto da assistente passivo a agente operativo.',
  },

  // 21. RAG nel context engineering
  {
    type: 'concept',
    heading: 'RAG: portare dati freschi nel contesto',
    content: `<strong>Retrieval-Augmented Generation</strong> \u2014 prima cerca, poi genera.
<br><br>
Il modello non sa tutto. Ma se gli dai i documenti giusti <strong>al momento giusto</strong>, risponde come un esperto.
<br><br>
<strong>Esempio:</strong> un chatbot HR che cerca nelle policy aziendali prima di rispondere a "quanti giorni di ferie mi restano?"`,
    image: { src: '', alt: '' },
    footer: '<strong>Takeaway:</strong> il RAG risolve il problema piu grande dell\'AI: i dati obsoleti. Con dati freschi nel contesto, l\'AI risponde con la precisione di un esperto aggiornato.',
  },

  // 22. Quote
  {
    type: 'quote',
    text: '"Context engineering is the new AI literacy"',
    source: 'robotsatemyhomework.substack.com (2026)',
  },

  // 23. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/26BRrSvJUa0crqw4E/giphy.gif', alt: 'Prompt engineering vs Context engineering' },
    caption: '"Prompt engineering vs Context engineering"',
  },

  // 24. Anatomia di un system prompt aziendale
  {
    type: 'concept',
    centered: true,
    heading: 'Anatomia di un system prompt aziendale',
    content: `<div class="prompt-box" style="font-size:0.5em;">
<span class="label" style="color:var(--accent);">Template completo</span>

## RUOLO
Sei [nome], assistente AI di [azienda]. Specializzato in [dominio].

## TONO
[Formale/informale]. [Dai del tu/Lei]. [Empatico/diretto].

## VINCOLI
- NON fare: [lista di azioni proibite]
- SEMPRE fare: [lista di azioni obbligatorie]
- In caso di dubbio: [fallback behavior]

## FORMATO OUTPUT
- Lunghezza: [max N parole/paragrafi]
- Struttura: [bullet point / paragrafo / tabella]
- Lingua: [italiano / inglese / multilingua]

## ESEMPI
Domanda: "..."
Risposta attesa: "..."</div>`,
    footer: '<strong>In pratica:</strong> questo template e il tuo punto di partenza per qualsiasi assistente AI aziendale. Compilalo, testalo, iteralo \u2014 e avrai un sistema prompt production-ready.',
  },

  // 25. Ruoli e personas
  {
    type: 'concept',
    centered: true,
    heading: 'Ruoli e personas',
    content: `<p style="font-size:0.65em; color:var(--muted); text-align:center; margin-bottom:24px;">Stessa AI, identit\u00e0 diverse per use case diversi</p>
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; max-width:900px; margin:0 auto;">
<div style="background:var(--surface); padding:20px; border-radius:var(--radius); border-top:3px solid var(--accent);">
<div style="font-size:0.65em; font-weight:700; color:var(--accent); margin-bottom:12px;">\ud83e\uddd1\u200d\ud83d\udcbc Assistente HR</div>
<div class="prompt-box" style="font-size:0.85em; margin:0; padding:12px;">Sei un esperto HR.
Rispondi citando
l'articolo del CCNL.
Tono: formale.</div>
</div>
<div style="background:var(--surface); padding:20px; border-radius:var(--radius); border-top:3px solid var(--secondary);">
<div style="font-size:0.65em; font-weight:700; color:var(--secondary); margin-bottom:12px;">\ud83c\udfa7 Supporto clienti</div>
<div class="prompt-box" style="font-size:0.85em; margin:0; padding:12px;">Sei il supporto di
ShopExpress. Empatico,
risolutivo. Max 80
parole per risposta.</div>
</div>
<div style="background:var(--surface); padding:20px; border-radius:var(--radius); border-top:3px solid var(--warning);">
<div style="font-size:0.65em; font-weight:700; color:var(--warning); margin-bottom:12px;">\ud83d\udcca Analista dati</div>
<div class="prompt-box" style="font-size:0.85em; margin:0; padding:12px;">Sei un data analyst.
Rispondi con numeri
e grafici. Cita
sempre la fonte.</div>
</div>
</div>`,
    footer: '<strong>Il punto chiave:</strong> con un solo modello puoi creare decine di assistenti specializzati. Basta cambiare il ruolo nel system prompt per ottenere un "collega esperto" diverso.',
  },

  // 26. Formati di output strutturati
  {
    type: 'concept',
    centered: true,
    heading: 'Formati di output strutturati',
    content: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:20px;">
<div>
<div class="prompt-box" style="font-size:0.55em;">
<span class="label" style="color:var(--accent);">JSON \u2014 per API e automazioni</span>
{"cliente": "Mario Rossi",
 "sentiment": "negativo",
 "urgenza": "alta",
 "azione": "callback entro 2h"}</div>
</div>
<div>
<div class="prompt-box" style="font-size:0.55em;">
<span class="label" style="color:var(--secondary);">Markdown \u2014 per documenti</span>
## Analisi Q1
- Revenue: +12%
- Churn: -3pp
- NPS: 72 (\u2191 da 65)</div>
</div>
<div>
<div class="prompt-box" style="font-size:0.55em;">
<span class="label" style="color:var(--warning);">Tabella \u2014 per confronti</span>
| Metrica  | Q1  | Q2  | \u0394   |
|----------|-----|-----|-----|
| Revenue  | 120K| 145K| +21%|
| Users    | 3.2K| 4.1K| +28%|</div>
</div>
<div>
<div class="prompt-box" style="font-size:0.55em;">
<span class="label" style="color:var(--danger);">XML \u2014 per sistemi legacy</span>
&lt;response&gt;
  &lt;status&gt;approved&lt;/status&gt;
  &lt;amount&gt;1500.00&lt;/amount&gt;
  &lt;currency&gt;EUR&lt;/currency&gt;
&lt;/response&gt;</div>
</div>
</div>`,
    footer: '<strong>Ricorda:</strong> scegli il formato in base a chi consumera l\'output. JSON per le macchine, Markdown per le persone, tabelle per i confronti, XML per i sistemi legacy.',
  },

  // 27. Multi-turn: conversazioni lunghe
  {
    type: 'concept',
    centered: true,
    heading: 'Multi-turn: conversazioni lunghe',
    content: `Come mantenere contesto su pi\u00f9 turni senza perdere il filo:
<br><br>
<div style="max-width:700px; margin:0 auto;">
<div style="background:var(--surface); padding:16px 20px; border-radius:var(--radius); margin-bottom:8px; font-size:0.6em; display:flex; gap:12px; align-items:center;">
<span style="color:var(--accent); font-weight:800; font-size:1.3em;">1</span>
<div><strong>Riassumi periodicamente</strong> \u2014 "Finora abbiamo stabilito che X, Y, Z. Ora passiamo a..."</div>
</div>
<div style="background:var(--surface); padding:16px 20px; border-radius:var(--radius); margin-bottom:8px; font-size:0.6em; display:flex; gap:12px; align-items:center;">
<span style="color:var(--secondary); font-weight:800; font-size:1.3em;">2</span>
<div><strong>Usa riferimenti espliciti</strong> \u2014 Non "modifica quello", ma "modifica la tabella del punto 3"</div>
</div>
<div style="background:var(--surface); padding:16px 20px; border-radius:var(--radius); margin-bottom:8px; font-size:0.6em; display:flex; gap:12px; align-items:center;">
<span style="color:var(--warning); font-weight:800; font-size:1.3em;">3</span>
<div><strong>Gestisci la context window</strong> \u2014 I modelli dimenticano l'inizio. Ripeti le istruzioni chiave</div>
</div>
<div style="background:var(--surface); padding:16px 20px; border-radius:var(--radius); font-size:0.6em; display:flex; gap:12px; align-items:center;">
<span style="color:var(--danger); font-weight:800; font-size:1.3em;">4</span>
<div><strong>Nuova chat se necessario</strong> \u2014 Meglio ricominciare con un buon prompt che trascinare contesto sporco</div>
</div>
</div>`,
    footer: '<strong>Takeaway:</strong> le conversazioni lunghe degradano. Riassumi, usa riferimenti espliciti e non aver paura di ricominciare: un prompt fresco e ben scritto batte una chat di 50 messaggi.',
  },

  // 28. Workshop - Prompt library
  {
    type: 'hands-on',
    heading: 'Costruisci la tua prompt library',
    timer: '\u23f1 90 minuti',
    instructions: [
      '<strong>Scegli 3 task</strong> che fai spesso al lavoro (email, report, analisi, traduzioni...)',
      '<strong>Scrivi il prompt zero-shot</strong> \u2014 la prima versione, come ti viene',
      '<strong>Ottimizzalo</strong> usando il framework: Ruolo + Contesto + Task + Formato + Esempi',
      '<strong>Aggiungi CoT</strong> dove il ragionamento \u00e8 importante',
      '<strong>Testa e itera</strong> \u2014 prova, confronta gli output, migliora',
      '<strong>Consegna:</strong> file di testo con la tua prompt library personale (min. 3 prompt ottimizzati)',
    ],
  },

  // 29. Esercizio - System prompt
  {
    type: 'hands-on',
    heading: 'System prompt per il tuo settore',
    timer: '\u23f1 45 minuti',
    instructions: [
      '<strong>Scegli un ruolo</strong> \u2014 assistente del tuo settore (HR, vendite, supporto, analisi...)',
      '<strong>Scrivi il system prompt</strong> \u2014 usa il template: Ruolo, Tono, Vincoli, Formato, Esempi',
      '<strong>Testalo con 5 domande difficili</strong> \u2014 casi-limite, richieste ambigue, fuori-scope',
      '<strong>Confronta:</strong> stesse domande CON e SENZA system prompt',
      '<strong>Presenta al gruppo</strong> \u2014 2 min: cosa hai costruito, cosa hai scoperto',
    ],
  },

  // 30. Recap
  {
    type: 'recap',
    heading: 'Recap',
    items: [
      'Le tecniche di prompting (zero-shot, few-shot, CoT, role) sono strumenti combinabili',
      'Un prompt ottimizzato ha 5 elementi: Ruolo, Contesto, Task, Formato, Esempi',
      'Context engineering > prompt engineering: costruisci il sistema, non solo la query',
      'System prompt, memory, tools e RAG sono i 4 strati del contesto',
      'La skill chiave \u00e8 iterare: testa, confronta, migliora',
    ],
  },

  // 31. Risorse
  {
    type: 'resource',
    heading: 'Risorse',
    links: [
      { label: 'Context Engineering Guide \u2014 robotsatemyhomework', url: 'https://robotsatemyhomework.substack.com/p/context-engineering-guide' },
      { label: 'Context Engineering \u2014 instinctools blog', url: 'https://instinctools.com/blog/context-engineering/' },
      { label: 'Context vs Prompt Engineering \u2014 System Design Newsletter', url: 'https://newsletter.systemdesign.one/p/context-engineering-vs-prompt-engineering' },
      { label: 'Learn Prompting \u2014 guida completa gratuita', url: 'https://learnprompting.org' },
    ],
  },

  // 32. Prossima lezione
  {
    type: 'title',
    lessonNumber: null,
    title: 'Giovedi 01/04',
    subtitle: 'Lezione 04 \u00b7 OpenAI ChatGPT Playground',
    style: { color: 'var(--secondary)' },
  },
]
