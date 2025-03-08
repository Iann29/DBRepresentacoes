import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'unframer';

const CompanyVisionMission: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
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
  
  // Efeito de parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section 
      ref={containerRef}
      className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#030303]"
      id="sobre"
    >
      {/* Removido o padrão geométrico de fundo */}
      
      {/* Removido os círculos decorativos de fundo */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Lado Esquerdo - Imagem com efeito */}
          <motion.div 
            className="relative"
            style={{ y: !isMobile ? imageY : 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? 
                { opacity: 1, scale: 1, y: 0 } : 
                { opacity: 0, scale: 0.9, y: 30 }
              }
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
              className="relative z-10"
            >
              {/* Efeito de borda - restaurado */}
              <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-full h-full border-2 border-[#db0500] rounded-lg transform rotate-2"></div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-full h-full border-2 border-[#db0500] rounded-lg transform -rotate-2"></div>
              
              {/* Container da imagem */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* Overlay com efeito de gradiente - restaurado */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#db0500]/20 to-transparent pointer-events-none z-10"></div>
                
                {/* Imagem */}
                <img 
                  src="/sede.webp" 
                  alt="Sede da DB Representações"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-in-out"
                />
                
                {/* Pequeno box no canto com informação */}
                <div className="absolute bottom-0 right-0 bg-[#db0500] text-white py-2 px-4 rounded-tl-lg z-10">
                  <p className="text-sm font-medium">Nossa Sede em Tapejara/RS</p>
                </div>
              </div>
            </motion.div>
            
            {/* Efeito de brilho - restaurado com vermelho */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full pointer-events-none z-0 opacity-50"
              animate={{
                boxShadow: ['0 0 40px 20px rgba(219,5,0,0.1)', '0 0 60px 30px rgba(219,5,0,0.2)', '0 0 40px 20px rgba(219,5,0,0.1)'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
          
          {/* Lado Direito - História da empresa */}
          <motion.div
            ref={textContainerRef}
            style={{ y: !isMobile ? textY : 0 }}
            className="text-center md:text-left md:pl-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Título principal com efeito */}
              <div className="relative mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute -bottom-3 left-0 h-px w-full bg-gradient-to-r from-[#db0500] via-white/30 to-transparent"
                />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white inline-block relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#db0500]/80">
                    DB Representações
                  </span>
                </h2>
              </div>
              
              {/* Texto principal com estilo elegante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Fundada em <span className="text-[#db0500] font-semibold">14/10/1997</span> no Planalto gaúcho, a DB representações idealiza o trabalho de profissional de vendas iniciado em Abril de 1994 como vendedor externo e mais tarde autônomo.
                </p>
                
                <div className="relative mt-4">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    Desde seu início, a DB representação traz um <span className="text-white font-medium">DNA de luta, resiliência e muito trabalho</span>. Deoclécio Boff carrega esta luta constante no campo de trabalho, que iniciou-se e continua sempre com foco no fomento ao mercado Moveleiro.
                  </p>
                </div>
                
                <div className="relative mt-4">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-[#db0500] to-transparent opacity-70 md:block hidden"></div>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    A Empresa está sediada em <span className="italic font-medium text-white">Tapejara, RS</span> tem área de atuação em parte dos três estados do Sul Brasileiro.
                  </p>
                </div>
              </motion.div>
              
              {/* Botão de Chamada para Ação */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-10"
              >
                <a 
                  href="#diferenciais" 
                  className="inline-flex group items-center bg-gradient-to-r from-[#db0500] to-[#a00300] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#db0500]/20 transform hover:-translate-y-1"
                >
                  <span>Conheça nossos diferenciais</span>
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Transição suave sem a onda vermelha */}
    </section>
  );
};

export default CompanyVisionMission;