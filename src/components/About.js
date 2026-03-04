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
        <section className="about">
            <h1>About Me</h1>

            <p>
                Hey! My name is Zayn, and I'm a web developer focused on building
                functional and user-friendly digital experiences. I started in 2024
                exploring HTML and CSS, and since then I’ve been leveling up through
                real projects and continuous learning.
            </p>

            <p>
                Today, I build scalable and maintainable web applications using
                modern technologies and clean development practices.
            </p>

            <p>
                I also work as a freelancer, creating responsive websites and
                interactive React applications. Some recent projects include
                Fresh Market, Sukoon Medical Center, Little Lemon Restaurant,
                Sudoku Solver, and Quizzes Site.
            </p>

            <h2>Technologies I've been working with:</h2>

            {/* Filter Buttons */}
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

            <ul className="skills">
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