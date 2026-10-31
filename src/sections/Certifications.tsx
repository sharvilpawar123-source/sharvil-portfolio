import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData, Certification } from '../data/portfolioData';
import { CheckCircle2, X } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const categories = ['ALL', 'AI Security', 'Responsible AI', 'MLOps', 'Generative AI'];

  const filteredCerts = activeTab === 'ALL'
    ? portfolioData.certifications
    : portfolioData.certifications.filter(c => c.category === activeTab);

  return (
    <section id="certifications" className="py-24 relative bg-white dark:bg-[#0d0d0d] border-t border-[#eee] dark:border-[#1a1a1a]">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#f97316]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          label="VERIFIED CREDENTIALS"
          title="GOOGLE CLOUD CERTIFICATIONS"
          subtitle="Official completion badges in AI Security, Responsible AI, MLOps, and Generative AI deployment from Google Cloud."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#e5e5e5] dark:border-[#1a1a1a] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              data-cursor
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all ${
                activeTab === cat
                  ? 'bg-[#f97316] text-black shadow-orange-glow-sm'
                  : 'bg-white dark:bg-[#141414] text-[#334155] dark:text-[#a3a3a3] hover:text-[#0d0d0d] dark:hover:text-white border border-[#e0e0e0] dark:border-[#272727] hover:border-[#f97316]/40'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Badges Grid - Faithful to Google Cloud Skills Boost Badge Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCerts.map((cert: Certification, index: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col items-center"
            >
              {/* Authentic Google Cloud Badge Card */}
              <div
                onClick={() => setSelectedCert(cert)}
                data-cursor
                className="w-full max-w-[340px] aspect-square rounded-2xl bg-white dark:bg-[#151515] border border-[#dadce0] dark:border-[#2a2a2a] p-7 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-lg hover:border-[#4285F4]/60 dark:hover:border-[#f97316]/60 transition-all duration-300 cursor-pointer group-hover:-translate-y-1"
              >
                {/* Google Cloud Logo with Official Branding */}
                <div className="flex items-center justify-center gap-1.5 select-none pt-1">
                  <span className="font-display font-medium text-sm tracking-tight">
                    <span className="text-[#4285F4] font-bold">G</span>
                    <span className="text-[#EA4335] font-bold">o</span>
                    <span className="text-[#FBBC05] font-bold">o</span>
                    <span className="text-[#4285F4] font-bold">g</span>
                    <span className="text-[#34A853] font-bold">l</span>
                    <span className="text-[#EA4335] font-bold">e</span>
                    <span className="text-[#5f6368] dark:text-[#9aa0a6] font-normal ml-1">Cloud</span>
                  </span>
                </div>

                {/* Badge Center Title */}
                <div className="px-2 my-auto">
                  <h3 className="font-sans font-medium text-base sm:text-lg text-[#3c4043] dark:text-[#f1f3f4] leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Completion Badge Seal with Divider Lines */}
                <div className="w-full flex flex-col items-center pb-1">
                  <div className="flex items-center justify-center gap-3 w-full max-w-[150px] mb-1.5">
                    <span className="h-px flex-1 bg-[#d1d5db] dark:bg-[#383838]" />
                    <div className="w-5 h-5 rounded-full bg-[#1a73e8] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                      <svg className="w-3 h-3 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="h-px flex-1 bg-[#d1d5db] dark:bg-[#383838]" />
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.18em] text-[#5f6368] dark:text-[#9aa0a6] font-semibold uppercase">
                    COMPLETION BADGE
                  </span>
                </div>
              </div>

              {/* Information Below the Badge */}
              <div className="w-full max-w-[340px] mt-4 flex flex-col items-center text-center">
                <h4
                  onClick={() => setSelectedCert(cert)}
                  data-cursor
                  className="font-sans font-semibold text-sm sm:text-[15px] text-[#202124] dark:text-white leading-snug line-clamp-2 cursor-pointer hover:text-[#f97316] transition-colors"
                >
                  {cert.title}
                </h4>

                <p className="font-sans text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-1.5 font-normal">
                  {cert.issueDate}
                </p>

                {/* Single Clean View Details Button (no duplicates, no share icon) */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  data-cursor
                  className="mt-3.5 px-6 py-1.5 rounded-full border border-[#dadce0] dark:border-[#333] hover:border-[#f97316] dark:hover:border-[#f97316] text-[#1a73e8] dark:text-[#f97316] hover:bg-[#f97316]/5 dark:hover:bg-[#f97316]/10 text-xs font-semibold tracking-wide transition-all duration-200"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Credential Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#141414] border border-[#dadce0] dark:border-[#272727] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#f1f5f9] dark:bg-[#1f1f1f] text-[#475569] dark:text-[#777] hover:text-[#f97316] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] animate-pulse" />
                <span className="font-mono text-xs text-[#f97316] uppercase tracking-wider font-semibold">
                  OFFICIAL GOOGLE CLOUD CREDENTIAL
                </span>
              </div>

              {/* Google Cloud Logo in modal */}
              <div className="flex items-center gap-1.5 select-none mb-3">
                <span className="font-display font-medium text-base tracking-tight">
                  <span className="text-[#4285F4] font-bold">G</span>
                  <span className="text-[#EA4335] font-bold">o</span>
                  <span className="text-[#FBBC05] font-bold">o</span>
                  <span className="text-[#4285F4] font-bold">g</span>
                  <span className="text-[#34A853] font-bold">l</span>
                  <span className="text-[#EA4335] font-bold">e</span>
                  <span className="text-[#5f6368] dark:text-[#9aa0a6] font-normal ml-1">Cloud</span>
                </span>
              </div>

              <h3 className="font-display text-2xl font-extrabold text-[#0f172a] dark:text-white leading-tight mb-2">
                {selectedCert.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#475569] dark:text-[#888] mb-6 font-medium">
                <span className="text-[#0f172a] dark:text-white font-semibold">ISSUER: {selectedCert.issuer}</span>
                <span>•</span>
                <span>{selectedCert.badgeType}</span>
                <span>•</span>
                <span className="text-[#f97316] font-semibold">{selectedCert.issueDate}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] dark:bg-[#1a1a1a] border border-[#e2e8f0] dark:border-[#272727] mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{selectedCert.verificationBadge}</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#334155] dark:text-[#a3a3a3] leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-mono text-xs font-bold text-[#0f172a] dark:text-white uppercase tracking-wider mb-3">
                  CORE TECHNICAL COMPETENCIES:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white dark:bg-[#1f1f1f] text-[#0f172a] dark:text-white border border-[#e2e8f0] dark:border-[#272727] font-mono text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-[#e2e8f0] dark:border-[#1f1f1f]">
                <span className="font-mono text-xs text-[#475569] dark:text-[#888]">RECIPIENT: SHARVIL PAWAR</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#f97316] text-black font-mono text-xs font-bold hover:bg-[#ea6c0a] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
