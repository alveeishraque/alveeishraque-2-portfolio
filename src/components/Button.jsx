import React from 'react'

export function Button({
  children,
  href,
  onClick,
  variant = 'secondary', // 'primary' | 'secondary'
  className = '',
  target,
  rel,
  download,
  ...props
}) {
  const isPrimary = variant === 'primary'

  const baseStyles =
    'inline-flex items-center justify-center gap-1.5 text-[0.8rem] font-medium px-[12px] py-[4px] rounded-[8px] transition-all duration-200 cursor-pointer no-underline'

  const variantStyles = isPrimary
    ? 'border border-fg bg-fg text-bg hover:-translate-y-0.5 hover:opacity-95'
    : 'border border-line bg-card text-fg hover:-translate-y-0.5 hover:border-accent hover:text-accent-t'

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (isExternal && !href.startsWith('mailto:') ? '_blank' : undefined)}
        rel={rel || (isExternal && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined)}
        download={download}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  )
}
