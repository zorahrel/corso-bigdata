import { useState, useEffect } from 'react'
import { useSlideNavigation } from './useSlideNavigation'
import { SlideTitle } from './components/SlideTitle'
import { SlideAgenda } from './components/SlideAgenda'
import { SlideConcept } from './components/SlideConcept'
import { SlideDemo } from './components/SlideDemo'
import { SlideHandsOn } from './components/SlideHandsOn'
import { SlideResource } from './components/SlideResource'
import { SlideQuote } from './components/SlideQuote'
import { SlideStats } from './components/SlideStats'
import { SlideMeme } from './components/SlideMeme'
import { SlideRecap } from './components/SlideRecap'
import { SlideClosing } from './components/SlideClosing'
import { SlideCustom } from './components/SlideCustom'
import { SlideFooter } from './components/SlideFooter'
import './slides.css'

const SLIDE_COMPONENTS = {
  'title': SlideTitle,
  'agenda': SlideAgenda,
  'concept': SlideConcept,
  'demo': SlideDemo,
  'hands-on': SlideHandsOn,
  'resource': SlideResource,
  'quote': SlideQuote,
  'stats': SlideStats,
  'meme': SlideMeme,
  'recap': SlideRecap,
  'closing': SlideClosing,
  'custom': SlideCustom,
}

const TYPE_LABELS = {
  'title': 'Titolo',
  'agenda': 'Agenda',
  'concept': 'Contenuto',
  'demo': 'Demo',
  'hands-on': 'Esercizio',
  'resource': 'Risorse',
  'quote': 'Citazione',
  'stats': 'Statistiche',
  'meme': 'Meme',
  'recap': 'Recap',
  'closing': 'Chiusura',
  'custom': 'Contenuto',
}

const dataModules = import.meta.glob('./data/lezione-*.js')

export function SlideViewer({ lessonId, onExit }) {
  const [lessonData, setLessonData] = useState(null)
  const [error, setError] = useState(null)
  const [showOverview, setShowOverview] = useState(false)

  useEffect(() => {
    const path = `./data/${lessonId}.js`
    const loader = dataModules[path]
    if (!loader) {
      setError(`Lezione "${lessonId}" non trovata`)
      return
    }
    loader().then(mod => setLessonData(mod)).catch(e => setError(e.message))
  }, [lessonId])

  const slides = lessonData?.slides || []
  const meta = lessonData?.meta || {}
  const { currentIndex, totalSlides, next, prev, goTo } = useSlideNavigation(slides.length, lessonId, onExit)

  if (error) {
    return (
      <div className="slide-viewport" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{ color: 'var(--danger)' }}>{error}</h2>
        <button onClick={onExit} style={{ padding: '8px 24px', cursor: 'pointer' }}>Torna alla home</button>
      </div>
    )
  }

  if (!lessonData) {
    return (
      <div className="slide-viewport" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '1.5em', color: 'var(--muted)' }}>Caricamento...</div>
      </div>
    )
  }

  const currentSlide = slides[currentIndex]
  if (!currentSlide) return null

  const Component = SLIDE_COMPONENTS[currentSlide.type] || SlideConcept
  const lessonNum = lessonId.replace('lezione-', '')

  return (
    <div className="slide-viewport">
      <div className="slide-nav-bar">
        <button className="slide-nav-close" onClick={onExit}>
          <kbd>ESC</kbd> Chiudi
        </button>
        <div className="slide-nav-center">
          <button className="slide-nav-arrow" onClick={prev} disabled={currentIndex === 0}>‹</button>
          <span className="slide-nav-label">Lezione {lessonNum} — {currentIndex + 1}/{totalSlides}</span>
          <button className="slide-nav-arrow" onClick={next} disabled={currentIndex === totalSlides - 1}>›</button>
        </div>
        <button
          className={`slide-nav-overview-btn ${showOverview ? 'active' : ''}`}
          onClick={() => setShowOverview(!showOverview)}
        >
          ▦ Panoramica
        </button>
      </div>

      {showOverview && (
        <div className="slide-overview">
          <div className="slide-overview-grid">
            {slides.map((slide, i) => (
              <button
                key={i}
                className={`slide-overview-item ${i === currentIndex ? 'active' : ''}`}
                onClick={() => { goTo(i); setShowOverview(false) }}
              >
                <span className="slide-overview-num">{i + 1}</span>
                <span className="slide-overview-type" data-type={slide.type}>
                  {TYPE_LABELS[slide.type] || slide.type}
                </span>
                <span className="slide-overview-title">
                  {slide.heading || slide.title || slide.text?.substring(0, 30) || slide.caption || ''}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="slide-container" key={currentIndex} onClick={() => showOverview && setShowOverview(false)}>
        <Component {...currentSlide} isActive={true} />
      </div>
      <SlideFooter
        lessonTitle={meta.title || lessonId}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
      />
      {!showOverview && (
        <>
          <div
            onClick={prev}
            style={{ position: 'fixed', left: 0, top: '36px', width: '12%', height: 'calc(100% - 76px)', cursor: 'w-resize', zIndex: 50 }}
          />
          <div
            onClick={next}
            style={{ position: 'fixed', right: 0, top: '36px', width: '12%', height: 'calc(100% - 76px)', cursor: 'e-resize', zIndex: 50 }}
          />
        </>
      )}
    </div>
  )
}
