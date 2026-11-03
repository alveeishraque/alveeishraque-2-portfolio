import React from 'react'

export function Row({
  date,
  children,
  className = '',
  isLast = false,
  ...props
}) {
  return (
    <div
      className={`flex flex-col desktop:flex-row gap-1 desktop:gap-[18px] py-[9px] ${
        !isLast ? 'border-b border-line' : ''
      } ${className}`}
      {...props}
    >
      {date && (
        <div className="desktop:w-[110px] shrink-0 text-[0.85rem] text-mute font-normal">
          {date}
        </div>
      )}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
