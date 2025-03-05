import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { TimelineEvent } from './types';

interface TimelineControlsProps {
  activeIndex: number;
  events: TimelineEvent[];
  onNavigate: (direction: 'next' | 'prev') => void;
  onSelectIndex: (index: number) => void;
}

const TimelineControls: React.FC<TimelineControlsProps> = ({ 
  activeIndex, 
  events, 
  onNavigate, 
  onSelectIndex 
}) => {
  return (
    <>
      {/* Botões de navegação */}
      <div className="fixed bottom-16 left-0 right-0 flex justify-center space-x-4 z-30">
        <button
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            activeIndex > 0 
              ? 'bg-[#db0500] text-white opacity-80 hover:opacity-100' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition-all duration-300 ease-in-out focus:outline-none shadow-lg`}
          onClick={() => onNavigate('prev')}
          disabled={activeIndex === 0}
          aria-label="Evento anterior"
        >
          <ChevronUp size={24} />
        </button>
        <button
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            activeIndex < events.length - 1 
              ? 'bg-[#db0500] text-white opacity-80 hover:opacity-100' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition-all duration-300 ease-in-out focus:outline-none shadow-lg`}
          onClick={() => onNavigate('next')}
          disabled={activeIndex === events.length - 1}
          aria-label="Próximo evento"
        >
          <ChevronDown size={24} />
        </button>
      </div>
      
      {/* Indicadores de navegação lateral */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-30">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelectIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-[#db0500] scale-125 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para o evento ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default TimelineControls;