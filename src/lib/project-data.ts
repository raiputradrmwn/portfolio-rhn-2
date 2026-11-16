export interface ProjectItem {
  id: string;
  title: string;
  org: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  link?: string; // live demo, kosong = "Link coming soon"
  repo?: string; // link GitHub, opsional
  image?: string; // screenshot di /public, kosong = placeholder
}

export const projectList: ProjectItem[] = [
  {
    id: "cps-study-group",
    title: "Cyber Physical System Study Group Website",
    org: "Cyber Physical System Laboratory",
    role: "Front-End Developer",
    period: "Aug 2024",
    description:
      "Designed the UI in Figma and built the frontend, integrating GET/POST/PUT/DELETE APIs for real-time data and optimizing for responsiveness and performance.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Figma", "Git"],
    link: "http://cyberacademy.cpslaboratory.com",
  },
  {
    id: "cps-website",
    title: "Cyber Physical System Website",
    org: "Cyber Physical System Laboratory",
    role: "Front-End Developer",
    period: "Aug 2024",
    description:
      "Designed the UI in Figma, built the frontend with real-time API integration, optimized responsiveness and performance, and deployed the website to a server through CI/CD.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Figma", "CI/CD"],
    link: "http://cpslaboratory.com",
  },
  {
    id: "cps-recruitment",
    title: "Cyber Physical System Recruitment Website",
    org: "Cyber Physical System Laboratory",
    role: "Front-End Developer",
    period: "Dec 2023",
    description:
      "Built the recruitment website frontend, including a form that submits applicant data to the database.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Git"],
    link: "https://cyberrecruitment-hanntuu.vercel.app/",
  },
  {
    id: "probox",
    title: "Probox",
    org: "Cyber Physical System Laboratory",
    role: "Front-End Developer",
    period: "Aug 2023",
    description:
      "Designed the UI in Figma and built a dashboard that fetches IoT data from an API and displays it in real time.",
    stack: ["React.js", "Tailwind CSS", "Daisy UI", "Figma", "Git"],
    link: "https://probox-web.vercel.app/",
  },
  {
    id: "nutrisee",
    title: "NutriSee",
    org: "Bangkit Academy 2024",
    role: "Mobile Development",
    period: "Feb 2024 - Jul 2024",
    description:
      "Capstone mobile app that helps users track the nutritional content of packaged foods and beverages, combining a machine learning model with APIs from the Cloud team.",
    stack: ["Kotlin", "Machine Learning", "Cloud API"],
  },
];
