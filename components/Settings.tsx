'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SettingsProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export default function Settings({
  theme,
  onToggleTheme,
  motionEnabled,
  onToggleMotion,
}: SettingsProps) {
  const isDark = theme === 'dark';

  return (
    <section id="settings" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FF3D00] uppercase">
              02 SETTINGS
            </span>
            <span className="text-sm text-[#FF3D00]">⚙</span>
          </div>
          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Make it yours.
          </h2>
          <p
            className={`text-base sm:text-lg max-w-xl ${
              isDark ? 'text-zinc-400' : 'text-slate-600'
            }`}
          >
            &quot;Customize the appearance of your experience.&quot;
          </p>
        </div>

        {/* Settings Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Appearance Card */}
          <motion.div
            initial={motionEnabled ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              isDark
                ? 'bg-[#12141A]/90 border-white/10 hover:border-white/20'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#FF3D00]">◐</span>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Appearance
                  </h3>
                </div>
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-zinc-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  Theme
                </span>
              </div>

              <p
                className={`text-sm sm:text-base font-medium mb-8 ${
                  isDark ? 'text-zinc-300' : 'text-slate-700'
                }`}
              >
                {isDark ? 'Dark mode is active' : 'Light mode is active'}
              </p>
            </div>

            <button
              onClick={onToggleTheme}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
                isDark
                  ? 'bg-white text-slate-900 hover:bg-zinc-200'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <span className="text-base">{isDark ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}</span>
            </button>
          </motion.div>

          {/* Motion Card */}
          <motion.div
            initial={motionEnabled ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              isDark
                ? 'bg-[#12141A]/90 border-white/10 hover:border-white/20'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#FF3D00]">◌</span>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Motion
                  </h3>
                </div>
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                    motionEnabled
                      ? 'bg-[#FF3D00]/10 border-[#FF3D00]/30 text-[#FF3D00]'
                      : isDark
                        ? 'bg-white/5 border-white/10 text-zinc-400'
                        : 'bg-slate-100 border-slate-200 text-slate-500'
                  }`}
                >
                  {motionEnabled ? 'Enabled' : 'Reduced'}
                </span>
              </div>

              <p
                className={`text-sm sm:text-base font-medium mb-8 ${
                  isDark ? 'text-zinc-300' : 'text-slate-700'
                }`}
              >
                Smooth website animations
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span
                className={`text-xs font-mono uppercase tracking-wider ${
                  isDark ? 'text-zinc-400' : 'text-slate-500'
                }`}
              >
                Animation Effects
              </span>

              {/* Working Toggle Switch */}
              <button
                onClick={onToggleMotion}
                aria-label={motionEnabled ? 'Disable motion' : 'Enable motion'}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3D00] ${
                  motionEnabled ? 'bg-[#FF3D00]' : isDark ? 'bg-zinc-800' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                    motionEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
