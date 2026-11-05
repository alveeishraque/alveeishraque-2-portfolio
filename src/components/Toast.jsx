import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose, duration = 1000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm text-fg shadow-card animate-fade-in transition-colors">
      {type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-coral-fg shrink-0" />
      )}
      <span className="font-medium text-xs sm:text-sm text-fg">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 rounded p-1 text-mute transition-colors hover:bg-hover hover:text-fg"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
