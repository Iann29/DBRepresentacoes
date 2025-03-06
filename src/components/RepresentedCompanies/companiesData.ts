import { CompanyData } from './types';

// Dados das empresas representadas
export const allCompanies: CompanyData[] = [
  // As três primeiras empresas sempre aparecem primeiro na ordem
  {
    name: 'Zen',
    logo: '/representadas/logozen.webp',
    description: 'Referência no mercado de puxadores, maçanetas e acessórios para casa e banho. Produtos que combinam sofisticação, funcionalidade e acabamento impecável.',
    longDescription: 'Com mais de 20 anos de inovação e excelência, a Zen Design é referência no mercado de puxadores, maçanetas e acessórios para casa e banho. Inspirada na harmonia e no design sofisticado, a marca transforma ambientes com produtos de alta qualidade e acabamento impecável. Cada peça é desenvolvida para unir estética e funcionalidade, proporcionando mais elegância e personalidade aos espaços.',
    slogan: 'Sofisticação que transforma ambientes',
    catalogUrl: 'https://www.zendesign.com.br/catalogos', // URL para download do catálogo
    website: 'https://www.zendesign.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogos no Site Oficial', url: 'https://www.zendesign.com.br/catalogos', external: true }
    ]
  },
  {
    name: 'Rometal',
    logo: '/representadas/logorometal.webp',
    description: 'Referência em produtos metálicos de alta qualidade e durabilidade. Soluções completas para projetos que exigem resistência e acabamento premium.',
    longDescription: 'Fundada em 1983, a Rometal é referência na fabricação de sistemas deslizantes, perfis de alumínio e acessórios que valorizam móveis e espaços contemporâneos. Com foco em inovação, tecnologia e design, a empresa oferece soluções que proporcionam conforto e bem-estar, transformando ambientes com excelência e confiabilidade.',
    slogan: 'Qualidade que você pode sentir',
    catalogUrl: '/catalogos/rometal/catalogo_produtos.pdf', // URL para download do catálogo
    website: 'https://www.rometal.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo de Produtos', url: '/catalogos/rometal/catalogo_produtos.pdf' },
      { name: 'Portfólio Alumínio', url: '/catalogos/rometal/portfolio_aluminio.pdf' }
    ]
  },
  {
    name: 'Häfele',
    logo: '/representadas/logohafele.webp',
    description: 'Líder mundial em ferragens e sistemas de fechamento para móveis. Produtos alemães com tecnologia de ponta e design funcional.',
    longDescription: 'Häfele é uma multinacional alemã fundada em 1923, referência global no fornecimento de ferragens para móveis, construção civil e sistemas eletrônicos de controle de acesso. Com presença em mais de 150 países, a marca se destaca por oferecer soluções inovadoras que combinam design, funcionalidade e qualidade alemã, transformando espaços com eficiência e sofisticação.',
    slogan: 'Engenharia alemã para seu projeto',
    catalogUrl: 'https://www.hafele.com.br/pt/', // URL para download do catálogo
    website: 'https://www.hafele.com.br/pt/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Moveleiro', url: 'https://oneweb-prod.hafele.com/prod-q-rg70/web/WFS/Haefele-HBR-Site/pt_BR/-/EUR/Static-View/pdfcatalog/pt_BR/catalogs/index.php?catalog=OGH_FF2024', external: true },
      { name: 'Catálogo Arquitetura', url: 'https://oneweb-prod.hafele.com/prod-q-rg70/web/WFS/Haefele-HBR-Site/pt_BR/-/EUR/Static-View/pdfcatalog/pt_BR/catalogs/index.php?catalog=OGH_AH2024', external: true }
    ]
  },
  // Demais empresas
  {
    name: 'Grossl',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=GROSSL',
    description: 'Produtos inovadores para o mercado moveleiro com foco em praticidade e design moderno.',
    longDescription: 'A Grossl desenvolve soluções criativas para o setor moveleiro, com produtos que aliam praticidade, durabilidade e design contemporâneo. A empresa se destaca pela capacidade de entender as tendências do mercado e oferecer componentes que agregam valor aos projetos de seus clientes.',
    slogan: 'Soluções que fazem a diferença',
    catalogUrl: '/catalogos/grossl/catalogo_completo.pdf', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Completo', url: '/catalogos/grossl/catalogo_completo.pdf' }
    ]
  },
  {
    name: 'Guidini',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=GUIDINI',
    description: 'Soluções criativas para projetos de móveis que valorizam a funcionalidade e o acabamento.',
    longDescription: 'A Guidini é especializada em componentes e acessórios que trazem funcionalidade e acabamento refinado para móveis. Com anos de experiência no mercado, a empresa desenvolve produtos que ajudam a resolver desafios de design e otimização de espaço em diversos ambientes.',
    slogan: 'Excelência em cada detalhe',
    catalogUrl: '/catalogos/guidini/catalogo_geral.pdf', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Geral', url: '/catalogos/guidini/catalogo_geral.pdf' }
    ]
  },
  {
    name: 'Portábille',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=PORTÁBILLE',
    description: 'Componentes de alta qualidade para seu projeto, com ênfase em soluções práticas e duradouras.',
    longDescription: 'A Portábille se destaca no fornecimento de componentes para móveis que combinam funcionalidade, durabilidade e design inteligente. Seus produtos são desenvolvidos para atender às demandas de projetos residenciais e comerciais, sempre com foco na satisfação do cliente final.',
    slogan: 'Componentes que transformam projetos',
    catalogUrl: '/catalogos/portabil/catalogo_principal.pdf', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Principal', url: '/catalogos/portabil/catalogo_principal.pdf' }
    ]
  },
  {
    name: 'Rubinettos',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=RUBINETTOS',
    description: 'Especializada em acessórios para móveis com foco em qualidade e acabamento superior.',
    longDescription: 'A Rubinettos é reconhecida pela excelência na fabricação de acessórios para móveis. Sua linha de produtos combina materiais de primeira linha, processos de produção rigorosos e design atemporal, oferecendo soluções que agregam valor e funcionalidade a qualquer projeto.',
    slogan: 'Qualidade que você pode ver e sentir',
    catalogUrl: '/catalogos/rubinettos/catalogo_completo.pdf', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Completo', url: '/catalogos/rubinettos/catalogo_completo.pdf' }
    ]
  },
  {
    name: 'Seccare',
    logo: 'https://via.placeholder.com/400x200/f5f5f5/333333?text=SECCARE',
    description: 'Soluções em ferragens e componentes para móveis com foco em praticidade e durabilidade.',
    longDescription: 'A Seccare oferece uma linha completa de ferragens e componentes que se destacam pela praticidade de instalação e durabilidade. Seus produtos são desenvolvidos para facilitar o trabalho dos profissionais do setor moveleiro, garantindo resultados de alta qualidade e satisfação do cliente final.',
    slogan: 'Simplicidade e eficiência para seu projeto',
    catalogUrl: '/catalogos/seccare/catalogo_geral.pdf', // URL para download do catálogo
    website: '#', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Geral', url: '/catalogos/seccare/catalogo_geral.pdf' }
    ]
  }
];
