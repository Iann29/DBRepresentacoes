import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link2, Star } from 'lucide-react';

// Dados das empresas representadas
const mainPartners = [
  {
    name: 'Zen',
    logo: 'https://via.placeholder.com/300x200/f5f5f5/333333?text=ZEN',
    description: 'Especialista em soluções inovadoras para móveis e ambientes.',
    color: '#2c3e50', // Azul escuro mais sóbrio
    website: '#'
  },
  {
    name: 'Rometal',
    logo: 'https://via.placeholder.com/300x200/f5f5f5/333333?text=ROMETAL',
    description: 'Referência em produtos metálicos de alta qualidade e durabilidade.',
    color: '#34495e', // Azul escuro mais sóbrio
    website: '#'
  },
  {
    name: 'Häfele',
    logo: 'https://via.placeholder.com/300x200/f5f5f5/333333?text=HÄFELE',
    description: 'Líder mundial em ferragens e sistemas de fechamento para móveis.',
    color: '#7f8c8d', // Cinza azulado
    website: '#'
  }
];

const otherPartners = [
  {
    name: 'Grossl',
    logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=GROSSL',
    color: '#95a5a6', // Cinza claro
    website: '#'
  },
  {
    name: 'Guidini',
    logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=GUIDINI',
    color: '#95a5a6', // Cinza claro
    website: '#'
  },
  {
    name: 'Portábille',
    logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=PORTÁBILLE',
    color: '#95a5a6', // Cinza claro
    website: '#'
  },
  {
    name: 'Rubinettos',
    logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=RUBINETTOS',
    color: '#95a5a6', // Cinza claro
    website: '#'
  },
  {
    name: 'Seccare',
    logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=SECCARE',
    color: '#95a5a6', // Cinza claro
    website: '#'
  }
];

const RepresentedCompanies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animações para os cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  // Animações para os círculos de fundo
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="empresas" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-50"
    >
      {/* Elementos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={circleVariants}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={circleVariants}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <Star size={16} className="text-[#db0500]" />
              <span className="text-sm font-semibold text-[#db0500]">Parceiros de Negócios</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nossas Empresas <span className="text-[#db0500]">Representadas</span>
          </h2>
          <p className="text-lg text-gray-700 mx-auto">
            Trabalhamos com marcas líderes de mercado, garantindo produtos de alta qualidade e soluções inovadoras para nossos clientes.
          </p>
        </div>
        
        {/* Principais parceiros */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-block relative">
              Parceiros Principais
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#db0500]"></span>
            </span>
          </h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {mainPartners.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-xl border border-gray-100">
                  {/* Faixa superior colorida */}
                  <div 
                    className="h-2 w-full" 
                    style={{ backgroundColor: company.color }}
                  ></div>
                  
                  {/* Conteúdo principal */}
                  <div className="p-8 flex flex-col items-center">
                    {/* Logo */}
                    <div 
                      className="mb-6 h-36 w-full flex items-center justify-center p-4 rounded-xl transition-all duration-300 group-hover:scale-105 bg-gray-50" 
                    >
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Info */}
                    <h3 className="text-2xl font-bold mb-4 text-center">{company.name}</h3>
                    <p className="text-gray-600 text-center mb-6">{company.description}</p>
                    
                    {/* Botão de website */}
                    <a 
                      href={company.website} 
                      className="flex items-center space-x-2 font-medium px-6 py-3 rounded-full text-white transition-all duration-300 group-hover:pr-8 bg-[#db0500] hover:bg-[#a00300]"
                    >
                      <Link2 size={16} />
                      <span>Visite o website</span>
                    </a>
                  </div>
                  
                  {/* Badge de "Principal" */}
                  <div className="absolute top-5 right-5 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-100">
                    <Star size={14} className="text-[#db0500]" fill="#db0500" />
                    <span className="text-xs font-semibold text-gray-800">Principal</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Outros parceiros */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <span className="inline-block relative">
              Outras Representadas
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-300"></span>
            </span>
          </h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {otherPartners.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-xl border border-gray-100 h-full flex flex-col">
                  {/* Conteúdo */}
                  <div className="p-5 flex-1 flex flex-col items-center justify-center">
                    {/* Logo */}
                    <div 
                      className="mb-4 p-3 rounded-lg flex items-center justify-center h-24 w-full bg-gray-50" 
                    >
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Nome */}
                    <h3 className="text-lg font-bold text-center">{company.name}</h3>
                    
                    {/* Link */}
                    <a 
                      href={company.website} 
                      className="mt-3 text-sm font-medium flex items-center justify-center space-x-1 transition-all duration-300 hover:underline text-[#db0500]"
                    >
                      <Link2 size={12} />
                      <span>Website</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg font-medium text-gray-700 mb-6">
            Interessado em conhecer melhor nossas representadas e produtos?
          </p>
          <a 
            href="#contato" 
            className="inline-block px-8 py-4 bg-[#db0500] hover:bg-[#a00300] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default RepresentedCompanies;