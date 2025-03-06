import React, { useEffect, useRef } from 'react';
import { motion } from 'unframer';
import { useLenis } from '../../contexts/LenisContext';
import { useHeader } from '../../contexts/HeaderContext';
import { TimelineEvent } from './types';
import HistoryCard from './HistoryCard';
import FounderCard from './FounderCard';

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
      className="bg-gray-900"
    >
      {/* Introdução com o card do fundador - container com altura extra para garantir mais tempo de visibilidade */}
      <div className="relative h-[200vh] overflow-hidden">
        <FounderCard />
      </div>
      
      {/* Título fixo no topo para a timeline */}
      <div className="sticky top-0 left-0 w-full py-16 bg-gray-50 z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">30 Anos de História</h2>
            <div className="w-24 h-1 bg-[#db0500] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma jornada de crescimento e excelência na representação comercial.
            </p>
          </motion.div>
          
          {/* Indicador de scroll */}
          <motion.div 
            className="mt-8 animate-bounce w-10 h-10 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
          >
            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Cards de eventos */}
      <div className="relative bg-gray-50">
        {timelineEvents.map((event, index) => (
          <HistoryCard 
            key={event.year}
            event={event}
            index={index}
            totalEvents={timelineEvents.length}
          />
        ))}
        
        {/* Elemento final da timeline */}
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-900">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">O Futuro</h3>
            <p className="text-xl text-white/70 max-w-xl mx-auto">
              Continuamos escrevendo nossa história, sempre com o compromisso de excelência que marcou nossos primeiros 30 anos.
            </p>
            <motion.div 
              className="mt-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.6 }}
            >
              <div className="bg-[#db0500] w-20 h-20 rounded-full mx-auto flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;