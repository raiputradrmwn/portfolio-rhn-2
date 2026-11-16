import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconMail } from "@tabler/icons-react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 pb-28 pt-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Logo className="h-6 w-auto text-foreground" />
          <span className="text-sm">© {new Date().getFullYear()} {site.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: `mailto:${site.email}`, label: "Email", icon: <IconMail size={18} /> },
            { href: site.linkedin, label: "LinkedIn", icon: <FaLinkedin size={18} /> },
            { href: site.github, label: "GitHub", icon: <FaGithub size={18} /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
