import React from 'react';
import { useLenis } from '../../contexts/LenisContext';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

// Componente para links de navegação suave
export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
  className = '',
  offset = 0,
}) => {
  const { lenis } = useLenis();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(to);
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement, { offset });
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
