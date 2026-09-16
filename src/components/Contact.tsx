import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaWhatsapp, FaEnvelope, FaFilePdf, FaPaperclip, FaTrash, FaCheckCircle, FaSpinner, FaMapMarkerAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

export function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    bairro: '',
    message: '',
  });
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileAdd = (files: FileList | null) => {
    if (!files) return;
    const newPdfFiles: File[] = [];
    Array.from(files).forEach((file) => {
      if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
        newPdfFiles.push(file);
      } else {
        alert(`O arquivo "${file.name}" não é um documento PDF válido.`);
      }
    });

    setPdfFiles((prev) => [...prev, ...newPdfFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setPdfFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Verificar limite total de 10MB exigido pelo FormSubmit
    const totalSize = pdfFiles.reduce((acc, f) => acc + f.size, 0);
    if (totalSize > 10 * 1024 * 1024) {
      setErrorMessage(`O tamanho total dos arquivos (${(totalSize / (1024 * 1024)).toFixed(1)}MB) ultrapassa o limite máximo de 10MB por envio. Por favor, remova algum arquivo ou envie diretamente pelo WhatsApp.`);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('_subject', `Novo Orçamento: ${form.firstName} ${form.lastName} - Uniclass Esquadrias`);
      formData.append('_replyto', form.email);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      
      formData.append('Nome Completo', `${form.firstName} ${form.lastName}`);
      formData.append('E-mail do Cliente', form.email);
      formData.append('Telefone / WhatsApp', form.phone);
      formData.append('Cidade', form.city);
      formData.append('Bairro', form.bairro || 'Não informado');
      formData.append('Detalhes do Projeto com Medidas', form.message);

      // FormSubmit reconhece 'attachment' para arquivo único ou 'attachment[]' para múltiplos
      if (pdfFiles.length === 1) {
        formData.append('attachment', pdfFiles[0], pdfFiles[0].name);
      } else if (pdfFiles.length > 1) {
        pdfFiles.forEach((file) => {
          formData.append('attachment[]', file, file.name);
          // Adiciona também com o campo tradicional para compatibilidade
          formData.append('attachment', file, file.name);
        });
      }

      const response = await fetch('https://formsubmit.co/ajax/comercial@uniclassesquadrias.com.br', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Falha ao enviar e-mail.');
      }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setErrorMessage('Não foi possível enviar o e-mail automaticamente. Tente novamente ou envie diretamente pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsappFallback = () => {
    const textMsg =
      `Olá! Me chamo ${form.firstName} ${form.lastName}.\n` +
      `E-mail: ${form.email || 'Não informado'}\n` +
      `Cidade: ${form.city}\n` +
      `Bairro: ${form.bairro || 'Não informado'}\n` +
      `Telefone: ${form.phone}\n\n` +
      `Projeto: ${form.message}` +
      (pdfFiles.length > 0 ? `\n\n(Possuo ${pdfFiles.length} arquivo(s) PDF para anexar)` : '');

    const text = encodeURIComponent(textMsg);
    const phone = '5511972362554';
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      bairro: '',
      message: '',
    });
    setPdfFiles([]);
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section className="py-16 sm:py-24 bg-off-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent mb-3 sm:mb-4">
            Orçamento Sob Medida
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-3 sm:mb-5 font-display">
            Pronto para elevar o nível do seu projeto?
          </h2>
          <p className="text-gray-500 font-light leading-relaxed text-xs sm:text-base">
            Nossa equipe de especialistas está disponível para entender as necessidades do seu projeto e apresentar as melhores soluções em esquadrias de alumínio premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 bg-white p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100 rounded-sm"
          >
            <h3 className="text-xl sm:text-2xl font-light text-primary mb-5 sm:mb-6 font-display border-b border-gray-100 pb-3 sm:pb-4">
              Vamos conversar sobre seu projeto
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-[#55c5d0]/15 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-[#55c5d0] text-2xl sm:text-3xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-primary font-display">Orçamento Enviado por E-mail!</h3>
                <p className="text-gray-500 font-light text-xs sm:text-sm max-w-md leading-relaxed">
                  Agradecemos seu contato, <strong className="font-semibold text-primary">{form.firstName}</strong>. Sua solicitação e arquivos anexados foram entregues no e-mail <span className="text-[#55c5d0] font-medium">comercial@uniclassesquadrias.com.br</span>. Responderemos no e-mail <span className="text-[#55c5d0] font-medium">{form.email}</span> em breve!
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-3 w-full justify-center">
                  <button
                    type="button"
                    onClick={openWhatsappFallback}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <FaWhatsapp className="text-base" />
                    Enviar Cópia via WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs uppercase tracking-widest text-gray-500 hover:text-primary border border-gray-200 px-5 py-3 rounded-sm transition-colors font-semibold"
                  >
                    Enviar Outro Orçamento
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-sm text-xs text-red-700 flex flex-col gap-2">
                    <p>{errorMessage}</p>
                    <button
                      type="button"
                      onClick={openWhatsappFallback}
                      className="inline-flex items-center gap-1.5 text-green-700 font-bold underline hover:text-green-800"
                    >
                      <FaWhatsapp /> Enviar direto pelo WhatsApp
                    </button>
                  </div>
                )}

                {/* Name Row: 2 columns on ALL screen sizes (mobile & desktop) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                      Nome *
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Nome"
                      className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                      Sobrenome *
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Sobrenome"
                      className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 rounded-sm"
                    />
                  </div>
                </div>

                {/* Email + Phone Row: 2 columns on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                      Seu E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seuemail@exemplo.com"
                      className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 rounded-sm"
                    />
                  </div>
                </div>

                {/* City + Bairro Row: 2 columns on ALL screen sizes */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                      Cidade *
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                      Bairro
                    </label>
                    <input
                      type="text"
                      name="bairro"
                      value={form.bairro}
                      onChange={handleChange}
                      placeholder="Seu bairro"
                      className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 rounded-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Descreva todo o seu projeto com medidas"
                    className="border border-gray-200 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-light text-primary placeholder-gray-300 focus:outline-none focus:border-accent transition-colors duration-200 bg-gray-50/50 resize-none rounded-sm"
                  />
                </div>

                {/* Compact PDF Attachment Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 font-medium flex items-center justify-between">
                    <span>Anexar Projetos (PDF)</span>
                    <span className="text-[9px] text-gray-400 font-normal lowercase">(opcional)</span>
                  </label>

                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    multiple
                    ref={fileInputRef}
                    onChange={(e) => handleFileAdd(e.target.files)}
                    className="hidden"
                  />

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleFileAdd(e.dataTransfer.files);
                    }}
                    className="border border-dashed border-gray-300 hover:border-[#55c5d0] bg-gray-50/80 px-3.5 py-2.5 sm:py-3 text-left cursor-pointer transition-colors duration-200 rounded-sm group flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <FaPaperclip className="text-[#55c5d0] text-base shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-gray-600 font-medium truncate">
                        Clique para anexar arquivo <strong className="text-[#55c5d0]">PDF</strong>
                      </span>
                    </div>
                    <span className="text-[10px] text-[#55c5d0] font-semibold uppercase tracking-wider shrink-0 bg-[#55c5d0]/10 px-2 py-0.5 rounded-sm">
                      + Anexar
                    </span>
                  </div>

                  {/* List of attached files */}
                  {pdfFiles.length > 0 && (
                    <div className="mt-1 space-y-1.5">
                      <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                        {pdfFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-gray-50 border border-gray-200 px-2.5 py-1.5 text-xs rounded-sm"
                          >
                            <div className="flex items-center gap-2 overflow-hidden pr-2">
                              <FaFilePdf className="text-red-500 text-xs shrink-0" />
                              <span className="truncate text-gray-700 font-medium text-[11px]">{file.name}</span>
                              <span className="text-[9px] text-gray-400 shrink-0">
                                ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(idx)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              title="Remover arquivo"
                            >
                              <FaTrash className="text-[10px]" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#55c5d0] text-white py-3.5 sm:py-4 px-4 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#55c5d0]/90 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-[#55c5d0]/25 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-base" />
                      <span>Enviando Orçamento...</span>
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="text-base shrink-0" />
                      <span className="text-center">Enviar Cotação por E-mail</span>
                      <HiArrowRight className="text-base shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10px] text-gray-400 text-center sm:text-left pt-1">
                  <span>Enviado direto para <strong>comercial@uniclassesquadrias.com.br</strong></span>
                  <button
                    type="button"
                    onClick={openWhatsappFallback}
                    className="text-green-600 font-semibold hover:underline flex items-center gap-1 shrink-0"
                  >
                    <FaWhatsapp /> Via WhatsApp?
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Side Contact Cards — Standardized Min-Height & Equal Padding */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-3.5 sm:space-y-5"
          >
            {/* Portfolio Button Box */}
            <a
              href="/portifolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Portofilio Uniclass.pdf"
              className="min-h-[72px] flex items-center justify-between p-4 sm:p-5 bg-[#55c5d0] text-white shadow-sm hover:shadow-md transition-all duration-300 group rounded-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <FaFilePdf className="text-white text-lg group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold">Portfólio Uniclass PDF</p>
                  <p className="text-[10px] sm:text-[11px] text-white/90 font-light mt-0.5">Baixe nosso catálogo completo</p>
                </div>
              </div>
              <HiArrowRight className="text-white group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
            </a>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/5511972362554"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[72px] flex items-center justify-between p-4 sm:p-6 bg-white border border-gray-100 hover:border-accent transition-all duration-300 group shadow-sm hover:shadow-md rounded-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-green-50 rounded flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-green-500 text-xl" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#55c5d0] group-hover:text-accent transition-colors">WhatsApp Direct</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">(11) 97236-2554</p>
                </div>
              </div>
              <HiArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0 ml-2" />
            </a>

            {/* Email Direct */}
            <a
              href="mailto:comercial@uniclassesquadrias.com.br"
              className="min-h-[72px] flex items-center justify-between p-4 sm:p-6 bg-white border border-gray-100 hover:border-accent transition-all duration-300 group shadow-sm hover:shadow-md rounded-sm"
            >
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-accent text-lg" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#55c5d0] group-hover:text-accent transition-colors">E-mail Direct</p>
                  <p className="text-xs sm:text-sm text-gray-700 font-light mt-0.5 truncate">comercial@uniclassesquadrias.com.br</p>
                </div>
              </div>
              <HiArrowRight className="text-gray-300 group-hover:text-accent transition-colors shrink-0 ml-2" />
            </a>

            {/* Location Card — Restructured matching the same clean card icon pattern */}
            <div className="min-h-[72px] flex items-center justify-between p-4 sm:p-6 bg-primary text-white shadow-sm rounded-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-accent/20 rounded flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-accent text-lg" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-accent">Nossa Localização & Fábrica</p>
                  <p className="text-xs sm:text-sm font-light text-white/90 mt-0.5 leading-snug">
                    R. Norberto, 139 - Vila Jovina, Cotia - SP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
