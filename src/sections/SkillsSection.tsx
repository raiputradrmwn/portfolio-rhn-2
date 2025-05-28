'use client'

import { motion } from "framer-motion";
import {
  IconCode,
} from "@tabler/icons-react";
import SkillCard from "@/components/skill/SkillCard";
import { STACKS } from "@/lib/skill-icon";
import { JSX } from "react";
import MarqueeElement from "@/components/MarqueeElement";

export default function SkillsSection() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5);

  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
      >
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <IconCode size={28} />
          Skills
        </h2>
        <p className="mt-2 mb-8 text-gray-600">My coding skills</p>

        <div className="flex flex-col space-y-1">
          {Array.from({ length: 2 }, (_, index) => {
            const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
            return (
              <MarqueeElement
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                {slider.map(([name, icon]) => (
                  <SkillCard key={name} name={name} icon={icon} />
                ))}
              </MarqueeElement>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
