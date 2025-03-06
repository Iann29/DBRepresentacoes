import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowDown } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 max-w-3xl mx-auto">
      <div className="inline-block mb-3">
        <div className="flex items-center justify-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
          <Star size={16} className="text-[#db0500]" />
          <span className="text-sm font-semibold text-[#db0500]">Parceiros de Negócios</span>
        </div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Nossas <span className="text-[#db0500]">Empresas</span> <span className="text-gray-900">Representadas</span>
      </h2>
      
      <p className="text-lg text-gray-700 mx-auto">
        {subtitle}
      </p>
      
      <motion.div 
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center">
          <ArrowDown size={24} className="text-[#db0500] animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionHeader;
