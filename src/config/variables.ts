// Header
export const name: string = "Renzo Luis Battaglino";
export const title: string = "Desarrollador web Full Stack";
export const yearsOfExperience: number = 1;
export const technologies: number = 15;

// Nav
interface Link {
  name: string;
  ref: string;
}

export const links: Array<Link> = [
  { name: "Inicio", ref: "#home" },
  { name: "Sobre mi", ref: "#about" },
  { name: "Experiencia", ref: "#experience" },
  { name: "Proyectos", ref: "#projects" },
  { name: "Contacto", ref: "#contact" },
];

//About
export const about: string =
  "Desarrollador especializado en NextJS, con un enfoque en la creación de experiencias web dinámicas y eficientes. Como freelancer, disfruto transformando ideas en soluciones digitales innovadoras, equilibrando un diseño atractivo con una funcionalidad sólida. Apasionado por los desafíos tecnológicos y siempre en busca de aprender y crecer en el campo del desarrollo. Y sí, utilicé inteligencia artificial para generar esto.";
export const flag: string = "🇦🇷";
export const years: number = 22;

//URLs
export const githubUrl: string = "https://github.com/naghell";
export const linkedinUrl: string = "https://www.linkedin.com/in/renzobxt";
export const cvUrl: string =
  "https://docs.google.com/document/d/1F8vLXi9GtLkFrnSGc3BG5t8zOwZJ8K2z/edit?usp=sharing&ouid=100070475512502472081&rtpof=true&sd=true";
export const email: string = "renzo@naghell.com";

//Experience
interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export const experiences: Array<Experience> = [
  {
    company: "Edison",
    role: "Desarrollador Full Stack",
    duration: "Agosto 2023 - Presente",
    description: [
      "Desarrollé aplicaciones web utilizando Vite y Next.js.",
      "Implementé APIs RESTful y servicios backend con Express y NestJS.",
      "Utilicé React para construir interfaces de usuario dinámicas y responsivas.",
      "Diseñé y estilicé componentes utilizando Tailwind CSS.",
      "Añadí animaciones interactivas a la UI con Framer Motion.",
      "Implementé y desplegué aplicaciones en AWS utilizando servicios como Amplify, S3, CodePipeline, EBS, etc.",
      "Colaboré con equipos de diseño para mejorar la experiencia del usuario.",
      "Realicé revisiones de código y sesiones de programación con mis compañeros.",
    ],
  },
];

//Framer Motion
import { Variants } from "framer-motion";

export const floatVariant: Variants = {
  animate: {
    y: [-30, 30],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 4,
      ease: "easeInOut",
    },
  },
};
export const floatVariantMedium: Variants = {
  animate: {
    y: [-20, 20],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 6,
      ease: "easeInOut",
    },
  },
};
export const floatVariantSmall: Variants = {
  animate: {
    y: ["-10%", "10%"],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 8,
      ease: "easeInOut",
    },
  },
};
