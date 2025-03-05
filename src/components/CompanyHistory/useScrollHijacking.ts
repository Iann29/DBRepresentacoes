// useScrollHijacking.ts
import { useEffect, useRef, useState } from 'react';

interface ScrollHijackingOptions {
  enabled: boolean;
  containerRef: React.RefObject<HTMLElement>;
  onPrev: () => void;
  onNext: () => void;
  isFirstItem: boolean;
  isLastItem: boolean;
  threshold?: number;
}

export const useScrollHijacking = ({
  enabled,
  containerRef,
  onPrev,
  onNext,
  isFirstItem,
  isLastItem,
  threshold = 0.7
}: ScrollHijackingOptions) => {
  const [isHijacking, setIsHijacking] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTime = useRef(0);
  const lastScrollY = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const isExitingRef = useRef(false);

  // Detectar se o componente está suficientemente centralizado na tela para hijacking
  useEffect(() => {
    if (!enabled) {
      setIsHijacking(false);
      return;
    }

    const checkVisibility = () => {
      if (!containerRef.current) return false;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calcular quanto do componente está visível como porcentagem da altura da viewport
      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
      const visiblePercentage = visibleHeight / viewportHeight;
      
      // Verificar se o componente está centralizado
      const isCentered = 
        rect.top <= viewportHeight * 0.3 && 
        rect.bottom >= viewportHeight * 0.7;
      
      // Adicionamos uma variável para rastrear a direção do scroll original
      const isScrollingUp = scrollDirection === 'up';
      
      // Ativar o hijacking quando estiver centralizado e tiver visibilidade suficiente
      // Mas apenas se não estivermos tentando sair do componente
      if (isCentered && visiblePercentage >= threshold && !isHijacking && !isExitingRef.current) {
        setIsHijacking(true);
        
        // Centralizar o componente na viewport quando ativar o hijacking
        if (containerRef.current) {
          const top = window.scrollY + rect.top - (viewportHeight - rect.height) / 2;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      } 
      // Desativar quando não estiver mais centralizado ou visível o suficiente
      else if ((!isCentered || visiblePercentage < threshold * 0.8) && isHijacking) {
        setIsHijacking(false);
        // Quando desativamos o hijacking, resetamos a flag de saída
        isExitingRef.current = false;
      }
    };

    // Detectar a direção do scroll
    const handleGlobalScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
      
      // Quando o usuário está scrollando ativamente, verificar a visibilidade
      checkVisibility();
    };

    window.addEventListener('scroll', handleGlobalScroll, { passive: true });
    
    // Verificar também no resize e na montagem inicial
    window.addEventListener('resize', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', handleGlobalScroll);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [enabled, containerRef, threshold, isHijacking]);

  // Manipulador de wheel e touch events
  useEffect(() => {
    if (!isHijacking || !enabled) return;

    const handleWheel = (e: WheelEvent) => {
      // Throttle para evitar disparos muito rápidos - aumentado para uma sensação mais suave
      const now = Date.now();
      if (now - lastScrollTime.current < 250 || isScrolling) {
        e.preventDefault();
        return;
      }
      
      lastScrollTime.current = now;
      
      // Verificar se podemos sair do hijacking (no primeiro ou último item)
      if ((isFirstItem && e.deltaY < 0) || (isLastItem && e.deltaY > 0)) {
        // Permitir o scroll normal para sair do componente
        setIsHijacking(false);
        isExitingRef.current = true;
        return;
      }
      
      e.preventDefault();
      setIsScrolling(true);
      
      if (e.deltaY > 0) {
        // Scroll para baixo
        onNext();
      } else {
        // Scroll para cima
        onPrev();
      }
      
      // Desativar o flag de scrolling após uma animação - aumentado para animações mais suaves
      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    // Touch events para suporte mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isHijacking || isScrolling) return;
      
      const touchY = e.touches[0].clientY;
      const diff = touchStartY - touchY;
      
      // Se houver movimento suficiente
      if (Math.abs(diff) > 50) {
        // Verificar se podemos sair do hijacking
        if ((isFirstItem && diff < 0) || (isLastItem && diff > 0)) {
          setIsHijacking(false);
          isExitingRef.current = true;
          return;
        }
        
        e.preventDefault();
        setIsScrolling(true);
        
        if (diff > 0) {
          // Swipe para cima (próximo)
          onNext();
        } else {
          // Swipe para baixo (anterior)
          onPrev();
        }
        
        // Reset touch start para evitar múltiplos disparos
        touchStartY = touchY;
        
        // Desativar scrolling após uma animação
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };
    
    // Evitar que o scroll do documento continue durante o hijacking
    const preventDefault = (e: Event) => {
      if (isHijacking) {
        e.preventDefault();
      }
    };
    
    // Adicionar listeners com passive: false para permitir preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Evitar que o documento role durante o hijacking
    document.body.style.overflow = isHijacking ? 'hidden' : '';
    
    // Adicionar/remover a classe para controlar a sombra
    if (isHijacking) {
      document.body.classList.add('scroll-hijacking-active');
    } else {
      document.body.classList.remove('scroll-hijacking-active');
    }
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = '';
      document.body.classList.remove('scroll-hijacking-active');
    };
  }, [isHijacking, enabled, isFirstItem, isLastItem, onNext, onPrev, isScrolling]);

  // Métodos para controlar externamente o estado de hijacking
  const enableHijacking = () => setIsHijacking(true);
  const disableHijacking = () => setIsHijacking(false);

  return {
    isHijacking,
    scrollDirection,
    enableHijacking,
    disableHijacking
  };
};