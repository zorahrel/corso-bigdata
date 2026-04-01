# Research: Claude & Gemini — Dettagli per Slide (Marzo 2026)

---

## PARTE 1: CLAUDE (Anthropic)

### 1. Claude Projects

**Cos'è:** Workspace persistente che mantiene contesto tra sessioni. Carica documenti, istruzioni custom, e organizza conversazioni correlate.

**Come si crea:**
1. Vai su claude.ai → sidebar sinistra → "Projects" → "New Project"
2. Dai un nome e descrizione
3. Carica file nella Project Knowledge (PDF, CSV, TXT, codice, immagini)
4. Aggiungi "Custom Instructions" (system prompt persistente)
5. Ogni chat nel progetto ha accesso automatico a tutto il contesto

**Cosa si può caricare:**
- PDF, TXT, CSV, JSON, codice sorgente, immagini
- Limite: testo estratto deve stare dentro ~200K token di context window
- Tecnicamente file illimitati, ma il totale del testo estratto è il vero limite

**Free tier:**
- Accesso a Projects con funzionalità base
- ~20-40 messaggi per sessione, reset ogni 5 ore
- Modelli: Sonnet 4.5 e Haiku 4.5
- Context window: 200K token
- Upload file supportato

**Pro ($20/mese):**
- 5x più messaggi
- Accesso a Opus 4.6
- Persistent memory tra sessioni
- Output più lunghi
- Accesso anticipato a nuove feature

**📌 Fonti:**
- https://support.claude.com/en/articles/8241126-uploading-files-to-claude
- https://medium.com/@melissaonwuka/claude-projects-complete-guide-setup-tutorial-2025-3b9a60033b59
- https://yingtu.ai/en/blog/claude-ai-free-complete-guide

**💡 Demo suggerita:** Creare un progetto "Analisi Vendite", caricare un CSV e fare domande sui dati.

---

### 2. Claude Artifacts

**Cos'è:** Contenuti interattivi generati da Claude che appaiono in un pannello dedicato accanto alla chat. Possono essere app funzionanti, grafici, documenti, giochi — tutto senza scrivere codice.

**Tipi di artifact:**
- **React components** → app interattive, calcolatori, dashboard, giochi
- **Diagrammi Mermaid** → flowchart, organigrammi, diagrammi di sequenza
- **Documenti** → markdown formattato, report
- **Codice** → snippet eseguibili con preview
- **SVG** → grafiche vettoriali

**Come si creano:**
1. Chiedi a Claude qualcosa di "creativo/interattivo" (es. "crea un calcolatore di mutuo")
2. Claude genera automaticamente l'artifact nel pannello destro
3. Puoi iterare: "cambia i colori", "aggiungi un timer", "fai i bottoni più grandi"
4. Se qualcosa si rompe: "Fix with Claude" o descrivi il problema in linguaggio naturale
5. Puoi pubblicare e condividere gli artifact

**Esempi concreti:**
- Calcolatore di mutuo interattivo
- Dashboard di visualizzazione dati
- Quiz interattivo per studiare
- Gioco del snake o tetris
- Prototipo UI di un'app
- Simulatore di customer satisfaction

**Catalog:** https://claude.ai/catalog/artifacts — migliaia di artifact pronti da esplorare

**📌 Fonti:**
- https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them
- https://support.claude.com/en/articles/11649427-use-artifacts-to-visualize-and-create-ai-apps-without-ever-writing-a-line-of-code
- https://zapier.com/blog/claude-artifacts/
- https://albato.com/blog/publications/how-to-use-claude-artifacts-guide

**💡 Demo suggerita:** Chiedere "Crea un calcolatore interattivo che converte temperature Celsius/Fahrenheit con un grafico" → mostrare come appare l'artifact e come iterare.

---

### 3. MCP — Model Context Protocol

**Cos'è:** Protocollo open standard (creato da Anthropic) che permette ai modelli AI di connettersi a strumenti e dati esterni. Pensalo come "USB-C per l'AI" — un connettore universale.

**Architettura:**
- **Host** = l'app AI (Claude Desktop, IDE, ecc.)
- **Client** = gestisce la connessione
- **Server** = espone strumenti/dati (es. filesystem, database, API)

