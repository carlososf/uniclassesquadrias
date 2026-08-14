import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiArrowLeft, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export interface CategoryInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  photos: string[];
}

export const categoryData: Record<string, CategoryInfo> = {
  portas: {
    id: 'portas',
    title: 'Portas Pivotantes e Correr',
    subtitle: 'Grandes vãos, elegância e fluidez espacial',
    description:
      'Desenvolvidas para projetos que exigem imponência e integração visual perfeita entre ambientes internos e externos. Nossas portas de alumínio contam com roldanas de alta resistência, trilhos embutidos e fechaduras de alta segurança com acabamento impecável.',
    features: [
      'Pintura eletrostática premium e anodização',
      'Vedação acústica e térmica de alta eficiência',
      'Trilhos e percursos de rolamento ultra suaves',
      'Sistemas pivotantes com eixo embutido reforçado',
    ],
    photos: Array.from({ length: 14 }, (_, i) => `/gallery/portas/portas-${i + 1}.webp`),
  },
  janelas: {
    id: 'janelas',
    title: 'Janelas de Canto e Integradas',
    subtitle: 'Minimalismo funcional, automação e ventilação',
    description:
      'Soluções inteligentes que combinam luz natural, vedação hermética e design contemporâneo. Disponíveis nos modelos de canto sem coluna central, persianas integradas motorizadas e sistemas maxim-ar com braços de aço inox.',
    features: [
      'Persianas integradas com recolhimento motorizado',
      'Janelas de canto com junção invisível em esquadria',
      'Braços e fechos de aço inoxidável',
      'Resistência superior a intempéries e ventos fortes',
    ],
    photos: Array.from({ length: 16 }, (_, i) => `/gallery/janelas/janelas-${i + 1}.webp`),
  },
  vidros: {
    id: 'vidros',
    title: 'Vidros Fixos e Fachadas Panorâmicas',
    subtitle: 'Transparência contínua e estrutura limpa',
    description:
      'A máxima expressão da arquitetura moderna. Caixilhos de alumínio delgados projetados para emoldurar a paisagem com total segurança estrutural e estanqueidade contra água e vento.',
    features: [
      'Estruturas preparadas para vidros laminados e temperados',
      'Gaxetas de EPDM de alta durabilidade',
      'Perfis de alumínio extrudado de liga especial',
      'Desenho arquitetônico minimalista sob medida',
    ],
    photos: Array.from({ length: 15 }, (_, i) => `/gallery/vidros/vidros-${i + 1}.webp`),
  },
  camarao: {
    id: 'camarao',
    title: 'Sistemas Camarão e Basculantes',
    subtitle: 'Abertura 100% total e versatilidade de espaço',
    description:
      'Ideais para áreas de lazer, varandas gourmet e divisões internas flexíveis. Permitem o recolhimento sanfonado completo das folhas para um vão totalmente livre.',
    features: [
      'Recolhimento articulado suave em trilho guia',
      'Aproveitamento máximo da área de passagem',
      'Travamento multiponto e vedações de precisão',
      'Acabamentos personalizados combinando com o projeto',
    ],
    photos: Array.from({ length: 16 }, (_, i) => `/gallery/janelas/janelas-${i + 1}.webp`),
  },
  projetos: {
    id: 'projetos',
    title: 'Obras Residenciais Executadas',
    subtitle: 'Divisão por casas de alto padrão e suas respectivas obras de esquadria',
    description:
      'Coleção reunida com todas as obras residenciais, frentes de casas e esquadrias sob medida executadas pela Uniclass Esquadrias. Fotos reais sem repetição mostrando a excelência da produção própria e instalação.',
    features: [
      'Divisão organizada por casas de alto padrão e suas obras',
      'Execução fiel ao projeto arquitetônico original',
      'Acompanhamento técnico desde o gabarito à instalação',
      'Garantia e conformidade técnica CREA-SP',
    ],
    photos: [
      ...Array.from({ length: 9 }, (_, i) => `/gallery/casas/ca-alpha11/ca-alpha11-${i + 1}.webp`),
      ...Array.from({ length: 12 }, (_, i) => `/gallery/casas/kw-alphaville/kw-alphaville-${i + 1}.webp`),
      ...Array.from({ length: 11 }, (_, i) => `/gallery/casas/lc-alphaville/lc-alphaville-${i + 1}.webp`),
      ...Array.from({ length: 15 }, (_, i) => `/gallery/casas/ms-altavis/ms-altavis-${i + 1}.webp`),
      ...Array.from({ length: 14 }, (_, i) => `/gallery/casas/rm-altavis/rm-altavis-${i + 1}.webp`),
      ...Array.from({ length: 10 }, (_, i) => `/gallery/casas/vq-alphaville/vq-alphaville-${i + 1}.webp`),
    ],
  },
  obras: {
    id: 'obras',
    title: 'Obras Residenciais Executadas',
    subtitle: 'Divisão por casas de alto padrão e suas respectivas obras de esquadria',
    description:
      'Coleção reunida com todas as obras residenciais, frentes de casas e esquadrias sob medida executadas pela Uniclass Esquadrias. Fotos reais sem repetição mostrando a excelência da produção própria e instalação.',
    features: [
      'Divisão organizada por casas de alto padrão e suas obras',
      'Execução fiel ao projeto arquitetônico original',
      'Acompanhamento técnico desde o gabarito à instalação',
      'Garantia e conformidade técnica CREA-SP',
    ],
    photos: [
      ...Array.from({ length: 9 }, (_, i) => `/gallery/casas/ca-alpha11/ca-alpha11-${i + 1}.webp`),
      ...Array.from({ length: 12 }, (_, i) => `/gallery/casas/kw-alphaville/kw-alphaville-${i + 1}.webp`),
      ...Array.from({ length: 11 }, (_, i) => `/gallery/casas/lc-alphaville/lc-alphaville-${i + 1}.webp`),
      ...Array.from({ length: 15 }, (_, i) => `/gallery/casas/ms-altavis/ms-altavis-${i + 1}.webp`),
      ...Array.from({ length: 14 }, (_, i) => `/gallery/casas/rm-altavis/rm-altavis-${i + 1}.webp`),
      ...Array.from({ length: 10 }, (_, i) => `/gallery/casas/vq-alphaville/vq-alphaville-${i + 1}.webp`),
    ],
  },
};

