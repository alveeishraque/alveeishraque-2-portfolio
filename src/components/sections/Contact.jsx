
import React from 'react'
import { Card } from '../Card'
import { Button } from '../Button'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'
import { Mail, Github, Linkedin } from 'lucide-react'

export function Contact({ contact, profile }) {
  return (
    <section
      id="contact"
      className="scroll-mt-[104px] desktop:scroll-mt-[64px] pb-12"
    >
      <SectionHeading id="heading-contact">
        Contact
      </SectionHeading>

      <Reveal>
        <Card className="flex flex-col items-center gap-5 text-center py-8 px-6">
          <p className="max-w-2xl text-[1rem] leading-[1.7] text-fg">
            {contact.text}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              href={`mailto:${profile.email}`}
              aria-label={`Send email to ${profile.email}`}
            >
              <Mail size={16} strokeWidth={2} />
              <span>{profile.email}</span>
            </Button>

            {profile.linkedin && (
              <Button
                variant="secondary"
                href={profile.linkedin}
                aria-label="View LinkedIn profile"
              >
                <Linkedin size={16} strokeWidth={2} />
                <span>LinkedIn</span>
              </Button>
            )}

            {profile.github && (
              <Button
                variant="secondary"
                href={profile.github}
                aria-label="View GitHub profile"
              >
                <Github size={16} strokeWidth={2} />
                <span>GitHub</span>
              </Button>
            )}
          </div>
        </Card>
      </Reveal>
    </section>
  )
}
