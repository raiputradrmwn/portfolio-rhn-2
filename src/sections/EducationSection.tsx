import { IconAward, IconSchool, IconUsers } from "@tabler/icons-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { certifications, education, organizations } from "@/lib/site";

function Row({ title, sub, period, detail }: { title: string; sub: string; period: string; detail?: string }) {
  return (
    <li className="border-t border-border py-5 first:border-t-0 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="font-semibold">{title}</h4>
        <span className="font-mono text-xs text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground">{sub}</p>
      {detail && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>}
    </li>
  );
}

export default function EducationSection() {
  const blocks = [
    {
      icon: <IconSchool size={20} />,
      title: "Education",
      rows: education.map((e) => ({ title: e.degree, sub: e.school, period: e.period, detail: e.detail })),
    },
    {
      icon: <IconAward size={20} />,
      title: "Courses & Certifications",
      rows: certifications.map((c) => ({ title: c.name, sub: c.issuer, period: c.period })),
    },
    {
      icon: <IconUsers size={20} />,
      title: "Organizations",
      rows: organizations.map((o) => ({ title: o.role, sub: o.name, period: o.period, detail: o.detail })),
    },
  ];

  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading title="Education" />
      <div className="grid gap-4 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.06} className="rounded-3xl border border-border bg-card p-6 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">{b.icon}</span>
              <h3 className="font-semibold">{b.title}</h3>
            </div>
            <ul>
              {b.rows.map((r) => (
                <Row key={r.title + r.period} {...r} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
