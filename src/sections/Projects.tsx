import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { Github, Network, BarChart3, Car, Database } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const categories = ['ALL', 'AI & Data Science', 'Full Stack', 'Data Analytics'];
  const filteredProjects = activeCategory === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  const getVisualIcon = (type: string) => {
    const cls = "w-7 h-7 text-[#f97316]";
    switch (type) {
      case 'graph': return <Network className={cls} />;
      case 'dashboard': return <BarChart3 className={cls} />;
      case 'traffic': return <Car className={cls} />;
      default: return <Database className={cls} />;
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" label="SELECTED WORK" title="WHAT I BUILD"
          subtitle="Things I've built, explored, and learned from across AI, Data Science, and Full Stack development." />

        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#cbd5e1] dark:border-[#1a1a1a] pb-4">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} data-cursor
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat ? 'bg-[#f97316] text-black shadow-orange-glow-sm'
                : 'bg-white dark:bg-[#141414] text-[#334155] dark:text-[#a3a3a3] hover:text-[#0f172a] dark:hover:text-white border border-[#cbd5e1] dark:border-[#272727] hover:border-[#f97316]/40'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/60 hover:shadow-orange-glow-sm transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-none"
              data-cursor>

              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#f97316]/0 group-hover:bg-[#f97316] transition-all duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-extrabold text-[#94a3b8] dark:text-[#272727] group-hover:text-[#f97316] transition-colors">{project.number}</span>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#f1f5f9] dark:bg-[#1a1a1a] text-[#1e293b] dark:text-[#a3a3a3] border border-[#cbd5e1] dark:border-[#272727] font-semibold">{project.category}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-[#f8fafc] dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#272727] flex items-center justify-center group-hover:border-[#f97316]/50 transition-colors">
                    {getVisualIcon(project.visualType)}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white group-hover:text-[#f97316] transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#334155] dark:text-[#a3a3a3] leading-relaxed mb-6 font-normal">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#f1f5f9] dark:bg-[#1a1a1a] text-[#1e293b] dark:text-[#a3a3a3] border border-[#cbd5e1] dark:border-[#272727] font-medium">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && <span className="font-mono text-[10px] px-2 py-1 text-[#f97316] font-bold">+{project.technologies.length - 5}</span>}
                </div>

                <div className="pt-4 border-t border-[#e2e8f0] dark:border-[#1f1f1f] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#f97316] font-semibold group-hover:underline">EXPAND DETAILS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={portfolioData.socials.github.url} target="_blank" rel="noopener noreferrer" data-cursor
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white dark:bg-[#141414] border border-[#cbd5e1] dark:border-[#272727] text-[#0f172a] dark:text-white font-mono text-xs font-bold tracking-wider hover:border-[#f97316] hover:text-[#f97316] transition-all shadow-sm dark:shadow-none">
            <Github className="w-4 h-4 text-[#f97316]" />
            EXPLORE ALL REPOSITORIES ON GITHUB →
          </a>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
