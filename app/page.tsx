'use client';

import React, { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Settings from '@/components/Settings';
import Notifications, { NotificationItem } from '@/components/Notifications';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('vikram_portfolio_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [motionEnabled, setMotionEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('vikram_portfolio_motion');
    return saved === null ? true : saved === 'true';
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('vikram_portfolio_notifications');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (err) {
        console.error('Failed to parse notifications:', err);
      }
    }
    return [];
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  // Synchronize document element class when theme changes
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Update document theme class on toggle
  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('vikram_portfolio_theme', newTheme);
  };

  // Toggle Motion Setting
  const handleToggleMotion = () => {
    const newMotion = !motionEnabled;
    setMotionEnabled(newMotion);
    localStorage.setItem('vikram_portfolio_motion', String(newMotion));
  };

  // Handle Form Submission -> Adds notification & saves locally
  const handleNewMessage = (senderName: string, senderEmail: string, message: string) => {
    const now = new Date();
    const timeFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateFormatted = now.toLocaleDateString([], { month: 'short', day: 'numeric' });
    const timeString = `${dateFormatted}, ${timeFormatted}`;

    const newNotification: NotificationItem = {
      id: `msg-${Date.now()}`,
      senderName,
      senderEmail,
      message,
      timestamp: timeString,
      read: false,
    };

    const updatedNotifications = [newNotification, ...notifications];
    setNotifications(updatedNotifications);
    localStorage.setItem('vikram_portfolio_notifications', JSON.stringify(updatedNotifications));

    // Also persist stored contact messages for history
    const existingMessages = localStorage.getItem('vikram_portfolio_messages');
    let messagesArr = [];
    if (existingMessages) {
      try {
        messagesArr = JSON.parse(existingMessages);
      } catch (e) {
        messagesArr = [];
      }
    }
    messagesArr.push({ senderName, senderEmail, message, timestamp: new Date().toISOString() });
    localStorage.setItem('vikram_portfolio_messages', JSON.stringify(messagesArr));
  };

  // Mark all notifications as read
  const handleMarkAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
    localStorage.setItem('vikram_portfolio_notifications', JSON.stringify(updated));
  };

  // Clear all notifications
  const handleClearAll = () => {
    setNotifications([]);
    localStorage.removeItem('vikram_portfolio_notifications');
  };

  // Delete single notification
  const handleDeleteNotification = (id: string) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
    localStorage.setItem('vikram_portfolio_notifications', JSON.stringify(updated));
  };

  // Navigation scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section observer
  useEffect(() => {
    const sections = ['home', 'about', 'settings', 'notifications', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <main
      className={`min-h-screen transition-colors duration-500 relative selection:bg-[#FF3D00] selection:text-white ${
        theme === 'dark' ? 'bg-[#0A0C10] text-white' : 'bg-[#F6F7FA] text-slate-900'
      }`}
    >
      {/* Cinematic Animated Background */}
      <AnimatedBackground theme={theme} motionEnabled={motionEnabled} />

      {/* Custom Glowing Cursor (Desktop only) */}
      <CustomCursor motionEnabled={motionEnabled} />

      {/* Glassmorphism Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        unreadCount={unreadCount}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Page Sections */}
      <div className="relative z-10">
        <Hero theme={theme} onNavigate={scrollToSection} motionEnabled={motionEnabled} />

        <About theme={theme} motionEnabled={motionEnabled} />

        <Settings
          theme={theme}
          onToggleTheme={handleToggleTheme}
          motionEnabled={motionEnabled}
          onToggleMotion={handleToggleMotion}
        />

        <Notifications
          theme={theme}
          notifications={notifications}
          onMarkAllAsRead={handleMarkAllAsRead}
          onClearAll={handleClearAll}
          onDeleteNotification={handleDeleteNotification}
          motionEnabled={motionEnabled}
        />

        <Contact theme={theme} onNewMessage={handleNewMessage} motionEnabled={motionEnabled} />

        <FinalCTA theme={theme} onNavigate={scrollToSection} motionEnabled={motionEnabled} />

        <Footer theme={theme} />
      </div>

      {/* Floating Back-to-Top Button */}
      <BackToTop theme={theme} motionEnabled={motionEnabled} />
    </main>
  );
}
