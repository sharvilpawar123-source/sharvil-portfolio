import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CREDENTIALS', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(i => i.href.substring(1));
      const pos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setTimeout(() => {
        const navHeight = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });

        window.history.pushState(null, '', href);
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full max-w-full ${
      scrolled
        ? isDark
          ? 'bg-[#0d0d0d]/88 backdrop-blur-xl border-b border-white/5 py-3 sm:py-3.5 shadow-lg'
          : 'bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] py-3 sm:py-3.5 shadow-sm'
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            if (mobileMenuOpen) {
              handleMobileNavClick(e, '#home');
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          data-cursor
        >
          <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-display font-extrabold text-xs sm:text-sm text-[#f97316] group-hover:border-[#f97316] group-hover:shadow-orange-glow-sm transition-all border ${isDark ? 'bg-[#141414] border-[#272727]' : 'bg-[#f1f5f9] border-[#cbd5e1]'}`}>
            SP
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold tracking-wide text-xs sm:text-sm group-hover:text-[#f97316] transition-colors ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              SHARVIL PAWAR
            </span>
            <span className={`font-mono text-[9px] sm:text-[10px] hidden sm:block ${isDark ? 'text-[#777]' : 'text-[#475569] font-medium'}`}>
              AI & DS // PICT PUNE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center gap-1 backdrop-blur-md px-4 py-1.5 rounded-full border ${isDark ? 'bg-[#141414]/80 border-[#272727]' : 'bg-[#f8fafc] border-[#cbd5e1] shadow-sm'}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a key={item.label} href={item.href}
                className={`relative px-4 py-1.5 font-mono text-xs font-semibold tracking-wider rounded-full transition-colors ${
                  isActive ? 'text-[#f97316]' : isDark ? 'text-[#a3a3a3] hover:text-white' : 'text-[#334155] hover:text-[#0f172a]'
                }`}
                data-cursor
              >
                {isActive && (
                  <motion.span layoutId="activeNav"
                    className="absolute inset-0 bg-[#f97316]/10 rounded-full border border-[#f97316]/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Opportunities + Socials + Theme */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[#ea580c] dark:text-[#f97316] font-bold">OPEN TO WORK</span>
          </div>

          <div className="flex items-center gap-1">
            {[
              { href: portfolioData.socials.github.url, icon: Github, label: 'GitHub' },
              { href: portfolioData.socials.linkedin.url, icon: Linkedin, label: 'LinkedIn' },
              { href: portfolioData.socials.instagram.url, icon: Instagram, label: 'Instagram' },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-cursor
                className={`p-2 rounded-lg hover:text-[#f97316] hover:bg-[#f97316]/10 transition-colors ${isDark ? 'text-[#a3a3a3]' : 'text-[#475569]'}`}
                aria-label={label}>
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button onClick={toggleTheme} data-cursor
            className={`p-2 rounded-lg hover:text-[#f97316] border hover:border-[#f97316]/40 transition-colors ${isDark ? 'text-[#a3a3a3] border-[#272727]' : 'text-[#334155] border-[#cbd5e1]'}`}
            aria-label="Toggle theme">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 sm:hidden shrink-0">
          <button onClick={toggleTheme} className={`p-2 rounded-lg border ${isDark ? 'text-[#a3a3a3] border-[#272727]' : 'text-[#334155] border-[#cbd5e1]'}`} aria-label="Toggle theme">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${isDark ? 'bg-[#141414] border-[#272727]' : 'bg-[#f1f5f9] border-[#cbd5e1]'}`} aria-label="Toggle menu">
            {mobileMenuOpen
              ? <X className="w-5 h-5 text-[#f97316]" />
              : <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`sm:hidden backdrop-blur-xl border-b overflow-hidden ${isDark ? 'bg-[#0d0d0d]/95 border-[#272727]/50' : 'bg-white/98 border-[#e2e8f0]'}`}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#f97316]/20 font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                OPEN TO OPPORTUNITIES
              </div>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                  className={`font-mono text-sm font-semibold tracking-wider py-2.5 transition-colors flex items-center justify-between hover:text-[#f97316] cursor-pointer ${
                    activeSection === item.href.substring(1)
                      ? 'text-[#f97316]'
                      : isDark ? 'text-[#a3a3a3]' : 'text-[#334155]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#f97316]" />
                </a>
              ))}
              <div className={`pt-4 border-t flex items-center justify-around ${isDark ? 'border-[#1f1f1f]' : 'border-[#e2e8f0]'}`}>
                <a href={portfolioData.socials.github.url} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-mono text-xs hover:text-[#f97316] ${isDark ? 'text-[#a3a3a3]' : 'text-[#334155] font-semibold'}`}>
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={portfolioData.socials.linkedin.url} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-mono text-xs hover:text-[#f97316] ${isDark ? 'text-[#a3a3a3]' : 'text-[#334155] font-semibold'}`}>
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
