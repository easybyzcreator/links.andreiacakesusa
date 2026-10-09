import React, { useState } from 'react';
import { Language, TRANSLATIONS } from '../data/translations';

interface SocialFooterProps {
  lang: Language;
}

export const SocialFooter: React.FC<SocialFooterProps> = ({ lang }) => {
  const [logoError, setLogoError] = useState(false);
  const t = TRANSLATIONS[lang];

  return (
    <footer className="w-full mt-8 mb-12 text-center flex flex-col items-center">
      {/* "DESENVOLVIDO POR" Section */}
      <div className="flex flex-col items-center justify-center my-4">
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#7D665B] uppercase mb-3 font-editorial">
          {t.developedBy}
        </span>

        {/* EBC - Easy Byz Creator Logo (+40% size, colored #342825, linking to www.easybyzcreator.com) */}
        <a
          href="https://www.easybyzcreator.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block p-1 hover:opacity-80 transition-opacity cursor-pointer"
          title="Easy Byz Creator - www.easybyzcreator.com"
        >
          {!logoError ? (
            <img
              src="https://i.ibb.co/0jxH40pC/l-ebc.png"
              alt="Easy Byz Creator"
              className="h-[135px] sm:h-[156px] w-auto object-contain"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(14%) sepia(12%) saturate(1067%) hue-rotate(320deg) brightness(96%) contrast(92%)',
              }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-1 py-2 text-[#342825]">
              <span className="text-2xl font-bold tracking-wider">EASY BYZ</span>
              <span className="text-sm tracking-widest text-[#7D665B]">CREATOR</span>
            </div>
          )}
        </a>
      </div>

      {/* Copyright Line: 4 separate lines centered */}
      <div className="mt-5 pt-4 border-t border-[#E8DFD5]/60 w-full max-w-sm flex flex-col items-center space-y-1">
        <p className="text-[11px] text-[#7A6B64] font-medium tracking-wide">
          {t.footerLine1}
        </p>
        <p className="text-[11px] text-[#7A6B64] font-medium tracking-wide">
          {t.footerLine2}
        </p>
        <p className="text-[10px] text-[#9A8B84] pt-1">
          {t.footerLine3}
        </p>
        <p className="text-[10px] text-[#9A8B84]">
          {t.footerLine4}
        </p>
      </div>
    </footer>
  );
};
