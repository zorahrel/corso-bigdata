# 🎯 Risorse Prompt Engineering — Da Email Claude Team

> Fonti ufficiali Anthropic ricevute via email il 27 marzo 2026.  
> Usate come base per arricchire le lezioni del corso Big Data & AI.

---

## 📖 Documentazione Ufficiale

### Best Practices Claude 4 (Documentazione primaria)
**URL:** https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices  
**Cosa contiene:**
- Principi generali: essere chiari, diretti e specifici
- Come usare il contesto per migliorare le risposte
- Few-shot prompting: come fornire esempi efficaci
- Struttura con XML tags (`<instructions>`, `<context>`, `<examples>`)
- Come dare un ruolo al modello (system prompt)
- Long context prompting (20k+ token)
- Controllo del formato output (markdown, LaTeX, JSON)
- Tool use avanzato
- Agentic systems

**Concetti chiave da citare in lezione:**
- "Golden rule: mostra il prompt a un collega con minimal context — se è confuso, Claude lo sarà pure"
- Mettere i documenti lunghi **prima** della query (migliora performance fino al 30%)
- XML tags riducono ambiguità nei prompt complessi

---

## 🎓 Corso Video Ufficiale

### Building with the Claude API — Anthropic Academy
**URL:** https://anthropic.skilljar.com/claude-with-the-anthropic-api/287745  
**Livello:** Sviluppatori (Python)  
**Cosa copre:**
- API key setup e autenticazione
- Conversazioni single e multi-turn
- System prompts e temperature
- **Prompt engineering**: chiarezza, XML tags, esempi
- Tool use (funzioni esterne)
- RAG (Retrieval Augmented Generation)
- Extended thinking
- Prompt caching
- Model Context Protocol (MCP)
- Claude Code + Computer Use
- Agent patterns (parallelizzazione, chaining, routing)

**Curriculum completo disponibile gratuitamente** (richiede registrazione)

---

## ⚡ Quickstarts — Progetti Pronti

### Claude Quickstarts (GitHub)
**URL:** https://github.com/anthropics/claude-quickstarts  
**Progetti disponibili:**
| Progetto | Descrizione |
|----------|-------------|
| Customer Support Agent | AI che gestisce supporto clienti con knowledge base |
| Financial Data Analyst | Analisi dati finanziari via chat + visualizzazioni |
| Computer Use Demo | Claude controlla il desktop autonomamente |
| Browser Tools API Demo | Automazione browser con Playwright |
| Autonomous Coding Agent | Due agenti che costruiscono app complete su più sessioni |

**Come usarli:**
```bash
git clone https://github.com/anthropics/claude-quickstarts
cd customer-support-agent
# installa deps + API key + run
```

---

## 🍳 Cookbook — Ricette Pratiche

### Claude Cookbook (Platform)
**URL:** https://platform.claude.com/cookbook  
**GitHub:** https://github.com/anthropics/anthropic-cookbook

**Top ricette per il corso:**
- [Prompting for frontend aesthetics](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics) — design con AI
- [RAG con retrieval contestuale](https://platform.claude.com/cookbook/capabilities-contextual-embeddings-guide) — migliorare accuracy RAG
- [Extended thinking](https://platform.claude.com/cookbook/extended-thinking-extended-thinking) — Claude che "pensa" prima di rispondere
- [Batch processing](https://platform.claude.com/cookbook/misc-batch-processing) — 50% cost reduction
- [Session memory compaction](https://platform.claude.com/cookbook/misc-session-memory-compaction) — gestire conversazioni lunghe
- [Tool search with embeddings](https://platform.claude.com/cookbook/tool-use-tool-search-with-embeddings) — scale a migliaia di tool
- [Orchestrator-workers pattern](https://platform.claude.com/cookbook/patterns-agents-orchestrator-workers) — architettura multi-agente

---

## 🔧 Tool Ufficiale Gratuito

### Prompt Generator (Console Anthropic)
**URL:** https://platform.claude.com  
- Descrivere il task → genera un prompt ottimizzato automaticamente
- Utile per iniziare senza blank page problem

---

## 📌 Note per il Corso

Questi materiali si integrano perfettamente con:
- **Lezione 2** — slide "System prompt" e "Temperature" (aggiungere sezione Prompt Engineering Tecnico)
- **Lezione 3+** — Tool use, RAG, Agent patterns come moduli avanzati

### I 3 principi da insegnare (dall'email Claude Team):
1. **Sii chiaro, diretto e dettagliato** — Claude funziona come un nuovo dipendente brillante senza contesto
2. **Fornisci contesto** — spiega *perché* il task è importante
3. **Usa esempi** — 2-3 esempi trasformano l'output (few-shot prompting)

### Tecnica bonus (da docs ufficiali):
- **XML tags** — strutturano i prompt complessi e riducono ambiguità
- **Long context**: metti i documenti lunghi PRIMA della domanda

---

*Salvato: 27 marzo 2026 — fonte email Claude Team <no-reply@email.claude.com>*
