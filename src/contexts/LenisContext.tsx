import React, { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';

// Tipagem para o contexto
type LenisContextType = {
  lenis: Lenis | null;
};

// Criação do contexto
const LenisContext = createContext<LenisContextType>({ lenis: null });

// Hook para usar o Lenis em componentes
export const useLenis = () => useContext(LenisContext);

// Propriedades do provider
interface LenisProviderProps {
  children: React.ReactNode;
  options?: {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
  };
}

// Provider do Lenis
export const LenisProvider: React.FC<LenisProviderProps> = ({
  children,
  options = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
  },
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Inicializa o Lenis
    const lenisInstance = new Lenis({
      ...options,
    });

    // Configura o loop de renderização
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    // Scroll para o topo ao carregar a página
    window.scrollTo(0, 0);

    // Cleanup ao desmontar
    return () => {
      lenisInstance.destroy();
    };
  }, [options]);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
};
