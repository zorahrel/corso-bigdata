import { useState, useEffect, useCallback, useRef } from 'react'

const BROADCAST_SUPPORTED = typeof BroadcastChannel !== 'undefined'

// Parse the raw slide index from the URL hash (no clamping)
function readHashIndex(lessonId) {
  const match = window.location.hash.match(/^#\/?(lezione-\d+)(?:\/(\d+))?$/)
  if (match && match[1] === lessonId) return parseInt(match[2] || '1', 10) - 1
  return 0
}

export function useSlideNavigation(totalSlides, lessonId, onExit) {
  // Store the raw desired index from the URL — no clamping yet
  const [rawIndex, setRawIndex] = useState(() => readHashIndex(lessonId))
  const isSyncing = useRef(false)
  const ready = totalSlides > 0

  // Clamp only when we have totalSlides
  const currentIndex = ready ? Math.max(0, Math.min(rawIndex, totalSlides - 1)) : rawIndex

  // When totalSlides arrives, re-read hash to get the correct index
  useEffect(() => {
    if (ready) setRawIndex(readHashIndex(lessonId))
  }, [ready, lessonId])

  const goTo = useCallback((idx) => {
    if (!ready) return
    const clamped = Math.max(0, Math.min(idx, totalSlides - 1))
    setRawIndex(clamped)
    window.location.hash = `#/${lessonId}/${clamped + 1}`
  }, [totalSlides, lessonId, ready])

  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex])
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex])

  // Keyboard
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

  // Hash changes
  useEffect(() => {
    const onHash = () => setRawIndex(readHashIndex(lessonId))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [lessonId])

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
    if (!BROADCAST_SUPPORTED || !ready) return

    const channel = new BroadcastChannel('slide-sync')

    channel.onmessage = (e) => {
      const { type, lesson, index } = e.data || {}
      if (type !== 'navigate' || lesson !== lessonId) return
      setRawIndex(prev => {
        if (prev === index) return prev
        isSyncing.current = true
        window.location.hash = `#/${lessonId}/${index + 1}`
        return index
      })
    }

    return () => channel.close()
  }, [lessonId, ready])

  // Broadcast on navigation (only when not receiving)
  useEffect(() => {
    if (!BROADCAST_SUPPORTED || !ready) return

    if (isSyncing.current) {
      isSyncing.current = false
      return
    }

    const channel = new BroadcastChannel('slide-sync')
    channel.postMessage({ type: 'navigate', lesson: lessonId, index: currentIndex })
    channel.close()
  }, [currentIndex, lessonId, ready])

  return { currentIndex, totalSlides, next, prev, goTo, ready, syncSupported: BROADCAST_SUPPORTED }
}
