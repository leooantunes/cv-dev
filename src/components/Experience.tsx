import { experiences } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  if (experiences.length === 0) return null;

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-24">
      <SectionTitle index="04" file="experiencia.log" title="Experiência" />
      <ol className="relative space-y-10 border-l border-border pl-8">
        {experiences.map((e) => (
          <li key={e.role + e.company + e.period} className="relative">
            <span className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-accent bg-bg" />
            <p className="font-mono text-xs text-muted">
              <span className="text-yellow">[{e.period}]</span>
              {e.location && <> · {e.location}</>}
            </p>
            <h3 className="mt-1 text-xl font-semibold">
              {e.role} <span className="text-accent">@ {e.company}</span>
            </h3>
            <p className="mt-2 max-w-3xl text-muted">{e.description}</p>
            {e.stack && (
              <ul className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
                {e.stack.map((s) => (
                  <li key={s} className="rounded bg-panel px-2 py-0.5 text-accent-2">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
