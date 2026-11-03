import React, { useState } from 'react';
import { X, Copy, Check, Quote, Download } from 'lucide-react';

export function CitationModal({ isOpen, onClose, bibtex, title, onNotify }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    if (onNotify) onNotify('BibTeX citation copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([bibtex], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'ishraque2024xebfusenet.bib';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    if (onNotify) onNotify('Downloaded ishraque2024xebfusenet.bib');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] rounded-2xl shadow-2xl overflow-hidden p-6 text-slate-800 dark:text-slate-100 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-200 dark:border-[#222838]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-purple-50 text-purple-700 dark:bg-[#8B7CFF]/10 dark:text-[#8B7CFF] border border-purple-200/60 dark:border-[#8B7CFF]/20">
              <Quote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Cite XEB-FuseNet</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">BibTeX Citation for Academic Papers & Reports</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {title && (
          <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 bg-slate-50 dark:bg-[#161A24] p-3 rounded-xl border border-slate-200 dark:border-[#222838]/80 line-clamp-2">
            <span className="font-semibold text-purple-600 dark:text-[#8B7CFF]">Reference:</span> {title}
          </p>
        )}

        <div className="relative mb-4">
          <pre className="p-4 bg-slate-900 text-slate-200 dark:bg-[#0B0D12] dark:text-slate-300 border border-slate-800 dark:border-[#222838] rounded-xl text-xs font-mono overflow-x-auto whitespace-pre leading-relaxed max-h-64 selection:bg-[#8B7CFF]/30 selection:text-white">
            {bibtex}
          </pre>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Format: BibTeX (.bib)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] hover:text-purple-600 dark:hover:text-white hover:border-purple-300 dark:hover:border-slate-600 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download .bib
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 dark:bg-[#8B7CFF] dark:hover:bg-[#9E91FF] transition-colors shadow-sm shadow-purple-500/20"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy BibTeX
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
