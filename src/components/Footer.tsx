import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 text-sm text-gray-500 font-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <img 
            src="/logo.png" 
            alt="Uniclass Logo" 
            className="h-16 object-contain mb-6 grayscale hover:grayscale-0 transition-all duration-300"
          />

          <p className="max-w-xs mb-6 leading-relaxed">
            Esquadrias de alumínio de alto padrão para projetos que exigem excelência, design e performance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-[#007799] mb-4 uppercase tracking-wider text-xs">Contato</h3>
          <p className="mb-2 italic">Vila Jovina, Cotia - SP</p>
          <p className="mb-2">contato@uniclassesquadrias.com.br</p>
          <p className="mb-2 font-bold text-[#007799]">(11) 99999-9999</p>
        </div>

        {/* Info Column & CREA */}
        <div>
          <h3 className="font-bold text-[#007799] mb-4 uppercase tracking-wider text-xs">Informações</h3>
          <p className="mb-2">CNPJ: 30.752.817/0001-87</p>
          <p className="mb-4 font-bold tracking-tighter text-[#007799]">UNICLASS ESQUADRIAS</p>
          
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <img src="/crea-sp.png" alt="CREA-SP Logo" className="h-9 object-contain" />
            <div>
              <p className="text-[11px] font-bold text-[#007799] uppercase">Empresa Registrada</p>
              <p className="text-[10px] text-gray-400">CREA-SP Nº 30.752.817/0001-87</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p className="hover:text-primary transition-colors cursor-default">
          DESENVOLVIDO POR <span className="font-bold text-[#007799]">UEBI STUDIO</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Uniclass. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
