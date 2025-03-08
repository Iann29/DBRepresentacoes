import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { SmoothScrollLink } from './ui/SmoothScroll';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            if (target === contactRef.current) {
              target.classList.add('opacity-100', 'translate-y-0');
            } else if (target === linksRef.current) {
              setTimeout(() => {
                target.classList.add('opacity-100', 'translate-y-0');
              }, 200);
            } else if (target === socialRef.current) {
              setTimeout(() => {
                target.classList.add('opacity-100', 'translate-y-0');
              }, 400);
            } else if (target === copyrightRef.current) {
              setTimeout(() => {
                target.classList.add('opacity-100', 'translate-y-0');
              }, 600);
            }
            
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      if (contactRef.current) observer.observe(contactRef.current);
      if (linksRef.current) observer.observe(linksRef.current);
      if (socialRef.current) observer.observe(socialRef.current);
      if (copyrightRef.current) observer.observe(copyrightRef.current);
    }

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (linksRef.current) observer.unobserve(linksRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
      if (copyrightRef.current) observer.unobserve(copyrightRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contato */}
          <div 
            ref={contactRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-[#db0500] mr-3"></span>
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#db0500] mt-1 mr-3 flex-shrink-0" />
                <span>Rua Álvaro Domingues, 129<br />Bairro Nazaré - Tapejara/RS</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#db0500] mr-3 flex-shrink-0" />
                <a href="tel:+551140028922" className="hover:text-[#db0500] transition-colors duration-300">
                  (11) 4002-8922
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#db0500] mr-3 flex-shrink-0" />
                <a href="mailto:contato@dbrepresentacoes.com.br" className="hover:text-[#db0500] transition-colors duration-300">
                  contato@dbrepresentacoes.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-[#db0500] mr-3 flex-shrink-0" />
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div 
            ref={linksRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-[#db0500] mr-3"></span>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <SmoothScrollLink to="#inicio" className="hover:text-[#db0500] transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                  Início
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#sobre" className="hover:text-[#db0500] transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                  Sobre Nós
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#diferenciais" className="hover:text-[#db0500] transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                  Diferenciais
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#equipe" className="hover:text-[#db0500] transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                  Nossa Equipe
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink to="#contato" className="hover:text-[#db0500] transition-colors duration-300 flex items-center">
                  <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                  Contato
                </SmoothScrollLink>
              </li>
            </ul>
          </div>

          {/* Áreas de Atuação */}
          <div 
            ref={socialRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-[#db0500] mr-3"></span>
              Áreas de Atuação
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                Materiais Elétricos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                Automação Industrial
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                Iluminação
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                Energia Solar
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#db0500] mr-3 rounded-full"></span>
                Materiais de Construção
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div 
            className="opacity-0 translate-y-10 transition-all duration-700"
            ref={copyrightRef}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-[#db0500] mr-3"></span>
              Newsletter
            </h3>
            <p className="mb-4 text-gray-400">
              Inscreva-se para receber novidades e atualizações.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#db0500] focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-[#db0500] hover:bg-[#a00300] text-white font-medium rounded-lg px-4 py-2 transition-colors duration-300"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#db0500] transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#db0500] transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#db0500] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p> {new Date().getFullYear()} DB Representação Comercial. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com <span className="text-[#db0500]">♥</span> por <a href="#" className="text-[#db0500] hover:underline">Amage</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;