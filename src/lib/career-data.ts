// src/sections/data.ts

export interface CareerItem {
  id: string;
  company: string;
  logo: string; // image path/public url
  position: string;
  type: string; // "Internship", "Contract", dst
  period: string; // "Jun 2024 – Present"
  description: string;
}

export const careerList: CareerItem[] = [
    {
        id: "langit-biru",
        company: "Biru Langit",
        logo: "/icon/birulangit.jpg",
        position: "Frontend Developer",
        type: "Internship",
        period: "Jun 2025 - Present · 6 mos",
        description: "Led the migration from JSX to TSX, improving type safety and maintainability. Managed real-time data fetching with WebSocket, ensuring seamless updates and performance. Integrated RESTful APIs into the frontend, enabling smooth data flow for AQMS systems. Worked closely with development teams to implement features and maintain consistency across modules."
    },
    {
        id: "cyber-psl",
        company: "Cyber Physical System Laboratory",
        logo: "/icon/cps.png",
        position: "Assistant Coordinator",
        type: "Contract",
        period: "Jun 2024 - Jun 2025",
        description: "Led and coordinated 48+ members across Practicum and Research divisions, implementing Agile practices for efficient project execution and external collaboration."
    },
    {
        id: "pt-sineas",
        company: "PT Sineas Kreatif Indonesia",
        logo: "/icon/sineashub.jpg",
        position: "Frontend Engineer",
        type: "Internship",
        period: "Feb 2025 - May 2025",
        description: "Contributed to both front and back office modules by fixing UI bugs and integrating backend APIs to enhance functionality and user experience."
    },
    {
        id: "lab-law",
        company: "LAB LAW",
        logo: "/icon/lablaw.png",
        position: "Head of Web Development",
        type: "Internship",
        period: "Aug 2024 - Jan 2025",
        description: "Spearheaded the development and integration of the lablaw.id website by leading a cross-functional team and optimizing both frontend and backend systems."
    },
    {
        id: "bangkit",
        company: "Bangkit Academy",
        logo: "/icon/bangkit.png",
        position: "Mobile Development Cohort",
        type: "Certification",
        period: "Feb 2024 - Jul 2024",
        description: "Built a mobile app with integrated ML and Cloud APIs to help users track nutritional intake, as part of a collaborative capstone project."
    },
    {
        id: "btpn",
        company: "BTPN Syariah",
        logo: "/icon/btpn.png",
        position: "Project Based Virtual Intern: Fullstack Developer",
        type: "Internship",
        period: "Mar 2024 - Apr 2024",
        description: "Developed a fullstack application using Go and Vue.js, including image API operations and a responsive frontend interface."
  }
];
