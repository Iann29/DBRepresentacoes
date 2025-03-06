import React, { useEffect, useRef } from 'react';
import { motion } from 'unframer';
import { useLenis } from '../../contexts/LenisContext';
import { useHeader } from '../../contexts/HeaderContext';
import { TimelineEvent } from './types';
import HistoryCard from './HistoryCard';

// Eventos da linha do tempo da empresa
const timelineEvents: TimelineEvent[] = [
  {
    year: 1994,
    title: "Início da Jornada",
    description: "Deoclecio Piffer inicia sua carreira como vendedor externo CLT, dando os primeiros passos no setor comercial."
  },
  {
    year: 1995,
    title: "Autonomia Profissional",
    description: "Deoclecio se torna vendedor autônomo preposto, ganhando mais liberdade para desenvolver seu trabalho comercial."
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

// Componente principal
const CompanyHistory: React.FC = () => {
  const { lenis } = useLenis();
  const { setHeaderVisible } = useHeader();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Gerenciar a visibilidade do header diretamente com o Lenis
  useEffect(() => {
    if (!lenis) return;
    
    // Configurações originais para restaurar depois
    const originalLerp = lenis.options.lerp;
    
    // Função para ocultar o header quando estamos na seção de história
    const onScrollChange = ({ scroll, limit, velocity, direction, progress }: any) => {
      if (!sectionRef.current) return;
      
      // Obter a posição da seção
      const section = sectionRef.current;
      const sectionTop = section.offsetTop - 100; // Um pouco antes para suavizar
      const sectionBottom = section.offsetTop + section.offsetHeight;
      
      // Verificar se o scroll está dentro da seção
      if (scroll >= sectionTop && scroll <= sectionBottom) {
        // Estamos na seção de história - ocultar header e suavizar scroll
        lenis.options.lerp = 0.05;
        setHeaderVisible(false);
      } else {
        // Estamos fora da seção - mostrar header e restaurar scroll normal
        lenis.options.lerp = originalLerp;
        setHeaderVisible(true);
      }
    };
    
    // Registrar callback no Lenis
    lenis.on('scroll', onScrollChange);
    
    // Verificar posição inicial
    if (lenis.scroll) {
      onScrollChange({
        scroll: lenis.scroll,
        limit: lenis.limit,
        velocity: 0,
        direction: 0,
        progress: lenis.scroll / lenis.limit
      });
    }
    
    return () => {
      // Limpar listener e restaurar configurações
      lenis.off('scroll', onScrollChange);
      lenis.options.lerp = originalLerp;
      setHeaderVisible(true);
    };
  }, [lenis, setHeaderVisible]);

  return (
    <section 
      id="historia" 
      ref={sectionRef}
      className="bg-gray-50"
    >
      {/* Título fixo no topo */}
      <div className="sticky top-0 left-0 w-full py-16 bg-gray-50 z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Nossa História</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma jornada de crescimento e excelência na representação comercial.
          </p>
        </div>
      </div>
      
      {/* Cards de eventos */}
      <div className="relative">
        {timelineEvents.map((event, index) => (
          <HistoryCard 
            key={event.year}
            event={event}
            index={index}
            totalEvents={timelineEvents.length}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyHistory;