interface CategoryPageProps {
  categoryId: string | null;
  onClose: () => void;
}

export function CategoryPage({ categoryId, onClose }: CategoryPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const category = categoryId ? categoryData[categoryId] || categoryData['projetos'] : null;

  useEffect(() => {
    if (categoryId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [categoryId]);

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed inset-0 z-50 bg-white overflow-y-auto font-sans"
      >
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-accent font-medium transition-colors group cursor-pointer"
          >
            <HiArrowLeft className="text-base group-hover:-translate-x-1 transition-transform duration-200" />
            Voltar para o Início
          </button>

          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Uniclass" className="h-10 object-contain" />
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-accent/90 transition-all shadow-sm"
          >
            <FaWhatsapp className="text-sm" />
            Orçamento
          </a>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-50/80 py-16 md:py-24 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3"
            >
              Coleção Especializada · Uniclass
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-primary font-display mb-4"
            >
              {category.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500 font-light max-w-2xl leading-relaxed mb-8"
            >
              {category.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200/80"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#55c5d0] mb-3">
                  Sobre esta Coleção
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#55c5d0] mb-3">
                  Diferenciais Técnicos
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 font-light">
                  {category.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-light text-primary font-display">
              Galeria de Fotos
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-3">
              Clique em qualquer imagem para ampliar em tela cheia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100"
              >
                <img
                  src={photo}
                  alt={`${category.title} foto`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to first photo if missing
                    const t = e.target as HTMLImageElement;
                    t.src = category.photos[0];
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-[10px] font-medium text-white uppercase tracking-[0.2em]">
                    Ver em Alta Definição →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-white py-16 text-center border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-6 space-y-6">
            <h3 className="text-3xl font-light font-display">
              Gostou destas esquadrias para seu projeto?
            </h3>
            <p className="text-sm font-light text-white/75 leading-relaxed">
              Solicite um orçamento sob medida diretamente com nossos especialistas técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-accent/90 transition-all shadow-lg"
              >
                <FaWhatsapp className="text-base" />
                Solicitar Orçamento no WhatsApp
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-white/10 transition-all"
              >
                Voltar à Página Inicial
              </button>
            </div>
          </div>
        </section>

        {/* Lightbox Fullscreen Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-between p-4 md:p-8"
            >
              {/* Top Controls */}
              <div className="w-full max-w-6xl flex justify-between items-center z-10">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  {category.title}
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-3 rounded-full bg-white/20 hover:bg-accent text-white transition-colors cursor-pointer"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              {/* Main Expanded Image */}
              <div className="relative flex items-center justify-center w-full max-w-6xl my-auto h-[75vh]">
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex - 1 + category.photos.length) % category.photos.length
                    )
                  }
                  className="absolute left-2 md:left-6 z-20 p-3.5 rounded-full bg-black/60 hover:bg-accent text-white transition-all shadow-lg cursor-pointer"
                >
                  <HiChevronLeft className="text-3xl" />
                </button>

                <img
                  src={category.photos[selectedImageIndex]}
                  alt={`${category.title} ampliada`}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                />

                <button
                  onClick={() =>
                    setSelectedImageIndex((selectedImageIndex + 1) % category.photos.length)
                  }
                  className="absolute right-2 md:right-6 z-20 p-3.5 rounded-full bg-black/60 hover:bg-accent text-white transition-all shadow-lg cursor-pointer"
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
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-accent/90 transition-all shadow-lg"
                >
                  <FaWhatsapp className="text-base" />
                  Orçar Este Modelo no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
