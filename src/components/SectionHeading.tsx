import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ number, label, title, subtitle, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`font-mono text-xs font-semibold tracking-widest text-[#ea580c] dark:text-[#f97316] uppercase mb-3 flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className="px-2.5 py-1 rounded bg-[#f97316]/10 border border-[#f97316]/25 text-[#ea580c] dark:text-[#f97316] font-bold">
          {number}
        </span>
        <span className="w-8 h-px bg-[#f97316]/40 hidden sm:inline-block" />
        <span>{label}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-sans text-base sm:text-lg text-[#334155] dark:text-[#a3a3a3] max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
