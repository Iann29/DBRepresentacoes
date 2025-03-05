import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  region: string;
  email: string;
  phone: string;
  isLeader?: boolean;
}

const TeamMember: React.FC<TeamMemberProps & { onClick: () => void }> = ({ 
  image, 
  name, 
  position, 
  region, 
  isLeader = false,
  onClick
}) => {
  return (
    <motion.div
      className={`flex flex-col items-center ${isLeader ? 'mb-6' : 'mb-2'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="relative group mb-4 cursor-pointer perspective"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        onClick={onClick}
      >
        {/* Imagem com borda personalizada */}
        <motion.div 
          className={`relative rounded-lg overflow-hidden ${isLeader ? 'border-4 border-[#ff6b66]' : 'border-2 border-[#ff6b66]/70'} shadow-xl transform-style-preserve-3d`}
          whileHover={{ 
            boxShadow: "0 10px 25px -3px rgba(219, 5, 0, 0.4), 0 4px 12px -2px rgba(219, 5, 0, 0.3)",
          }}
        >
          <div className={`aspect-square ${isLeader ? 'w-40 h-40 md:w-48 md:h-48' : 'w-28 h-28 md:w-32 md:h-32'} overflow-hidden`}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
            />
          </div>
          
          {/* Gradiente de borda personalizado */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#ff6b66]/20 to-[#aa0400]/30 transition-opacity duration-300"></div>
            <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#ff6b66] to-[#aa0400] ${isLeader ? 'opacity-100' : 'opacity-70'}`}></div>
            {isLeader && (
              <>
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-[#ff6b66] to-[#aa0400]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b66] to-[#aa0400]"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b66] to-[#aa0400]"></div>
              </>
            )}
          </div>

          {/* Overlay de "Clique para detalhes" com efeito melhorado */}
          <div className="absolute inset-0 bg-white/0 hover:bg-white/70 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 backdrop-blur-sm hover:backdrop-blur-none">
            <span className="text-white text-sm font-medium px-3 py-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 bg-gradient-to-r from-[#db0500] to-[#a00300] shadow-lg">
              Ver detalhes
            </span>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Informações do membro com efeito de gradiente */}
      <h3 className={`${isLeader ? 'text-xl font-bold' : 'text-base font-semibold'} text-gray-800 text-center mb-1`}>{name}</h3>
      <p className={`${isLeader ? 'text-[#db0500] font-medium' : 'text-[#db0500]/90 text-sm'} text-center`}>{position}</p>
      {region && <p className="text-gray-500 text-xs text-center mt-1">{region}</p>}
    </motion.div>
  );
};

