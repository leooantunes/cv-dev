type Props = {
  index: string;
  file: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ index, file, title, subtitle }: Props) {
  return (
    <header className="mb-10">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">{index}.</span> <span className="text-accent-2">~/</span>
        {file}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
        {!/[?!.]$/.test(title) && <span className="text-accent">;</span>}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </header>
  );
}
