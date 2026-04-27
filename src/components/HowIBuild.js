import '../styles/HowIBuild.css'
import { useTranslation } from 'react-i18next';

export default function HowIBuild() {
  const { t } = useTranslation();
  const steps = [
    { key: "step1" },
    { key: "step2" },
    { key: "step3" },
    { key: "step4" },
  ];

  return (
    <section className="how-i-build" id="process">
      <div className='how-i-build-content'>
      <h2 className="section-title timeline-title">{t('how')}</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step" data-aos="fade-up">
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>
            <div className="timeline-content">
<h3>{t(`howData.${step.key}.title`)}</h3>
<p>{t(`howData.${step.key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}