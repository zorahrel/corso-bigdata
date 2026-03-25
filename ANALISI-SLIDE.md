# Analisi & Proposta di Miglioramento — Corso Big Data & AI
**Docente:** Attilio Cianci | **Data analisi:** 25 Marzo 2026 | **Pubblico:** Manager, professionisti, team aziendali

---

## Tabella Riepilogativa

| Lezione | Titolo | N. Slide | Valutazione | Note sintetica |
|---------|--------|----------|-------------|----------------|
| 01 | Cos'è davvero l'AI oggi | 26 | ⭐⭐⭐⭐ (4/5) | Buona struttura. Manca struttura corso e slide costi. Icebreaker fuori posto. |
| 02 | Come funzionano i modelli generativi | 31 | ⭐⭐⭐½ (3.5/5) | Troppo tecnico per manager. Top-p/Top-k da rimuovere. Ridondanza con L01. |
| 03 | Prompting e context engineering | 32 | ⭐⭐⭐⭐ (4/5) | Ottimo framework. Troppo pesante (32 slide). Un meme di troppo. |
| 04 | OpenAI: ChatGPT, Playground e API | 27 | ⭐⭐⭐½ (3.5/5) | Manca recap e slide chiusura. Canvas/Memory solo descritti, no demo. |
| 05 | Claude: Projects, Artifacts & MCP | 26 | ⭐⭐⭐⭐ (4/5) | Claude Code forse troppo tech. MCP per non-developer va approfondito. |
| 06 | Power Automate & Tool Emergenti | 26 | ⭐⭐⭐½ (3.5/5) | Eco-map ripetitive. Cursor/v0 troppo superficiali. No slide budget tool. |
| 07 | Agenti AI + Zapier + n8n | 28 | ⭐⭐⭐⭐ (4/5) | Build live eccellente. Lista 15 use case piatta. |
| 08 | AI per la Produttività | 26 | ⭐⭐⭐ (3/5) | Ridondanze con L06/L02/L03. Workshop senza template canvas. |
| 09 | AI e Azienda: Implementazione | 25 | ⭐⭐⭐⭐ (4/5) | Case study ottimi. GDPR/AI Act superficiali. Manca calcolo ROI. |
| 10 | Progetto Finale & Recap | 20 | ⭐⭐⭐½ (3.5/5) | Leggera (3h presentazioni). AI Act troppo breve. Chiusura emotiva ottima. |

---

## Lezione 01 — "Cos'è davvero l'AI oggi" 🔴 OGGI ORE 9:00

**Slide attuali:** 26 | **Valutazione:** 4/5

### Cosa funziona bene
- Struttura intro → teoria → limiti → demo → hands-on → recap: corretta
- 3 demo con materiale concreto (bias, multimodale, reasoning)
- Icebreaker LinkedIn reale e ingaggiante
- Dati aggiornati 2026

### Problemi identificati
1. **Ordine sbagliato** — L'icebreaker (slide 6) è messo DOPO l'agenda. Dovrebbe rompere il ghiaccio prima dell'agenda stessa.
2. **Manca la visione del corso** — Non esiste una slide che mostri le 10 lezioni e il percorso completo. I partecipanti non sanno cosa li aspetta.
3. **Mancano i prezzi** — Manager e professionisti vogliono sapere quanto costa l'AI. È la prima domanda pratica. Zero slide su costi.
4. **Manca il "why you"** — Nessuna slide che dica "cosa cambierà per voi dopo questo corso". Il pubblico non è tecnico, deve capire il beneficio concreto.
5. **Slide contatti troppo presto** — La slide 4 (contatti) blocca il ritmo subito dopo il docente. Meglio in fondo.

### 🔴 Modifiche urgenti (PRIMA delle 9:00)

**Modifica 1** — Spostare icebreaker (slide 6 attuale) PRIMA dell'agenda (diventa slide 3). Nuovo ordine: Title → Chi sono → Icebreaker → Agenda → Patto d'aula → ...

