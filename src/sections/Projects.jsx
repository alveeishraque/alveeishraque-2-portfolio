import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projects, projectCategories } from '../data/projects';
import { Badge } from '../components/Badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Projects({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] border-t border-slate-200/80 dark:border-[#222838]/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Featured Portfolio"
          title="Projects"
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-start flex-wrap gap-2.5 mb-8 pb-3 border-b border-slate-200 dark:border-[#222838]/60">
          <span className="text-xs text-slate-500 dark:text-slate-400 mr-1 font-medium">Filter By:</span>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-purple-600 dark:bg-[#161A24] text-white border border-purple-600 dark:border-[#222838] shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 bg-white dark:bg-transparent border border-slate-200 dark:border-transparent hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((proj, idx) => {
            if (proj.id === 'xeb-fusenet') return null; // Exclude XEB-FuseNet (featured in Research)
            return (
              <ScrollReveal
                key={proj.id}
                delay={idx * 0.08}
                className="p-6 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:shadow-lg dark:hover:shadow-black/40 hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="subtle">{proj.category}</Badge>
                    <span className="text-[11px] font-mono text-slate-500">
                      {proj.status}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProject && onSelectProject(proj)}
                    className="text-base font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-[#8B7CFF] transition-colors cursor-pointer"
                  >
                    {proj.title}
                  </h3>

                  {proj.subtitle && (
                    <p className="text-xs text-purple-600 dark:text-[#8B7CFF] font-medium mb-3">
                      {proj.subtitle}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {proj.summary}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-[#161A24] text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-[#222838]"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                        +{proj.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-[#222838] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject && onSelectProject(proj)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-[#8B7CFF] hover:text-purple-700 dark:hover:text-[#9E91FF] transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#161A24] transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demoLink && (
                      <a
                        href={proj.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-[#8B7CFF] hover:bg-slate-100 dark:hover:bg-[#161A24] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* GitHub External Call to Action */}
        <div className="flex justify-center">
          <a
            href="https://github.com/alveeishraque"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] hover:border-purple-300 dark:hover:border-[#8B7CFF]/60 hover:bg-slate-50 dark:hover:bg-[#1B202D] transition-all shadow-sm group active:scale-95"
          >
            <Github className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF] group-hover:scale-110 transition-transform" />
            <span>For more projects visit GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
