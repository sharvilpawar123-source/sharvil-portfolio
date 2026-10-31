import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, SkillCategory } from '../data/portfolioData';
import { Code2, BrainCircuit, Layout, Server, Wrench, ChevronRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Code2, BrainCircuit, Layout, Server, Wrench };

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const categories = ['ALL', ...portfolioData.skillCategories.map(c => c.title)];
  const filteredCategories = activeCategory === 'ALL'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#f8fafc] dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02" label="TOOLKIT" title="MY TOOLKIT"
          subtitle="Technologies, frameworks, data tools, and programming languages I use to construct intelligent software." />

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#cbd5e1] dark:border-[#1a1a1a] pb-4">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} data-cursor
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#f97316] text-black shadow-orange-glow-sm'
                  : 'bg-white dark:bg-[#141414] text-[#334155] dark:text-[#a3a3a3] hover:text-[#0f172a] dark:hover:text-white border border-[#cbd5e1] dark:border-[#272727] hover:border-[#f97316]/40'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category: SkillCategory, catIdx: number) => {
            const IconComponent = iconMap[category.iconName] || Code2;
            return (
              <motion.div key={category.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/50 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col shadow-sm dark:shadow-none">

                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e2e8f0] dark:border-[#1f1f1f]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/25 flex items-center justify-center text-[#f97316] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-xs font-bold tracking-wider text-[#0f172a] dark:text-white">{category.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-[#f97316] font-semibold">{category.skills.length} TOOLS</span>
                </div>

                <div className="space-y-2.5 flex-1">
                  {category.skills.map((skill) => (
                    <div key={skill.name}
                      className="p-3 rounded-xl bg-[#f8fafc] dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#272727]/50 hover:border-[#f97316]/40 transition-colors group/item">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-[#0f172a] dark:text-white group-hover/item:text-[#f97316] transition-colors flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-[#f97316]" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#f1f5f9] dark:bg-[#272727] text-[#1e293b] dark:text-[#a3a3a3] border border-[#cbd5e1] dark:border-[#333] font-semibold">
                          {skill.level}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#475569] dark:text-[#a3a3a3] pl-4 leading-tight">{skill.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-[#e2e8f0] dark:border-[#1f1f1f] font-mono text-[10px] text-[#475569] dark:text-[#a3a3a3] flex justify-between font-medium">
                  <span>{category.title}</span>
                  <span className="text-[#f97316] font-bold">● ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
