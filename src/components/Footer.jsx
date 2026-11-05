import React from 'react'
import { personalInfo } from '../data/personalInfo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-accent bg-bg px-6 py-4 sm:px-12">
      <div className="flex flex-col items-center justify-between gap-3 text-xs text-mute sm:flex-row sm:gap-5">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
          <span className="font-semibold text-fg">{personalInfo.name}</span>
          <span className="hidden h-6 border-l border-accent/50 sm:block" />
          <span>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </span>
        </div>
        <p>
          Designed &amp; Developed by{' '}
          <span className="font-semibold text-accent-t">Alvee</span>
        </p>
      </div>
    </footer>
  )
}
