"use client";
import { useEffect, useState } from "react";
import { IconBriefcase2, IconCode, IconHome, IconMail, IconSchool, IconUser } from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

const sections = [
  { id: "home", title: "Home", Icon: IconHome },
  { id: "about", title: "About", Icon: IconUser },
  { id: "experience", title: "Experience", Icon: IconBriefcase2 },
  { id: "skills", title: "Skills", Icon: IconCode },
  { id: "education", title: "Education", Icon: IconSchool },
  { id: "contact", title: "Contact", Icon: IconMail },
];

export default function FloatingNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const items = sections.map(({ id, title, Icon }) => ({
    title,
    href: `#${id}`,
    active: active === id,
    icon: <Icon className="h-full w-full" />,
  }));

  return (
    <div className="fixed bottom-5 right-5 z-50 md:left-0 md:right-0 md:flex md:justify-center">
      <FloatingDock items={items} />
    </div>
  );
}
