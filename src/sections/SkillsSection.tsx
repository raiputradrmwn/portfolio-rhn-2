"use client";
import { useMemo } from "react";
import MarqueeElement from "@/components/MarqueeElement";
import SkillCard from "@/components/skill/SkillCard";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { STACKS } from "@/lib/skill-icon";
import { skillGroups } from "@/lib/site";

export default function SkillsSection() {
  const stacks = useMemo(() => Object.entries(STACKS), []);

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading title="Skills" />
      </div>

      <Reveal className="[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        {[0, 1].map((row) => (
          <MarqueeElement key={row} direction={row === 0 ? "left" : "right"}>
            {(row === 0 ? stacks : [...stacks].reverse()).map(([name, icon]) => (
              <SkillCard key={name} name={name} icon={icon} />
            ))}
          </MarqueeElement>
        ))}
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06} className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold text-muted-foreground">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full bg-muted px-3 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
