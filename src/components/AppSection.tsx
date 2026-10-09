import React from 'react';
import { Smartphone, Cake, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AppSectionProps {
  lang: Language;
}

export const AppSection: React.FC<AppSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="w-full mt-1 sm:mt-1.5 mb-6">
      {/* Category Header: Lançamento + Título com Destaque */}
      <div className="flex flex-col items-center text-center mt-1 sm:mt-1.5 mb-5 sm:mb-6 px-2">
        {/* "Lançamento" com tom escuro do marrom (#342825) e +25% de tamanho */}
        <span className="font-script text-[60px] sm:text-[75px] md:text-[90px] text-[#342825] tracking-wide leading-none select-none drop-shadow-xs mb-3 sm:mb-4">
          {t.appBlockPretitle}
        </span>

        {/* Linha com divisores elegantes e o título dividido em 2 linhas */}
        <div className="flex items-center gap-2.5 sm:gap-4 w-full justify-center">
          <div className="h-[1px] flex-1 max-w-[25px] sm:max-w-[50px] bg-[#D4C3B5]" />
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#BD5944] shrink-0" />
            <h2 className="flex flex-col items-center text-center font-editorial leading-tight">
              <span className="text-sm sm:text-base md:text-lg font-bold text-[#BD5944] tracking-wider uppercase">
                {t.appBlockTitleLine1}
              </span>
              <span className="text-sm sm:text-base md:text-lg font-bold text-[#342825] tracking-wider uppercase mt-0.5">
                {t.appBlockTitleLine2}
              </span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 max-w-[25px] sm:max-w-[50px] bg-[#D4C3B5]" />
        </div>
      </div>

      {/* 2 Divided Boxes */}
      <div className="flex flex-col gap-4">
        {/* ================= CARD 1: ALUNAS (Destaque em #BD5944 para gerar vendas) ================= */}
        <div className="relative flex flex-col justify-between text-left p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#BD5944] via-[#AA4C38] to-[#913D2C] text-white shadow-md hover:shadow-xl transition-all duration-300 border border-[#BD5944]/40 overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/10 blur-xl pointer-events-none" />

          <div>
            {/* Tag Pill: OPORTUNIDADE ÚNICA */}
            <div className="flex items-center justify-between gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white text-[#913D2C] shadow-xs whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-[#BD5944]" />
                <span>{t.alunaTag}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold font-editorial text-white leading-tight mb-2.5">
              {t.alunaTitle}
            </h3>

            {/* Dedicated Text requested by user */}
            <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed mb-5 font-normal">
              {t.alunaText}
            </p>
          </div>

          {/* 2 Action Buttons - Inverted order: 1º Compra, 2º Simulação */}
          <div className="pt-3 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* 1º Botão de compra: Quero meu aplicativo */}
            <a
              href="https://paginadevendas-andreiacakes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3.5 rounded-xl bg-white text-[#913D2C] hover:bg-[#FAF6F0] font-bold text-xs sm:text-[13px] flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] text-center"
            >
              <span>{t.alunaBtnBuy}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#913D2C]" />
            </a>

            {/* 2º Botão de simulação: Testar aplicativo na prática */}
            <a
              href="https://appandreiacakessimulacao.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3.5 rounded-xl bg-[#342825] text-white hover:bg-[#251B19] font-bold text-xs sm:text-[13px] flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] text-center border border-white/20"
            >
              <span>{t.alunaBtnTest}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-white/80" />
            </a>
          </div>
        </div>

        {/* ================= CARD 2: CLIENTES ================= */}
        <div className="relative flex flex-col justify-between text-left p-5 sm:p-6 rounded-3xl bg-white border border-[#E8DFD5] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
          <div>
            {/* Tag Pill */}
            <div className="flex items-center justify-between gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1 text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#342825]/10 text-[#342825] whitespace-nowrap">
                <Cake className="w-3 h-3 text-[#342825]" />
                <span>{t.clienteTag}</span>
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-base sm:text-lg font-bold font-editorial text-[#342825] leading-snug">
              {t.clienteTitle}
            </h3>
            <p className="text-xs sm:text-[13px] font-bold text-[#BD5944] mt-0.5 mb-2.5">
              {t.clienteSubtitle}
            </p>

            {/* Dedicated Text requested by user */}
            <p className="text-xs sm:text-[12.5px] text-[#5C4D46] leading-relaxed mb-5">
              {t.clienteText}
            </p>
          </div>

          {/* Action Button: Dividido em 2 linhas, com texto entre parênteses na linha de baixo */}
          <div className="pt-3 border-t border-[#F2ECE4]">
            <a
              href="https://andreiacakesusa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#342825] text-white hover:bg-[#251B19] shadow-xs transition-all hover:scale-[1.01] text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="font-bold text-xs sm:text-sm text-white">
                  {t.clienteBtnLine1}
                </span>
                <span className="text-[10.5px] sm:text-xs text-white/80 font-normal mt-0.5">
                  {t.clienteBtnLine2}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#BD5944] shrink-0 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
