"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
    >
      <IconSun size={18} className="hidden dark:block" />
      <IconMoon size={18} className="block dark:hidden" />
    </button>
  );
}
