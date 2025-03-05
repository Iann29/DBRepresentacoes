import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from './types';

interface TimelineEventProps {
  event: TimelineEvent;
}

const TimelineEventComponent: React.FC<TimelineEventProps> = ({ event }) => {
  const is1994 = event.year === 1994;

  return (
    <motion.div
      className={`absolute w-full max-w-6xl mx-auto flex-row text-left ${is1994 ? '-mt-24 md:-mt-32' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: 0
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex' }}
    >
      {/* Conteúdo do evento - sempre à direita */}
      <div className="w-5/12 px-6 ml-auto">
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
  );
};

export default TimelineEventComponent;