import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 font-mono text-xs text-muted sm:flex-row">
        <p>
          <span className="text-accent">©</span> {profile.name}
        </p>
        <p>
          feito com <span className="text-accent-2">Next.js</span> +{" "}
          <span className="text-accent-2">Tailwind</span> e muito <span className="text-yellow">café</span>
        </p>
      </div>
    </footer>
  );
}
