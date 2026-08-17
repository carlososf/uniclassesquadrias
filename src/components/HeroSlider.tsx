import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderPhotos = [
  { src: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp', alt: 'Obra Uniclass 1' },
  { src: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp', alt: 'Obra Uniclass 2' },
  { src: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp', alt: 'Obra Uniclass 3' },
  { src: '/gallery/casas/ms-altavis/ms-altavis-1.webp', alt: 'Obra Uniclass 4' },
  { src: '/gallery/casas/rm-altavis/rm-altavis-1.webp', alt: 'Obra Uniclass 5' },
  { src: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp', alt: 'Obra Uniclass 6' },
  { src: '/gallery/casas/ms-altavis/ms-altavis-3.webp', alt: 'Obra Uniclass 7' },
  { src: '/gallery/casas/ca-alpha11/ca-alpha11-2.webp', alt: 'Obra Uniclass 8' },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentPhoto = sliderPhotos[currentIndex];

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] bg-black overflow-hidden select-none">
      {/* Photo Slide with Seamless Cross-fade (no black flash) */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </section>
  );
}
