import React from 'react';
import { Calendar, Award } from 'lucide-react';

const FounderStory = () => {
  return (
    <section id="história" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#db0500] rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Deoclecio Piffer" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">A História de Deoclecio Piffer</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Calendar className="h-6 w-6 text-[#db0500]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">O Início da Jornada - 1994</h3>
                  <p className="text-gray-700">
                    Em 1994, Deoclecio Piffer iniciou sua carreira como representante comercial, 
                    após anos de experiência no setor industrial. Com uma visão clara do mercado e 
                    um compromisso inabalável com a excelência, ele estabeleceu as bases do que 
                    viria a se tornar uma das mais respeitadas empresas de representação comercial do país.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award className="h-6 w-6 text-[#db0500]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Crescimento e Reconhecimento</h3>
                  <p className="text-gray-700">
                    Ao longo dos anos, a dedicação de Deoclecio em construir relacionamentos sólidos 
                    e entregar resultados consistentes rendeu frutos. A empresa expandiu seu portfólio 
                    de representadas e conquistou a confiança de grandes indústrias. Seu compromisso 
                    com a ética nos negócios e a busca constante por inovação estabeleceram um padrão 
                    de excelência que continua a guiar a empresa até hoje.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Calendar className="h-6 w-6 text-[#db0500]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Legado e Futuro</h3>
                  <p className="text-gray-700">
                    Hoje, com mais de três décadas de experiência, Deoclecio Piffer lidera uma equipe 
                    de profissionais talentosos que compartilham sua paixão por conectar empresas e 
                    impulsionar negócios. Seu legado de integridade, profissionalismo e resultados 
                    continua a inspirar a próxima geração de representantes comerciais, enquanto a 
                    empresa se prepara para enfrentar os desafios e oportunidades do futuro.
                  </p>
                </div>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-[#db0500] pl-4 mt-8 italic text-gray-700">
              "O sucesso nos negócios não é apenas sobre vendas, mas sobre construir relacionamentos 
              duradouros baseados em confiança, integridade e valor mútuo."
              <footer className="mt-2 font-semibold">— Deoclecio Piffer</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;