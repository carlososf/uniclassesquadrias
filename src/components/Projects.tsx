import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CategoryPage } from './CategoryPage';
import { HiCheck, HiArrowRight, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaWhatsapp, FaHome } from 'react-icons/fa';

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
  obrasCount: number;
  obras: ObraItem[];
  photos: string[];
}

export const housesData: HouseProject[] = [
  {
    id: 'casa-ca-alpha11',
    name: 'Obra Alphaville 11',
    location: 'Alphaville 11 · Barueri / SP',
    description: 'Residência contemporânea de alto padrão com caixilharia de alumínio preta sob medida, vidros laminados e grandes vãos de correr.',
    mainImage: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp',
    obrasCount: 3,
    obras: [
      { name: 'Portas de Correr Minimalistas', desc: 'Trilho embutido no piso com vedação hermética.' },
      { name: 'Fachada Envidraçada Glazing', desc: 'Vidros de alta performance com controle térmico e solar.' },
      { name: 'Janelas Integradas Motorizadas', desc: 'Persianas automatizadas com recolhimento total.' },
    ],
    photos: Array.from({ length: 9 }, (_, i) => `/gallery/casas/ca-alpha11/ca-alpha11-${i + 1}.webp`),
  },
  {
    id: 'casa-kw-alphaville',
    name: 'Obra Alphaville (KW)',
    location: 'Alphaville · Barueri / SP',
    description: 'Projeto de arquitetura imponente com esquadrias de alumínio pretas, fachada com pele de vidro e fechamentos panorâmicos.',
    mainImage: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp',
    obrasCount: 3,
    obras: [
      { name: 'Pele de Vidro Panorâmica', desc: 'Integração visual contínua para áreas sociais.' },
      { name: 'Porta Pivotante Principal', desc: 'Design imponente com acabamento anodizado premium.' },
      { name: 'Janelas de Canto Sem Coluna', desc: 'Junção em 45º para visão totalmente limpa.' },
    ],
    photos: Array.from({ length: 12 }, (_, i) => `/gallery/casas/kw-alphaville/kw-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-lc-alphaville',
    name: 'Obra Alphaville (LC)',
    location: 'Alphaville · Barueri / SP',
    description: 'Mansão moderna com grandes vãos de correr nivelados ao contrapiso, caixilharia preta e excelente isolamento termoacústico.',
    mainImage: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp',
    obrasCount: 3,
    obras: [
      { name: 'Esquadrias Panorâmicas Multi-Folhas', desc: 'Abertura ampla para integração com a área externa.' },
      { name: 'Sistema Camarão Varanda Gourmet', desc: 'Abertura 100% livre sanfonada para área social.' },
      { name: 'Vidros Laminados Duplos', desc: 'Isolamento acústico superior para os dormitórios.' },
    ],
    photos: Array.from({ length: 11 }, (_, i) => `/gallery/casas/lc-alphaville/lc-alphaville-${i + 1}.webp`),
  },
  {
    id: 'casa-ms-altavis',
    name: 'Obra Altavis',
    location: 'Altavis · Santana de Parnaíba / SP',
    description: 'Residência de luxo no condomínio Altavis com vidros fixos de grande extensão e estrutura de alumínio sob medida.',
    mainImage: '/gallery/casas/ms-altavis/ms-altavis-1.webp',
    obrasCount: 3,
    obras: [
      { name: 'Fachada de Vidro Fixo Panorâmico', desc: 'Iluminação natural abundante em pé-direito duplo.' },
      { name: 'Portas Deslizantes com Trilho Embutido', desc: 'Nivelamento perfeito entre sala e área de lazer.' },
      { name: 'Maxim-ar de Alta Estanqueidade', desc: 'Fechos e braços reforçados em aço inoxidável.' },
    ],
    photos: Array.from({ length: 15 }, (_, i) => `/gallery/casas/ms-altavis/ms-altavis-${i + 1}.webp`),
  },
  {
    id: 'casa-rm-altavis',
    name: 'Obra Santana de Parnaíba',
    location: 'Santana de Parnaíba / SP',
    description: 'Projeto residencial executado em Santana de Parnaíba com caixilharia preta, persianas automatizadas e acabamento técnico impecável.',
    mainImage: '/gallery/casas/rm-altavis/rm-altavis-1.webp',
    obrasCount: 3,
    obras: [
      { name: 'Portas de Correr 6 Folhas', desc: 'Recolhimento inteligente para grandes vãos de passagem.' },
      { name: 'Janelas Integradas com Automação', desc: 'Acionamento motorizado com recolhimento das persianas.' },
      { name: 'Guarda-corpos Envidraçados', desc: 'Máxima transparência e segurança para a sacada.' },
    ],
    photos: Array.from({ length: 14 }, (_, i) => `/gallery/casas/rm-altavis/rm-altavis-${i + 1}.webp`),
  },
  {
    id: 'casa-vq-alphaville',
    name: 'Obra Alphaville (VQ)',
    location: 'Alphaville · Barueri / SP',
    description: 'Arquitetura contemporânea com panos de vidro fixo, esquadrias pretas de alto padrão e portas pivotantes de grande escala.',
    mainImage: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp',
    obrasCount: 3,
    obras: [
      { name: 'Porta Pivotante Monumental', desc: 'Eixo estrutural com rolamento de alta capacidade.' },
      { name: 'Panos de Vidro Panorâmicos', desc: 'Conexão visual contínua entre ambiente e paisagem.' },
      { name: 'Caixilhos Minimalistas Black Frame', desc: 'Perfis de alumínio com pintura eletrostática fosca.' },
    ],
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/casas/vq-alphaville/vq-alphaville-${i + 1}.webp`),
  },
];

