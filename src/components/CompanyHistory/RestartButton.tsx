import React from 'react';
import { motion } from 'framer-motion';

interface RestartButtonProps {
  onClick: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-50 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-300 group hidden md:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      aria-label="Iniciar visualização interativa"
    >
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 relative">
          <div className="absolute w-full h-0.5 bg-[#db0500] top-1/2 left-0 transform -translate-y-1/2"></div>
          <div className="absolute w-0.5 h-full bg-[#db0500] top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <span className="text-xs text-gray-700 mt-1 whitespace-nowrap">Modo interativo</span>
      </div>
    </motion.button>
  );
};

export default RestartButton;
