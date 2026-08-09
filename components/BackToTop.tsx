'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BackToTopProps {
  theme: 'dark' | 'light';
  motionEnabled: boolean;
}

export default function BackToTop({ theme, motionEnabled }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={motionEnabled ? { opacity: 0, scale: 0.8, y: 20 } : false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl flex items-center justify-center text-lg shadow-xl border transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3D00] ${
            isDark
              ? 'bg-[#12141A]/90 border-white/15 text-white hover:bg-[#FF3D00] hover:border-[#FF3D00] shadow-black/50'
              : 'bg-white/90 border-slate-300 text-slate-900 hover:bg-[#FF3D00] hover:text-white hover:border-[#FF3D00] shadow-slate-400/30'
          }`}
        >
          <span className="transform group-hover:-translate-y-1 transition-transform duration-300 font-bold">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