export const mosaicPhotos = [
  {
    src: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp',
    title: 'Caixilharia Minimalista & Glazing',
    category: 'Barueri / SP',
    className: 'col-span-2 row-span-2',
  },
  {
    src: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp',
    title: 'Pele de Vidro Panorâmica',
    category: 'Alphaville (KW)',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp',
    title: 'Vãos Nivelados ao Piso',
    category: 'Barueri (LC)',
    className: 'col-span-1 row-span-2',
  },
  {
    src: '/gallery/casas/ms-altavis/ms-altavis-1.webp',
    title: 'Panos de Vidro Fixo Panorâmicos',
    category: 'Altavis / SP',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/gallery/casas/rm-altavis/rm-altavis-1.webp',
    title: 'Portas Deslizantes de 6 Folhas',
    category: 'Santana de Parnaíba',
    className: 'col-span-2 row-span-1',
  },
  {
    src: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp',
    title: 'Porta Pivotante Monumental',
    category: 'Alphaville (VQ)',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/janelas_integradas.png',
    title: 'Janelas Integradas Motorizadas',
    category: 'Tecnologia Uniclass',
    className: 'col-span-1 row-span-1',
  },
  {
    src: '/projeto-principal.png',
    title: 'Engenharia de Esquadrias Sob Medida',
    category: 'Produção Própria',
    className: 'col-span-2 row-span-1',
  },
];

