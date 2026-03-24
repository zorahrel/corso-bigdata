import { useState, useEffect, useCallback } from 'react'

export function useSlideNavigation(totalSlides, lessonId, onExit) {
  const parseHash = useCallback(() => {
    const match = window.location.hash.match(/^#\/?(lezione-\d+)(?:\/(\d+))?$/)
    if (match && match[1] === lessonId) return Math.max(0, Math.min((parseInt(match[2] || '1', 10) - 1), totalSlides - 1))
    return 0
  }, [lessonId, totalSlides])

  const [currentIndex, setCurrentIndex] = useState(parseHash)

  // Re-parse hash when totalSlides becomes available (data loaded)
  useEffect(() => {
    if (totalSlides > 0) setCurrentIndex(parseHash())
  }, [totalSlides, parseHash])

  const goTo = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(idx, totalSlides - 1))
    setCurrentIndex(clamped)
    window.location.hash = `#/${lessonId}/${clamped + 1}`
  }, [totalSlides, lessonId])

  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex])
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev() }
      else if (e.key === 'Escape') { onExit?.() }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
      else if (e.key === 'End') { e.preventDefault(); goTo(totalSlides - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, goTo, onExit, totalSlides])

  useEffect(() => {
    const onHash = () => setCurrentIndex(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [parseHash])

  // Touch/swipe
  useEffect(() => {
    let startX = 0
    const onStart = (e) => { startX = e.touches[0].clientX }
    const onEnd = (e) => {
      const delta = e.changedTouches[0].clientX - startX
      if (Math.abs(delta) > 50) delta > 0 ? prev() : next()
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => { window.removeEventListener('touchstart', onStart); window.removeEventListener('touchend', onEnd) }
  }, [next, prev])

  return { currentIndex, totalSlides, next, prev, goTo }
}
