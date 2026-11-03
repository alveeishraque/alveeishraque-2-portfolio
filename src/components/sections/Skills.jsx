
import React from 'react'
import {
  Code2,
  Brain,
  Wrench
} from 'lucide-react'

import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

const iconMap = {
  code: Code2,
  brain: Brain,
  wrench: Wrench,
}

export function Skills({ skills }) {
  const categories = Object.entries(skills)

  return (
    <section
      id="skills"
      className="scroll-mt-[104px] desktop:scroll-mt-[64px]"
    >
      <SectionHeading id="heading-skills">
        Skills
      </SectionHeading>

      <Reveal>
        <div className="flex flex-col gap-5">
          {categories.map(([category, data]) => {
            const Icon = iconMap[data.icon] || Code2

            return (
              <div
                key={category}
                className="pb-5 border-b border-line last:border-0 last:pb-0"
              >
                {/* Category Heading */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-line bg-hover text-accent-t">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-sm font-semibold text-fg">
                    {category}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <span
                      key={skill}
                      className="
                        inline-flex items-center
                        rounded-lg
                        border border-line
                        bg-card
                        px-3.5 py-2
                        text-xs font-medium
                        text-fg
                        transition-all duration-200
                        hover:border-accent
                        hover:text-accent-t
                        hover:bg-hover
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
