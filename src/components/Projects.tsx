"use client";

import { useState } from "react";
import { projects, type ProjectType } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const filters: { value: "all" | ProjectType; label: string }[] = [
  { value: "all", label: "todos" },
  { value: "web", label: "web" },
  { value: "mobile", label: "mobile" },
  { value: "fullstack", label: "fullstack" },
  { value: "backend", label: "backend" },
];

export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectType>("all");
  const [query, setQuery] = useState("");

  const available = filters.filter(
    (f) => f.value === "all" || projects.some((p) => p.type === f.value),
  );

  const q = query.trim().toLowerCase();
  const visible = projects
    .filter((p) => filter === "all" || p.type === filter)
      .filter(
        (p) =>
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
      .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2 font-mono text-sm" role="group" aria-label="Filtrar por tipo">
          {available.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-md border px-3 py-1.5 transition ${
                filter === f.value
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-muted hover:text-fg"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 rounded-md border border-border bg-panel px-3 py-1.5 font-mono text-sm focus-within:border-accent">
          <span className="text-accent">$ grep</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="buscar tecnologia..."
            aria-label="Buscar projetos"
            className="w-full bg-transparent text-fg outline-none placeholder:text-muted/60 sm:w-48"
          />
        </label>
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-border p-10 text-center font-mono text-sm text-muted">
          0 resultados encontrados para &quot;{query}&quot; <span className="text-pink">¯\_(ツ)_/¯</span>
        </p>
      )}
    </>
  );
}
