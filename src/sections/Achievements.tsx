import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, Achievement } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => (
  <section id="achievements" className="py-24 relative bg-white dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading number="06" label="ACHIEVEMENTS" title="MILESTONES & CREDENTIALS"
        subtitle="Verified academic distinction, algorithmic credentials, and technical commitments." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.achievements.map((item: Achievement, idx: number) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/50 hover:-translate-y-1 transition-all group flex flex-col justify-between shadow-sm dark:shadow-none">

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/25 flex items-center justify-center text-[#f97316] group-hover:scale-110 transition-transform">
                  {idx === 0 ? <Trophy className="w-5 h-5" /> : idx === 1 ? <Award className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> VERIFIED
                  </div>
                )}
              </div>

              <div className="font-display text-3xl font-extrabold text-[#f97316] mb-2">{item.stat}</div>
              <h3 className="font-mono text-xs font-bold text-[#0f172a] dark:text-white tracking-wider uppercase mb-1">{item.label}</h3>
              <p className="font-mono text-[11px] text-[#ea580c] dark:text-[#f97316]/80 font-semibold mb-3">{item.sublabel}</p>
              <p className="font-sans text-xs text-[#334155] dark:text-[#a3a3a3] leading-relaxed">{item.description}</p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#e2e8f0] dark:border-[#1f1f1f] font-mono text-[10px] text-[#475569] dark:text-[#a3a3a3] flex justify-between font-semibold">
              <span>CREDENTIAL #{idx + 1}</span>
              <span className="text-[#0f172a] dark:text-white">SHARVIL PAWAR</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
