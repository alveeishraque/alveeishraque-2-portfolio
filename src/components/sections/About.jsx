import React from 'react'
import { Card } from '../Card'
import { Chip } from '../Chip'
import { Button } from '../Button'
import { Mail, FileText } from 'lucide-react'

export function About({ about, profile }) {
  return (
    <section id="about" className="scroll-mt-[104px] desktop:scroll-mt-[64px]">
      <h2
        className="text-[1.6rem] font-bold tracking-[-0.01em] text-fg mt-[1.2rem] desktop:mt-[1.6rem] mb-[1rem] animate-rise"
        style={{ animationDelay: '0.1s' }}
      >
        About Me
      </h2>

      <div className="animate-rise" style={{ animationDelay: '0.15s' }}>
        <Card className="flex flex-col gap-4">
          <p className="text-[1rem] leading-[1.7] text-fg">
            {about.bio}
          </p>

          {/* <div className="flex flex-wrap items-center gap-2 pt-1 text-[0.95rem] text-fg">
            <span>{about.seeking.prefix}</span>
            <Chip variant="current" className="text-[0.8rem] px-3 py-0.5">
              {about.seeking.highlight}
            </Chip>
          </div> */}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              href={profile.cv}
              download={true}
              aria-label="Download Curriculum Vitae"
            >
              <FileText size={16} strokeWidth={2} />
              <span>Download CV</span>
            </Button>
            {/* <Button
              variant="secondary"
              href={`mailto:${profile.email}`}
              aria-label="Send email"
            >
              <Mail size={16} strokeWidth={2} />
              <span>Email me</span>
            </Button> */}
          </div>
        </Card>
      </div>
    </section>
  )
}
