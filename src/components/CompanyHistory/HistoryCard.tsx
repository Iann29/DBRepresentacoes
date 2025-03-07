import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'unframer';
import { TimelineEvent } from './types';

interface HistoryCardProps {
  event: TimelineEvent;
  index: number;
  totalEvents: number;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ event, index, totalEvents }) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
  
  // Ajustar parâmetros para mobile
  const isInView = useInView(cardRef, { 
    once: false, 
    amount: isMobile ? 0.3 : 0.5,
    margin: isMobile ? "-5% 0px -5% 0px" : "-10% 0px -10% 0px"
  });
  
  return (
    <div className={`min-h-[90vh] md:min-h-screen flex items-center justify-center ${index === 0 ? 'pt-16 md:pt-0' : ''}`}>
      <div ref={cardRef} className="w-full h-[90vh] md:h-screen">
        <motion.div 
          className="sticky top-0 h-[90vh] md:h-screen flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Ano destacado - adaptado para mobile */}
              <div className="w-full md:w-1/3 bg-[#db0500] text-white p-6 sm:p-8 md:p-10 flex items-center justify-center">
                <h3 className="text-5xl sm:text-6xl md:text-8xl font-bold">{event.year}</h3>
              </div>
              
              {/* Conteúdo - adaptado para mobile */}
              <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{event.title}</h4>
                  <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-fit">
                    {index + 1}/{totalEvents}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-gray-600">{event.description}</p>
              </div>
            </div>
            
            {/* Indicador de progresso na parte inferior */}
            <div className="w-full h-1 bg-gray-100">
              <motion.div 
                className="h-full bg-[#db0500]"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
            
            {/* Indicador de navegação em dispositivos móveis */}
            {isMobile && (
              <div className="p-3 bg-gray-50 flex justify-center items-center">
                <div className="flex space-x-1">
                  {[...Array(Math.min(5, totalEvents))].map((_, i) => {
                    const showDot = 
                      (index < 2 && i < 5) || 
                      (index >= totalEvents - 2 && i >= Math.max(0, totalEvents - 5)) ||
                      (i >= Math.max(0, index - 2) && i <= Math.min(totalEvents - 1, index + 2));
                    
                    return showDot ? (
                      <div 
                        key={i} 
                        className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#db0500]' : 'bg-gray-300'}`}
                      />
                    ) : i === Math.min(5, totalEvents) - 1 || i === 0 ? (
                      <div key={i} className="h-2 w-2 rounded-full bg-gray-200" />
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HistoryCard;