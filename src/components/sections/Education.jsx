import React from 'react'
import { Card } from '../Card'
import { Row } from '../Row'
import { Chip } from '../Chip'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

export function Education({ education, honors }) {
  return (
    <section id="education" className="scroll-mt-[104px] desktop:scroll-mt-[64px]">
      <SectionHeading id="heading-education">Education</SectionHeading>

      <Reveal>
        <Card>
          {education.map((item, index) => {
            const isLast = index === education.length - 1
            return (
              <Row key={item.degree} date={item.period} isLast={isLast}>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-semibold text-[0.98rem] text-fg">
                      {item.degree}
                    </h4>
                    <span className="text-[0.88rem] text-mute">
                      {item.institution}
                    </span>
                  </div>

                  {item.details?.cgpa && (
                    <div className="text-[0.88rem] text-fg">
                      <span className="text-mute font-medium">CGPA: </span>
                      <span className="font-semibold">{item.details.cgpa}</span>
                    </div>
                  )}

                  {item.details?.result && (
                    <div className="text-[0.88rem] text-fg">
                      {/* <span className="text-mute font-medium">Result: </span>
                      <span>{item.details.result}</span> */}
                      {item.details.focus && (
                        <span className="text-mute"> Group — {item.details.focus}</span>
                      )}
                    </div>
                  )}

                  {item.details?.thesis && (
                    <div className="text-[0.88rem] text-fg">
                      <span className="text-mute font-medium">Thesis: </span>
                      <span className="italic">{item.details.thesis}</span>
                      {item.details.supervisor && (
                        <span className="text-mute">
                          {' '}
                          (Supervisor: {item.details.supervisor})
                        </span>
                      )}
                    </div>
                  )}

                  {item.details?.coursework && item.details.coursework.length > 0 && (
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      <span className="text-[0.74rem] uppercase tracking-[0.07em] text-mute font-semibold mr-1">
                        Selected Coursework:
                      </span>
                      {item.details.coursework.map((course) => (
                        <Chip
                          key={course}
                          variant="skill"
                          className="text-[0.78rem] px-2 py-0.5"
                        >
                          {course}
                        </Chip>
                      ))}
                    </div>
                  )}
                </div>
              </Row>
            )
          })}
        </Card>
      </Reveal>

      {/* Honors & Awards Sub-heading */}
      <Reveal>
        <h3 className="text-[1.05rem] font-semibold text-mute mt-[2rem] mb-[0.8rem]">
          Honors & Awards
        </h3>
      </Reveal>

      <Reveal>
        <Card>
          {honors.map((item, index) => {
            const isLast = index === honors.length - 1
            return (
              <Row key={item.title} date={item.date} isLast={isLast}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="font-semibold text-[0.95rem] text-fg">
                      {item.title}
                    </h4>
                    <span className="text-[0.85rem] text-mute">
                      {item.organization}
                    </span>
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
