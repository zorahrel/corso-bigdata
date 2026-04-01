# Research ChatGPT 2026 — Lezione 04

> Ricerca effettuata il 31 marzo 2026

---

## 1. ChatGPT Canvas

### Fonti
- https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it (OpenAI ufficiale)
- https://openai.com/index/introducing-canvas/ (annuncio ufficiale)
- https://skywork.ai/blog/chatgpt-canvas-review-2025-features-coding-pros-cons/ (review completa)
- https://www.certlibrary.com/blog/comprehensive-guide-to-chatgpt-canvas-features-usage-and-examples/ (guida Jan 2026)

### Punti chiave per le slide
- **Cos'è**: interfaccia side-by-side per lavorare su writing e coding con ChatGPT — editor persistente + chat
- **Come si attiva**: automaticamente quando ChatGPT genera >10 righe, oppure digitando "use canvas" / comando `/canvas`
- **Editing diretto**: puoi modificare testo/codice direttamente nell'editor, highlight sezioni per chiedere modifiche specifiche
- **Shortcuts menu**: regola lunghezza testo, debug codice, suggerisci edit, review code — tutto con un click
- **Version history**: bottone "back" per ripristinare versioni precedenti
- **React/HTML rendering**: sandbox che esegue codice React/HTML direttamente — tutti i pacchetti npm funzionano
- **Block comments**: seleziona un intero paragrafo e chiedi spiegazioni o edit mirati
- **Canvas vuoto**: puoi aprire un canvas vuoto e incollare un progetto esistente
- **Disponibile su**: Web, Windows, macOS (mobile coming soon)

### Visual/Screenshot suggeriti
1. Screenshot della vista split: chat a sinistra, canvas editor a destra
2. Menu shortcuts (icona con le opzioni: adjust length, debug, suggest edits, etc.)
3. Highlight di una sezione + popup per chiedere edit specifico
4. Esempio di codice React renderizzato nella sandbox
5. Version history con il bottone "back"

### Esempi pratici per demo
- Chiedere "Scrivi una landing page in React" → si apre canvas con codice + preview
- Highlight un paragrafo di un testo → "rendi più conciso"
- Debug di codice Python direttamente nel canvas
- Creare un blog post e usare "adjust reading level" dal menu

---

## 2. Come creare un GPT Custom

### Fonti
- https://www.reddit.com/r/ChatGPTPromptGenius/comments/1j2v124/how_to_build_customgpts_2025_guide/ (guida Reddit, 495 upvotes, Mar 2025)
- https://www.eesel.ai/blog/custom-gpt (step-by-step con esempi)
- https://www.cometapi.com/how-to-build-custom-gpts/ (Jan 2026)
- https://brisktechsol.com/custom-gpts/ (guida pratica)

### Punti chiave per le slide
- **Accesso**: ChatGPT Plus/Pro → sidebar → "Explore GPTs" → "Create"
- **Step 1 — Nome e descrizione**: definisci scopo, target users, cosa NON deve fare
- **Step 2 — Instructions**: il "system prompt" del GPT — regole, tono, limiti
- **Step 3 — Knowledge files**: carica PDF, CSV, documenti che il GPT usa come contesto
- **Step 4 — Capabilities**: abilita/disabilita Web Browsing, DALL-E, Code Interpreter
- **Step 5 — Actions (API)**: collega API esterne con schema OpenAPI
- **Step 6 — Conversation starters**: prompt suggeriti per gli utenti
- **Step 7 — Pubblicazione**: Private, Link-only, o Public nel GPT Store
- **Esempio reale**: "Contract Summarizer per legal ops che non dà legal advice e flagga clausole ambigue"
- **No coding required** — tutto via interfaccia grafica

### Visual/Screenshot suggeriti
1. Schermata "Create a GPT" con i campi nome/descrizione/instructions
2. Upload di knowledge files (PDF/CSV)
3. Pannello capabilities (toggle web browsing, DALL-E, code interpreter)
4. GPT Store con GPT pubblicati
5. Esempio di conversation starters configurati

