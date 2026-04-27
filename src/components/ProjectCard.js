// ProjectCard.jsx
import React from "react";
import "../styles/ProjectCard.css";
import { useTranslation } from 'react-i18next';

export default function ProjectCard({
  name,
  icon,
  cardColor = "#3C2A21",
  description,
  skills = [],
  github,
  weblink,
  apk
}) {
  const { t } = useTranslation();
  return (
    <div
      className="project-card"
      style={{ backgroundColor: cardColor }}
    >
      <div className="project-header">
        {icon && <h3 className="project-icon">{icon}</h3> }
        <h3 className="project-name">{name}</h3>
      </div>

      <p className="project-desc">{description}</p>

      <div className="project-skills">
        {skills.map((skill, idx) => (
          <span key={idx} className={`skill-tag ${skill.tag || "tools"}`}>
            {skill.name}
          </span>
        ))}
      </div>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-s project-btn">
            {t('GitHub')}
          </a>
        )}
        {weblink && (
          <a href={weblink} target="_blank" rel="noopener noreferrer" className="btn-p project-btn">
            {t('LiveDemo')}
          </a>
        )}
        {apk && (
          <a href={apk} target="_blank" rel="noopener noreferrer" className="btn-p project-btn">
            {t('DownloadAPK')}
          </a>
        )}
      </div>
    </div>
  );
}