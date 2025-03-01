import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RepresentedCompanies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Empresas representadas (logos fictícios)
  const companies = [
    {
      name: 'TechPower',
      logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=TechPower',
      description: 'Líder em soluções de energia e automação industrial.'
    },
    {
      name: 'InnovateMaterials',
      logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=InnovateMaterials',
      description: 'Materiais de construção inovadores e sustentáveis.'
    },
    {
      name: 'LightSystems',
      logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=LightSystems',
      description: 'Sistemas de iluminação de alta eficiência energética.'
    },
    {
      name: 'ElectroTech',
      logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=ElectroTech',
      description: 'Componentes elétricos de alta qualidade e durabilidade.'
    },
    {
      name: 'SolarMax',
      logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=SolarMax',
      description: 'Soluções completas para energia solar residencial e comercial.'
    },
    {
      name: 'AutoControl',
      logo: 'https://via.placeholder.com/200x100/f5f5f5/333333?text=AutoControl',
      description: 'Sistemas avançados de automação e controle industrial.'
    }
  ];

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
            if (carouselRef.current) {
              setTimeout(() => {
                carouselRef.current?.classList.add('opacity-100', 'translate-y-0');
              }, 400);
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

  // Autoplay do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(companies.length / 3) - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(companies.length / 3) - 1 : prev - 1));
  };

  // Dividir as empresas em grupos de 3 para o carrossel
  const companyGroups = [];
  for (let i = 0; i < companies.length; i += 3) {
    companyGroups.push(companies.slice(i, i + 3));
  }

  return (
    <section id="empresas" ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 opacity-0 translate-y-10 transition-all duration-700"
          >
            Empresas <span className="text-gradient">Representadas</span>
          </h2>
          <p 
            ref={subheadingRef}
            className="text-lg text-gray-700 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            Trabalhamos com marcas reconhecidas pela qualidade e inovação em seus segmentos.
          </p>
        </div>

        <div 
          ref={carouselRef}
          className="relative opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {companyGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {group.map((company, companyIndex) => (
                      <div 
                        key={`${groupIndex}-${companyIndex}`}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        <div className="flex flex-col items-center">
                          <div className="mb-6 p-4 bg-gray-50 rounded-lg w-full flex items-center justify-center h-32">
                            <img 
                              src={company.logo} 
                              alt={company.name} 
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900">{company.name}</h3>
                          <p className="text-gray-600 text-center">{company.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles do carrossel */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-gray-900 rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none transition-colors z-10 md:-translate-x-0"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-gray-900 rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none transition-colors z-10 md:translate-x-0"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {companyGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#db0500] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepresentedCompanies;