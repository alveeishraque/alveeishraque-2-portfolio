import React from 'react'
import { Mail, Github, Linkedin, IdCard } from 'lucide-react'
import { Avatar } from './Avatar'

export function Sidebar({ profile }) {
  const contactLinks = [
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: Mail,
      isExternal: false,
    },
    {
      label: 'GitHub',
      href: profile.github,
      icon: Github,
      isExternal: true,
    },
    {
      label: 'LinkedIn',
      href: profile.linkedin,
      icon: Linkedin,
      isExternal: true,
    },
    {
      label: 'CV',
      href: profile.cv,
      icon: IdCard,
      isExternal: true,
      download: true,
    },
  ]

  return (
    <>
      {/* Mobile Top Bar (<= 820px) */}
      <header
        className="desktop:hidden sticky top-0 z-[35] h-[50px] bg-side border-b border-line px-4 flex items-center justify-between"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex items-center gap-2.5">
          <Avatar size={32} alt={profile.name} />
          <span className="font-bold text-[0.95rem] text-fg truncate">
            {profile.name}
          </span>
        </div>
      </header>

      {/* Desktop Sidebar (> 820px) */}
      <aside className="hidden desktop:flex sticky top-0 h-screen w-[260px] bg-side border-r border-line p-[32px_22px_16px] flex-col overflow-y-auto shrink-0 z-20">
        {/* Profile Block */}
        <div
          className="flex flex-col items-center text-center animate-rise"
          style={{ animationDelay: '0.05s' }}
        >
          <Avatar size={100} hasRing={true} alt={profile.name} />
          <h1 className="mt-[12px] mb-[2px] text-[1.4rem] font-bold text-fg leading-tight">
            {profile.name}
          </h1>
          <p className="text-[0.82rem] text-mute">{profile.tagline}</p>
        </div>

        {/* Contact Links */}
        <nav
          aria-label="Profile Contact Links"
          className="mt-4 pt-[14px] border-t border-line flex flex-col gap-1"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                download={link.download ? true : undefined}
                className="flex items-center gap-[12px] text-[0.88rem] font-medium text-mute px-[12px] py-[8px] rounded-[8px] transition-all duration-200 hover:bg-hover hover:text-accent-t hover:translate-x-[2px] no-underline"
              >
                <Icon size={16} strokeWidth={2} className="shrink-0" />
                <span>{link.label}</span>
              </a>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
