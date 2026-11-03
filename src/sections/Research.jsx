import React, { useState } from 'react';

import { SectionHeading } from '../components/SectionHeading';

import { researchData } from '../data/research';

import { Badge } from '../components/Badge';

import { BookOpen, Layers, Cpu, Copy, Sparkles, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';

import { ScrollReveal } from '../components/ScrollReveal';

export function Research({ onOpenCitation, onNotify }) {
  const { thesis, researchInterests } = researchData;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(thesis.bibtex);
    if (onNotify) onNotify('BibTeX citation copied to clipboard!');
  };

  return (
    <section
      id="research"
      className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Undergraduate Thesis"
          title="Multimodal Biomedical AI & Scholarly Inquiry"
        />

        {/* Primary Thesis Deep-Dive Box */}
        <ScrollReveal
          direction="up"
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-sm dark:shadow-none relative transition-colors duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-[#222838]">
            <div className="flex flex-wrap items-center gap-2">
              {/* <Badge variant="accent">Flagship Thesis</Badge>
              <Badge variant="verified">AUC 0.9052</Badge> */}
            </div>

            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Department of CSE • BRAC University
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
              {thesis.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              {/* <div>
                <span className="text-slate-500 dark:text-slate-500">Lead Author:</span>{' '}
                <span className="text-slate-800 dark:text-slate-200 font-medium">Alvee Ishraque</span>
              </div> */}

              <div>•</div>

              <div>
                <span className="text-slate-500 dark:text-slate-500">Institution:</span>{' '}
                <span className="text-slate-800 dark:text-slate-200">
                  BRAC University
                </span>
              </div>

              <div>•</div>

              <div>
                <span className="text-slate-500 dark:text-slate-500">Supervisors:</span>{' '}

                <span className="text-slate-800 dark:text-slate-200">
                  <a
                    href="https://www.bracu.ac.bd/about/people/amitabha-chakrabarty-phd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors"
                  >
                    Dr. Amitabha Chakrabarty
                  </a>

                  {' & '}

                  <a
                    href="https://www.bracu.ac.bd/about/people/md-saiful-bari-siddiqui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors"
                  >
                    Md. Saiful Bari Siddiqui
                  </a>
                </span>
              </div>
            </div>

            {/* Abstract Summary (Always Visible in First View) */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
              <span className="font-semibold block mb-1 text-xs uppercase tracking-wider text-purple-600 dark:text-[#8B7CFF]">
                Abstract Summary:
              </span>

              {thesis.abstract}
            </div>
          </div>

          {/* Expandable Technical Details Section */}
          {isExpanded && (
            <div className="space-y-8 pt-4 border-t border-slate-200 dark:border-[#222838] animate-fade-in">

              {/* 3 Modalities Breakdown */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                  Tri-Modal Clinical Data Synergy
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {thesis.modalities.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B0D12] border border-slate-200 dark:border-[#222838] space-y-2 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {mod.name}
                        </span>

                        <span className="text-[10px] font-mono text-purple-600 dark:text-[#8B7CFF]">
                          {mod.type}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        {mod.role}
                      </p>

                      <div className="pt-1 text-[10px] font-mono text-slate-500">
                        Engine: {mod.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Architectural Pipeline Steps */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                  Hierarchical Fusion Architecture Pipeline
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {thesis.architectureHighlights.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] flex flex-col justify-between transition-colors"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-purple-600 dark:text-[#8B7CFF] block mb-1.5">
                          {step.step}
                        </span>

                        <h5 className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                          {step.name}
                        </h5>

                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Actions, Dropdown Toggle & Citation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-[#222838]">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-purple-700 dark:text-[#8B7CFF] bg-purple-50 dark:bg-[#8B7CFF]/10 border border-purple-200 dark:border-[#8B7CFF]/25 hover:bg-purple-100 dark:hover:bg-[#8B7CFF]/20 transition-colors shadow-xs"
              >
                <span>
                  {isExpanded
                    ? "Hide Architecture Details"
                    : "Show Full Architecture Details"}
                </span>

                {isExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              {/* <button
                onClick={onOpenCitation}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] hover:text-purple-600 dark:hover:text-white transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                <span>BibTeX Citation</span>
              </button> */}
            </div>
          </div>
        </ScrollReveal>

        {/* Research Interests */}
        <div>
          <ScrollReveal
            direction="up"
            distance={16}
            className="mb-4"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF]" />
              Research Interests
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchInterests.map((interest, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 0.08}
                className="p-5 rounded-xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] flex items-start gap-3.5 shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-purple-50 text-purple-700 dark:bg-[#8B7CFF]/10 dark:text-[#8B7CFF] border border-purple-200/60 dark:border-transparent shrink-0 mt-0.5">
                  <GitBranch className="w-4 h-4" />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    {interest.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}