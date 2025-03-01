import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  contact: {
    email?: string;
    phone?: string;
    linkedin?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, bio, contact }) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative group overflow-hidden rounded-xl">
        {/* Imagem principal */}
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Camada de informações */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white/90 font-medium mb-2">{position}</p>
          
          <div className="flex space-x-3 mt-3">
            {contact.email && (
              <motion.a 
                href={`mailto:${contact.email}`}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} className="text-white" />
              </motion.a>
            )}
            {contact.phone && (
              <motion.a 
                href={`tel:${contact.phone}`}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} className="text-white" />
              </motion.a>
            )}
            {contact.linkedin && (
              <motion.a 
                href={contact.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Informações abaixo da imagem */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gradient font-medium mb-3">{position}</p>
        <p className="text-gray-600 text-sm line-clamp-3">{bio}</p>
      </div>
    </motion.div>
  );
};

const TeamPresentation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      image: "/equipe/equipe1.jpg",
      name: "Daniel Barbosa",
      position: "Diretor Comercial",
      bio: "Com mais de 15 anos de experiência no setor, Daniel lidera nossa equipe de vendas e desenvolve estratégias para fortalecer as parcerias com nossos clientes e representados.",
      contact: {
        email: "daniel@dbrepresentacoes.com.br",
        phone: "+55 (11) 98765-4321",
        linkedin: "https://linkedin.com/in/danielbarbosa"
      }
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Ana Carolina Silva",
      position: "Gerente de Relacionamento",
      bio: "Ana é responsável por manter o relacionamento sólido com nossos clientes, garantindo excelência no atendimento e identificando oportunidades para ampliação de negócios.",
      contact: {
        email: "ana@dbrepresentacoes.com.br",
        phone: "+55 (11) 98765-4322",
        linkedin: "https://linkedin.com/in/anacarolinasilva"
      }
    },
    {
      image: "/equipe/equipe1.jpg",
      name: "Ricardo Almeida",
      position: "Especialista em Desenvolvimento de Negócios",
      bio: "Ricardo identifica oportunidades de mercado e desenvolve estratégias para expansão. Com experiência em análise de mercado e planejamento estratégico.",
      contact: {
        email: "ricardo@dbrepresentacoes.com.br",
        phone: "+55 (11) 98765-4323",
        linkedin: "https://linkedin.com/in/ricardoalmeida"
      }
    },
    {
      image: "/equipe/equipe2.jpg",
      name: "Juliana Santos",
      position: "Coordenadora de Marketing",
      bio: "Juliana lidera nossas estratégias de marketing e comunicação. Especialista em marketing digital e branding para aumentar a visibilidade das marcas.",
      contact: {
        email: "juliana@dbrepresentacoes.com.br",
        phone: "+55 (11) 98765-4324",
        linkedin: "https://linkedin.com/in/julianasantos"
      }
    }
  ];

  return (
    <section id="equipe" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que trabalham para o sucesso dos nossos parceiros.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              bio={member.bio}
              contact={member.contact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPresentation;