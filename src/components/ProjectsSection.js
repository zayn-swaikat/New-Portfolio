import React from "react";
import ProjectCard from "./ProjectCard";
import '../styles/ProjectsSection.css';
import { useTranslation } from 'react-i18next';

export default function ProjectsSection() {
  const { t } = useTranslation();
const projects = [
  {
    key: "himaths",
    name: "HI Maths",
    icon: "🧮",
    cardColor: "#52C8E2",
    description: "A mobile educational application built with Flutter and Django backend. Features user authentication, student data integration from Google Sheets, personalized dashboards, and structured educational content for high school students. Designed with a clean UI and smooth user experience for daily academic use.",
    skills: [
      { name: "Flutter", tag: "mobile" },
      { name: "Dart", tag: "programming"},
      { name: "Django", tag: "backend" },
      { name: "REST API", tag: "backend" },
    ],
    github: "https://github.com/zayn-swaikat/",
    apk: '',
  },
  {
    key: "dailyscore",
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
    key: "taxi_demand_intelligence",
    name: "Taxi Demand Intelligence",
    icon: "🚕",
    cardColor: "#1E3A8A",
    description: "A data intelligence dashboard built with Streamlit to analyze taxi demand from WhatsApp request logs. It provides real-time insights including hotspot detection via geospatial heatmaps, hourly and daily demand trends, anomaly detection, and interactive KPIs for operational decision-making.",
    skills: [
      { name: "Python", tag: "backend" },
      { name: "Streamlit", tag: "frontend" },
      { name: "Pandas", tag: "data" },
      { name: "Folium", tag: "data" },
      { name: "Data Analysis", tag: "data" },
      { name: "Geospatial Analysis", tag: "data" }
    ],
    github: "https://github.com/zayn-swaikat/taxi-analysis",
    weblink: "https://taxi-analysis-frawrkzhsjkyvbcat9eafm.streamlit.app/"
  },
  // {
  //   key: "chatmock",
  //   name: "ChatMock",
  //   icon: "💬",
  //   cardColor: "#25D366",
  //   description: "A WhatsApp-style chat generator built with React and Vite. Allows users to create realistic chat conversations with customizable messages, sender roles, timestamps, and message statuses. Includes a phone-style UI preview and export functionality to download chats as images or HTML files.",
  //   skills: [
  //     { name: "ReactJS", tag: "frontend" },
  //     { name: "Vite", tag: "frontend" },
  //     { name: "JavaScript", tag: "frontend" },
  //     { name: "HTML5", tag: "frontend" },
  //     { name: "CSS3", tag: "frontend" },
  //   ],
  //   github: "https://github.com/zayn-swaikat/ChatMock",
  //   weblink: "https://whatsappchatmock.vercel.app",
  // },
  {
    key: "dawwerha",
    name: "Dawwerha",
    icon: "🛍️",
    cardColor: "#3C2A21",
    description: "A full-stack marketplace platform built with React and Django REST Framework. Features secure JWT authentication, image uploads, protected routes, admin moderation, and a responsive RTL Arabic interface. Deployed on Vercel and Render for a polished user experience.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "Django", tag: "backend" },
      { name: "REST API", tag: "backend" },
    ],
    github: "https://github.com/zayn-swaikat/dorha",
    weblink: "https://dawwerha.vercel.app",
  },
  {
    key: "sukoon",
    name: "Sukoon Medical Center",
    icon: "🏥",
    cardColor: "#3C2A21",
    description: "A comprehensive medical platform built with React and Django. Manages patient, doctor, and HR accounts, appointments, doctor evaluations, and delivers a clean, professional UI for both patients and staff.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
      { name: "Django", tag: "backend" },
      { name: "REST API", tag: "backend" },
    ],
    github: "#",
    weblink: "#",
  },
  {
    key: "fresh",
    name: "Fresh Market",
    icon: "🛒",
    cardColor: "#3C2A21",
    description: "A full-stack e-commerce platform built with React and Django. Supports product management, order handling, user accounts, and a fully responsive interface for seamless shopping.",
    skills: [
      { name: "ReactJS", tag: "frontend" },
      { name: "CSS3", tag: "frontend" },
      { name: "HTML5", tag: "frontend" },
      { name: "JavaScript", tag: "frontend" },
      { name: "Django", tag: "backend" },
      { name: "REST API", tag: "backend" },
    ],
    github: "#",
    weblink: "#",
  },
  {
    key: "barber",
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
    key: "code",
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
    key: "sudoku",
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
    key: "coffee",
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
    key: "weather",
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
      <h2 className="section-title">{t('projects')}</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            name={t(`projectsData.${proj.key}.name`)}
            icon={proj.icon}
            cardColor={proj.cardColor}
            description={t(`projectsData.${proj.key}.description`)}
            skills={proj.skills}
            github={proj.github}
            weblink={proj.weblink}
            apk={proj.apk}
          />
        ))}
      </div>
    </section>
  );
}