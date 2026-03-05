// ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import '../styles/ProjectsSection.css';

export default function ProjectsSection() {
const projects = [
  {
    name: "Dawwerha",
    icon: "🛍️",
    cardColor: "#3C2A21",
    description: "A full-stack marketplace platform built with React and Django REST Framework. Features secure JWT authentication, image uploads, protected routes, admin moderation, and a responsive RTL Arabic interface. Deployed on Vercel and Render for a polished user experience.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "Django", tag: "backend" },
      { name: "Django REST Framework", tag: "backend" },
    ],
    github: "https://github.com/zayn-swaikat/dorha",
    weblink: "https://dawwerha.vercel.app",
  },
  // {
  //   name: "Sukoon Medical Center",
  //   icon: "🏥",
  //   cardColor: "#3C2A21",
  //   description: "A comprehensive medical platform built with React and Django. Manages patient, doctor, and HR accounts, appointments, doctor evaluations, and delivers a clean, professional UI for both patients and staff.",
  //   skills: [
  //     { name: "ReactJS", tag: "frontend" },
  //     { name: "CSS3", tag: "frontend" },
  //     { name: "HTML5", tag: "frontend" },
  //     { name: "JavaScript", tag: "frontend" },
  //     { name: "Django", tag: "backend" },
  //   ],
  //   github: "#",
  //   weblink: "#",
  // },
  // {
  //   name: "Fresh Market",
  //   icon: "🛒",
  //   cardColor: "#3C2A21",
  //   description: "A full-stack e-commerce platform built with React and Django. Supports product management, order handling, user accounts, and a fully responsive interface for seamless shopping.",
  //   skills: [
  //     { name: "ReactJS", tag: "frontend" },
  //     { name: "CSS3", tag: "frontend" },
  //     { name: "HTML5", tag: "frontend" },
  //     { name: "JavaScript", tag: "frontend" },
  //     { name: "Django", tag: "backend" },
  //   ],
  //   github: "#",
  //   weblink: "#",
  // },
  {
    name: "Daily Score",
    icon: "📊",
    cardColor: "#3C2A21",
    description: "Track daily wellbeing and finances with this local-first React app. Features mood, nutrition, hydration, satisfaction, and behavior tracking, plus CSV export and intuitive dashboards with weekly and monthly trends.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
    ],
    github: "https://github.com/zayn-swaikat/daily-score",
    weblink: "https://daily-score.vercel.app",
  },
  {
    name: "The Kings Barbers",
    icon: "💈",
    cardColor: "#3C2A21",
    description: "A modern barbershop website built with React. Highlights services, smooth navigation, and brand identity with easy WhatsApp contact and booking access.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
    ],
    github: "https://github.com/zayn-swaikat/barber",
    weblink: "https://zayns-barbershop.vercel.app",
  },
  {
    name: "CODE",
    icon: "🧠",
    cardColor: "#3C2A21",
    description: "A React-based number guessing game inspired by Mastermind. Includes bot opponent mode, feedback for correct digits, sound effects, confetti celebrations, and a visual history of guesses.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
    ],
    github: "https://github.com/zayn-swaikat/CODE",
    weblink: "https://zayns-code-game.vercel.app",
  },
  {
    name: "Sudoku Solver",
    icon: "🧩",
    cardColor: "#3C2A21",
    description: "Solve Sudoku puzzles instantly with this React web app using a backtracking algorithm. Designed with an intuitive and clean UI for seamless interaction.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
    ],
    github: "https://github.com/zayn-swaikat/sudoku",
    weblink: "https://zayns-sudoku-solver.vercel.app",
  },
  {
    name: "Coffeehub",
    icon: "☕",
    cardColor: "#3C2A21",
    description: "A responsive React SPA showcasing a coffee shop website. Features animated hero, menu carousel, interactive map, and feedback pages for a polished, engaging UI.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "FramerMotion", tag: "frontend" },
      { name: "ReactRouter", tag: "frontend" },
    ],
    github: "https://github.com/zayn-swaikat/CoffeHub",
    weblink: "coffee-hub-six.vercel.app",
  },
  {
    name: "Weather Scope",
    icon: "🌦️",
    cardColor: "#3C2A21",
    description: "A lightweight React app providing local weather forecasts, alerts, and news. Uses modular components, responsive layouts, and local JSON data for a fast, clean experience.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
    ],
    github: "https://github.com/zayn-swaikat/Weather-Scope",
    weblink: "https://weather-scope-six.vercel.app",
  },
];
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            name={proj.name}
            icon={proj.icon}
            cardColor={proj.cardColor}
            description={proj.description}
            skills={proj.skills}
            github={proj.github}
            weblink={proj.weblink}
          />
        ))}
      </div>
    </section>
  );
}