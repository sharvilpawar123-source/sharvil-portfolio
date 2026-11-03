import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, JourneyMilestone } from '../data/portfolioData';
import { Calendar, Building, Sparkles } from 'lucide-react';

export const Journey: React.FC = () => (
  <section id="journey" className="py-24 relative bg-[#f8fafc] dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading number="04" label="JOURNEY" title="THE JOURNEY"
        subtitle="My academic progression, technical societies, milestones, and continuous engineering path." />

      <div className="relative max-w-4xl mx-auto ml-7 sm:mx-auto pl-6 sm:pl-8 border-l-2 border-[#cbd5e1] dark:border-[#272727] space-y-12 my-8">
        {portfolioData.journey.map((item: JourneyMilestone, idx: number) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="relative group">

            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#0d0d0d] border-2 border-[#cbd5e1] dark:border-[#272727] group-hover:border-[#f97316] group-hover:scale-125 flex items-center justify-center transition-all shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/50 transition-all shadow-sm dark:shadow-none">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#ea580c] dark:text-[#f97316] bg-[#f97316]/10 px-3 py-1 rounded-full border border-[#f97316]/30">
                  <Calendar className="w-3.5 h-3.5" /> {item.year}
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#475569] dark:text-[#a3a3a3] font-semibold">
                  <Building className="w-3.5 h-3.5 text-[#f97316]" /> {item.organization}
                </div>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white mb-1 flex items-center gap-2">
                {item.title}
                {item.highlight && <Sparkles className="w-4 h-4 text-[#f97316]" />}
              </h3>
              <p className="font-mono text-xs font-semibold text-[#ea580c] dark:text-[#f97316] mb-3">{item.role}</p>
              <p className="font-sans text-xs sm:text-sm text-[#334155] dark:text-[#a3a3a3] leading-relaxed mb-6">{item.description}</p>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#e2e8f0] dark:border-[#1f1f1f]">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#f1f5f9] dark:bg-[#1a1a1a] text-[#1e293b] dark:text-[#a3a3a3] border border-[#cbd5e1] dark:border-[#272727] font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
