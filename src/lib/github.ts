import { cacheLife } from "next/cache";

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

/**
 * Busca os repositórios públicos mais recentes do GitHub.
 * O resultado fica em cache por algumas horas. Se a API falhar,
 * retorna uma lista vazia e a seção simplesmente não aparece.
 */
export async function getGithubRepos(user: string): Promise<GithubRepo[]> {
  "use cache";
  cacheLife("hours");

  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`,
      { headers },
    );
    if (!res.ok) return [];
    const repos = (await res.json()) as GithubRepo[];
    return repos.filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== user.toLowerCase());
  } catch {
    return [];
  }
}
