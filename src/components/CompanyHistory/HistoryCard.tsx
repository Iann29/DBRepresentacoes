import React, { useRef } from 'react';
import { motion, useInView } from 'unframer';
import { TimelineEvent } from './types';

interface HistoryCardProps {
  event: TimelineEvent;
  index: number;
  totalEvents: number;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ event, index, totalEvents }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { 
    once: false, 
    amount: 0.5,
    margin: "-10% 0px -10% 0px" // Margem negativa para começar/acabar a visualização antes de entrar/sair completamente
  });
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div ref={cardRef} className="w-full h-screen">
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Ano destacado */}
              <div className="md:w-1/3 bg-[#db0500] text-white p-8 md:p-10 flex items-center justify-center">
                <h3 className="text-6xl md:text-8xl font-bold">{event.year}</h3>
              </div>
              
              {/* Conteúdo */}
              <div className="md:w-2/3 p-8 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800">{event.title}</h4>
                  <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {index + 1}/{totalEvents}
                  </span>
                </div>
                <p className="text-lg text-gray-600">{event.description}</p>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HistoryCard;
