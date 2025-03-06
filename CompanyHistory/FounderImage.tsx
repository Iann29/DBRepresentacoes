import React from 'react';
import { motion } from 'framer-motion';

interface FounderImageProps {
  isHijacking?: boolean;
}

const FounderImage: React.FC<FounderImageProps> = ({ isHijacking = false }) => {
  return (
    <motion.div
      className={`flex justify-center ${isHijacking ? 'mb-0 mt-0' : 'mb-8'} relative z-20 transition-all duration-500`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      <div className="relative">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img 
            src="/equipe/deoclecioboff.webp" 
            alt="Deoclecio Boff - Fundador da DB Representações" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#db0500] flex items-center justify-center text-white font-bold shadow-lg border-2 border-white">
          <span className="text-sm md:text-base">1994</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderImage;