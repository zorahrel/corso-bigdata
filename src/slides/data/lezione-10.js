export const meta = {
  lessonNumber: '10',
  title: "Progetto finale e recap",
}

export const slides = [
  // 1. Title
  {
    type: 'title',
    lessonNumber: '10',
    title: 'Progetto Finale & Recap',
    subtitle: 'Giovedì 23 Aprile 2026 · La chiusura del corso',
    style: { background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.1), rgba(245,158,11,0.08), rgba(239,68,68,0.05))' },
  },

  // 2. Timeline delle 10 Lezioni
  {
    type: 'concept',
    centered: true,
    heading: 'Il Percorso che Abbiamo Fatto',
    content: `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;max-width:900px;margin:0 auto;">
  <div style="border-top:3px solid #6c63ff;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#6c63ff;">01</strong><br><span style="font-size:0.55em;color:#374151;">Cos'e l'AI</span></div>
  <div style="border-top:3px solid #818cf8;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#818cf8;">02</strong><br><span style="font-size:0.55em;color:#374151;">Modelli LLM</span></div>
  <div style="border-top:3px solid #00d4aa;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#00d4aa;">03</strong><br><span style="font-size:0.55em;color:#374151;">Prompting</span></div>
  <div style="border-top:3px solid #2dd4bf;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#2dd4bf;">04</strong><br><span style="font-size:0.55em;color:#374151;">OpenAI</span></div>
  <div style="border-top:3px solid #34d399;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#34d399;">05</strong><br><span style="font-size:0.55em;color:#374151;">Claude</span></div>
  <div style="border-top:3px solid #f59e0b;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#f59e0b;">06</strong><br><span style="font-size:0.55em;color:#374151;">Tool AI</span></div>
  <div style="border-top:3px solid #fb923c;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#fb923c;">07</strong><br><span style="font-size:0.55em;color:#374151;">Agenti</span></div>
  <div style="border-top:3px solid #c084fc;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#c084fc;">08</strong><br><span style="font-size:0.55em;color:#374151;">Produttivita</span></div>
  <div style="border-top:3px solid #fb923c;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#fb923c;">09</strong><br><span style="font-size:0.55em;color:#374151;">AI e azienda</span></div>
  <div style="border-top:3px solid #ef4444;padding:12px 8px;background:#f8f9fb;border-radius:8px;text-align:center;"><strong style="color:#ef4444;">10</strong><br><span style="font-size:0.55em;color:#374151;">Progetto finale</span></div>
</div>`,
  },

  // 3. Meme Celebrativo
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/26tPghhxHtI2M4Fks/giphy.gif', alt: 'Completing the AI course' },
    caption: '"Noi che arriviamo all\'ultima lezione del corso"',
  },

  // 4. Recap: Fondamenta (L01-02)
  {
    type: 'concept',
    heading: 'Fondamenta: Cosa è l\'AI',
    content: `<p style="font-size: 0.45em; color: var(--muted); margin-bottom: 12px;">Lezioni 01 & 02</p>
L'AI non è magia: è <strong>statistica su steroidi</strong>. Token, probabilità, next-token prediction.
<br><br>
I modelli non "capiscono" — <strong>predicono</strong>. Ma la qualità della predizione è così alta da sembrare comprensione.
<br><br>
Da GPT-1 (2018) a oggi: la velocità del progresso è senza precedenti.`,
    image: { src: 'https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif', alt: 'AI foundations' },
  },

  // 5. Recap: Interazione (L03)
  {
    type: 'concept',
    heading: 'Interazione: Come Parlarle',
    content: `<p style="font-size: 0.45em; color: var(--muted); margin-bottom: 12px;">Lezione 03</p>
Il <strong>prompt engineering</strong> è la skill più importante dell'era AI: Ruolo, Contesto, Task, Formato.
<br><br>
Chain of Thought, few-shot, system prompts: tecniche che trasformano output mediocri in eccellenti.
<br><br>
La regola d'oro: <strong>più contesto dai, migliore è il risultato</strong>.`,
    image: { src: 'https://i.giphy.com/media/13HgwGsXF0aiGY/giphy.gif', alt: 'Prompt engineering' },
  },

  // 6. Recap: Piattaforme (L04-05-06)
  {
    type: 'concept',
    heading: 'Piattaforme: I Tool del Mestiere',
    content: `<p style="font-size: 0.45em; color: var(--muted); margin-bottom: 12px;">Lezioni 04, 05, 06</p>
<strong>Testo:</strong> ChatGPT, Claude, Gemini — ognuno con punti di forza diversi.
<br><br>
<strong>Media:</strong> Midjourney, DALL-E, Runway, ElevenLabs — la creatività amplificata.
<br><br>
<strong>Codice:</strong> Copilot, Cursor, Claude Code — il programmatore ha un copilota.`,
    image: { src: 'https://i.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif', alt: 'AI platforms' },
  },

  // 7. Recap: Automazione (L07-08-09)
  {
    type: 'concept',
    heading: 'Automazione & Produttività',
    content: `<p style="font-size: 0.45em; color: var(--muted); margin-bottom: 12px;">Lezioni 07, 08, 09</p>
<strong>Agenti AI:</strong> non solo risposte, ma azioni. L'AI che lavora per te.
<br><br>
<strong>Stack personale:</strong> non collezionare tool, costruisci un sistema.
<br><br>
<strong>Adozione aziendale:</strong> il problema non è tecnico, è umano. Governance, change management, ROI.`,
    image: { src: 'https://i.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif', alt: 'Automation' },
  },

  // 8. Rubrica Progetto Finale
  {
    type: 'concept',
    centered: true,
    heading: 'Progetto Finale: Rubrica di Valutazione',
    content: `<div style="max-width: 800px; margin: 0 auto;">
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--accent); min-width: 60px; text-align: center;">30%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Soluzione AI proposta</div>
      <div style="font-size: 0.45em; color: var(--muted);">Tool scelti, architettura, workflow — è realistica?</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--secondary); min-width: 60px; text-align: center;">20%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Chiarezza del problema</div>
      <div style="font-size: 0.45em; color: var(--muted);">Il problema è ben definito? Chi ne beneficia?</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--warning); min-width: 60px; text-align: center;">20%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Fattibilità e tool scelti</div>
      <div style="font-size: 0.45em; color: var(--muted);">Si può implementare? I tool esistono e sono accessibili?</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px; margin-bottom: 12px;">
    <div style="font-size: 1.4em; font-weight: 900; color: #fb923c; min-width: 60px; text-align: center;">20%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Impatto atteso</div>
      <div style="font-size: 0.45em; color: var(--muted);">Metriche concrete: tempo, costi, qualità. Numeri!</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; background: var(--surface); border-radius: var(--radius); padding: 16px 24px;">
    <div style="font-size: 1.4em; font-weight: 900; color: var(--danger); min-width: 60px; text-align: center;">10%</div>
    <div>
      <div style="font-size: 0.65em; font-weight: 700;">Presentazione</div>
      <div style="font-size: 0.45em; color: var(--muted);">Chiarezza, struttura, gestione del tempo, Q&A</div>
    </div>
  </div>
</div>`,
  },

  // 9. Presentazioni
  {
    type: 'hands-on',
    heading: 'Il momento è vostro.',
    timer: '⏱ 3 ore',
    instructions: [
      '<strong>5-10 min per persona/gruppo:</strong> presenta il tuo progetto',
      '<strong>Feedback collettivo:</strong> domande, suggerimenti, idee dal pubblico',
      '<strong>Voto peer:</strong> ognuno vota i 3 progetti migliori (escluso il proprio)',
      '<span style="font-size: 1.1em; color: var(--secondary); font-weight: 600;">Applaudite forte. Ogni progetto merita rispetto.</span>',
    ],
  },

  // 10. Meme: Project Works
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif', alt: 'When your project works' },
    caption: '"Quando il tuo progetto funziona davvero durante la presentazione"',
  },

  // 11. Prossimi 6-12 Mesi
  {
    type: 'concept',
    heading: 'I Prossimi 6-12 Mesi',
    content: `<strong>Agenti più capaci:</strong> da assistenti a collaboratori. Multi-step, multi-tool, autonomi.
<br><br>
<strong>Costi in calo:</strong> quello che oggi costa $20/mese, tra 6 mesi costerà $5. Accesso democratizzato.
<br><br>
<strong>AI Act EU:</strong> regolamentazione in arrivo. Chi usa AI in azienda dovrà adeguarsi.
<br><br>
<strong>Multimodale nativo:</strong> testo + voce + immagini + video in un unico flusso.`,
    image: { src: 'https://i.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif', alt: 'Future AI' },
  },

  // 12. AI Act Europeo
  {
    type: 'concept',
    heading: 'AI Act Europeo: Cosa Cambia',
    content: `<strong>Classificazione per rischio:</strong> minimo, limitato, alto, inaccettabile. Obblighi crescenti.
<br><br>
<strong>Per chi usa AI in azienda:</strong> trasparenza (dire quando si usa AI), valutazione impatto, documentazione.
<br><br>
<strong>Sanzioni:</strong> fino al 7% del fatturato globale. Non è opzionale.
<br><br>
<strong>Timeline:</strong> obblighi graduali dal 2025 al 2027. Iniziate ora.`,
    image: { src: 'https://i.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif', alt: 'EU AI Act' },
  },

  // 13. Come Restare Aggiornati
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Come Restare Aggiornati',
    features: [
      { icon: '📬', title: 'Newsletter', description: 'The Batch (deeplearning.ai), TLDR AI, Ben\'s Bites' },
      { icon: '🎧', title: 'Podcast', description: 'Lex Fridman, Hard Fork (NYT), Latent Space' },
      { icon: '👥', title: 'Community', description: 'r/MachineLearning, Hugging Face, AI Breakfast Italia' },
    ],
  },

  // 14. Piano Apprendimento Continuo
  {
    type: 'custom',
    layout: 'feature-grid',
    heading: 'Il Tuo Piano di Apprendimento Continuo',
    features: [
      { icon: '📖', title: 'Ogni settimana', description: '1 ora dedicata a leggere / sperimentare con AI. Newsletter + 1 prompt nuovo.' },
      { icon: '🧪', title: 'Ogni mese', description: '1 tool nuovo da provare per 2 settimane. Valuta se tenerlo nello stack.' },
      { icon: '⚙️', title: 'Ogni trimestre', description: "1 automazione nuova. Un workflow che prima facevi a mano, ora fa l'AI." },
    ],
  },

  // 15. Risorse Definitive
  {
    type: 'resource',
    heading: 'Risorse Definitive',
    links: [
      { label: 'The Batch — Newsletter di DeepLearning.AI', url: 'https://www.deeplearning.ai/the-batch/' },
      { label: 'TLDR AI — Newsletter quotidiana', url: 'https://tldr.tech/ai' },
      { label: 'Fast.ai — Corsi pratici e gratuiti', url: 'https://www.fast.ai/' },
      { label: 'DeepLearning.AI — Corsi avanzati', url: 'https://www.deeplearning.ai/' },
      { label: 'Chatbot Arena (LMSYS) — Benchmark live dei modelli', url: 'https://lmsys.org/' },
      { label: 'LLM Stats — Confronto modelli e costi', url: 'https://llm-stats.com' },
    ],
  },

  // 16. Grazie
  {
    type: 'closing',
    heading: 'Grazie.',
    subtitle: 'È stato un viaggio incredibile.',
    author: { name: 'Attilio Cianci', role: 'Docente — Big Data & AI' },
    style: { background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.05))' },
  },

  // 17. Quote Finale
  {
    type: 'quote',
    text: "Il futuro appartiene a chi impara più abilità e le combina in modi creativi.",
    source: "Robert Greene, adattato all'era dell'AI",
  },

  // 18. Meme Finale Epico
  {
    type: 'meme',
    image: { src: 'https://i.giphy.com/media/l0MYt5jPR6QX5APm0/giphy.gif', alt: 'Us after the course — triumphant' },
    caption: '"Noi dopo il corso. Pronti a conquistare il mondo (con l\'AI)."',
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

  // 20. Fine — Slide Vuota (black)
  {
    type: 'closing',
    heading: '',
    style: { background: '#000' },
  },
]
