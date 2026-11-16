"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IconArrowUpRight, IconDownload, IconMapPin } from "@tabler/icons-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;
// Semuanya sesuai CV: frontend, backend Go, lalu support production di Kubernetes.
const WORDS = ["build interfaces", "write Go APIs", "monitor clusters", "debug production"];

const facts = [
  { label: "Focus", value: "Kubernetes, CI/CD, monitoring" },
  { label: "Built with", value: "Next.js, Go, PostgreSQL" },
  { label: "Studying", value: "M.Eng. Electrical Engineering, Telkom University" },
];

/**
 * Nama: huruf naik satu per satu saat load, lalu saat kursor lewat
 * huruf di sekitarnya terangkat seperti gelombang.
 */
function WaveLine({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const reduce = useReducedMotion();
  return (
    <span className={`block overflow-hidden pb-[0.1em] ${className ?? ""}`} aria-hidden onMouseLeave={() => setHover(null)}>
      {text.split("").map((ch, i) => {
        const d = hover === null ? 99 : Math.abs(hover - i);
        const lift = reduce ? 0 : Math.max(0, 1 - d / 3) * -0.14;
        return (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.035 }}
            onMouseEnter={() => setHover(i)}
          >
            <motion.span
              className="inline-block"
              animate={{ y: `${lift}em` }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          </motion.span>
        );
      })}
    </span>
  );
}

/** Kata yang berganti; ukuran, tinggi baris dan ketebalan sama dengan kalimatnya. */
function RotatingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-block overflow-hidden align-top">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={WORDS[i]}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-block text-foreground"
        >
          {WORDS[i]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Latar: garis scan sekali saat load, lalu "paket" cahaya yang berjalan di jalur grid. */
const BEAMS = [
  { dir: "h", line: 3, delay: 1.2, dur: 6 },
  { dir: "h", line: 8, delay: 4.5, dur: 7.5 },
  { dir: "h", line: 12, delay: 2.6, dur: 6.5 },
  { dir: "v", line: 4, delay: 2.0, dur: 5.5 },
  { dir: "v", line: 15, delay: 5.2, dur: 6 },
  { dir: "v", line: 22, delay: 3.4, dur: 7 },
] as const;

function GridMotion() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_40%,transparent_100%)]">
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/60 to-transparent"
        initial={{ top: "0%", opacity: 1 }}
        animate={{ top: "100%", opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.1 }}
      />
      {BEAMS.map((b, k) =>
        b.dir === "h" ? (
          <motion.span
            key={k}
            className="absolute h-px w-28 bg-gradient-to-r from-transparent via-foreground/70 to-transparent"
            style={{ top: b.line * 56 }}
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
          />
        ) : (
          <motion.span
            key={k}
            className="absolute h-28 w-px bg-gradient-to-b from-transparent via-foreground/70 to-transparent"
            style={{ left: b.line * 56 }}
            initial={{ top: "-15%" }}
            animate={{ top: "110%" }}
            transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
          />
        )
      )}
    </div>
  );
}

/** Jam lokal Tangerang (WIB). */
function LocalTime() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" }).format(new Date());
    setNow(fmt());
    const t = setInterval(() => setNow(fmt()), 15_000);
    return () => clearInterval(t);
  }, []);
  return <span className="tabular-nums">{now ? `${now} WIB` : "WIB"}</span>;
}

export default function HomeSection() {
  const ref = useRef<HTMLElement>(null);

  // Spotlight: grid lebih terang di sekitar kursor.
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  const gridBg =
    "bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px]";

  return (
    <section
      id="home"
      ref={ref}
      className="group/hero relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 [--mx:50%] [--my:35%] sm:pt-32"
    >
      {/* grid dasar */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 ${gridBg} [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_40%,transparent_100%)]`}
      />
      <GridMotion />
      {/* grid terang mengikuti kursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.35)_1px,transparent_1px)] bg-[size:56px_56px] opacity-0 transition-opacity duration-500 [mask-image:radial-gradient(260px_circle_at_var(--mx)_var(--my),#000,transparent_70%)] group-hover/hero:opacity-100"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-start gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <IconMapPin size={14} />
            {site.location}
            <span className="h-3 w-px bg-border" />
            <LocalTime />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{site.role}</span>
        </motion.div>

        <h1 className="mt-6 text-[clamp(3rem,11.5vw,9rem)] font-bold leading-[0.92] tracking-[-0.045em]">
          <span className="sr-only">Raihan Putra Darmawan</span>
          <WaveLine text="Raihan Putra" delay={0.1} />
          <span className="flex items-end">
            <WaveLine text="Darmawan" delay={0.45} className="text-muted-foreground" />
            <motion.span
              aria-hidden
              className="mb-[0.12em] ml-[0.04em] inline-block h-[0.16em] w-[0.16em] rounded-full bg-foreground motion-safe:animate-[pulse_2.4s_ease-in-out_infinite]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.95 }}
            />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
          className="mt-12 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I&apos;ve built frontends in Next.js and backends in Go. These days I support production apps on Kubernetes. I <RotatingWord />
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View experience
                <IconArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                <IconDownload size={16} /> Download CV
              </a>
              <div className="flex items-center gap-1">
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <FaLinkedin size={20} />
                </a>
                <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          <dl className="divide-y divide-border text-sm sm:text-base">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 1 + i * 0.08 }}
                className="group/row grid grid-cols-[110px_1fr] gap-4 py-3 first:pt-0 sm:grid-cols-[130px_1fr]"
              >
                <dt className="text-muted-foreground transition-colors group-hover/row:text-foreground">{f.label}</dt>
                <dd className="font-medium transition-transform duration-300 group-hover/row:translate-x-1">{f.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* scroll cue: garis tipis yang mengalir */}
      <div aria-hidden className="absolute bottom-8 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-border lg:block">
        <span className="block h-1/2 w-full bg-foreground motion-safe:animate-[scrollcue_1.8s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
