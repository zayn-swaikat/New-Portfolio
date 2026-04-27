import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageToggle.css';
import "flag-icons/css/flag-icons.min.css";

export default function LanguageToggle({ className }) {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(next);
  };

  const current = i18n.language;

  return (
    <button
      onClick={toggle}
      title="Toggle language"
      aria-label="Toggle language"
      className={`lang-btn ${className}`}
    >
      {current === 'ar' ? (
      <span className="fi fi-sy"></span>
      ) : (
        <span className="fi fi-gb"></span>
      )}
    </button>
  );
}