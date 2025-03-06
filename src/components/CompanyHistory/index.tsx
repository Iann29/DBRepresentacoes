import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useHeader } from '../../contexts/HeaderContext';
import { TimelineEvent } from './types';
import TimelineHeader from './TimelineHeader';
import FounderImage from './FounderImage';
import TimelineEventComponent from './TimelineEvent';
import TimelineControls from './TimelineControls';
import YearIndicator from './YearIndicator';
import ExitButton from './ExitButton';
import RestartButton from './RestartButton';
import { useScrollHijacking } from './useScrollHijacking';

const CompanyHistory: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [userExited, setUserExited] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setHeaderVisible } = useHeader();

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
      description: "Expansão das operações para toda a região de Tapejara e cidades vizinhas, consolidando parcerias com fabricantes locais."
    },
    {
      year: 2002,
      title: "Formação da Equipe",
      description: "Contratação dos primeiros membros da equipe, ampliando a capacidade de atendimento e cobertura de mercado."
    },
    {
      year: 2007,
      title: "Novas Parcerias",
      description: "Estabelecimento de parcerias estratégicas com grandes fabricantes nacionais, aumentando significativamente o portfólio de produtos."
    },
    {
      year: 2012,
      title: "Modernização",
      description: "Investimento em sistemas de gestão e tecnologia, modernizando processos internos e atendimento ao cliente."
    },
    {
      year: 2015,
      title: "Expansão de Mercado",
      description: "Penetração em novos segmentos de mercado, incluindo energia renovável e automação industrial."
    },
    {
      year: 2020,
      title: "Adaptação Digital",
      description: "Transformação digital acelerada pela pandemia, implementando ferramentas de vendas e atendimento remoto."
    },
    {
      year: 2025,
      title: "30 Anos de Excelência",
      description: "Celebração de 30 anos de atuação no mercado, com reconhecimento como uma das principais representações comerciais do setor."
    }
  ];

  // Navegar para o evento seguinte ou anterior
  const navigateToEvent = (direction: 'next' | 'prev') => {
    if (direction === 'next' && activeIndex < timelineEvents.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (direction === 'prev' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Navegar para um evento específico
  const navigateToIndex = (index: number) => {
    if (index >= 0 && index < timelineEvents.length) {
      setActiveIndex(index);
    }
  };

  // Detectar visibilidade da seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setHeaderVisible(false); // Esconde o header quando o componente estiver visível
        } else {
          setIsVisible(false);
          setHeaderVisible(true); // Mostra o header quando o componente não estiver visível
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      setHeaderVisible(true); // Garante que o header será mostrado quando o componente for desmontado
    };
  }, [setHeaderVisible]);

  // Configuração do hook de scroll hijacking
  const { isHijacking, setIsHijacking } = useScrollHijacking({
    enabled: isVisible && !userExited,
    containerRef: sectionRef,
    onNext: () => navigateToEvent('next'),
    onPrev: () => navigateToEvent('prev'),
    isFirstItem: activeIndex === 0,
    isLastItem: activeIndex === timelineEvents.length - 1
  });

  // Função para sair do scroll hijacking
  const exitHijacking = () => {
    setIsHijacking(false);
    setUserExited(true);
    // Rolar para o início da seção
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função para reiniciar o scroll hijacking
  const restartHijacking = () => {
    setUserExited(false);
    setActiveIndex(0); // Voltar para o primeiro evento
    // Centralizar a seção na tela
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const top = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
      window.scrollTo({ top, behavior: 'smooth' });
      
      // Pequeno delay para garantir que o scroll termine antes de ativar o hijacking
      setTimeout(() => {
        setIsHijacking(true);
      }, 500);
    }
  };

  // Suporte para navegação com teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        navigateToEvent('next');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        navigateToEvent('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, activeIndex]);

  const currentEvent = timelineEvents[activeIndex];

  return (
    <div 
      ref={sectionRef} 
      className={`relative py-24 bg-white min-h-[800px] flex flex-col items-center justify-center overflow-hidden ${
        isHijacking ? 'timeline-hijacked' : ''
      }`}
      id="historia"
      data-hijacking={isHijacking ? 'active' : 'inactive'}
    >
      {/* Header */}
      <TimelineHeader isHijacking={isHijacking} />
      
      {/* Botão de saída - mostrado apenas quando o hijacking está ativo */}
      <AnimatePresence>
        {isHijacking && (
          <ExitButton onClick={exitHijacking} />
        )}
      </AnimatePresence>
      
      {/* Botão de reinício - mostrado apenas quando o hijacking está inativo e o usuário saiu explicitamente */}
      <AnimatePresence>
        {!isHijacking && userExited && isVisible && (
          <RestartButton onClick={restartHijacking} />
        )}
      </AnimatePresence>
      
      {/* Timeline */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Foto do fundador */}
        <AnimatePresence mode="wait">
          {activeIndex === 0 && <FounderImage isHijacking={isHijacking} />}
        </AnimatePresence>
        
        {/* Linha vertical da timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
        
        {/* Eventos da timeline */}
        <div className="relative py-12 h-screen">
          <div className="absolute top-1/3 left-0 right-0 flex items-center justify-center">
            {/* Indicador de ano - posicionado em relação à div de eventos */}
            {isVisible && activeIndex !== 0 && (
              <YearIndicator year={currentEvent.year} />
            )}
            
            <AnimatePresence mode="wait">
              <TimelineEventComponent key={currentEvent.year} event={currentEvent} />
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Controles de navegação */}
      {isVisible && (
        <TimelineControls 
          activeIndex={activeIndex}
          events={timelineEvents}
          onNavigate={navigateToEvent}
          onSelectIndex={navigateToIndex}
        />
      )}
    </div>
  );
};

export default CompanyHistory;