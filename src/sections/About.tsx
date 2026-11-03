import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Brain, Code, Cpu, LineChart, Award, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    { icon: Brain, title: "AI & DATA SCIENCE", desc: "Analyzing raw data, training predictive models, and constructing graph topologies to extract real analytical value." },
    { icon: Code, title: "ALGORITHMS & PROBLEM SOLVING", desc: "Deep analytical thinking built on robust C++ algorithmic foundations and object-oriented architecture." },
    { icon: Cpu, title: "FULL-STACK ENGINEERING", desc: "Translating back-end intelligence into fast, reactive web interfaces with React, Node.js, and MongoDB." },
  ];

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-[#0d0d0d] border-t border-[#e2e8f0] dark:border-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01" label="ABOUT" title="WHO I AM"
          subtitle="A look into my engineering focus, academic journey at PICT Pune, and technical approach." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Bio column */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="lg:col-span-7 flex flex-col gap-6">

            {/* Quote card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f8fafc] dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] border-l-4 border-l-[#f97316] relative shadow-sm dark:shadow-none">
              <span className="font-mono text-5xl text-[#f97316]/20 absolute top-3 right-6 font-bold select-none">"</span>
              <p className="font-display text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white leading-snug">
                "{portfolioData.personal.aboutStatement}"
              </p>
              <p className="mt-3 font-mono text-xs text-[#ea580c] dark:text-[#f97316] uppercase tracking-wider font-semibold">
                — SHARVIL PAWAR // CORE POSITIONING
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-sm text-[#334155] dark:text-[#a3a3a3] leading-relaxed font-normal">
              {portfolioData.personal.aboutBio.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {/* Process flow */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {['LEARNING', 'BUILDING', 'EXPERIMENTING', 'GROWING'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className={`px-3 py-1.5 rounded-lg border font-medium ${i === arr.length - 1
                    ? 'bg-[#f97316]/15 border-[#f97316]/30 text-[#ea580c] dark:text-[#f97316] font-bold'
                    : 'bg-white dark:bg-[#141414] border-[#cbd5e1] dark:border-[#272727] text-[#0f172a] dark:text-white shadow-sm dark:shadow-none'}`}>
                    {step}
                  </span>
                  {i < arr.length - 1 && <span className="text-[#f97316] font-bold">→</span>}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/50 transition-all group shadow-sm dark:shadow-none">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-3xl text-[#f97316] group-hover:scale-105 transition-transform">
                    {stat.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                    {idx === 0 ? <GraduationCap className="w-4 h-4" /> : idx === 1 ? <Award className="w-4 h-4" /> : <LineChart className="w-4 h-4" />}
                  </div>
                </div>
                <h3 className="font-mono text-xs font-bold text-[#0f172a] dark:text-white tracking-wider uppercase">{stat.label}</h3>
                <p className="font-sans text-xs text-[#475569] dark:text-[#a3a3a3] mt-1 font-medium">{stat.subtext}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#141414] border border-[#e2e8f0] dark:border-[#272727] hover:border-[#f97316]/50 transition-colors shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/25 flex items-center justify-center text-[#f97316] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-xs font-bold tracking-wider text-[#0f172a] dark:text-white mb-2">{pillar.title}</h3>
                <p className="font-sans text-xs text-[#334155] dark:text-[#a3a3a3] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
