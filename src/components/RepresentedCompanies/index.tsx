import React from 'react';
import SectionHeader from './SectionHeader';
import CompanyCard from './CompanyCard';
import ContactCTA from './ContactCTA';
import { allCompanies } from './companiesData';

const RepresentedCompanies: React.FC = () => {
  return (
    <section 
      id="empresas" 
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <SectionHeader 
          title="Nossas Empresas Representadas"
          subtitle="Construímos pontes sólidas entre fabricantes e consumidores, promovendo negócios duradouros baseados na confiança e qualidade. Conheça os parceiros que compõem nosso portfólio de excelência:"
        />
        
        {/* Lista unificada de empresas representadas */}
        <div className="space-y-12 mb-16">
          {allCompanies.map((company, index) => (
            <CompanyCard 
              key={`company-${index}`} 
              company={company} 
              index={index} 
            />
          ))}
        </div>
        
        {/* CTA */}
        <ContactCTA />
      </div>
    </section>
  );
};

export default RepresentedCompanies;
