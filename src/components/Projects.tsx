import { motion } from 'framer-motion';
import { useState } from 'react';
import { CategoryPage } from './CategoryPage';

const projects = [
  {
    id: 1,
    summary: 'Esquadrias de grande vão e fachada integrada sob medida com vedação termoacústica de alta performance.',
    image: '/projeto-granja-viana.webp',
    size: 'tall',
  },
  {
    id: 2,
    summary: 'Pele de vidro com controle solar, caixilhos pretos e vedação técnica para grandes vãos residenciais.',
    image: '/projeto-alphaville.webp',
    size: 'wide',
  },
  {
    id: 3,
    summary: 'Projeto arquitetônico com portas de correr integradas de 4 folhas e acabamento minimalista em alumínio.',
    image: '/projeto-luciano-santa-anna.webp',
    size: 'square',
  },
  {
    id: 4,
    summary: 'Solução completa em esquadrias black frame, com portas deslizantes e trilho embutido no piso.',
    image: '/porta-correr-large.webp',
    size: 'tall',
  },
  {
    id: 5,
    summary: 'Vidro fixo panorâmico de grande dimensão integrado à área social, oferecendo máxima luz natural.',
    image: '/vidro-fixo.webp',
    size: 'wide',
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-4 font-display">Projetos Executados</h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>
        <button
          onClick={() => setSelectedCategory('projetos')}
          className="hidden md:inline-flex items-center gap-2 border-b border-primary pb-1 text-primary hover:text-accent hover:border-accent font-medium text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer"
        >
          Ver Galeria Completa de Projetos →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 auto-rows-[300px] grid-flow-dense">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedCategory('projetos')}
            className={`relative group overflow-hidden bg-gray-100 cursor-pointer shadow-sm rounded-sm ${
              project.size === 'tall' ? 'row-span-2' : project.size === 'wide' ? 'col-span-1 md:col-span-2' : 'col-span-1'
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt="Projeto executado Uniclass"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Explorar Projetos Executados
              </span>
              <p className="text-white text-sm md:text-base font-light leading-relaxed">
                {project.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <button
          onClick={() => setSelectedCategory('projetos')}
          className="inline-block border-b border-primary pb-1 text-primary hover:text-accent hover:border-accent text-xs uppercase tracking-widest font-semibold transition-colors duration-300"
        >
          Ver Galeria de Projetos Executados →
        </button>
      </div>

      <CategoryPage
        categoryId={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
}
