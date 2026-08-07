import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce properties for strict mobile autoplay compliance (iOS Safari & Android Chrome)
    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      if (video && video.paused) {
        video.play().catch(() => {
          // Autoplay initially blocked, waiting for user interaction or event
        });
      }
    };

    attemptPlay();

    video.addEventListener('canplay', attemptPlay);
    video.addEventListener('loadeddata', attemptPlay);

    // Fallback: start playing as soon as user touches or scrolls on mobile screen
    const handleUserInteraction = () => {
      attemptPlay();
    };

    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    const handleVisibility = () => {
      if (!document.hidden) {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('loadeddata', attemptPlay);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          preload="auto"
          aria-hidden="true"
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Softened gradient overlay: reduced black density for a lighter, more transparent feel */}
        <div className="absolute inset-0 bg-black/35 md:bg-gradient-to-r md:from-black/55 md:via-black/30 md:to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full md:w-1/2 px-8 md:px-16 flex flex-col justify-center min-h-screen space-y-8 pt-36 pb-16 md:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.35em] text-accent font-semibold"
        >
          Esquadrias de Alumínio · Cotia, SP
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight leading-[1.08] font-display text-white"
        >
          A moldura que<br />
          <span className="font-semibold italic">o seu projeto</span><br />
          merece.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg font-light text-white/75 max-w-md border-l-2 border-accent pl-5 leading-relaxed"
        >
          Design sob medida e precisão milimétrica em esquadrias de alto padrão.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-8 py-4 uppercase tracking-widest text-xs hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-accent/30"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-light px-8 py-4 uppercase tracking-widest text-xs hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Sobre Nós
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Rolar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
