import { profile, experiences } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export function Contact() {
  const links = [
    { label: "github", href: profile.socials.github, text: `github.com/${profile.githubUser}`, Icon: GithubIcon },
    { label: "linkedin", href: profile.socials.linkedin, text: "linkedin.com/in/leooantunes", Icon: LinkedinIcon },
    ...(profile.socials.email
      ? [{ label: "email", href: `mailto:${profile.socials.email}`, text: profile.socials.email, Icon: MailIcon }]
      : []),
  ];

  return (
    <section id="contato" className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <SectionTitle
          index={experiences.length > 0 ? "05" : "04"}
          file="contato.sh"
          title="Vamos conversar?"
          subtitle="Estou aberto a novas oportunidades, freelas e boas conversas sobre tecnologia."
        />
        <div className="max-w-2xl overflow-hidden rounded-xl border border-border bg-panel font-mono text-sm">
          <div className="border-b border-border bg-bg px-4 py-2 text-xs text-muted">bash — contato.sh</div>
          <div className="space-y-4 p-5">
            <p>
              <span className="text-accent">$</span> ./contato.sh --listar
            </p>
            <ul className="space-y-3 pl-4">
              {links.map(({ label, href, text, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3"
                  >
                    <Icon className="size-4 text-muted group-hover:text-accent" />
                    <span className="w-20 text-orange">{label}</span>
                    <span className="text-muted">→</span>
                    <span className="text-accent-2 underline-offset-4 group-hover:underline">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
            {profile.resumeUrl && (
              <p>
                <span className="text-accent">$</span>{" "}
                <a href={profile.resumeUrl} download className="text-yellow hover:underline">
                  wget curriculo.pdf
                </a>
              </p>
            )}
            <p>
              <span className="text-accent">$</span> <span className="caret" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
