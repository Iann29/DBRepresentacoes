import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  isRightSide?: boolean;
}

const CompanyHistory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isFullyInView, setIsFullyInView] = useState(false);

  // Timeline events - eventos importantes da história da empresa
  const timelineEvents: TimelineEvent[] = [
    {
      year: 1994,
      title: "Início da Jornada",
      description: "Deoclecio Piffer inicia sua carreira como representante comercial, com foco em materiais elétricos e equipamentos industriais."
    },
    {
      year: 1998,
      title: "Expansão Regional",
      description: "Expansão das operações para toda a região de Tapejara e cidades vizinhas, consolidando parcerias com fabricantes locais.",
      isRightSide: true
    },
    {
      year: 2002,
      title: "Formação da Equipe",
      description: "Contratação dos primeiros membros da equipe, ampliando a capacidade de atendimento e cobertura de mercado."
    },
    {
      year: 2007,
      title: "Novas Parcerias",
      description: "Estabelecimento de parcerias estratégicas com grandes fabricantes nacionais, aumentando significativamente o portfólio de produtos.",
      isRightSide: true
    },
    {
      year: 2012,
      title: "Modernização",
      description: "Investimento em sistemas de gestão e tecnologia, modernizando processos internos e atendimento ao cliente."
    },
    {
      year: 2015,
      title: "Expansão de Mercado",
      description: "Penetração em novos segmentos de mercado, incluindo energia renovável e automação industrial.",
      isRightSide: true
    },
    {
      year: 2020,
      title: "Adaptação Digital",
      description: "Transformação digital acelerada pela pandemia, implementando ferramentas de vendas e atendimento remoto."
    },
    {
      year: 2025,
      title: "30 Anos de Excelência",
      description: "Celebração de 30 anos de atuação no mercado, com reconhecimento como uma das principais representações comerciais do setor.",
      isRightSide: true
    }
  ];

  // Configura o IntersectionObserver para detectar quando o componente entra na visualização
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px",
        threshold: 0.3, // Detecta quando 30% do componente está visível
      }
    );
    
    // Observer para detectar quando o componente está completamente na tela
    const fullObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFullyInView(entry.isIntersecting && entry.intersectionRatio >= 0.9);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9, // Precisamos de 90% visível para considerar "totalmente visível"
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
      fullObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        fullObserver.unobserve(currentRef);
      }
    };
  }, []);

  // Manipulador de visibilidade do componente
  useEffect(() => {
    if (isInView) {
      // Mostrar instruções quando entrar na visualização
      setShowInstructions(true);
      
      // Definir um temporizador para esconder as instruções após 5 segundos
      const timer = setTimeout(() => {
        setShowInstructions(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      // Quando sair da visualização, esconder instruções
      setShowInstructions(false);
      
      // Garantir que não temos estado de transição quando sair da visualização
      setIsTransitioning(false);
    }
  }, [isInView]);

  // Handler para manipular o scroll ou cliques nos controles de navegação
  const handleNavigation = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const newIndex = direction === 'next'
      ? Math.min(activeIndex + 1, timelineEvents.length - 1)
      : Math.max(activeIndex - 1, 0);
    
    setActiveIndex(newIndex);
    
    // Impõe um tempo mínimo entre transições para evitar scroll rápido demais
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Manipulador de eventos de roda do mouse, teclado e toque
  useEffect(() => {
    // Só adicionar os event listeners se o componente estiver visível
    if (!isInView) return;
    
    const handleWheel = (e: WheelEvent) => {
      // Se não estiver completamente na visualização ou estiver em transição, não interfira
      if (!isFullyInView || isTransitioning) return;
      
      // Caso esteja no primeiro evento e tente rolar para cima, permitir a rolagem normal
      if (activeIndex === 0 && e.deltaY < 0) {
        return;
      }
      
      // Caso esteja no último evento e tente rolar para baixo, permitir a rolagem normal
      if (activeIndex === timelineEvents.length - 1 && e.deltaY > 0) {
        return;
      }
      
      // Prevenir o comportamento padrão para manter o controle do scroll
      e.preventDefault();
      
      if (e.deltaY > 0) {
        // Rolagem para baixo - próximo evento
        if (activeIndex < timelineEvents.length - 1) {
          handleNavigation('next');
        }
      } else {
        // Rolagem para cima - evento anterior
        if (activeIndex > 0) {
          handleNavigation('prev');
        }
      }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Se não estiver completamente na visualização ou estiver em transição, não interfira
      if (!isFullyInView || isTransitioning) return;
      
      // Tecla para baixo ou seta para a direita - próximo evento
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        // Se estiver no último evento, permitir a rolagem normal
        if (activeIndex === timelineEvents.length - 1) {
          return;
        }
        
        e.preventDefault();
        if (activeIndex < timelineEvents.length - 1) {
          handleNavigation('next');
        }
      }
      
      // Tecla para cima ou seta para a esquerda - evento anterior
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        // Se estiver no primeiro evento, permitir a rolagem normal
        if (activeIndex === 0) {
          return;
        }
        
        e.preventDefault();
        if (activeIndex > 0) {
          handleNavigation('prev');
        }
      }
    };
    
    // Variáveis para detecção de swipe em dispositivos móveis
    let touchStartY = 0;
    let touchEndY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning) return;
      touchEndY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = () => {
      // Se não estiver completamente na visualização ou estiver em transição, não interfira
      if (!isFullyInView || isTransitioning) return;
      
      // Se for um swipe para baixo (início > fim)
      if (touchStartY > touchEndY && touchStartY - touchEndY > 50) {
        // Não permitir saída se não estiver no último evento
        if (activeIndex < timelineEvents.length - 1) {
          handleNavigation('next');
        }
      } 
      // Se for um swipe para cima (início < fim)
      else if (touchStartY < touchEndY && touchEndY - touchStartY > 50) {
        // Não permitir saída se não estiver no primeiro evento
        if (activeIndex > 0) {
          handleNavigation('prev');
        }
      }
    };
    
    // Usando passive: false para permitir preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isInView, isFullyInView, activeIndex, isTransitioning, handleNavigation]);

  return (
    <div 
      ref={containerRef} 
      className="relative py-24 bg-white min-h-[800px] flex flex-col items-center justify-center overflow-hidden"
      id="historia"
    >
      {/* Header fixo no topo */}
      <div className="sticky top-0 pt-20 pb-10 bg-white z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nossa <span className="text-[#db0500]">História</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça a trajetória de Deoclecio Piffer e a evolução da DB Representações desde 1994.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-[#db0500]"></div>
          </div>
        </div>
      </div>
      
      {/* Linha da timeline */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Foto do dono centralizada */}
        <AnimatePresence>
          {activeIndex === 0 && (
            <motion.div
              className="flex justify-center mb-12 relative z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/equipe/dono.jpg" 
                    alt="Fundador da DB Representações" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#db0500] flex items-center justify-center text-white font-bold shadow-lg border-2 border-white">
                  <span className="text-sm md:text-base">1994</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
        
        {/* Eventos da timeline */}
        <div className="relative py-12 min-h-[60vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`absolute w-full max-w-6xl mx-auto ${
                  event.isRightSide 
                    ? 'flex-row-reverse text-left' 
                    : 'flex-row text-right'
                }`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : (index > activeIndex ? 100 : -100)
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: index === activeIndex ? 'flex' : 'none' }}
              >
                {/* Conteúdo do evento */}
                <div className={`w-5/12 px-6 ${event.isRightSide ? 'ml-auto' : 'mr-auto'}`}>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-3xl font-bold text-[#db0500]">{event.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mt-2">{event.title}</h4>
                    <p className="text-gray-600 mt-3">{event.description}</p>
                  </motion.div>
                </div>
                
                {/* Marcador central */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-[#db0500] border-4 border-white shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Controles de navegação */}
      {isInView && (
        <>
          {/* Controles de navegação - botões */}
          <div className="fixed bottom-16 left-0 right-0 flex justify-center space-x-4 z-30">
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activeIndex > 0 
                  ? 'bg-[#db0500] text-white opacity-80 hover:opacity-100' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition-all duration-300 ease-in-out focus:outline-none`}
              onClick={() => activeIndex > 0 && handleNavigation('prev')}
              disabled={activeIndex === 0 || isTransitioning}
              aria-label="Evento anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            <button
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activeIndex < timelineEvents.length - 1 
                  ? 'bg-[#db0500] text-white opacity-80 hover:opacity-100' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition-all duration-300 ease-in-out focus:outline-none`}
              onClick={() => activeIndex < timelineEvents.length - 1 && handleNavigation('next')}
              disabled={activeIndex === timelineEvents.length - 1 || isTransitioning}
              aria-label="Próximo evento"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
          
          {/* Indicadores de progresso */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-30">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#db0500] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  if (!isTransitioning) {
                    setActiveIndex(index);
                  }
                }}
                aria-label={`Ir para o evento ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Contador de anos no canto */}
          <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
            <div className="text-8xl font-bold text-[#db0500]/10">
              {timelineEvents[activeIndex].year}
            </div>
          </div>
        </>
      )}
      
      {/* Instruções para o usuário */}
      <AnimatePresence>
        {isInView && showInstructions && (
          <motion.div 
            className="fixed bottom-32 left-1/2 transform -translate-x-1/2 text-center bg-black/70 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="flex items-center text-sm font-medium">
              Use as setas ou role a página para navegar na linha do tempo
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompanyHistory;
