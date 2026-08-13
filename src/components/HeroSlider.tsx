import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const sliderPhotos = [
  {
    title: 'Obra Alphaville 11',
    subtitle: 'Fachada Glazing Envidraçada & Caixilharia Minimalista Black',
    location: 'Barueri / SP',
    src: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp',
  },
  {
    title: 'Obra Alphaville (KW)',
    subtitle: 'Pele de Vidro Panorâmica com Duplo Pé-Direito',
    location: 'Barueri / SP',
    src: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp',
  },
  {
    title: 'Obra Alphaville (LC)',
    subtitle: 'Grandes Vãos de Correr Nivelados com o Contrapiso',
    location: 'Barueri / SP',
    src: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp',
  },
  {
    title: 'Obra Altavis',
    subtitle: 'Panos de Vidro Fixo Panorâmicos & Estanqueidade de Vento',
    location: 'Santana de Parnaíba / SP',
    src: '/gallery/casas/ms-altavis/ms-altavis-1.webp',
  },
  {
    title: 'Obra Santana de Parnaíba',
    subtitle: 'Portas Deslizantes de 6 Folhas com Recolhimento Total',
    location: 'Santana de Parnaíba / SP',
    src: '/gallery/casas/rm-altavis/rm-altavis-1.webp',
  },
  {
    title: 'Obra Alphaville (VQ)',
    subtitle: 'Arquitetura Monumental com Vidros de Alta Performance',
    location: 'Barueri / SP',
    src: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp',
  },
  {
    title: 'Janelas Integradas Automatizadas',
    subtitle: 'Persianas Motorizadas com Recolhimento Embutido',
    location: 'Cotia / SP',
    src: '/janelas_integradas.png',
  },
  {
    title: 'Engenharia de Esquadrias Sob Medida',
    subtitle: 'Cobertura, Caixilharia de Segurança & Garantia CREA-SP',
    location: 'Fábrica Uniclass',
    src: '/cobertura_jardins.png',
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderPhotos.length);
    }, 5000);
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
    <section className="relative w-full h-[85vh] min-h-[600px] bg-black overflow-hidden select-none">
      {/* Photo Slide with Fade In / Fade Out */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Top Header Badge */}
      <div className="absolute top-10 left-8 md:left-16 z-20 flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
        <span className="text-xs uppercase tracking-[0.35em] font-semibold text-white/80">
          Galeria Residencial Uniclass
        </span>
      </div>

      {/* Central / Bottom Caption Content */}
      <div className="absolute bottom-12 md:bottom-20 left-8 md:left-16 right-8 md:right-32 z-20 max-w-4xl text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-3"
          >
            <div className="inline-block px-3.5 py-1 bg-accent/90 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-[0.25em] mb-1">
              {currentPhoto.location}
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light font-display leading-tight text-white">
              {currentPhoto.title}
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              {currentPhoto.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Foto anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 hover:bg-accent text-white border border-white/20 hover:border-accent transition-all duration-300 backdrop-blur-md cursor-pointer group"
      >
        <HiChevronLeft className="text-2xl md:text-3xl group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Próxima foto"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 hover:bg-accent text-white border border-white/20 hover:border-accent transition-all duration-300 backdrop-blur-md cursor-pointer group"
      >
        <HiChevronRight className="text-2xl md:text-3xl group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators / Line Progress */}
      <div className="absolute bottom-8 right-8 md:right-16 z-30 flex items-center gap-3">
        <span className="text-xs font-mono text-white/70 font-semibold">
          {String(currentIndex + 1).padStart(2, '0')} / {String(sliderPhotos.length).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          {sliderPhotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-accent' : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
