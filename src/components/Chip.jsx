import React from 'react'

export function Chip({
  children,
  variant = 'default', // 'default' | 'current' | 'skill'
  className = '',
  as: Component = 'span',
  ...props
}) {
  if (variant === 'skill') {
    return (
      <Component
        className={`inline-block text-[0.85rem] px-[12px] py-[3px] rounded-[8px] border border-line bg-bg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-t ${className}`}
        {...props}
      >
        {children}
      </Component>
    )
  }

  const isCurrent = variant === 'current'

  return (
    <Component
      className={`inline-flex items-center text-[0.7rem] px-[9px] py-[1px] rounded-full font-medium shrink-0 leading-normal ${
        isCurrent ? 'bg-coral text-coral-fg' : 'bg-tag text-tagfg'
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
