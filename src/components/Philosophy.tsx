import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="about" className="py-28 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
                Sobre Nós
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-primary font-display">
                Especialistas em<br />
                <span className="font-bold text-[#007799]">esquadrias para</span><br />
                projetos exigentes.
              </h2>
            </div>

            <div className="space-y-5 text-gray-600 font-light leading-relaxed text-[15px]">
              <p>
                A Uniclass atua com a convicção de que cada detalhe de uma casa importa. Entendemos que por trás de cada projeto há um sonho, uma conquista e é com essa responsabilidade que tratamos cada entrega.
              </p>
              <p>
                Oferecemos esquadrias de alumínio de alto padrão com precisão técnica e compromisso em cada etapa. Porque acreditamos que, quando bem feito, cada detalhe tem o poder de transformar uma casa em lar.
              </p>
            </div>

            {/* CREA-SP Badge */}
            <div className="flex items-center gap-5 pt-4">
              <div className="flex items-center gap-4 border border-gray-200 px-6 py-4 bg-gray-50/80 rounded-sm group hover:border-accent transition-all duration-300 shadow-sm">
                <img
                  src="/crea-sp.png"
                  alt="CREA-SP Registro Profissional"
                  className="h-12 object-contain transition-all duration-300"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#007799]">Empresa Registrada CREA-SP</p>
                  <p className="text-xs text-gray-500 font-light mt-0.5">Responsabilidade técnica e engenharia certificada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Expanded Factory Photo & Compact Briefing Text Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            {/* Expanded Factory Image */}
            <div className="relative h-96 md:h-[440px] overflow-hidden shadow-2xl rounded-sm group bg-gray-900 border border-gray-100">
              <img
                src="/fabrica-uniclass.webp"
                alt="Fábrica Uniclass Esquadrias"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <span className="text-[10px] uppercase tracking-[0.35em] text-accent font-semibold mb-1">
                  Produção Própria & Engenharia
                </span>
                <p className="text-white font-medium text-lg md:text-xl leading-snug">
                  Fabrições sob medida com precisão milimétrica
                </p>
              </div>
            </div>

            {/* Compact Briefing Text Highlight Box */}
            <div className="bg-primary p-6 md:p-7 text-white shadow-xl border-l-4 border-accent relative">
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Nossa Filosofia & Compromisso
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-white/90">
                "A Uniclass atua com a convicção de que <strong className="font-medium text-white">cada detalhe de uma casa importa</strong>. Entendemos que por trás de cada projeto há um sonho, uma conquista e é com essa responsabilidade que tratamos cada entrega. Oferecemos esquadrias de alumínio de alto padrão com precisão técnica. <span className="text-accent font-medium italic">Porque acreditamos que cada detalhe tem o poder de transformar uma casa em lar.</span>"
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-40 -z-10 translate-x-[30%] translate-y-[-30%]" />
    </section>
  );
}
