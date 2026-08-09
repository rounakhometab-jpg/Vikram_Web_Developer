'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  unreadCount: number;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({
  theme,
  onToggleTheme,
  unreadCount,
  onNavigate,
  activeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SETTINGS', id: 'settings' },
    { label: 'NOTIFICATIONS', id: 'notifications' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleMenuClick = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 shadow-2xl backdrop-blur-xl border-b'
            : 'py-5 backdrop-blur-md border-b border-transparent'
        } ${
          isDark
            ? isScrolled
              ? 'bg-[#0A0C10]/85 border-white/10 shadow-black/50'
              : 'bg-[#0A0C10]/40 border-white/5'
            : isScrolled
              ? 'bg-[#F6F7FA]/85 border-black/10 shadow-slate-300/40'
              : 'bg-[#F6F7FA]/40 border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Side: Text Name Only (NO LOGO) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3D00] rounded-sm"
            aria-label="Vikram Web Dev Home"
          >
            <span
              className={`font-black tracking-wider text-base sm:text-lg lg:text-xl transition-colors duration-300 ${
                isDark ? 'text-white group-hover:text-[#FF3D00]' : 'text-slate-900 group-hover:text-[#FF3D00]'
              }`}
            >
              VIKRAM WEB DEV
            </span>
          </a>

          {/* Right Side Controls: Theme, Notification Bell, Menu Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 relative group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3D00] ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-yellow-400 border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-slate-800 border border-black/10'
              }`}
            >
              <span className="text-lg sm:text-xl block transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                {isDark ? '☀️' : '🌙'}
              </span>
            </button>

            {/* Notification Bell Button */}
            <button
              onClick={() => onNavigate('notifications')}
              aria-label={`View Notifications (${unreadCount} unread)`}
              title="Notifications"
              className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3D00] ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-slate-900 border border-black/10'
              }`}
            >
              <span className="text-lg sm:text-xl block transform transition-transform duration-300 group-hover:rotate-12">
                🔔
              </span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FF3D00] rounded-full ring-2 ring-[#0A0C10] animate-pulse" />
              )}
            </button>

            {/* Menu Toggle Button (☰ into X) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMenuOpen}
              title="Menu"
              className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3D00] ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  : 'bg-black/5 hover:bg-black/10 text-slate-900 border border-black/10'
              }`}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`w-5 h-0.5 rounded-full transition-all duration-300 transform origin-center ${
                    isDark ? 'bg-white' : 'bg-slate-900'
                  } ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                />
                <span
                  className={`w-5 h-0.5 rounded-full transition-all duration-200 ${
                    isDark ? 'bg-white' : 'bg-slate-900'
                  } ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}
                />
                <span
                  className={`w-5 h-0.5 rounded-full transition-all duration-300 transform origin-center ${
                    isDark ? 'bg-white' : 'bg-slate-900'
                  } ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Glassmorphism Animated Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
            className={`fixed inset-0 z-40 backdrop-blur-2xl flex flex-col justify-center items-center px-6 ${
              isDark ? 'bg-[#0A0C10]/95 text-white' : 'bg-[#F6F7FA]/95 text-slate-900'
            }`}
          >
            {/* Background Blur Ambient Glow */}
            <div className="absolute w-[400px] h-[400px] bg-[#FF3D00]/15 rounded-full blur-[120px] pointer-events-none" />

            <div
              className="relative z-10 w-full max-w-md flex flex-col space-y-4 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p
                className={`text-xs font-mono tracking-widest uppercase mb-4 ${
                  isDark ? 'text-zinc-500' : 'text-slate-400'
                }`}
              >
                NAVIGATION
              </p>

              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    onClick={() => handleMenuClick(item.id)}
                    className={`group relative py-3 px-6 rounded-2xl text-2xl sm:text-3xl font-black tracking-wider transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'text-[#FF3D00]'
                        : isDark
                          ? 'text-white hover:text-[#FF3D00]'
                          : 'text-slate-900 hover:text-[#FF3D00]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isActive && <span className="text-[#FF3D00] text-xl">✦</span>}
                      {item.label}
                    </span>

                    {/* Subtle Hover Background */}
                    <span
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0 ${
                        isDark ? 'bg-white/5' : 'bg-black/5'
                      }`}
                    />
                  </motion.button>
                );
              })}

              {/* Mobile Quick Action inside Menu */}
              <div className="pt-8 border-t border-white/10 mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/919205295106?text=Hello%20Vikram,%20I%20visited%20your%20portfolio%20website%20and%20I'm%20interested%20in%20discussing%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold bg-[#FF3D00] text-white hover:bg-[#E03600] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#FF3D00]/25"
                >
                  <span>Chat on WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
