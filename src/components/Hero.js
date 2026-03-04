import '../styles/Hero.css'
import { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div className="hero">
        <div className="hero-text">
          <h3 className="first-line">
            Hey, I'm
          </h3>
          <h1 className="name">Zayn Swaikat</h1>
        </div>

        <div className="btns">
          <a className="btn-p" href="/Resume.pdf" download="Zayn_Swaikat_Resume.pdf">
            Download My Resume
          </a>
          <a className="btn-s" href="mailto:zeinsoykat@gmail.com">
            Get In Touch
          </a>
        </div>

        <div className="scrolldown" onClick={handleScroll}>
          <div className="chevrons"></div>
        </div>
      </div>
  );
}