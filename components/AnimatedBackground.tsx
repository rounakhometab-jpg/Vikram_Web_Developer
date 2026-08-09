'use client';

import React, { useMemo } from 'react';

interface AnimatedBackgroundProps {
  theme: 'dark' | 'light';
  motionEnabled: boolean;
}

export default function AnimatedBackground({ theme, motionEnabled }: AnimatedBackgroundProps) {
  const isDark = theme === 'dark';

  // Memoize deterministic particle positions to comply with React rendering purity
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 2 + (i % 3) * 1.2,
      left: (i * 8.3 + ((i * 17) % 7)) % 100,
      top: (i * 7.5 + ((i * 23) % 15)) % 100,
      duration: 6 + (i % 5),
      delay: i * 0.7,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Primary Background Base */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? 'bg-[#0A0C10]' : 'bg-[#F6F7FA]'
        }`}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Ambient Orange Glow Circles */}
      <div
        className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[130px] transition-opacity duration-700 ${
          motionEnabled ? 'animate-pulse-glow' : ''
        }`}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,61,0,0.18) 0%, rgba(255,61,0,0) 70%)'
            : 'radial-gradient(circle, rgba(255,61,0,0.12) 0%, rgba(255,61,0,0) 70%)',
        }}
      />

      <div
        className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-[150px] transition-opacity duration-700 ${
          motionEnabled ? 'animate-pulse-glow' : ''
        }`}
        style={{
          animationDelay: '3.5s',
          background: isDark
            ? 'radial-gradient(circle, rgba(255,61,0,0.15) 0%, rgba(255,61,0,0) 70%)'
            : 'radial-gradient(circle, rgba(255,61,0,0.08) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      {/* Center Subtle Flare */}
      <div
        className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[160px] opacity-40"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,61,0,0.1) 0%, rgba(0,0,0,0) 75%)'
            : 'radial-gradient(circle, rgba(255,61,0,0.06) 0%, rgba(255,255,255,0) 75%)',
        }}
      />

      {/* Floating Light Particles (only if motion is enabled) */}
      {motionEnabled && (
        <div className="absolute inset-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: '#FF3D00',
                left: `${p.left}%`,
                top: `${p.top}%`,
                animation: `float-particle ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
                boxShadow: '0 0 8px rgba(255, 61, 0, 0.8)',
              }}
            />
          ))}
        </div>
      )}

      {/* Top & Bottom Cinematic Fade Vignettes */}
      <div
        className={`absolute top-0 left-0 right-0 h-32 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-b from-[#0A0C10] to-transparent'
            : 'bg-gradient-to-b from-[#F6F7FA] to-transparent'
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-t from-[#0A0C10] to-transparent'
            : 'bg-gradient-to-t from-[#F6F7FA] to-transparent'
        }`}
      />
    </div>
  );
}
