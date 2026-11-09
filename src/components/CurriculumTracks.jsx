"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, ArrowRight, Shield, ScrollText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CurriculumTracks({ triggerTrialModal }) {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-20" id="curriculum-tracks">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs sm:text-sm text-[#006c4a] font-bold uppercase tracking-wider">
              {t.curriculum.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl text-[#0F2042] font-extrabold tracking-tight">
              {t.curriculum.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
              {t.curriculum.desc}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1E3A8A] bg-[#e7eeff] px-4 py-2 rounded-xl shrink-0 border border-blue-200 shadow-xs">
            <Shield className="w-4 h-4 text-[#1E3A8A]" />
            <span className="font-bold">{t.curriculum.dashboardTag}</span>
          </div>
        </motion.div>

        {/* Side-by-Side Architectural Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Track 1: Online Islamic Foundations Course */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6 border border-[#E5E1D8] group hover:border-[#1E3A8A]/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#e7eeff] text-xs text-[#1E3A8A] font-bold">
                  {t.curriculum.track1Badge}
                </span>
                <span className="text-xs font-semibold text-[#006c4a]">
                  {t.curriculum.track1Freq}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#dee8ff] text-[#1E3A8A] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  <ScrollText className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl text-[#0F2042] font-extrabold">
                    {t.curriculum.track1Title}
                  </h3>
                  <span className="text-xs text-[#444651]">
                    {t.curriculum.track1Sub}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                {t.curriculum.track1Desc}
              </p>

              {/* Feature Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track1F1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track1F2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track1F3}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track1F4}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#f0f3ff] p-4 rounded-xl gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] text-[#444651]">Duration & Format</span>
                <span className="text-xs sm:text-sm text-[#0F2042] font-bold">{t.curriculum.track1Format}</span>
              </div>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1E3A8A] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#0F2042] transition-colors shadow-md cursor-pointer"
                onClick={() => triggerTrialModal("Islamic Foundations Syllabus")}
              >
                <span>{t.curriculum.track1Btn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Track 2: Online Quran Tutors & Tajweed */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6 border border-[#E5E1D8] group hover:border-[#10B981]/40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-xs text-[#006c4a] font-bold">
                  {t.curriculum.track2Badge}
                </span>
                <span className="text-xs font-semibold text-[#006c4a]">
                  {t.curriculum.track2Freq}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-[#006c4a] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform glow-emerald">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl text-[#0F2042] font-extrabold">
                    {t.curriculum.track2Title}
                  </h3>
                  <span className="text-xs text-[#444651]">
                    {t.curriculum.track2Sub}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                {t.curriculum.track2Desc}
              </p>

              {/* Feature Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track2F1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track2F2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track2F3}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#006c4a] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F2042]">{t.curriculum.track2F4}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#f0f3ff] p-4 rounded-xl gap-3">
              <div className="flex flex-col">
                <span className="text-[11px] text-[#444651]">Duration & Format</span>
                <span className="text-xs sm:text-sm text-[#0F2042] font-bold">{t.curriculum.track2Format}</span>
              </div>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#006c4a] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#005137] transition-colors shadow-md glow-emerald cursor-pointer"
                onClick={() => triggerTrialModal("Quran & Tajweed Pathway")}
              >
                <span>{t.curriculum.track2Btn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
