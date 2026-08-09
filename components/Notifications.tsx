'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface NotificationItem {
  id: string;
  senderName: string;
  senderEmail: string;
  message: string;
  timestamp: string;
  read: boolean;
}

interface NotificationsProps {
  theme: 'dark' | 'light';
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
  onDeleteNotification: (id: string) => void;
  motionEnabled: boolean;
}

export default function Notifications({
  theme,
  notifications,
  onMarkAllAsRead,
  onClearAll,
  onDeleteNotification,
  motionEnabled,
}: NotificationsProps) {
  const isDark = theme === 'dark';
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <section id="notifications" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FF3D00] uppercase">
                03 NOTIFICATIONS
              </span>
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-zinc-300'
                    : 'bg-black/5 border-black/10 text-slate-700'
                }`}
              >
                INBOX
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>
            <h2
              className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Your messages, in one place.
            </h2>
          </div>

          {/* Action Buttons if notifications exist */}
          {notifications.length > 0 && (
            <div className="flex items-center gap-3">
              {unreadCount > 0 && (
                <button
                  onClick={onMarkAllAsRead}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-colors ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  Mark as Read ({unreadCount})
                </button>
              )}
              <button
                onClick={onClearAll}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-red-500 hover:bg-red-500/10 border border-red-500/20 transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Notifications List Container */}
        <div className="max-w-4xl">
          {notifications.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={motionEnabled ? { opacity: 0, scale: 0.98 } : false}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-10 sm:p-14 rounded-3xl border text-center flex flex-col items-center justify-center ${
                isDark
                  ? 'bg-[#12141A]/60 border-white/10 text-zinc-400'
                  : 'bg-white border-slate-200 shadow-sm text-slate-600'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-4">
                ✓
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                No new notifications
              </h3>
              <p className="text-sm max-w-sm">
                &quot;New website messages will appear here.&quot;
              </p>
            </motion.div>
          ) : (
            /* Populated Notifications List */
            <div className="space-y-4">
              <AnimatePresence>
                {notifications.map((notif) => (
                  <motion.div
                    key={notif.id}
                    initial={motionEnabled ? { opacity: 0, y: -15, scale: 0.97 } : false}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      notif.read
                        ? isDark
                          ? 'bg-[#12141A]/50 border-white/5 opacity-80'
                          : 'bg-slate-50 border-slate-200 opacity-90'
                        : isDark
                          ? 'bg-[#12141A] border-[#FF3D00]/50 shadow-lg shadow-[#FF3D00]/5'
                          : 'bg-white border-[#FF3D00]/50 shadow-md'
                    }`}
                  >
                    {!notif.read && (
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#FF3D00]" />
                    )}

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-[#FF3D00]">✉</span>
                        <div>
                          <h4
                            className={`font-bold text-base sm:text-lg flex items-center gap-2 ${
                              isDark ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            <span>New message received</span>
                            {!notif.read && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF3D00] text-white">
                                NEW
                              </span>
                            )}
                          </h4>
                          <p
                            className={`text-xs font-mono ${
                              isDark ? 'text-zinc-400' : 'text-slate-500'
                            }`}
                          >
                            From: <strong className={isDark ? 'text-zinc-200' : 'text-slate-800'}>{notif.senderName}</strong> ({notif.senderEmail})
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono whitespace-nowrap ${
                            isDark ? 'text-zinc-500' : 'text-slate-400'
                          }`}
                        >
                          {notif.timestamp}
                        </span>
                        <button
                          onClick={() => onDeleteNotification(notif.id)}
                          aria-label="Delete notification"
                          className="text-zinc-500 hover:text-red-500 p-1 text-sm transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-xl text-sm leading-relaxed ${
                        isDark
                          ? 'bg-white/5 text-zinc-300 border border-white/5'
                          : 'bg-slate-100 text-slate-800 border border-slate-200/60'
                      }`}
                    >
                      <p className="italic">&quot;{notif.message}&quot;</p>
                    </div>

                    <p className={`text-xs mt-3 font-mono ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                      Vikram received a new website message.
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
