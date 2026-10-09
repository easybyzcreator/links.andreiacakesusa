import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { LinkItem } from '../data/linksData';
import { Language, TRANSLATIONS } from '../data/translations';

interface CourseCardProps {
  course: LinkItem;
  lang: Language;
  onOpenLink: (url: string, title: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, lang, onOpenLink }) => {
  const [imgError, setImgError] = useState(false);
  const t = TRANSLATIONS[lang];

  const title = lang === 'en' && course.titleEn ? course.titleEn : course.title;
  const description = lang === 'en' && course.descriptionEn ? course.descriptionEn : course.description;
  const badge = lang === 'en' && course.badgeEn ? course.badgeEn : course.badge;

  // Fallback pattern if external image fails
  const getFallbackGradient = (type: string) => {
    switch (type) {
      case 'cake-slice':
        return 'from-[#422B24] via-[#5C382C] to-[#2B1B17]';
      case 'sparkles':
        return 'from-[#3A2218] via-[#4D2E20] to-[#24150F]';
      case 'gift':
        return 'from-[#4F2B22] via-[#633529] to-[#331B15]';
      case 'star':
        return 'from-[#54381C] via-[#6B4824] to-[#362312]';
      case 'shield':
        return 'from-[#3D402B] via-[#4F5438] to-[#282B1C]';
      default:
        return 'from-[#342825] via-[#48342F] to-[#231A18]';
    }
  };

  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#342825]/30 shadow-sm hover:shadow-xl transition-all duration-300 text-left min-h-[190px] sm:min-h-[215px] flex flex-col justify-end p-4 sm:p-5"
    >
      {/* Background Image with careful object-position to never cut Andreia's head or the item */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {course.bgImage && !imgError ? (
          <img
            src={course.bgImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            style={{
              objectPosition: course.objectPosition || 'center 20%',
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getFallbackGradient(course.iconType)}`} />
        )}

        {/* Luminous Dark Contrast Overlay (Preserving photo while ensuring 100% legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1312] via-[#342825]/80 to-[#1A1312]/30" />
        <div className="absolute inset-0 bg-[#BD5944]/5 mix-blend-overlay" />
      </div>

      {/* Top Badge (White pill badge with dark bold text) */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-auto pb-4">
        {badge && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white text-[#342825] text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase shadow-xs whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 pt-1">
        {/* Title in Editorial Serif */}
        <h3 className="text-base sm:text-lg font-bold font-editorial text-white leading-snug group-hover:text-[#F7D8B5] transition-colors mb-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-white/85 line-clamp-2 mb-3 leading-relaxed">
          {description}
        </p>

        {/* Bottom Bar: 100% online + Saiba mais */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/15">
          <div className="flex items-center gap-1.5 text-[11px] text-white/80">
            <span className="w-3.5 h-3.5 rounded-full bg-[#BD5944] flex items-center justify-center text-white shrink-0">
              <Play className="w-2 h-2 fill-white translate-x-0.5" />
            </span>
            <span className="font-medium">{t.onlineBadge}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F7D8B5] group-hover:text-white group-hover:underline">
            <span>{t.learnMoreCta}</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#BD5944]" />
          </span>
        </div>
      </div>
    </a>
  );
};