**Server MCP disponibili (esempi):**
- **Filesystem** → legge/scrive file locali
- **GitHub** → gestisce repo, issue, PR
- **Slack** → legge/invia messaggi
- **PostgreSQL/SQLite** → query su database
- **Google Drive** → accesso a documenti
- **Brave Search** → ricerca web
- **Puppeteer** → automazione browser

**Come si usa (in Claude Desktop):**
1. Installa Claude Desktop
2. Modifica il file di config (`claude_desktop_config.json`)
3. Aggiungi i server MCP che vuoi
4. Claude può ora accedere a quei tool durante la conversazione

**Roadmap 2026:** Transport scalability, comunicazione tra agenti, governance enterprise

**📌 Fonti:**
- https://modelcontextprotocol.io/specification/2025-11-25
- https://github.com/modelcontextprotocol/servers
- https://www.verdent.ai/guides/model-context-protocol-mcp-guide
- https://anthropic.skilljar.com/introduction-to-model-context-protocol
- http://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/

**💡 Demo suggerita:** Mostrare Claude Desktop con MCP filesystem che legge file dal computer e risponde a domande sul contenuto.

---

### 4. Claude in Excel / PowerPoint

**Cos'è:** Add-in ufficiale Anthropic per Microsoft 365. Integra Claude direttamente in Excel e PowerPoint.

**Funzionalità chiave (marzo 2026):**
- **Conversazione continua cross-app**: una singola conversazione attraverso Excel E PowerPoint, senza copia-incolla
- **Lettura dati Excel → PowerPoint**: Claude legge un foglio Excel e inserisce i dati direttamente in una presentazione
- **Claude Skills**: azioni riutilizzabili e automatizzate — salvabili e condivisibili nell'organizzazione
- **Starter Skills precaricate** per task comuni

**Come funziona:**
1. Installa l'add-in dal Microsoft AppSource
2. Si apre un pannello laterale in Excel/PowerPoint
3. Chatti con Claude che ha accesso ai dati del foglio/presentazione
4. Attiva "Let Claude work across files" nelle impostazioni (default ON per Pro/Max)

**Esempio pratico:** Un analista finanziario analizza dati in Excel → chiede a Claude di creare la presentazione → Claude legge i dati e genera le slide, tutto nella stessa conversazione.

**Disponibilità:** Pro, Max, Team, Enterprise. Supporta anche connessioni via AWS Bedrock e Google Vertex AI.

**📌 Fonti:**
- https://www.cnet.com/tech/services-and-software/claude-now-works-even-better-with-microsoft-excel-and-powerpoint/
- https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint
- https://support.claude.com/en/articles/13892150-work-across-excel-and-powerpoint
- https://marketplace.microsoft.com/en-us/product/saas/wa200009404

**💡 Demo suggerita:** Aprire un Excel con dati di vendita → chiedere a Claude di fare un'analisi → poi chiedere "ora crea una presentazione PowerPoint con i risultati".

---

### 5. Claude Free vs Pro — Confronto Marzo 2026

| Feature | Free | Pro ($20/mese) | Max ($100-200/mese) |
|---------|------|-----------------|---------------------|
| **Modelli** | Sonnet 4.5, Haiku 4.5 | + Opus 4.6 | + 20x uso Opus |
| **Messaggi** | ~20-40/sessione (reset 5h) | 5x più messaggi | 20x più messaggi |
| **Projects** | ✅ Base | ✅ Completo | ✅ Completo |
| **Artifacts** | ✅ | ✅ | ✅ |
| **Upload file** | ✅ | ✅ | ✅ |
| **Context window** | 200K | 200K | 200K |
| **Memory persistente** | ❌ | ✅ | ✅ |
| **Output estesi** | ❌ | ✅ | ✅ |
| **Early access** | ❌ | ✅ | ✅ |
| **Excel/PPT add-in** | ❌ | ✅ | ✅ |

**Novità marzo 2026:** Promozione bonus usage 13-27 marzo — fino a 2x uso nelle ore off-peak per tutti i piani.

