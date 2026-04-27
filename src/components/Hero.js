import '../styles/Hero.css'
import { useRef } from "react";
import Beams from "./Beams";
import DecryptedText from "./DecryptedText";
import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import { FiMessageSquare } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">

      <div className="hero-bg">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h3 className="first-line">
            {t('hey')}
          </h3>
          <h1 className='name'>
          <DecryptedText
          text="Zayn Swaikat"
          speed={100}
          sequential
          revealDirection="start"
          animateOn="view"
          className="revealed"
          encryptedClassName="encrypted"
        />
        </h1>
        <p className='role'>
          {t('subtitle')}
        </p>
        </div>

        <div className="btns">
          <a className="btn-p" href="/Resume.pdf" download="Zayn_Swaikat_Resume.pdf">
            {t('download')} <HiOutlineArrowDownTray style={{ marginLeft: '0.3rem', marginBottom: '0.2rem' }} />
          </a>
          <a className="btn-s" href="mailto:zeinsoykat@gmail.com">
            {t('touch')} <FiMessageSquare style={{ marginLeft: '0.3rem' }} />
          </a>
        </div>

        <div className="scrolldown" onClick={handleScroll}>
          <div className="chevrons"></div>
        </div>
      </div>

    </div>
  );
}