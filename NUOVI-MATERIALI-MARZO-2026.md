# 🆕 Nuovi Materiali da Integrare — Corso Big Data & AI
**Data ricerca:** 31 Marzo 2026 | **Obiettivo:** Arricchire il corso con contenuti freschi e coinvolgenti

---

## 📊 Statistiche Chiave 2026 (da usare trasversalmente)

### Italia (fonte: Banca d'Italia, QEF N.1005, marzo 2026)
- **8,2%** delle imprese italiane (10+ dipendenti) usa AI — media EU 13,5%
- Adozione AI → **+5,2% produttività**, **+2% margini operativi**
- Effetto occupazione: **non statisticamente significativo** (AI non taglia posti)
- Imprese adottanti si aspettano **inflazione più bassa** nel medio-lungo periodo
- Barriere: carenza talenti (39%), difficoltà a identificare use case (27%), governance (27%)
- Solo 3% ha soluzioni AI proprie; 29% mix interno/esterno
- Fonti: [Banca d'Italia](https://www.bancaditalia.it/pubblicazioni/qef/2026-1005/index.html) | [Agenda Digitale](https://www.agendadigitale.eu/industry-4-0/ia-e-aziende-italiane-produttivita-salari-e-occupazione-nei-nuovi-dati-bankitalia/) | [La Stampa](https://www.lastampa.it/economia/2026/03/12/news/banca_italia_intelligenza_artificiale_lavoro_prezzi-15542076/)

### Mondo (fonti varie, Q1 2026)
- **88%** delle enterprise usa AI in almeno una funzione (Thunderbit/McKinsey)
- Enterprise AI adoption: da 55% a **78% in un anno** (AmplifAI)
- Agentic AI: Telecom 48%, Retail/CPG 47% (NVIDIA State of AI 2026)
- Microsoft Copilot: **41% adoption** tra clienti M365 enterprise (Q1 2026)
- GitHub Copilot: **4,7M abbonati paganti**, +75% YoY, 77K clienti enterprise
- Claude (Anthropic): 300K+ clienti business, $14B revenue run-rate
- Top use case GenAI: content creation (71%), code generation (58%), customer interaction (54%)
- ROI medio: **$7.800/dipendente/anno**
- Fonti: [NVIDIA](https://blogs.nvidia.com/blog/state-of-ai-report-2026/) | [AmplifAI](https://www.amplifai.com/blog/generative-ai-statistics) | [Deloitte](https://www.deloitte.com/cy/en/issues/generative-ai/state-of-ai-in-enterprise.html) | [MedhaCloud](https://medhacloud.com/blog/ai-adoption-statistics-2026)

---

## 🔥 Novità AI Marzo 2026 (da citare dove pertinente)

| Novità | Dettaglio | Lezione |
|--------|-----------|---------|
| **Claude Projects & Artifacts GRATIS** | Ora disponibili anche nel free tier | L05 |
| **ChatGPT Canvas gratuito** | Disponibile su Free, Plus, Pro, Team, Enterprise | L04 |
| **Google Personal Intelligence** | Gemini si connette a Gmail, Photos, YouTube, Search per risposte contestuali | L06 |
| **Claude in Excel/PowerPoint** | Anthropic lancia plugin Office nativi | L05, L08 |
| **ChatGPT for Excel** | OpenAI lancia integrazione Excel nativa | L04, L08 |
| **Gemini Drops marzo 2026** | Trasferimento chat history, aiuto personalizzato gratis | L06 |
| **Modelli freschi** | GPT-5.4, Gemini 3.1 Pro, Claude Opus 4.6, Sonnet 4.6, DeepSeek V4, Llama 4, Grok 4.20 | L01, L02 |
| **AI Act rinvio alto rischio** | Parlamento EU (26/3/2026): rinvio a 2027-2028 per sistemi ad alto rischio | L09, L10 |
| **Bando "vIvA" Made in Italy** | 10 progetti AI selezionati per il Made in Italy | L09 |

---

## Materiali per Lezione

### L01 — "Cos'è davvero l'AI oggi"

**Statistiche da aggiornare:**
- Slide dati: usare le stats Banca d'Italia (8,2% Italia vs 13,5% EU) — impattante per il pubblico aziendale
- Aggiungere: "88% delle enterprise nel mondo usa AI, ma solo 8% in Italia" → effetto shock

**Nuovo esercizio pratico:**
- 🎯 **"AI Audit del tuo ruolo"**: ogni partecipante elenca 5 task ripetitivi del proprio lavoro, poi usa ChatGPT/Claude per provare ad automatizzarne uno in diretta. Non è "scrivi un'email" — è "porta il TUO problema reale"

**Video consigliato:**
- [a16z Top 100 Gen AI Consumer Apps (marzo 2026)](https://www.a16z.news/p/top-100-gen-ai-consumer-apps-march) — la mappa dell'ecosistema AI consumer aggiornata

---

### L02 — "Come funzionano i modelli generativi"

**Demo interattive gratuite:**
- 🔧 **GPT Tokenizer Playground** — https://gpt-tokenizer.dev/ — visualizza token, conta costi, confronta modelli
- 🔧 **HuggingFace Tokenizer Playground** — https://huggingface.co/spaces/Xenova/the-tokenizer-playground — confronta tokenizer di diversi modelli
- 🔧 **Google Gemini Token Visualizer** — https://tokens-lpj6s2duga-ew.a.run.app/ — tokenizer Gemini/Gemma con conteggio
- 🔧 **TensorFlow Neural Network Playground** — https://playground.tensorflow.org/ — rete neurale interattiva nel browser
- 🔧 **TensorFlow Embedding Projector** — https://projector.tensorflow.org/ — visualizza embeddings in 3D

**Nuovo esercizio pratico:**
- 🎯 **"Token Economics"**: dai la stessa frase in italiano e inglese al tokenizer. Quanti token in più costa l'italiano? Calcola il costo API per 1000 richieste. Lezione pratica su perché il costo varia per lingua.

**Aggiornamento modelli:**
- Aggiornare la timeline modelli con: GPT-5.4 (marzo 2026), Gemini 3.1 Pro (feb 2026), Claude Opus 4.6 (feb 2026), DeepSeek V4 (marzo 2026), Llama 4

---

### L03 — "Prompting e context engineering"

**Nuovo esercizio pratico:**
- 🎯 **"Prompt Battle"**: dividi la classe in coppie. Stesso task (es: "analizza questo report vendite"), 3 minuti ciascuno. Chi ottiene il risultato migliore? La classe vota. Poi si analizzano le differenze nei prompt.
- 🎯 **"Context Window Stress Test"**: carica un documento lungo in Claude (200K context) vs ChatGPT. Fai la stessa domanda a entrambi. Dove si perde il contesto? Esercizio pratico su limiti reali.

**Risorsa gratuita:**
- [Google AI Skills — Learn AI Skills](https://ai.google/learn-ai-skills/) — corso gratuito Google su prompting per business

---

### L04 — "OpenAI: ChatGPT, Playground e API"

**Novità da integrare:**
- ✅ **ChatGPT Canvas ora gratuito** per tutti i tier — mostrare in demo live
- ✅ **ChatGPT for Excel** — plugin nativo, demo con spreadsheet reale
- ✅ GPT-5.4 come modello corrente (aggiornare riferimenti)
- ✅ Free tier ora include GPT-5.2

**Nuovo esercizio pratico:**
- 🎯 **"Canvas Collaborativo"**: ogni partecipante apre Canvas e crea un documento di analisi SWOT della propria azienda. Poi usa le funzioni di editing AI (accorcia, espandi, cambia tono) in diretta. Molto più hands-on della sola chat.

---

### L05 — "Claude: Projects, Artifacts & MCP"

**Novità BOMBA:**
- 🆓 **Projects e Artifacts ora GRATIS** (marzo 2026) — [Tom's Guide](https://www.tomsguide.com/ai/claude-just-made-two-of-its-best-features-free-heres-how-to-use-projects-and-artifacts)
- ✅ **Claude in Excel e PowerPoint** — plugin Office nativi lanciati
- ✅ Claude Opus 4.6 e Sonnet 4.6 come modelli correnti

**Nuovo esercizio pratico:**
- 🎯 **"Project Knowledge Base"**: ogni partecipante crea un Project in Claude con 3 documenti del proprio lavoro (policy, template, FAQ). Poi fa domande al Project. Demo di come Claude diventa un assistente personalizzato — ORA GRATIS per tutti.
- 🎯 **"Artifact Showdown"**: chiedi a Claude di creare un'app interattiva (es: calcolatore ROI, dashboard, quiz) tramite Artifacts. I partecipanti vedono codice diventare app in tempo reale.

---

### L06 — "Power Automate & Tool Emergenti"

**Novità da integrare:**
- ✅ **Google Personal Intelligence** (gennaio 2026) — Gemini si connette a Gmail, Photos, YouTube, Search
- ✅ **Gemini Drops marzo 2026** — trasferimento chat history, aiuto personalizzato gratis
- ✅ Microsoft Copilot: **41% adoption** in M365 enterprise
- Lista tool gratuiti aggiornata (da [Reddit marzo 2026](https://www.reddit.com/r/SaaS/comments/1rueqbu/every_free_ai_tool_is_actually_worth_using_in/)):
  - Writing: ChatGPT free (GPT-5.2), Claude free, Gemini free
  - Research: Perplexity (5 Pro search/giorno gratis), NotebookLM (gratis)
  - Immagini: vari tool gratuiti elencati

**Nuovo esercizio pratico:**
- 🎯 **"NotebookLM Deep Dive"**: carica 5 articoli di settore in NotebookLM. Genera un podcast audio automatico. I partecipanti restano stupiti. Poi usa il notebook per Q&A. Tool gratuito e sottovalutato.

---

### L07 — "Agenti AI + Zapier + n8n"

**Risorse aggiornate:**
- 📹 [n8n AI Agent Tutorial for Beginners 2026](https://www.youtube.com/watch?v=PfdnYe2690E) — step by step
- 📹 [Build Your First AI Automation - Sabrina Ramonov](https://www.sabrina.dev/p/build-your-first-ai-automation) — serie 3 video, feb 2026
- 📹 [The ONLY n8n Tutorial You Need](https://www.youtube.com/watch?v=uK42llzHjmY) — beginner-friendly
- 📚 [Free n8n AI Automation Course — 8 Lessons + Certificate](https://findskill.ai/courses/n8n-ai-automation-workflows/)
- Stat: Agentic AI adoption — Telecom 48%, Retail 47% (NVIDIA 2026)

**Statistiche Agentic AI:**
- [150+ Data Points su Agentic AI 2026](https://www.digitalapplied.com/blog/agentic-ai-statistics-2026-definitive-collection-150-data-points) — fonte ricchissima

**Nuovo esercizio pratico:**
- 🎯 **"Agent vs Workflow"**: stesso task (es: "monitora prezzi competitor e avvisami") fatto con un workflow Zapier tradizionale E con un agente AI n8n. Confronto tempo di setup, flessibilità, costo. I partecipanti capiscono quando serve un agente vs un semplice workflow.

---

### L08 — "AI per la Produttività"

**Novità da integrare:**
- ✅ Claude in Excel/PowerPoint + ChatGPT for Excel → demo comparativa
- Stat: ROI medio **$7.800/dipendente/anno** — dato concreto per convincere i manager
- Top 3 use case: content creation (71%), code gen (58%), customer interaction (54%)

**Nuovo esercizio pratico:**
- 🎯 **"La mia settimana AI"**: ogni partecipante mappa la propria settimana tipo e identifica 3 momenti dove l'AI può risparmiare tempo. Poi calcola: se risparmio 30 min/giorno × 220 giorni lavorativi = 110 ore/anno = quasi **3 settimane**. Impatto tangibile.
- 🎯 **"AI Meeting Notes"**: registra (con consenso) 5 minuti di discussione in aula. Usa Whisper/tool gratuito per trascrivere. Poi usa Claude/ChatGPT per generare meeting notes, action items, follow-up email. Workflow reale.

---

### L09 — "AI e Azienda: Implementazione"

**Case study Italia 2026:**
- 🇮🇹 **Banca d'Italia QEF N.1005** — primo studio empirico italiano: +5,2% produttività, nessun effetto negativo su occupazione
- 🇮🇹 **Bando "vIvA" Made in Italy** — 10 progetti AI selezionati (30/3/2026)
- 🇮🇹 **Fondazione Leonardo Report** (25/3/2026, Repubblica) — AI-readiness e fondi PNRR
- 🇮🇹 **Dedagroup/DedaAI** — €50M investiti in AI, 200+ professionisti dedicati
- 🌍 **Deloitte State of AI in Enterprise 2026** — 66% delle organizzazioni riporta gains concreti

**Aggiornamento AI Act:**
- ⚖️ **26 marzo 2026**: Parlamento EU approva rinvio sistemi alto rischio a **2027-2028**
- Timeline aggiornata: Feb 2025 divieti → Ago 2025 norme GPAI → **Ago 2026 piena applicabilità generale** → 2027-2028 alto rischio (rinviato)
- Obbligo **AI Literacy** già in vigore — sanzioni fino a €35M
- Fonte: [Tom's Hardware](https://www.tomshw.it/business/ai-act-rinvio-sistemi-alto-rischio-2027-2028) | [AI4Business](https://www.ai4business.it/intelligenza-artificiale/la-ue-rinvia-le-regole-sui-sistemi-ad-alto-rischio-e-vieta-la-nudificazione/)

**Nuovo esercizio pratico:**
- 🎯 **"AI Readiness Assessment"**: template di autovalutazione in 10 domande per la propria azienda (dati, competenze, budget, governance, use case). Output: score e roadmap 90 giorni. Ispirato al report Fondazione Leonardo.

---

### L10 — "Progetto Finale & Recap"

**Aggiornamenti:**
- Rafforzare sezione AI Act con le novità del rinvio (più tempo per le aziende, ma non fermarsi)
- Slide chiusura: citare dato Italia (8,2%) vs mondo (88%) → "Il gap è un'opportunità per chi si muove ORA"

**Nuovo esercizio (per il progetto finale):**
- 🎯 **"Pitch AI per il tuo CEO"**: ogni team prepara un pitch di 5 minuti per convincere il proprio CEO ad adottare AI. Deve includere: use case specifico, ROI stimato (usa il dato $7.800/dipendente), timeline, rischi, compliance AI Act. Valutazione peer-to-peer.

---

## 🧰 Risorse Bonus Trasversali

### Demo Interattive Gratuite (toolkit da mostrare in varie lezioni)
| Demo | URL | Lezione |
|------|-----|---------|
| GPT Tokenizer | https://gpt-tokenizer.dev/ | L02 |
| HF Tokenizer Playground | https://huggingface.co/spaces/Xenova/the-tokenizer-playground | L02 |
| Gemini Token Visualizer | https://tokens-lpj6s2duga-ew.a.run.app/ | L02 |
| TensorFlow NN Playground | https://playground.tensorflow.org/ | L02 |
| Embedding Projector | https://projector.tensorflow.org/ | L02 |
| NVIDIA AI Playground | https://www.nvidia.com/en-us/research/ai-playground/ | L01 |
| Google NotebookLM | https://notebooklm.google.com/ | L06, L08 |
| OpenAI Playground | https://platform.openai.com/playground | L04 |

### Report & Fonti per Slide "Fonti Consigliate"
- NVIDIA State of AI 2026: https://blogs.nvidia.com/blog/state-of-ai-report-2026/
- Deloitte State of AI in Enterprise 2026: https://www.deloitte.com/cy/en/issues/generative-ai/state-of-ai-in-enterprise.html
- Banca d'Italia QEF 1005: https://www.bancaditalia.it/pubblicazioni/qef/2026-1005/index.html
- a16z Top 100 GenAI Apps marzo 2026: https://www.a16z.news/p/top-100-gen-ai-consumer-apps-march
- Forbes Italia AI marzo 2026: https://forbes.it/2026/03/27/intelligenza-artificiale-a-che-punto-sono-le-aziende-italiane

---

*Report generato il 31/03/2026. Tutti i link verificati al momento della ricerca.*
