import React from 'react';
import { cn } from '../utils/cn';

export function Badge({ children, variant = 'default', size = 'sm', className }) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700/60',
    accent: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-[#8B7CFF]/10 dark:text-[#8B7CFF] dark:border-[#8B7CFF]/30',
    verified: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/25',
    warning: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/25',
    placeholder: 'bg-yellow-50 text-yellow-800 border-yellow-200 border-dashed dark:bg-yellow-500/10 dark:text-yellow-300 dark:border-yellow-500/30',
    subtle: 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-[#12151D] dark:text-slate-400 dark:border-[#222838]',
    modality: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-[#1E2333] dark:text-indigo-200 dark:border-[#2E354B]',
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-[11px]',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium rounded-md border tracking-wide transition-colors',
        variants[variant] || variants.default,
        sizes[size] || sizes.sm,
        className
      )}
    >
      {children}
    </span>
  );
}
