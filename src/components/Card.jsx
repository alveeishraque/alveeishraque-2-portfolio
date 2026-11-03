import React from 'react'

export function Card({
  children,
  className = '',
  as: Component = 'div',
  hoverable = true,
  ...props
}) {
  return (
    <Component
      className={`rounded-[10px] border border-line bg-card p-[16px_18px] shadow-card transition-all duration-250 ${
        hoverable ? 'hover:-translate-y-[3px] hover:shadow-[var(--shadow-hover)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
