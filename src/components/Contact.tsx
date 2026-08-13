import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Olá! Me chamo ${form.firstName} ${form.lastName}.\n` +
      `Cidade: ${form.city}\n` +
      `Telefone: ${form.phone}\n\n` +
      `Projeto: ${form.message}`
    );
    const phone = '5511999999999'; // Substituir pelo número real
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-off-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-4">
            Orçamento Sob Medida
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-5 font-display">
            Pronto para elevar o nível do seu projeto?
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-base">
            Nossa equipe de especialistas está disponível para entender as necessidades do seu projeto e apresentar as melhores soluções em esquadrias de alumínio premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-light text-primary mb-6 font-display border-b border-gray-100 pb-4">
              Vamos conversar sobre seu projeto
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-primary">Redirecionando para o WhatsApp!</h3>
                <p className="text-gray-400 font-light text-sm">Seu orçamento foi preparado. Continue a conversa pelo WhatsApp.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity mt-4"
                >
                  Enviar outro orçamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                      Nome *
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Nome"
                      className="border border-gray-200 px-4 py-3 text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                      Sobrenome *
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Sobrenome"
                      className="border border-gray-200 px-4 py-3 text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Phone + City Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="border border-gray-200 px-4 py-3 text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                      Cidade *
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="border border-gray-200 px-4 py-3 text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Descreva todo o seu projeto com medidas"
                    className="border border-gray-200 px-4 py-3 text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-accent text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-accent/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-accent/20 group"
                >
                  <FaWhatsapp className="text-base" />
                  Enviar Solicitação via WhatsApp
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas.
                </p>
              </form>
            )}
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 bg-white border border-gray-100 hover:border-accent transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-green-50 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-green-500 text-2xl" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#007799] group-hover:text-accent transition-colors">WhatsApp</p>
                <p className="text-sm text-gray-400 font-light mt-0.5">Resposta rápida · Seg–Sáb 8h–18h</p>
              </div>
              <HiArrowRight className="ml-auto text-gray-300 group-hover:text-accent transition-colors" />
            </a>

            {/* Email Direct */}
            <a
              href="mailto:contato@uniclassesquadrias.com.br"
              className="flex items-center gap-5 p-6 bg-white border border-gray-100 hover:border-accent transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-accent text-xl" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#007799] group-hover:text-accent transition-colors">E-mail</p>
                <p className="text-sm text-gray-400 font-light mt-0.5">Para projetos e parcerias</p>
              </div>
              <HiArrowRight className="ml-auto text-gray-300 group-hover:text-accent transition-colors" />
            </a>

            {/* Info Note */}
            <div className="p-6 bg-primary text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Nossa localização</p>
              <p className="text-sm font-light leading-relaxed text-white/80">
                Vila Jovina, Cotia — SP<br />
                Atendemos toda a Grande São Paulo<br />
                e interior do estado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
