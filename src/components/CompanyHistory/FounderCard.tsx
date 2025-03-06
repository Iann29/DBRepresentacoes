import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'unframer';

const FounderCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1, margin: "0px 0px -300px 0px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Efeitos de parallax para diferentes elementos com duração estendida
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.9], [100, 0, -50]);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center overflow-hidden relative py-32 sticky top-0">
      {/* Background com gradient dinâmico */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#16213a] to-[#950300] z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Linhas de grid decorativas */}
      <div className="absolute inset-0 grid grid-cols-6 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="h-full w-px bg-white/10 mx-auto"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 * i }}
          />
        ))}
      </div>
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          {/* Imagem do fundador */}
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 25 }}
          >
            <motion.div 
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20"
              style={{ scale: imageScale }}
            >
              <div className="pb-[120%] relative overflow-hidden">
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
            
            {/* Elementos decorativos */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-[#db0500] opacity-20 z-0"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-white/20 z-0"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
          
          {/* Texto de apresentação */}
          <motion.div 
            className="md:w-1/2 md:pl-16 text-white"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                Nosso Fundador
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Deoclecio<br />
              <span className="text-[#ff544f]">Boff</span>
            </motion.h2>
            
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="h-px bg-[#db0500] w-12 mr-4"></div>
              <span className="text-xl font-semibold text-white/80">Visionário & Empreendedor</span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-white/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Desde 1994, Deoclecio tem liderado com visão e determinação, transformando desafios em oportunidades e construindo relacionamentos duradouros. Sua jornada de dedicação e excelência moldou não apenas uma empresa, mas estabeleceu um legado de valores e compromisso com a qualidade.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="inline-flex items-center text-white/90 font-medium group cursor-pointer">
                <span>Conheça nossa jornada</span>
                <div className="ml-2 w-6 h-6 rounded-full bg-[#db0500] flex items-center justify-center group-hover:bg-white group-hover:text-[#db0500] transition-all duration-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decoração de números na timeline - efeito visual */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden h-12 opacity-30 z-0">
        <motion.div 
          className="flex"
          initial={{ x: "100%" }}
          animate={isInView ? { x: "-100%" } : { x: "100%" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        >
          {[1994, 1995, 1998, 2002, 2007, 2012, 2015, 2020, 2025].map((year, i) => (
            <div key={i} className="text-9xl font-bold text-white/10 whitespace-nowrap mx-12">
              {year}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FounderCard;