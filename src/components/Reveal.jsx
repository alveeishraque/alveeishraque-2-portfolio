import React from 'react'
import { useReveal } from '../hooks/useReveal'

export function Reveal({ children, delay = 0, className = '', as: Component = 'div', ...props }) {
  const { ref, isVisible, isDone } = useReveal(delay)

  const revealStyle = isDone
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }

  return (
    <Component
      ref={ref}
      style={revealStyle}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}