**📌 Fonti:**
- https://freeacademy.ai/blog/claude-free-vs-pro-vs-max-comparison-2026
- https://claudelab.net/en/articles/claude-ai/claude-max-plan-complete-guide-2026
- https://devgent.org/en/claude-pricing-plans-en/
- https://www.gamsgo.com/blog/is-claude-ai-free

---

## PARTE 2: GEMINI (Google)

### 1. Google Personal Intelligence

**Cos'è:** Feature che connette Gemini alle tue app Google per risposte personalizzate. Gemini accede a Gmail, Photos, YouTube, Search e fornisce risposte basate sui TUOI dati.

**Come funziona:**
1. Vai nelle impostazioni Gemini → attiva Personal Intelligence
2. Scegli quali app connettere (Gmail, Photos, YouTube, Search)
3. Gemini ora può rispondere con contesto personale

**Cosa accede:**
- **Gmail** → email, prenotazioni, conferme, ricevute
- **Google Photos** → foto, ricordi, luoghi visitati
- **YouTube** → cronologia, preferenze, iscrizioni
- **Google Search** → cronologia ricerche

**Esempi pratici:**
- "Quando parte il mio volo?" → Gemini cerca nella tua email di conferma
- "Mostrami le foto della vacanza in Sicilia" → accede a Google Photos
- "Riassumi le email importanti di questa settimana" → analizza Gmail

**Privacy:** Connessione opzionale. Google afferma che i dati personali NON vengono usati per addestrare il modello.

**Disponibilità:**
- Lancio beta gennaio 2026 per AI Pro e AI Ultra (USA)
- **Marzo 2026: ora GRATIS per tutti gli utenti Gemini negli USA**
- Espansione in corso verso altri paesi

**📌 Fonti:**
- https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence/
- https://www.cnbc.com/2026/01/14/google-launches-personal-intelligence-in-gemini-app-challenging-apple.html
- https://blog.google/products-and-platforms/products/search/personal-intelligence-expansion/

**💡 Demo suggerita:** Mostrare Gemini con Personal Intelligence che risponde a "cosa ho in programma domani?" usando dati da Gmail/Calendar.

---

### 2. NotebookLM

**Cos'è:** Tool Google gratuito per analizzare documenti con AI. Carichi le tue fonti e NotebookLM diventa un esperto di quei contenuti. La killer feature: genera podcast audio ("Audio Overview") dai tuoi documenti.

**Come si usa — Tutorial step-by-step:**
1. Vai su https://notebooklm.google.com
2. Crea un nuovo notebook
3. **Carica fonti**: PDF, Google Docs, siti web (URL), testo incollato, YouTube video, Google Slides
4. Fino a 50 fonti per notebook, 500K parole per fonte
5. **Chat Q&A**: fai domande sui tuoi documenti → risposte con citazioni delle fonti
6. **Notebook Guide**: click a destra → genera sommari, FAQ, studio guide
7. **Audio Overview**: genera un "podcast" con 2 host AI che discutono il contenuto

**Formati audio (da settembre 2025):**
- Deep Dive (discussione approfondita tra 2 host)
- Briefing (sommario conciso)
- Lecture (formato lezione)
- Custom (puoi dare istruzioni specifiche)

**Workflow tipico:**
1. Raccogli fonti in una cartella
2. Carica tutto su NotebookLM
3. Genera sommari iniziali
4. Fai domande comparative
5. Genera Audio Overview per revisione
6. Estrai citazioni specifiche

**📌 Fonti:**
- https://yuv.ai/learn/notebooklm
- https://recast.studio/blog/how-to-create-notebook-lm-podcast
- https://blog.google/technology/ai/notebooklm-audio-overviews/
- https://www.marqo.ai/blog/how-to-create-an-ai-podcast-with-googles-notebooklm

**💡 Demo suggerita:** Caricare 2-3 articoli su un tema → generare un Audio Overview → far ascoltare 1 minuto del podcast generato.

---

### 3. Gemini Deep Research

**Cos'è:** Funzionalità agentica di Gemini che esplora autonomamente centinaia di siti web (e opzionalmente Gmail, Drive, Chat) per generare report di ricerca approfonditi in pochi minuti.

