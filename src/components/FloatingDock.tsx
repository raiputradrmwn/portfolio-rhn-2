"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconClipboardCheck,
  IconMail,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-500" />,
      href: "#home",
    },
    {
      title: "Career",
      icon: <IconBriefcase className="h-full w-full text-gray-500" />,
      href: "#career",
    },
    {
      title: "Projects",
      icon: <IconClipboardCheck className="h-full w-full text-gray-500" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <IconCode className="h-full w-full text-gray-500" />,
      href: "#skills",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-gray-500" />,
      href: "#contact",
    },
  ];
  const handleScrollWithOffset = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = document.querySelector("nav")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center">
      <FloatingDock items={links} onLinkClick={handleScrollWithOffset} />
    </div>
  );
}
