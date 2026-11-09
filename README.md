# leo.dev — Portfólio

Portfólio com temática dev (terminal / editor de código) de **Leonardo Antunes**, Front-End Developer.
Feito com **Next.js 16 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4**.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Como adicionar um projeto

Abra [`src/data/projects.ts`](src/data/projects.ts) e adicione um objeto ao array `projects`:

```ts
{
  slug: "meu-projeto",
  title: "Meu Projeto",
  description: "Resumo curto do que o projeto faz.",
  tags: ["React", "TypeScript"],
  type: "web",            // "web" | "mobile" | "backend" | "fullstack"
  repo: "https://github.com/leooantunes/meu-projeto",
  demo: "https://meu-projeto.vercel.app", // opcional
  image: "/projects/meu-projeto.png",     // opcional, arquivo em /public/projects
  featured: true,         // aparece primeiro
  year: 2026,
},
```

Os filtros (web/mobile/...), a busca por tecnologia e os contadores do topo se atualizam sozinhos.

## Outras informações

- **Dados pessoais, sobre, stack, experiência e formação:** [`src/data/profile.ts`](src/data/profile.ts)
  - As seções **Experiência** e **Formação** só aparecem quando os arrays `experiences` / `education` têm itens — há um exemplo comentado no arquivo.
  - `socials.email` e `resumeUrl` (PDF em `/public`) são opcionais.
- **Repositórios do GitHub:** abaixo dos projetos, o site lista automaticamente até 6 repositórios públicos recentes que ainda não estão em `projects.ts` (cache de 1h). Opcionalmente defina `GITHUB_TOKEN` para evitar limite de requisições da API.

## Estrutura

```
src/
├── app/            layout, página e estilos globais
├── components/     seções (Hero, About, Stack, Projects, Contact...)
├── data/           profile.ts e projects.ts ← edite aqui
└── lib/github.ts   busca de repositórios na API do GitHub
```

## Deploy

O jeito mais simples é importar o repositório na [Vercel](https://vercel.com/new) — nenhuma configuração extra é necessária.