// Modal com informações detalhadas - mantido como solicitado
const TeamMemberModal: React.FC<TeamMemberProps & { onClose: () => void }> = ({
  image, 
  name, 
  position, 
  region, 
  email,
  phone,
  onClose
}) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar */}
        <button 
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-[#db0500] hover:text-white transition-colors z-10"
          onClick={onClose}
        >
          <X size={16} />
        </button>
        
        {/* Cabeçalho do modal com gradiente e imagem */}
        <div className="relative h-32 bg-gradient-to-r from-[#db0500] to-[#aa0400] flex items-center justify-center">
          {/* Logo da empresa no centro do cabeçalho */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/logodb.webp" 
              alt="DB Representações Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>
          
          <div className="absolute -bottom-16 left-6 w-32 h-32 rounded-lg border-4 border-white overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Conteúdo do modal */}
        <div className="pt-20 pb-6 px-6">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <p className="text-[#db0500] font-medium">{position}</p>
          {region && <p className="text-gray-500 text-sm mb-4">{region}</p>}
          
          <div className="mt-6 space-y-4">
            {/* Informações de contato */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#db0500]/10 flex items-center justify-center text-[#db0500]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <a href={`tel:${phone}`} className="text-gray-800 hover:text-[#db0500] transition-colors">
                  {phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#db0500]/10 flex items-center justify-center text-[#db0500]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href={`mailto:${email}`} className="text-gray-800 hover:text-[#db0500] transition-colors">
                  {email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Botão de contato */}
          <div className="mt-8">
            <a 
              href={`mailto:${email}`} 
              className="inline-block w-full py-3 px-6 bg-[#db0500] text-white text-center rounded-lg font-medium hover:bg-[#aa0400] transition-colors"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamPresentation = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

  const teamMembers = [
    {
      image: "/equipe/equipe1.jpg",
      name: "Deoclecio Boff",
      position: "Diretor",
      region: "",
      email: "deocleciob@deboff.com.br",
      phone: "(54) 99982-7120"
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Gabriel Boff",
      position: "Comercial",
      region: "",
      email: "Gabriel.boff@deboff.com.br",
      phone: "(54) 99682-7120"
    },
    {
      image: "/equipe/equipe1.jpg",
      name: "Eduardo Biazotto",
      position: "Comercial",
      region: "",
      email: "eduardo@dbrepresentacoes.com.br",
      phone: "(54) 99999-6666"
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Glaucia Scariot",
      position: "Comercial",
      region: "",
      email: "glaucia@dbrepresentacoes.com.br",
      phone: "(54) 99999-5555"
    },
    {
      image: "/equipe/equipe1.jpg",
      name: "Martha Moraes",
      position: "Comercial",
      region: "",
      email: "martha@dbrepresentacoes.com.br",
      phone: "(54) 99999-4444"
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Jenneffer Cruz",
      position: "Consultora Comercial",
      region: "",
      email: "dbcomercial@deboff.com.br",
      phone: "(54) 99996-7120"
    },
    {
      image: "/equipe/equipe1.jpg",
      name: "Ademir Pagnussat",
      position: "Representante Parceiro",
      region: "Exclusivo Häfele",
      email: "ademir@dbrepresentacoes.com.br",
      phone: "(54) 99996-7538"
    }
  ];

  const handleOpenModal = (member: TeamMemberProps) => {
    setSelectedMember(member);
    // Desabilitar scroll do corpo quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    // Reabilitar scroll do corpo quando o modal for fechado
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="equipe" className="py-20 relative overflow-hidden bg-white text-gray-800">
      {/* Efeito de partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#db0500]/60 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 7}s`
            }}
          />
        ))}
      </div>
      
      {/* Background geométrico aprimorado com cores claras */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Grid principal com linhas sutis */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(230, 230, 230, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 230, 230, 0.7) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }}>
        </div>
        
        {/* Linhas com tom vermelho suave */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(219, 5, 0, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(219, 5, 0, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          filter: 'blur(1px)',
        }}>
        </div>
        
        {/* Overlay de gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-[#db0500]/5"></div>
      </div>

      {/* Decoração lateral esquerda */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#db0500]/5 to-transparent"></div>
      
      {/* Decoração lateral direita */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#db0500]/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Título da seção aprimorado */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nossa <span className="text-gradient">Equipe</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sob a liderança de Deoclecio Boff, nossa equipe de profissionais qualificados é o diferencial da DB Representações.
          </motion.p>
        </div>
        
        {/* Linha decorativa aprimorada */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-[#db0500] via-[#ff6b66] to-[#db0500] rounded-full shadow-lg shadow-[#db0500]/20"></div>
        </motion.div>
        
        {/* Grid de membros aprimorado */}
        <div className="max-w-6xl mx-auto">
          {/* Líder da equipe em posição de destaque com animação */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TeamMember
              key="chefe"
              image={teamMembers[0].image}
              name={teamMembers[0].name}
              position={teamMembers[0].position}
              region={teamMembers[0].region}
              email={teamMembers[0].email}
              phone={teamMembers[0].phone}
              isLeader={true}
              onClick={() => handleOpenModal(teamMembers[0])}
            />
          </motion.div>
          
          {/* Separador elegante */}
          <motion.div 
            className="flex justify-center mb-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#ff6b66]/70 to-transparent"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#ff6b66] rounded-full"></div>
          </motion.div>
          
          {/* Restante da equipe em grid mais organizado e responsivo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-12 justify-items-center">
            {teamMembers.slice(1).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <TeamMember
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  region={member.region}
                  email={member.email}
                  phone={member.phone}
                  onClick={() => handleOpenModal(member)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalhes do membro - mantido como solicitado */}
      <AnimatePresence>
        {selectedMember && (
          <TeamMemberModal
            {...selectedMember}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamPresentation;