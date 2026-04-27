import { useState } from "react";
import "../styles/About.css";
import {FaHtml5,FaCss3Alt,FaReact,FaPython,FaJava,FaGitAlt} from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { SiJavascript, SiDjango, SiCplusplus, SiVercel, SiBootstrap, SiMysql, SiFlutter, SiDart } from "react-icons/si";

export default function About() {
  const { t } = useTranslation();
  const skills = [
    { key: "html", tag: "frontend", icon: <FaHtml5 />, color: "#E34F26" },
    { key: "css", tag: "frontend", icon: <FaCss3Alt />, color: "#1572B6" },
    { key: "js", tag: "frontend", icon: <SiJavascript />, color: "#F7DF1E" },
    { key: "react", tag: "frontend", icon: <FaReact />, color: "#61DAFB" },
    { key: "responsive", tag: "frontend", icon: <SiBootstrap />, color: "#7952B3" },
    { key: "git", tag: "tools", icon: <FaGitAlt />, color: "#F05032" },
    { key: "vercel", tag: "tools", icon: <SiVercel />, color: "#ffffff" },
    { key: "python", tag: "backend", icon: <FaPython />, color: "#3776AB" },
    { key: "django", tag: "backend", icon: <SiDjango />, color: "#092E20" },
    { key: "mysql", tag: "database", icon: <SiMysql />, color: "#4479A1" },
    { key: "cpp", tag: "programming", icon: <SiCplusplus />, color: "#00599C" },
    { key: "java", tag: "programming", icon: <FaJava />, color: "#ED8B00" },
    { key: "dart", tag: "programming", icon: <SiDart />, color: "#0175C2" },
    { key: "flutter", tag: "mobile", icon: <SiFlutter />, color: "#02569B" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter(skill => skill.tag === activeFilter);

  const tags = ["all", ...new Set(skills.map(skill => skill.tag))];

  return (
    <section className="about" data-aos="fade-up" id="home">
      <h1>{t('aboutme')}</h1>

      <p>
        {t('p1')}
      </p>

      <p>
        {t('p2')}
      </p>

      <p>
        {t('p3')}
      </p>

      <p>
        {t('p4')}
      </p>

      <p class="about-highlight">
        {t('highlight')}
      </p>

      <p>
        {t('p5')}
      </p>

      <p>
        {t('langs')}
      </p>

      <h2 id="skills">{t('techs')}</h2>

      <div className="filters">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={activeFilter === tag ? "active" : ""}
            onClick={() => setActiveFilter(tag)}
          >
            {t(`tags.${tag}`)}
          </button>
        ))}
      </div>

      <ul className="skills" data-aos="fade-up">
        {filteredSkills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-left">
              <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span>{t(`skillsData.${skill.key}.name`)}</span>
            </div>

            <span className={`skill-tag ${skill.tag.toLowerCase()}`}>
              {t(`tags.${skill.tag}`)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}