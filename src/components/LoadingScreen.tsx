import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling during preloader
    document.body.style.overflow = 'hidden';

    // Smooth progress counter over 3.2 seconds
    const startTime = Date.now();
    const duration = 3200; // 3.2s total progress

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
      }
    }, 30);

    // Fade out preloader at 3.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] bg-[#070707] flex flex-col items-center justify-center px-6 select-none font-sans"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[350px] h-[350px] bg-[#007799]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-md">
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Uniclass Esquadrias"
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="h-20 sm:h-24 md:h-28 object-contain mb-8 filter drop-shadow-[0_10px_25px_rgba(0,119,153,0.3)]"
            />

            {/* Glowing Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '48px', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-0.5 bg-accent mb-6 rounded-full"
            />

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl font-light tracking-wide text-white/90 font-display mb-8"
            >
              Pronto para elevar o nível?
            </motion.p>

            {/* Premium Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-48 sm:w-56 h-[3px] bg-white/10 rounded-full overflow-hidden relative mb-3"
            >
              <div
                className="h-full bg-gradient-to-r from-[#007799] to-accent transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_#007799]"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* Percentage indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono font-medium"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