**Come funziona — Step by step:**
1. Vai su https://gemini.google.com/deepresearch
2. Inserisci la tua domanda/topic di ricerca
3. Deep Research genera un **piano di ricerca** suddiviso in punti
4. Puoi modificare il piano o approvarlo
5. L'agente esplora autonomamente il web (mostra il ragionamento in tempo reale)
6. Genera un **report multi-pagina** con fonti citate
7. Puoi trasformarlo in Canvas interattivo, audio overview, quiz

**Fasi:**
- **Pianificazione** → trasforma il prompt in piano strutturato
- **Ricerca** → esplora web + (opzionale) Gmail, Drive, Chat
- **Ragionamento** → mostra il processo di pensiero iterativo
- **Report** → documento completo con citazioni

**Cosa può fare con Workspace:**
- Leggere email per contesto (Gmail)
- Accedere a documenti interni (Drive)
- Analizzare conversazioni (Chat)
- Combinare dati web pubblici + dati interni

**Esempi di output:**
- Analisi competitiva con dati web + documenti interni
- Due diligence su un'azienda
- Report di mercato su un settore
- Confronto prodotti con tabelle comparative

**Modelli disponibili:** Gemini 2.5 Pro, 2.5 Flash, Gemini 3 (il più recente)

**Disponibilità:** Gratuito per provare su gemini.google.com/deepresearch

**📌 Fonti:**
- https://gemini.google/overview/deep-research/
- https://www.digitalapplied.com/blog/google-gemini-deep-research-guide
- https://ai.google.dev/gemini-api/docs/deep-research
- https://skywork.ai/blog/ai-agent/gemini-deep-research-2025/

**💡 Demo suggerita:** Chiedere "Confronta i 3 principali framework Python per data science nel 2026" → mostrare il piano, il processo di ricerca, e il report finale.

---

### 4. Gemini Drops — Marzo 2026

**Novità annunciate (27 marzo 2026):**

1. **Transfer AI chat history** — Puoi trasferire memorie e cronologia chat da ALTRI provider AI (es. ChatGPT) a Gemini in pochi click. Non devi ricominciare da zero.

2. **Personal Intelligence ora GRATIS** — Precedentemente solo per abbonati AI Pro/Ultra, ora disponibile gratuitamente per tutti gli utenti Gemini negli USA. Connette Gmail, Photos, YouTube.

3. **Gemini su Google TV** — Risposte visive e "deep dive narrati" direttamente sulla TV.

4. **Lyria 3 Pro** — Generazione musica: brani fino a 3 minuti, trasforma foto o pensieri in canzoni con testo. Per abbonati.

5. **Gemini Live upgrade (3.1 Flash Live)** — Conversazioni vocali più fluide, contesto 2x più lungo, dialogo più naturale senza doversi ripetere.

**Altre novità di contesto marzo 2026:**
- Gemini 3 Pro Preview deprecato il 9 marzo 2026
- Promozione bonus usage (come Claude, anche Google offre extra nelle off-peak)

**📌 Fonti:**
- https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/
- https://gemini.google/latest-news/
- https://ai.google.dev/gemini-api/docs/changelog

**💡 Demo suggerita:** Mostrare la feature di trasferimento chat history + Personal Intelligence gratuita come "perché Google vuole che tutti usino Gemini".

---

## RIEPILOGO PER SLIDE

| Tool | Killer Feature | Demo Consigliata |
|------|---------------|------------------|
| Claude Projects | Workspace con memoria + docs | Carica CSV, fai domande |
| Claude Artifacts | App interattive senza codice | Calcolatore/grafico live |
| MCP | AI connessa a tutto (USB-C per AI) | Claude Desktop + filesystem |
| Claude Excel/PPT | Conversazione cross-app | Excel → PowerPoint in un flow |
| Claude Free vs Pro | Free già potente, Pro per power user | Tabella comparativa |
| Personal Intelligence | Google ti conosce, Gemini ti aiuta | "Quando parte il mio volo?" |
| NotebookLM | Podcast AI dai tuoi documenti | Audio Overview live |
| Deep Research | Agente che fa ricerche per te | Report comparativo live |
| Gemini Drops Mar 2026 | Trasferimento chat + PI gratis | Import da ChatGPT |
