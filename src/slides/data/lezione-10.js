export const meta = {
  lessonNumber: '10',
  title: "Progetto Finale & Recap",
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '10',
    title: 'Progetto Finale & Recap',
    subtitle: 'Giovedì 23/04/2026 · 6h Lab · Gestita da Tutor · La chiusura del corso',
    style: { background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.1), rgba(245,158,11,0.08), rgba(239,68,68,0.05))' },
  },

  // 2. Agenda
  {
    type: 'agenda',
    heading: 'Agenda — L\'Ultima Giornata',
    items: [
      { emoji: '🎤', text: 'Esercizio 1 (60 min): Preparazione pitch "AI per il mio CEO"' },
      { emoji: '🏆', text: 'Esercizio 2 (120 min): Presentazioni dei team' },
      { emoji: '📅', text: 'Esercizio 3 (30 min): 30-Day AI Challenge personale' },
      { emoji: '📚', text: 'Esercizio 4 (30 min): Risorse per continuare' },
    ],
  },

  // 3. Meme
  {
    type: 'meme',
    image: { src: 'https://media.giphy.com/media/citBl9yPwnUOs/giphy.gif', alt: 'Final day' },
    caption: '"L\'ultima giornata. Oggi dimostrate tutto quello che avete imparato."',
  },

  // --- ESERCIZIO 1: Preparazione Pitch ---

  // 4. Intro Esercizio 1
  {
    type: 'concept',
    heading: 'Esercizio 1: Pitch "AI per il mio CEO"',
    content: `<strong>Obiettivo:</strong> Creare una presentazione di 5 slide per convincere il vostro CEO ad investire in AI.
<br><br>
<strong>Struttura obbligatoria:</strong>
<br>• Slide 1: <strong>Il problema</strong> — con numeri
<br>• Slide 2: <strong>La soluzione AI</strong> — tool specifico, come funziona
<br>• Slide 3: <strong>ROI atteso</strong> — $7.800/dipendente/anno (McKinsey)
<br>• Slide 4: <strong>Timeline</strong> — piano 90 giorni (usate il piano di ieri!)
<br>• Slide 5: <strong>Rischi e compliance</strong> — GDPR, AI Act, governance
<br><br>
<strong>Tempo:</strong> 60 minuti · <strong>Tool:</strong> Claude/ChatGPT (free) + Google Slides`,
    image: { src: 'https://i.giphy.com/media/dSetNZo2AJfptAk9hp/giphy.gif', alt: 'Pitch prep' },
  },

  // 5. Esercizio 1 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 1: Prepara il Tuo Pitch',
    timer: '60 minuti',
    level: 'avanzato',
    tools: ['ChatGPT (free) o Claude (free)', 'Google Slides (free)'],
    deliverable: 'Presentazione di 5 slide su Google Slides pronta per essere presentata',
    instructions: [
      '<strong>Step 1 — DEFINISCI IL PROBLEMA (10 min):</strong> Scegli un problema REALE della tua azienda. Scrivi: "Il problema è [X]. Colpisce [N persone/team]. Costa [ore/settimana o €/anno]. Succede [frequenza]." Se hai fatto l\'assessment ieri, usa i punti deboli identificati',
      '<strong>Step 2 — CHIEDI ALL\'AI (10 min):</strong> Su Claude o ChatGPT: "Devo fare un pitch di 5 minuti al mio CEO per adottare AI in azienda. Il problema: [incolla]. Crea 5 slide con questo schema: 1) Problema con numeri, 2) Soluzione AI (tool gratuiti specifici), 3) ROI (usa il dato $7.800/dipendente/anno di McKinsey + calcolo per la mia azienda), 4) Timeline 90 giorni (Mese 1: pilot, Mese 2: scale, Mese 3: measure), 5) Rischi e mitigazione (GDPR, AI Act, governance). Tono professionale, numeri concreti."',
      '<strong>Step 3 — CREA LE SLIDE (20 min):</strong> Apri Google Slides. Crea 5 slide seguendo l\'output dell\'AI. Personalizza con i tuoi dati reali. Aggiungi il logo dell\'azienda se possibile. Ricorda: meno testo = meglio. Max 6 righe per slide',
      '<strong>Step 4 — PRATICA (10 min):</strong> Prova il pitch da solo. Timer: 5 minuti TASSATIVI. Se sfori, taglia. Se avanzi, aggiungi un esempio concreto',
      '<strong>Step 5 — FEEDBACK RAPIDO (10 min):</strong> Presenta a un collega. Chiedi: "Il problema è chiaro? I numeri convincono? Compreresti questa idea?"',
    ],
  },

  // --- ESERCIZIO 2: Presentazioni ---

  // 6. Setup Presentazioni
  {
    type: 'concept',
    centered: true,
    heading: 'Esercizio 2: Presentazioni',
    content: `<div style="max-width: 800px; margin: 0 auto;">
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--accent); min-width: 60px; text-align: center;">5'</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Presentazione</div>
      <div style="font-size: 0.55em; color: var(--muted);">Le tue 5 slide. Timer rigoroso. Vai dritto al punto.</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--secondary); min-width: 60px; text-align: center;">3'</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Q&A</div>
      <div style="font-size: 0.55em; color: var(--muted);">Il pubblico fa il "board". Domande difficili. Obiezioni vere.</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--warning); min-width: 60px; text-align: center;">30%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Soluzione AI proposta</div>
      <div style="font-size: 0.55em; color: var(--muted);">Tool scelti, workflow, realismo della proposta</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: #fb923c; min-width: 60px; text-align: center;">20%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Chiarezza + ROI</div>
      <div style="font-size: 0.55em; color: var(--muted);">Il problema è chiaro? I numeri reggono?</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--danger); min-width: 60px; text-align: center;">🗳️</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Voto peer</div>
      <div style="font-size: 0.55em; color: var(--muted);">Alla fine, ognuno vota i 3 pitch migliori (escluso il proprio)</div>
    </div>
  </div>
</div>`,
  },

  // 7. Presentazioni hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 2: Presentazioni dei Team',
    timer: '120 minuti',
    level: 'avanzato',
    tools: ['Google Slides', 'Timer'],
    deliverable: 'Pitch presentato + feedback ricevuto + voto peer completato',
    instructions: [
      '<strong>Format:</strong> 5 min presentazione + 3 min Q&A per team/persona. Il tutor gestisce il timer',
      '<strong>Per chi presenta:</strong> Vai dritto al punto. Slide 1: problema con numeri. Slide 5: call to action. Non leggere le slide — racconta una storia',
      '<strong>Per il "board" (tutti gli altri):</strong> Fate domande vere: "Quanto costa?", "Chi lo gestisce?", "E se l\'AI sbaglia?", "Che dati servono?", "In quanto tempo vediamo risultati?"',
      '<strong>Feedback strutturato:</strong> Dopo ogni presentazione, ognuno scrive su un foglio: 1 cosa che ha funzionato bene, 1 cosa da migliorare, 1 domanda rimasta aperta',
      '<strong>Voto finale:</strong> Alla fine di tutte le presentazioni, ognuno vota i 3 pitch migliori (escluso il proprio). Scrivete i nomi su un foglio e consegnatelo al tutor',
      '<strong>Applausi:</strong> Ogni presentazione merita rispetto. Applaudite forte. 👏',
    ],
  },

  // 8. Meme: Project Works
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif', alt: 'When your project works' },
    caption: '"Quando il tuo pitch convince anche il CEO più scettico della classe"',
  },

  // --- ESERCIZIO 3: 30-Day Challenge ---

  // 9. Intro Esercizio 3
  {
    type: 'concept',
    heading: 'Esercizio 3: 30-Day AI Challenge',
    content: `<strong>Obiettivo:</strong> Creare il tuo piano personalizzato di 30 giorni con un task AI al giorno.
<br><br>
<strong>Regola d'oro:</strong> 30 minuti al giorno, non di più. La costanza batte l'intensità.
<br><br>
<strong>Struttura:</strong>
<br>• Settimana 1: Esplora — un tool diverso al giorno
<br>• Settimana 2: Applica — AI sui tuoi task reali
<br>• Settimana 3: Automatizza — crea workflow
<br>• Settimana 4: Consolida — documenta e condividi
<br><br>
<strong>Tempo:</strong> 30 minuti · <strong>Tool:</strong> Claude/ChatGPT (free) + Google Sheets`,
    image: { src: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif', alt: 'Challenge' },
  },

  // 10. Esercizio 3 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 3: Crea il Tuo 30-Day AI Challenge',
    timer: '30 minuti',
    level: 'intermedio',
    tools: ['ChatGPT (free) o Claude (free)', 'Google Sheets (free)'],
    deliverable: 'Google Sheet con piano 30 giorni personalizzato, pronto da seguire da domani',
    instructions: [
      '<strong>Step 1 — CHIEDI ALL\'AI (10 min):</strong> Su ChatGPT o Claude: "Sono un [ruolo] nel settore [X]. Livello AI: [principiante/intermedio]. Tool che uso già: [lista]. Creami un piano di 30 giorni con 1 task AI al giorno (max 30 min). Settimana 1: esplorazione tool. Settimana 2: applicazione su task reali. Settimana 3: automazione. Settimana 4: consolidamento. Per ogni giorno: obiettivo, tool gratuito, attività specifica."',
      '<strong>Step 2 — CREA LO SHEET (10 min):</strong> Google Sheets con colonne: Giorno | Data | Obiettivo | Tool | Attività (max 30 min) | ✅ Fatto | Note',
      '<strong>Step 3 — PERSONALIZZA (5 min):</strong> Adatta il piano al tuo lavoro reale. Sostituisci task generici con task del tuo settore. Es: "Giorno 3: Usa Claude per riscrivere 3 email client" invece di "Prova Claude"',
      '<strong>Step 4 — IMPEGNO PUBBLICO (5 min):</strong> Condividi il tuo piano con il gruppo. Dì ad alta voce: "Inizierò il [data] e completerò il [data]." L\'impegno pubblico aumenta le probabilità di completamento del 65%',
    ],
  },

  // --- ESERCIZIO 4: Risorse per continuare ---

  // 11. Risorse per continuare
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Esercizio 4: Le Vostre Risorse per Continuare',
    features: [
      { icon: '📬', title: 'Newsletter (gratuite)', description: '<strong>The Batch</strong> (deeplearning.ai) — settimanale, curata da Andrew Ng<br><strong>TLDR AI</strong> — digest giornaliero, 5 min di lettura<br><strong>Ben\'s Bites</strong> — tool e novità AI' },
      { icon: '🎓', title: 'Corsi gratuiti', description: '<strong>Google AI Essentials</strong> — certificato riconosciuto<br><strong>Elements of AI</strong> — in italiano<br><strong>Fast.ai</strong> — pratico, project-based<br><strong>DeepLearning.AI</strong> — corsi avanzati' },
      { icon: '👥', title: 'Community', description: '<strong>AI Breakfast Italia</strong> — community italiana<br><strong>r/MachineLearning</strong> — Reddit<br><strong>Hugging Face</strong> — modelli e dataset open<br><strong>LinkedIn AI groups</strong> — networking' },
      { icon: '🎧', title: 'Podcast', description: '<strong>Lex Fridman</strong> — interviste deep<br><strong>Hard Fork</strong> (NYT) — tech + AI<br><strong>Latent Space</strong> — tecnico<br><strong>AI Explained</strong> — novità AI' },
    ],
  },

  // 12. Esercizio 4 hands-on
  {
    type: 'hands-on',
    heading: 'Esercizio 4: Costruisci il Tuo Kit di Risorse',
    timer: '30 minuti',
    level: 'base',
    tools: ['Browser', 'Google Keep o Notes'],
    deliverable: 'Iscrizione a 2+ newsletter + 1 community + lista risorse salvata',
    instructions: [
      '<strong>Step 1 — NEWSLETTER (10 min):</strong> Iscriviti ad almeno 2 newsletter: <br>• <a href="https://www.deeplearning.ai/the-batch/" target="_blank">The Batch</a> — settimanale, essenziale<br>• <a href="https://tldr.tech/ai" target="_blank">TLDR AI</a> — quotidiana, veloce<br>• <a href="https://bensbites.beehiiv.com/" target="_blank">Ben\'s Bites</a> — tool e novità',
      '<strong>Step 2 — COMMUNITY (10 min):</strong> Unisciti ad almeno 1 community: <br>• LinkedIn: cerca "AI Italia" o "Artificial Intelligence Professionals"<br>• Reddit: r/MachineLearning, r/artificial<br>• Discord: Hugging Face, AI communities italiane',
      '<strong>Step 3 — SALVA LE RISORSE (5 min):</strong> Crea una nota (Google Keep, Apple Notes, o dove preferisci) con: le newsletter a cui ti sei iscritto, le community, i corsi che vuoi completare, il link al tuo 30-Day Challenge Sheet',
      '<strong>Step 4 — CONDIVIDI (5 min):</strong> Scambia i contatti con almeno 2 colleghi del corso. Createvi un gruppo WhatsApp/Telegram "AI Buddy" per motivarvi a vicenda nel 30-Day Challenge',
    ],
  },

  // --- CHIUSURA ---

  // 13. Il Gap Italia
  {
    type: 'stats',
    heading: 'Il Gap è un\'Opportunità',
    stats: [
      { value: 8.2, suffix: '%', label: 'Imprese italiane che usano AI in modo strutturato' },
      { value: 88, suffix: '%', label: 'Aziende globali che stanno investendo in AI' },
      { value: 7800, prefix: '$', label: 'Produttività/dipendente/anno guadagnata con AI (McKinsey)' },
    ],
  },

  // 14. Closing message
  {
    type: 'concept',
    heading: 'Italia 8.2% vs Mondo 88%',
    content: `Il gap è enorme. Ma il gap è un'<strong>opportunità</strong> per chi si muove ORA.
<br><br>
Voi avete le competenze. Avete i tool (gratuiti). Avete un piano.
<br><br>
<strong>Non aspettate che qualcuno vi dia il permesso.</strong> Iniziate domani. 30 minuti al giorno. Un task alla volta.
<br><br>
Tra 30 giorni sarete tra le persone più competenti in AI nella vostra azienda. Tra 90 giorni avrete risultati misurabili.
<br><br>
<strong>Il futuro non aspetta. Ma voi siete pronti.</strong>`,
    image: { src: 'https://i.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif', alt: 'Future' },
  },

  // 15. Il Percorso
  {
    type: 'concept',
    centered: true,
    heading: 'Il Percorso che Abbiamo Fatto',
    content: `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;max-width:900px;margin:0 auto;">
  <div style="border-top:3px solid #6c63ff;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#6c63ff;">01</strong><br><span style="font-size:0.55em;color:var(--muted);">Cos'è l'AI</span></div>
  <div style="border-top:3px solid #818cf8;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#818cf8;">02</strong><br><span style="font-size:0.55em;color:var(--muted);">Modelli LLM</span></div>
  <div style="border-top:3px solid #00d4aa;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#00d4aa;">03</strong><br><span style="font-size:0.55em;color:var(--muted);">Prompting</span></div>
  <div style="border-top:3px solid #2dd4bf;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#2dd4bf;">04</strong><br><span style="font-size:0.55em;color:var(--muted);">OpenAI</span></div>
  <div style="border-top:3px solid #34d399;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#34d399;">05</strong><br><span style="font-size:0.55em;color:var(--muted);">Claude</span></div>
  <div style="border-top:3px solid #f59e0b;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#f59e0b;">06</strong><br><span style="font-size:0.55em;color:var(--muted);">Tool AI</span></div>
  <div style="border-top:3px solid #fb923c;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#fb923c;">07</strong><br><span style="font-size:0.55em;color:var(--muted);">Agenti</span></div>
  <div style="border-top:3px solid #c084fc;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#c084fc;">08</strong><br><span style="font-size:0.55em;color:var(--muted);">Produttività</span></div>
  <div style="border-top:3px solid #fb923c;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#fb923c;">09</strong><br><span style="font-size:0.55em;color:var(--muted);">Lab Adozione</span></div>
  <div style="border-top:3px solid #ef4444;padding:12px 8px;background:var(--surface);border-radius:8px;text-align:center;"><strong style="color:#ef4444;">10</strong><br><span style="font-size:0.55em;color:var(--muted);">Progetto finale</span></div>
</div>`,
  },

  // 16. Route AI — Dove andare da qui
  {
    type: 'concept',
    heading: 'Le Route AI: Quale Percorso Fa per Te?',
    content: `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;max-width:800px;margin:0 auto;">
  <div style="border-left:4px solid #6c63ff;padding:16px;background:var(--surface);border-radius:8px;">
    <strong style="color:#6c63ff;">🧠 Power User</strong>
    <p style="font-size:0.5em;color:var(--muted);margin:8px 0 0;">Per chiunque lavori con testo, dati, comunicazione. Nessun codice necessario.</p>
    <ul style="font-size:0.55em;color:var(--text);margin:8px 0 0;padding-left:16px;">
      <li>Prompt engineering avanzato</li>
      <li>Claude Projects + ChatGPT Canvas per il workflow quotidiano</li>
      <li>Automazioni no-code (Zapier, Make, n8n)</li>
      <li>AI per analisi dati, report, presentazioni</li>
    </ul>
  </div>
  <div style="border-left:4px solid #00d4aa;padding:16px;background:var(--surface);border-radius:8px;">
    <strong style="color:#00d4aa;">⚡ AI Builder</strong>
    <p style="font-size:0.5em;color:var(--muted);margin:8px 0 0;">Per chi vuole creare con l'AI — anche senza essere sviluppatore.</p>
    <ul style="font-size:0.55em;color:var(--text);margin:8px 0 0;padding-left:16px;">
      <li>GPTs custom e Claude Projects avanzati</li>
      <li>Workflow complessi con agenti AI</li>
      <li>API OpenAI/Anthropic (low-code)</li>
      <li>Tool come Cursor, v0.dev, Replit Agent</li>
    </ul>
  </div>
  <div style="border-left:4px solid #f59e0b;padding:16px;background:var(--surface);border-radius:8px;">
    <strong style="color:#f59e0b;">🏢 AI Champion</strong>
    <p style="font-size:0.5em;color:var(--muted);margin:8px 0 0;">Per chi vuole guidare l'adozione AI nella propria azienda.</p>
    <ul style="font-size:0.55em;color:var(--text);margin:8px 0 0;padding-left:16px;">
      <li>AI governance e compliance (AI Act)</li>
      <li>Change management e formazione team</li>
      <li>ROI measurement e business case</li>
      <li>Certificazioni: Google AI Essentials, Microsoft AI Skills</li>
    </ul>
  </div>
  <div style="border-left:4px solid #ef4444;padding:16px;background:var(--surface);border-radius:8px;">
    <strong style="color:#ef4444;">🔬 AI Engineer</strong>
    <p style="font-size:0.5em;color:var(--muted);margin:8px 0 0;">Per chi vuole andare deep — richiede basi di programmazione.</p>
    <ul style="font-size:0.55em;color:var(--text);margin:8px 0 0;padding-left:16px;">
      <li>Python + ML foundations (Fast.ai, Andrew Ng)</li>
      <li>Fine-tuning e RAG</li>
      <li>MCP servers, tool use, agenti autonomi</li>
      <li><a href="https://roadmap.sh/ai-engineer" target="_blank" style="color:#ef4444;">roadmap.sh/ai-engineer</a> — la mappa completa</li>
    </ul>
  </div>
</div>`,
  },

  // 16b. Il Consiglio del Docente
  {
    type: 'quote',
    text: "Non serve diventare esperti di AI. Serve diventare esperti del VOSTRO lavoro, potenziato dall'AI. Scegliete UNA route, dedicate 15 minuti al giorno, e in 30 giorni sarete irriconoscibili.",
    source: "Attilio Cianci — Il consiglio che avrei voluto ricevere",
  },

  // 16c. Risorse per ogni Route
  {
    type: 'concept',
    heading: 'Risorse Gratuite per Ogni Route',
    content: `<div style="max-width:800px;margin:0 auto;">
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
    <div style="padding:12px;background:var(--surface);border-radius:8px;">
      <strong style="color:#6c63ff;font-size:0.55em;">🧠 Power User</strong>
      <ul style="font-size:0.55em;color:var(--text);margin:6px 0 0;padding-left:14px;">
        <li><a href="https://learnprompting.org" target="_blank">Learn Prompting</a> — guida gratuita completa</li>
        <li><a href="https://docs.anthropic.com/en/prompt-library/library" target="_blank">Anthropic Prompt Library</a> — 100+ prompt</li>
        <li><a href="https://learn.deeplearning.ai" target="_blank">DeepLearning.ai Short Courses</a> — gratis</li>
      </ul>
    </div>
    <div style="padding:12px;background:var(--surface);border-radius:8px;">
      <strong style="color:#00d4aa;font-size:0.55em;">⚡ AI Builder</strong>
      <ul style="font-size:0.55em;color:var(--text);margin:6px 0 0;padding-left:14px;">
        <li><a href="https://platform.openai.com/docs" target="_blank">OpenAI API Docs</a></li>
        <li><a href="https://n8n.io" target="_blank">n8n</a> — workflow open-source</li>
        <li><a href="https://cursor.sh" target="_blank">Cursor</a> — AI code editor</li>
      </ul>
    </div>
    <div style="padding:12px;background:var(--surface);border-radius:8px;">
      <strong style="color:#f59e0b;font-size:0.55em;">🏢 AI Champion</strong>
      <ul style="font-size:0.55em;color:var(--text);margin:6px 0 0;padding-left:14px;">
        <li><a href="https://grow.google/certificates/ai-essentials" target="_blank">Google AI Essentials</a> — certificato gratis</li>
        <li><a href="https://course.elementsofai.com/it/" target="_blank">Elements of AI</a> — in italiano</li>
        <li><a href="https://learn.microsoft.com/en-us/ai" target="_blank">Microsoft AI Skills</a> — badge gratis</li>
      </ul>
    </div>
    <div style="padding:12px;background:var(--surface);border-radius:8px;">
      <strong style="color:#ef4444;font-size:0.55em;">🔬 AI Engineer</strong>
      <ul style="font-size:0.55em;color:var(--text);margin:6px 0 0;padding-left:14px;">
        <li><a href="https://www.fast.ai" target="_blank">Fast.ai</a> — corsi pratici gratuiti</li>
        <li><a href="https://roadmap.sh/ai-engineer" target="_blank">AI Engineer Roadmap</a> — step by step</li>
        <li><a href="https://www.coursera.org/resources/ai-learning-roadmap" target="_blank">Coursera AI Roadmap</a></li>
      </ul>
    </div>
  </div>
</div>`,
  },

  // 17. Risorse Definitive
  {
    type: 'resource',
    heading: 'Risorse Definitive',
    links: [
      { label: 'The Batch — Newsletter di DeepLearning.AI', url: 'https://www.deeplearning.ai/the-batch/' },
      { label: 'TLDR AI — Newsletter quotidiana', url: 'https://tldr.tech/ai' },
      { label: 'Google AI Essentials — certificato gratuito', url: 'https://grow.google/certificates/ai-essentials' },
      { label: 'Elements of AI — in italiano', url: 'https://course.elementsofai.com/it/' },
      { label: 'Fast.ai — Corsi pratici e gratuiti', url: 'https://www.fast.ai/' },
      { label: 'Chatbot Arena (LMSYS) — Benchmark live dei modelli', url: 'https://lmarena.ai' },
    ],
  },

  // 17. Grazie
  {
    type: 'closing',
    heading: 'Grazie.',
    subtitle: 'È stato un viaggio incredibile.',
    author: { name: 'Attilio Cianci', role: 'Docente — Big Data & AI' },
    style: { background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.05))' },
  },

  // 18. Quote Finale
  {
    type: 'quote',
    text: "Il futuro appartiene a chi impara più abilità e le combina in modi creativi.",
    source: "Robert Greene, adattato all'era dell'AI",
  },

  // 19. Stay Curious
  {
    type: 'closing',
    heading: '',
    content: `<p style="font-size: 1.6em; font-weight: 300; line-height: 1.8; letter-spacing: 0.02em;">
<span style="color: #6c63ff; font-weight: 700;">Stay curious.</span><br>
<span style="color: #00d4aa; font-weight: 700;">Stay critical.</span><br>
<span style="color: #f59e0b; font-weight: 700;">Stay human.</span>
</p>`,
  },

  // 20. Fine
  {
    type: 'closing',
    heading: '',
    style: { background: '#000' },
  },
]
