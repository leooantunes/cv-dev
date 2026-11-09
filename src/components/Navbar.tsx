"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "home.tsx", color: "text-accent-2" },
  { href: "#sobre", label: "sobre.md", color: "text-yellow" },
  { href: "#stack", label: "stack.json", color: "text-orange" },
  { href: "#projetos", label: "projetos.ts", color: "text-accent-2" },
  { href: "#experiencia", label: "experiencia.log", color: "text-yellow" },
  { href: "#contato", label: "contato.sh", color: "text-accent" },
];

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="font-mono text-sm font-semibold text-fg">
          <span className="text-accent">&lt;</span>leo
          <span className="text-accent">.</span>dev
          <span className="text-accent"> /&gt;</span>
        </a>

        <ul className="hidden h-full items-stretch md:flex">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="flex">
                <a
                  href={l.href}
                  className={`flex items-center gap-2 border-x border-transparent px-4 font-mono text-xs transition-colors ${
                    isActive
                      ? "border-border border-t-2 border-t-accent bg-panel text-fg"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  <span className={l.color}>●</span>
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="font-mono text-sm text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "[ fechar ]" : "[ menu ]"}
        </button>
      </div>

      {open && (
        <ul id="mobile-menu" className="border-t border-border bg-bg px-4 py-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 font-mono text-sm text-muted hover:text-fg"
              >
                <span className={l.color}>●</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
