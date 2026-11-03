import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { education } from '../data/experience';
import { Badge } from '../components/Badge';
import { MapPin, ChevronDown, ChevronUp, BookOpen, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Education() {
  const [expandedEdu, setExpandedEdu] = useState({
    'edu-bsc': true, // Keep university education expanded by default
    'edu-hsc': false,
    'edu-ssc': false,
  });

  const toggleExpand = (id) => {
    setExpandedEdu((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    setExpandedEdu({
      'edu-bsc': true,
      'edu-hsc': true,
      'edu-ssc': true,
    });
  };

  const collapseAll = () => {
    setExpandedEdu({
      'edu-bsc': false,
      'edu-hsc': false,
      'edu-ssc': false,
    });
  };

  const allExpanded = Object.values(expandedEdu).every(Boolean);

  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] border-t border-slate-200/80 dark:border-[#222838]/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            badge="Academic Qualifications"
            title="Education & Academic Journey"
          />

          <div className="flex items-center gap-2 mb-8 sm:mb-12">
            <button
              onClick={allExpanded ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:border-purple-300 dark:hover:border-[#8B7CFF]/50 transition-colors shadow-xs"
            >
              {allExpanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                  <span>Show More Details</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((edu, idx) => {
            const isBsc = edu.id === 'edu-bsc';
            const isExpanded = isBsc ? expandedEdu[edu.id] : false;

            return (
              <ScrollReveal
                key={edu.id}
                delay={idx * 0.1}
                className={`rounded-2xl transition-all duration-300 border ${
                  isBsc
                    ? 'bg-gradient-to-b from-white to-purple-50/20 dark:from-[#141824] dark:to-[#10131B] border-purple-200/80 dark:border-[#8B7CFF]/30 shadow-sm dark:shadow-lg dark:shadow-black/30'
                    : 'bg-white dark:bg-[#12151D] border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => isBsc && toggleExpand(edu.id)}
                  className={`p-6 select-none flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isBsc ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 dark:text-[#8B7CFF]">
                        {edu.level}
                      </span>
                      <Badge variant={isBsc ? 'verified' : 'accent'}>
                        {edu.gradeValue}
                      </Badge>
                      <span className="text-xs text-slate-500 font-mono">
                        [{edu.period}]
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      <span className="text-slate-700 dark:text-slate-200">{edu.institution}</span>
                      <span className="text-slate-400 dark:text-slate-600">•</span>
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-purple-600 dark:text-[#8B7CFF]" /> {edu.location}
                      </span>
                    </div>

                    {edu.thesisInterest && (
                      <p className="text-xs text-purple-600 dark:text-[#8B7CFF] font-medium pt-1">
                        <span className="text-slate-500 dark:text-slate-400 font-normal">Thesis interest:</span> {edu.thesisInterest}
                      </p>
                    )}
                  </div>

                  {/* Right side: Grade badge & expand trigger */}
                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-[#222838]">
                    <div className="text-left md:text-right">
                      <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-500/25 inline-block">
                        {edu.grade}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {edu.status}
                      </div>
                    </div>

                    {isBsc && (
                      <button
                        type="button"
                        aria-label="Toggle details"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Collapsible Details Section (Only renders for BSc when expanded) */}
                {isBsc && isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200/80 dark:border-[#222838] space-y-4 animate-fade-in text-xs sm:text-sm">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Academic Highlights & Distinctions
                      </h4>
                      <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                        {edu.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {edu.relevantCourses && (
                      <div className="pt-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" /> Key Curriculum & Coursework
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.relevantCourses.map((c, i) => (
                            <span
                              key={i}
                              className={`px-2.5 py-1 text-xs rounded-md border ${
                                c.includes('CSE427') || c.includes('CSE440')
                                  ? 'bg-purple-50 text-purple-700 border-purple-200 font-semibold dark:bg-[#8B7CFF]/15 dark:text-[#8B7CFF] dark:border-[#8B7CFF]/30'
                                  : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-[#161A24] dark:text-slate-300 dark:border-[#222838]'
                              }`}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
