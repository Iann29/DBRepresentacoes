import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  region: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, region }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative mb-12 group"
        whileHover={{ 
          scale: 1.05, 
          rotate: 2,
          transition: { duration: 0.3 }
        }}
      >
        {/* Imagem com borda personalizada */}
        <motion.div 
          className="relative rounded-lg overflow-hidden border-4 border-white shadow-lg"
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="aspect-square w-64 h-64 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          
          {/* Borda decorativa no lado esquerdo - usando cor principal do site */}
          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#db0500] to-[#aa0400]"></div>
          
          {/* Efeito flash na borda em hover */}
          <motion.div 
            className="absolute inset-0 border-4 border-[#db0500]/0"
            initial={{ opacity: 0 }}
            whileHover={{ 
              opacity: 1, 
              borderColor: "rgba(219, 5, 0, 0.3)",
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Informações do membro */}
      <h3 className="text-xl font-bold text-gray-800 text-center">{name}</h3>
      <p className="text-gray-600 font-medium text-center">{position}</p>
      <p className="text-[#db0500] text-sm text-center mt-1">{region}</p>
    </motion.div>
  );
};

const TeamPresentation = () => {
  const teamMembers = [
    {
      image: "/equipe/equipe1.jpg",
      name: "Daniel Barbosa",
      position: "Diretor",
      region: ""
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Ciro Teixeira",
      position: "Representante Comercial",
      region: "Tapejara"
    },
    {
      image: "/equipe/equipe1.jpg",
      name: "João Lucas Figueiredo",
      position: "Representante Comercial",
      region: "Tapejara"
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Maurício Borges",
      position: "Representante Comercial",
      region: "Tapejara"
    }
  ];

  return (
    <section id="equipe" className="py-32 relative overflow-hidden bg-white">
      {/* Background geométrico criativo */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Padrão de fundo - apenas o grid */}
        <svg 
          className="absolute top-0 left-0 w-full h-full opacity-10" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern 
            id="grid-pattern" 
            x="0" 
            y="0" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="40" height="40" fill="none" stroke="#db0500" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nossa <span className="text-[#db0500]">Equipe</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            O diferencial da nossa empresa está nas pessoas! Conheça a equipe de suporte da DB Representações.
          </p>
        </div>
        
        {/* Linha decorativa abaixo do título */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-[#db0500]"></div>
        </div>
        
        {/* Grid de membros da equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center max-w-6xl mx-auto mb-24">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              region={member.region}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPresentation;