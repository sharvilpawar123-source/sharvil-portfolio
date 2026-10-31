import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;
  return (
    <section id="education" className="py-24 relative bg-white dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="08" label="ACADEMICS" title="EDUCATION & INSTITUTION"
          subtitle="My academic foundation at one of Pune's premier engineering institutions." />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] relative overflow-hidden shadow-sm dark:shadow-none">

          {/* Left orange accent bar */}
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#f97316]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-semibold">
                <GraduationCap className="w-4 h-4" /> CURRENT ENROLLMENT
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#0f172a] dark:text-white tracking-tight leading-tight">{education.institution}</h3>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[#334155] dark:text-[#a3a3a3] font-medium">
                <div className="flex items-center gap-1.5 text-[#f97316] font-semibold"><MapPin className="w-4 h-4" />{education.shortLocation}</div>
                <div>• {education.degree}</div>
                <div>• {education.field}</div>
              </div>
              <p className="font-mono text-xs text-[#ea580c] dark:text-[#f97316] font-semibold">{education.duration}</p>
              <div className="pt-4 space-y-2.5 border-t border-[#e2e8f0] dark:border-[#272727]">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[#334155] dark:text-[#a3a3a3] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" /> {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-[#f8fafc] dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#272727] flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f97316]/15 border border-[#f97316]/40 flex items-center justify-center text-[#f97316] mb-3">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-[#475569] dark:text-[#a3a3a3] uppercase tracking-wider mb-1 font-semibold">ACADEMIC PERFORMANCE</span>
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#f97316] my-2">{education.sgpa}</div>
              <span className="font-mono text-[11px] text-[#334155] dark:text-[#a3a3a3] font-semibold">DISTINCTION — SEMESTER I</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
