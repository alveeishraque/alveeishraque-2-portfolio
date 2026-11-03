import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import { Code2, Brain, BarChart3, Eye, Globe, Database, Wrench } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

const categoryIcons = {
  programming: Code2,
  mldl: Brain,
  datascience: BarChart3,
  cv: Eye,
  web: Globe,
  databases: Database,
  tools: Wrench,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-purple-600 dark:bg-[#8B7CFF] text-white shadow-sm shadow-purple-500/20'
                : 'bg-white dark:bg-[#12151D] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-[#222838] hover:text-slate-900 dark:hover:text-white hover:border-purple-300 dark:hover:border-slate-600'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>

          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-purple-600 dark:bg-[#8B7CFF] text-white shadow-sm shadow-purple-500/20'
                    : 'bg-white dark:bg-[#12151D] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-[#222838] hover:text-slate-900 dark:hover:text-white hover:border-purple-300 dark:hover:border-slate-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || Code2;
            return (
              <ScrollReveal
                key={cat.id}
                delay={idx * 0.08}
                className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-700 dark:bg-[#8B7CFF]/10 dark:text-[#8B7CFF] border border-purple-200/60 dark:border-[#8B7CFF]/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-2.5 rounded-lg border transition-colors ${
                          skill.highlight
                            ? 'bg-purple-50/50 dark:bg-[#161A24] border-purple-200 dark:border-[#222838] hover:border-purple-300 dark:hover:border-[#8B7CFF]/50'
                            : 'bg-slate-50 dark:bg-[#0E1017] border-slate-200/80 dark:border-[#1C2130]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span
                            className={`text-xs font-medium ${
                              skill.highlight
                                ? 'text-purple-900 dark:text-white font-semibold'
                                : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 leading-normal">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