export function Projects() {
  const [selectedHouse, setSelectedHouse] = useState<HouseProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [mosaicIndex, setMosaicIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50/50" id="projects">
      <div className="max-w-7xl mx-auto px-6 mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent font-bold mb-2">
            Portfólio de Residências
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-primary font-display">
            Obras em <strong className="font-bold text-[#55c5d0]">Destaque</strong>
          </h2>
          <p className="text-gray-500 font-light mt-3 text-sm max-w-xl leading-relaxed">
            Estes são apenas alguns de nossos projetos residenciais de alto padrão executados com esquadrias de alumínio sob medida.
          </p>
          <div className="w-16 h-1 bg-accent mt-4"></div>
        </div>

        <button
          onClick={() => setSelectedCategory('projetos')}
          className="hidden md:inline-flex items-center gap-2 border-b border-[#55c5d0] pb-1 text-[#55c5d0] hover:text-accent hover:border-accent font-bold text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer"
        >
          Ver Galeria Completa de Obras →
        </button>
      </div>

      {/* Houses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {housesData.map((house, index) => (
          <motion.div
            key={house.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group bg-white border border-gray-200/70 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            {/* Image */}
            <div
              className="relative h-64 overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedHouse(house);
                setActivePhotoIndex(0);
              }}
            >
              <img
                src={house.mainImage}
                alt={house.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-xl font-medium tracking-wide text-white font-display">
                  {house.name}
                </h3>
              </div>
            </div>

            {/* Obras list inside this House */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-5">
                  {house.description}
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[11px] font-semibold text-[#55c5d0] uppercase tracking-wider mb-3">
                    Destaques da Caixilharia:
                  </p>
                  <ul className="space-y-2.5">
                    {house.obras.map((obra, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="font-semibold text-gray-800">{obra.name}: </strong>
                          <span className="text-gray-500 font-light">{obra.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => {
                  setSelectedHouse(house);
                  setActivePhotoIndex(0);
                }}
                className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-[#55c5d0] text-gray-700 hover:text-white border border-gray-200 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer group/btn"
              >
                Ver Detalhes do Projeto
                <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <button
          onClick={() => setSelectedCategory('projetos')}
          className="inline-block border-b border-[#55c5d0] pb-1 text-[#55c5d0] hover:text-accent hover:border-accent text-xs uppercase tracking-widest font-bold transition-colors duration-300"
        >
          Ver Galeria Completa de Obras →
        </button>
      </div>

      {/* Interactive Photo Mosaic Gallery */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-accent font-bold mb-2">
            Mosaico de Detalhes
          </p>
          <h3 className="text-3xl md:text-4xl font-light text-primary font-display">
            Galeria Interativa de <strong className="font-bold text-[#55c5d0]">Projetos & Esquadrias</strong>
          </h3>
          <p className="text-gray-500 font-light mt-2 text-sm max-w-xl mx-auto leading-relaxed">
            Clique em qualquer imagem do mosaico para abrir em tela cheia e explorar os detalhes técnicos da caixilharia Uniclass.
          </p>
          <div className="w-12 h-1 bg-[#55c5d0] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {mosaicPhotos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setMosaicIndex(idx)}
              className={`relative group overflow-hidden rounded-sm cursor-pointer shadow-md border border-gray-200/60 ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#55c5d0] mb-1">
                  {item.category}
                </span>
                <p className="text-sm font-semibold leading-tight text-white font-display">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for Mosaic */}
      <AnimatePresence>
        {mosaicIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          >
            <button
              onClick={() => setMosaicIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-accent text-white transition-colors cursor-pointer z-50"
            >
              <HiX className="text-2xl" />
            </button>

            <button
              onClick={() =>
                setMosaicIndex((mosaicIndex - 1 + mosaicPhotos.length) % mosaicPhotos.length)
              }
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-accent text-white transition-colors cursor-pointer z-50"
            >
              <HiChevronLeft className="text-3xl" />
            </button>

            <button
              onClick={() => setMosaicIndex((mosaicIndex + 1) % mosaicPhotos.length)}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-accent text-white transition-colors cursor-pointer z-50"
            >
              <HiChevronRight className="text-3xl" />
            </button>

            <div className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center">
              <img
                src={mosaicPhotos[mosaicIndex].src}
                alt={mosaicPhotos[mosaicIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
              />
              <div className="mt-4 text-center text-white space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[#55c5d0]">
                  {mosaicPhotos[mosaicIndex].category}
                </span>
                <h4 className="text-xl font-medium font-display">
                  {mosaicPhotos[mosaicIndex].title}
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* House Modal View */}
      <AnimatePresence>
        {selectedHouse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <div className="bg-white w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden my-auto border border-gray-200 max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="bg-[#55c5d0] text-white p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                    {selectedHouse.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedHouse(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-accent text-white transition-colors cursor-pointer"
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-accent text-white transition-colors cursor-pointer"
                    >
                      <HiChevronLeft className="text-2xl" />
                    </button>
                    <button
                      onClick={() =>
                        setActivePhotoIndex((activePhotoIndex + 1) % selectedHouse.photos.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-accent text-white transition-colors cursor-pointer"
                    >
                      <HiChevronRight className="text-2xl" />
                    </button>
                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] px-3 py-1 uppercase font-bold tracking-widest">
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
                          activePhotoIndex === i ? 'border-accent scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={photo} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Button Only */}
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
                    className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-accent/90 transition-all shadow-md rounded-sm"
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
