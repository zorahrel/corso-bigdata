import { useState, useEffect, useCallback, useRef } from 'react'

const BROADCAST_SUPPORTED = typeof BroadcastChannel !== 'undefined'

export function useSlideNavigation(totalSlides, lessonId, onExit) {
  const parseHash = useCallback(() => {
    const match = window.location.hash.match(/^#\/?(lezione-\d+)(?:\/(\d+))?$/)
    if (match && match[1] === lessonId) return Math.max(0, Math.min((parseInt(match[2] || '1', 10) - 1), totalSlides - 1))
    return 0
  }, [lessonId, totalSlides])

  const [currentIndex, setCurrentIndex] = useState(parseHash)
  const isSyncing = useRef(false)

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

  // BroadcastChannel sync
  useEffect(() => {
    if (!BROADCAST_SUPPORTED || totalSlides === 0) return

    const channel = new BroadcastChannel('slide-sync')

    channel.onmessage = (e) => {
      const { type, lesson, index } = e.data || {}
      if (type !== 'navigate' || lesson !== lessonId) return
      setCurrentIndex(prev => {
        if (prev === index) return prev
        isSyncing.current = true
        window.location.hash = `#/${lessonId}/${index + 1}`
        return index
      })
    }

    return () => channel.close()
  }, [lessonId, totalSlides])

  // Broadcast on navigation (only when not receiving)
  useEffect(() => {
    if (!BROADCAST_SUPPORTED || totalSlides === 0) return

    if (isSyncing.current) {
      isSyncing.current = false
      return
    }

    const channel = new BroadcastChannel('slide-sync')
    channel.postMessage({ type: 'navigate', lesson: lessonId, index: currentIndex })
    channel.close()
  }, [currentIndex, lessonId, totalSlides])

  return { currentIndex, totalSlides, next, prev, goTo, syncSupported: BROADCAST_SUPPORTED }
}
