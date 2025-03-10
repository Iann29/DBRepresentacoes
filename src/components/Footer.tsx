import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { SmoothScrollLink } from './ui/SmoothScroll';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/db.representacaocomercial/' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com' },
  ];

  return (
    <footer ref={footerRef} className="bg-neutral-900 text-white pb-10 mt-16">
      {/* Logo and Content */}
      <div 
        ref={contentRef} 
        className="container mx-auto px-4 pt-10 md:pt-16 pb-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          {/* Logo and description */}
          <div className="lg:w-1/4">
            <div className="mb-5">
              <img 
                src="/logodb.webp" 
                alt="DB Representações" 
                className="h-auto max-w-[120px] md:max-w-[180px]"
              />
            </div>
            <p className="text-gray-400 mb-5 leading-relaxed max-w-md">
              Conectando indústrias e clientes com soluções de alta qualidade. 
              Representação comercial com excelência, comprometimento e profissionalismo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-[#db0500] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold mb-5 relative">
              <span className="absolute left-0 -bottom-2 w-12 h-1 bg-[#db0500]"></span>
              Links Rápidos
            </h3>
            <ul className="space-y-3 mt-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <SmoothScrollLink 
                    to={link.href} 
                    className="hover:text-[#db0500] transition-colors duration-300 flex items-center text-gray-300 hover:translate-x-2 transition-transform duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-[#db0500]" />
                    {link.name}
                  </SmoothScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Setores */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold mb-5 relative">
              <span className="absolute left-0 -bottom-2 w-12 h-1 bg-[#db0500]"></span>
              Setores
            </h3>
            <ul className="space-y-3 mt-6">
              <li>
                <div className="flex items-center text-gray-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 text-[#db0500]" />
                  <span className="group-hover:text-[#db0500] transition-colors duration-300">Construção moveleira</span>
                </div>
              </li>
              <li>
                <div className="flex items-center text-gray-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 text-[#db0500]" />
                  <span className="group-hover:text-[#db0500] transition-colors duration-300">Construção civil</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <h3 className="text-xl font-semibold mb-5 relative">
              <span className="absolute left-0 -bottom-2 w-12 h-1 bg-[#db0500]"></span>
              Contato
            </h3>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-[#db0500] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="https://maps.google.com/?q=Rua+Manoel+Teixeira+450+Tapejara+RS" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-[#db0500] transition-colors duration-300"
                >
                  Rua Manoel Teixeira 450<br />Bairro Nazaré, Tapejara/RS
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-[#db0500] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="https://wa.me/5554996483905" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#db0500] transition-colors duration-300">
                  (54) 99648-3905
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-[#db0500] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:dbatendimento@deboff.com.br" className="text-gray-300 hover:text-[#db0500] transition-colors duration-300 break-all">
                  dbatendimento@deboff.com.br
                </a>
              </li>
              <li className="flex items-center group">
                <Clock className="w-5 h-5 text-[#db0500] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400 text-sm mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} DB Representações Comerciais. Todos os direitos reservados.
            </p>
            <p className="text-center md:text-right text-gray-500 text-sm">
              Desenvolvido com <span className="text-[#db0500]">❤</span> por <a href="https://www.instagram.com/amage.web/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#db0500]">Amage</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;