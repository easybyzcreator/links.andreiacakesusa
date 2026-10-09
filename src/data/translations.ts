export type Language = 'pt' | 'en';

export interface Translations {
  tagline: string;
  heroPromise: string;
  heroPromiseHighlight1: string;
  heroPromiseHighlight2: string;
  proof1: string;
  proof2: string;
  proof3: string;
  appBlockPretitle: string;
  appBlockTitle: string;
  appBlockTitleLine1: string;
  appBlockTitleLine2: string;

  // Alunas Card
  alunaTag: string;
  alunaTitle: string;
  alunaText: string;
  alunaBtnTest: string;
  alunaBtnBuy: string;

  // Cliente Card
  clienteTag: string;
  clienteTitle: string;
  clienteSubtitle: string;
  clienteText: string;
  clienteBtnLine1: string;
  clienteBtnLine2: string;

  // Main Course
  mainCourseBadge: string;
  mainCourseBadgeHighlight: string;
  mainCourseTitle: string;
  mainCourseDesc: string;
  mainCourseStat1: string;
  mainCourseStat2: string;
  mainCourseCta: string;

  // Courses section
  coursesSectionTitle: string;
  coursesSearchPlaceholder: string;
  coursesSearchClear: string;
  coursesEmpty: string;
  coursesViewAll: string;
  onlineBadge: string;
  learnMoreCta: string;

  // Tool
  toolBadge: string;
  toolTitle: string;
  toolDesc: string;
  toolStat: string;
  toolCta: string;

  // About
  aboutBadge: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutStat1Year: string;
  aboutStat1Label: string;
  aboutStat2Year: string;
  aboutStat2Label: string;
  aboutExp: string;

  // Footer
  developedBy: string;
  footerLine1: string;
  footerLine2: string;
  footerLine3: string;
  footerLine4: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    tagline: 'Escola de Confeitaria & Negócios · EUA',
    heroPromise: 'Te ensino a empreender no ramo da',
    heroPromiseHighlight1: 'confeitaria artesanal nos EUA',
    heroPromiseHighlight2: 'em dólar mesmo começando do zero',
    proof1: '+4.000 alunas',
    proof2: '9 anos de cozinha',
    proof3: '+200 receitas testadas',
    appBlockPretitle: 'Lançamento',
    appBlockTitle: 'Aplicativo Exclusivo Andréia Cakes USA',
    appBlockTitleLine1: 'Aplicativo Exclusivo',
    appBlockTitleLine2: 'Andréia Cakes USA',

    // Imagem 2: tag alterada para OPORTUNIDADE ÚNICA
    alunaTag: 'OPORTUNIDADE ÚNICA',
    alunaTitle: 'Sou aluna / mentorada / seguidora',
    alunaText:
      'Chegou a hora de transformar o seu negócio de confeitaria! Tenha o seu próprio cardápio digital e sistema de pedidos personalizado com a metodologia da Andréia. Uma ferramenta feita para você conquistar muito mais autonomia, elevar o valor da sua marca e se posicionar com total autoridade perante os seus clientes. Chega de processos confusos: encante sua clientela e facilite a forma como eles encomendam com você.',
    alunaBtnBuy: 'Quero meu aplicativo',
    alunaBtnTest: 'Testar aplicativo na prática',

    // Imagem 4: texto e botão de 2 linhas
    clienteTag: 'ENCOMENDAS & CARDÁPIO OFICIAL',
    clienteTitle: 'Sou cliente',
    clienteSubtitle: 'Faça sua Encomenda pelo Aplicativo Oficial',
    clienteText:
      'Agora, todos os pedidos oficiais da Andréia são feitos diretamente pelo aplicativo dela. Escolha seus sabores favoritos, personalize sua encomenda e finalize o pedido em poucos cliques, com total segurança e comodidade.',
    clienteBtnLine1: 'Fazer Meu Pedido Agora',
    clienteBtnLine2: '(Acessar Cardápio)',

    mainCourseBadge: 'CURSO PRINCIPAL',
    mainCourseBadgeHighlight: '+4.000 alunas',
    mainCourseTitle: 'Os Segredos da Confeitaria nos EUA',
    mainCourseDesc:
      'O treinamento que pega você do absoluto zero e te leva a profissional lucrativa — com tudo adaptado à realidade de quem vive nos Estados Unidos.',
    mainCourseStat1: '90 videoaulas',
    mainCourseStat2: '100% online',
    mainCourseCta: 'Quero o curso principal',

    coursesSectionTitle: 'CURSOS & ESPECIALIZAÇÕES',
    coursesSearchPlaceholder: 'Buscar cursos (ex: Caseirinhos, Brigadeiro, Glúten...)',
    coursesSearchClear: 'Limpar',
    coursesEmpty: 'Nenhum curso encontrado para essa busca.',
    coursesViewAll: 'Ver todos os cursos',
    onlineBadge: '100% online',
    learnMoreCta: 'Saiba mais',

    toolBadge: 'FERRAMENTA',
    toolTitle: 'Planilha de Precificação',
    toolDesc:
      'Calcule o preço justo de cada doce e garanta seu lucro — pare de cobrar no chute.',
    toolStat: 'Planilha Automática',
    toolCta: 'Garantir Planilha',

