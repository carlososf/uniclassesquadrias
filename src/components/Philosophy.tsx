import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="about" className="py-24 md:py-36 bg-white relative overflow-hidden text-slate-800">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                <span className="font-bold text-[#55c5d0]">esquadrias para</span><br />
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
            <div className="flex items-center gap-5 pt-2">
              <div className="flex items-center gap-4 border border-gray-200 px-6 py-4 bg-gray-50/80 rounded-sm group hover:border-accent transition-all duration-300 shadow-sm">
                <img
                  src="/crea-sp.png"
                  alt="CREA-SP Registro Profissional"
                  className="h-12 object-contain"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#55c5d0]">Empresa Registrada CREA-SP</p>
                  <p className="text-xs text-gray-500 font-light mt-0.5">Responsabilidade técnica e engenharia certificada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Factory Photo & Philosophy Text Box Side-by-Side on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6"
          >
            {/* Factory Image */}
            <div className="relative h-full min-h-[180px] sm:min-h-[220px] md:h-[440px] overflow-hidden shadow-2xl rounded-sm group bg-gray-900 border border-gray-100">
              <img
                src="/fabrica-uniclass.webp"
                alt="Fábrica Uniclass Esquadrias"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 md:p-8">
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.25em] text-[#55c5d0] font-semibold mb-0.5">
                  Produção Própria
                </span>
                <p className="text-white font-medium text-xs md:text-xl leading-tight">
                  Fabricações sob medida
                </p>
              </div>
            </div>

            {/* Compact Briefing Text Highlight Box */}
            <div className="bg-primary p-4 md:p-7 text-white shadow-xl border-l-4 border-[#55c5d0] relative rounded-sm flex flex-col justify-center">
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-[#55c5d0] font-semibold mb-1.5">
                Nossa Filosofia & Compromisso
              </p>
              <p className="text-[11px] md:text-sm font-light leading-relaxed text-white/90">
                "Atenção, auxílio e coerência entre o prometido e o entregue, é assim que trabalhamos, do início ao fim de cada projeto."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
