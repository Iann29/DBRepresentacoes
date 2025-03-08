import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'unframer';
import { useLenis } from '../../contexts/LenisContext';
import { useHeader } from '../../contexts/HeaderContext';
import { TimelineEvent } from './types';
import HistoryCard from './HistoryCard';
import FounderCard from './FounderCard';

// Eventos da linha do tempo da empresa
const timelineEvents: TimelineEvent[] = [
  {
    year: 1997,
    title: "Constituição",
    description: "Constituída a DB Representações, na Cidade de Passo Fundo."
  },
  {
    year: 2002,
    title: "Expansão da Equipe",
    description: "É contratado o Primeiro Funcionário CLT."
  },
  {
    year: 2003,
    title: "Nova Sede",
    description: "A Sede da DB é transferida para Tapejara RS."
  },
  {
    year: 2012,
    title: "Modernização Tecnológica",
    description: "Contratado o Primeiro Sistema ERP, começando a Gestão com tecnologia, modernizando os processos de Atendimento ao nosso Cliente."
  },
  {
    year: 2015,
    title: "Ampliação de Mercado",
    description: "Seguimos evoluindo, buscando sempre melhoria no atendimento, para assim ampliar área de atuação, bem como outras nichos de mercado, objetivando sempre levar os produtos demandados pelo nosso mercado, e prospectando clientes e consumidores aos produtos de nossas Parcerias."
  },
  {
    year: 2020,
    title: "Adaptação Digital",
    description: "Seguimos evoluindo, nos adaptando ao então chamado \"NOVO NORMAL\"."
  },
  {
    year: 2025,
    title: "Evolução Digital",
    description: "Após acúmulo de experiências e aprendizado no decorrer destes mais de 30 anos de percurso Comercial, Chegou a hora de mais evolução, o lançamento de nosso Site."
  }
];

// Componente principal
const CompanyHistory: React.FC = () => {
  const { lenis } = useLenis();
  const { setHeaderVisible } = useHeader();
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar dispositivo mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Gerenciar a visibilidade do header diretamente com o Lenis
  useEffect(() => {
    if (!lenis) return;
    
    // Configurações originais para restaurar depois
    const originalLerp = lenis.options.lerp;
    
    // Função para ocultar o header quando estamos na seção de história
    const onScrollChange = ({ scroll }: any) => {
      if (!sectionRef.current) return;
      
      // Obter a posição da seção
      const section = sectionRef.current;
      const sectionTop = section.offsetTop - 100; // Um pouco antes para suavizar
      const sectionBottom = section.offsetTop + section.offsetHeight;
      
      // Verificar se o scroll está dentro da seção
      if (scroll >= sectionTop && scroll <= sectionBottom) {
        // Estamos na seção de história - ocultar header e suavizar scroll
        lenis.options.lerp = isMobile ? 0.04 : 0.05; // Mais rápido em dispositivos móveis
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
        scroll: lenis.scroll
      });
    }
    
    return () => {
      // Limpar listener e restaurar configurações
      lenis.off('scroll', onScrollChange);
      lenis.options.lerp = originalLerp;
      setHeaderVisible(true);
    };
  }, [lenis, setHeaderVisible, isMobile]);

  return (
    <section 
      id="historia" 
      ref={sectionRef}
      className="bg-[#950300]"
    >
      {/* Introdução com o card do fundador */}
      <FounderCard />
      
      {/* Título fixo no topo para a timeline */}
      <div className="sticky top-0 left-0 w-full py-10 md:py-16 bg-gray-50 z-10 mt-[30vh] md:mt-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-3 md:mb-4">30 Anos de História</h2>
            <div className="w-16 md:w-24 h-1 bg-[#db0500] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0">
              Uma jornada de crescimento e excelência na representação comercial.
            </p>
          </motion.div>
          
          {/* Indicador de scroll - apenas visível em desktop ou tablets */}
          <motion.div 
            className="mt-6 md:mt-8 animate-bounce w-8 md:w-10 h-8 md:h-10 mx-auto hidden sm:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: false }}
          >
            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
          
          {/* Instruções para mobile */}
          <motion.div 
            className="mt-4 text-xs text-gray-500 flex items-center justify-center sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Deslize para navegar pela história</span>
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
        <div className="min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-[#950300]">
          <motion.div 
            className="text-center px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6">O Futuro</h3>
            <p className="text-lg sm:text-xl text-white/70 max-w-md sm:max-w-xl mx-auto">
              Continuamos escrevendo nossa história, sempre com o compromisso de excelência que marcou nossos primeiros 30 anos.
            </p>
            <motion.div 
              className="mt-8 md:mt-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.6 }}
            >
              <div className="bg-[#db0500] w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </motion.div>
            
            {/* Link de retorno ao topo para mobile */}
            {isMobile && (
              <motion.div
                className="mt-8 text-white/60 flex justify-center items-center text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <a 
                  href="#historia" 
                  className="flex items-center hover:text-white/90 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Voltar ao início
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;