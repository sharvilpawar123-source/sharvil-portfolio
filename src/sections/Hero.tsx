import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0d0d0d] bg-grid-pattern bg-radial-orange"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#f97316]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#f97316]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── LEFT COLUMN ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start w-full min-w-0"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6 font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-[#475569] dark:text-[#a3a3a3] uppercase font-semibold flex-wrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse shrink-0" />
              <span className="break-words">OPEN TO OPPORTUNITIES — AI / ML &amp; DATA SCIENCE</span>
            </motion.div>

            {/* Main heading */}
            <h1 className="font-display font-extrabold leading-[1.1] tracking-tight mb-6 text-[#0f172a] dark:text-white w-full break-words">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
              >
                Hi, I am
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
              >
                Sharvil Pawar
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-2"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #fb923c 60%, #fdba74 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI/DS Engineer.
              </motion.span>
            </h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="font-sans text-sm sm:text-base md:text-lg text-[#334155] dark:text-[#a3a3a3] max-w-xl mb-8 leading-relaxed font-normal"
            >
              I&apos;m Sharvil, an AI &amp; Data Science student at{' '}
              <span className="text-[#0f172a] dark:text-white font-semibold">PICT Pune</span>.
              I build intelligent, data-driven applications and full-stack
              platforms that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-6 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#f97316] text-black font-mono text-xs font-bold tracking-wider hover:bg-[#ea6c0a] transition-all shadow-orange-glow transform hover:-translate-y-0.5 active:translate-y-0"
                data-cursor
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View Resume button */}
              <a
                href="/sharvil_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-[#f97316] text-[#ea580c] dark:text-[#f97316] bg-[#f97316]/5 font-mono text-xs font-bold tracking-wider hover:bg-[#f97316]/15 transition-all transform hover:-translate-y-0.5"
                data-cursor
                title="View Sharvil Pawar's Resume"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-[#cbd5e1] dark:border-[#272727] text-[#0f172a] dark:text-white font-mono text-xs font-bold tracking-wider hover:border-[#f97316]/60 hover:bg-[#f97316]/5 transition-all transform hover:-translate-y-0.5"
                data-cursor
              >
                <span>LET&apos;S CONNECT</span>
              </a>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="font-mono text-[10px] sm:text-[11px] text-[#475569] dark:text-[#a3a3a3] tracking-wider sm:tracking-widest uppercase font-semibold break-words leading-relaxed"
            >
              PYTHON · C++ · TYPESCRIPT · MACHINE LEARNING · REACT
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#e2e8f0] dark:border-[#1f1f1f] w-full grid grid-cols-3 gap-2 sm:gap-6"
            >
              <div className="min-w-0">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#f97316]">9.8</div>
                <div className="font-mono text-[9px] sm:text-[11px] text-[#475569] dark:text-[#a3a3a3] mt-1 uppercase tracking-wider font-medium truncate">First Sem SGPA</div>
              </div>
              <div className="min-w-0 border-l border-[#e2e8f0] dark:border-[#1f1f1f] pl-2 sm:pl-6">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#f97316]">5★</div>
                <div className="font-mono text-[9px] sm:text-[11px] text-[#475569] dark:text-[#a3a3a3] mt-1 uppercase tracking-wider font-medium truncate">HackerRank C++</div>
              </div>
              <div className="min-w-0 border-l border-[#e2e8f0] dark:border-[#1f1f1f] pl-2 sm:pl-6">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#f97316]">DSA</div>
                <div className="font-mono text-[9px] sm:text-[11px] text-[#475569] dark:text-[#a3a3a3] mt-1 uppercase tracking-wider font-semibold truncate">Learning DSA</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — PROFILE PHOTO ────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center w-full min-w-0"
          >
            <div className="relative max-w-full">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#f97316]/20 to-transparent blur-xl scale-105 pointer-events-none" />

              {/* Photo frame */}
              <div className="relative w-64 h-72 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[420px] max-w-[82vw] rounded-[2.5rem] overflow-hidden border border-[#f97316]/20 shadow-[0_0_60px_-10px_rgba(249,115,22,0.3)] mx-auto">
                <img
                  src="/sharvil.jpg"
                  alt="Sharvil Pawar"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div style="width:100%;height:100%;background:linear-gradient(135deg,#f4f4f4,#e8e8e8);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;">
                          <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#f97316,#fb923c);display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',sans-serif;font-size:28px;font-weight:800;color:black;letter-spacing:2px;">SP</div>
                          <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#334155;text-align:center;padding:0 20px;line-height:1.8;letter-spacing:1px;font-weight:600;">Add sharvil.jpg to /public</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 dark:from-[#0d0d0d]/50 to-transparent" />
              </div>

              {/* CLASS OF 2029 — left-aligned, offset left from center with clear contrast */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-4 flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-[#334155] dark:text-[#a3a3a3] tracking-widest uppercase pl-2 sm:pl-4 font-semibold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                CLASS OF 2029
              </motion.div>

              {/* Badge: PICT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-2 right-0 sm:-right-6 bg-white dark:bg-[#141414] border border-[#cbd5e1] dark:border-[#272727] rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.1)] dark:shadow-card max-w-[170px]"
              >
                <div className="font-mono text-[9px] sm:text-[10px] text-[#f97316] font-bold tracking-wider">PICT PUNE</div>
                <div className="font-sans text-[10px] sm:text-[11px] text-[#334155] dark:text-[#a3a3a3] font-medium leading-tight">B.E. AI &amp; Data Science</div>
              </motion.div>

              {/* 9.8 SGPA badge on photo has been completely removed as requested */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
