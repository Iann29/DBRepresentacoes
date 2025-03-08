import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'unframer';

const VisionMission: React.FC = () => {
  // Refs para detectar quando os elementos entram na viewport
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.25 });
  
  // Controles de animação
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  
  // Iniciar animações quando o componente entrar na viewport
  useEffect(() => {
    if (isInView) {
      controlsLeft.start('visible');
      controlsRight.start('visible');
    } else {
      controlsLeft.start('hidden');
      controlsRight.start('hidden');
    }
  }, [isInView, controlsLeft, controlsRight]);
  
  // Variantes de animação
  const cardVariants = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -30 : 30,
      y: 10,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      id="visao-missao" 
      className="relative py-20 md:py-32 overflow-hidden bg-[#696969]"
    >
      {/* Fundo com padrão geométrico sutilmente */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23db0500' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Nossos <span className="text-[#db0500]">Valores</span> Fundamentais
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1 w-24 bg-[#db0500] rounded-full mx-auto mb-6"
          ></motion.div>
        </div>
        
        {/* Cards de Visão e Missão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Card da Visão */}
          <motion.div
            custom={true}
            variants={cardVariants}
            initial="hidden"
            animate={controlsLeft}
            className="relative h-full"
          >
            <div className="bg-white rounded-xl p-8 shadow-xl border-t-4 border-[#db0500] h-full flex flex-col">
              {/* Ícone */}
              <div className="bg-[#db0500]/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-[#db0500]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              
              {/* Título */}
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Nossa <span className="text-[#db0500]">Visão</span>
                </h3>
                <div className="h-px w-16 bg-[#db0500]"></div>
              </div>
              
              {/* Conteúdo */}
              <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
                "Estar na vanguarda da representação comercial"
              </p>
              
              <p className="text-gray-600 flex-grow">
                Buscamos constantemente inovar e liderar o setor, oferecendo soluções pioneiras que conectam indústrias e clientes de forma eficiente e visionária.
              </p>
            </div>
          </motion.div>
          
          {/* Card da Missão */}
          <motion.div
            custom={false}
            variants={cardVariants}
            initial="hidden"
            animate={controlsRight}
            className="relative h-full"
          >
            <div className="bg-white rounded-xl p-8 shadow-xl border-t-4 border-[#db0500] h-full flex flex-col">
              {/* Ícone */}
              <div className="bg-[#db0500]/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-[#db0500]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Título */}
              <div className="mb-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Nossa <span className="text-[#db0500]">Missão</span>
                </h3>
                <div className="h-px w-16 bg-[#db0500]"></div>
              </div>
              
              {/* Conteúdo */}
              <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
                "Atender nossos clientes com rapidez, presteza e acuracidade."
              </p>
              
              <p className="text-gray-600 flex-grow">
                Comprometemo-nos a proporcionar um atendimento excepcional, garantindo agilidade, dedicação e precisão em cada interação, superando as expectativas do mercado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;