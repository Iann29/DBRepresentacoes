import React from 'react';
import { motion } from 'framer-motion';

interface YearIndicatorProps {
  year: number;
}

const YearIndicator: React.FC<YearIndicatorProps> = ({ year }) => {
  return (
    <div className="absolute left-8 sm:left-16 md:left-24 lg:left-32 top-1/2 transform -translate-y-2/4 z-20">
      <motion.div 
        key={year}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        className="text-8xl md:text-9xl font-bold text-[#db0500]/10"
      >
        {year}
      </motion.div>
    </div>
  );
};

export default YearIndicator;