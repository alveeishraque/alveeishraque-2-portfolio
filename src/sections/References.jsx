import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';
import { Mail, Globe, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function References() {
  return (
    <section id="references" className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] border-t border-slate-200/80 dark:border-[#222838]/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Supervision & Endorsements"
          title="Academic References"
          subtitle="Faculty mentors supervising undergraduate research in multimodal deep learning at BRAC University."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.references.map((ref, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.1}
              className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-purple-700 dark:text-[#8B7CFF] bg-purple-50 dark:bg-[#8B7CFF]/10 border border-purple-200 dark:border-[#8B7CFF]/25 font-medium">
                    {ref.role}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">BRAC University</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {ref.name}
                </h3>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-0.5">
                  {ref.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {ref.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-[#222838] flex flex-wrap items-center gap-4 text-xs">
                {ref.email && (
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                    <span>{ref.email}</span>
                  </a>
                )}

                {ref.website && (
                  <a
                    href={ref.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                    <span>Faculty Website</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
