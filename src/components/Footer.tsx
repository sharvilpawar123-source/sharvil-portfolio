import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#f8fafc] dark:bg-[#080808] text-[#475569] dark:text-[#a3a3a3] border-t border-[#e2e8f0] dark:border-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#e2e8f0] dark:border-[#1a1a1a]">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#141414] border border-[#cbd5e1] dark:border-[#272727] flex items-center justify-center font-display font-extrabold text-sm text-[#f97316]">SP</div>
              <span className="font-display font-bold tracking-wide text-base text-[#0f172a] dark:text-white">SHARVIL PAWAR</span>
            </div>
            <p className="font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-semibold">AI & DATA SCIENCE // PICT PUNE</p>
            <p className="font-sans text-xs text-[#475569] dark:text-[#a3a3a3] max-w-sm leading-relaxed">
              Building intelligent, data-driven applications that turn complex problems into meaningful digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold text-[#0f172a] dark:text-white tracking-wider uppercase mb-4">NAVIGATION</h4>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
              {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'JOURNEY', 'CREDENTIALS', 'CONTACT'].map(nav => (
                <li key={nav}><a href={`#${nav === 'CREDENTIALS' ? 'certifications' : nav.toLowerCase()}`} className="text-[#334155] dark:text-[#a3a3a3] hover:text-[#f97316] transition-colors">{nav}</a></li>
              ))}
            </ul>
          </div>

          {/* Connect + back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#0f172a] dark:text-white tracking-wider uppercase mb-4">CONNECT</h4>
              <div className="flex items-center gap-2">
                {[
                  { href: portfolioData.socials.github.url, icon: Github, label: 'GitHub' },
                  { href: portfolioData.socials.linkedin.url, icon: Linkedin, label: 'LinkedIn' },
                  { href: portfolioData.socials.instagram.url, icon: Instagram, label: 'Instagram' },
                  { href: `mailto:${portfolioData.personal.email}`, icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="p-2.5 rounded-lg bg-white dark:bg-[#141414] border border-[#cbd5e1] dark:border-[#272727] text-[#475569] dark:text-[#a3a3a3] hover:text-[#f97316] hover:border-[#f97316]/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-[#ea580c] dark:text-[#f97316] hover:underline cursor-pointer font-semibold">
              BACK TO TOP <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#475569] dark:text-[#777]">
          <div>© 2026 SHARVIL PAWAR. ALL RIGHTS RESERVED.</div>
          <div className="text-[#ea580c] dark:text-[#f97316] font-bold">BUILT WITH CURIOSITY + CODE.</div>
        </div>
      </div>
    </footer>
  );
};
