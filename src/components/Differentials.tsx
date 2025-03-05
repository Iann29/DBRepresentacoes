import React, { useEffect, useRef } from 'react';
import { Award, Clock, Users, TrendingUp, ShieldCheck, Handshake } from 'lucide-react';

interface DifferentialItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const DifferentialItem: React.FC<DifferentialItemProps> = ({ icon, title, description, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef} 
      className="bg-white rounded-xl shadow-lg p-6 transition-all duration-700 opacity-0 translate-y-10 hover:shadow-xl hover:-translate-y-1 group"
    >
      <div className="relative mb-6 inline-block">
        <div className="absolute inset-0 bg-[#db0500]/10 rounded-full transform scale-0 group-hover:scale-125 transition-transform duration-300"></div>
        <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-gray-50 text-[#db0500] group-hover:text-white group-hover:bg-[#db0500] transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#db0500] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Differentials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('opacity-100', 'translate-y-0');
            }
            if (subheadingRef.current) {
              setTimeout(() => {
                subheadingRef.current?.classList.add('opacity-100', 'translate-y-0');
              }, 200);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const differentials = [
    {
      icon: <Award size={28} />,
      title: "Excelência",
      description: "Compromisso com a qualidade em todos os processos e relacionamentos comerciais."
    },
    {
      icon: <Clock size={28} />,
      title: "Experiência",
      description: "Mais de 25 anos no mercado, com profundo conhecimento do setor e suas necessidades."
    },
    {
      icon: <Users size={28} />,
      title: "Equipe Qualificada",
      description: "Profissionais especializados e constantemente atualizados sobre o mercado."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Resultados",
      description: "Foco em estratégias que geram crescimento real para nossos parceiros."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Confiabilidade",
      description: "Transparência e ética em todas as negociações e relacionamentos comerciais."
    },
    {
      icon: <Handshake size={28} />,
      title: "Parcerias Duradouras",
      description: "Construímos relações de longo prazo baseadas em confiança e resultados."
    }
  ];

  return (
    <section id="diferenciais" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 opacity-0 translate-y-10 transition-all duration-700"
          >
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p 
            ref={subheadingRef}
            className="text-lg text-gray-700 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            O que nos torna a escolha ideal para representar sua empresa no mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {differentials.map((item, index) => (
            <DifferentialItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;