**Modifica 2** — Dopo la slide Title (slide 1), aggiungere una nuova slide di tipo `concept` con heading `"Cosa porti a casa"` e contenuto:

```
5 cose che saprai fare dopo questo corso:
🔍 Scegliere il tool AI giusto per ogni situazione
✍️ Scrivere prompt che producono output professionali
⚡ Automatizzare almeno 3 processi del tuo lavoro
🏢 Proporre e guidare l'adozione AI nella tua azienda
🔒 Usare l'AI in modo critico, consapevole e sicuro
```

**Modifica 3** — Dopo la slide "Modelli principali 2026" (slide 8 attuale), aggiungere una slide di tipo `custom` layout `compare-table` con heading `"Quanto costa l'AI"`:

| Tool | Piano | Costo | Per chi |
|------|-------|-------|---------|
| ChatGPT Free | Gratuito | €0 | Scoperta |
| ChatGPT Plus | GPT-4o + tutto | €20/mese | Uso quotidiano |
| Claude Pro | Sonnet/Opus | €20/mese | Scrittura/codice |
| Gemini Advanced | 1M context | €22/mese | Integrazione Google |
| Microsoft Copilot | Office 365 | +€24/utente/mese | Ecosistema MS |
| API (sviluppatori) | Pay-per-use | da €0.15/1M token | Automazioni |

Footer: "Un abbonamento da €20/mese = l'equivalente di UN'ORA del tuo tempo. Il ROI si raggiunge in minuti."

**Modifica 4** — Spostare la slide "Trovami qui" (contatti, slide 4 attuale) DOPO la slide Recap (diventa penultima prima del meme finale).

### Modifiche non urgenti
- Aggiungere dopo slide agenda una slide tipo `stats` con heading `"La struttura del corso"` che mostri i 4 blocchi: Fondamenta (01-02), Interazione (03), Piattaforme (04-06), Automazione (07), Produttività (08-09), Progetto finale (10).
- Slide 18 (meme "trust AI") è debole — sostituire con un esempio concreto del caso legale USA (avvocato che cita casi inventati da ChatGPT) come slide `concept` invece di meme.

---

## Lezione 02 — "Come funzionano i modelli generativi"

**Slide attuali:** 31 | **Valutazione:** 3.5/5

### Problemi identificati
1. **Troppo tecnica per manager** — Slide 16 "Top-p e Top-k" con distribution bar è da rimuovere. Il pubblico non ha bisogno di capire la matematica interna.
2. **Ridondanza con L01** — Training cutoff (slide 24) è già spiegato in L01 slide 16. Semplificare o rimuovere.
3. **RLHF è buono ma l'analogia del cane è infantile** per manager senior — sostituire con un esempio più professionale.
4. **31 slide** è il massimo accettabile. Rimuovendo 2-3 slide si respira di più.

### Modifiche proposte
- **Rimuovere** slide 16 "Top-p e Top-k" — troppo tecnica, non aggiunge valore pratico al pubblico target.
- **Semplificare** slide 24 "Training cutoff" — già trattata in L01. Ridurre a 3 bullet points, togliere il visual HTML.
- **Migliorare** slide 12 (RLHF) — cambiare l'analogia del cane con: "Come funziona una peer review in azienda: qualcuno propone, i colleghi valutano, si migliora. L'RLHF è la stessa cosa applicata all'AI."
- **Aggiungere** dopo slide 25 "Quando fidarsi" una slide tipo `concept` heading `"Il tuo framework decisionale"` con un flowchart semplice: "Prima di pubblicare output AI → È un fatto verificabile? → Verifica. È un'analisi su dati forniti? → Usa con fiducia. È una citazione specifica? → Cerca la fonte originale."

---

## Lezione 03 — "Prompting e context engineering"

**Slide attuali:** 32 | **Valutazione:** 4/5

