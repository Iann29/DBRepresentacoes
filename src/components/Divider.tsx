import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Divider: React.FC = () => {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={dividerRef}
      className="relative z-10 opacity-0 transition-opacity duration-1000 -my-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          {/* Linha esquerda */}
          <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-gray-400"></div>
          
          {/* Logo centralizada com efeito */}
          <div className="relative mx-8">
            <motion.div
              className="relative w-20 h-20 flex items-center justify-center"
              animate={{ 
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              {/* Círculo decorativo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-white shadow-lg"></div>
              
              {/* Logo */}
              <motion.img 
                src="/logodb.webp" 
                alt="DB Representações" 
                className="w-14 h-14 object-contain relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              
              {/* Efeito de brilho */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-[#db0500]/5"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
            </motion.div>
          </div>
          
          {/* Linha direita */}
          <div className="flex-grow h-[2px] bg-gradient-to-l from-transparent via-gray-300 to-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Divider;
