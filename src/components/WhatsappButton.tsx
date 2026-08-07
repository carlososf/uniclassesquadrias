import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function WhatsappButton() {
  const phoneNumber = '5511999999999'; // Placeholder number
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
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Fale conosco agora
      </span>
    </motion.a>
  );
}
