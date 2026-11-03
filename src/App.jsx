import React from 'react'
import { content } from './data/content'
import { useTheme } from './hooks/useTheme'
import { useScrollSpy } from './hooks/useScrollSpy'
import { ProgressBar } from './components/ProgressBar'
import { Sidebar } from './components/Sidebar'
import { TopNav } from './components/TopNav'
import { About } from './components/sections/About'
import { Education } from './components/sections/Education'
import { Research } from './components/sections/Research'
import { Skills } from './components/sections/Skills'
import { Extracurricular } from './components/sections/Extracurricular'
import { Contact } from './components/sections/Contact'

const SECTION_IDS = ['about', 'education', 'research', 'projects', 'skills', 'extra', 'contact']

export default function App() {
  const { isDark, toggle } = useTheme()
  const activeSectionId = useScrollSpy(SECTION_IDS, 140)

  return (
    <div className="min-h-screen bg-bg text-fg">
      <ProgressBar />

      <div className="desktop:grid desktop:grid-cols-[260px_1fr] min-h-screen">
        {/* Sidebar: sticky top bar on mobile, full sticky sidebar on desktop */}
        <Sidebar
          profile={content.profile}
        />

        {/* Right column: sticky TopNav + Main content */}
        <div className="flex flex-col min-w-0">
          <TopNav
            activeId={activeSectionId}
            isDark={isDark}
            onToggle={toggle}
          />

          <main className="w-full max-w-[900px] mx-auto px-[18px] py-[20px] desktop:px-[28px] desktop:py-[26px] desktop:pb-[60px] flex-1">
            <About about={content.about} profile={content.profile} />
            <Education
              education={content.education}
              honors={content.honors}
            />
            <Research
              researchInterests={content.researchInterests}
              publications={content.publications}
              projects={content.projects}
              talks={content.talks}
            />
            <Skills skills={content.skills} />
            <Extracurricular extracurricular={content.extracurricular} />
            <Contact
              contact={content.contact}
              profile={content.profile}
            />
          </main>
        </div>
      </div>
    </div>
  )
}