### Problemi identificati
1. **32 slide è pesante** — La lezione più densa del corso. Rischio di stanchezza dopo L01 e L02.
2. **Meme doppio sullo stesso tema** — Slide 13 ("47esima versione del prompt") e slide 23 ("prompt vs context engineering") sono entrambi meme leggeri sullo stesso argomento. Tenerne uno.
3. **Statistiche senza fonti** — Slide 11 cita "60% accuracy in più con CoT" ma non specifica la fonte nel codice (nessun link).
4. **Manca template settoriale** — Il pubblico è manager/professionisti. Manca una slide pratica "prompt template per il tuo ruolo" con esempi per HR, Finance, Marketing, Sales.

### Modifiche proposte
- **Rimuovere** slide 23 (meme "prompt vs context engineering") — è ridondante col meme precedente.
- **Aggiungere** dopo slide 30 (Sistema prompt aziendale) una nuova slide `concept` heading `"Template prompt per il tuo ruolo"`:
  - **HR**: "Sei un esperto HR. Analizza questa candidatura [CV]. Valuta: competenze chiave, gap rispetto al job description, domande da fare in colloquio. Output: tabella con rating 1-5 per ogni criterio."
  - **Finance**: "Sei un CFO. Analizza questi dati [dati Q1]. Identifica: trend anomali, KPI fuori target, azioni correttive. Output: executive summary 150 parole + 3 bullet action."
  - **Marketing**: "Sei un CMO. Scrivi [tipo contenuto] per [target] su [argomento]. Tono: [brand voice]. Obiettivo: [conversione/awareness/retention]. Lunghezza: [N parole]."
- **Aggiungere fonte** alla slide 11 stats: "(Stanford / DeepMind, 2022)" nelle label delle statistiche.

---

## Lezione 04 — "OpenAI: ChatGPT, Playground & API"

**Slide attuali:** 27 | **Valutazione:** 3.5/5

### Problemi identificati
1. **Manca il recap** — L'unica lezione del blocco Piattaforme senza una slide `recap`. Il file termina con le risorse.
2. **Manca la slide di chiusura/anteprima** — Nessuna slide "Prossima lezione" nel file.
3. **Canvas e Memory solo descritte** — Le slide 7 e 8 (Canvas, Memory) descrivono le feature senza mostrare un caso d'uso pratico lavorativo. I manager vogliono "e quindi cosa ci faccio io?"
4. **Demo troppo generica** — Demo slide 24 (Playground parametri) mostra solo "scrivi uno slogan" — poco professionale per un pubblico aziendale.

### Modifiche proposte
- **Aggiungere** dopo slide 27 (risorse) una slide `recap` heading "Recap" con items:
  - "Ecosistema OpenAI: ChatGPT, Playground, API, Assistants, Sora"
  - "GPTs custom: istruzioni + knowledge + tool, zero codice"
  - "Playground: laboratorio per testare modelli e parametri"
  - "Function calling: l'AI decide quale azione eseguire, il codice la esegue"
  - "Rischi aziendali: privacy, GDPR, allucinazioni — revisione umana sempre"
- **Aggiungere** slide `title` "Prossima lezione" con subtitle "Lezione 05 · Claude: Projects, Artifacts & MCP"
- **Migliorare** slide 7 (Canvas) — aggiungere in `content`: "**Use case Manager**: condividi il link Canvas con il tuo team. Modificate insieme la bozza di proposta commerciale in tempo reale — come Google Docs, ma con l'AI come co-autore."
- **Migliorare** slide 8 (Memory) — aggiungere esempio: "ChatGPT sa che sei il Marketing Manager di un'azienda B2B nel settore manifatturiero. Tutte le richieste future useranno automaticamente questo contesto."
- **Migliorare** demo Playground (slide 24) — cambiare task demo da "slogan caffe" a task aziendale: "Sei il responsabile comunicazione di una PMI manifatturiera. Scrivi l'intro di un comunicato stampa per un nuovo prodotto. Mostra il confronto temperature=0.2 vs 1.2."

---

## Lezione 05 — "Claude: Projects, Artifacts & MCP"

**Slide attuali:** 26 | **Valutazione:** 4/5

