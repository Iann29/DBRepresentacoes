import React from 'react';
import { motion } from 'unframer';
import { ExternalLink } from 'lucide-react';
import { CompanyData } from './types';

interface CompanyCardProps {
  company: CompanyData;
  index: number;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="p-1 bg-[#db0500]">
        <h3 className="text-white font-bold text-lg px-6 py-2">
          {company.name}
        </h3>
      </div>
      
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-10">
        {/* Logo e informações principais */}
        <div className="md:col-span-2 flex flex-col">
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-6 h-48">
            <img 
              src={company.logo} 
              alt={company.name} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          {/* Botões de ação */}
          <div className="mt-auto space-y-3">
            {/* Website */}
            <a 
              href={company.website} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full space-x-2 font-medium px-4 py-2.5 rounded-lg text-gray-700 border border-gray-300 transition-all duration-300 hover:bg-gray-50"
            >
              <ExternalLink size={16} />
              <span>Visitar o site</span>
            </a>
          </div>
        </div>
        
        {/* Descrição e catálogos */}
        <div className="md:col-span-5">
          {/* Descrição principal */}
          <p className="text-lg text-gray-700 mb-6">
            {company.description}
          </p>
          
          {/* Descrição longa */}
          <p className="text-gray-600 mb-8">
            {company.longDescription}
          </p>
          
          {/* Catálogos */}
          <CatalogSection catalogList={company.catalogList} />
        </div>
      </div>
    </motion.div>
  );
};

interface CatalogSectionProps {
  catalogList: Array<{ name: string; url: string; external?: boolean }>;
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ catalogList }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
        <span className="bg-[#db0500] w-2 h-5 mr-2"></span>
        Catálogos disponíveis:
      </h4>
      
      <div className={`grid grid-cols-1 ${catalogList.length > 1 ? 'sm:grid-cols-2' : ''} gap-3`}>
        {catalogList.map((catalog, idx) => (
          <a 
            key={idx}
            href={catalog.url} 
            download={!catalog.external}
            target={catalog.external ? "_blank" : undefined}
            rel={catalog.external ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-2 font-medium px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 transition-all duration-300 hover:bg-gray-50"
          >
            {catalog.external ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            )}
            <span>{catalog.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
