export interface CareerItem {
  id: string;
  company: string;
  logo?: string; // path di /public, kosong = pakai inisial
  position: string;
  type: string;
  period: string;
  description: string; // ringkasan, tampil saat kartu tertutup
  highlights: string[]; // poin dari CV, tampil saat kartu dibuka
}

export const careerList: CareerItem[] = [
  {
    id: "idstar",
    company: "PT IDstar Cipta Teknologi",
    logo: "/icon/idstar.png",
    position: "L2 Application Support",
    type: "Assigned at XLSMART Telecom",
    period: "Jun 2026 - Present",
    description:
      "Working at XLSMART Telecom (via IDstar), providing L2 production support for its digital platforms running on Kubernetes in Tencent Cloud.",
    highlights: [
      "Provide L2 production support for telecom digital platforms (customer apps, partner APIs and web portals) running on Kubernetes in Tencent Cloud, covering alert triage, investigation, escalation and root cause analysis in a rotating shift schedule.",
      "Monitor and troubleshoot production incidents using Grafana, Tencent APM, Cloud Log Service (CLS) and kubectl, identifying root causes across application, infrastructure and dependency issues.",
      "Support production change deployments end to end: pre-checks, monitoring during rollout, sanity validation, rollback coordination with development teams and post-deployment reporting.",
      "Write RCA reports, incident updates and post-deployment status emails for engineering and business stakeholders, and maintain the daily application success rate SLA report (99.5% target).",
      "Recommend reliability and security improvements to application owners based on incident findings.",
    ],
  },
  {
    id: "telkom-indonesia",
    company: "Telkom Indonesia",
    logo: "/icon/telkom.svg",
    position: "Backend Developer & Researcher",
    type: "Internship",
    period: "Dec 2025 - Jun 2026",
    description:
      "Built Golang microservices on PostgreSQL with RESTful APIs for Next.js frontends, and led research on ABAC-based dynamic governance for the Telkom Test House environment.",
    highlights: [
      "Architected and maintained server-side logic using Golang, ensuring high-performance and scalable microservices architecture.",
      "Designed and optimized relational database schemas in PostgreSQL, focusing on query efficiency and data integrity for enterprise-level applications.",
      "Developed and integrated RESTful APIs to support seamless data flow between the backend systems and Next.js-based frontends.",
      "Implemented secure authentication and authorization using Attribute-Based Access Control (ABAC) to enhance system security and governance.",
      "Led research on Dynamic Governance Frameworks, focusing on ABAC to ensure AI-driven audit integrity, and analyzed ISO 27001 standards to align system architectures with information security best practices.",
      "Evaluated and documented compliance requirements for laboratory document access within the Telkom Test House environment.",
    ],
  },
  {
    id: "langit-biru",
    company: "Biru Langit",
    logo: "/icon/birulangit.jpg",
    position: "Frontend Developer",
    type: "Internship",
    period: "Jun 2025 - Dec 2025",
    description:
      "Led the JSX to TSX migration and built real-time data features with WebSocket and REST APIs for AQMS systems.",
    highlights: [
      "Led the migration from JSX to TSX, improving type safety and maintainability.",
      "Managed real-time data fetching with WebSocket, ensuring seamless updates and performance.",
      "Integrated RESTful APIs into the frontend, enabling smooth data flow for AQMS systems.",
      "Worked closely with development teams to implement features and maintain consistency across modules.",
    ],
  },
  {
    id: "cyber-psl",
    company: "Cyber Physical System Laboratory",
    logo: "/icon/cps.png",
    position: "Assistant Coordinator & Research Assistant",
    type: "Contract",
    period: "Aug 2023 - Jun 2025",
    description:
      "Led about 48 members across the Practicum and Research departments, and built the lab's web products and IoT devices.",
    highlights: [
      "Assistant Coordinator (Jun 2024 - Jun 2025): led two key departments, Practicum and Research, overseeing a team of approximately 48 members.",
      "Implemented Agile project management to streamline the laboratory's roadmap and improve project efficiency.",
      "Facilitated communication and collaboration with external organizations to establish partnerships for joint research projects.",
      "Research Assistant (Aug 2023 - Jun 2025): developed the laboratory web as Front-end developer using React JS and Tailwind CSS, collaborating with Back-end on the API.",
      "Created IoT devices using ESP32, ESP8266 or Arduino UNO with various sensors and actuators.",
    ],
  },
  {
    id: "pt-sineas",
    company: "PT Sineas Kreatif Indonesia",
    logo: "/icon/sineashub.jpg",
    position: "Frontend Engineer",
    type: "Internship",
    period: "Feb 2025 - May 2025",
    description:
      "Worked on front office and back office modules, fixing critical bugs and integrating backend APIs into the dashboard.",
    highlights: [
      "Worked as a Frontend Engineer handling both front office and back office modules.",
      "Resolved critical bugs and improved UI/UX components in the front office system, ensuring a smoother user experience.",
      "Integrated RESTful APIs from the backend into the frontend for the back office dashboard, enabling seamless data flow and interaction.",
      "Collaborated remotely with the development team to ensure consistent feature implementation and maintenance across both modules.",
    ],
  },
  {
    id: "lab-law",
    company: "LAB LAW",
    logo: "/icon/lablaw.png",
    position: "Head of Web Development",
    type: "Internship",
    period: "Aug 2024 - Jan 2025",
    description:
      "Led a frontend and backend team to enhance and maintain the lablaw.id website with Laravel and React.js.",
    highlights: [
      "Led a development team of Front-end and Back-end developers to enhance and maintain the lablaw.id website.",
      "Spearheaded website improvements using Laravel and React.js, ensuring seamless integration between the front-end and back-end.",
      "Actively contributed to the Front-end team, implementing new features and optimizing user experience.",
      "Coordinated team workflows, overseeing project timelines and ensuring efficient task execution.",
    ],
  },
  {
    id: "btpn",
    company: "PBI BTPN Syariah x Rakamin Academy",
    logo: "/icon/btpn.png",
    position: "Full-stack Developer",
    type: "Project Based Virtual Intern",
    period: "Mar 2024 - Apr 2024",
    description: "Built an image upload API in Go with MySQL and a simple, user-friendly website with Vue.js.",
    highlights: [
      "Developed an API to manage image upload and delete operations using HTTP POST, GET, PUT and DELETE methods with Go and MySQL.",
      "Developed a website using Vue.js, focusing on simplicity and user-friendly design.",
    ],
  },
];
