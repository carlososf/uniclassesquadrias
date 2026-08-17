import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CategoryPage } from './CategoryPage';
import { HiArrowLeft, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export interface ObraItem {
  name: string;
  desc: string;
}

export interface HouseProject {
  id: string;
  name: string;
  location: string;
  description: string;
  mainImage: string;
  gridClass?: string;
  photos: string[];
}

export const housesData: HouseProject[] = [
  {
    id: 'casa-ca-alpha11',
    name: 'Alphaville 11',
    location: 'Barueri / SP',
    description: 'Residência contemporânea de alto padrão com caixilharia de alumínio preta sob medida, vidros laminados e grandes vãos de correr.',
    mainImage: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp',
    gridClass: 'col-span-1 md:col-span-2 row-span-2 min-h-[420px]',
    photos: Array.from({ length: 9 }, (_, i) => `/gallery/casas/ca-alpha11/ca-alpha11-${i + 1}.webp`),
  },
  {
    id: 'casa-kw-alphaville',
    name: 'Alphaville (KW)',
    location: 'Barueri / SP',
    description: 'Projeto de arquitetura imponente com esquadrias de alumínio pretas, fachada com pele de vidro e fechamentos panorâmicos.',
    mainImage: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 12 }, (_, i) => `/gallery/casas/kw-alphaville/kw-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-lc-alphaville',
    name: 'Alphaville (LC)',
    location: 'Barueri / SP',
    description: 'Mansão moderna com grandes vãos de correr nivelados ao contrapiso, caixilharia preta e excelente isolamento termoacústico.',
    mainImage: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 11 }, (_, i) => `/gallery/casas/lc-alphaville/lc-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-ms-altavis',
    name: 'Altavis',
    location: 'Santana de Parnaíba / SP',
    description: 'Residência de luxo no condomínio Altavis com vidros fixos de grande extensão e estrutura de alumínio sob medida.',
    mainImage: '/gallery/casas/ms-altavis/ms-altavis-1.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 15 }, (_, i) => `/gallery/casas/ms-altavis/ms-altavis-${i + 1}.webp`),
  },
  {
    id: 'casa-rm-altavis',
    name: 'Santana de Parnaíba',
    location: 'Santana de Parnaíba / SP',
    description: 'Projeto residencial executado em Santana de Parnaíba com caixilharia preta, persianas automatizadas e acabamento técnico impecável.',
    mainImage: '/gallery/casas/rm-altavis/rm-altavis-1.webp',
    gridClass: 'col-span-1 md:col-span-2 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 14 }, (_, i) => `/gallery/casas/rm-altavis/rm-altavis-${i + 1}.webp`),
  },
  {
    id: 'casa-vq-alphaville',
    name: 'Alphaville (VQ)',
    location: 'Barueri / SP',
    description: 'Arquitetura contemporânea com panos de vidro fixo, esquadrias pretas de alto padrão e portas pivotantes de grande escala.',
    mainImage: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/casas/vq-alphaville/vq-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-ca-alpha11-extra',
    name: 'Fachada & Caixilharia Minimalista',
    location: 'Barueri / SP',
    description: 'Fachada contemporânea integrada com perfis minimalistas e alumínio de alta densidade.',
    mainImage: '/gallery/casas/ca-alpha11/ca-alpha11-3.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 9 }, (_, i) => `/gallery/casas/ca-alpha11/ca-alpha11-${i + 1}.webp`),
  },
  {
    id: 'casa-lc-alphaville-extra',
    name: 'Sistema Camarão Varanda Gourmet',
    location: 'Barueri / SP',
    description: 'Fechamento de varanda com sistema camarão 100% de abertura livre.',
    mainImage: '/gallery/casas/lc-alphaville/lc-alphaville-5.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 11 }, (_, i) => `/gallery/casas/lc-alphaville/lc-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-ms-altavis-extra',
    name: 'Pé Direito Duplo em Vidro',
    location: 'Santana de Parnaíba / SP',
    description: 'Grandes vãos envidraçados com caixilhos estruturais para iluminação natural plena.',
    mainImage: '/gallery/casas/ms-altavis/ms-altavis-3.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 15 }, (_, i) => `/gallery/casas/ms-altavis/ms-altavis-${i + 1}.webp`),
  },
];

