import React from 'react';
import { Language } from '../data/translations';

interface LanguageToggleProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  return (
    <div
      className="inline-flex items-center p-[1.5px] rounded-full bg-[#342825] shadow-xs border border-black/10"
      role="group"
      aria-label="Selecionar idioma"
    >
      <button
        type="button"
        onClick={() => onLanguageChange('pt')}
        className={`px-2 h-[18px] sm:h-[19px] text-[8.5px] sm:text-[9px] font-bold rounded-full transition-all duration-150 cursor-pointer flex items-center justify-center leading-none ${
          currentLang === 'pt'
            ? 'bg-[#BD5944] text-white shadow-xs'
            : 'text-white/60 hover:text-white'
        }`}
        title="Português"
      >
        PT
      </button>

      <button
        type="button"
        onClick={() => onLanguageChange('en')}
        className={`px-2 h-[18px] sm:h-[19px] text-[8.5px] sm:text-[9px] font-bold rounded-full transition-all duration-150 cursor-pointer flex items-center justify-center leading-none ${
          currentLang === 'en'
            ? 'bg-[#BD5944] text-white shadow-xs'
            : 'text-white/60 hover:text-white'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};
