import '../styles/Contact.css'
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'

export default function ContactMe() {
  const socialLinks = [
    { icon: <FaEnvelope />, link: "mailto:zeinsoykat@gmail.com", label: "Email", class: "email" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zayn-swaikat-8b89553a9/", label: "LinkedIn", class: "linkedin" },
    { icon: <FaWhatsapp />, link: "https://wa.me/963932910742", label: "WhatsApp", class: "whatsapp" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/zayn_swaikat", label: "Instagram", class: "instagram" },
    { icon: <FaGithub />, link: "https://github.com/zayn-swaikat", label: "GitHub", class: "github" },
  ];

  return (
    <section className="contact-me" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-text">
          Got an idea, a project, or just want to chat? Hit me up!
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
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}