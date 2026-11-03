import React from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ isDark, onToggle, compact = false, className = '' }) {
  const label = isDark ? 'Light mode' : 'Dark mode'
  const Icon = isDark ? Sun : Moon

  if (compact) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label={label}
        title={label}
        className={`min-h-10 min-w-10 p-2 rounded-lg text-[#F7F1DE] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 flex items-center justify-center shrink-0 ${className}`}
        style={{
          backgroundColor: '#9D6638',
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        }}
      >
        <Icon size={16} strokeWidth={2} />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className={`w-full flex items-center justify-center gap-2 py-[10px] px-3 rounded-[10px] text-[#F7F1DE] font-semibold text-[0.88rem] border-0 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-[1.06] shadow-sm cursor-pointer ${className}`}
      style={{
        backgroundColor: '#9D6638',
      }}
    >
      <Icon size={16} strokeWidth={2} />
      <span>{label}</span>
    </button>
  )
}
