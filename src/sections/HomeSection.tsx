"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconDownload, IconMapPin } from "@tabler/icons-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/lib/site";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* grid halus yang memudar di tepi */}

      {/* grid halus yang memudar di tepi */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <IconMapPin size={14} />
            {site.location}
          </motion.div>

          <motion.h1 variants={item} className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Raihan Putra
            <br />
            <span className="text-muted-foreground">Darmawan.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-base font-medium sm:text-lg">
            {site.role}
          </motion.p>

          <motion.p variants={item} className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5"
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
            <div className="ml-1 flex items-center gap-1">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <FaLinkedin size={20} />
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted">
            <Image
              src="/images/profile.webp"
              alt="Portrait of Raihan Putra Darmawan"
              fill
              sizes="(min-width: 1024px) 340px, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
