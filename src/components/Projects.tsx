import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CategoryPage } from './CategoryPage';
import { HiArrowRight, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

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
    name: 'Obra Alphaville 11',
    location: 'Barueri / SP',
    description: 'Residência contemporânea de alto padrão com caixilharia de alumínio preta sob medida, vidros laminados e grandes vãos de correr.',
    mainImage: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp',
    gridClass: 'col-span-1 md:col-span-2 row-span-2 min-h-[420px]',
    photos: Array.from({ length: 9 }, (_, i) => `/gallery/casas/ca-alpha11/ca-alpha11-${i + 1}.webp`),
  },
  {
    id: 'casa-kw-alphaville',
    name: 'Obra Alphaville (KW)',
    location: 'Barueri / SP',
    description: 'Projeto de arquitetura imponente com esquadrias de alumínio pretas, fachada com pele de vidro e fechamentos panorâmicos.',
    mainImage: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 12 }, (_, i) => `/gallery/casas/kw-alphaville/kw-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-lc-alphaville',
    name: 'Obra Alphaville (LC)',
    location: 'Barueri / SP',
    description: 'Mansão moderna com grandes vãos de correr nivelados ao contrapiso, caixilharia preta e excelente isolamento termoacústico.',
    mainImage: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 11 }, (_, i) => `/gallery/casas/lc-alphaville/lc-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-ms-altavis',
    name: 'Obra Altavis',
    location: 'Santana de Parnaíba / SP',
    description: 'Residência de luxo no condomínio Altavis com vidros fixos de grande extensão e estrutura de alumínio sob medida.',
    mainImage: '/gallery/casas/ms-altavis/ms-altavis-1.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 15 }, (_, i) => `/gallery/casas/ms-altavis/ms-altavis-${i + 1}.webp`),
  },
  {
    id: 'casa-rm-altavis',
    name: 'Obra Santana de Parnaíba',
    location: 'Santana de Parnaíba / SP',
    description: 'Projeto residencial executado em Santana de Parnaíba com caixilharia preta, persianas automatizadas e acabamento técnico impecável.',
    mainImage: '/gallery/casas/rm-altavis/rm-altavis-1.webp',
    gridClass: 'col-span-1 md:col-span-2 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 14 }, (_, i) => `/gallery/casas/rm-altavis/rm-altavis-${i + 1}.webp`),
  },
  {
    id: 'casa-vq-alphaville',
    name: 'Obra Alphaville (VQ)',
    location: 'Barueri / SP',
    description: 'Arquitetura contemporânea com panos de vidro fixo, esquadrias pretas de alto padrão e portas pivotantes de grande escala.',
    mainImage: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp',
    gridClass: 'col-span-1 row-span-1 min-h-[220px]',
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/casas/vq-alphaville/vq-alphaville-${i + 1}.webp`),
  },
];

export function Projects() {
  const [selectedHouse, setSelectedHouse] = useState<HouseProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-gray-50/50" id="projects">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#55c5d0] font-bold mb-2">
            Portfólio de Residências
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-primary font-display">
            Obras em <strong className="font-bold text-[#55c5d0]">Destaque</strong>
          </h2>
          <p className="text-gray-500 font-light mt-3 text-sm max-w-xl leading-relaxed">
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

      {/* Houses Photo Mosaic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto px-6 auto-rows-[240px]">
        {housesData.map((house, index) => (
          <motion.div
            key={house.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => {
              setSelectedHouse(house);
              setActivePhotoIndex(0);
            }}
            className={`relative group overflow-hidden rounded-sm cursor-pointer shadow-md border border-gray-200/80 bg-gray-900 ${house.gridClass}`}
          >
            {/* Image with zoom effect */}
            <img
              src={house.mainImage}
              alt={house.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-300" />

            {/* Hover Highlight Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#55c5d0]/60 transition-colors duration-300 pointer-events-none rounded-sm" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#55c5d0] mb-1">
                {house.location}
              </span>
              <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white font-display mb-2">
                {house.name}
              </h3>

              {/* Action text */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-white/90 group-hover:text-[#55c5d0] transition-colors duration-300 pt-1">
                <span>Clique aqui para ver essa obra completa</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
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

      {/* House Modal View */}
      <AnimatePresence>
        {selectedHouse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto select-none"
          >
            <div className="bg-white w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden my-auto border border-gray-200 max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="bg-[#55c5d0] text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                    {selectedHouse.name}
                  </h3>
                  <p className="text-xs text-white/80 uppercase tracking-widest font-medium mt-0.5">
                    {selectedHouse.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedHouse(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                {/* Photo Viewer */}
                <div>
                  <div className="relative aspect-[16/9] bg-black rounded-sm overflow-hidden mb-3">
                    <img
                      src={selectedHouse.photos[activePhotoIndex]}
                      alt={`Foto ${activePhotoIndex + 1} de ${selectedHouse.name}`}
                      className="w-full h-full object-contain"
                    />
                    <button
                      onClick={() =>
                        setActivePhotoIndex(
                          (activePhotoIndex - 1 + selectedHouse.photos.length) % selectedHouse.photos.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#55c5d0] text-white transition-colors cursor-pointer"
                    >
                      <HiChevronLeft className="text-2xl" />
                    </button>
                    <button
                      onClick={() =>
                        setActivePhotoIndex((activePhotoIndex + 1) % selectedHouse.photos.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#55c5d0] text-white transition-colors cursor-pointer"
                    >
                      <HiChevronRight className="text-2xl" />
                    </button>
                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] px-3 py-1 uppercase font-bold tracking-widest rounded-xs">
                      {activePhotoIndex + 1} / {selectedHouse.photos.length} Fotos
                    </span>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedHouse.photos.map((photo, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhotoIndex(i)}
                        className={`w-20 h-14 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all cursor-pointer ${
                          activePhotoIndex === i ? 'border-[#55c5d0] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-6 border border-gray-200 rounded-sm">
                  <div>
                    <p className="text-xs font-bold text-[#55c5d0] uppercase tracking-wider">
                      Deseja um projeto semelhante para sua obra?
                    </p>
                    <p className="text-xs text-gray-500 font-light mt-0.5">
                      Fale diretamente com nossa equipe técnica via WhatsApp.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedHouse(null)}
                    className="inline-flex items-center gap-2 bg-[#55c5d0] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#55c5d0]/90 transition-all shadow-md rounded-sm"
                  >
                    <FaWhatsapp className="text-base" />
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
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