    aboutBadge: 'QUEM É A ANDRÉIA',
    aboutTitle: 'Da cozinha para a liberdade financeira nos EUA.',
    aboutP1:
      'Como muitas brasileiras, cheguei aos Estados Unidos em 2017 cheia de vontade — e sem saber como transformar o talento na cozinha em renda.',
    aboutP2:
      'Errei, testei e adaptei cada receita à realidade daqui até criar um método que funciona de verdade. Hoje, vivo da confeitaria e já ajudei mais de 4.000 mulheres a fazerem o mesmo.',
    aboutStat1Year: '2017',
    aboutStat1Label: 'Mudou-se para os EUA e começou a confeitar',
    aboutStat2Year: 'Hoje',
    aboutStat2Label: '+4.000 alunas e +200 receitas exclusivas',
    aboutExp: 'anos de cozinha',

    developedBy: 'DESENVOLVIDO POR',
    footerLine1: '© 2026 Andréia Cakes USA',
    footerLine2: 'Escola de Confeitaria e Negócios',
    footerLine3: 'Todos os direitos reservados.',
    footerLine4: 'Feito com amor para confeiteiras nos EUA.',
  },

  en: {
    tagline: 'Bakery & Business School · USA',
    heroPromise: 'I teach you how to build a lucrative business in',
    heroPromiseHighlight1: 'artisan baking in the USA',
    heroPromiseHighlight2: 'earning in US dollars from scratch',
    proof1: '+4,000 students',
    proof2: '9 years in the kitchen',
    proof3: '+200 tested recipes',
    appBlockPretitle: 'New Launch',
    appBlockTitle: 'Exclusive App Andréia Cakes USA',
    appBlockTitleLine1: 'Exclusive App',
    appBlockTitleLine2: 'Andréia Cakes USA',

    alunaTag: 'EXCLUSIVE OPPORTUNITY',
    alunaTitle: 'I am a student / mentee / follower',
    alunaText:
      "It's time to transform your baking business! Get your own custom digital menu and order management system powered by Andréia's proven methodology. A tool built for you to gain autonomy, elevate your brand value, and stand out with total authority. No more confusing manual orders: delight your customers and make ordering seamless.",
    alunaBtnBuy: 'I want my app',
    alunaBtnTest: 'Test app in practice',

    clienteTag: 'OFFICIAL ORDERS & MENU',
    clienteTitle: 'I am a customer',
    clienteSubtitle: 'Place Your Order via Official App',
    clienteText:
      'Now, all official orders for Andréia are placed directly through her mobile app. Choose your favorite flavors, customize your celebration order, and finalize your purchase in just a few clicks with total convenience and safety.',
    clienteBtnLine1: 'Place My Order Now',
    clienteBtnLine2: '(Access Menu)',

    mainCourseBadge: 'FLAGSHIP COURSE',
    mainCourseBadgeHighlight: '+4,000 students',
    mainCourseTitle: 'Baking Secrets in the USA',
    mainCourseDesc:
      'The comprehensive training taking you from absolute zero to a profitable bakery business — tailored to ingredients and market realities in the USA.',
    mainCourseStat1: '90 video lessons',
    mainCourseStat2: '100% online',
    mainCourseCta: 'Enroll in flagship course',

    coursesSectionTitle: 'COURSES & SPECIALIZATIONS',
    coursesSearchPlaceholder: 'Search courses (e.g., Bundt cakes, Brigadeiro, Gluten-free...)',
    coursesSearchClear: 'Clear',
    coursesEmpty: 'No courses found for this search.',
    coursesViewAll: 'View all courses',
    onlineBadge: '100% online',
    learnMoreCta: 'Learn more',

    toolBadge: 'TOOL',
    toolTitle: 'Bakery Pricing Calculator',
    toolDesc:
      'Calculate the fair, profitable price for every dessert — stop guessing your margins.',
    toolStat: 'Automated Spreadsheet',
    toolCta: 'Get Spreadsheet',

    aboutBadge: 'MEET ANDRÉIA',
    aboutTitle: 'From the home kitchen to financial freedom in the USA.',
    aboutP1:
      'Like many immigrant women, I arrived in the United States in 2017 full of drive — yet unsure how to transform my passion in the kitchen into sustainable income.',
    aboutP2:
      'I tested, adapted recipes to local American ingredients, and developed a method that truly works. Today, I live from my baking craft and have helped over 4,000 women do the same.',
    aboutStat1Year: '2017',
    aboutStat1Label: 'Moved to the USA and started baking',
    aboutStat2Year: 'Today',
    aboutStat2Label: '+4,000 students & +200 exclusive recipes',
    aboutExp: 'years in the kitchen',

    developedBy: 'DEVELOPED BY',
    footerLine1: '© 2026 Andréia Cakes USA',
    footerLine2: 'Bakery & Business School',
    footerLine3: 'All rights reserved.',
    footerLine4: 'Made with love for bakers in the USA.',
  },
};
