'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ContactProps {
  theme: 'dark' | 'light';
  onNewMessage: (senderName: string, senderEmail: string, message: string) => void;
  motionEnabled: boolean;
}

export default function Contact({ theme, onNewMessage, motionEnabled }: ContactProps) {
  const isDark = theme === 'dark';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const whatsappUrl = `https://wa.me/919205295106?text=${encodeURIComponent(
    "Hello Vikram, I visited your portfolio website and I'm interested in discussing a website project."
  )}`;

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      errs.name = 'Please enter your name';
    }

    if (!email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!message.trim()) {
      errs.message = 'Please enter your project details';
    } else if (message.trim().length < 5) {
      errs.message = 'Please write at least 5 characters';
    } else if (message.length > 1000) {
      errs.message = 'Message cannot exceed 1000 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onNewMessage(name.trim(), email.trim(), message.trim());
      setIsSubmitting(false);
      setIsSuccess(true);

      setName('');
      setEmail('');
      setMessage('');
      setErrors({});

      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FF3D00] uppercase block mb-3">
            04 CONTACT
          </span>
          <p
            className={`text-xs font-mono font-bold tracking-widest uppercase mb-2 ${
              isDark ? 'text-zinc-400' : 'text-slate-500'
            }`}
          >
            HAVE A PROJECT?
          </p>
          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let&apos;s build something amazing.
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
              isDark ? 'text-zinc-300' : 'text-slate-700'
            }`}
          >
            &quot;Have an idea for a website? Tell me what you have in mind and let&apos;s turn it into a modern digital experience.&quot;
          </p>
        </div>

        {/* Contact Cards & Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <a
              href="tel:+919205295106"
              className={`group p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex items-center justify-between hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#12141A] border-white/10 hover:border-[#FF3D00]/60'
                  : 'bg-white border-slate-200 shadow-sm hover:border-[#FF3D00]/60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF3D00]/10 border border-[#FF3D00]/20 text-[#FF3D00] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  ☎
                </div>
                <div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                      isDark ? 'text-zinc-400' : 'text-slate-500'
                    }`}
                  >
                    CALL / PHONE
                  </span>
                  <span
                    className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    +91 92052 95106
                  </span>
                </div>
              </div>
              <span className="text-zinc-400 group-hover:text-[#FF3D00] group-hover:translate-x-1 transition-all text-xl">
                →
              </span>
            </a>

            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex items-center justify-between hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#12141A] border-white/10 hover:border-emerald-500/60'
                  : 'bg-white border-slate-200 shadow-sm hover:border-emerald-500/60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  ↗
                </div>
                <div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                      isDark ? 'text-zinc-400' : 'text-slate-500'
                    }`}
                  >
                    WHATSAPP
                  </span>
                  <span
                    className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Chat with me
                  </span>
                </div>
              </div>
              <span className="text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all text-xl">
                ↗
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:vikramwebdev.contact@gmail.com"
              className={`group p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex items-center justify-between hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#12141A] border-white/10 hover:border-[#FF3D00]/60'
                  : 'bg-white border-slate-200 shadow-sm hover:border-[#FF3D00]/60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF3D00]/10 border border-[#FF3D00]/20 text-[#FF3D00] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  ✉
                </div>
                <div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                      isDark ? 'text-zinc-400' : 'text-slate-500'
                    }`}
                  >
                    EMAIL
                  </span>
                  <span
                    className={`text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Send an email
                  </span>
                </div>
              </div>
              <span className="text-zinc-400 group-hover:text-[#FF3D00] group-hover:translate-x-1 transition-all text-xl">
                →
              </span>
            </a>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={motionEnabled ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 sm:p-10 rounded-3xl border relative ${
                isDark
                  ? 'bg-[#12141A]/90 border-white/10'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              {/* Form Title & Step Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3
                  className={`text-lg sm:text-xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  START A CONVERSATION
                </h3>
                <span className="text-xs font-mono font-bold text-[#FF3D00]">01 / 01</span>
              </div>

              {/* Success Notification Feedback */}
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3">
                  <span className="text-lg">✓</span>
                  <div>
                    <strong className="block font-bold">Message Sent Successfully!</strong>
                    <span>Your message has been received. Vikram will review it in his inbox shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                      isDark ? 'text-zinc-300' : 'text-slate-700'
                    }`}
                  >
                    Your Name <span className="text-[#FF3D00]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#FF3D00] ${
                      errors.name
                        ? 'border-red-500 bg-red-500/5'
                        : isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-zinc-500 focus:border-[#FF3D00]'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#FF3D00]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                      isDark ? 'text-zinc-300' : 'text-slate-700'
                    }`}
                  >
                    Your Email <span className="text-[#FF3D00]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#FF3D00] ${
                      errors.email
                        ? 'border-red-500 bg-red-500/5'
                        : isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-zinc-500 focus:border-[#FF3D00]'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#FF3D00]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="message"
                      className={`block text-xs font-mono font-bold uppercase tracking-wider ${
                        isDark ? 'text-zinc-300' : 'text-slate-700'
                      }`}
                    >
                      Project Details <span className="text-[#FF3D00]">*</span>
                    </label>
                    <span
                      className={`text-xs font-mono ${
                        message.length > 1000
                          ? 'text-red-500 font-bold'
                          : isDark
                            ? 'text-zinc-500'
                            : 'text-slate-400'
                      }`}
                    >
                      {message.length} / 1000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    rows={4}
                    maxLength={1000}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me a little about your project..."
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#FF3D00] ${
                      errors.message
                        ? 'border-red-500 bg-red-500/5'
                        : isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-zinc-500 focus:border-[#FF3D00]'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#FF3D00]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-slide w-full py-4 rounded-xl font-bold text-base text-white bg-[#FF3D00] hover:bg-[#E03600] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#FF3D00]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
