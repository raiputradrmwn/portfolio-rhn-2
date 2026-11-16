import { IconArrowUpRight, IconDownload, IconMail } from "@tabler/icons-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: <IconMail size={20} /> },
  { label: "LinkedIn", value: "in/raihanputrad", href: site.linkedin, icon: <FaLinkedin size={20} /> },
  { label: "GitHub", value: "raiputradrmwn", href: site.github, icon: <FaGithub size={20} /> },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-28 pt-24 sm:px-8">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-background sm:px-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(hsl(var(--background)/0.12)_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_70%)]"
        />
        <div className="relative">
          <p className="text-sm font-medium opacity-60">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl opacity-70">I&apos;m based in {site.location}. Email is the fastest way to reach me.</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}?subject=Hello%20Raihan`}
              className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              Send an email <IconArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
            >
              <IconDownload size={16} /> Download CV
            </a>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-background/15 px-4 py-4 transition-colors hover:bg-background/10"
                >
                  {l.icon}
                  <span className="min-w-0">
                    <span className="block text-xs opacity-60">{l.label}</span>
                    <span className="block truncate text-sm font-medium">{l.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
