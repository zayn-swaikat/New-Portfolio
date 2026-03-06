import { useState } from "react";
import "../styles/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt
} from "react-icons/fa";

import { SiJavascript, SiDjango, SiCplusplus, SiVercel, SiBootstrap } from "react-icons/si";

export default function About() {

const skills = [
  { name: "HTML5", tag: "Frontend", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", tag: "Frontend", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript (ES6+)", tag: "Frontend", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", tag: "Frontend", icon: <FaReact />, color: "#61DAFB" },
  { name: "Responsive Design", tag: "Frontend", icon: <SiBootstrap />, color: "#7952B3" },
  { name: "Git & GitHub", tag: "Tools", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Vercel Deployment", tag: "Tools", icon: <SiVercel />, color: "#ffffff" },
  { name: "Python", tag: "Backend", icon: <FaPython />, color: "#3776AB" },
  { name: "Django", tag: "Backend", icon: <SiDjango />, color: "#092E20" },
  { name: "C++ (OOP)", tag: "Programming", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Java", tag: "Programming", icon: <FaJava />, color: "#ED8B00" }
];

    const [activeFilter, setActiveFilter] = useState("All");

    const filteredSkills =
        activeFilter === "All"
            ? skills
            : skills.filter(skill => skill.tag === activeFilter);

    const tags = ["All", ...new Set(skills.map(skill => skill.tag))];

    return (
        <section className="about" data-aos="fade-up" id="home">
            <h1>About Me</h1>

<p>
  I'm a 19-year-old web developer and Information Technology student at Latakia University 
  who believes great products are built where logic meets bold design.
</p>

<p>
  I'm deeply into UI and clean user experiences, not just making things look good,
  but making them feel right. For me, the real magic happens when powerful logic
  is paired with a sharp, intentional UI/UX. That's when an idea stops being
  "just a project" and turns into something memorable.
</p>

<p>
  Alongside my university studies, I constantly expand my skills through real-world 
  projects and professional training. I earned the Meta Front-End Developer 
  Professional Certificate, where I focused on modern web development with 
  technologies like React, JavaScript, responsive design, and version control.
</p>

<p>
  I mainly build web applications, with a strong focus on portfolios,
  landing pages, and interactive platforms where users can actually
  engage and connect. I enjoy turning concepts into structured systems,
  breaking down ideas, designing the flow, and building them step by step
  until everything clicks.
</p>

<p class="about-highlight">
  Once I set a goal, nothing stands in my way.
</p>

<p>
  My long-term goal is to earn a respected position in a major company
  where I can contribute at a high level and keep pushing my limits.
  I'm constantly learning, constantly building, and constantly improving.
</p>

<p>
  Languages: Arabic (Fluent), English (Duolingo English Test: 125), German (B1).
</p>

            <h2 id="skills">Technologies I've been working with:</h2>

            <div className="filters">
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className={activeFilter === tag ? "active" : ""}
                        onClick={() => setActiveFilter(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <ul className="skills" data-aos="fade-up">
                {filteredSkills.map((skill, index) => (
<li key={index} className="skill-item">
  <div className="skill-left">
    <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
    <span>{skill.name}</span>
  </div>

  <span className={`skill-tag ${skill.tag.toLowerCase()}`}>
    {skill.tag}
  </span>
</li>
                ))}
            </ul>
        </section>
    );
}