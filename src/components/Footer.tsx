import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 text-sm text-gray-500 font-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-4">
          <img 
            src="/logo.png" 
            alt="Uniclass Logo" 
            className="h-24 md:h-32 object-contain mb-6 transition-all duration-300"
          />

          <p className="max-w-sm mb-6 leading-relaxed text-gray-600">
            Esquadrias de alumínio de alto padrão para projetos que exigem excelência, design e alta performance.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://www.instagram.com/uniclassesquadrias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#55c5d0] hover:text-white hover:border-[#55c5d0] transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/uniclassesquadrias/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#55c5d0] hover:text-white hover:border-[#55c5d0] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h3 className="font-bold text-[#55c5d0] mb-4 uppercase tracking-wider text-xs">Contato</h3>
          <p className="mb-2 text-gray-700 leading-relaxed font-normal">
            R. Norberto, 139 - Vila Jovina<br />
            Cotia - SP, 06705-170
          </p>
          <p className="mb-3 text-gray-600">contato@uniclassesquadrias.com.br</p>
          <a
            href="https://wa.me/5511972362554"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-2 font-bold text-[#55c5d0] hover:text-accent text-base transition-colors"
          >
            (11) 97236-2554
          </a>
        </div>

        {/* Horário de Funcionamento */}
        <div className="md:col-span-3">
          <h3 className="font-bold text-[#55c5d0] mb-4 uppercase tracking-wider text-xs">Horário de Funcionamento</h3>
          <ul className="space-y-1.5 text-xs text-gray-600 font-normal">
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>Segunda a Quinta:</span>
              <span className="font-semibold text-gray-800">07:00 – 17:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>Sexta-feira:</span>
              <span className="font-semibold text-gray-800">07:00 – 16:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>Sábado:</span>
              <span className="text-gray-400">Fechado</span>
            </li>
            <li className="flex justify-between">
              <span>Domingo:</span>
              <span className="text-gray-400">Fechado</span>
            </li>
          </ul>
        </div>

        {/* Info Column & CREA */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-[#55c5d0] mb-4 uppercase tracking-wider text-xs">Registro Técnico</h3>
          <p className="mb-1 text-xs text-gray-500">CNPJ: 30.752.817/0001-87</p>
          <p className="mb-4 font-bold tracking-tighter text-[#55c5d0] text-xs">UNICLASS ESQUADRIAS</p>
          
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
            <img src="/crea-sp.png" alt="CREA-SP Logo" className="h-10 object-contain" />
            <div>
              <p className="text-[11px] font-bold text-[#55c5d0] uppercase">Empresa Registrada</p>
              <p className="text-[10px] text-gray-400">CREA-SP Nº 30.752.817/0001-87</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p className="hover:text-primary transition-colors cursor-default">
          DESENVOLVIDO POR <span className="font-bold text-[#55c5d0]">UEBI STUDIO</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Uniclass. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
