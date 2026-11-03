import { useState, useEffect } from 'react'

export function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    if (!ids || ids.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // At the very bottom of the page, the last section is active
      if (scrollPosition + windowHeight >= docHeight - 15) {
        setActiveId(ids[ids.length - 1])
        return
      }

      // Find the last section whose top is above (<=) the offset line
      let current = ids[0]
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= offset) {
            current = id
          }
        }
      }

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ids, offset])

  return activeId
}
