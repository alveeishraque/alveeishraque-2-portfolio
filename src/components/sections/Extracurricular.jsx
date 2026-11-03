import React from 'react'
import { Card } from '../Card'
import { Row } from '../Row'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

export function Extracurricular({ extracurricular }) {
  return (
    <section id="extra" className="scroll-mt-[104px] desktop:scroll-mt-[64px]">
      <SectionHeading id="heading-extra">Extracurricular</SectionHeading>

      <Reveal>
        <Card>
          {extracurricular.map((item, index) => {
            const isLast = index === extracurricular.length - 1
            return (
              <Row key={item.role} date={item.period} isLast={isLast}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-semibold text-[0.95rem] text-fg">
                      {item.role}
                    </h4>
                    {item.organization && (
                      <span className="text-[0.85rem] text-mute">
                        {item.organization}
                      </span>
                    )}
                  </div>
                  <p className="text-[0.86rem] text-mute leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Row>
            )
          })}
        </Card>
      </Reveal>
    </section>
  )
}
