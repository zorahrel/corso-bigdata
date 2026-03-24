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
      { from: '14:15', to: '16:15', type: 'sonia', label: 'Primi prompt guidati — ChatGPT e Claude' },
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
      { label: "AI Hallucinations — IBM (cosa sono e perché)", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
      { label: "OpenAI Tokenizer — prova dal vivo", url: "https://platform.openai.com/tokenizer" },
      { label: "LLM Stats — confronto tutti i modelli", url: "https://llm-stats.com" },
    ],
    schedule: [
      { from: '09:00', to: '10:15', type: 'teoria', label: 'Architettura transformer semplificata' },
      { from: '10:15', to: '11:30', type: 'teoria', label: 'Tokenizzazione, contesto, temperature' },
      { from: '11:30', to: '11:45', type: 'pausa', label: 'Pausa' },
      { from: '11:45', to: '13:15', type: 'pratica', label: 'Esperimenti con parametri e temperature' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'sonia', label: 'Limiti: allucinazioni, bias — test dal vivo' },
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
      { label: "roadmap.sh — Prompt Engineering path", url: "https://roadmap.sh/prompt-engineering" },
    ],
    schedule: [
      { from: '09:00', to: '10:30', type: 'teoria', label: 'Tecniche di prompting e context engineering' },
      { from: '10:30', to: '10:45', type: 'pausa', label: 'Pausa' },
      { from: '10:45', to: '13:15', type: 'pratica', label: 'Workshop: costruire la propria prompt library' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '15:15', type: 'pratica', label: 'System prompt, ruoli e formati — esercizi' },
      { from: '15:15', to: '16:15', type: 'sonia', label: 'Esercizi guidati su prompt e formati' },
    ],
  },
  {
    date: '01/04/2026',
    dow: 'Mercoledì',
    block: 'PIATTAFORME',
    slide: 'lezione-04',
    blockNum: 3,
    title: 'OpenAI: ChatGPT, Playground e piattaforma',
    topics: [
      'ChatGPT: uso avanzato, GPTs custom, canvas',
      'Playground & API: primi esperimenti',
      'Use case aziendali con OpenAI',
    ],
    handson: 'Creare un GPT custom per un task lavorativo reale',
    hours: 6,
    presence: 'gestita da Sonia',
    deferred: true,
    resources: [
      { label: "OpenAI Platform — esplora l'API", url: "https://platform.openai.com" },
      { label: "OpenAI Cookbook — esempi pratici", url: "https://cookbook.openai.com" },
      { label: "GPTs Editor — crea il tuo GPT custom", url: "https://chatgpt.com/gpts/editor" },
      { label: "GPT Store — esplora GPT della community", url: "https://chatgpt.com/gpts" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'teoria', label: 'ChatGPT avanzato: GPTs custom, canvas' },
      { from: '10:00', to: '11:00', type: 'teoria', label: 'Playground & API: panoramica' },
      { from: '11:00', to: '11:15', type: 'pausa', label: 'Pausa' },
      { from: '11:15', to: '13:15', type: 'pratica', label: 'Creare un GPT custom per un task reale' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'Use case aziendali — esercitazione' },
    ],
  },
  {
    date: '08/04/2026',
    dow: 'Mercoledì',
    block: 'PIATTAFORME',
    slide: 'lezione-05',
    blockNum: 3,
    title: 'Claude: Chat, Cowork e Claude Code',
    topics: [
      'Claude per lavoro: Projects, Artifacts, MCP',
      'Cowork: collaborazione uomo-AI in tempo reale',
      'Claude Code: AI nel terminale per sviluppatori',
    ],
    handson: 'Sessione hands-on con Claude Projects — costruire un workspace di lavoro',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "Claude Artifacts — cosa sono e come usarli", url: "https://albato.com/blog/publications/how-to-use-claude-artifacts-guide" },
      { label: "Model Context Protocol (MCP) — Anthropic", url: "https://www.anthropic.com/news/model-context-protocol" },
      { label: "Claude Code — AI nel terminale", url: "https://claude.ai/code" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'teoria', label: 'Claude: Projects, Artifacts, MCP' },
      { from: '10:00', to: '11:00', type: 'teoria', label: 'Cowork e Claude Code: overview' },
      { from: '11:00', to: '11:15', type: 'pausa', label: 'Pausa' },
      { from: '11:15', to: '13:15', type: 'pratica', label: 'Hands-on Claude Projects: workspace di lavoro' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'Claude Code: sessione terminale guidata' },
    ],
  },
  {
    date: '09/04/2026',
    dow: 'Giovedì',
    block: 'PIATTAFORME',
    slide: 'lezione-06',
    blockNum: 3,
    title: 'Power Automate e altri strumenti',
    topics: [
      'Microsoft Power Automate + Copilot',
      'Google Gemini e workspace AI',
      'Panoramica tool emergenti: Perplexity, Cursor, v0',
    ],
    handson: 'Creare un\'automazione base con Power Automate / confronto piattaforme su stesso task',
    hours: 6,
    presence: 'gestita da Sonia',
    deferred: true,
    resources: [
      { label: "Power Automate — Microsoft", url: "https://powerautomate.microsoft.com" },
      { label: "Make.com — automazioni visive", url: "https://make.com" },
      { label: "Notion AI — workspace intelligente", url: "https://notion.so" },
      { label: "ClickUp AI — project management AI", url: "https://clickup.com" },
      { label: "Cursor — VSCode con AI integrata", url: "https://cursor.sh" },
      { label: "v0.dev — UI da prompt in secondi", url: "https://v0.dev" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'teoria', label: 'Microsoft Power Automate + Copilot' },
      { from: '10:00', to: '10:45', type: 'teoria', label: 'Google Gemini e workspace AI' },
      { from: '10:45', to: '11:00', type: 'pausa', label: 'Pausa' },
      { from: '11:00', to: '11:30', type: 'teoria', label: 'Tool emergenti: Perplexity, Cursor, v0' },
      { from: '11:30', to: '13:15', type: 'pratica', label: 'Automazione base con Power Automate' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'Confronto piattaforme sullo stesso task' },
    ],
  },
  {
    date: '13/04/2026',
    dow: 'Lunedì',
    block: 'AUTOMAZIONE',
    slide: 'lezione-07',
    blockNum: 4,
    title: 'Agenti AI + Zapier + n8n',
    topics: [
      'Cos\'è un agente AI: autonomia, tool use, loop',
      'Zapier AI Actions e integrazioni no-code',
      'n8n: workflow avanzati open-source',
    ],
    handson: 'Costruire un workflow completo: trigger → AI → azione (es. email triage automatico)',
    hours: 6,
    presence: 'in presenza',
    resources: [
      { label: "n8n — workflow AI open-source", url: "https://n8n.io" },
      { label: "Make.com — automazioni visive no-code", url: "https://make.com" },
      { label: "Zapier AI Actions — integrazioni intelligenti", url: "https://zapier.com/ai" },
      { label: "Manus.im — agente AI completamente autonomo", url: "https://manus.im" },
      { label: "15 esempi pratici con agenti n8n", url: "https://blog.n8n.io/ai-agents-examples/" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'teoria', label: 'Cos\'è un agente AI: autonomia, tool use' },
      { from: '10:00', to: '11:00', type: 'teoria', label: 'Zapier AI Actions e n8n: overview' },
      { from: '11:00', to: '11:15', type: 'pausa', label: 'Pausa' },
      { from: '11:15', to: '13:15', type: 'pratica', label: 'Setup Zapier/n8n — primi workflow' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'Workflow completo: email triage automatico' },
    ],
  },
  {
    date: '15/04/2026',
    dow: 'Mercoledì',
    block: 'PRODUTTIVITÀ',
    slide: 'lezione-08',
    blockNum: 5,
    title: 'AI per la produttività ed ecosistema',
    topics: [
      'Stack AI personale: come costruirsi un ecosistema',
      'AI nel quotidiano: email, documenti, meeting, ricerca',
      'Misurare l\'impatto: metriche e ROI dell\'adozione AI',
    ],
    handson: 'Ogni studente mappa il proprio stack AI ideale e lo presenta',
    hours: 6,
    presence: 'gestita da Sonia',
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
      { from: '09:00', to: '10:00', type: 'teoria', label: 'Stack AI personale: costruire un ecosistema' },
      { from: '10:00', to: '11:00', type: 'teoria', label: 'Metriche e ROI dell\'adozione AI' },
      { from: '11:00', to: '11:15', type: 'pausa', label: 'Pausa' },
      { from: '11:15', to: '13:15', type: 'pratica', label: 'Mappatura del proprio stack AI ideale' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'Presentazioni stack AI + feedback' },
    ],
  },
  {
    date: '22/04/2026',
    dow: 'Mercoledì',
    block: 'ADOZIONE',
    slide: 'lezione-09',
    blockNum: 6,
    title: 'AI e Azienda: implementazione',
    topics: [
      'Come introdurre l\'AI in un team/azienda',
      'Change management e resistenza',
      'Casi studio reali di adozione',
    ],
    handson: 'Role-play: proporre un piano di adozione AI al proprio team',
    hours: 6,
    presence: 'gestita da Sonia',
    deferred: true,
    resources: [
      { label: "Google AI Essentials — certificato gratuito", url: "https://grow.google/certificates/ai-essentials" },
      { label: "Microsoft AI Skills — badge gratuiti", url: "https://learn.microsoft.com/en-us/ai" },
      { label: "Elements of AI — base, disponibile in italiano", url: "https://elementsofai.com" },
    ],
    schedule: [
      { from: '09:00', to: '10:15', type: 'teoria', label: 'Come introdurre l\'AI in un team' },
      { from: '10:15', to: '11:30', type: 'teoria', label: 'Change management e casi studio' },
      { from: '11:30', to: '11:45', type: 'pausa', label: 'Pausa' },
      { from: '11:45', to: '13:15', type: 'pratica', label: 'Analisi casi studio reali' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '16:15', type: 'pratica', label: 'Role-play: piano di adozione AI' },
    ],
  },
  {
    date: '23/04/2026',
    dow: 'Giovedì',
    block: 'ADOZIONE',
    slide: 'lezione-10',
    blockNum: 6,
    title: 'Progetto finale e recap',
    topics: [
      'Presentazione progetti degli studenti',
      'Q&A aperta e troubleshooting',
      'Risorse per continuare a imparare',
    ],
    handson: 'Presentazioni finali + feedback collettivo',
    hours: 6,
    presence: 'gestita da Sonia',
    deferred: true,
    resources: [
      { label: "The Batch — newsletter settimanale AI", url: "https://www.deeplearning.ai/the-batch/" },
      { label: "TLDR AI — digest giornaliero", url: "https://tldr.tech/ai" },
      { label: "Chatbot Arena — benchmark modelli live", url: "https://lmarena.ai" },
      { label: "LLM Stats — tutti i modelli aggiornati", url: "https://llm-stats.com" },
      { label: "Product Hunt AI — novità tool ogni giorno", url: "https://producthunt.com/topics/artificial-intelligence" },
    ],
    schedule: [
      { from: '09:00', to: '10:00', type: 'teoria', label: 'Recap del percorso e risorse utili' },
      { from: '10:00', to: '10:15', type: 'pausa', label: 'Pausa' },
      { from: '10:15', to: '13:15', type: 'pratica', label: 'Presentazioni progetti degli studenti' },
      { from: '13:15', to: '14:15', type: 'pausa', label: 'Pranzo' },
      { from: '14:15', to: '15:15', type: 'pratica', label: 'Q&A aperta e troubleshooting' },
      { from: '15:15', to: '16:15', type: 'pratica', label: 'Feedback collettivo e chiusura' },
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
  const isDev = import.meta.env.DEV
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
      </main>

      <footer>
        <p>Docente: <strong>Attilio Cianci</strong> · Ultimo aggiornamento: marzo 2026</p>
      </footer>
    </div>
  )
}

export default App