### Problemi identificati
1. **Claude Code troppo tecnico** — Slide 17 (Claude Code) con terminale e comandi è utile ma il framing è troppo "da developer". Il pubblico è manager.
2. **Slide 11 (benchmark)** — Percentuali come "89.4% MMLU Pro" non dicono nulla a un manager. Il benchmarking è interessante MA serve traduzione pratica.
3. **MCP per non-developer troppo astratto** — Il concetto USB-C è ottimo, ma mancano esempi di MCP usabili senza codice (Cursor come app desktop, n8n come interfaccia visuale).
4. **Meme slide 3** — "Utenti Claude vs ChatGPT" è un po' snob/competitivo. Da smorzare.

### Modifiche proposte
- **Migliorare** slide 17 (Claude Code) — cambiare heading in `"Claude Code: L'AI che lavora per te in autonomia"` e aggiungere in content: "**Per manager e professionisti**: Claude Code non è solo per programmatori. Se lavorate con Cursor IDE o avete un team tech, potete descrivere cosa volete costruire in italiano — Claude Code scrive il codice, testa e consegna. Come avere un developer a disposizione 24/7."
- **Migliorare** slide 11 (benchmark) — aggiungere una riga "Cosa significa per te" sotto ogni numero, es: "Scrittura #1 → scegli Claude per email, report, presentazioni."
- **Aggiungere** dopo slide 13 (Anthropic ha creato lo standard MCP) una slide `concept` heading `"MCP senza codice: come si usa oggi"` con:
  - "Con **n8n** (drag & drop): configura un MCP server in 10 minuti senza scrivere una riga di codice"
  - "Con **Cursor** (editor AI): Claude legge la cartella del tuo progetto automaticamente"
  - "Con **Claude.ai Desktop**: accede ai tuoi file locali con il permesso filesystem MCP"
  - Footer: "MCP non richiede di essere developer — richiede di capire COSA vuoi collegare."
- **Cambiare** meme slide 3 — da "Utenti Claude vs ChatGPT" a qualcosa di più inclusivo e neutro, es: `"Quando scopri che Claude ricorda il tuo stile di scrittura da una sessione all'altra"`.

---

## Lezione 06 — "Power Automate & Tool Emergenti"

**Slide attuali:** 26 | **Valutazione:** 3.5/5

### Problemi identificati
1. **Eco-map duplicate** — Slide 4 (Microsoft eco-map) e slide 11 (Google eco-map) hanno lo stesso layout `eco-map` una dopo l'altra (con L05 in mezzo). Visivamente ripetitivo.
2. **Cursor e v0 troppo superficiali** — 3 bullet points ciascuno non bastano per tool che il pubblico dovrebbe provare. Né demo, né hands-on dedicato.
3. **Demo NotebookLM riusa documenti di L05** — La lezione 06 demo usa gli stessi 3 documenti (report AI Italia, survey PMI, trend globali) della demo Claude Projects di L05. Confusione se frequentano entrambe.
4. **Manca una slide su budget tipico aziendale** — Tutti questi tool hanno un costo. I manager vogliono sapere quanto mettere in budget.

### Modifiche proposte
- **Sostituire** l'eco-map Google (slide 11) con una slide `custom` layout `compare-table` heading `"Google vs Microsoft AI: quale scegliere"`:

| Criterio | Google Workspace AI | Microsoft Copilot |
|----------|--------------------|--------------------|
| Stack base | Google Docs/Gmail/Sheets | Office 365/Teams |
| Prezzo aggiuntivo | +€22/utente/mese | +€24/utente/mese |
| Forza | Contesto lungo 1M, multimodale | Integrazione profonda Office |
| Per chi | PMI Google-native, startup | Enterprise Microsoft-heavy |
| GDPR | Data in EU disponibile | Data in EU disponibile |

