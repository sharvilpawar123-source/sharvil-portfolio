import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1600;
    const interval = 18;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 450);
          }, 150);
          return 100;
        }
        return Math.min(prev + step + Math.random() * 3, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#0d0d0d] flex flex-col items-center justify-center p-6 select-none"
        >
          <div className="w-full max-w-xs flex flex-col items-center">
            {/* SP Monogram */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-16 h-16 rounded-2xl bg-[#141414] border border-[#272727] flex items-center justify-center mb-8 shadow-orange-glow"
            >
              <span className="font-display font-extrabold text-2xl text-[#f97316]">SP</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="font-display text-xl font-bold tracking-widest text-white uppercase mb-2"
            >
              SHARVIL PAWAR
            </motion.h1>

            {/* Status label */}
            <div className="font-mono text-xs text-[#555555] tracking-widest uppercase mb-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-ping" />
              INITIALIZING PORTFOLIO...
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#141414] border border-[#1f1f1f] h-1 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #f97316, #fb923c)',
                }}
              />
            </div>

            {/* Counter */}
            <div className="w-full flex justify-between font-mono text-[11px] text-[#555555]">
              <span>AI_DATA_SCIENCE // 2026</span>
              <span className="text-[#f97316] font-bold">{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
