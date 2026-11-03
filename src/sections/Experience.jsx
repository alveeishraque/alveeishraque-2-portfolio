import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { extracurriculars } from '../data/experience';
import { Badge } from '../components/Badge';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] border-t border-slate-200/80 dark:border-[#222838]/40 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Leadership & Activities"
          title="Activities & Club Leadership"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {extracurriculars.map((ec, idx) => (
            <ScrollReveal
              key={ec.id}
              delay={idx * 0.1}
              className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-purple-600 dark:text-[#8B7CFF] flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {ec.period}
                  </span>
                  <Badge variant="subtle">Activity</Badge>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {ec.role}
                </h4>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">
                  {ec.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {ec.description}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-3 border-t border-slate-200 dark:border-[#222838]">
                {ec.contributions.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
