import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { achievements, certifications } from '../data/achievements';
import { Badge } from '../components/Badge';
import { Award, CheckCircle2, Trophy, ExternalLink, ShieldCheck } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 bg-[#0B0D12]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Distinctions & Credentials"
          title="Achievements & Certifications"
          subtitle="Honors, academic distinctions, and specialized technical certifications. All details are partitioned between verified academic records and customizable placeholders."
        />

        {/* Academic Honors & Awards */}
        <div className="mb-14">
          <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#8B7CFF]" />
            Academic Honors & Distinctions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className={`p-6 rounded-xl border transition-all ${
                  ach.isVerified
                    ? 'bg-[#12151D] border-[#222838] hover:border-[#8B7CFF]/40'
                    : 'bg-[#10131B]/60 border-[#222838] border-dashed'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#8B7CFF]">{ach.category}</span>
                    {ach.isVerified ? (
                      <Badge variant="verified">Verified</Badge>
                    ) : (
                      <Badge variant="placeholder">Placeholder</Badge>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-500">{ach.year}</span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">
                  {ach.title}
                </h4>

                <p className="text-xs font-medium text-slate-400 mb-3">
                  {ach.issuer}
                </p>

                {ach.placeholderNote && (
                  <p className="text-[11px] text-amber-400/90 font-mono mb-3 bg-amber-500/10 p-2 rounded border border-amber-500/20">
                    {ach.placeholderNote}
                  </p>
                )}

                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Specialized Training */}
        <div>
          <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#8B7CFF]" />
            Certifications & Technical Training
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-[#10131B]/70 border border-[#222838] border-dashed flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="placeholder">Customizable</Badge>
                    <span className="text-[11px] font-mono text-slate-500">{cert.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 mb-2">
                    {cert.issuer}
                  </p>

                  {cert.placeholderNote && (
                    <p className="text-[10px] text-amber-400/90 font-mono mb-3 bg-amber-500/10 p-2 rounded border border-amber-500/20">
                      {cert.placeholderNote}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] rounded bg-[#161A24] text-slate-300 border border-[#222838]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 italic pt-2 border-t border-[#222838]/80">
                  Update with verified certificate credentials & link
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
