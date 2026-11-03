import React, { useState } from 'react'
import { Logo } from './Logo'

export function Avatar({
  size = 84,
  alt = 'Profile photo',
  hasRing = false,
  className = '',
}) {
  const [hasError, setHasError] = useState(false)
  const imageUrl = `${import.meta.env.BASE_URL}image.png`

  if (hasError) {
    return <Logo size={size} className={className} />
  }

  const ringStyles = hasRing
    ? {
        boxShadow: '0 0 0 3px var(--bg), 0 0 0 5px var(--accent)',
      }
    : {}

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={size}
      height={size}
      loading="eager"
      onError={() => setHasError(true)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...ringStyles,
      }}
      className={`rounded-full object-cover shrink-0 transition-transform duration-250 ease-out ${
        hasRing ? 'hover:-rotate-6 hover:scale-105' : ''
      } ${className}`}
    />
  )
}
