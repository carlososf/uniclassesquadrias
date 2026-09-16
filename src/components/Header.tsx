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
            download="Portofilio Uniclass.pdf"
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
          className="md:hidden text-2xl text-white cursor-pointer p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Drawer (Full-Height Flex Layout) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-primary/98 backdrop-blur-xl border-t border-white/10 shadow-2xl p-6 sm:p-8 md:hidden flex flex-col justify-between overflow-y-auto z-40"
          >
            {/* Top & Center Navigation */}
            <div className="flex flex-col space-y-6 pt-2">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium tracking-widest uppercase text-[#55c5d0] hover:text-white flex items-center justify-between border-b border-white/10 pb-3.5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-white/40">→</span>
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#contact"
                  className="w-full text-center bg-[#55c5d0] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#55c5d0]/20 rounded-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar Orçamento
                </a>

                <a
                  href="/portifolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Portofilio Uniclass.pdf"
                  className="w-full flex items-center justify-center gap-2.5 border border-white/20 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm hover:border-[#55c5d0]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaFilePdf className="text-red-400 text-base" />
                  Ver Portfólio PDF
                </a>
              </div>
            </div>

            {/* Bottom Institutional Section (CREA, CNPJ, Location) */}
            <div className="pt-6 border-t border-white/10 mt-auto flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-white px-2 py-1 rounded shadow-sm flex items-center shrink-0">
                  <img src="/crea-sp.png" alt="CREA-SP Logo" className="h-5 object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#55c5d0] uppercase tracking-wider">Empresa Registrada CREA-SP</p>
                  <p className="text-[9px] text-white/50">CNPJ: 30.752.817/0001-87</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-white/60 tracking-wider pt-1">
                <span>(11) 97236-2554</span>
                <span>Cotia - SP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
