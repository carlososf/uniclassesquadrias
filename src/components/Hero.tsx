import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce properties and attributes for strict mobile autoplay compliance (iOS Safari & Android Chrome)
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x5-playsinline', 'true');
    video.setAttribute('muted', 'true');
    video.muted = true;
    video.defaultMuted = true;
    video.controls = false;

    const attemptPlay = () => {
      if (video && video.paused) {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Autoplay blocked by mobile OS power save mode; will start on first touch/scroll
          });
        }
      }
    };

    attemptPlay();

    video.addEventListener('canplay', attemptPlay);
    video.addEventListener('loadeddata', attemptPlay);
    video.addEventListener('loadedmetadata', attemptPlay);

    // Immediate user interaction triggers for mobile
    const handleUserInteraction = () => {
      attemptPlay();
    };

    window.addEventListener('touchstart', handleUserInteraction, { passive: true, capture: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true, capture: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true, capture: true });

    const handleVisibility = () => {
      if (!document.hidden) {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('loadeddata', attemptPlay);
      video.removeEventListener('loadedmetadata', attemptPlay);
      window.removeEventListener('touchstart', handleUserInteraction, { capture: true });
      window.removeEventListener('pointerdown', handleUserInteraction, { capture: true });
      window.removeEventListener('scroll', handleUserInteraction, { capture: true });
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/hero.mp4"
          poster="/hero.png"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Softened gradient overlay */}
        <div className="absolute inset-0 bg-black/35 md:bg-gradient-to-r md:from-black/55 md:via-black/30 md:to-transparent z-10" />
      </div>

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
          className="flex flex-col sm:flex-row flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-8 py-4 uppercase tracking-widest text-xs hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-accent/30 rounded-sm"
          >
            Solicitar Orçamento
          </a>
          <a
            href="/portifoliouniclass.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/40 text-white font-medium px-7 py-4 uppercase tracking-widest text-xs hover:border-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg rounded-sm"
          >
            <FaFilePdf className="text-red-400 text-base" />
            Portfólio (PDF)
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white/80 font-light px-6 py-4 uppercase tracking-widest text-xs hover:border-white hover:text-white transition-all duration-300 rounded-sm"
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
