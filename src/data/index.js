import { FaGlobe, FaLaptopCode, FaMobile } from "react-icons/fa";
import { FaReact, FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPhp, SiMongodb, SiTailwindcss, SiNextdotjs, SiSupabase } from "react-icons/si";

import sekolahImg from "../assets/sekolah.png";
import eduvateImg from "../assets/eduvate.png";
import moodkamuImg from "../assets/moodkamu.png";

export const navLinks = [
  { id: '01', name: 'HOME', href: '#home' },
  { id: '02', name: 'ABOUT', href: '#about' },
  { id: '03', name: 'TIMELINE', href: '#timeline' },
  { id: '04', name: 'PROJECTS', href: '#projects' },
  { id: '05', name: 'CONTACT', href: '#contact' }
];

export const techStack = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaFigma, name: "Figma" },
];

export const timelineData = [
  { 
    year: "2026", 
    role: "Full Stack Developer", 
    org: "Freelance & Personal Projects (ZuzuAcademy)", 
    desc: "Developed full-stack web applications using Next.js and PHP. Integrated APIs and AI tools to automate system features. Focused on performance, scalability, and system efficiency." 
  },
  { 
    year: "2025", 
    role: "Full Stack Developer", 
    org: "Freelance, Academic & Client Projects", 
    desc: "Built web-based systems including CRUD, admin dashboards, and data management. Managed both frontend and backend architecture (HTML, JS, PHP, MySQL) including authentication, reporting, and transaction processing." 
  },
  { 
    year: "2024", 
    role: "Frontend Developer", 
    org: "Project-based & Campus Implementations", 
    desc: "Designed and developed interactive, responsive web interfaces utilizing HTML, CSS, and strong JavaScript fundamentals. Deeply focused on creating fluid user interfaces (UI) and optimizing user experience (UX)." 
  },
  { 
    year: "2023", 
    role: "Creative Developer", 
    org: "Learning Phase & Experimental", 
    desc: "Mastered the fundamentals of programming and modern web development. Experimented extensively with animations, core logic, and basic UI design by building small-scale foundational projects." 
  },
];

export const projects = [
  {
    title: "School Management System",
    category: "Web Application",
    desc: "A modern school management system built with the SERN stack (Supabase, Express.js, React, Node.js) to centralize student, teacher, scheduling, attendance, and financial data in a scalable platform. Designed for efficiency, scalability, and real-time data management.",
    image: sekolahImg,
    icon: FaLaptopCode,
    year: "2025",
    github: "https://github.com/SinggihHakim/sdn_SERN.git"
  },
  {
    title: "MoodKamu AI",
    category: "Web Application",
    desc: "An AI-powered web application for detecting user emotions and generating intelligent responses in real time.uilt for simplicity, responsiveness, and interactive user experience.",
    image: moodkamuImg,
    icon: FaGlobe,
    year: "2025",
    github: "https://github.com/SinggihHakim/MoodKamu-AI.git"
  },
  {
    title: "EduVate",
    category: "Web Application",
    desc: "An education platform designed to deliver interactive and structured learning experiences through a scalable web-based system. Focused on usability, accessibility, and efficient content management.",
    image: eduvateImg,
    icon: FaLaptopCode,
    year: "2025",
    github: "https://github.com/SinggihHakim/EduVate.git"
  }
];
