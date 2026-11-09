/**
 * Informações pessoais exibidas no portfólio.
 * Edite este arquivo para atualizar seus dados.
 */

export type Experience = {
  role: string;
  company: string;
  period: string; // ex: "jan 2023 — atual"
  location?: string;
  description?: string;
  stack?: string[];
};

export type Education = {
  course: string;
  institution: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer?: string;
  url?: string;
};

export const profile = {
  name: "Leonardo Antunes",
  nickname: "Léo Antunes",
  role: "React & React Native Developer",
  headline: "Front-end · Apps Mobile e Web · Foco em Performance e Experiência do Usuário",
  // Exibido no topo como "anos de experiência" — atualize quando quiser
  yearsOfExperience: "6+",
  location: "Aracaju, Sergipe — Brasil",
  githubUser: "leooantunes",
  // Texto da seção "sobre". Cada item vira um parágrafo.
  about: [
    "Desenvolvedor Front-end com foco em construção de interfaces modernas, performáticas e centradas no usuário.",
    "Atuo com React.js e React Native, desenvolvendo aplicações web e mobile com atenção à experiência do usuário (UX), organização de código e boas práticas de desenvolvimento.",
    "Tenho interesse em transformar ideias em produtos reais, criando interfaces intuitivas, responsivas e eficientes. Busco constantemente evoluir minhas habilidades em JavaScript, TypeScript e no ecossistema React.",
  ],
  socials: {
    github: "https://github.com/leooantunes",
    linkedin: "https://www.linkedin.com/in/leooantunes/",
    email: "leoantunes-n@outlook.com", // deixe vazio para ocultar
  },
  // Caminho de um PDF em /public (ex: "/curriculo.pdf") — deixe vazio para ocultar
  resumeUrl: "",
};

export const stack: { group: string; items: string[] }[] = [
  {
    group: "frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "AngularJS", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    group: "mobile",
    items: ["React Native", "Expo", "Flutter", "Dart"],
  },
  {
    group: "state & data",
    items: ["Redux", "Context API", "Zustand", "React Query", "APIs REST"],
  },
  {
    group: "backend",
    items: ["Node.js", "Java", "Spring Boot", "C#"],
  },
  {
    group: "tools",
    items: ["Git", "GitHub", "Firebase", "Figma"],
  },
];

/**
 * Experiências profissionais (copie do seu LinkedIn).
 * A seção só aparece se houver pelo menos um item.
 */
export const experiences: Experience[] = [
  {
    role: "Engenheiro de Software Sênior",
    company: "Zallpy Digital",
    period: "ago 2026 — atual",
  },
  {
    role: "Desenvolvedor Front-End",
    company: "CWI Software",
    period: "ago 2021 — fev 2026",
    location: "Aracaju, SE",
  },
  {
    role: "Desenvolvedor Front-End",
    company: "Stefanini Brasil",
    period: "abr 2021 — ago 2021",
  },
  {
    role: "Desenvolvedor Front-End",
    company: "Protech Solutions — Consultoria & Sistemas",
    period: "out 2020 — abr 2021",
    location: "Brasil",
  },
  {
    role: "Estagiário Front-End",
    company: "Protech Solutions — Consultoria & Sistemas",
    period: "mar 2020 — set 2020",
    location: "Aracaju, SE",
  },
  {
    role: "Bolsista CNPq",
    company: "Universidade Federal de Sergipe — UFS",
    period: "ago 2018 — jul 2019",
    location: "São Cristóvão, SE",
    description:
      "Bolsa CNPq para desenvolvimento de aplicativo de funções sonoras baseadas no software Matlab.",
  },
  {
    role: "Desenvolvedor Front-End Angular",
    company: "SofTeam | Empresa Júnior de Computação",
    period: "abr 2015 — set 2016",
    location: "Aracaju, SE",
    stack: ["AngularJS"],
  },
];

/** Formação acadêmica. A seção só aparece se houver pelo menos um item. */
export const education: Education[] = [
  {
    course: "Ciência da Computação",
    institution: "Universidade Federal de Sergipe",
    period: "2013 — 2018",
  },
];

/** Certificações. A seção só aparece se houver pelo menos um item. */
export const certifications: Certification[] = [{ name: "Flutter Essencial" }];
