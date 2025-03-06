import { CompanyData } from './types';

// Dados das empresas representadas
export const allCompanies: CompanyData[] = [
  // As três primeiras empresas sempre aparecem primeiro na ordem
  {
    name: 'Zen',
    logo: '/representadas/logozen.webp',
    description: 'Especialista em soluções inovadoras para móveis e ambientes. A Zen oferece produtos que combinam funcionalidade, estética e qualidade superior para transformar espaços.',
    longDescription: 'Fundada em 1993, a Zen se tornou uma referência no mercado de componentes para móveis. Com décadas de experiência, a empresa desenvolve produtos inovadores que atendem às necessidades de designers, arquitetos e indústria moveleira. Sua linha de produtos inclui puxadores, sistemas de portas deslizantes e acessórios que combinam sofisticação e praticidade.',
    slogan: 'Inovação que transforma ambientes',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Principal', url: '#' },
      { name: 'Catálogo de Puxadores', url: '#' }
    ]
  },
  {
    name: 'Rometal',
    logo: '/representadas/logorometal.webp',
    description: 'Referência em produtos metálicos de alta qualidade e durabilidade. Soluções completas para projetos que exigem resistência e acabamento premium.',
    longDescription: 'A Rometal é especializada na fabricação de componentes metálicos para a indústria moveleira e construção civil. Desde sua fundação, a empresa tem investido constantemente em tecnologia e processos de produção para garantir produtos com acabamento superior e alta durabilidade. Seus principais diferenciais são a precisão dimensional e a variedade de acabamentos disponíveis.',
    slogan: 'Qualidade que você pode sentir',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Completo', url: '#' },
      { name: 'Linha Residencial', url: '#' }
    ]
  },
  {
    name: 'Häfele',
    logo: '/representadas/logohafele.webp',
    description: 'Líder mundial em ferragens e sistemas de fechamento para móveis. Produtos alemães com tecnologia de ponta e design funcional.',
    longDescription: 'A Häfele é uma empresa alemã reconhecida mundialmente como líder em ferragens funcionais e sistemas inteligentes para móveis. Com mais de 90 anos de história, a marca é sinônimo de inovação, qualidade e precisão. Sua ampla linha de produtos inclui sistemas de corrediças, dobradiças, sistemas de portas deslizantes e soluções para otimização de espaços.',
    slogan: 'Engenharia alemã para seu projeto',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Geral', url: '#' },
      { name: 'Sistemas de Corrediças', url: '#' },
      { name: 'Catálogo de Dobradiças', url: '#' }
    ]
  },
  // Demais empresas
  {
    name: 'Grossl',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=GROSSL',
    description: 'Produtos inovadores para o mercado moveleiro com foco em praticidade e design moderno.',
    longDescription: 'A Grossl desenvolve soluções criativas para o setor moveleiro, com produtos que aliam praticidade, durabilidade e design contemporâneo. A empresa se destaca pela capacidade de entender as tendências do mercado e oferecer componentes que agregam valor aos projetos de seus clientes.',
    slogan: 'Soluções que fazem a diferença',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Completo', url: '#' }
    ]
  },
  {
    name: 'Guidini',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=GUIDINI',
    description: 'Soluções criativas para projetos de móveis que valorizam a funcionalidade e o acabamento.',
    longDescription: 'A Guidini é especializada em componentes e acessórios que trazem funcionalidade e acabamento refinado para móveis. Com anos de experiência no mercado, a empresa desenvolve produtos que ajudam a resolver desafios de design e otimização de espaço em diversos ambientes.',
    slogan: 'Excelência em cada detalhe',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Geral', url: '#' }
    ]
  },
  {
    name: 'Portábille',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=PORTÁBILLE',
    description: 'Componentes de alta qualidade para seu projeto, com ênfase em soluções práticas e duradouras.',
    longDescription: 'A Portábille se destaca no fornecimento de componentes para móveis que combinam funcionalidade, durabilidade e design inteligente. Seus produtos são desenvolvidos para atender às demandas de projetos residenciais e comerciais, sempre com foco na satisfação do cliente final.',
    slogan: 'Componentes que transformam projetos',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Principal', url: '#' }
    ]
  },
  {
    name: 'Rubinettos',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=RUBINETTOS',
    description: 'Especializada em acessórios para móveis com foco em qualidade e acabamento superior.',
    longDescription: 'A Rubinettos é reconhecida pela excelência na fabricação de acessórios para móveis. Sua linha de produtos combina materiais de primeira linha, processos de produção rigorosos e design atemporal, oferecendo soluções que agregam valor e funcionalidade a qualquer projeto.',
    slogan: 'Qualidade que você pode ver e sentir',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Completo', url: '#' }
    ]
  },
  {
    name: 'Seccare',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=SECCARE',
    description: 'Soluções em ferragens e componentes para móveis com foco em praticidade e durabilidade.',
    longDescription: 'A Seccare oferece uma linha completa de ferragens e componentes que se destacam pela praticidade de instalação e durabilidade. Seus produtos são desenvolvidos para facilitar o trabalho dos profissionais do setor moveleiro, garantindo resultados de alta qualidade e satisfação do cliente final.',
    slogan: 'Simplicidade e eficiência para seu projeto',
    catalogUrl: '#', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Geral', url: '#' }
    ]
  }
];
