import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { TerminalTyping } from "./TerminalTyping";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const techs = new Set(projects.flatMap((p) => p.tags));

  return (
    <section id="home" className="relative overflow-hidden bg-grid pt-28 pb-20 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-accent">{"// olá, mundo 👋"}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Eu sou <span className="text-accent">{profile.nickname}</span>
          </h1>
          <p className="mt-4 font-mono text-lg text-accent-2 sm:text-xl">
            {"<"}
            {profile.role}
            {" />"}
          </p>
          <p className="mt-6 max-w-xl text-muted">
            Construo interfaces modernas e performáticas com React, Next.js e React Native.
            Direto de {profile.location.split("—")[0].trim()} para o mundo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition hover:brightness-110"
            >
              ver_projetos()
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-panel px-5 py-2.5 font-mono text-sm transition hover:border-accent hover:text-accent"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-panel px-5 py-2.5 font-mono text-sm transition hover:border-accent-2 hover:text-accent-2"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 font-mono">
            <Stat value={projects.length} label="projetos" />
            <Stat value={techs.size} label="tecnologias" />
            <Stat value="∞" label="café" />
          </dl>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-panel shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border bg-bg-soft px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5f56]" />
            <span className="size-3 rounded-full bg-[#ffbd2e]" />
            <span className="size-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-muted">leo@dev: ~ — zsh</span>
          </div>
          <div className="min-h-72 p-5">
            <TerminalTyping
              lines={[
                { cmd: "whoami", output: [profile.name] },
                { cmd: "cat cargo.txt", output: [profile.role] },
                { cmd: "echo $LOCAL", output: [profile.location] },
                {
                  cmd: "ls ~/skills",
                  output: ["react/  next/  typescript/  react-native/  node/"],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-panel/60 p-3">
      <dt className="sr-only">{label}</dt>
      <dd className="text-2xl font-bold text-accent">{value}</dd>
      <dd className="text-xs text-muted">{label}</dd>
    </div>
  );
}
