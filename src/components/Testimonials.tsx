import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Thelma Luiza Cardoso',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Atendimento super atencioso, visitei a fábrica e conversamos sobre todos os detalhes do projeto! Williams e Aline tem muita experiência no mercado, foi muito produtiva a conversa. Entrega pontual, organizada e produto de qualidade! Atendimento excelente do começo ao fim! Recomendo e já voltei a pedir mais caixilhos para a Uniclass!',
    avatar: 'TC',
  },
  {
    name: 'Felipe Nascimento',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Atendimento e Produto de altíssima qualidade, capricho nos detalhes e ótimo custo benefício!!! A equipe é extremamente profissional e possuem um jeito de lidar com o cliente diferenciado/personalizado, que fazem o negócio ainda mais atrativo. Estão de parabéns!!! Recomendo e desejo muito sucesso, pois empresas assim são raras de se encontrar.',
    avatar: 'FN',
  },
  {
    name: 'Heitor Reis',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Fiz um pergolado enorme com a Uniclass, em esquadria preta e vidro leitoso, difícil de achar quem realiza com excelência no mercado, além da empresa realizar exatamente o q eu queria em detalhes, também consertou o q outro fornecedor instalou de forma inadequada. Ficou tudo impecável, atendimento perfeito do orçamento até o pós venda! Super indico.',
    avatar: 'HR',
  },
  {
    name: 'Marcos Vieira',
    role: 'Campos do Conde - Tamboré',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Prezados, É com enorme satisfação que venho agradecer a toda equipe da Uniclass Esquadrias de Alumínio, que desde o primeiro contato realizado, prestou total atenção tanto comercialmente quanto tecnicamente para o desenvolvimento do meu projeto. Ao corpo técnico de instaladores, que dentro dos prazos previamente acordados, promoveram a montagem dos vidros e esquadrias com técnicas impecáveis e limpeza permanente da obra. Obrigado a todos!',
    avatar: 'MV',
  },
  {
    name: 'Ivanildo Brito',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'A Uniclass está de parabéns, estou muito satisfeito com o produto que comprei. Desde o primeiro contato quando entrei na loja, atendimento, explicação, atenção, negociação, qualidade do produto, visitas técnicas, instalação, foi tudo perfeito! Espero que a Uniclass cresça cada dia mais, com certeza vou indicar pra mais pessoas.',
    avatar: 'IB',
  },
  {
    name: 'Diana Godoi',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Gostaríamos de agradecer pelo excelente atendimento, pela dedicação em cada detalhe e pela qualidade dos produtos e do serviço prestado. As duas janelas e a porta foram instaladas com muita precisão, resultando em um acabamento impecável. Ficamos extremamente satisfeitas com o resultado final.',
    avatar: 'DG',
  },
  {
    name: 'Felipe David',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Quero expressar minha sincera gratidão à equipe da Uniclass pelo excelente trabalho realizado na fabricação e instalação das esquadrias em minha casa. O resultado final foi absolutamente perfeito e fez toda a diferença no visual da residência. Os produtos apresentam um padrão de qualidade excepcional.',
    avatar: 'FD',
  },
  {
    name: 'Marcos',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'São profissionais competentes e comprometidos com a qualidade do serviço. Recomendo essa empresa.',
    avatar: 'M',
  },
  {
    name: 'Adalberto Junior',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Experiência ótima, empresa honesta e colaboradores prestativos, atendimento 100% e flexível do início ao fim. Qualidade ótima dos materiais fornecidos, super indico!',
    avatar: 'AJ',
  },
  {
    name: 'Robson Bernardino',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Desde o primeiro contato fui muito bem atendido. Entrega do serviço dentro do prazo. Realização da instalação com excelência. Muito caprichosos, detalhistas, equipe muito educada, deixam tudo limpo. Super recomendo.',
    avatar: 'RB',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page according to screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto animation interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  // Compute visible testimonials for current page
  const visibleTestimonials = Array.from({ length: itemsPerPage }).map((_, i) => {
    const itemIndex = (currentIndex * itemsPerPage + i) % testimonials.length;
    return testimonials[itemIndex];
  });

  return (
    <section className="py-20 bg-primary relative overflow-hidden text-white" id="testimonials">
      {/* Top-Right Framing Bracket Design */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10 overflow-hidden h-[300px] md:h-[420px]">
        <div className="absolute top-2 md:top-4 right-1.5 md:right-8 w-[65%] md:w-[55%] h-[190px] md:h-[340px] border-t-[3px] md:border-t-[8px] border-r-[3px] md:border-r-[8px] border-[#55c5d0]" />
        <div className="absolute top-4 md:top-8 right-3 md:right-14 w-[55%] md:w-[50%] h-[175px] md:h-[300px] border-t-[3px] md:border-t-[8px] border-r-[3px] md:border-r-[8px] border-white" />
        <div className="absolute top-6 md:top-12 right-4.5 md:right-20 w-[45%] md:w-[45%] h-[160px] md:h-[260px] border-t-[3px] md:border-t-[8px] border-r-[3px] md:border-r-[8px] border-[#55c5d0]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-3">
              Avaliações Reais no Google
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-display leading-tight">
              O que nossos clientes<br />
              <span className="font-bold text-[#55c5d0]">dizem sobre nós.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Google Rating Badge */}
            <div className="flex items-center gap-3.5 bg-white/10 border border-white/15 px-5 py-3.5 backdrop-blur-md shadow-xl rounded-sm">
              <div className="flex flex-col items-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 mb-0.5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[8px] font-semibold text-white/70 uppercase tracking-widest">Google</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">5.0</span>
                  <StarRating count={5} />
                </div>
                <p className="text-[11px] text-white/70 font-light mt-0.5">
                  ({testimonials.length}+ avaliações 5 estrelas)
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Avaliação anterior"
                className="w-11 h-11 bg-white/10 hover:bg-[#55c5d0] text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/15 backdrop-blur-md rounded-sm cursor-pointer active:scale-95"
              >
                <HiChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Próxima avaliação"
                className="w-11 h-11 bg-white/10 hover:bg-[#55c5d0] text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/15 backdrop-blur-md rounded-sm cursor-pointer active:scale-95"
              >
                <HiChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Carousel Area */}
        <div
          className="relative min-h-[320px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className={`grid gap-6 ${
                itemsPerPage === 3
                  ? 'grid-cols-3'
                  : itemsPerPage === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-1'
              }`}
            >
              {visibleTestimonials.map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 p-7 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#55c5d0]/40 transition-all duration-300 rounded-sm group shadow-lg"
                >
                  <FaQuoteLeft className="absolute top-5 right-5 text-white/10 text-3xl group-hover:text-[#55c5d0]/20 transition-colors duration-300" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <StarRating count={t.stars} />
                    </div>
                    <p className="text-xs sm:text-sm font-light text-white/85 leading-relaxed italic line-clamp-6">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#55c5d0] text-primary flex items-center justify-center text-xs font-bold shadow-md flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white group-hover:text-[#55c5d0] transition-colors truncate">
                        {t.name}
                      </p>
                      <p className="text-[10px] text-white/50 truncate font-light mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              aria-label={`Ir para página de depoimentos ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === i
                  ? 'w-8 h-2 bg-[#55c5d0]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
