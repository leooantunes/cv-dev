import { getGithubRepos } from "@/lib/github";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { GithubIcon, StarIcon } from "./Icons";

const langColor: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  Dart: "#00b4ab",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

/** Repositórios do GitHub que ainda não estão em src/data/projects.ts */
export async function GithubRepos() {
  const repos = await getGithubRepos(profile.githubUser);
  const listed = new Set(
    projects.map((p) => p.repo?.toLowerCase().replace(/\/$/, "")).filter(Boolean),
  );
  const others = repos.filter((r) => !listed.has(r.html_url.toLowerCase())).slice(0, 6);

  if (others.length === 0) return null;

  return (
    <div className="mt-20">
      <h3 className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> gh repo list {profile.githubUser} --limit 6
      </h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((r) => (
          <li key={r.id}>
            <a
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex h-full flex-col rounded-lg border border-border bg-panel p-4 transition hover:border-accent/60"
            >
              <span className="flex items-center gap-2 font-mono text-sm text-accent-2">
                <GithubIcon className="size-4 text-muted" />
                {r.name}
              </span>
              <span className="mt-2 flex-1 text-sm text-muted">
                {r.description ?? "Sem descrição."}
              </span>
              <span className="mt-3 flex items-center gap-4 font-mono text-xs text-muted">
                {r.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ background: langColor[r.language] ?? "#7f8ea3" }}
                    />
                    {r.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <StarIcon className="size-3" /> {r.stargazers_count}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
