"use client";
import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fade + slide halus saat elemen masuk layar. MotionConfig (reducedMotion="user") mematikannya otomatis. */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-border pb-5">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
        <span className="text-brand">.</span>
      </h2>
      {note && <p className="text-sm text-muted-foreground">{note}</p>}
    </Reveal>
  );
}
