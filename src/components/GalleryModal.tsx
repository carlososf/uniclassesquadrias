import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export interface GalleryCategory {
  id: string;
  title: string;
  subtitle: string;
  photos: string[];
}

export const galleryData: Record<string, GalleryCategory> = {
  portas: {
    id: 'portas',
    title: 'Coleção Portas Pivotantes e Correr',
    subtitle: 'Galeria de fotos reais de portas de alto padrão instaladas',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/portas-${i + 1}.webp`),
  },
  janelas: {
    id: 'janelas',
    title: 'Coleção Janelas de Canto e Integradas',
    subtitle: 'Design minimalista, automação e vedação de alta performance',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/janelas-${i + 1}.webp`),
  },
  vidros: {
    id: 'vidros',
    title: 'Coleção Vidros Fixos e Fachadas',
    subtitle: 'Maximização da luz natural com integração estrutural limpa',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/vidros-${i + 1}.webp`),
  },
  camarao: {
    id: 'camarao',
    title: 'Coleção Sistemas Camarão e Basculantes',
    subtitle: 'Aberturas totais e otimização inteligente de vãos',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/camarao-${i + 1}.webp`),
  },
  projetos: {
    id: 'projetos',
    title: 'Projetos Residenciais Executados',
    subtitle: 'Fachadas e obras completas entregues com precisão Uniclass',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/projetos-${i + 1}.webp`),
  },
};

interface GalleryModalProps {
  categoryId: string | null;
  onClose: () => void;
}

export function GalleryModal({ categoryId, onClose }: GalleryModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const category = categoryId ? galleryData[categoryId] || galleryData['projetos'] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImageIndex !== null) {
          setSelectedImageIndex(null);
        } else {
          onClose();
        }
      }
      if (selectedImageIndex !== null && category) {
        if (e.key === 'ArrowRight') {
          setSelectedImageIndex((selectedImageIndex + 1) % category.photos.length);
        }
        if (e.key === 'ArrowLeft') {
          setSelectedImageIndex((selectedImageIndex - 1 + category.photos.length) % category.photos.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, category, onClose]);

  if (!category || !categoryId) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
      >
        <div className="relative w-full max-w-6xl bg-primary text-white rounded-lg border border-white/10 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-primary/95 sticky top-0 z-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold">
                Galeria de Fotos Reais · Uniclass
              </span>
              <h2 className="text-xl md:text-2xl font-light text-white font-display">
                {category.title}
              </h2>
              <p className="text-xs text-white/60 font-light mt-0.5 hidden sm:block">
                {category.subtitle} ({category.photos.length} fotos otimizadas em alta definição)
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-accent text-white transition-colors duration-200"
              aria-label="Fechar galeria"
            >
              <HiX className="text-2xl" />
            </button>
          </div>

          {/* Grid of Photos */}
          <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative aspect-square overflow-hidden bg-white/5 rounded border border-white/10 cursor-pointer shadow-md hover:border-accent transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`${category.title} foto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[10px] font-medium text-white uppercase tracking-wider">
                    Ampliar Foto {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Action inside Modal */}
          <div className="p-5 border-t border-white/10 bg-primary/95 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/70 font-light text-center sm:text-left">
              Gostou de algum modelo? Peça um orçamento com essas medidas.
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              <FaWhatsapp className="text-base" />
              Solicitar Orçamento Desse Modelo
            </a>
          </div>
        </div>

        {/* Lightbox Overlay when an image is clicked */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-between p-4 md:p-8"
            >
              {/* Top Controls */}
              <div className="w-full max-w-5xl flex justify-between items-center z-10">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  {selectedImageIndex + 1} de {category.photos.length} — {category.title}
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-2 rounded-full bg-white/20 hover:bg-accent text-white transition-colors"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              {/* Main Expanded Image */}
              <div className="relative flex items-center justify-center w-full max-w-5xl my-auto h-[75vh]">
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex - 1 + category.photos.length) % category.photos.length
                    )
                  }
                  className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-accent text-white transition-all shadow-lg"
                >
                  <HiChevronLeft className="text-3xl" />
                </button>

                <img
                  src={category.photos[selectedImageIndex]}
                  alt={`${category.title} em destaque`}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded"
                />

                <button
                  onClick={() =>
                    setSelectedImageIndex((selectedImageIndex + 1) % category.photos.length)
                  }
                  className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-accent text-white transition-all shadow-lg"
                >
                  <HiChevronRight className="text-3xl" />
                </button>
              </div>

              {/* Bottom Lightbox Controls */}
              <div className="z-10 flex items-center gap-4">
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedImageIndex(null);
                    onClose();
                  }}
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent/90 transition-all"
                >
                  <FaWhatsapp className="text-base" />
                  Orçar Este Projeto no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
