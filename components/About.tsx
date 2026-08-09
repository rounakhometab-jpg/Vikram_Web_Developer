'use client';

import React from 'react';
import { motion } from 'motion/react';

interface AboutProps {
  theme: 'dark' | 'light';
  motionEnabled: boolean;
}

export default function About({ theme, motionEnabled }: AboutProps) {
  const isDark = theme === 'dark';

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Responsive Design',
    'UI / UX',
    'Animations',
    'Firebase',
  ];

  const cards = [
    {
      num: '01',
      icon: '◇',
      title: 'Modern',
      desc: 'Clean interfaces with a premium visual direction.',
    },
    {
      num: '02',
      icon: '◉',
      title: 'Responsive',
      desc: 'Designed to look great on phones, tablets and desktops.',
    },
    {
      num: '03',
      icon: '✦',
      title: 'Interactive',
      desc: 'Smooth interactions and meaningful animations.',
    },
    {
      num: '04',
      icon: '⚡',
      title: 'Detail Focused',
      desc: 'Small details that make the overall experience feel premium.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FF3D00] uppercase block mb-3">
            01 ABOUT
          </span>
          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Turning ideas into digital reality.
          </h2>
        </div>

        {/* Content & Skills Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed font-normal">
            <p className={isDark ? 'text-zinc-300' : 'text-slate-700'}>
              I&apos;m Vikram, a freelance web designer and developer focused on creating modern, responsive and visually engaging websites.
            </p>
            <p className={isDark ? 'text-zinc-400' : 'text-slate-600'}>
              I enjoy combining clean design, smooth interactions and practical functionality to create websites that feel different from ordinary templates.
            </p>
          </div>

          {/* Skill / Technology Tags */}
          <div className="lg:col-span-5">
            <h3
              className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 ${
                isDark ? 'text-zinc-400' : 'text-slate-500'
              }`}
            >
              CORE TECHNOLOGIES & SKILLS
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={motionEnabled ? { opacity: 0, scale: 0.9 } : false}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all duration-300 hover:border-[#FF3D00] hover:text-[#FF3D00] ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-zinc-300'
                      : 'bg-black/5 border-black/10 text-slate-700'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Four Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={motionEnabled ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                isDark
                  ? 'bg-[#12141A]/80 border-white/10 hover:border-[#FF3D00]/60 hover:shadow-[#FF3D00]/10'
                  : 'bg-white border-slate-200/80 hover:border-[#FF3D00]/60 hover:shadow-slate-300/50'
              }`}
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3D00]/0 group-hover:bg-[#FF3D00]/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Number and Icon Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-[#FF3D00] tracking-widest">
                  {card.num}
                </span>
                <span className="text-2xl text-[#FF3D00] transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {card.icon}
                </span>
              </div>

              {/* Card Title */}
              <h3
                className={`text-xl font-bold mb-3 tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {card.title}
              </h3>

              {/* Card Description */}
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? 'text-zinc-400' : 'text-slate-600'
                }`}
              >
                &quot;{card.desc}&quot;
              </p>

              {/* Bottom Subtle Accent Border Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF3D00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
