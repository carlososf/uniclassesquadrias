import { motion } from 'framer-motion';
import { useState } from 'react';
import { CategoryPage } from './CategoryPage';

const collections = [
  {
    id: 'portas',
    title: 'Portas Pivotantes e Correr',
    description: 'Elegância em grande escala e grandes vãos.',
    image: '/porta-pivotante.webp',
  },
  {
    id: 'janelas',
    title: 'Janelas de Canto e Integradas',
    description: 'Minimalismo funcional e máxima iluminação.',
    image: '/janela-canto.webp',
  },
  {
    id: 'vidros',
    title: 'Vidros Fixos e Fachadas',
    description: 'Transparência absoluta e estrutura limpa.',
    image: '/faixada-vidro.webp',
  },
  {
    id: 'camarao',
    title: 'Sistemas Camarão e Basculantes',
    description: 'Abertura total e versatilidade de espaço.',
    image: '/janela-camarao.webp',
  },
];

export function Collections() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative" id="collections">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-primary mb-4 font-display">As Coleções</h2>
        <div className="w-16 h-1 bg-accent"></div>
        <p className="text-gray-500 font-light mt-3 text-sm">
          Clique em qualquer coleção para visualizar a galeria exclusiva com fotos de projetos executados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-12 max-w-7xl mx-auto">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            onClick={() => setSelectedCategory(collection.id)}
            className="group relative h-[400px] md:h-[500px] overflow-hidden bg-gray-200 cursor-pointer block rounded-sm shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <motion.img
              src={collection.image}
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-3xl font-light text-white mb-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0 font-display">
                {collection.title}
              </h3>
              <p className="text-gray-200 font-light mb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-sm">
                {collection.description}
              </p>
              <div className="inline-flex items-center space-x-2 text-white uppercase text-xs tracking-widest font-semibold bg-white/10 backdrop-blur-md px-5 py-3 border border-white/20 hover:bg-accent hover:border-accent transition-all duration-300 w-fit">
                <span>Explorar Coleção</span>
                <span className="text-base">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CategoryPage
        categoryId={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}