### Esempi pratici per demo
- Creare un GPT "Assistente Big Data" che risponde solo su Hadoop/Spark
- Caricare un PDF del corso come knowledge base
- Aggiungere conversation starters tipo "Spiegami MapReduce" / "Cos'è un cluster Spark?"
- Mostrare la differenza tra GPT custom con e senza knowledge files

---

## 3. ChatGPT for Excel

### Fonti
- https://openai.com/index/chatgpt-for-excel/ (annuncio ufficiale, ~Feb 2026)
- https://chatgpt.com/apps/spreadsheets/ (landing page)
- https://perfectassistant.ai/blog/best-chatgpt-plugins-for-excel (comparativa Jan 2026)

### Punti chiave per le slide
- **Cos'è**: Add-in ufficiale OpenAI per Excel — ChatGPT direttamente nel workbook (BETA)
- **Powered by GPT-5.4** — il modello più avanzato di OpenAI (marzo 2026)
- **Cosa può fare**:
  - Costruire/aggiornare modelli Excel descrivendo in linguaggio naturale
  - Scenario analysis automatica
  - Ragionare attraverso workbook multipli — capisce come fogli e formule si collegano
  - Tracciare errori e spiegare perché i risultati sono cambiati
  - Budgeting, inventory management, data analysis, reporting
- **Trasparenza**: spiega cosa sta facendo, linka le celle che referenzia, chiede permesso prima di modificare
- **Audit trail**: calcoli eseguiti in Excel nativo → puoi tracciare assunzioni e verificare formule
- **Revert**: puoi annullare ogni modifica
- **Benchmark interno OpenAI**: su investment banking benchmark, performance da 43.7% (GPT-5) a 87.3% (GPT-5.4 Thinking)
- **Financial data integrations**: FactSet, Dow Jones Factiva, LSEG, Daloopa, S&P Global

### Visual/Screenshot suggeriti
1. Screenshot dell'add-in ChatGPT dentro Excel con sidebar chat
2. Esempio: "Build a revenue forecast model" → Excel si popola automaticamente
3. ChatGPT che spiega le formule e linka alle celle
4. Dialog di permesso prima di modificare il workbook
5. Confronto prima/dopo di un foglio Excel

### Esempi pratici per demo
- Aprire Excel → "Crea un modello di budget per un progetto IT"
- Chiedere "Spiega come funziona questa formula" su un foglio esistente
- Scenario analysis: "Cosa succede se il fatturato cala del 20%?"
- Mostrare che le formule restano native Excel (non sono "magia nascosta")

---

## 4. OpenAI API Playground & Pricing

### Fonti
- https://developers.openai.com/api/docs/pricing (pricing ufficiale, aggiornato Mar 2026)
- https://openai.com/api/pricing/ (pagina pricing)
- https://evolink.ai/blog/gpt-5-4-api-pricing-2026-latest-forecast-scenarios-cost-comparison (guida costi)

### Pricing attuale (marzo 2026) — per 1M token

| Modello | Input | Cached Input | Output |
|---------|-------|-------------|--------|
| **gpt-5.4** | $2.50 | $0.25 | $15.00 |
| **gpt-5.4-mini** | $0.75 | $0.075 | $4.50 |
| **gpt-5.4-nano** | $0.20 | $0.02 | $1.25 |
| **gpt-5.4-pro** | $30.00 | - | $180.00 |

**Long context** (>standard): prezzo raddoppiato su input, +50% su output per gpt-5.4.

**Altri modelli disponibili**:
- gpt-realtime-1.5 (audio): $32/1M input, $64/1M output
- gpt-realtime-mini (audio): $10/1M input, $20/1M output
- gpt-image-1.5: $8/1M input immagini, $32/1M output
- Sora 2 (video): $0.10-$0.70/secondo a seconda della risoluzione

**Tools API**: Web search $10/1k calls, File search $2.50/1k calls

### Punti chiave per le slide
- **Playground** = interfaccia web per testare API senza scrivere codice
- Puoi scegliere modello, temperatura, max tokens, system prompt
- **Modelli GPT-5.x**: famiglia completa da nano (economico) a pro (massima qualità)
- **Cached input**: sconto 90% su token già visti → ottimizzazione costi
- **Containers**: nuovo concetto di billing per sessioni da 20 min
- **Context window**: fino a 1M token con gpt-5.4

