import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <div className="text-center">
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
  );
};

export default ContactCTA;
