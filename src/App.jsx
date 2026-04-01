import { useState, useEffect, useRef, useCallback } from 'react'
import { SlideViewer } from './slides/SlideViewer'
import { QrButton } from './components/QrOverlay'
import './App.css'

// Icone SVG inline — stile Lucide, stroke-based, 16×16
const Icon = ({ d, size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon ${className}`}>
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
)

const IconSlide = ({ size }) => (
  <Icon size={size} d={<>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8" /><path d="M12 17v4" />
    <path d="M10 9l4 2-4 2V9z" />
  </>} />
)

const IconLink = ({ size }) => (
  <Icon size={size} d={<>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </>} />
)

const IconExternal = ({ size = 12 }) => (
  <Icon size={size} d={<>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>} />
)

const IconArrowLeft = ({ size }) => (
  <Icon size={size} d="M19 12H5m0 0l7 7m-7-7l7-7" />
)

const IconX = ({ size }) => (
  <Icon size={size} d={<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>} />
)

const DAYS = [
  {
    date: '25/03/2026',
    dow: 'Mercoledì',
    block: 'FONDAMENTA',
    slide: 'lezione-01',
    blockNum: 1,
    title: "Cos'è davvero l'AI oggi",
    topics: [
      'Panoramica stato dell\'arte: LLM, multimodali, agenti',
      'Cosa possono (e non possono) fare oggi',
      'Demo live: casi reali di utilizzo quotidiano',
    ],
    handson: 'Primi prompt guidati — esplorare ChatGPT e Claude con occhio critico',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "🚀 ChatGPT — crea account", url: "https://chatgpt.com" },
      { label: "🚀 Claude — crea account", url: "https://claude.ai" },
      { label: "🚀 Gemini — crea account", url: "https://gemini.google.com" },
      { label: "🚀 Perplexity — crea account", url: "https://perplexity.ai" },
      { label: "🚀 DeepSeek — crea account", url: "https://chat.deepseek.com" },
      { label: "🚀 Qwen (Alibaba) — crea account", url: "https://chat.qwen.ai" },
      { label: "🚀 Mistral Le Chat — crea account", url: "https://chat.mistral.ai" },
      { label: "🚀 NotebookLM — crea account", url: "https://notebooklm.google.com" },
      { label: "🚀 Gamma — presentazioni AI", url: "https://gamma.app" },
      { label: "🚀 ElevenLabs — voce AI", url: "https://elevenlabs.io" },
      { label: "🚀 Suno — musica AI", url: "https://suno.com" },
      { label: "🚀 Higgsfield — video AI", url: "https://higgsfield.ai" },
      { label: "🚀 Wispr Flow — dettatura AI", url: "https://wisprflow.ai" },
      { label: "📊 LLM Stats — confronto modelli", url: "https://llm-stats.com" },
      { label: "📊 Chatbot Arena — benchmark live", url: "https://lmarena.ai" },
      { label: "🗺️ roadmap.sh — AI Engineer path", url: "https://roadmap.sh/ai-engineer" },
      { label: "🌳 Web Skills Tree — learning path visuale", url: "https://andreasbm.github.io/web-skills/" },
    ],
    schedule: [
      { from: '09:00', to: '09:30', type: 'intro', label: 'Presentazioni e introduzione al corso' },
      { from: '09:30', to: '10:30', type: 'teoria', label: 'Panoramica stato dell\'arte AI' },
      { from: '10:30', to: '11:15', type: 'teoria', label: 'Cosa possono (e non possono) fare' },
      { from: '11:15', to: '11:30', type: 'pausa', label: 'Pausa' },
      { from: '11:30', to: '13:15', type: 'pratica', label: 'Demo live: casi reali di utilizzo' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'tutor', label: 'Primi prompt guidati — ChatGPT e Claude' },
    ],
  },
  {
    date: '26/03/2026',
    dow: 'Giovedì',
    block: 'FONDAMENTA',
    slide: 'lezione-02',
    blockNum: 1,
    title: 'Come funzionano i modelli generativi',
    topics: [
      'Architettura transformer semplificata',
      'Tokenizzazione, contesto, temperature',
      'Limiti: allucinazioni, bias, cut-off',
    ],
    handson: 'Esperimenti con parametri — come cambia l\'output variando temperature e system prompt',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "Illustrated Transformer — guida visiva passo-passo", url: "https://jalammar.github.io/illustrated-transformer/" },
      { label: "OpenAI Tokenizer — prova la tokenizzazione dal vivo", url: "https://platform.openai.com/tokenizer" },
      { label: "Embedding Projector — esplora vettori in 3D", url: "https://projector.tensorflow.org/" },
      { label: "AI Hallucinations — IBM (cosa sono e perché)", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
      { label: "AI Hallucination Statistics 2026 — Suprmind", url: "https://suprmind.ai/hub/insights/ai-hallucination-statistics-research-report-2026/" },
      { label: "LLM Stats — confronta context window e parametri", url: "https://llm-stats.com" },
      { label: "Groq — inferenza veloce con temperature slider", url: "https://groq.com" },
      { label: "HuggingFace Chat — modelli open con parametri avanzati", url: "https://huggingface.co/chat" },
      { label: "Mistral Chat — modello europeo gratuito", url: "https://chat.mistral.ai" },
      { label: "Whisper Typing — dettatura AI gratuita per Windows", url: "https://whispertyping.com" },
      { label: "Arc Browser — browser moderno con AI integrata (invito)", url: "https://arc.net/gift/95f1363d" },
    ],
    schedule: [
      { from: '09:00', to: '10:15', type: 'teoria', label: 'Architettura transformer semplificata' },
      { from: '10:15', to: '11:30', type: 'teoria', label: 'Tokenizzazione, contesto, temperature' },
      { from: '11:30', to: '11:45', type: 'pausa', label: 'Pausa' },
      { from: '11:45', to: '13:15', type: 'pratica', label: 'Esperimenti con parametri e temperature' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'tutor', label: 'Limiti: allucinazioni, bias — test dal vivo' },
    ],
  },
  {
    date: '30/03/2026',
    dow: 'Lunedì',
    block: 'INTERAZIONE',
    slide: 'lezione-03',
    blockNum: 2,
    title: 'Prompting e context engineering',
    topics: [
      'Tecniche di prompting: zero-shot, few-shot, chain-of-thought',
      'Context engineering: strutturare il contesto perfetto',
      'System prompt, ruoli, formati di output',
    ],
    handson: 'Workshop prompting — ogni studente costruisce un prompt library per il proprio caso d\'uso',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "Learn Prompting — guida gratuita completa", url: "https://learnprompting.org" },
      { label: "Anthropic Prompt Library — 100+ prompt pronti", url: "https://docs.anthropic.com/en/prompt-library/library" },
      { label: "OpenAI Prompt Engineering Guide — ufficiale", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { label: "Context Engineering Guide — robotsatemyhomework", url: "https://robotsatemyhomework.substack.com/p/context-engineering-guide" },
      { label: "everything-claude-code — case study context engineering", url: "https://github.com/affaan-m/everything-claude-code" },
      { label: "ai-marketing-claude — 15 marketing skills con subagent paralleli", url: "https://github.com/zubair-trabzada/ai-marketing-claude" },
      { label: "Six Hats Navigator — framework De Bono applicato ai prompt AI", url: "https://taaft.notion.site/Six-Hats-Navigator-2eced82cbfd380099d25db4c2dfc32d6" },
      { label: "The Delegation — simulazione 3D multi-agente autonoma (demo live)", url: "https://arturitu.github.io/the-delegation/" },
      { label: "The Learning System — prompt modulare con 3 modalità (Navigator, Tutor, Roadmap)", url: "https://taaft.notion.site/The-Learning-System-325ed82cbfd380b0a01be9826ddb1dad" },
      { label: "Anthropic Best Practices Claude 4 — guida ufficiale", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices" },
      { label: "Anthropic Academy — corso video gratuito", url: "https://anthropic.skilljar.com/claude-with-the-anthropic-api/287745" },
      { label: "Claude Cookbook — 30+ ricette pratiche", url: "https://platform.claude.com/cookbook" },
      { label: "Prompt Generator — genera prompt ottimizzati (Console Anthropic)", url: "https://console.anthropic.com" },
    ],
    schedule: [
      { from: '09:00', to: '10:30', type: 'teoria', label: 'Tecniche di prompting e context engineering' },
      { from: '10:30', to: '10:45', type: 'pausa', label: 'Pausa' },
      { from: '10:45', to: '13:15', type: 'pratica', label: 'Workshop: costruire la propria prompt library' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '15:15', type: 'pratica', label: 'System prompt, ruoli e formati — esercizi' },
      { from: '15:15', to: '16:15', type: 'tutor', label: 'Esercizi guidati su prompt e formati' },
    ],
  },
  {
    date: '01/04/2026',
    dow: 'Mercoledì',
    block: 'PIATTAFORME',
    slide: 'lezione-04',
    blockNum: 3,
    title: 'Piattaforme AI: il tour completo',
    topics: [
      'ChatGPT: Canvas, GPTs custom, API, Excel',
      'Claude: Projects & Artifacts, MCP, plugin Office',
      'Gemini: Personal Intelligence, Deep Research, NotebookLM',
      'Microsoft: Copilot, Power Automate',
      'Tool emergenti: Perplexity, Cursor, v0.dev',
    ],
    handson: 'Demo comparativa + Canvas collaborativo + NotebookLM podcast',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "OpenAI Platform — API, Playground, GPTs", url: "https://platform.openai.com" },
      { label: "Claude — Projects & Artifacts", url: "https://claude.ai" },
      { label: "NotebookLM — Podcast e Q&A sui tuoi documenti", url: "https://notebooklm.google.com" },
      { label: "Microsoft Copilot — AI in M365", url: "https://copilot.microsoft.com" },
      { label: "Perplexity — Ricerca AI con fonti", url: "https://perplexity.ai" },
      { label: "🎬 Seedance 2.0 (Dreamina) — Video AI cinematici gratis", url: "https://dreamina.capcut.com/tools/seedance-2-0" },
      { label: "🎬 VideoFX (Google) — Video AI 4K gratis", url: "https://labs.google/videoFX" },
    ],
    schedule: [
      { from: '09:00', to: '09:45', type: 'teoria', label: 'ChatGPT: Canvas, GPTs, API, Excel' },
      { from: '09:45', to: '10:30', type: 'teoria', label: 'Claude: Projects, Artifacts, MCP, Office' },
      { from: '10:30', to: '10:45', type: 'pausa', label: 'Pausa' },
      { from: '10:45', to: '11:30', type: 'teoria', label: 'Gemini: Personal Intelligence, NotebookLM' },
      { from: '11:30', to: '12:15', type: 'teoria', label: 'Copilot, Power Automate, tool emergenti' },
      { from: '12:15', to: '13:15', type: 'demo', label: 'Demo live: stesso task su 3 piattaforme' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '15:15', type: 'pratica', label: 'Canvas collaborativo + NotebookLM podcast' },
      { from: '15:15', to: '16:15', type: 'pratica', label: 'Tour guidato: prova tutte le piattaforme' },
    ],
  },
  {
    date: '08/04/2026',
    dow: 'Mercoledì',
    block: 'AUTOMAZIONE & ADOZIONE',
    slide: 'lezione-05',
    blockNum: 3,
    title: 'Automazione, Agenti e AI in Azienda',
    topics: [
      'Agenti AI: autonomia, tool use, loop',
      'Workflow automation: Zapier, n8n, Make.com',
      'AI Act aggiornato e adozione AI in Italia',
      'ROI dell\'AI e change management',
    ],
    handson: 'AI Readiness Assessment + Pitch per il CEO + Agent vs Workflow',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "NVIDIA State of AI Report 2026", url: "https://blogs.nvidia.com/blog/state-of-ai-report-2026/" },
      { label: "Banca d'Italia QEF N.1005 — AI e imprese", url: "https://www.bancaditalia.it/pubblicazioni/qef/2026-1005/index.html" },
      { label: "n8n AI Agent Tutorial 2026", url: "https://www.youtube.com/watch?v=PfdnYe2690E" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'teoria', label: 'Agenti AI + Agentic AI stats' },
      { from: '10:00', to: '11:00', type: 'teoria', label: 'Workflow automation: Zapier, n8n, Make.com + demo' },
      { from: '11:00', to: '11:15', type: 'pausa', label: 'Pausa' },
      { from: '11:15', to: '12:15', type: 'teoria', label: 'AI Act + Adozione AI Italia + ROI' },
      { from: '12:15', to: '13:15', type: 'teoria', label: 'Change management + roadmap 90 giorni' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'AI Readiness + Agent vs Workflow + Pitch CEO' },
    ],
  },
  {
    date: '09/04/2026',
    dow: 'Giovedì',
    block: 'PIATTAFORME',
    slide: 'lezione-06',
    blockNum: 3,
    title: 'Lab: Esplora le piattaforme',
    topics: [
      'ChatGPT free: Canvas, custom instructions, memory',
      'Claude free: Projects, Artifacts, app interattive',
      'Gemini free: confronto sullo stesso task',
      'NotebookLM: documenti e podcast automatico',
    ],
    handson: '5 esercizi pratici step-by-step sulle piattaforme AI gratuite',
    hours: 6,
    presence: 'gestita da Tutor',
    deferred: true,
    resources: [
      { label: "Power Automate — Microsoft", url: "https://powerautomate.microsoft.com" },
      { label: "Make.com — automazioni visive", url: "https://make.com" },
      { label: "Notion AI — workspace intelligente", url: "https://notion.so" },
      { label: "ClickUp AI — project management AI", url: "https://clickup.com" },
      { label: "Cursor — VSCode con AI integrata", url: "https://cursor.sh" },
      { label: "v0.dev — UI da prompt in secondi", url: "https://v0.dev" },
      { label: "Emergent — build production-ready apps con AI agents", url: "https://app.emergent.sh/landing/" },
      { label: "NotebookLM — notebook AI gratuito con podcast", url: "https://notebooklm.google.com" },
    ],
    schedule: [
      { from: '09:00', to: '09:45', type: 'pratica', label: 'Esercizio 1: ChatGPT free — Canvas, istruzioni, memoria' },
      { from: '09:45', to: '10:30', type: 'pratica', label: 'Esercizio 2: Claude free — Projects, Artifacts, app interattiva' },
      { from: '10:30', to: '10:45', type: 'pausa', label: 'Pausa' },
      { from: '10:45', to: '11:30', type: 'pratica', label: 'Esercizio 3: Gemini free — confronto sullo stesso task' },
      { from: '11:30', to: '12:15', type: 'pratica', label: 'Esercizio 4: NotebookLM — documenti e podcast' },
      { from: '12:15', to: '13:15', type: 'pausa', label: 'Pranzo' },
      { from: '13:15', to: '13:45', type: 'pratica', label: 'Esercizio 5: Confronto finale — tabella comparativa' },
      { from: '13:45', to: '14:15', type: 'pratica', label: 'Presentazioni e discussione' },
    ],
  },
  {
    date: '13/04/2026',
    dow: 'Lunedì',
    block: 'AUTOMAZIONE',
    slide: 'lezione-07',
    blockNum: 4,
    title: 'Lab: Automazione da zero',
    topics: [
      'Zapier free: crea un Zap con AI step',
      'Make.com free: scenario con modulo AI',
      'n8n community: workflow email triage',
      'Sfida finale: stesso problema, 3 tool diversi',
    ],
    handson: '4 esercizi pratici: costruisci workflow di automazione con AI su Zapier, Make, n8n',
    hours: 6,
    presence: 'gestita da Tutor',
    deferred: true,
    resources: [
      { label: "n8n — workflow AI open-source", url: "https://n8n.io" },
      { label: "Make.com — automazioni visive no-code", url: "https://make.com" },
      { label: "Zapier AI Actions — integrazioni intelligenti", url: "https://zapier.com/ai" },
      { label: "Manus.im — agente AI completamente autonomo", url: "https://manus.im" },
      { label: "15 esempi pratici con agenti n8n", url: "https://blog.n8n.io/ai-agents-examples/" },
      { label: "n8n AI Agent Tutorial 2026", url: "https://www.youtube.com/watch?v=PfdnYe2690E" },
      { label: "Free n8n AI Course — 8 lezioni + certificato", url: "https://findskill.ai/courses/n8n-ai-automation-workflows/" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'pratica', label: 'Esercizio 1: Zapier free — Zap con AI step' },
      { from: '10:00', to: '11:00', type: 'pratica', label: 'Esercizio 2: Make.com free — scenario con modulo AI' },
      { from: '11:00', to: '11:15', type: 'pausa', label: 'Pausa' },
      { from: '11:15', to: '12:15', type: 'pratica', label: 'Esercizio 3: n8n community — workflow email triage' },
      { from: '12:15', to: '13:15', type: 'pausa', label: 'Pranzo' },
      { from: '13:15', to: '14:00', type: 'pratica', label: 'Esercizio 4: Sfida finale — stesso problema, 3 tool' },
      { from: '14:00', to: '14:15', type: 'pratica', label: 'Presentazioni e discussione' },
    ],
  },
  {
    date: '15/04/2026',
    dow: 'Mercoledì',
    block: 'PRODUTTIVITÀ',
    slide: 'lezione-08',
    blockNum: 5,
    title: 'Lab: AI per il tuo lavoro',
    topics: [
      'La mia settimana AI: mappa e identifica 3 momenti AI',
      'AI per email: scrivi, rispondi, riassumi',
      'AI per documenti: analisi report con Claude/ChatGPT',
      'AI per meeting: trascrivi audio, genera notes',
      'Il mio stack AI ideale: template e piano 30 giorni',
    ],
    handson: '5 esercizi pratici: applica l\'AI al tuo lavoro reale e costruisci il tuo stack personale',
    hours: 6,
    presence: 'gestita da Tutor',
    deferred: true,
    resources: [
      { label: "There's An AI For That — directory tool AI", url: "https://theresanaiforthat.com" },
      { label: "Wispr Flow — dettatura AI in qualsiasi app", url: "https://wisprflow.ai" },
      { label: "Otter.ai — trascrizione meeting automatica", url: "https://otter.ai" },
      { label: "Fireflies.ai — meeting notes con AI", url: "https://fireflies.ai" },
      { label: "🌳 Web Skills Tree — learning path visuale", url: "https://andreasbm.github.io/web-skills/" },
      { label: "DeepLearning.ai Short Courses — gratis", url: "https://learn.deeplearning.ai" },
    ],
    schedule: [
      { from: '09:00', to: '09:45', type: 'pratica', label: 'Esercizio 1: La mia settimana AI' },
      { from: '09:45', to: '10:30', type: 'pratica', label: 'Esercizio 2: AI per email — scrivi, rispondi, riassumi' },
      { from: '10:30', to: '10:45', type: 'pausa', label: 'Pausa' },
      { from: '10:45', to: '11:30', type: 'pratica', label: 'Esercizio 3: AI per documenti — analisi report' },
      { from: '11:30', to: '12:15', type: 'pratica', label: 'Esercizio 4: AI per meeting — trascrivi e genera notes' },
      { from: '12:15', to: '13:15', type: 'pausa', label: 'Pranzo' },
      { from: '13:15', to: '13:45', type: 'pratica', label: 'Esercizio 5: Il mio stack AI ideale' },
      { from: '13:45', to: '14:15', type: 'pratica', label: 'Presentazioni stack AI + feedback' },
    ],
  },
  {
    date: '22/04/2026',
    dow: 'Mercoledì',
    block: 'ADOZIONE',
    slide: 'lezione-09',
    blockNum: 6,
    title: 'Lab: Piano di adozione AI',
    topics: [
      'AI Readiness Assessment (template 10 domande)',
      'Role-play: convincere il CEO scettico',
      'Piano di adozione 90 giorni',
      'Certificazioni AI gratuite',
    ],
    handson: '4 esercizi pratici: assessment, role-play, piano 90 giorni, certificazioni',
    hours: 6,
    presence: 'gestita da Tutor',
    deferred: true,
    resources: [
      { label: "Google AI Essentials — certificato gratuito", url: "https://grow.google/certificates/ai-essentials" },
      { label: "Microsoft AI Skills — badge gratuiti", url: "https://learn.microsoft.com/en-us/ai" },
      { label: "Elements of AI — base, disponibile in italiano", url: "https://elementsofai.com" },
      { label: "Banca d'Italia QEF — AI e imprese italiane", url: "https://www.bancaditalia.it/pubblicazioni/qef/2026-1005/index.html" },
      { label: "Deloitte State of AI 2026", url: "https://www.deloitte.com/cy/en/issues/generative-ai/state-of-ai-in-enterprise.html" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'pratica', label: 'Esercizio 1: AI Readiness Assessment' },
      { from: '10:00', to: '10:15', type: 'pausa', label: 'Pausa' },
      { from: '10:15', to: '11:15', type: 'pratica', label: 'Esercizio 2: Role-play CEO scettico' },
      { from: '11:15', to: '11:30', type: 'pausa', label: 'Pausa' },
      { from: '11:30', to: '12:30', type: 'pratica', label: 'Esercizio 3: Piano 90 giorni' },
      { from: '12:30', to: '13:30', type: 'pausa', label: 'Pranzo' },
      { from: '13:30', to: '14:00', type: 'pratica', label: 'Esercizio 4: Certificazioni gratuite' },
    ],
  },
  {
    date: '23/04/2026',
    dow: 'Giovedì',
    block: 'ADOZIONE',
    slide: 'lezione-10',
    blockNum: 6,
    title: 'Progetto Finale & Recap',
    topics: [
      'Preparazione pitch "AI per il mio CEO"',
      'Presentazioni dei team (5 min + 3 min Q&A)',
      '30-Day AI Challenge personale',
      'Risorse per continuare: newsletter, community, corsi',
    ],
    handson: 'Pitch AI, presentazioni, 30-Day Challenge, kit risorse',
    hours: 6,
    presence: 'gestita da Tutor',
    deferred: true,
    resources: [
      { label: "The Batch — newsletter settimanale AI", url: "https://www.deeplearning.ai/the-batch/" },
      { label: "TLDR AI — digest giornaliero", url: "https://tldr.tech/ai" },
      { label: "Chatbot Arena — benchmark modelli live", url: "https://lmarena.ai" },
      { label: "LLM Stats — tutti i modelli aggiornati", url: "https://llm-stats.com" },
      { label: "Product Hunt AI — novità tool ogni giorno", url: "https://producthunt.com/topics/artificial-intelligence" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'pratica', label: 'Esercizio 1: Preparazione pitch' },
      { from: '10:00', to: '10:15', type: 'pausa', label: 'Pausa' },
      { from: '10:15', to: '12:15', type: 'pratica', label: 'Esercizio 2: Presentazioni dei team' },
      { from: '12:15', to: '13:15', type: 'pausa', label: 'Pranzo' },
      { from: '13:15', to: '13:45', type: 'pratica', label: 'Esercizio 3: 30-Day AI Challenge' },
      { from: '13:45', to: '14:15', type: 'pratica', label: 'Esercizio 4: Risorse + chiusura' },
    ],
  },
]

const BLOCK_COLORS = {
  1: { bg: '#1a1a2e', accent: '#e94560', label: 'FONDAMENTA' },
  2: { bg: '#1a1a2e', accent: '#f5a623', label: 'INTERAZIONE' },
  3: { bg: '#1a1a2e', accent: '#0f9d58', label: 'PIATTAFORME' },
  4: { bg: '#1a1a2e', accent: '#4285f4', label: 'AUTOMAZIONE' },
  5: { bg: '#1a1a2e', accent: '#ab47bc', label: 'PRODUTTIVITÀ' },
  6: { bg: '#1a1a2e', accent: '#ff7043', label: 'ADOZIONE' },
}

function Timeline({ schedule }) {
  return (
    <div className="timeline">
      {schedule.map((slot, i) => (
        <div className={`timeline-slot timeline-${slot.type}`} key={i}>
          <span className="timeline-time">{slot.from} — {slot.to}</span>
          <span className="timeline-label">{slot.label}</span>
        </div>
      ))}
    </div>
  )
}

function SlideModal({ url, onClose }) {
  const [loading, setLoading] = useState(true)
  const iframeRef = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  useEffect(() => {
    setLoading(true)
  }, [url])

  const handleLoad = useCallback(() => {
    setLoading(false)
    // Focus the iframe so keyboard/scroll navigation works immediately
    if (iframeRef.current) {
      iframeRef.current.focus()
    }
  }, [])

  const lessonName = url.replace("slides/", "").replace(".html", "")
  const lessonNum = lessonName.replace("lezione-", "")

  return (
    <div className="slide-modal">
      <div className="slide-modal-bar">
        <button className="slide-modal-home" onClick={onClose}>
          ← Home
        </button>
        <span className="slide-modal-label">Lezione {lessonNum}</span>
        <div className="slide-modal-shortcuts">
          <kbd>←</kbd><kbd>→</kbd> naviga &nbsp;·&nbsp; <kbd>F</kbd> fullscreen &nbsp;·&nbsp; <kbd>ESC</kbd> chiudi
        </div>
        <button className="slide-modal-close" onClick={onClose}>✕</button>
      </div>
      {loading && (
        <div className="slide-loader">
          <div className="slide-loader-spinner" />
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={url}
        title="Slide"
        allowFullScreen
        onLoad={handleLoad}
        tabIndex={0}
      />
    </div>
  )
}

function DayCard({ day, index, onSlideOpen }) {
  const block = BLOCK_COLORS[day.blockNum]
  const [showResources, setShowResources] = useState(false)
  const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development'
  const dayDate = parseDate(day.date)
  const unlocked = isDev || dayDate <= new Date()

  return (
    <div
      className={`day-card ${day.deferred ? 'deferred' : ''}`}
      style={{ '--accent': block.accent }}
    >
      <div className="day-header">
        <div className="day-header-top">
          <div className="day-meta">
            <span className="day-date">{day.dow} {day.date}</span>
            <span className="day-block" style={{ color: block.accent }}>{block.label}</span>
          </div>
        </div>
        <span className="day-lesson-num">Lezione {String(index + 1).padStart(2, '0')}</span>
        <h3 className="day-title">{day.title}</h3>
        <div className="day-badges">
          <span className="badge hours">{day.hours}h</span>
          <span className={`badge presence ${day.deferred ? 'deferred-badge' : ''}`}>
            {day.presence}
          </span>
        </div>
      </div>

      <div className="day-details">
        <Timeline schedule={day.schedule} />
      </div>

      {unlocked && (day.slide || (day.resources && day.resources.length > 0)) && (
        <div className="day-footer">
          <div className="day-actions">
            {day.slide && (
              <button className="slide-btn" onClick={() => onSlideOpen(day.slide)}>
                <IconSlide size={14} /> Slide
              </button>
            )}
            {day.resources && day.resources.length > 0 && (
              <button className="resources-btn" onClick={() => setShowResources(r => !r)}>
                <IconLink size={14} /> Risorse
                <span className={`resources-chevron ${showResources ? 'open' : ''}`}>›</span>
              </button>
            )}
          </div>
          {day.resources && day.resources.length > 0 && (
            <div className={`resources-accordion ${showResources ? 'resources-accordion--open' : ''}`}>
              <ul className="resources-list">
                {day.resources.map((r, i) => (
                  <li key={i}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      {r.label} <IconExternal size={11} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const DOW_NAMES = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven']
const MONTHS = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']

function parseDate(dateStr) {
  const [d, m, y] = dateStr.split('/')
  return new Date(+y, +m - 1, +d)
}

function getMonday(date) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  d.setDate(diff)
  return d
}

function formatShort(date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`
}

function buildCalendar(days) {
  // Map lessons by date string
  const lessonMap = new Map()
  let globalIndex = 0
  for (const day of days) {
    lessonMap.set(day.date, { ...day, globalIndex: globalIndex++ })
  }

  // Find all weeks from first to last lesson
  const firstDate = parseDate(days[0].date)
  const lastDate = parseDate(days[days.length - 1].date)
  const firstMonday = getMonday(firstDate)
  const lastMonday = getMonday(lastDate)

  const weeks = []
  const current = new Date(firstMonday)

  while (current <= lastMonday) {
    const slots = []
    for (let i = 0; i < 5; i++) {
      const slotDate = new Date(current)
      slotDate.setDate(current.getDate() + i)
      const key = `${String(slotDate.getDate()).padStart(2, '0')}/${String(slotDate.getMonth() + 1).padStart(2, '0')}/${slotDate.getFullYear()}`
      slots.push({
        date: slotDate,
        dowIndex: i,
        lesson: lessonMap.get(key) || null,
      })
    }
    const friday = new Date(current)
    friday.setDate(current.getDate() + 4)
    weeks.push({
      key: current.toISOString(),
      label: `${formatShort(current)} — ${formatShort(friday)}`,
      slots,
    })
    current.setDate(current.getDate() + 7)
  }

  return weeks
}

function CalendarView({ weeks, onSlideOpen }) {
  return (
    <div className="calendar">
      <div className="calendar-header">
        {DOW_NAMES.map((d) => (
          <div className="calendar-dow" key={d}>{d}</div>
        ))}
      </div>
      {weeks.map((week) => (
        <div className="week-row" key={week.key}>
          <div className="week-label">{week.label}</div>
          <div className="week-grid">
            {week.slots.map((slot) => (
              <div className="week-slot" key={slot.dowIndex}>
                {slot.lesson ? (
                  <DayCard day={slot.lesson} index={slot.lesson.globalIndex} onSlideOpen={onSlideOpen} />
                ) : (
                  <div className="empty-slot">
                    <span className="empty-date">{slot.date.getDate()}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function AgendaView({ hidden, onSlideOpen }) {
  return (
    <div className={`agenda ${hidden ? 'agenda--hidden' : ''}`}>
      {DAYS.map((day, i) => (
        <DayCard key={i} day={day} index={i} onSlideOpen={onSlideOpen} />
      ))}
    </div>
  )
}

const BLOCK_ICONS = {
  1: '🧠', 2: '💬', 3: '🛠️', 4: '⚙️', 5: '🚀', 6: '🏢',
}

function RisorseView({ hidden }) {
  return (
    <div className={`risorse ${hidden ? 'risorse--hidden' : ''}`}>
      <div className="risorse-header">
        <h2 className="risorse-title">📚 Risorse del Corso</h2>
        <p className="risorse-sub">Tutti i link utili, organizzati per lezione</p>
      </div>
      <div className="risorse-grid">
        {DAYS.map((day, i) => {
          if (!day.resources || day.resources.length === 0) return null
          const block = BLOCK_COLORS[day.blockNum]
          return (
            <div className="risorse-card" key={i} style={{ '--accent': block.accent }}>
              <div className="risorse-card-header">
                <span className="risorse-card-icon">{BLOCK_ICONS[day.blockNum]}</span>
                <div>
                  <span className="risorse-card-num">Lezione {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="risorse-card-title">{day.title}</h3>
                  <span className="risorse-card-block" style={{ color: block.accent }}>{block.label}</span>
                </div>
              </div>
              <ul className="risorse-links">
                {day.resources.map((r, j) => (
                  <li key={j}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      <span className="risorse-link-label">{r.label}</span>
                      <IconExternal size={11} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function App() {
  const [view, setView] = useState('agenda')
  const totalHours = DAYS.reduce((s, d) => s + d.hours, 0)
  const weeks = buildCalendar(DAYS)

  const parseSlideRoute = () => {
    const hash = window.location.hash
    const match = hash.match(/^#\/?(lezione-\d+)/)
    return match ? match[1] : null
  }

  const [activeLessonId, setActiveLessonId] = useState(parseSlideRoute)

  const openSlide = (lessonId) => {
    window.location.hash = `#/${lessonId}/1`
    setActiveLessonId(lessonId)
  }

  const closeSlide = () => {
    window.location.hash = ''
    setActiveLessonId(null)
  }

  useEffect(() => {
    const handler = () => setActiveLessonId(parseSlideRoute())
    window.addEventListener("hashchange", handler)
    return () => window.removeEventListener("hashchange", handler)
  }, [])

  if (activeLessonId) {
    return <SlideViewer lessonId={activeLessonId} onExit={closeSlide} />
  }

  return (
    <div className={`app ${view === 'agenda' ? 'app--agenda' : ''}`}>
      <header className="hero">
        <div className="hero-top">
          <div>
            <h1>Big Data & AI</h1>
            <p className="hero-sub">Corso pratico · 10 giornate · {totalHours} ore totali</p>
          </div>
          <div className="hero-logos">
            <QrButton size={36} className="hero-qr-btn" />
            <img src="/slides/assets/its-academy-large.png" alt="ITS NewtechSI Academy" className="hero-logo" />
            <img src="/slides/assets/skills-it.png" alt="Skills.it" className="hero-logo" />
          </div>
        </div>

        <section className="intro">
          <div className="intro-grid">
            <div className="intro-block">
              <h3>A chi si rivolge</h3>
              <p>25 studenti del corso <a href="https://www.itsacademysi.it/corsi/tecnico-superiore-per-il-business-management-e-la-digital-strategy-aziendale/" target="_blank" rel="noopener noreferrer">AI &amp; Business Management</a> di ITS Academy, molti dei quali con un percorso accademico e in fase di diploma come AI &amp; Business Manager.</p>
            </div>
            <div className="intro-block">
              <h3>Obiettivi</h3>
              <p>Capire cosa l'AI pu&ograve; fare oggi, saper usare le piattaforme principali, costruire automazioni concrete e sviluppare un piano di adozione per il proprio contesto.</p>
            </div>
            <div className="intro-block">
              <h3>Come funziona</h3>
              <p>Ogni giornata alterna brevi sessioni di teoria a lunghe sessioni pratiche guidate. Si lavora su casi reali, con i propri strumenti e i propri dati quando possibile.</p>
            </div>
            <div className="intro-block">
              <h3>Cosa porti a casa</h3>
              <p>Una prompt library personale, workflow automatizzati funzionanti, un GPT custom, esperienza diretta con ChatGPT, Claude, Power Automate, Zapier e n8n.</p>
            </div>
          </div>
        </section>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">{totalHours}h</span>
            <span className="stat-label">ore totali</span>
          </div>
          <div className="stat">
            <span className="stat-num">10</span>
            <span className="stat-label">giornate</span>
          </div>
          <div className="view-switch">
            <button
              className={`view-btn ${view === 'calendar' ? 'active' : ''}`}
              onClick={() => setView('calendar')}
            >
              Calendario
            </button>
            <button
              className={`view-btn ${view === 'agenda' ? 'active' : ''}`}
              onClick={() => setView('agenda')}
            >
              Agenda
            </button>
            <button
              className={`view-btn ${view === 'risorse' ? 'active' : ''}`}
              onClick={() => setView('risorse')}
            >
              📚 Risorse
            </button>
          </div>
        </div>
        <div className="legend">
          {Object.entries(BLOCK_COLORS).map(([num, block]) => (
            <div className="legend-item" key={num}>
              <span className="legend-bar" style={{ background: block.accent }} />
              <span className="legend-text">{block.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        {view === 'calendar' && <CalendarView weeks={weeks} onSlideOpen={openSlide} />}
        <AgendaView hidden={view !== 'agenda'} onSlideOpen={openSlide} />
        <RisorseView hidden={view !== 'risorse'} />
      </main>

      <footer>
        <p>Docente: <strong>Attilio Cianci</strong> · Ultimo aggiornamento: marzo 2026</p>
      </footer>
    </div>
  )
}

export default App