- **Sostituire** slide 17 (Cursor) e 18 (v0) con una singola slide `custom` layout `feature-grid` heading `"Tool emergenti per professionisti"` con: Cursor (editor AI per chi ha un team dev), v0 (prototipi UI in 30 secondi), Gamma (presentazioni da testo), Notion AI (knowledge aziendale), Perplexity (ricerca con fonti), ElevenLabs (voce AI branded).
- **Aggiungere** prima del recap una slide `concept` heading `"Budget tool AI: cosa mettere in previsione"`:
  - PMI 10-50 persone: €300-600/mese per team (abbonamenti base + automazioni)
  - PMI 50-200 persone: €2.000-5.000/mese (tool enterprise + supporto)
  - Enterprise: €10.000+/mese (Copilot M365, custom GPT, API)
  - "Regola: il tool AI deve pagarsi da solo in meno di 30 giorni di uso — altrimenti non è il tool giusto."
- **Usare documenti diversi** per la demo NotebookLM — usare i documenti di strategia/competitor del demoMaterial interno di L06 invece dei report AI Italia già usati in L05.

---

## Lezione 07 — "Agenti AI + Zapier + n8n"

**Slide attuali:** 28 | **Valutazione:** 4/5

### Problemi identificati
1. **Slide 22 "15 use case"** — È una griglia di emoji e titoli senza descrizione. Visivamente ok ma non comunica valore ai manager che non sanno cosa sono questi processi.
2. **Statistiche mercato agenti (slide 9)** — "$7B → $93B" è impressionante ma non contestualizzato. Che significa per un manager italiano?
3. **Meme slide 3** — "AI agent does something unexpected" è il terzo meme consecutivo nelle prime 3 slide di quasi ogni lezione. Schema prevedibile.

### Modifiche proposte
- **Migliorare** slide 22 — convertire da layout `usecase-grid` a `feature-grid` con almeno 6 use case dettagliati con descrizione, togliendo quelli troppo tecnici (web scraping, compliance check). Tenere: Email triage, Lead scoring, Invoice processing, Onboarding automatico, Meeting notes → task, Report settimanali AI.
- **Migliorare** slide 9 — aggiungere footer: "Per un'azienda media: implementare 3 agenti AI entro il 2026 può liberare 2-3 FTE (Full Time Equivalent). Non si tratta di licenziare: si tratta di far fare alle persone il lavoro a più alto valore."
- **Spostare** il meme slide 3 verso la metà della lezione (dopo la parte teorica sugli agenti, prima di Zapier) per variare il ritmo invece di aprire sempre con meme.

---

## Lezione 08 — "AI per la Produttività"

**Slide attuali:** 26 | **Valutazione:** 3/5

### Problemi identificati (più gravi)
1. **Ridondanze pesanti con altre lezioni:**
   - Slide 9 "AI per la Ricerca" (Perplexity, NotebookLM) → già in L06 slide 16 e 13
   - Slide 14 "RAG su Knowledge Base" → già in L02 slide 19 e L03 slide 21
   - Slide 8 "AI per Riunioni" → superficiale, solo 3 tool in 4 righe
2. **Workshop senza canvas** — "Mappa il tuo stack AI ideale" è una buona idea ma manca un template fisico/digitale da compilare. I partecipanti non sanno come strutturare il lavoro.
3. **Il paradosso del ROI** (slide 19) è la slide più potente della lezione ma è sepolta tra contenuti già visti.
4. **Manca focus su Sales/Revenue** — Per manager e professionisti, la domanda è "come l'AI mi aiuta a vendere di più / fidelizzare i clienti?". Non c'è neanche una slide su AI per sales e customer success.

### Modifiche proposte
- **Rimuovere** slide 9 (AI per la Ricerca) — già coperto in L06. Sostituire con slide `concept` heading `"AI per Sales & Customer Success"`:
  - Preparazione call: "Analizza il sito del cliente + LinkedIn del contatto → genera brief 3 punti chiave + domande da fare"
  - Proposta personalizzata: "Dal template standard alla proposta su misura in 5 minuti"
  - Follow-up automatico: "Dopo il meeting, AI genera summary + next steps via Zapier"
  - Churn prevention: "AI analizza segnali di disengagement e avvisa prima che il cliente se ne vada"
