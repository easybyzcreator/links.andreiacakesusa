/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { AndreiaAvatar } from './components/AndreiaAvatar';
import { AppSection } from './components/AppSection';
import { MainCourseBanner } from './components/MainCourseBanner';
import { CourseCard } from './components/CourseCard';
import { ToolCard } from './components/ToolCard';
import { AboutSection } from './components/AboutSection';
import { SocialFooter } from './components/SocialFooter';
import { LanguageToggle } from './components/LanguageToggle';
import { COURSES } from './data/linksData';
import { Language, TRANSLATIONS } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleOpenLink = (url: string, title: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredCourses = COURSES.filter((c) => {
    const courseTitle = lang === 'en' && c.titleEn ? c.titleEn : c.title;
    const courseDesc = lang === 'en' && c.descriptionEn ? c.descriptionEn : c.description;
    const term = searchTerm.toLowerCase();
    return (
      courseTitle.toLowerCase().includes(term) ||
      courseDesc.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f2ec] text-[#342825] flex flex-col items-center px-4 py-6 sm:py-10 relative">
      {/* Discreet Language Toggle in Top-Right Corner */}
      <div className="w-full max-w-[560px] flex justify-end mb-2 sm:mb-3">
        <LanguageToggle currentLang={lang} onLanguageChange={setLang} />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#342825] text-white text-xs sm:text-sm font-medium shadow-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="w-full max-w-[560px] mx-auto flex flex-col items-center">
        {/* ================= HEADER SECTION ================= */}
        <header className="w-full flex flex-col items-center text-center mb-2 sm:mb-2.5 pt-5 sm:pt-7">
          {/* Avatar moved down 2-3 lines as requested */}
          <AndreiaAvatar />

          {/* Tag Pill */}
          <div className="mt-4 sm:mt-5 mb-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E8DFD5] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD5944]" />
            <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-wide text-[#7A5B4C] uppercase">
              {t.tagline}
            </span>
          </div>

          {/* Official Andréia Cakes Logo - 300% larger lettering without expanding vertical spacing */}
          <div className="flex justify-center my-1 sm:my-1.5 px-2">
            <img
              src="/andreia-cakes-logo.png"
              alt="Andréia Cakes"
              className="h-24 sm:h-28 w-auto object-contain max-w-[320px] sm:max-w-[380px]"
            />
          </div>

          {/* Subtitle / Promise */}
          <p className="mt-2 text-xs sm:text-[13px] text-[#5C4D46] max-w-md leading-relaxed">
            {t.heroPromise}{' '}
            <strong className="font-semibold text-[#342825]">
              {t.heroPromiseHighlight1}
            </strong>{' '}
            e faturar{' '}
            <strong className="font-semibold text-[#BD5944]">
              {t.heroPromiseHighlight2}
            </strong>
            .
          </p>

          {/* Proof Subtext */}
          <div className="mt-2.5 text-[11px] text-[#8C7A72] flex items-center justify-center gap-2">
            <span>{t.proof1}</span>
            <span>·</span>
            <span>{t.proof2}</span>
            <span>·</span>
            <span>{t.proof3}</span>
          </div>
        </header>

        {/* ================= BLOCO APLICATIVO ================= */}
        <AppSection lang={lang} />

        {/* ================= FEATURED BANNER (CURSO PRINCIPAL) ================= */}
        <div className="w-full my-2.5">
          <MainCourseBanner lang={lang} onOpenLink={handleOpenLink} />
        </div>

        {/* ================= CURSOS & ESPECIALIZAÇÕES ================= */}
        <section className="w-full my-6">
          {/* Section Divider Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] flex-1 bg-[#E8DFD5]" />
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#BD5944] uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.coursesSectionTitle}</span>
            </div>
            <div className="h-[1px] flex-1 bg-[#E8DFD5]" />
          </div>

          {/* Search / Filter */}
          {COURSES.length > 4 && (
            <div className="relative mb-3.5">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.coursesSearchPlaceholder}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#E8DFD5] text-xs text-[#342825] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#BD5944] transition-all"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 hover:text-slate-600 font-medium"
                >
                  {t.coursesSearchClear}
                </button>
              )}
            </div>
          )}

          {/* Cards List in Image 3 & 4 layout pattern */}
          <div className="space-y-3.5">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  lang={lang}
                  onOpenLink={handleOpenLink}
                />
              ))
            ) : (
              <div className="p-6 text-center bg-white rounded-2xl border border-[#E8DFD5]">
                <p className="text-xs text-[#6B5A52]">
                  {t.coursesEmpty}
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-2 text-xs text-[#BD5944] font-semibold hover:underline"
                >
                  {t.coursesViewAll}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ================= FERRAMENTAS & GESTÃO ================= */}
        <section className="w-full my-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] flex-1 bg-[#E8DFD5]" />
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#BD5944] uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t.toolBadge} & GESTÃO</span>
            </div>
            <div className="h-[1px] flex-1 bg-[#E8DFD5]" />
          </div>

          <ToolCard lang={lang} onOpenLink={handleOpenLink} />
        </section>

        {/* ================= QUEM É A ANDRÉIA ================= */}
        <AboutSection lang={lang} />

        {/* ================= FOOTER: DESENVOLVIDO POR ================= */}
        <SocialFooter lang={lang} />
      </main>
    </div>
  );
}
