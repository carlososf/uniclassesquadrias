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
    name: 'Casa CA',
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
    name: 'Casa KW',
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
    name: 'Casa LC',
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
    name: 'Casa MS',
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
    name: 'Casa RM',
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
    name: 'Casa VQ',
    location: 'Alphaville · Barueri / SP',
    description: 'Arquitetura contemporânea com panos de vidro fixo, esquadrias pretas de alto padrão e portas pivotantes de grande escala.',
    mainImage: '/gallery/casas/vq-alphaville/vq-alphaville-1.webp',
    obrasCount: 3,
    obras: [
      { name: 'Porta Pivotante Monumental', desc: 'Eixo estrutural com rolamento de alta capacidade.' },
      { name: 'Panos de Vidro Panorâmicos', desc: 'Conexão visual contínua entre ambiente e paisagem.' },
      { name: 'Caixilhos Minimalistas Black Frame', desc: 'Perfis de alumínio com pintura eletrostática fosca.' },
    ],
    photos: Array.from({ length: 10 }, (_, i) => `/gallery/casas/vq-alphaville/vq-alphaville-${i + 1}.webp`),
  },
];

export function Projects() {
  const [selectedHouse, setSelectedHouse] = useState<HouseProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('todas');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const filteredHouses = activeFilter === 'todas'
    ? housesData
    : housesData.filter((h) => h.id === activeFilter);

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent font-bold mb-2">
            Portfólio de Residências
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-primary font-display">
            Nossas <strong className="font-bold text-[#007799]">Obras</strong>
          </h2>
          <p className="text-gray-500 font-light mt-2 text-sm max-w-xl">
            Conheça a divisão por casas e as obras de esquadrias em alumínio executadas em cada projeto residencial de alto padrão.
          </p>
          <div className="w-16 h-1 bg-accent mt-4"></div>
        </div>

        <button
          onClick={() => setSelectedCategory('projetos')}
          className="hidden md:inline-flex items-center gap-2 border-b border-[#007799] pb-1 text-[#007799] hover:text-accent hover:border-accent font-bold text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer"
        >
          Ver Galeria Completa de Obras →
        </button>
      </div>

      {/* House Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter('todas')}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
            activeFilter === 'todas'
              ? 'bg-[#007799] text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-primary'
          }`}
        >
          Todas as Casas ({housesData.length})
        </button>
        {housesData.map((house) => (
          <button
            key={house.id}
            onClick={() => setActiveFilter(house.id)}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
              activeFilter === house.id
                ? 'bg-[#007799] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-primary'
            }`}
          >
            {house.name}
          </button>
        ))}
      </div>

      {/* Houses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {filteredHouses.map((house, index) => (
          <motion.div
            key={house.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-gray-50 border border-gray-200/80 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
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
                alt={`Obra ${house.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold block mb-0.5">
                  {house.location}
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  {house.name}
                </h3>
              </div>
            </div>

            {/* Obras list inside this House */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">
                  {house.description}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-[11px] font-bold text-[#007799] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaHome className="text-accent text-sm" />
                    Obras desta Casa:
                  </p>
                  <ul className="space-y-2">
                    {house.obras.map((obra, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <span className="w-4 h-4 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          <HiCheck className="text-xs" />
                        </span>
                        <div>
                          <strong className="font-bold text-[#007799]">{obra.name}: </strong>
                          <span className="text-gray-600 font-light">{obra.desc}</span>
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
                className="w-full flex items-center justify-center gap-2 bg-white border border-[#007799] text-[#007799] py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#007799] hover:text-white transition-all duration-300 shadow-sm cursor-pointer group/btn"
              >
                Explorar Obras desta Casa
                <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <button
          onClick={() => setSelectedCategory('projetos')}
          className="inline-block border-b border-[#007799] pb-1 text-[#007799] hover:text-accent hover:border-accent text-xs uppercase tracking-widest font-bold transition-colors duration-300"
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <div className="bg-white w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden my-auto border border-gray-200 max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="bg-[#007799] text-white p-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                    {selectedHouse.location}
                  </span>
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
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
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

                {/* Details & Obras */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#007799] mb-3">
                      Sobre a Residência
                    </h4>
                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                      {selectedHouse.description}
                    </p>
                    <div className="bg-gray-50 p-4 border-l-4 border-accent">
                      <p className="text-xs text-gray-500 font-light">
                        Projetos executados sob medida pela <strong className="font-bold text-[#007799]">Uniclass Esquadrias</strong> com controle de qualidade e engenharia certificada.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#007799] mb-3">
                      Esquadrias Executadas na Casa ({selectedHouse.obras.length})
                    </h4>
                    <div className="space-y-3">
                      {selectedHouse.obras.map((obra, idx) => (
                        <div key={idx} className="p-3 bg-gray-50 border border-gray-200/80 rounded-sm">
                          <p className="text-xs font-bold text-[#007799] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            {obra.name}
                          </p>
                          <p className="text-xs text-gray-500 font-light mt-1 pl-4">
                            {obra.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 p-6 border border-gray-200">
                  <div>
                    <p className="text-xs font-bold text-[#007799] uppercase tracking-wider">
                      Deseja um projeto semelhante para sua obra?
                    </p>
                    <p className="text-xs text-gray-500 font-light">
                      Fale diretamente com nossa equipe técnica via WhatsApp.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedHouse(null)}
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-accent/90 transition-all shadow-md"
                  >
                    <FaWhatsapp className="text-sm" />
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
