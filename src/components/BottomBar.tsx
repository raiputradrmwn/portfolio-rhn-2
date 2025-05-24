"use client";
import React, { useState } from "react";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconClipboardCheck,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BottomBar() {
  const [active, setActive] = useState("home"); // Home aktif default
  const links = [
    {
      key: "home",
      title: "Home",
      icon: <IconHome className="h-6 w-6" />,
      href: "#home",
    },
    {
      key: "career",
      title: "Career",
      icon: <IconBriefcase className="h-6 w-6" />,
      href: "#career",
    },
    {
      key: "projects",
      title: "Projects",
      icon: <IconClipboardCheck className="h-6 w-6" />,
      href: "#projects",
    },
    {
      key: "skills",
      title: "Skills",
      icon: <IconCode className="h-6 w-6" />,
      href: "#skills",
    },
    {
      key: "contact",
      title: "Contact",
      icon: <IconMail className="h-6 w-6" />,
      href: "#contact",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-max">
      <div className="flex items-center bg-black rounded-2xl px-5 py-2 shadow-2xl gap-4 border border-neutral-800">
        <div className="flex items-center gap-2">
          {links.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              title={item.title}
              onClick={() => setActive(item.key)}
              whileHover={{
                scale: 1.13,
                boxShadow: "0 4px 14px 0 rgba(0,0,0,0.18)",
              }}
              transition={{ type: "spring", stiffness: 350 }}
              className={
                active === item.key
                  ? "bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
                  : "text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition"
              }
              style={{
                boxShadow: active === item.key ? "0 4px 18px 0 rgba(0,0,0,0.24)" : undefined,
                margin: "0 2px",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="h-8 w-px bg-white/30 mx-2" />
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06, backgroundColor: "#a41111" }}
          whileTap={{ scale: 0.96 }}
          className="bg-red-700 hover:bg-red-800 text-white font-medium rounded-md px-4 py-2 text-sm transition"
        >
          Hire Me
        </motion.a>
      </div>
    </div>
  );
}