### Visual/Screenshot suggeriti
1. Screenshot del Playground con pannello modello/parametri
2. Tabella pricing comparativa (slide con i 4 modelli)
3. Esempio di API call con curl/Python
4. Schema "come scegliere il modello giusto" (nano vs mini vs standard vs pro)

### Esempi pratici per demo
- Aprire platform.openai.com/playground → scegliere gpt-5.4-mini
- Scrivere un system prompt "Sei un esperto di Big Data" + fare una domanda
- Mostrare come cambiare temperatura e vedere effetti sulla risposta
- Calcolo costi: "Se faccio 1000 query da 500 token, quanto spendo?"

---

## 5. Novità ChatGPT Marzo 2026

### Fonti
- https://help.openai.com/en/articles/6825453-chatgpt-release-notes (release notes ufficiali)
- https://aibusinessweekly.net/p/chatgpt-new-features-2026 (panoramica completa, aggiornata 23 Mar 2026)
- https://www.gend.co/blog/chatgpt-2026-latest-features (overview)

### Timeline modelli 2025-2026
- **Ago 2025**: lancio GPT-5
- **Iterazioni**: GPT-5.1 → 5.2 → 5.3 → **5.4** (corrente, Mar 2026)
- **GPT-5.1 deprecato** l'11 marzo 2026
- **GPT-5.4 Thinking**: mostra il piano di ragionamento prima di rispondere — puoi redirigere il modello mid-response

### Novità principali marzo 2026
1. **ChatGPT for Excel** (beta) — add-in ufficiale (vedi sezione 3)
2. **GPT-5.4 + GPT-5.4 Thinking** — modello frontier con reasoning visibile
3. **Model picker aggiornato**: Instant, Thinking, Pro per piano — con Auto-switch
4. **Codex Plugins**: directory di plugin installabili per workflow riutilizzabili
5. **Location Sharing**: condivisione posizione per risposte localizzate
6. **Large paste → attachment**: paste >5k caratteri diventano allegati automaticamente
7. **Google Drive unificato**: un'unica app per Drive, Docs, Sheets, Slides
8. **App connectors aggiornati**: Box, Notion, Linear, Dropbox con nuove write capabilities
9. **Sidebar semplificata su mobile**: Images, Codex, Pulse, Apps in barra orizzontale
10. **Legacy Deep Research rimosso** il 26 marzo 2026

### ChatGPT NON è più "solo un chatbot" — è una piattaforma:
- Codex (coding agentico)
- Deep Research (ricerca multi-fonte)
- Record Mode (trascrizione meeting)
- Memory persistente tra sessioni
- Shopping assistance
- 60+ app connectors (Google Drive, Slack, GitHub, Salesforce...)

### Visual/Screenshot suggeriti
1. Timeline dei modelli GPT-5 → 5.4 (infografica)
2. Screenshot del nuovo model picker (Instant/Thinking/Pro)
3. Screenshot di Codex in azione
4. Confronto "ChatGPT 2023 vs ChatGPT 2026" (chatbot vs piattaforma)
5. Lista delle 60+ app connectors

### Esempi pratici per demo
- Mostrare il model picker e la differenza tra Instant e Thinking
- Deep Research: "Analizza i trend Big Data 2026" → report multi-fonte
- Memory: mostrare come ChatGPT ricorda il contesto tra conversazioni
- Record Mode: registrare una breve conversazione e farla riassumere

---

## Note per la preparazione delle slide

### Priorità contenuti
1. **Canvas** e **Custom GPTs** sono i più hands-on → ideali per demo live
2. **ChatGPT for Excel** è la novità più recente e wow-factor per un pubblico business
3. **Pricing/Playground** è essenziale per capire i costi reali dell'AI
4. **Novità 2026** serve come panoramica per far capire la velocità dell'evoluzione

### Suggerimento screenshot
Dato che non posso fare screenshot reali, suggerisco di:
- Catturare screenshot live da chatgpt.com durante la preparazione
- Usare le immagini dai blog post citati (con attribuzione)
- Preparare una demo live di Canvas e Custom GPT durante la lezione
