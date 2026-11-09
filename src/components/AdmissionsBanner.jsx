"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionsBanner() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#FAF8F5] dark:bg-black py-12 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          className="bg-gradient-to-r from-[#0F2042] via-[#1E3A8A] to-[#0F2042] rounded-3xl p-6 sm:p-12 shadow-2xl text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Banner Copy */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#10B981] text-[#0F2042] font-extrabold text-xs uppercase tracking-wider shadow-md glow-emerald">
                  {t.admissions.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight">
                {t.admissions.title}
              </h2>

              <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl leading-relaxed">
                {t.admissions.desc}
              </p>

              {/* Key Reassurances */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-blue-100/90 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> {t.admissions.reassurance1}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> {t.admissions.reassurance2}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> {t.admissions.reassurance3}
                </span>
              </div>
            </div>

            {/* Banner Action Card */}
            <div className="lg:col-span-5 bg-white text-[#0F2042] p-6 rounded-2xl shadow-xl flex flex-col gap-4 border border-white/20">
              <div className="flex flex-col text-center">
                <span className="text-base sm:text-lg font-extrabold">{t.admissions.fastTrack}</span>
                <span className="text-xs text-[#444651]">
                  {t.admissions.fastTrackSub}
                </span>
              </div>

              {/* WhatsApp Direct Action Button */}
              <a
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#006c4a] text-white font-bold text-sm rounded-xl shadow-md hover:bg-[#005137] transition-all text-center glow-emerald"
                href="https://wa.me/+8801787110752"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span>{t.admissions.chatWhatsapp}</span>
              </a>

              {/* Booking Free Trial Link */}
              <button
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1E3A8A] text-white font-bold text-sm rounded-xl shadow-md hover:bg-[#0F2042] transition-all text-center glow-blue cursor-pointer"
            
              >
                <Calendar className="w-5 h-5 text-blue-200" />
                <span>{t.admissions.bookCalendar}</span>
              </button>

              {/* Hotline Footnote */}
              <div className="flex items-center justify-center gap-1.5 pt-1 text-xs text-[#444651]">
                <Phone className="w-3.5 h-3.5 text-[#1E3A8A]" />
                <span>{t.admissions.hotline}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
