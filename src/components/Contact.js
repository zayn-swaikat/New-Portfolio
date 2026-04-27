import '../styles/Contact.css'
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

export default function ContactMe() {
  const { t } = useTranslation();
const socialLinks = [
  { icon: <FaEnvelope />, link: "mailto:zeinsoykat@gmail.com", key: "email", className: "email" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zayn-swaikat-8b89553a9/", key: "linkedin", className: "linkedin" },
  { icon: <FaWhatsapp />, link: "https://wa.me/963932910742", key: "whatsapp", className: "whatsapp" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/zayn_swaikat", key: "instagram", className: "instagram" },
  { icon: <FaGithub />, link: "https://github.com/zayn-swaikat", key: "github", className: "github" },
];

  return (
    <section className="contact-me" id="contact">
      <div className="contact-container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="contact-text">
          {t('contact.subtitle')}
        </p>

        <div className="contact-grid">
          {socialLinks.map((item, index) => (
            <a 
              key={index}
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`contact-card ${item.class}`}
              aria-label={item.label}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <span>{t(`contact.links.${item.key}`)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}