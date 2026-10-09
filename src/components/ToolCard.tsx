import React from 'react';
import { Calculator, ArrowRight, Play } from 'lucide-react';
import { TOOL_ITEM } from '../data/linksData';
import { Language, TRANSLATIONS } from '../data/translations';

interface ToolCardProps {
  lang: Language;
  onOpenLink: (url: string, title: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ lang, onOpenLink }) => {
  const t = TRANSLATIONS[lang];

  return (
    <a
      href={TOOL_ITEM.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#342825]/30 shadow-sm hover:shadow-xl transition-all duration-300 text-left min-h-[170px] sm:min-h-[185px] flex flex-col justify-end p-4 sm:p-5"
    >
      {/* Background with Luminous Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {TOOL_ITEM.bgImage ? (
          <img
            src={TOOL_ITEM.bgImage}
            alt={t.toolTitle}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2E201B] via-[#3B2823] to-[#251814]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1312] via-[#342825]/85 to-[#1A1312]/45" />
      </div>

      {/* Top Badge */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-auto pb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#342825] text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase shadow-xs whitespace-nowrap">
          <Calculator className="w-3 h-3 text-[#BD5944]" />
          <span>{t.toolBadge}</span>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-1">
        <h3 className="text-base sm:text-lg font-bold font-editorial text-white leading-snug group-hover:text-[#F7D8B5] transition-colors mb-1">
          {t.toolTitle}
        </h3>

        <p className="text-xs text-white/85 line-clamp-2 mb-3 leading-relaxed">
          {t.toolDesc}
        </p>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/15">
          <div className="flex items-center gap-1.5 text-[11px] text-white/80">
            <span className="w-3.5 h-3.5 rounded-full bg-[#BD5944] flex items-center justify-center text-white shrink-0">
              <Play className="w-2 h-2 fill-white translate-x-0.5" />
            </span>
            <span className="font-medium">{t.toolStat}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F7D8B5] group-hover:text-white group-hover:underline">
            <span>{t.toolCta}</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#BD5944]" />
          </span>
        </div>
      </div>
    </a>
  );
};
