import React, { useState } from 'react';
import { motion, AnimatePresence } from 'unframer';
import { Phone, Mail, X, ChevronRight } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  region: string;
  email: string;
  phone: string;
  isLeader?: boolean;
  partnerCompany?: string;
}

// Componente de cartão com efeito 3D sutil
const TeamCard: React.FC<TeamMemberProps & { onClick: () => void, index: number }> = ({ 
  image, 
  name, 
  position, 
  region, 
  isLeader = false,
  partnerCompany,
  onClick,
  index
}) => {
  const [hover, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efeito de rotação 3D baseado na posição do mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="perspective"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="group cursor-pointer relative w-full h-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
        style={{ 
          transform: hover ? `rotateY(${mousePosition.x * 7}deg) rotateX(${-mousePosition.y * 7}deg)` : 'rotateY(0) rotateX(0)',
          transition: hover ? 'none' : 'transform 0.5s ease-out'
        }}
        onClick={onClick}
      >
        {/* Cartão frontal */}
        <div className={`overflow-hidden rounded-xl shadow-xl ${isLeader ? 'bg-gradient-to-br from-white to-[#fff5f5]' : 'bg-white'}`}>
          {/* Borda destacada para o líder */}
          {isLeader && (
            <div className="absolute inset-0 border-2 border-[#db0500] rounded-xl opacity-70"></div>
          )}
          
          {/* Cabeçalho do cartão */}
          <div className={`relative overflow-hidden ${isLeader ? 'h-28' : 'h-28'}`}>
            {/* Fundo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#db0500] to-[#9e0400] opacity-90"></div>
            
            {/* Padrão geométrico no fundo */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            {/* Logo da empresa no canto */}
            <div className="absolute top-3 right-3 opacity-20">
              <span className="font-bold text-xl tracking-tight text-white">DB</span>
            </div>
          </div>
          
          {/* Imagem principal - AUMENTADA */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`relative ${isLeader ? 'w-44 h-44' : 'w-40 h-40'} rounded-full overflow-hidden border-4 border-white shadow-lg`}
              style={{ 
                transform: 'translateZ(5px)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
              }}>
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-center"
                style={{
                  filter: "brightness(1.05) contrast(1.05)"
                }}
              />
              
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700" 
                style={{ 
                  transform: 'rotate(45deg) translateY(100%)', 
                  animation: hover ? 'shine 1.5s ease forwards' : 'none'
                }}></div>
            </div>
            
            {/* Badge para o líder */}
            {isLeader && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-[#db0500] text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                Diretor
              </div>
            )}
          </div>
          
          {/* Conteúdo do cartão - Ajustado o padding-top */}
          <div className="px-4 pt-24 pb-4 text-center">
            <h3 className={`${isLeader ? 'text-xl font-bold' : 'text-lg font-semibold'} text-gray-800 transition-transform duration-300 group-hover:scale-105`}>{name}</h3>
            <p className="text-[#db0500] font-medium text-sm">{position}</p>
            {region && <p className="text-gray-500 text-xs mt-1">{region}</p>}
            
            {/* Exibindo empresa parceira exclusiva quando existir */}
            {partnerCompany && (
              <p className="text-gray-700 text-xs mt-1 font-medium">Exclusivo {partnerCompany}</p>
            )}
            
            {/* Botão "Ver detalhes" */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
              <span className="inline-flex items-center text-sm font-medium text-white bg-[#db0500] hover:bg-[#b00400] px-3 py-1.5 rounded-md transition-colors shadow-md">
                Ver detalhes
                <ChevronRight size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Modal com detalhes do membro e efeitos visuais
const TeamMemberModal: React.FC<TeamMemberProps & { onClose: () => void }> = ({
  image, 
  name, 
  position, 
  region, 
  email,
  phone,
  partnerCompany,
  onClose
}) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full relative"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar aprimorado */}
        <button 
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-700 hover:bg-[#db0500] hover:text-white transition-colors z-10 shadow-md"
          onClick={onClose}
        >
          <X size={16} />
        </button>
        
        {/* Cabeçalho do modal com gradiente */}
        <div className="relative h-32 bg-gradient-to-r from-[#db0500] to-[#9e0400] flex items-center justify-center overflow-hidden">
          {/* Padrão geométrico do fundo */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Logo da empresa com efeito brilhante */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.img 
              src="/logodb.webp" 
              alt="DB Representações Logo" 
              className="h-24 w-auto object-contain"
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ 
                opacity: [0.7, 0.9, 0.7],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>
        
        {/* Foto do membro da equipe */}
        <div className="absolute top-32 left-6 transform -translate-y-1/2 w-32 h-32 rounded-xl border-4 border-white overflow-hidden shadow-2xl rotate-3">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center"
            style={{
              filter: "brightness(1.05) contrast(1.05)"
            }}
          />
        </div>
        
        {/* Conteúdo do modal com animações */}
        <div className="pt-20 pb-6 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
            <div className="flex items-center">
              <span className="text-[#db0500] font-medium">{position}</span>
              {region && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-gray-500 text-sm">{region}</span>
                </>
              )}
            </div>
            
            {/* Exibindo empresa parceira exclusiva quando existir */}
            {partnerCompany && (
              <div className="mt-1 inline-block bg-gray-100 px-2 py-1 rounded-md">
                <span className="text-sm font-medium">Exclusivo {partnerCompany}</span>
              </div>
            )}
          </motion.div>
          
          {/* Linha separadora */}
          <motion.div 
            className="h-px bg-gray-200 my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
          
          {/* Informações de contato */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
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
          </motion.div>
          
          {/* Botão de contato */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href={`mailto:${email}`} 
              className="inline-block w-full py-3 px-6 bg-gradient-to-r from-[#db0500] to-[#9e0400] text-white text-center rounded-lg font-medium hover:from-[#b00400] hover:to-[#800300] transition-all transform hover:scale-105 shadow-lg"
            >
              Entrar em contato
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Componente principal de apresentação da equipe
const TeamPresentation = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

  // Dados dos membros da equipe
  const teamMembers = [
    {
      image: "/equipe/deoclecioboff.webp",
      name: "Deoclécio Boff",
      position: "Representante Comercial",
      region: "",
      email: "deocleciob@deboff.com.br",
      phone: "(54) 99982-7120"
    },
    {
      image: "/equipe/gabrielboff.webp",
      name: "Gabriel Boff",
      position: "Comercial",
      region: "",
      email: "Gabriel.boff@deboff.com.br",
      phone: "(54) 99682-7120"
    },
    {
      image: "/equipe/eduardobiazotto.webp",
      name: "Eduardo Biazotto",
      position: "Comercial",
      region: "",
      email: "eduardo@dbrepresentacoes.com.br",
      phone: "(54) 99999-6666"
    },
    {
      image: "/equipe/glauciascariot.webp",
      name: "Glaucia Scariot",
      position: "Comercial",
      region: "",
      email: "glaucia@dbrepresentacoes.com.br",
      phone: "(54) 99999-5555"
    },
    {
      image: "/equipe/jenneffercruz.webp",
      name: "Jenneffer Cruz",
      position: "Comercial",
      region: "",
      email: "dbcomercial@deboff.com.br",
      phone: "(54) 99996-7120"
    },
    {
      image: "/equipe/ademirpagnussat.webp",
      name: "Ademir Pagnussat",
      position: "Representante Parceiro",
      region: "",
      email: "contato@dbrepresentacoes.com.br",
      phone: "54 9 9996 7538",
      partnerCompany: "Häfele"
    }
  ];

  // Gerenciamento do modal
  const handleOpenModal = (member: TeamMemberProps) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      {/* Fundo com grid e efeitos sutis */}
      <div className="absolute inset-0 bg-white">
        {/* Grid de fundo */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(230, 230, 230, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 230, 230, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }}></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full bg-gradient-to-b from-[#db0500]/5 to-transparent opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-gradient-to-t from-[#db0500]/5 to-transparent opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sob a liderança de Deoclécio Boff, nossa equipe de profissionais qualificados é o diferencial da DB Representações.
            </p>
          </motion.div>
          
          {/* Linha decorativa */}
          <motion.div 
            className="flex justify-center mt-8 mb-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-[#db0500] via-[#ff6b66] to-[#db0500] rounded-full shadow-lg"></div>
          </motion.div>
        </div>
        
        {/* Layout do Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Destaque para o líder */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-xs">
              <TeamCard
                key="leader"
                image={teamMembers[0].image}
                name={teamMembers[0].name}
                position={teamMembers[0].position}
                region={teamMembers[0].region}
                email={teamMembers[0].email}
                phone={teamMembers[0].phone}
                isLeader={true}
                onClick={() => handleOpenModal(teamMembers[0])}
                index={0}
              />
            </div>
          </div>
          
          {/* Separador elegante */}
          <motion.div 
            className="flex justify-center mb-12 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#db0500]/70 to-transparent"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#db0500] rounded-full"></div>
          </motion.div>
          
          {/* Grid de membros da equipe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <TeamCard
                key={index + 1}
                image={member.image}
                name={member.name}
                position={member.position}
                region={member.region}
                email={member.email}
                phone={member.phone}
                partnerCompany={member.partnerCompany}
                onClick={() => handleOpenModal(member)}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal de detalhes do membro */}
      <AnimatePresence>
        {selectedMember && (
          <TeamMemberModal
            {...selectedMember}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
      
      {/* Estilo global para animações */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shine {
          0% {
            transform: rotate(45deg) translateY(100%);
          }
          100% {
            transform: rotate(45deg) translateY(-100%);
          }
        }
      `}} />
    </section>
  );
};

export default TeamPresentation;