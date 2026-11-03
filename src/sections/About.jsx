// import React from 'react';
// import { SectionHeading } from '../components/SectionHeading';
// import { personalInfo } from '../data/personalInfo';
// import { GraduationCap, Brain, Target, Award, ArrowRight, CheckCircle2, Languages } from 'lucide-react';

// export function About() {
//   const scrollToEducation = (e) => {
//     e.preventDefault();
//     const edu = document.getElementById('education');
//     if (edu) edu.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 bg-[#0B0D12] border-t border-[#222838]/40">
//       <div className="max-w-6xl mx-auto">
//         <SectionHeading
//           badge="About Me"
//           title="Academic Foundation & Research Trajectory"
//           subtitle="A computer science graduate with a verified academic record (CGPA 3.64/4.00, perfect GPA 5.00 in HSC & SSC), dedicated to advancing multimodal deep learning and clinical AI."
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* Left Column: Academic Narrative & Education-First Foundation */}
//           <div className="lg:col-span-7 space-y-6">
//             <div className="p-6 sm:p-7 rounded-2xl bg-[#12151D] border border-[#222838] space-y-4">
//               <h3 className="text-lg font-semibold text-white flex items-center gap-2.5">
//                 <GraduationCap className="w-5 h-5 text-[#8B7CFF]" />
//                 Education-First Scholastic Foundation
//               </h3>
              
//               <p className="text-slate-300 text-sm leading-relaxed">
//                 My academic journey is anchored by a disciplined, rigorous background in computer science, mathematics, and engineering sciences. I completed my Bachelor of Science in Computer Science & Engineering (CSE) at <span className="text-white font-medium">BRAC University</span> (January 2022 – January 2026) with a <span className="text-emerald-400 font-semibold">CGPA of 3.64 / 4.00</span>.
//               </p>

//               <p className="text-slate-300 text-sm leading-relaxed">
//                 Prior to university, I maintained an exceptional scholastic standard, achieving <span className="text-emerald-400 font-semibold">perfect GPA 5.00 / 5.00 scores</span> in both my <span className="text-white font-medium">Higher Secondary Certificate (HSC)</span> at New Govt. Degree College, Rajshahi and <span className="text-white font-medium">Secondary School Certificate (SSC)</span> at the historic Rajshahi Collegiate School.
//               </p>

//               {/* Quick jump to detailed Education section */}
//               <div className="pt-2">
//                 <a
//                   href="#education"
//                   onClick={scrollToEducation}
//                   className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B7CFF] hover:text-[#9E91FF] transition-colors"
//                 >
//                   <span>Explore detailed breakdown of SSC, HSC & B.Sc. coursework</span>
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </a>
//               </div>
//             </div>

//             {/* Career Objectives & Target Tracks */}
//             <div className="p-6 sm:p-7 rounded-2xl bg-[#12151D] border border-[#222838] space-y-4">
//               <h3 className="text-lg font-semibold text-white flex items-center gap-2.5">
//                 <Target className="w-5 h-5 text-[#8B7CFF]" />
//                 Target Trajectories & Graduate Objectives
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
//                 {personalInfo.aspirations.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="p-3.5 rounded-xl bg-[#161A24] border border-[#222838] flex flex-col justify-between"
//                   >
//                     <div>
//                       <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-[#8B7CFF]/15 text-[#8B7CFF] border border-[#8B7CFF]/20 mb-2">
//                         {item.badge}
//                       </span>
//                       <h4 className="text-xs font-semibold text-white mb-1.5">{item.title}</h4>
//                       <p className="text-[11px] text-slate-400 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Exact Research Interests from CV & Academic Snapshot */}
//           <div className="lg:col-span-5 space-y-6">
//             {/* Research Focus List from CV */}
//             <div className="p-6 rounded-2xl bg-[#12151D] border border-[#222838]">
//               <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
//                 <Brain className="w-4 h-4 text-[#8B7CFF]" />
//                 Research Interests (from CV)
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {personalInfo.researchInterests.map((interest, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#161A24] text-slate-300 border border-[#222838] hover:border-[#8B7CFF]/50 transition-colors"
//                   >
//                     {interest}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Academic Snapshot Card */}
//             <div className="p-6 rounded-2xl bg-[#161A24] border border-[#222838]/90 space-y-3.5">
//               <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
//                 Verified Scholastic Snapshot
//               </h4>
              
//               <div className="space-y-2 text-xs">
//                 <div className="flex justify-between py-1.5 border-b border-[#222838]">
//                   <span className="text-slate-400">B.Sc. in CSE:</span>
//                   <span className="text-emerald-400 font-bold font-mono">3.64 / 4.00 (BRACU)</span>
//                 </div>
//                 <div className="flex justify-between py-1.5 border-b border-[#222838]">
//                   <span className="text-slate-400">HSC (Science):</span>
//                   <span className="text-emerald-400 font-bold font-mono">5.00 / 5.00 (Rajshahi)</span>
//                 </div>
//                 <div className="flex justify-between py-1.5 border-b border-[#222838]">
//                   <span className="text-slate-400">SSC (Science):</span>
//                   <span className="text-emerald-400 font-bold font-mono">5.00 / 5.00 (Rajshahi)</span>
//                 </div>
//                 <div className="flex justify-between py-1.5 border-b border-[#222838]">
//                   <span className="text-slate-400">English Proficiency:</span>
//                   <span className="text-[#8B7CFF] font-bold font-mono">IELTS Academic 6.5</span>
//                 </div>
//                 <div className="flex justify-between py-1.5">
//                   <span className="text-slate-400">Flagship Metric:</span>
//                   <span className="text-slate-200 font-bold font-mono">Peak AUC 0.9052</span>
//                 </div>
//               </div>

//               <div className="pt-2">
//                 <div className="p-3 rounded-lg bg-[#0B0D12] border border-[#222838] text-[11px] text-slate-400 leading-normal">
//                   <span className="text-[#8B7CFF] font-semibold">Note for International Evaluators:</span> Complete academic transcripts, thesis manuscripts, and official recommendation letters are available for graduate admissions review.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
