export type ProjectCategory = "Académique" | "Personnel";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  github: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Education = {
  year: string;
  title: string;
  school: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Grade Management System",
    description:
      "Application Python permettant de gérer les étudiants, les notes, les moyennes, le classement et la sauvegarde JSON.",
    tags: ["Python", "Tkinter", "JSON", "OOP"],
    category: "Académique",
    github: "#",
  },
  {
    id: 2,
    title: "Portfolio personnel",
    description:
      "Site portfolio moderne pour présenter mon parcours, mes projets, mon CV et mes informations de contact.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Personnel",
    github: "#",
  },
];

export const skills: Skill[] = [
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "HTML/CSS", level: 85 },
  { name: "Supply Chain", level: 80 },
  { name: "Gestion de stock", level: 75 },
  { name: "Bases de données", level: 65 },
];

export const education: Education[] = [
  {
    year: "2025 - 2027",
    title: "Master E-Logistique",
    school: "ESITH Casablanca",
  },
  {
    year: "2022 - 2025",
    title: "Licence professionnelle en gestion de la chaîne logistique",
    school: "ESITH Casablanca",
  },
];