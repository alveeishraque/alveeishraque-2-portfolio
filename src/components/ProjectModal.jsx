import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, Layers, Activity, FileText } from 'lucide-react';
import { Badge } from './Badge';

export function ProjectModal({ project, isOpen, onClose, onOpenCitation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-100 max-h-[90vh] overflow-y-auto custom-scrollbar transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#222838]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="accent">{project.category}</Badge>
              {project.status && <Badge variant="subtle">{project.status}</Badge>}
              {project.featured && <Badge variant="verified">Flagship Research</Badge>}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs sm:text-sm text-purple-600 dark:text-[#8B7CFF] mt-1 font-medium">
                {project.subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-6 text-sm">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" /> Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#161A24] p-4 rounded-xl border border-slate-200 dark:border-[#222838]">
              {project.summary}
            </p>
          </div>

          {/* Modalities (if multimodal) */}
          {project.modalities && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" /> Clinical & Data Modalities
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.modalities.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#161A24] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#222838]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" /> Problem Statement
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#161A24]/60 p-4 rounded-xl border border-slate-200 dark:border-[#222838]">
              {project.problemStatement}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" /> Technical Methodology & Architecture
            </h4>
            <div className="space-y-2.5">
              {project.methodology.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-700 dark:bg-[#8B7CFF]/10 dark:text-[#8B7CFF] text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation & Results */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Evaluation & Clinical Validation
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B0D12] border border-slate-200 dark:border-[#222838] text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.evaluation}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-[#161A24] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#222838]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-[#222838]">
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-slate-800 dark:text-white bg-slate-100 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 dark:bg-[#161A24] dark:border dark:border-[#222838] dark:hover:border-[#8B7CFF] transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-white dark:text-[#8B7CFF]" />
                Live Demo
              </a>
            )}
            {project.id === 'xeb-fusenet' && onOpenCitation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCitation();
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] hover:text-purple-600 dark:hover:text-white transition-colors"
              >
                Cite Research
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
