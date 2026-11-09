import { stack } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Stack() {
  return (
    <section id="stack" className="border-y border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <SectionTitle
          index="02"
          file="stack.json"
          title="Tecnologias"
          subtitle="Ferramentas com as quais trabalho no dia a dia."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g) => (
            <div
              key={g.group}
              className="rounded-xl border border-border bg-panel p-5 font-mono text-sm transition hover:border-accent/50"
            >
              <p>
                <span className="text-orange">&quot;{g.group}&quot;</span>
                <span className="text-muted">: [</span>
              </p>
              <ul className="mt-2 flex flex-wrap gap-2 pl-4">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-border bg-bg px-2 py-1 text-xs text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-muted">]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
