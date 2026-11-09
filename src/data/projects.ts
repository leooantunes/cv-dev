/**
 * ==========================================================
 *  SEUS PROJETOS
 * ==========================================================
 * Para adicionar um projeto, copie um dos objetos abaixo e
 * preencha os campos. Os projetos aparecem na ordem do array.
 *
 *  - slug:        identificador único (sem espaços)
 *  - title:       nome do projeto
 *  - description: resumo curto (1–2 frases)
 *  - tags:        tecnologias usadas (usadas no filtro)
 *  - type:        "web" | "mobile" | "backend" | "fullstack"
 *  - repo:        link do repositório (opcional)
 *  - demo:        link do deploy / loja (opcional)
 *  - image:       imagem em /public (ex: "/projects/loveflix.png") (opcional)
 *  - featured:    true para destacar no topo
 *  - year:        ano do projeto
 */

export type ProjectType = "web" | "mobile" | "backend" | "fullstack";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  type: ProjectType;
  repo?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "5tack",
    title: "5TACK",
    description:
      "App mobile de fantasy de Counter-Strike 2: escale 5 jogadores profissionais com orçamento virtual e pontue com o desempenho real deles. Monorepo com domínio compartilhado entre app e API.",
    tags: ["React Native", "Expo", "TypeScript", "Node.js", "Monorepo"],
    type: "fullstack",
    repo: "https://github.com/leooantunes/5TACK",
    featured: true,
    year: 2026,
  },
  {
    slug: "loveflix",
    title: "Loveflix",
    description:
      "Ajuda casais a decidirem lanche, filme e sobremesa da noite com um sorteio estilo caça-níquel e gera um pôster em formato story para compartilhar.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    type: "web",
    repo: "https://github.com/leooantunes/Loveflix",
    featured: true,
    year: 2026,
  },
  {
    slug: "amor-match",
    title: "Amor Match",
    description:
      "App romântico de compatibilidade para casais, com front-end em React e API em Node.",
    tags: ["React", "Zustand", "React Query", "Tailwind CSS", "Node.js", "TypeScript"],
    type: "fullstack",
    repo: "https://github.com/leooantunes/amor-match",
    featured: true,
    year: 2026,
  },
  {
    slug: "petmatch",
    title: "PetMatch",
    description:
      "App mobile feito com Expo e autenticação via Google e Apple (Firebase Authentication).",
    tags: ["React Native", "Expo", "TypeScript", "Firebase"],
    type: "mobile",
    repo: "https://github.com/leooantunes/petmatch",
    featured: true,
    year: 2026,
  },
  {
    slug: "couple-todo-app",
    title: "Couple Todo",
    description:
      "App web moderno para casais gerenciarem listas de atividades juntos, com tema romântico.",
    tags: ["React", "TypeScript"],
    type: "web",
    repo: "https://github.com/leooantunes/couple-todo-app",
    year: 2026,
  },
  {
    slug: "animes",
    title: "Animes",
    description: "App de animes desenvolvido em Flutter.",
    tags: ["Flutter", "Dart"],
    type: "mobile",
    repo: "https://github.com/leooantunes/Animes",
    year: 2024,
  },
  {
    slug: "rest-springboot-java",
    title: "REST API Spring Boot",
    description: "API REST construída com Java e Spring Boot.",
    tags: ["Java", "Spring Boot", "REST"],
    type: "backend",
    repo: "https://github.com/leooantunes/rest-springboot-java",
    year: 2024,
  },
];
