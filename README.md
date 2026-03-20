<div align="center">

# SH. — Personal Portfolio

**A luxury, editorial-style personal portfolio built with React + Vite**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-black?style=for-the-badge&logo=vercel)](https://github.com/SinggihHakim/portofolio)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

A high-end personal portfolio website with a **museum/editorial aesthetic** — built to make a strong first impression. Designed and developed with meticulous attention to typography, motion, and visual storytelling.

The site presents my journey as a developer through five carefully crafted sections: a cinematic hero, an about section, a career timeline, a curated projects gallery, and a contact form.

---

## Design Philosophy

> *"A portfolio should feel like an exhibition, not a resume."*

- **Museum Index Navigation** — vertical side navigation inspired by editorial design
- **Dark/Light Mode** — seamless theme switching with a tactile toggle
- **Noise Texture Overlay** — subtle grain for a premium, print-like texture
- **Monogram Branding** — minimalist `SH.` initials as the identity mark
- **"Digital Archive Vol. I"** — ambient editorial markers for depth

---

## Features

| Feature | Description |
|---|---|
| Custom Cursor | Fluid custom cursor that reacts to interactive elements |
| Preloader | Cinematic loading screen before content is revealed |
| Magnetic Buttons | CTAs that attract to cursor proximity for a tactile feel |
| Staggered Text Reveal | Character-by-character hero heading animation |
| Particle Background | Ambient floating particles in dark mode |
| Career Timeline | Year-by-year visual journey of professional growth |
| Projects Gallery | Curated cards with live links and GitHub references |
| Fully Responsive | Optimized for all screen sizes — mobile to ultrawide |
| Dark / Light Mode | Full theme toggle with smooth color transitions |

---

## Tech Stack

**Frontend**
- [React 19](https://react.dev/) — UI library
- [Vite 7](https://vitejs.dev/) — lightning-fast build tool
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — animations & transitions
- [React Icons](https://react-icons.github.io/react-icons/) — icon library

**Tools & Workflow**
- Git & GitHub — version control
- ESLint — code quality

---

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/            # Images, CV, and static files
│   ├── components/
│   │   ├── Navbar.jsx     # Side/top navigation with active section tracking
│   │   ├── Hero.jsx       # Landing section with staggered reveal
│   │   ├── About.jsx      # Skills & personal introduction
│   │   ├── Timeline.jsx   # Career history year by year
│   │   ├── Projects.jsx   # Project showcase gallery
│   │   ├── Contact.jsx    # Contact form & social links
│   │   ├── Footer.jsx     # Footer with branding
│   │   ├── Preloader.jsx  # Intro loading animation
│   │   ├── CustomCursor.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Marquee.jsx
│   ├── data/
│   │   └── index.js       # Centralized data (projects, timeline, tech stack)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/SinggihHakim/portofolio.git

# Navigate into the project
cd portofolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Build for production:**
```bash
npm run build
```

---

## Featured Projects

### School Management System
A modern school management platform built with the **SERN stack** (Supabase, Express.js, React, Node.js). Centralizes student, teacher, scheduling, attendance, and financial data in a real-time system.
→ [GitHub Repo](https://github.com/SinggihHakim/sdn_SERN)

### MoodKamu AI
An AI-powered web app for detecting user emotions and generating intelligent responses in real-time. Built for simplicity, responsiveness, and interactive UX.
→ [GitHub Repo](https://github.com/SinggihHakim/MoodKamu-AI)

### EduVate
An education platform delivering interactive and structured learning experiences through a scalable web system. Focused on usability, accessibility, and content management.
→ [GitHub Repo](https://github.com/SinggihHakim/EduVate)

---

## Contact

**Singgih Hakim**

- GitHub: [@SinggihHakim](https://github.com/SinggihHakim)

---

<div align="center">

Designed & Built by **Singgih Hakim** — 2026

</div>
