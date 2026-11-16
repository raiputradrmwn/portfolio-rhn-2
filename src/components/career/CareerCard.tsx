"use client";
import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  logo?: string;
  company: string;
  position: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  index: number;
}

function initials(company: string) {
  return company
    .replace(/^PT\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function CareerCard({ logo, company, position, type, period, description, highlights, index }: CareerCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal delay={Math.min(index, 4) * 0.05} className="relative pl-10 sm:pl-0">
      <div className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-10">
        <div className="pt-1 text-sm text-muted-foreground">
          <span className="font-mono">{period}</span>
        </div>

        <div
          className={cn(
            "relative rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:shadow-black/5",
            open && "shadow-xl shadow-black/5"
          )}
        >
          <span className="absolute -left-10 top-7 h-3 w-3 rounded-full border-2 border-background bg-brand ring-4 ring-muted sm:-left-[46px]" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="w-full rounded-3xl p-6 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-white">
                {logo ? (
                  <Image src={logo} alt={`${company} logo`} width={40} height={40} className="h-9 w-9 object-contain" />
                ) : (
                  <span className="text-sm font-bold text-neutral-700">{initials(company)}</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug">{position}</h3>
                <p className="text-sm text-muted-foreground">
                  {company}
                  {type && <span> · {type}</span>}
                </p>
              </div>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform duration-300",
                  open && "rotate-180 border-brand bg-brand text-brand-foreground"
                )}
                aria-hidden
              >
                <IconChevronDown size={16} />
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
            {!open && <span className="mt-3 inline-block text-xs font-medium text-foreground/70">Show details</span>}
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 border-t border-border px-6 pb-6 pt-5">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
