import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CompanyPresentation from './components/CompanyPresentation';
import Differentials from './components/Differentials';
import Divider from './components/Divider';
import TeamPresentation from './components/TeamPresentation';
import RepresentedCompanies from './components/RepresentedCompanies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { HeaderProvider } from './contexts/HeaderContext';
import { LenisProvider } from './contexts/LenisContext';
import { useSmoothScroll } from './components/ui/SmoothScroll';
import '../framer/styles.css';
import HistoryFramerComponent from '../framer/history';

function AppContent() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollTo } = useSmoothScroll();

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
    scrollTo(0, { duration: 1.5 });
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
          <HistoryFramerComponent style={{ width: '100%' }} />
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

function App() {
  return (
    <LenisProvider options={{
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    }}>
      <AppContent />
    </LenisProvider>
  );
}

export default App;