import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

export function Hero({ onNotify }) {
  const handleCvDownload = () => {
    if (onNotify) {
      onNotify('Downloading Alvee Ishraque CV (PDF)...');
    }
  };

  const scrollToEducation = (e) => {
    e.preventDefault();
    const edu = document.getElementById('education');
    if (edu) {
      const headerOffset = 70;
      const elementPosition = edu.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Dynamic ambient background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-400/10 dark:bg-[#8B7CFF]/5 rounded-full blur-[130px] pointer-events-none transition-colors duration-500"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-indigo-300/10 dark:bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"></div>

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image with modern circular frame, glowing halo & hover animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-7 cursor-pointer"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600 via-[#8B7CFF] to-indigo-500 opacity-25 dark:opacity-35 blur-xl group-hover:opacity-50 group-hover:blur-2xl transition-all duration-500"></div>

          {/* Outer Ring Frame */}
          <div className="relative p-1.5 sm:p-2 rounded-full 
  bg-gradient-to-tr from-gray-200/90 via-slate-100/80 to-gray-300/90
  dark:from-[#303744] dark:via-[#222838] dark:to-[#161A24]
  shadow-lg group-hover:shadow-xl
  transition-all duration-500 group-hover:scale-[1.02]">

  {/* Image Container */}
  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 
    rounded-full overflow-hidden 
    border-2 border-white dark:border-[#161A24]
    bg-slate-100 dark:bg-[#12151D] shadow-inner">

    <img
      src="/image.png"
      alt="Alvee Ishraque - AI/ML Researcher"
      className="w-full h-full object-cover object-top 
        transition-transform duration-700 ease-out 
        group-hover:scale-105"
      loading="eager"
    />

    {/* Subtle sheen on hover */}
    <div className="absolute inset-0 
      bg-gradient-to-tr from-white/0 via-white/10 to-transparent
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 pointer-events-none" />
  </div>
</div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3"
        >
          Alvee Ishraque
        </motion.h1>

        {/* Role & Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-purple-600 dark:text-[#8B7CFF] mb-6 tracking-tight"
        >
          Computer Science Graduate | AI/ML Enthusiast
        </motion.p>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-normal"
        >
          As a Computer Science and Engineering graduate, my perspective is driven by the belief that technology should solve complex, real-world challenges, particularly at the intersection of artificial intelligence and healthcare. I am deeply interested in multi-modal machine learning, deep learning architectures, and bioinformatics. My motive is to harness data-driven systems to improve human well-being and clinical outcomes, and my goal is to advance research and innovation in intelligent systems that deliver profound real-world impact.
        </motion.p>

        {/* Call-to-Action Buttons & Social Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-nowrap items-center justify-center gap-3 sm:gap-5 pt-4 pb-8 border-t border-slate-200 dark:border-[#222838]/60 w-full overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <a
            href={personalInfo.resumePath}
            download="Alvee_Ishraque_CV.pdf"
            onClick={handleCvDownload}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] px-4 py-2 rounded-lg hover:text-purple-600 dark:hover:text-white hover:border-purple-300 dark:hover:border-[#8B7CFF]/50 hover:bg-slate-50 dark:hover:bg-[#161A24] transition-all flex-shrink-0 group shadow-xs active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-[#8B7CFF] transition-colors" />
            <span>CV</span>
          </a>

          <span className="text-slate-300 dark:text-slate-700 flex-shrink-0">•</span>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0 group"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            <span className="font-mono">alveeishraque</span>
          </a>

          <span className="text-slate-300 dark:text-slate-700 flex-shrink-0">•</span>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors flex-shrink-0 group"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-[#8B7CFF] transition-colors" />
            <span>alvee-ishraque</span>
          </a>

          <span className="text-slate-300 dark:text-slate-700 flex-shrink-0">•</span>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0 group"
            title="Send Email"
          >
            <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            <span>{personalInfo.email}</span>
          </a>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.a
          href="#education"
          onClick={scrollToEducation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors text-xs font-mono"
          aria-label="Scroll down to education"
        >
          <span>Explore Portfolio</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
