import { profile, education } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-24">
      <SectionTitle index="01" file="sobre.md" title="Sobre mim" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed text-fg/85">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {education.length > 0 && (
            <div className="pt-6">
              <h3 className="font-mono text-sm text-accent">## formação</h3>
              <ul className="mt-3 space-y-3">
                {education.map((e) => (
                  <li key={e.course + e.institution} className="text-base">
                    <span className="font-semibold text-fg">{e.course}</span>
                    <span className="text-muted"> — {e.institution} · {e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* "Arquivo" de código com os dados */}
        <div className="overflow-hidden rounded-xl border border-border bg-panel font-mono text-sm">
          <div className="flex items-center justify-between border-b border-border bg-bg-soft px-4 py-2 text-xs text-muted">
            <span>
              <span className="text-accent-2">TS</span> leo.ts
            </span>
            <span>UTF-8</span>
          </div>
          <pre className="overflow-x-auto p-5 leading-7">
            <code>
              <Ln n={1}>
                <K>const</K> <V>leo</V> <span className="text-muted">=</span> {"{"}
              </Ln>
              <Ln n={2}>
                {"  "}nome: <S>&quot;{profile.name}&quot;</S>,
              </Ln>
              <Ln n={3}>
                {"  "}cargo: <S>&quot;{profile.role}&quot;</S>,
              </Ln>
              <Ln n={4}>
                {"  "}local: <S>&quot;{profile.location.split("—")[0].trim()}&quot;</S>,
              </Ln>
              <Ln n={5}>
                {"  "}foco: [<S>&quot;UI&quot;</S>, <S>&quot;UX&quot;</S>, <S>&quot;performance&quot;</S>],
              </Ln>
              <Ln n={6}>
                {"  "}aprendendo: <K>true</K>,
              </Ln>
              <Ln n={7}>
                {"  "}disponivel: <K>true</K>,
              </Ln>
              <Ln n={8}>{"};"}</Ln>
              <Ln n={9}> </Ln>
              <Ln n={10}>
                <K>export default</K> <V>leo</V>;
              </Ln>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function Ln({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="mr-5 w-5 shrink-0 select-none text-right text-muted/50">{n}</span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-purple">{children}</span>;
const V = ({ children }: { children: React.ReactNode }) => <span className="text-accent-2">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-accent">{children}</span>;
