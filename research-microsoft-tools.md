# Research: Microsoft Copilot, Power Automate & Tool Emergenti

> Ultimo aggiornamento: Marzo 2026

---

## 1. MICROSOFT COPILOT

### 1.1 Copilot in Word
- **Drafting**: scrivi "Crea una proposta commerciale per [cliente]" → genera un documento completo con struttura, tono professionale
- **Rewriting**: seleziona un paragrafo → "riscrivi in tono più formale" o "semplifica"
- **Summarize**: apri un documento di 30 pagine → "riassumi i punti chiave" → bullet points
- **Agent Mode** (nov 2025): Copilot può editare e formattare contenuto autonomamente, non solo suggerire
- 📎 Fonte: [Microsoft Learn](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview) | [Thurrott - Ignite 2025](https://www.thurrott.com/a-i/329760/ignite-2025-microsoft-365-copilot-adds-new-word-excel-and-powerpoint-agents-and-more)

### 1.2 Copilot in Excel
- **Analisi dati**: "Quali sono i trend di vendita degli ultimi 6 mesi?" → genera grafici e insight
- **Formule**: "Calcola il margine lordo per ogni prodotto" → scrive la formula giusta
- **Creazione grafici**: "Mostrami un grafico a barre delle vendite per regione"
- **Python in Excel + Copilot**: può generare script Python per analisi avanzate
- **Agent Mode** (early access): può modificare dati e formattazione autonomamente

### 1.3 Copilot in PowerPoint
- **Crea presentazione**: "Crea una presentazione sul digital marketing in 10 slide" → genera outline + slide con layout
- **Da documento**: "Crea una presentazione basata su questo documento Word" → trasforma automaticamente
- **Design**: suggerisce layout, immagini, transizioni
- **Speaker notes**: genera note per il presentatore automaticamente
- **Agent Mode** (early access): editing intelligente di contenuto e formattazione

### 1.4 Copilot in Teams & Outlook
- **Teams**: riassume riunioni, genera action items, risponde a "cosa mi sono perso?"
- **Outlook**: draft email, riassumi thread lunghi, suggerisce risposte

---

## 2. POWER AUTOMATE + AI BUILDER

### Cos'è
Power Automate = piattaforma low-code per creare flussi automatizzati (workflow).
AI Builder = componente che aggiunge AI ai flussi (GPT, OCR, classificazione, estrazione dati).

### Esempi concreti di flussi AI-powered

| Flusso | Descrizione |
|--------|-------------|
| **Triage email** | Quando arriva un'email → AI Builder classifica il sentiment → se negativo, crea un ticket urgente in Teams |
| **Estrazione fatture** | Scansiona PDF fattura → AI Builder estrae importo, data, fornitore → salva in SharePoint/Excel |
| **Generazione risposte** | Cliente invia richiesta via form → AI Builder genera bozza di risposta con GPT → invia per approvazione |
| **Analisi rischi progetto** | Input: descrizione progetto → AI Builder (custom prompt) genera lista rischi potenziali → salva in Planner |
| **Traduzione automatica** | Documento caricato in SharePoint → Power Automate rileva lingua → AI Builder traduce → salva versione tradotta |

### Come funziona
1. **Trigger**: evento che avvia il flusso (email, file caricato, form compilato)
2. **Azione AI Builder**: usa un modello AI (prebuilt o custom prompt con GPT)
3. **Azione successiva**: salva risultato, invia notifica, crea record

📎 Fonte: [Microsoft Learn - AI Builder in Power Automate](https://learn.microsoft.com/en-us/ai-builder/use-in-flow-overview) | [TatvaSoft Blog](https://www.tatvasoft.com/blog/ai-builder-for-power-automate/)

---

## 3. COPILOT PRICING & ADOPTION (2025-2026)

### Piani e prezzi

| Piano | Prezzo | Target | Cosa include |
|-------|--------|--------|--------------|
| **Copilot Free** | Gratis | Tutti | Chat AI (GPT), ricerca web, creazione immagini limitata, accesso via browser/Bing |
| **Copilot Pro** | $20/mese | Individui | Priorità GPT-4 Turbo, 100 boost/giorno immagini, integrazione Word/Excel/PPT/Outlook (serve M365 Personal/Family) |
| **Copilot for M365** | $30/utente/mese | Business/Enterprise | Tutto Pro + accesso dati aziendali (Graph), Teams, agent building, sicurezza enterprise |

### Differenze chiave Free vs M365 Copilot

| Aspetto | Free | M365 Copilot ($30/mese) |
|---------|------|------------------------|
| Modello AI | GPT base | GPT-4 Turbo + modelli premium |
| Integrazione Office | ❌ No | ✅ Word, Excel, PPT, Outlook, Teams |
| Dati aziendali | ❌ Solo web | ✅ Accede a file SharePoint, email, calendario |
| Agent Builder | ❌ | ✅ Crea agenti custom |
| Sicurezza | Base | Enterprise-grade (compliance, DLP) |

### Adoption stats
- **Copilot Chat** (versione gratuita per tenant M365) disponibile per tutti i tenant business dal tardo 2025
- Market share tra AI assistant a pagamento: **11.5% a gennaio 2026** (in calo dal 18.8% di luglio 2025, per la crescita di Gemini)
- Microsoft continua a investire ma la competizione è forte

📎 Fonte: [DataStudios Pricing Breakdown](https://www.datastudios.org/post/microsoft-copilot-pricing-2025-full-breakdown-of-microsoft-365-business-and-enterprise-plans) | [Stackmatix Adoption Stats](https://www.stackmatix.com/blog/copilot-market-adoption-trends) | [eesel.ai Pricing](https://www.eesel.ai/blog/copilot-pricing)

---

## 4. TOOL EMERGENTI

### 4.1 Perplexity AI
**Cos'è**: Motore di ricerca AI che risponde a domande complesse con fonti citate.

**Come funziona**:
- Digiti una domanda → Perplexity cerca il web in tempo reale → sintetizza una risposta con link alle fonti
- **Pro Search**: ricerca multi-step, ragiona, fa follow-up automatici, usa modelli avanzati (GPT-4, Claude)
- **Quick Search**: risposta rapida con modello base (illimitate nel piano free)

**Limiti piano gratuito**:
- Quick Search: **illimitate**
- Pro Search: **3-5 al giorno** (le fonti variano tra 3 e 5)
- Upload file: ~3 file/giorno
- Spaces (workspace persistenti): accesso limitato

**Pro** ($20/mese): 300+ Pro Search/giorno, upload illimitati, accesso a tutti i modelli

**Esempi di uso avanzato**:
- "Confronta i pricing di AWS, Azure e GCP per un'app con 10K utenti"
- "Quali sono le ultime ricerche su [argomento] pubblicate nel 2025?"
- Carica un PDF e chiedi "riassumi e trova le criticità"

📎 Fonte: [Perplexity Help Center](https://www.perplexity.ai/help-center/en/articles/10352901-what-is-perplexity-pro) | [eesel.ai Perplexity Pricing](https://www.eesel.ai/blog/perplexity-pricing) | [familypro.io](https://familypro.io/en/blog/how-much-does-perplexity-cost)

---

### 4.2 Cursor
**Cos'è**: Editor di codice AI-native (fork di VS Code) che capisce l'intero progetto.

**Perché è rivoluzionario**:
- Non suggerisce solo singole righe → **capisce il contesto del progetto intero** (file multipli, dipendenze)
- **Agent Mode**: gli dici "aggiungi l'autenticazione" → legge il progetto, modifica più file, testa
- **Tab completions**: autocompletamento predittivo (Supermaven engine) — il più veloce e accurato disponibile
- **Chat inline**: seleziona codice → chiedi spiegazioni o modifiche in linguaggio naturale
- **Multi-file editing**: può refactorare codice attraverso decine di file simultaneamente

**Pricing** (post giugno 2025 — modello a crediti):
- **Hobby**: gratuito, request limitate
- **Pro**: $20/mese, include pool di request premium
- **Business**: $40/mese, admin controls, usage analytics

**Modelli supportati**: Claude Sonnet/Opus, GPT-4, Gemini, e altri

📎 Fonte: [cursor.com/pricing](https://cursor.com/pricing) | [cursor.com/docs/models-and-pricing](https://cursor.com/docs/models-and-pricing) | [NxCode Review](https://www.nxcode.io/resources/news/cursor-review-2026)

---

### 4.3 v0.dev (by Vercel)
**Cos'è**: Generatore AI di interfacce utente — descrivi cosa vuoi → ottieni componenti React/Tailwind pronti.

**Come funziona**:
1. Scrivi un prompt: "Dashboard per gestione ordini con tabella, filtri e grafici"
2. v0 genera componenti React + Tailwind CSS funzionanti
3. Itera via chat: "aggiungi dark mode" / "cambia il layout della sidebar"
4. Esporta nel tuo progetto con un click

**Perché è notevole**:
- Riduce il tempo di sviluppo UI dell'80%+
- Supporta Next.js, React, shadcn/ui
- Può generare da screenshot/mockup (non solo testo)
- Integrazione con Vercel per deploy istantaneo

**Esempi**:
- "Crea un form di registrazione con validazione"
- "Landing page per un SaaS con hero, pricing, testimonials"
- "Componente calendario con drag and drop"

**Pricing**: Free credits per nuovi utenti, poi piani a pagamento

📎 Fonte: [v0.app](https://v0.app/) | [Vercel Academy](https://vercel.com/academy/ai-sdk/ui-with-v0) | [Vercel Blog - How to prompt v0](https://vercel.com/blog/how-to-prompt-v0)

---

### 4.4 Altri tool emergenti

#### Bolt.new (by StackBlitz)
- **Cosa fa**: Ambiente di sviluppo nel browser + AI. Descrivi un'app → genera codice full-stack → preview live
- **Per chi**: Prototipazione rapida, non-developer ambiziosi
- **Limite**: Qualità codice non sempre production-ready
- **Free tier**: Sì, per prototyping base

#### Lovable.dev (ex GPT Engineer)
- **Cosa fa**: AI app builder che genera codice full-stack production-ready e lo sincronizza con GitHub
- **Per chi**: Il più accessibile — interfaccia chat, risolve errori automaticamente, modifiche UI in linguaggio naturale
- **Punto di forza**: Esperienza utente semplificata, ideale per non-developer
- **Limite**: Troppo semplificato per progetti professionali complessi

#### Replit Agent
- **Cosa fa**: Agente AI autonomo che genera app full-stack, le testa e le deploya
- **Per chi**: Developer e non-developer, include hosting e database integrati
- **Agent 4** (ultimo): generazione autonoma completa con testing
- **Punto di forza**: Tutto integrato (code, hosting, DB, deploy) — zero DevOps
- **Pricing**: Free tier limitato, Agent richiede piano a pagamento

📎 Fonte: [Flatlogic Comparison](https://flatlogic.com/blog/lovable-vs-bolt-vs-replit-which-ai-app-coding-tool-is-best/) | [Replit vs Bolt](https://replit.com/discover/replit-vs-bolt) | [getmocha.com Best AI App Builder 2026](https://getmocha.com/blog/best-ai-app-builder-2026/)

---

## Tabella riepilogativa tool emergenti

| Tool | Tipo | Per chi | Prezzo base | Superpower |
|------|------|---------|-------------|------------|
| **Perplexity** | Ricerca AI | Tutti | Free (3-5 Pro/giorno) | Risposte con fonti citate |
| **Cursor** | Editor codice AI | Developer | Free → $20/mese | Capisce l'intero progetto |
| **v0.dev** | UI Generator | Designer/Dev | Free credits | Da prompt a React in secondi |
| **Bolt.new** | App builder browser | Prototipisti | Free tier | Preview live istantanea |
| **Lovable** | App builder no-code | Non-developer | Free limitato | Il più accessibile |
| **Replit Agent** | IDE + AI + hosting | Tutti | Free → paid | Zero DevOps, tutto integrato |
