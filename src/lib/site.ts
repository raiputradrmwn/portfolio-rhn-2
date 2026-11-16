// Ganti NEXT_PUBLIC_SITE_URL di .env saat sudah deploy (dipakai untuk SEO, sitemap, OG).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const site = {
  name: "Raihan Putra Darmawan",
  shortName: "rd.",
  role: "Software Engineer, moving into DevOps & Cloud",
  tagline:
    "I've built frontends in Next.js and backends in Go. These days I support production apps on Kubernetes.",
  location: "Tangerang, Indonesia",
  email: "raihanrrdarmawan@gmail.com",
  linkedin: "https://www.linkedin.com/in/raihanputrad/",
  github: "https://github.com/raiputradrmwn",
  cv: "/cv/Raihan-Putra-Darmawan-CV.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  // { id: "projects", label: "Projects" }, // disembunyikan dulu
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Vue.js", "Shadcn UI"],
  },
  {
    title: "Backend & Data",
    items: ["Go", "Node.js", "Express.js", "Laravel", "PostgreSQL", "MySQL", "REST API", "WebSocket", "Postman"],
  },
  {
    title: "Ops & Cloud",
    items: ["Kubernetes (kubectl)", "Tencent Cloud (TKE, CLS, APM)", "Grafana", "ArgoCD", "GitLab CI/CD", "Linux", "Monitoring & Alerting", "Incident Management", "Root Cause Analysis"],
  },
  {
    title: "Mobile, IoT & Tools",
    items: ["Kotlin", "ESP32 / ESP8266", "Arduino UNO", "Git", "Figma"],
  },
];

export const education = [
  {
    school: "Telkom University",
    degree: "Master's Degree in Electrical Engineering",
    period: "2025 - Present",
    detail: "GPA 4.00 / 4.00 · Machine Learning, Deep Learning, Reinforcement Learning",
  },
  {
    school: "Telkom University",
    degree: "Bachelor of Telecommunication Engineering",
    period: "2021 - 2025",
    detail: "GPA 3.69 / 4.00 · Algorithms & Programming (C), Python, OOP (Java)",
  },
];

export const certifications = [
  {
    name: "Bangkit Academy 2024 · Mobile Development",
    issuer: "Google, GoTo, Traveloka",
    period: "Feb 2024 - Jul 2024",
  },
];

export const organizations = [
  {
    name: "Himpunan Mahasiswa Teknik Telekomunikasi",
    role: "Junior Staff of Human Resource Development",
    period: "Mar 2023 - Apr 2023",
    detail: "Ran literacy and knowledge-sharing programs for Telecommunication Engineering students.",
  },
];
