import { useState, useEffect, useRef } from 'react'

export function AnimatedCounter({ target, suffix = '', isActive }) {
  const [display, setDisplay] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!isActive) { setDisplay(0); return }
    const duration = 1200
    const start = performance.now()
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(target * ease))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [target, isActive])

  return <>{display}{suffix}</>
}
