import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Education', href: '#education' },
  { name: 'Research', href: '#research' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Leadership', href: '#experience' },
  { name: 'References', href: '#references' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ onNotify }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }

      // If at top
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCvDownload = () => {
    if (onNotify) {
      onNotify('Downloading Alvee Ishraque CV (PDF)...');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0B0D12]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-[#222838] py-3 shadow-sm dark:shadow-lg dark:shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-800 dark:text-slate-100 hover:text-purple-600 dark:hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-[#12151D] border border-purple-200/80 dark:border-[#222838] flex items-center justify-center font-mono font-bold text-sm text-purple-600 dark:text-[#8B7CFF] group-hover:border-purple-400 dark:group-hover:border-[#8B7CFF]/50 transition-all shadow-xs">
            AI
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              Alvee Ishraque
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-[#8B7CFF]"></span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'text-purple-700 dark:text-white bg-purple-50 dark:bg-[#161A24] border border-purple-200 dark:border-[#222838] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggle size="md" />

          {/* Social Links */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#161A24] rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-[#222838]"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-[#8B7CFF] hover:bg-slate-100 dark:hover:bg-[#161A24] rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-[#222838]"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Download CV */}
          <a
            href={personalInfo.resumePath}
            download="Alvee_Ishraque_CV.pdf"
            onClick={handleCvDownload}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-[#8B7CFF] dark:hover:bg-[#9E91FF] transition-all shadow-sm hover:shadow-purple-500/20 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle size="sm" />
          <a
            href={personalInfo.resumePath}
            download="Alvee_Ishraque_CV.pdf"
            onClick={handleCvDownload}
            className="p-2 rounded-lg bg-purple-600 dark:bg-[#8B7CFF] text-white"
            title="Download CV"
            aria-label="Download CV"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-[#161A24] rounded-lg border border-slate-200 dark:border-[#222838] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] bg-white/95 dark:bg-[#0B0D12]/95 border-b border-slate-200 dark:border-[#222838] px-5 py-6 backdrop-blur-xl animate-fade-in shadow-2xl transition-colors">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-purple-700 dark:text-white bg-purple-50 dark:bg-[#161A24] font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#161A24]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-[#222838] flex items-center justify-around text-slate-600 dark:text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs hover:text-slate-900 dark:hover:text-white"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs hover:text-purple-600 dark:hover:text-[#8B7CFF]"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-xs hover:text-slate-900 dark:hover:text-white"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
