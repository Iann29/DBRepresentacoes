import React, { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
            if (formRef.current) {
              setTimeout(() => {
                formRef.current?.classList.add('opacity-100', 'translate-y-0');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulando envio do formulário
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Reset após 3 segundos
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contato" ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 opacity-0 translate-y-10 transition-all duration-700"
          >
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p 
            ref={subheadingRef}
            className="text-lg text-gray-700 max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
          >
            Estamos prontos para atender sua empresa e desenvolver estratégias personalizadas para o seu negócio.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="bg-white rounded-xl shadow-lg p-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo <span className="text-[#db0500]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db0500] focus:border-transparent transition-all"
                  placeholder="Digite seu nome"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail <span className="text-[#db0500]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db0500] focus:border-transparent transition-all"
                  placeholder="Digite seu e-mail"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db0500] focus:border-transparent transition-all"
                  placeholder="Digite seu telefone"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db0500] focus:border-transparent transition-all"
                  placeholder="Digite o nome da sua empresa"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                />
              </div>
            </div>
            
            <div className="form-group mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem <span className="text-[#db0500]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#db0500] focus:border-transparent transition-all resize-none"
                placeholder="Digite sua mensagem"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              ></textarea>
            </div>
            
            <div className="text-center">
              {formStatus === 'idle' && (
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-[#db0500] text-white font-medium rounded-lg hover:bg-[#a00300] transition-colors duration-300"
                >
                  <Send size={18} className="mr-2" />
                  Enviar mensagem
                </button>
              )}
              
              {formStatus === 'submitting' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center px-6 py-3 bg-gray-400 text-white font-medium rounded-lg cursor-not-allowed"
                >
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </button>
              )}
              
              {formStatus === 'success' && (
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 text-green-700 rounded-full p-2 mb-3">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-green-700 font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-gray-600 mt-1">Entraremos em contato em breve.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="text-[#db0500]">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;