export function Projects() {
  const [selectedHouse, setSelectedHouse] = useState<HouseProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [fullImageIndex, setFullImageIndex] = useState<number | null>(null);

  // Close modal or full image viewer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fullImageIndex !== null) {
          setFullImageIndex(null);
        } else if (selectedHouse) {
          setSelectedHouse(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullImageIndex, selectedHouse]);

  return (
    <section className="py-24 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#55c5d0] font-bold mb-2">
            Portfólio de Residências
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white font-display">
            Obras em <strong className="font-bold text-[#55c5d0]">Destaque</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 text-sm max-w-xl leading-relaxed">
            Mosaico interativo de projetos de alto padrão executados pela Uniclass Esquadrias.
          </p>
          <div className="w-16 h-1 bg-[#55c5d0] mt-4"></div>
        </div>

        <button
          onClick={() => setSelectedCategory('projetos')}
          className="hidden md:inline-flex items-center gap-2 border-b border-[#55c5d0] pb-1 text-[#55c5d0] hover:text-[#55c5d0]/80 hover:border-[#55c5d0]/80 font-bold text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer"
        >
          Ver Galeria Completa de Obras →
        </button>
      </div>

      {/* Houses Photo Grid — Clean photos without text overlay or dark shadows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto px-6 auto-rows-[240px]">
        {housesData.map((house, index) => (
          <motion.div
            key={house.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            onClick={() => {
              setSelectedHouse(house);
              setFullImageIndex(null);
            }}
            className={`relative group overflow-hidden rounded-sm cursor-pointer border border-white/10 hover:border-[#55c5d0] transition-colors duration-300 bg-gray-950 ${house.gridClass}`}
          >
            {/* Clean Image with zoom effect */}
            <img
              src={house.mainImage}
              alt={house.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <button
          onClick={() => setSelectedCategory('projetos')}
          className="inline-block border-b border-[#55c5d0] pb-1 text-[#55c5d0] hover:text-[#55c5d0]/80 hover:border-[#55c5d0]/80 text-xs uppercase tracking-widest font-bold transition-colors duration-300"
        >
          Ver Galeria Completa de Obras →
        </button>
      </div>

      {/* Dedicated Minimalist Work Page View */}
      <AnimatePresence>
        {selectedHouse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black text-white overflow-y-auto select-none"
          >
            {/* Top Bar Header */}
            <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-6 py-5 flex items-center justify-between">
              <button
                onClick={() => setSelectedHouse(null)}
                className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#55c5d0] hover:text-white transition-colors cursor-pointer"
              >
                <HiArrowLeft className="text-lg" />
                Voltar para Obras
              </button>

              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-light font-display uppercase tracking-widest text-white">
                  OBRA — <span className="font-bold text-[#55c5d0]">{selectedHouse.name}</span>
                </h2>
                <p className="text-[10px] text-gray-400 font-light uppercase tracking-widest mt-0.5">
                  {selectedHouse.location} · {selectedHouse.photos.length} FOTOS
                </p>
              </div>

              <button
                onClick={() => setSelectedHouse(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <HiX className="text-xl" />
              </button>
            </div>

            {/* Minimalist Photo Grid of Selected Work */}
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {selectedHouse.photos.map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    onClick={() => setFullImageIndex(i)}
                    className="group relative aspect-[4/3] overflow-hidden bg-gray-950 rounded-sm cursor-pointer border border-white/10 hover:border-[#55c5d0] transition-colors duration-300 shadow-md"
                  >
                    <img
                      src={photo}
                      alt={`Foto ${i + 1} de OBRA ${selectedHouse.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Lightbox for individual photo zoom */}
            <AnimatePresence>
              {fullImageIndex !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-60 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
                >
                  <button
                    onClick={() => setFullImageIndex(null)}
                    className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#55c5d0] text-white transition-colors cursor-pointer z-50"
                  >
                    <HiX className="text-2xl" />
                  </button>

                  <button
                    onClick={() =>
                      setFullImageIndex(
                        (fullImageIndex - 1 + selectedHouse.photos.length) % selectedHouse.photos.length
                      )
                    }
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[#55c5d0] text-white transition-colors cursor-pointer z-50"
                  >
                    <HiChevronLeft className="text-3xl" />
                  </button>

                  <button
                    onClick={() =>
                      setFullImageIndex((fullImageIndex + 1) % selectedHouse.photos.length)
                    }
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-[#55c5d0] text-white transition-colors cursor-pointer z-50"
                  >
                    <HiChevronRight className="text-3xl" />
                  </button>

                  <div className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center">
                    <img
                      src={selectedHouse.photos[fullImageIndex]}
                      alt={`Foto ${fullImageIndex + 1} de OBRA ${selectedHouse.name}`}
                      className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
                    />
                    <p className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
                      {fullImageIndex + 1} / {selectedHouse.photos.length} · OBRA {selectedHouse.name}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <CategoryPage
        categoryId={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}
