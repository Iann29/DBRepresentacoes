import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CompanyPresentation from './components/CompanyPresentation';
import Differentials from './components/Differentials';
import Divider from './components/Divider';
import TeamPresentation from './components/TeamPresentation';
import RepresentedCompanies from './components/RepresentedCompanies';
import CompanyHistory from './components/CompanyHistory';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { HeaderProvider } from './contexts/HeaderContext';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <HeaderProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <CompanyPresentation />
          <div className="relative">
            <Differentials />
            <Divider />
            <TeamPresentation />
          </div>
          <RepresentedCompanies />
          <CompanyHistory />
          <ContactForm />
        </main>
        <Footer />
        
        {/* Botão de voltar ao topo */}
        <button
          onClick={scrollToTop}
          className={`fixed right-6 bottom-6 bg-[#db0500] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#a00300] focus:outline-none ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </HeaderProvider>
  );
}

export default App;