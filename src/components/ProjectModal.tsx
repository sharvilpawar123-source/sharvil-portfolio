import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Layers, AlertCircle, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => { document.body.style.overflow = 'unset'; window.removeEventListener('keydown', handleKeyDown); };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-md z-40" />

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }} transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-3xl bg-[#141414] border border-[#272727] rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[85vh] flex flex-col">

          {/* Header */}
          <div className="px-6 py-5 border-b border-[#272727] flex items-center justify-between bg-[#0d0d0d]/80 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#f97316]/15 text-[#f97316] font-bold border border-[#f97316]/30">
                PROJ {project.number}
              </span>
              <span className="font-mono text-xs text-[#555555]">{project.category}</span>
            </div>
            <button onClick={onClose} data-cursor
              className="p-2 rounded-lg text-[#a3a3a3] hover:text-[#f97316] hover:bg-[#f97316]/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="font-sans text-sm text-[#f97316]">{project.tagline}</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold tracking-wider text-[#a3a3a3] uppercase flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#f97316]" /> OVERVIEW
              </h3>
              <p className="font-sans text-sm text-[#a3a3a3] leading-relaxed">{project.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#0d0d0d] border border-[#272727]">
                <h4 className="font-mono text-xs font-bold text-[#f97316] tracking-wider uppercase mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> CHALLENGE
                </h4>
                <p className="font-sans text-xs text-[#a3a3a3] leading-relaxed">{project.problem}</p>
              </div>
              <div className="p-5 rounded-xl bg-[#0d0d0d] border border-[#272727]">
                <h4 className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> SOLUTION
                </h4>
                <p className="font-sans text-xs text-[#a3a3a3] leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs font-bold tracking-wider text-[#a3a3a3] uppercase mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#f97316]" /> KEY FEATURES
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0d0d0d] border border-[#272727] font-sans text-xs text-[#a3a3a3]">
                    <span className="text-[#f97316] font-bold mt-0.5">▸</span>{feat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-bold tracking-wider text-[#a3a3a3] uppercase mb-3">TECHNOLOGY STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#0d0d0d] border border-[#272727] text-white">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[#272727] bg-[#0d0d0d]/80 flex flex-wrap items-center justify-between gap-4 sticky bottom-0">
            <span className="font-mono text-xs text-[#555555]">STATUS: ACADEMIC / PROTOTYPE</span>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-cursor
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] text-black font-mono text-xs font-bold tracking-wider hover:bg-[#ea6c0a] transition-colors shadow-orange-glow-sm">
                  <Github className="w-4 h-4" /> VIEW REPOSITORY
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-cursor
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#272727] text-white font-mono text-xs font-bold tracking-wider hover:bg-[#333] transition-colors">
                  <ExternalLink className="w-4 h-4" /> LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
