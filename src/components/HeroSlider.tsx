import { motion } from 'framer-motion';

const sliderPhotos = [
  {
    title: 'Fachada Glazing Minimalista · Alphaville 11',
    src: '/gallery/casas/ca-alpha11/ca-alpha11-8.webp',
  },
  {
    title: 'Pele de Vidro Panorâmica · KW Alphaville',
    src: '/gallery/casas/kw-alphaville/kw-alphaville-7.webp',
  },
  {
    title: 'Esquadrias Panorâmicas · LC Alphaville',
    src: '/gallery/casas/lc-alphaville/lc-alphaville-1.webp',
  },
  {
    title: 'Vidros Fixos Duplo Pé-Direito · Altavis',
    src: '/gallery/casas/ms-altavis/ms-altavis-1.webp',
  },
  {
    title: 'Portas de Correr 6 Folhas · Santana de Parnaíba',
    src: '/gallery/casas/rm-altavis/rm-altavis-1.webp',
  },
  {
    title: 'Arquitetura Monumental Envidraçada · VQ Alphaville',
    src: '/gallery/casas/vq-alphaville/vq-alphaville-4.webp',
  },
  {
    title: 'Janelas Integradas Automatizadas · Uniclass',
    src: '/janelas_integradas.png',
  },
  {
    title: 'Cobertura & Caixilharia Sob Medida',
    src: '/cobertura_jardins.png',
  },
];

// Duplicate list to achieve seamless infinite loop
const doublePhotos = [...sliderPhotos, ...sliderPhotos];

export function HeroSlider() {
  return (
    <section className="py-12 md:py-16 bg-[#070b10] overflow-hidden relative border-t border-b border-white/10 select-none">
      {/* Side Shadow Gradients for Luxury Fade Effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070b10] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070b10] to-transparent z-20" />

      {/* Header Badge */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/70">
            Destaques de Obras Executadas
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 hidden sm:inline-block">
          Arraste ou observe o fluxo contínuo
        </span>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
          className="flex gap-6 md:gap-8 flex-shrink-0"
        >
          {doublePhotos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[420px] sm:w-[550px] md:w-[700px] h-[260px] sm:h-[340px] md:h-[400px] rounded-lg overflow-hidden group shadow-2xl border border-white/10"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
                  Uniclass Esquadrias
                </span>
                <p className="text-base md:text-lg font-light font-display text-white drop-shadow-md">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
