"use client";
import { useMemo } from "react";
import MarqueeElement from "@/components/MarqueeElement";
import SkillCard from "@/components/skill/SkillCard";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { STACKS } from "@/lib/skill-icon";

export default function SkillsSection() {
  const rows = useMemo(() => {
    const all = Object.entries(STACKS);
    const half = Math.ceil(all.length / 2);
    return [all.slice(0, half), all.slice(half)];
  }, []);

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8">
      <SectionHeading title="Skills" />

      {/* marquee tetap di dalam lebar konten, tepinya memudar */}
      <Reveal className="flex flex-col space-y-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        {rows.map((items, row) => (
          <MarqueeElement key={row} direction={row === 0 ? "left" : "right"}>
            {items.map(([name, icon]) => (
              <SkillCard key={name} name={name} icon={icon} />
            ))}
          </MarqueeElement>
        ))}
      </Reveal>
    </section>
  );
}
