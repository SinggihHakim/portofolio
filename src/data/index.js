import { FaGlobe, FaLaptopCode, FaMobile } from "react-icons/fa";
import { FaReact, FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPhp, SiMongodb, SiTailwindcss, SiNextdotjs, SiSupabase } from "react-icons/si";

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
    image: "./src/assets/sekolah.png",
    icon: FaLaptopCode,
    year: "2025",
    github: "https://github.com/SinggihHakim/sdn_SERN.git"
  },
  {
    title: "MoodKamu AI",
    category: "Web Application",
    desc: "An AI-powered web application for detecting user emotions and generating intelligent responses in real time.uilt for simplicity, responsiveness, and interactive user experience.",
    image: "https://private-user-images.githubusercontent.com/136424003/559652277-7c94188f-1450-4acd-be5e-a5615f7e2752.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM5NDY0MjUsIm5iZiI6MTc3Mzk0NjEyNSwicGF0aCI6Ii8xMzY0MjQwMDMvNTU5NjUyMjc3LTdjOTQxODhmLTE0NTAtNGFjZC1iZTVlLWE1NjE1ZjdlMjc1Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxOVQxODQ4NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYjJhZDJhMWIyMmNmM2VjNTU4NmNhY2ZhYzBhMGM5Y2IyYTlhYzA2NDVjMjY1NjNhMjg1ODUzNDRkYmMyZDkxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ReNgWfeR_sR1qth730vCUwA1X7tA_UzvQoUgU1fUz2Y",
    icon: FaGlobe,
    year: "2025",
    github: "https://github.com/SinggihHakim/MoodKamu-AI.git"
  },
  {
    title: "EduVate",
    category: "Web Application",
    desc: "An education platform designed to deliver interactive and structured learning experiences through a scalable web-based system. Focused on usability, accessibility, and efficient content management.",
    image: "https://private-user-images.githubusercontent.com/136424003/514187521-8f315ce8-5590-4d8b-91dd-d3d86e56a1ff.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM5NDcwNTcsIm5iZiI6MTc3Mzk0Njc1NywicGF0aCI6Ii8xMzY0MjQwMDMvNTE0MTg3NTIxLThmMzE1Y2U4LTU1OTAtNGQ4Yi05MWRkLWQzZDg2ZTU2YTFmZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMzE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDMxOVQxODU5MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYjQ2NjY5Mzk0MjI3YWQwMGM1OGQ0N2NiNjAwZDU3YmUzZDU4NjY0OWVhNjBhM2NmNzAzZmRkMjg4NDBkNTZhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hH8R_6ne4WhX0th-cqjOE25UIEBmHK9TokbtfwUKUEA",
    icon: FaLaptopCode,
    year: "2025",
    github: "https://github.com/SinggihHakim/EduVate.git"
  }
];
