import React from 'react'
import { ThemeToggle } from './ThemeToggle'

export function TopNav({ activeId, isDark, onToggle }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'extra', label: 'Extracurricular' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      // Update hash without jumping
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <>
      <nav
        aria-label="Section navigation"
        className="sticky top-[50px] desktop:top-0 z-30 border-b border-line"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg) 88%, transparent)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <div className="max-w-[900px] mx-auto px-[14px] py-[8px] desktop:px-[28px] desktop:py-[10px] flex items-center gap-[8px] text-[0.9rem] font-medium">
          <div className="flex min-w-0 flex-1 items-center gap-[4px] overflow-x-auto overscroll-x-contain touch-pan-x scroll-smooth no-scrollbar">
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`min-h-10 shrink-0 px-3 py-2 desktop:px-[14px] rounded-[8px] whitespace-nowrap transition-colors duration-200 no-underline ${
                    isActive
                      ? 'bg-hover text-accent-t'
                      : 'text-mute hover:bg-hover hover:text-fg'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
          <div className="hidden shrink-0 desktop:block">
            <ThemeToggle isDark={isDark} onToggle={onToggle} compact />
          </div>
        </div>
      </nav>
      <div
        className="fixed bottom-4 right-4 z-40 desktop:hidden"
        style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
      >
        <ThemeToggle isDark={isDark} onToggle={onToggle} compact />
      </div>
    </>
  )
}