- **Rimuovere** slide 14 (RAG su Knowledge Base) — già in L02 e L03. Sostituire con slide `concept` heading `"Il tuo stack AI in 5 passi"` con un framework implementazione: 1) Audit task (cosa fai ogni giorno), 2) Quick win (il primo task da automatizzare), 3) Strumenti (max 3 tool), 4) Integrazione (come si parlano), 5) Misura (quanto tempo risparmi).
- **Spostare** slide 19 (Paradosso del ROI) come slide 5 o 6, dopo gli archetipi — è la slide più provocatoria e dovrebbe aprire la conversazione subito.
- **Aggiungere** prima del workshop un template canvas scaricabile: una tabella con colonne "Task", "Frequenza", "Tempo attuale", "Tool AI candidato", "Tempo previsto", "Risparmio stimato". Aggiungere come `demo` con materiale allegato o come link Google Sheet.

---

## Lezione 09 — "AI e Azienda: Implementazione"

**Slide attuali:** 25 | **Valutazione:** 4/5

### Problemi identificati
1. **Privacy/GDPR superficiale** — Slide 8 è la slide più critica per un'azienda che vuole adottare AI ma ha solo 4 bullet points. Per un pubblico manageriale, questo è un rischio legale reale.
2. **AI Act non approfondito** — Citato appena nella lezione 10. Per compliance aziendale serve almeno 2 slide dedicate QUI, nella lezione sull'implementazione.
3. **Manca calcolo ROI pratico** — Il framework "baseline → pilota → misura → scala" è corretto ma troppo astratto. Serve un esempio numerico.
4. **Slide 17 meme** — Placement strano: viene dopo "AI-washing" e prima del quote. Rompe il filo narrativo.

### Modifiche proposte
- **Espandere** slide 8 (Privacy e GDPR) da 1 a 2 slide:
  - Slide 8a: "Privacy: le 3 regole d'oro" — 1) Mai dati personali identificativi in chat AI senza DPA, 2) Anonimizzare prima di inviare, 3) Conservazione: quanto rimane? (OpenAI: 30gg per API, ChatGPT: a tempo indeterminato se non disattivato)
  - Slide 8b: "GDPR e AI Act: cosa serve oggi" — Base giuridica per trattamento, informativa da aggiornare, registro trattamenti, valutazione impatto (DPIA) per AI ad alto rischio
- **Aggiungere** dopo slide 9 (AI Policy Template) una slide `concept` heading `"Calcolare il ROI: un esempio reale"`:
  - Team di 20 persone, ogni persona gestisce 30 email/giorno a 4 min/email = 40h/giorno team
  - Con AI triage + bozza automatica: 2 min/email = 20h/giorno risparmiate
  - A €35/h costo medio: €700/giorno → €15.400/mese di valore liberato
  - Costo tool AI per 20 persone: ~€400/mese
  - ROI mensile: +3.750%
  - "Questo è il caso base più semplice. Il vero ROI è quando le 20h liberate producono fatturato."
- **Spostare** meme slide 17 dopo il case study del fallimento (slide 21) invece che tra "AI-washing" e il quote.

---

## Lezione 10 — "Progetto Finale & Recap"

**Slide attuali:** 20 | **Valutazione:** 3.5/5

### Problemi identificati
1. **AI Act troppo breve** — Slide 12 ha solo 4 bullet points su un argomento che impatterà ogni azienda presente in aula. Dopo 3h di presentazioni c'è tempo per approfondire.
2. **Mancano nuovi ruoli AI** — I partecipanti si chiederanno "si parla di AI che sostituisce lavoro — quali nuovi lavori crea?" Non c'è nessuna slide su nuove professioni (AI trainer, Prompt engineer, AI ops).
3. **Slide 10 meme** ("when your project works") è simpatica ma il meme con il gif ripetuto (giphy 3ohzdIuqJoo8QdKlnW) è già usato in mood simile altrove nel corso.
4. **"Come restare aggiornati" solo newsletter** — Mancano community italiane e risorse in italiano specifiche per il pubblico presente.

