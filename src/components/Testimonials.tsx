import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Diana Godoi',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Gostaríamos de agradecer pelo excelente atendimento, pela dedicação em cada detalhe e pela qualidade dos produtos e do serviço prestado. As duas janelas e a porta foram instaladas com muita precisão, resultando em um acabamento impecável. Ficamos extremamente satisfeitas com o resultado final e com todo o cuidado durante o processo.',
    avatar: 'DG',
  },
  {
    name: 'Felipe David',
    role: 'Cliente Google',
    stars: 5,
    date: 'Avaliação no Google',
    text: 'Quero expressar minha sincera gratidão à equipe da Uniclass pelo excelente trabalho realizado na fabricação e instalação das esquadrias em minha casa. O resultado final foi absolutamente perfeito e fez toda a diferença no visual da residência. Os produtos apresentam um padrão de qualidade excepcional, evidenciando o comprometimento da empresa com a excelência.',
    avatar: 'FD',
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
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-primary" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-6"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-3">
              Avaliações Reais de Clientes
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white font-display">
              O que nossos clientes<br />
              <span className="font-bold text-blue-300">dizem sobre nós.</span>
            </h2>
          </div>

          {/* Google Rating Badge */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/15 px-6 py-4 backdrop-blur-md shadow-lg">
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 mb-1" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-[9px] font-semibold text-white/60 uppercase tracking-widest">Google</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">5.0</span>
                <StarRating count={5} />
              </div>
              <p className="text-xs text-white/70 mt-0.5 font-light">
                (33 avaliações no Google)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className={`relative p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                active === i
                  ? 'bg-white border-white text-primary shadow-2xl scale-[1.02]'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {/* Google icon */}
              <div className="absolute top-5 right-5 opacity-40">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <div>
                <StarRating count={t.stars} />
                <p className={`mt-4 text-xs md:text-sm font-light leading-relaxed italic ${active === i ? 'text-gray-600' : 'text-white/80'}`}>
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-current/10">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${active === i ? 'bg-accent text-white' : 'bg-white/20 text-white'}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className={`text-xs font-bold ${active === i ? 'text-[#007799]' : 'text-white'}`}>{t.name}</p>
                  <p className={`text-[10px] mt-0.5 ${active === i ? 'text-gray-400' : 'text-white/40'}`}>
                    {t.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                active === i ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
