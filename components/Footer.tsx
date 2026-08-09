'use client';

import React from 'react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export default function Footer({ theme }: FooterProps) {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t relative z-10 transition-colors ${
        isDark ? 'bg-[#08090D] border-white/10 text-zinc-400' : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Monogram & Brand Name */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#FF3D00] text-white font-black text-sm flex items-center justify-center tracking-tighter shadow-md shadow-[#FF3D00]/20">
            VK
          </div>
          <div>
            <span
              className={`font-black text-base tracking-wider block ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              VIKRAM WEB DEV
            </span>
            <p className="text-xs font-medium">
              &quot;Designing digital experiences with creativity &amp; code.&quot;
            </p>
          </div>
        </div>

        {/* Right Copyright & Tagline */}
        <div className="text-center md:text-right text-xs font-mono space-y-1">
          <p>© VIKRAM WEB DEV</p>
          <p className={isDark ? 'text-zinc-400' : 'text-slate-500'}>Built with creativity.</p>
        </div>
      </div>
    </footer>
  );
}
