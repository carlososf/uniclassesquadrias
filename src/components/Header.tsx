import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFilePdf } from 'react-icons/fa';

const navLinks = [
  { name: 'Sobre Nós', href: '#about' },
  { name: 'Obras', href: '#projects' },
  { name: 'Orçamento', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12',
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2.5'
          : 'bg-primary py-3.5'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & CREA Badge */}
        <div className="flex items-center gap-5">
          <a href="#" className="block hover:opacity-85 transition-opacity">
            <img
              src="/logo.png"
              alt="Uniclass Logo"
              className={cn(
                'transition-all duration-500 object-contain scale-125 md:scale-140 origin-left py-1',
                isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
              )}
            />
          </a>
          <div className="hidden sm:flex items-center gap-2.5 pl-6 border-l border-white/15">
            <div className="bg-white/95 px-2.5 py-1 rounded shadow-sm flex items-center gap-2 border border-white/20">
              <img
                src="/crea-sp.png"
                alt="CREA-SP Registro Técnico"
                className={cn(
                  'object-contain transition-all duration-500',
                  isScrolled ? 'h-6' : 'h-7'
                )}
              />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-white/80 leading-tight hidden lg:inline-block font-medium">
              Empresa<br />Registrada CREA-SP
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-[#55c5d0] hover:text-white font-semibold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#55c5d0] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/portifolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="portifolio.pdf"
            className="flex items-center gap-2 border border-[#55c5d0]/50 text-[#55c5d0] px-3.5 py-2 text-xs uppercase tracking-[0.15em] hover:bg-[#55c5d0] hover:text-white transition-all duration-300 rounded-sm font-semibold"
            title="Abrir Portfólio Uniclass PDF"
          >
            <FaFilePdf className="text-red-400 text-sm" />
            Portfólio PDF
          </a>
          <a
            href="#contact"
            className="border border-[#55c5d0] text-[#55c5d0] px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-[#55c5d0] hover:text-white transition-all duration-300 rounded-sm font-semibold"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary border-t border-white/10 shadow-2xl p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-[#55c5d0] hover:text-white block border-b border-white/10 pb-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/portifolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="portifolio.pdf"
              className="flex items-center justify-center gap-2 border border-[#55c5d0]/50 text-[#55c5d0] px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#55c5d0] hover:text-white transition-all duration-300 rounded-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaFilePdf className="text-red-400 text-base" />
              Ver Portfólio PDF
            </a>
            <a
              href="#contact"
              className="block text-center border border-[#55c5d0] text-[#55c5d0] px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#55c5d0] hover:text-white transition-all duration-300 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
