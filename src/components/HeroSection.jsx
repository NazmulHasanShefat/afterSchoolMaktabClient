"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Calendar, BookOpen, Globe, Mic } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection({ triggerTrialModal }) {
  const { lang, t } = useLanguage();
 

  return (
    <section className="relative w-full bg-[#FAF8F5] py-10 sm:py-16 overflow-hidden" id="hero">
      {/* Glow Backdrop Blur Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Visual Showcase Bento - Order 1 on mobile, Order 2 on desktop */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 relative flex flex-col gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Primary Study Atmosphere Card */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E5E1D8] group hover:border-emerald-500/40 transition-all">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  alt="Holy Quran with illuminated golden calligraphy on carved wooden rehal"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsgUu9qtpRR2W35zlvDE-iepq4hkVXNWPMB0v40mdVJd8xctwksQPmQPS3ks3i2goX_aVXhOru7KCt1jEx4Uz7L_xj28MJ12aAThkMdCXzJgOD-xqwu2X1JRSWp0nLiTDjUVfM64cy73MfymL9jDKkC5OwVyDFPPtqMlmG9mACHgKk0bVy52au0YutTO6TDZGIYuEWk8YtWGBhzbdFlzjiK2GV_jsX9kQA5sJn_BHGBYi95tzJY2Bb"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2042] via-[#0F2042]/50 to-transparent" />

                {/* Floating Live Indicator */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F2042] text-xs font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    <span>{t.hero.liveIndicator}</span>
                  </span>
                </div>

                {/* Overlaid Card Details */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 text-white">
                  <span className="text-[10px] sm:text-xs text-amber-400 uppercase tracking-wider font-bold">
                    {t.hero.virtualTitle}
                  </span>
                  <span className="text-base sm:text-lg font-bold leading-snug">
                    {t.hero.virtualSubtitle}
                  </span>
                  <p className="text-xs text-blue-100/90 line-clamp-2">
                    {t.hero.virtualDesc}
                  </p>
                </div>
              </div>

            </div>

            {/* Micro Highlight Overlay Card */}
            <div className="bg-white p-4 flex-col md:flex-row rounded-2xl shadow-lg flex items-center justify-between gap-3 border border-[#E5E1D8] hover:shadow-xl transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00236f] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#0F2042] font-bold">{t.hero.tajweedLab}</span>
                  <span className="text-[11px] text-[#444651]">{t.hero.tajweedLabDesc}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 bg-[#e7eeff] text-[#1E3A8A] rounded-lg font-bold shrink-0">
                {t.hero.included}
              </span>
            </div>
          </motion.div>

          {/* Left Editorial Column - Order 2 on mobile, Order 1 on desktop */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge / Accreditation Banner */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee8ff] text-[#0F2042] font-semibold text-xs shadow-xs border border-blue-200">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{t.hero.rating}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-[#006c4a] font-semibold text-xs border border-emerald-500/20 glow-emerald">
                <ShieldCheck className="w-3.5 h-3.5 text-[#006c4a]" />
                <span>{t.hero.trust}</span>
              </span>
            </div>

            {/* Bismillah Calligraphic Accent */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-lg sm:text-2xl text-[#006c4a] tracking-widest font-serif font-bold drop-shadow-xs">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <div className="h-0.5 w-16 sm:w-24 bg-gradient-to-r from-emerald-500/60 to-transparent" />
            </div>

            {/* Headings */}
            <div className="flex flex-col gap-2">
              <span className="text-xs sm:text-sm text-[#1E3A8A] tracking-wider uppercase font-extrabold">
                {t.hero.subhead}
              </span>
              <h1 className={` text-[#0F2042] text-center sm:text-left font-extrabold leading-[1.15] tracking-tight ${lang === 'bn' ? 'text-2xl sm:text-4xl leading-normal ' : 'text-2xl sm:text-4xl lg:text-5xl'}`}>
                {t.hero.heading}
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-[#444651] max-w-2xl leading-relaxed">
              {t.hero.desc}
            </p>

            {/* Primary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#006c4a] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:bg-[#005137] hover:shadow-xl transition-all transform hover:-translate-y-0.5 glow-emerald cursor-pointer"
                onClick={() => triggerTrialModal("Hero CTA")}
              >
                <Calendar className="w-5 h-5 text-emerald-300" />
                <span>{t.hero.bookTrialBtn}</span>
              </button>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#e7eeff] text-[#0F2042] font-bold text-sm sm:text-base rounded-xl shadow-xs hover:bg-[#dee8ff] transition-all"
                href="#featured-courses"
              >
                <BookOpen className="w-5 h-5 text-[#1E3A8A]" />
                <span>{t.hero.exploreTracksBtn}</span>
              </a>
            </div>

            {/* Live Student Count & Cohort Badge */}
            <div className="pt-3">
              <div className="p-4 bg-white rounded-2xl shadow-xs border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#1E3A8A] shrink-0 shadow-inner">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#0F2042] font-bold">{t.hero.activeStudentsCount}</span>
                    <span className="text-xs text-[#444651]">{t.hero.activeStudentsCountries}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shrink-0 glow-emerald" />
                  <span className="text-xs text-[#006c4a] font-bold uppercase tracking-wider">
                    {t.hero.separateBatches}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}