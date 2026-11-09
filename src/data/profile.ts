/**
 * Informações pessoais exibidas no portfólio.
 * Edite este arquivo para atualizar seus dados.
 */

export type Experience = {
  role: string;
  company: string;
  period: string; // ex: "jan 2023 — atual"
  location?: string;
  description: string;
  stack?: string[];
};

export type Education = {
  course: string;
  institution: string;
  period: string;
};

export const profile = {
  name: "Leonardo Antunes",
  nickname: "Léo Antunes",
  role: "Front-End Developer",
  location: "Aracaju, Sergipe — Brasil",
  githubUser: "leooantunes",
  // Texto da seção "sobre". Cada item vira um parágrafo.
  about: [
    "Oi! Me chamo Léo Antunes, sou desenvolvedor Front-End apaixonado por criar interfaces bonitas, rápidas e fáceis de usar.",
    "Trabalho principalmente com o ecossistema JavaScript/TypeScript — React, Next.js e React Native — e também me aventuro no back-end com Node.js e Java (Spring Boot).",
    "Gosto de projetos com arquitetura bem pensada, código limpo e aquela atenção aos detalhes que faz a experiência do usuário brilhar.",
  ],
  socials: {
    github: "https://github.com/leooantunes",
    linkedin: "https://www.linkedin.com/in/leooantunes/",
    email: "", // ex: "voce@email.com" — deixe vazio para ocultar
  },
  // Caminho de um PDF em /public (ex: "/curriculo.pdf") — deixe vazio para ocultar
  resumeUrl: "",
};

export const stack: { group: string; items: string[] }[] = [
  {
    group: "frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    group: "mobile",
    items: ["React Native", "Expo", "Flutter", "Dart"],
  },
  {
    group: "state & data",
    items: ["Redux", "Zustand", "React Query"],
  },
  {
    group: "backend",
    items: ["Node.js", "Java", "Spring Boot", "C#", "REST APIs"],
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
  // {
  //   role: "Desenvolvedor Front-End",
  //   company: "Empresa X",
  //   period: "jan 2023 — atual",
  //   location: "Remoto",
  //   description: "Desenvolvimento de interfaces em React e Next.js...",
  //   stack: ["React", "TypeScript", "Next.js"],
  // },
];

/** Formação acadêmica. A seção só aparece se houver pelo menos um item. */
export const education: Education[] = [
  // { course: "Sistemas de Informação", institution: "Universidade X", period: "2018 — 2022" },
];
