"use client";

import { useEffect, useState } from "react";

type Line = { cmd: string; output: string[] };

export function TerminalTyping({ lines }: { lines: Line[] }) {
  // Quantos caracteres de comandos já foram "digitados" no total
  const total = lines.reduce((acc, l) => acc + l.cmd.length + 1, 0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (typed >= total) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(
      () => setTyped((n) => (reduced ? total : n + 1)),
      reduced ? 0 : typed === 0 ? 500 : 55,
    );
    return () => clearTimeout(t);
  }, [typed, total]);

  let remaining = typed;
  const rendered: React.ReactNode[] = [];
  for (let i = 0; i < lines.length; i++) {
    const { cmd, output } = lines[i];
    if (remaining <= 0) {
      if (i === 0 || rendered.length > 0) {
        rendered.push(<Prompt key={`p${i}`} text="" caret />);
      }
      break;
    }
    const shown = cmd.slice(0, remaining);
    const done = remaining > cmd.length;
    remaining -= cmd.length + 1;
    rendered.push(<Prompt key={`p${i}`} text={shown} caret={!done} />);
    if (done) {
      rendered.push(
        <div key={`o${i}`} className="mb-3 pl-4 text-fg/90">
          {output.map((o, j) => (
            <div key={j}>{o}</div>
          ))}
        </div>,
      );
      if (i === lines.length - 1) rendered.push(<Prompt key="last" text="" caret />);
    }
  }

  return (
    <div className="font-mono text-sm leading-relaxed" aria-live="off">
      {/* Conteúdo completo para leitores de tela */}
      <div className="sr-only">
        {lines.map((l) => (
          <p key={l.cmd}>{l.output.join(" ")}</p>
        ))}
      </div>
      <div aria-hidden>{rendered}</div>
    </div>
  );
}

function Prompt({ text, caret }: { text: string; caret?: boolean }) {
  return (
    <div>
      <span className="text-accent">leo@dev</span>
      <span className="text-muted">:</span>
      <span className="text-accent-2">~</span>
      <span className="text-muted">$ </span>
      <span>{text}</span>
      {caret && <span className="caret ml-0.5" />}
    </div>
  );
}
