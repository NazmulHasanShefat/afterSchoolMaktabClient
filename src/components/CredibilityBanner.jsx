"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, UserCheck, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CredibilityBanner() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#0F2042] text-white py-8 sm:py-10 shadow-xl border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Stat 1 */}
          <div className="flex flex-col gap-1 p-2 group">
            <div className="flex items-center gap-2 text-amber-400">
              <Users className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{t.credibility.stat1Val}</span>
            </div>
            <span className="text-xs sm:text-sm text-blue-100 font-semibold">{t.credibility.stat1Title}</span>
            <span className="text-[11px] text-blue-200/70">{t.credibility.stat1Desc}</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col gap-1 p-2 group">
            <div className="flex items-center gap-2 text-emerald-400">
              <Award className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{t.credibility.stat2Val}</span>
            </div>
            <span className="text-xs sm:text-sm text-blue-100 font-semibold">{t.credibility.stat2Title}</span>
            <span className="text-[11px] text-blue-200/70">{t.credibility.stat2Desc}</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col gap-1 p-2 group">
            <div className="flex items-center gap-2 text-amber-400">
              <UserCheck className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{t.credibility.stat3Val}</span>
            </div>
            <span className="text-xs sm:text-sm text-blue-100 font-semibold">{t.credibility.stat3Title}</span>
            <span className="text-[11px] text-blue-200/70">{t.credibility.stat3Desc}</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col gap-1 p-2 group">
            <div className="flex items-center gap-2 text-emerald-400">
              <Clock className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{t.credibility.stat4Val}</span>
            </div>
            <span className="text-xs sm:text-sm text-blue-100 font-semibold">{t.credibility.stat4Title}</span>
            <span className="text-[11px] text-blue-200/70">{t.credibility.stat4Desc}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
