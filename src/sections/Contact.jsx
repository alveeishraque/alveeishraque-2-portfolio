import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Contact({ onNotify }) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopy = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value);

      if (type === 'email') {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }

      if (onNotify) {
        onNotify(`${type === 'email' ? 'Email' : 'Phone'} copied!`);
      }
    } catch {
      if (onNotify) onNotify('Unable to copy. Please copy manually.');
    }
  };

  const contactLinks = [
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/alvee-ishraque',
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/alveeishraque',
      href: personalInfo.github,
      icon: Github,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#0B0D12] border-t border-slate-200/80 dark:border-[#222838]/40 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="Feel free to reach out for professional opportunities, research discussions, or collaborations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <ScrollReveal
            delay={0.05}
            className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF]" />
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Email
              </h3>
            </div>

            <div className="flex items-center justify-between gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors break-all"
              >
                {personalInfo.email}
              </a>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                aria-label="Copy email"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-[#222838] transition-colors"
              >
                {emailCopied ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Phone */}
          <ScrollReveal
            delay={0.1}
            className="p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF]" />
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Phone / WhatsApp
              </h3>
            </div>

            <div className="flex items-center justify-between gap-2">
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-sm text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-[#8B7CFF] transition-colors"
              >
                {personalInfo.phone}
              </a>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                aria-label="Copy phone number"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-[#222838] transition-colors"
              >
                {phoneCopied ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;

            return (
              <ScrollReveal
                key={link.label}
                delay={0.15 + idx * 0.05}
                className="group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl bg-white dark:bg-[#12151D] border border-slate-200 dark:border-[#222838] shadow-xs hover:border-purple-300 dark:hover:border-[#8B7CFF]/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-purple-600 dark:text-[#8B7CFF]" />
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {link.label}
                      </h3>
                    </div>

                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-[#8B7CFF] transition-colors" />
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 group-hover:text-purple-600 dark:group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
