import React from 'react'
import { Reveal } from './Reveal'

export function SectionHeading({
  children,
  id,
  as: Component = 'h2',
  className = '',
  reveal = true,
  ...props
}) {
  const isH2 = Component === 'h2'

  const headingClasses = isH2
    ? 'text-[1.6rem] font-bold tracking-[-0.01em] text-fg mt-[2.4rem] mb-[1rem]'
    : 'text-[1.05rem] font-semibold text-mute mt-[2rem] mb-[0.8rem]'

  const content = (
    <Component
      id={id}
      className={`${headingClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )

  if (reveal && isH2) {
    return <Reveal>{content}</Reveal>
  }

  return content
}