### Modifiche proposte
- **Espandere** slide 12 (AI Act) — aggiungere una tabella di classificazione rischi con esempi concreti:
  - 🟢 Rischio minimo: chatbot FAQ, spam filter, raccomandazioni prodotto → nessun obbligo speciale
  - 🟡 Rischio limitato: generazione contenuti AI (devi dichiararlo), deepfake → obbligo trasparenza
  - 🔴 Rischio alto: AI per assunzioni, scoring creditizio, accesso servizi pubblici → DPIA obbligatoria, audit, registro
  - ⛔ Inaccettabile: social scoring, manipolazione subliminale → VIETATO
- **Aggiungere** dopo slide 13 ("come restare aggiornati") una slide `concept` heading `"I nuovi ruoli dell'era AI"`:
  - **AI Adoption Manager**: gestisce l'introduzione dell'AI in azienda. Ruolo ibrido HR + Tech.
  - **Prompt Engineer** (enterprise): mantiene e ottimizza la libreria di prompt aziendali.
  - **AI Ethics Officer**: valuta impatto bias, privacy, conformità normativa.
  - **Human-in-the-Loop Reviewer**: revisore specializzato per output AI in settori critici (legale, medico, finance).
  - "Non è fantascienza. Queste posizioni esistono già nelle Fortune 500 — e arrivano nelle PMI tra 2-3 anni."
- **Aggiungere** in "Come restare aggiornati" risorse italiane: AI Breakfast Italia (community), ilSole24Ore sezione AI, LinkedIn newsletter in italiano.

---

## Priorità complessiva di intervento

### 🔴 URGENTE (prima delle 9:00 di oggi — Lezione 01)
1. Spostare icebreaker (slide 6) prima dell'agenda (nuova posizione: slide 3)
2. Aggiungere slide "Cosa porti a casa" dopo il title (slide 2)
3. Aggiungere slide "Quanto costa l'AI" dopo slide "Modelli principali 2026"
4. Spostare slide contatti (attuale slide 4) verso la fine della lezione

### 🟡 ALTA PRIORITÀ (prima delle lezioni del blocco PIATTAFORME — L04-05-06)
5. L04: Aggiungere recap + slide prossima lezione
6. L03: Aggiungere template prompt per ruolo (HR, Finance, Marketing, Sales)
7. L06: Sostituire eco-map Google con tabella compare Google vs Microsoft
8. L06: Aggiungere slide budget tool AI

### 🟢 MEDIA PRIORITÀ (prima delle lezioni AUTOMAZIONE e ADOZIONE — L07-09)
9. L08: Sostituire slide RAG e Ricerca (ridondanti) con slide AI per Sales
10. L09: Espandere Privacy/GDPR da 1 a 2 slide
11. L09: Aggiungere calcolo ROI con esempio numerico concreto
12. L07: Dettagliare use case aziendali (feature-grid invece di griglia emoji)

### ⚪ BASSA PRIORITÀ (migliorie estetiche e ridondanze minori)
13. L02: Rimuovere slide Top-p/Top-k
14. L10: Aggiungere nuovi ruoli AI + espandere AI Act
15. L05: Reframe Claude Code per audience non-developer
16. L08: Aggiungere template canvas per workshop stack AI

---

## Note finali

Il corso ha una **struttura solida** e materiali di demo **eccezionalmente dettagliati** (policy aziendale fittizia per L04, report mercato AI per L05, email di test per L07). Questo è il punto di forza principale.

Le aree di miglioramento principali sono:
1. **Ridondanza tra lezioni** (RAG, cutoff, ricerca) — nel corso di 10 lezioni, alcuni concetti vengono ripetuti invece di essere approfonditi
2. **Mancanza di concretezza economica** — costi, ROI, budget: il pubblico manageriale ha bisogno di numeri
3. **Meme overuse nelle slide iniziali** — 8 lezioni su 10 aprono la terza o quarta slide con un meme GIF. Variare il ritmo aumenta l'impatto.
4. **Template e canvas per i workshop** — gli esercizi pratici sono ottimi ma mancano di scaffolding strutturato

Il corso è **pronto per l'aula** con le 4 modifiche urgenti. Le altre ottimizzazioni possono essere distribuite nel corso delle settimane.
