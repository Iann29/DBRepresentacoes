import React from 'react';
import { useHeader } from '../contexts/HeaderContext';
import { SmoothScrollLink } from './ui/SmoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { isHeaderVisible } = useHeader();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isHeaderVisible) {
    return null;
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-black/20 backdrop-blur-sm py-4'
      } ${
        isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center group">
          <div className="relative">
            <img 
              src="/logodb.webp" 
              alt="DB Representações Logo" 
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute -inset-1 rounded-full bg-[#db0500]/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </div>
          <div className="ml-2 relative overflow-hidden">
            <span className={`text-xl font-bold inline-block relative z-10 transition-transform duration-300 group-hover:translate-y-[-100%] ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              DB Representações
            </span>
            <span className="text-xl font-bold text-[#db0500] absolute top-0 left-2 z-10 transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
              DB Representações
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Início', 'Diferenciais', 'Equipe', 'Empresas', 'História', 'Contato'].map((item) => (
            <SmoothScrollLink 
              key={item} 
              to={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#db0500] relative group px-2 py-1`}
              offset={-100}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#db0500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </SmoothScrollLink>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none relative z-50`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block w-6 h-0.5 ${isMenuOpen ? 'bg-gray-800' : isScrolled ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
            <span className={`absolute block w-6 h-0.5 ${isMenuOpen ? 'bg-gray-800' : isScrolled ? 'bg-gray-800' : 'bg-white'} top-3 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block w-6 h-0.5 ${isMenuOpen ? 'bg-gray-800' : isScrolled ? 'bg-gray-800' : 'bg-white'} transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="container mx-auto px-4 py-20 bg-white shadow-lg rounded-lg">
          {/* Logo no menu mobile */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <img 
                src="/logodb.webp" 
                alt="DB Representações Logo" 
                className="h-16 w-auto mb-2" 
              />
              <span className="text-xl font-bold text-[#db0500]">
                DB Representações
              </span>
            </div>
          </div>
          
          <nav className="flex flex-col space-y-4 items-center">
            {['Início', 'Diferenciais', 'Equipe', 'Empresas', 'História', 'Contato'].map((item) => (
              <SmoothScrollLink 
                key={item} 
                to={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-xl font-medium text-gray-800 hover:text-[#db0500] transition-colors relative group bg-gray-50 w-full text-center py-4 px-6 rounded-lg shadow-sm"
                offset={-100}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#db0500] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </SmoothScrollLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;