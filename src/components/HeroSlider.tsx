import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const sliderPhotos = [
  { src: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp', alt: 'Obra Uniclass 1' },
  { src: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp', alt: 'Obra Uniclass 2' },
  { src: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp', alt: 'Obra Uniclass 3' },
  { src: '/gallery/casas/ms-altavis/ms-altavis-1.webp', alt: 'Obra Uniclass 4' },
  { src: '/gallery/casas/rm-altavis/rm-altavis-1.webp', alt: 'Obra Uniclass 5' },
  { src: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp', alt: 'Obra Uniclass 6' },
  { src: '/janelas_integradas.png', alt: 'Janelas Integradas Uniclass' },
  { src: '/cobertura_jardins.png', alt: 'Cobertura de Alumínio Uniclass' },
  { src: '/projeto-principal.png', alt: 'Projeto Fachada Uniclass' },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderPhotos.length) % sliderPhotos.length);
  };

  const currentPhoto = sliderPhotos[currentIndex];

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] bg-black overflow-hidden select-none">
      {/* Photo Slide with Fade In / Fade Out */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Foto anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3.5 md:p-4 rounded-full bg-black/30 hover:bg-accent text-white border border-white/20 hover:border-accent transition-all duration-300 backdrop-blur-md cursor-pointer group"
      >
        <HiChevronLeft className="text-xl md:text-3xl group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Próxima foto"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3.5 md:p-4 rounded-full bg-black/30 hover:bg-accent text-white border border-white/20 hover:border-accent transition-all duration-300 backdrop-blur-md cursor-pointer group"
      >
        <HiChevronRight className="text-xl md:text-3xl group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Minimalist Slide Indicators / Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
        <span className="text-[11px] font-mono text-white/80 font-semibold tracking-wider">
          {String(currentIndex + 1).padStart(2, '0')} / {String(sliderPhotos.length).padStart(2, '0')}
        </span>
        <div className="w-px h-3 bg-white/20" />
        <div className="flex gap-1.5">
          {sliderPhotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para foto ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-accent' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
