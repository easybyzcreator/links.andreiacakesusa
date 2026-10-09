import React from 'react';
import { ArrowRight, Play, Award } from 'lucide-react';
import { MAIN_COURSE } from '../data/linksData';
import { Language, TRANSLATIONS } from '../data/translations';

interface MainCourseBannerProps {
  lang: Language;
  onOpenLink: (url: string, title: string) => void;
}

export const MainCourseBanner: React.FC<MainCourseBannerProps> = ({ lang, onOpenLink }) => {
  const t = TRANSLATIONS[lang];

  return (
    <a
      href={MAIN_COURSE.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-3xl border border-[#342825]/20 shadow-md hover:shadow-xl transition-all duration-300 text-left min-h-[220px] sm:min-h-[240px] flex flex-col justify-end p-5 sm:p-6"
    >
      {/* Background Image - Luminous and clear */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={MAIN_COURSE.bgImage}
          alt={t.mainCourseTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          style={{ objectPosition: MAIN_COURSE.objectPosition || 'center 10%' }}
        />
        {/* Editorial Vignette & Gradient Matching Brand (#342825 / #BD5944) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1312] via-[#342825]/80 to-[#1A1312]/30" />
        <div className="absolute inset-0 bg-[#BD5944]/10 mix-blend-overlay" />
      </div>

      {/* Top Badges */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-auto pb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#342825] text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase shadow-sm">
          <span>{t.mainCourseBadge}</span>
        </span>

        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F7D8B5] bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10">
          <Award className="w-3 h-3 text-[#BD5944]" />
          <span>{t.mainCourseBadgeHighlight}</span>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-2">
        <h3 className="text-lg sm:text-2xl font-bold font-editorial text-white leading-tight tracking-tight mb-2 group-hover:text-[#F7D8B5] transition-colors">
          {t.mainCourseTitle}
        </h3>

        <p className="text-xs sm:text-[13px] text-white/90 line-clamp-2 mb-4 leading-relaxed max-w-lg">
          {t.mainCourseDesc}
        </p>

        {/* Bottom Bar: 100% online + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-white/15">
          <div className="flex items-center gap-1.5 text-xs text-white/85">
            <span className="w-4 h-4 rounded-full bg-[#BD5944] flex items-center justify-center text-white shrink-0">
              <Play className="w-2.5 h-2.5 fill-white translate-x-0.5" />
            </span>
            <span className="font-medium">{t.mainCourseStat2}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F7D8B5] group-hover:text-white group-hover:underline">
            <span>{t.mainCourseCta}</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#BD5944]" />
          </span>
        </div>
      </div>
    </a>
  );
};
