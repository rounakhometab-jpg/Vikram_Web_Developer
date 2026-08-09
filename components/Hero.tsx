'use client';

import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  theme: 'dark' | 'light';
  onNavigate: (sectionId: string) => void;
  motionEnabled: boolean;
}

export default function Hero({ theme, onNavigate, motionEnabled }: HeroProps) {
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide border mb-6 transition-colors ${
            isDark
              ? 'bg-white/5 border-white/10 text-emerald-400'
              : 'bg-black/5 border-black/10 text-emerald-600'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
        </motion.div>

        {/* Sub-Title */}
        <motion.p
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.2em] text-[#FF3D00] uppercase mb-4"
        >
          FREELANCE WEB DESIGNER & DEVELOPER
        </motion.p>

        {/* Large Headline */}
        <motion.h1
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          I BUILD DIGITAL <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#FF3D00] dark:from-white dark:via-zinc-100 dark:to-[#FF3D00]">
            EXPERIENCES.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed font-normal mb-10 ${
            isDark ? 'text-zinc-300' : 'text-slate-600'
          }`}
        >
          &quot;Modern, responsive and interactive websites designed to make your brand stand out and leave a lasting impression.&quot;
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14"
        >
          {/* Explore Button -> Scrolls to About */}
          <button
            onClick={() => onNavigate('about')}
            className={`btn-slide w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 border transition-all duration-300 shadow-lg ${
              isDark
                ? 'bg-white/5 border-white/15 text-white hover:border-[#FF3D00] hover:text-white'
                : 'bg-black/5 border-black/15 text-slate-900 hover:border-[#FF3D00] hover:text-white'
            }`}
          >
            <span>Explore</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </button>

          {/* Let's Talk Button -> Scrolls to Contact */}
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-[#FF3D00] hover:bg-[#E03600] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#FF3D00]/25 hover:shadow-[#FF3D00]/40 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>

        {/* Feature Labels */}
        <motion.div
          initial={motionEnabled ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t ${
            isDark ? 'border-white/10 text-zinc-400' : 'border-black/10 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-medium">
            <span className="text-[#FF3D00]">✦</span>
            <span>Creative</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-medium">
            <span className="text-[#FF3D00]">◉</span>
            <span>Responsive</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-medium">
            <span className="text-[#FF3D00]">⚡</span>
            <span>Interactive</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
