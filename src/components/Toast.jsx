import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose, duration = 3500 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#161A24] border border-slate-200 dark:border-[#222838] text-slate-800 dark:text-slate-100 rounded-xl shadow-xl shadow-slate-300/30 dark:shadow-black/50 text-sm animate-fade-in backdrop-blur-md transition-colors">
      {type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF] shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
      )}
      <span className="font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
