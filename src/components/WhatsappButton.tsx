import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function WhatsappButton() {
  const phoneNumber = '5511972362554'; // Uniclass number
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as esquadrias Uniclass.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors duration-300 group cursor-pointer border border-white/20"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3.5 py-1.5 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg hidden sm:block">
        Fale conosco agora
      </span>
    </motion.a>
  );
}
