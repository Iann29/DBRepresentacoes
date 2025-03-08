import React from 'react';
import { useLenis } from '../../contexts/LenisContext';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

// Componente para links de navegação suave
export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
  className = '',
  offset = 0,
  onClick
}) => {
  const { lenis } = useLenis();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Verificar se o link é para a seção de história ou início (com ou sem acento)
    const isHistoryLink = to === '#história' || to === '#historia';
    const isHomeLink = to === '#início' || to === '#inicio';
    
    // Para o link "Início", simplesmente rolar para o topo
    if (isHomeLink) {
      if (lenis) {
        lenis.scrollTo(0, { 
          duration: 1.2,
          immediate: false
        });
      }
    } else {
      const targetElement = document.querySelector(to);
      if (targetElement && lenis) {
        if (isHistoryLink) {
          // Para a seção de história, ajustamos para garantir que entre na seção
          lenis.scrollTo(targetElement as HTMLElement, { 
            offset: offset - 100, // Um valor maior para garantir entrada na seção
            duration: 1.5, // Duração mais longa para movimento mais suave
            immediate: false // Garante animação completa
          });
        } else {
          // Comportamento normal para outros links
          lenis.scrollTo(targetElement as HTMLElement, { offset });
        }
      } else if (isHistoryLink) {
        // Fallback para o caso do seletor não encontrar com acento
        const fallbackTarget = document.querySelector('#historia');
        if (fallbackTarget && lenis) {
          lenis.scrollTo(fallbackTarget as HTMLElement, {
            offset: offset - 100,
            duration: 1.5,
            immediate: false
          });
        }
      }
    }
    
    // Executar callback adicional, se fornecido
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

// Hook para controlar scroll programaticamente
export const useSmoothScroll = () => {
  const { lenis } = useLenis();

  const scrollTo = (
    target: string | HTMLElement | number,
    options?: { offset?: number; duration?: number; immediate?: boolean }
  ) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    }
  };

  return { scrollTo };
};
