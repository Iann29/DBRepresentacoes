import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'unframer';

const FounderCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
  const isInView = useInView(containerRef, { 
    once: false, 
    amount: isMobile ? 0.2 : 0.1, 
    margin: isMobile ? "0px 0px -150px 0px" : "0px 0px -300px 0px" 
  });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Ajustes de parallax otimizados para mobile
  const imageScale = useTransform(scrollYProgress, [0, isMobile ? 0.5 : 0.7], [isMobile ? 1.1 : 1.2, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, isMobile ? 0.8 : 0.9], [0, 1, isMobile ? 0.9 : 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.2, isMobile ? 0.8 : 0.9], [isMobile ? 50 : 100, 0, isMobile ? -30 : -50]);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center overflow-hidden relative py-8 md:py-32 sticky top-0"
    >
      {/* Background com gradient dinâmico */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#16213a] to-[#950300] z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Linhas de grid decorativas - menos visíveis no mobile */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 z-0">
        {[...Array(isMobile ? 4 : 6)].map((_, i) => (
          <motion.div 
            key={i}
            className="h-full w-px bg-white/5 md:bg-white/10 mx-auto"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 * i }}
          />
        ))}
      </div>
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto space-y-0 md:space-y-0">
          {/* Imagem do fundador - adaptada para mobile */}
          <motion.div 
            className="w-full md:w-1/2 mb-4 md:mb-0 relative px-4 sm:px-8 md:px-0"
            initial={{ x: isMobile ? 0 : -100, y: isMobile ? -50 : 0, opacity: 0 }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : -100, y: isMobile ? -50 : 0, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 25 }}
          >
            <motion.div 
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20"
              style={{ scale: imageScale }}
            >
              <div className="pb-[80%] md:pb-[120%] relative overflow-hidden">
                <img 
                  src="/equipe/deoclecioboff.webp" 
                  alt="Deoclecio Boff - Fundador" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Barra de destaque */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-2 bg-[#db0500]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
            
            {/* Elementos decorativos - ajustados para mobile */}
            <motion.div 
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 md:w-48 h-32 md:h-48 rounded-full bg-[#db0500] opacity-20 z-0"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 md:w-32 h-24 md:h-32 rounded-full border-2 border-white/20 z-0"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
          
          {/* Texto de apresentação */}
          <motion.div 
            className="w-full md:w-1/2 md:pl-16 text-white text-center md:text-left"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center md:justify-start"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-2 md:mb-6">
                Nosso Fundador
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Deoclecio<br />
              <span className="text-[#ff544f]">Boff</span>
            </motion.h2>
            
            {/* Modificado para evitar quebra de linha durante a animação */}
            <div className="flex justify-center md:justify-start">
              <motion.div 
                className="flex items-center mb-2 md:mb-8 overflow-hidden"
                initial={{ opacity: 0, width: 0 }}
                animate={isInView ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="h-px bg-[#db0500] w-6 md:w-12 mr-2 md:mr-4 flex-shrink-0"></div>
                <span className="text-sm md:text-xl font-semibold text-white/80 whitespace-nowrap flex-shrink-0">Visionário & Empreendedor</span>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-sm md:text-lg text-white/70 mb-4 md:mb-8 leading-relaxed px-2 md:px-0 line-clamp-5 md:line-clamp-none"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Desde 1994, Deoclecio tem liderado com visão e determinação, transformando desafios em oportunidades e construindo relacionamentos duradouros. Sua jornada de dedicação e excelência moldou não apenas uma empresa, mas estabeleceu um legado de valores e compromisso com a qualidade.
            </motion.p>
            
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="inline-flex items-center text-white/90 text-sm md:text-base font-medium group cursor-pointer">
                  <span>Conheça nossa jornada</span>
                  <div className="ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#db0500] flex items-center justify-center group-hover:bg-white group-hover:text-[#db0500] transition-all duration-300">
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decoração de números na timeline - efeito visual ajustado para mobile */}
      <div className="absolute bottom-2 md:bottom-8 left-0 w-full overflow-hidden h-6 md:h-12 opacity-20 md:opacity-30 z-0">
        <motion.div 
          className="flex"
          initial={{ x: "100%" }}
          animate={isInView ? { x: "-100%" } : { x: "100%" }}
          transition={{ duration: isMobile ? 15 : 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        >
          {[1994, 1995, 1998, 2002, 2007, 2012, 2015, 2020, 2025].map((year, i) => (
            <div key={i} className="text-4xl md:text-9xl font-bold text-white/10 whitespace-nowrap mx-4 md:mx-12">
              {year}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FounderCard;