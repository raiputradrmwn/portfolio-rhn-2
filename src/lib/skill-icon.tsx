import { BiLogoPostgresql } from 'react-icons/bi'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { JSX } from "react";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiVite,
  SiChakraui,
  SiExpo,
  SiFirebase,
  SiFramer,
  SiExpress,
  SiRedux,
  SiReactquery,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiNodedotjs,
  SiGithub,
  SiReactrouter,
  SiJson,
} from "react-icons/si";

const iconSize = '100%'

type stacksProps = {
  [key: string]: JSX.Element
}

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} color="#3b82f6" />,            
  JavaScript: <SiJavascript size={iconSize} color="#facc15" />, 
  TypeScript: <SiTypescript size={iconSize} color="#3b82f6" />,
  'Next.js': <SiNextdotjs size={iconSize} color="#000" />,
  'React.js': <SiReact size={iconSize} color="#0ea5e9" />,      
  TailwindCSS: <SiTailwindcss size={iconSize} color="#22d3ee" />,
  Bootstrap: <BsFillBootstrapFill size={iconSize} color="#a855f7" />,
  'Material UI': <SiMui size={iconSize} color="#38bdf8" />,
  Vite: <SiVite size={iconSize} color="#a855f7" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} color="#3b82f6" />,
  ChakraUI: <SiChakraui size={iconSize} color="#14b8a6" />,
  'React Native': <SiReact size={iconSize} color="#0284c7" />,
  Expo: <SiExpo size={iconSize} color="#000" />,
  Firebase: <SiFirebase size={iconSize} color="#eab308" />,
  'Framer Motion': <SiFramer size={iconSize} color="#000" />,
  'Express.js': <SiExpress size={iconSize} color="#000" />,
  Redux: <SiRedux size={iconSize} color="#a855f7" />,
  'React Query': <SiReactquery size={iconSize} color="#b91c1c" />,
  HTML: <SiHtml5 size={iconSize} color="#f97316" />,
  CSS: <SiCss3 size={iconSize} color="#3b82f6" />,
  Prisma: <SiPrisma size={iconSize} color="#14b8a6" />,
  'Node JS': <SiNodedotjs size={iconSize} color="#16a34a" />,
  Github: <SiGithub size={iconSize} color="#000" />,
  'React Router': <SiReactrouter size={iconSize} color="#ec4899" />,
  Json: <SiJson size={iconSize} color="#374151" />
};

