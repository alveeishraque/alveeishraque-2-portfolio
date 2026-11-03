import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-[#0B0D12] border-t border-slate-200 dark:border-[#222838] pt-16 pb-8 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Identity */}
          <div className="flex flex-col items-start justify-center md:col-span-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-[#8B7CFF] shrink-0 hidden sm:block" />
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                B.Sc. CSE, BRAC University
              </span>
            </div>
            {/* <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
              AI/ML Researcher focused on multimodal deep learning architectures, computer vision, and clinical AI.
            </p> */}
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white tracking-wider mb-4 uppercase">
              Navigation
            </h3>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#education" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Education (B.Sc., HSC, SSC)
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Activities & Club Leadership
                </a>
              </li>
              <li>
                {/* <a href="#references" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Academic References
                </a> */}
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect Directly */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-bold text-slate-900 dark:text-white tracking-wider mb-4 uppercase">
              Connect Directly
            </h3>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone || '+8801303542319'}`}
                  className="flex items-center gap-2.5 hover:text-purple-600 dark:hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-600 dark:text-[#8B7CFF]" />
                  <span>{personalInfo.phone || '+8801303542319'}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-purple-600 dark:hover:text-white transition-colors group"
                >
                  <Github className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-600 dark:group-hover:text-[#8B7CFF] transition-colors" />
                  <span>github.com/alveeishraque</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-purple-600 dark:hover:text-white transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-600 dark:group-hover:text-[#8B7CFF] transition-colors" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#222838]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 font-medium">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          {/* <p className="text-[11px] text-slate-500 font-mono">
            Designed & Built with React, Tailwind & Framer Motion
          </p> */}
        </div>
      </div>
    </footer>
  );
}
