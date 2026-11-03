import { useState, useEffect, useRef } from 'react'

export function useReveal(delay = 0) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      setIsDone(true)
      return
    }

    const node = ref.current
    if (!node) return

    let timer = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
          timer = setTimeout(() => {
            setIsDone(true)
          }, 700 + delay)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [delay])

  return { ref, isVisible, isDone }
}
