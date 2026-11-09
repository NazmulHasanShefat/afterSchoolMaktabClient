"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Scale, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InstitutionalStatement() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#0F2042] text-white py-14 sm:py-24 relative overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Mosque Background Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <Landmark className="w-[450px] h-[450px] text-amber-300" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* Scholarly Mission Quote */}
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1 rounded-full bg-white/10 text-amber-400 font-semibold text-xs tracking-wider border border-amber-400/20">
            {t.statement.tag}
          </span>

          <blockquote className="text-xl sm:text-3xl md:text-4xl text-white font-serif italic leading-relaxed font-light">
            {t.statement.quote}
          </blockquote>

          <span className="text-xs sm:text-sm text-blue-200 tracking-wider uppercase font-semibold">
            {t.statement.author}
          </span>
        </motion.div>

        {/* 3 Distinct Core Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Guarantee 1 */}
          <motion.div
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 flex flex-col gap-3 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#006c4a] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform glow-emerald">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">{t.statement.g1Title}</h4>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              {t.statement.g1Desc}
            </p>
          </motion.div>

          {/* Guarantee 2 */}
          <motion.div
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 flex flex-col gap-3 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform glow-blue">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">{t.statement.g2Title}</h4>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              {t.statement.g2Desc}
            </p>
          </motion.div>

          {/* Guarantee 3 */}
          <motion.div
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all duration-300 flex flex-col gap-3 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-[#0F2042] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform glow-gold">
              <Scale className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">{t.statement.g3Title}</h4>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
              {t.statement.g3Desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
