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

import { SiJavascript, SiDjango, SiCplusplus, SiVercel, SiBootstrap, SiMysql, SiFlutter, SiDart } from "react-icons/si";

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
  { name: "MYSQL", tag: "Database", icon: <SiMysql />, color: "#4479A1" },
  { name: "C++ (OOP)", tag: "Programming", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Java", tag: "Programming", icon: <FaJava />, color: "#ED8B00" },
  { name: "Dart", tag: "Programming", icon: <SiDart />, color: "#0175C2" },
  { name: "Flutter", tag: "Mobile", icon: <SiFlutter />, color: "#02569B" },
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
  I'm a 19-year-old Full-Stack and Flutter developer and an Information Technology student at Latakia University who believes great products are built where logic meets bold design.
</p>

<p>
  I focus on building applications that don't just look clean, but feel right to use. For me, real impact comes from combining strong backend logic with intentional UI/UX design.
</p>

<p>
  Alongside my university studies, I continuously improve through real-world projects and professional certifications. I earned the Meta Front-End Developer Professional Certificate and I'm currently advancing my backend and mobile development skills through the Meta Back-End Developer program and IBM's Developing Mobile Apps with Flutter specialization.
</p>

<p>
  I build both web and mobile applications, focusing on interactive platforms, scalable systems, and user-centered experiences. I enjoy turning ideas into structured systems, from concept and flow design to full implementation.
</p>

<p class="about-highlight">
  Once I set a goal, I go all in.
</p>

<p>
  My long-term goal is to grow into a high-impact developer role in a leading company, where I can build meaningful products and keep pushing my limits.
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