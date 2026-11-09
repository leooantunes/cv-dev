import Image from "next/image";
import type { Project } from "@/data/projects";
import { ExternalIcon, GithubIcon } from "./Icons";

const typeColor: Record<Project["type"], string> = {
  web: "text-accent-2 border-accent-2/40",
  mobile: "text-purple border-purple/40",
  backend: "text-orange border-orange/40",
  fullstack: "text-yellow border-yellow/40",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-panel transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5">
      {project.image ? (
        <div className="relative aspect-video overflow-hidden border-b border-border">
          <Image
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center border-b border-border bg-bg-soft bg-grid font-mono">
          <span className="px-6 text-center text-2xl font-bold text-muted/60 transition group-hover:text-accent">
            {"{ "}
            {project.title}
            {" }"}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 font-mono text-xs">
          <span className={`rounded border px-2 py-0.5 ${typeColor[project.type]}`}>
            {project.type}
          </span>
          <span className="text-muted">{project.year}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-fg">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
          {project.tags.map((t) => (
            <li key={t} className="rounded bg-bg px-2 py-0.5 text-accent/90">
              #{t}
            </li>
          ))}
        </ul>

        {(project.repo || project.demo) && (
          <div className="mt-5 flex gap-4 border-t border-border pt-4 font-mono text-sm">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-accent"
              >
                <GithubIcon className="size-4" /> código
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-accent-2"
              >
                <ExternalIcon className="size-4" /> demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
