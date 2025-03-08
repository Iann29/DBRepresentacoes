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
    ],
    representedSince: 2007
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
    ],
    representedSince: 2008
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
    ],
    representedSince: 2011
  },
  // Demais empresas
  {
    name: 'Portábille',
    logo: '/representadas/logoportabille.webp',
    description: 'Uma das mais tradicionais marcas de componentes para móveis do Brasil, oferecendo produtos que combinam qualidade, sofisticação e detalhes exclusivos.',
    longDescription: 'Fundada em Caxias do Sul, na serra gaúcha, a Portábille é reconhecida nacionalmente pela excelência em componentes para móveis. Especializada em perfis e vidros com acabamentos diferenciados, a empresa se destaca pela atenção aos detalhes e pelo compromisso com a qualidade. Seus produtos transformam móveis comuns em peças sofisticadas, criando ambientes que unem conforto, praticidade e elegância, conquistando a confiança dos clientes e o reconhecimento do mercado como referência em bom gosto.',
    slogan: 'A diferença está nos detalhes',
    catalogUrl: 'https://portabille.com.br/', // URL para o site já que não há catálogo
    website: 'https://portabille.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Visite o Site Oficial', url: 'https://portabille.com.br/', external: true }
    ],
    showCatalogs: false,
    representedSince: 2022
  },
  {
    name: 'Grossl',
    logo: '/representadas/logogrossl.webp',
    description: 'Especialistas em adesivos e abrasivos para indústrias e varejo, com marcas de referência mundial em inovação, qualidade e resistência.',
    longDescription: 'A Grossl é especialista em adesivos e abrasivos para indústrias, apoiada em conhecimento técnico e portfólio com marcas de referência mundial em inovação, qualidade e resistência. Para o varejo, são responsáveis por levar as marcas líderes mundiais em inovação e performance com qualidade industrial, auxiliando desde a escolha do mix até a exposição dos produtos.',
    slogan: 'FAÇA MAIS. FAÇA MELHOR.',
    catalogUrl: '/catalogos/grossl/catalogo_produtos.pdf', // URL para download do catálogo
    website: 'https://grossl.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo de Produtos', url: '/catalogos/grossl/catalogo_produtos.pdf' },
      { name: 'Catálogo de Lixas', url: '/catalogos/grossl/catalogo_lixasgrossl.pdf' },
      { name: 'Catálogo Titebond', url: '/catalogos/grossl/catalogo_titebond.pdf' }
    ],
    representedSince: 2020
  },
  {
    name: 'Guidini',
    logo: '/representadas/logoguidini.webp',
    description: 'Soluções inovadoras para mobiliário inteligente, garantindo qualidade e produtividade para a indústria moveleira.',
    longDescription: 'O propósito da Guidini é possibilitar a máxima otimização e aproveitamento da produção do mobiliário inteligente, garantindo qualidade e produtividade para seus clientes. A visão Mobili Intelligenti da Guidini foi construída com base na inovação, criatividade e simplicidade para atender a indústria moveleira e o mercado arquitetônico. Para a Guidini, padrões inteligentes e abertos constroem ecossistemas de parceria, possibilitando a criação de soluções para problemas.',
    slogan: 'Uma vida dedicada à inovações em mobiliário',
    catalogUrl: '/catalogos/guidini/catalogo_produtos.pdf', // URL para download do catálogo
    website: 'https://guidinielectric.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo de Produtos', url: '/catalogos/guidini/catalogo_produtos.pdf' }
    ],
    representedSince: 2020
  },
  {
    name: 'Rubinettos',
    logo: '/representadas/logorubinettos.webp',
    description: 'Especialista em misturadores de alto luxo para banheiros e cozinhas, combinando design, acabamentos únicos e funcionalidade.',
    longDescription: 'Fundada em 1994, a Rubinettos se especializou na comercialização de misturadores de alto luxo para banheiros e cozinhas. Com foco na inovação e novas tendências, a empresa desenvolve produtos que combinam experiência e confiabilidade para produzir metais com design, acabamentos únicos e refinados. Seus produtos refletem com precisão as necessidades dos clientes, aliando conscientização ambiental e sistemas inovadores que proporcionam solidez, segurança e qualidade extraordinária.',
    slogan: 'Vivendo pelo único, o inesperado.',
    catalogUrl: '/catalogos/rubinettos/catalogo_principal.pdf', // URL para download do catálogo
    website: 'https://www.rubinettos.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Principal', url: '/catalogos/rubinettos/catalogo_principal.pdf' }
    ],
    representedSince: 2023
  },
  {
    name: 'ComfortDoor',
    logo: '/representadas/logocomfortdoor.webp',
    description: 'Fabricante de acessórios para portas e janelas que cria produtos inovadores para o segmento de acessórios para casa e decoração.',
    longDescription: 'A ComfortDoor vai além de ser uma fabricante de acessórios para portas e janelas. Com 10 anos de mercado, a empresa está presente em todos os estados do Brasil, com milhares de clientes satisfeitos. Seu objetivo é criar produtos que ofereçam praticidade de forma inovadora para o segmento de acessórios para casa e decoração, surpreendendo na experiência de atendimento dos clientes através de valores presentes em cada um dos seus colaboradores e parceiros.',
    slogan: 'Inovação em acessórios para casa e decoração',
    catalogUrl: '/catalogos/comfortdoor/catalogo_principal.pdf', // URL para download do catálogo
    website: 'https://www.comfortdoor.com.br/', // URL do site da empresa
    catalogList: [
      { name: 'Catálogo Principal', url: '/catalogos/comfortdoor/catalogo_principal.pdf' }
    ],
    representedSince: 2016
  }
];
