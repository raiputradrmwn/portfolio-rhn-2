import { Reveal, SectionHeading } from "@/components/Reveal";

// Fakta non-pekerjaan dari CV + minat saat ini.
const stats = [
  { value: "4.00", label: "Master's GPA, Electrical Engineering" },
  { value: "3.69", label: "Bachelor's GPA, Telecommunication Engineering" },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading title="About" />
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="rounded-3xl border border-border bg-card p-7 sm:p-9 lg:col-span-2">
          <p className="text-lg leading-relaxed sm:text-xl">
            I studied Telecommunication Engineering at Telkom University and I&apos;m now doing my Master&apos;s in Electrical Engineering there.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I started with frontend work in React, Next.js and Tailwind CSS, then wrote backend services in Go with PostgreSQL. Lately I&apos;m more on the operations side: Kubernetes, Grafana, ArgoCD and GitLab CI/CD. I like knowing how an app behaves after it ships, not only how it&apos;s built.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="flex flex-col justify-between rounded-3xl border border-border bg-card p-5">
              <span className="text-3xl font-bold tracking-tight sm:text-4xl">{s.value}</span>
              <span className="mt-3 text-xs leading-snug text-muted-foreground">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
