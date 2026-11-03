import React from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

export function ProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        backgroundColor: 'var(--accent)',
        zIndex: 50,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none',
      }}
    />
  )
}
