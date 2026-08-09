'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  theme: 'dark' | 'light';
  onNavigate: (sectionId: string) => void;
  motionEnabled: boolean;
}

export default function FinalCTA({ theme, onNavigate, motionEnabled }: FinalCTAProps) {
  const isDark = theme === 'dark';

  const whatsappUrl = `https://wa.me/919205295106?text=${encodeURIComponent(
    "Hello Vikram, I visited your portfolio website and I'm interested in discussing a website project."
  )}`;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 sm:p-14 lg:p-16 rounded-3xl border text-center relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-b from-[#12141A] to-[#0A0C10] border-white/10 shadow-2xl'
              : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-xl'
          }`}
        >
          {/* Subtle Ambient Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FF3D00]/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#FF3D00] uppercase block mb-4">
            READY WHEN YOU ARE
          </span>

          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 max-w-3xl mx-auto ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let&apos;s create something unforgettable.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* Button 1: Start a Conversation ↗ */}
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-[#FF3D00] hover:bg-[#E03600] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#FF3D00]/25 transform hover:-translate-y-0.5"
            >
              <span>Start a Conversation</span>
              <span className="text-lg">↗</span>
            </button>

            {/* Button 2: Chat on WhatsApp ↑ */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base border transition-all duration-300 flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-white/5 border-white/15 text-white hover:border-emerald-500 hover:text-emerald-400'
                  : 'bg-black/5 border-black/15 text-slate-900 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              <span>Chat on WhatsApp</span>
              <span className="text-lg">↑</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
