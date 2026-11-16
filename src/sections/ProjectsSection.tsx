import { IconArrowUpRight, IconLock } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { projectList } from "@/lib/project-data";

function Cover({ title, image }: { title: string; image?: string }) {
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={`Screenshot of ${title}`} className="h-full w-full object-cover" loading="lazy" />;
  }
  // Placeholder: ganti dengan screenshot asli lewat field `image` di project-data.ts
  return (
    <div className="relative grid h-full w-full place-items-center bg-muted">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] bg-[size:14px_14px]"
      />
      <span className="relative px-6 text-center text-2xl font-bold tracking-tight text-muted-foreground/80 transition-transform duration-500 group-hover:scale-105">
        {title}
      </span>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading title="Projects" />
      <div className="grid gap-5 md:grid-cols-2">
        {projectList.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : undefined}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
              <div className={i === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/9]"}>
                <Cover title={p.title} image={p.image} />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                  <span>{p.org}</span>
                  <span className="font-mono">{p.period}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{p.role}</p>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.stack.map((t) => (
                    <li key={t} className="rounded-full border border-border px-3 py-1 text-xs font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
                    >
                      Live site <IconArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                      <IconLock size={15} /> Link coming soon
                    </span>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      Source <IconArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
