import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'dark') return true
      if (saved === 'light') return false
    } catch (e) {
      // LocalStorage access might fail in restricted iframe or private mode
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved === 'dark' || saved === 'light') {
        document.documentElement.dataset.theme = saved
        setIsDark(saved === 'dark')
      } else {
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDark(media.matches)
      }
    } catch (e) {}

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      try {
        const saved = localStorage.getItem('portfolio-theme')
        if (!saved) {
          setIsDark(e.matches)
        }
      } catch (err) {}
    }

    if (media.addEventListener) {
      media.addEventListener('change', handleChange)
    } else if (media.addListener) {
      media.addListener(handleChange)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', handleChange)
      } else if (media.removeListener) {
        media.removeListener(handleChange)
      }
    }
  }, [])

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev
      const themeStr = next ? 'dark' : 'light'
      try {
        localStorage.setItem('portfolio-theme', themeStr)
      } catch (e) {}
      document.documentElement.dataset.theme = themeStr
      return next
    })
  }

  return { isDark, toggle }
}
