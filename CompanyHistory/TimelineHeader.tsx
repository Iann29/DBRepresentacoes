import React from 'react';

interface TimelineHeaderProps {
  isHijacking?: boolean;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ isHijacking = false }) => {
  return (
    <div 
      className={`sticky top-0 bg-white z-20 timeline-header ${isHijacking ? 'hijacking-active' : 'hijacking-inactive'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-1 text-gray-900">
          Nossa <span className="text-[#db0500]">História</span>
        </h2>
        <p className={`text-gray-600 max-w-3xl mx-auto ${isHijacking ? '' : 'text-sm'}`}>
          Conheça a trajetória de Deoclecio Piffer e a evolução da DB Representações desde 1994.
        </p>
        <div className={`flex justify-center ${isHijacking ? 'mt-3' : 'mt-1'}`}>
          <div className="w-24 h-1 bg-[#db0500]"></div>
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;