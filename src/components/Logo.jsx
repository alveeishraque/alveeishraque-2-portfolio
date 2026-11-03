import React from 'react'

export function Logo({ size = 84, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`rounded-full shrink-0 ${className}`}
      aria-label="Monogram Logo"
      role="img"
    >
      <defs>
        <clipPath id="logo-circle-clip">
          <circle cx="32" cy="32" r="32" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-circle-clip)">
        <rect width="64" height="64" fill="#4E220F" />
        <text
          x="32"
          y="41"
          textAnchor="middle"
          fill="#F7F1DE"
          fontFamily="Georgia, serif"
          fontWeight="bold"
          fontSize="26"
        >
          YN
        </text>
        <circle cx="50" cy="14" r="4.5" fill="#B0BA99" />
      </g>
    </svg>
  )
}
