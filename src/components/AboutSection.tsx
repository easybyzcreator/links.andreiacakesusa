import React from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="w-full my-8">
      {/* Container in pristine rounded-3xl card */}
      <div className="rounded-3xl bg-white border border-[#E8DFD5] p-5 sm:p-7 shadow-xs text-left">
        {/* Kicker Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-[1.5px] bg-[#BD5944]" />
          <span className="text-[11px] font-bold tracking-widest text-[#BD5944] uppercase">
            {t.aboutBadge}
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-xl sm:text-2xl font-bold font-editorial text-[#342825] leading-tight mb-4 tracking-tight">
          {t.aboutTitle}
        </h2>

        {/* Bio Paragraphs */}
        <div className="space-y-3 text-xs sm:text-[13px] text-[#5C4D46] leading-relaxed">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </div>

        {/* Two Highlight Boxes */}
        <div className="grid grid-cols-2 gap-3 my-5">
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EFE8DF]">
            <div className="text-sm sm:text-base font-extrabold text-[#BD5944] font-editorial">
              {t.aboutStat1Year}
            </div>
            <p className="text-[11px] sm:text-xs text-[#5C4D46] mt-0.5 leading-snug">
              {t.aboutStat1Label}
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EFE8DF]">
            <div className="text-sm sm:text-base font-extrabold text-[#BD5944] font-editorial">
              {t.aboutStat2Year}
            </div>
            <p className="text-[11px] sm:text-xs text-[#5C4D46] mt-0.5 leading-snug">
              {t.aboutStat2Label}
            </p>
          </div>
        </div>

        {/* Bottom Lockup: 9 Anos de Cozinha + Andréia Cakes Signature */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F2ECE4]">
          <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-[#342825] text-white text-[11px] font-semibold">
            <span className="text-[#F7D8B5] font-bold mr-1">9</span>
            <span className="text-white/90">{t.aboutExp}</span>
          </div>

          <div className="font-editorial italic text-base sm:text-lg font-bold text-[#BD5944]">
            Andréia Cakes
          </div>
        </div>
      </div>
    </section>
  );
};
