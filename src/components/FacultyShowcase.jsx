"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, CheckCircle, ArrowRight, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FacultyShowcase() {
  const { lang, t } = useLanguage();

  const FACULTY = [
    {
      id: 1,
      name: lang === "bn" ? "মোঃ নাফিউর রহমান" : "Md Nafiur Rahman",
      role: lang === "bn" ? "সার্টিফাইড আলিম • আরবি সাহিত্য" : "Certified Alim • Arabic Literature",
      exp: lang === "bn" ? "৩+ বছরের শিক্ষাদানের অভিজ্ঞতা" : "3+ Years Teaching Experience",
      tags: lang === "bn" ? ["দরসে নিজামী", "তাজবীদ হাফস", "ছেলেদের ব্যাচ"] : ["Dars-e-Nizami", "Tajweed Hafs", "Boys Batches"],
      desc: lang === "bn"
        ? "কোমলমতি ছেলেদের মৌলিক বর্ণমালা থেকে সহিহ তাজবীদ সহ তিলাওয়াতে পারদর্শী করে তুলতে বিশেষ অভিজ্ঞ।"
        : "Specialized in guiding beginners from basic Arabic alphabet phonics to complete rhythmic Tajweed recitation, instilling reverence and gentle discipline in young boys.",
      students: lang === "bn" ? "১২০+ শিক্ষার্থী মেন্টর করেছেন" : "120+ Students Mentored",
      cta: t.faculty.selectUstadh,
      type: "male"
    },
    {
      id: 2,
      name: lang === "bn" ? "ওস্তাধা তানিয়া সুলতানা" : "Ustadha Tania Sultana",
      role: lang === "bn" ? "সার্টিফাইড আলিমা • মাদ্রাসাতুল বানাত" : "Certified Alima • Madrasatul Banat",
      exp: lang === "bn" ? "২+ বছরের শিক্ষাদানের অভিজ্ঞতা" : "2+ Years Teaching Experience",
      tags: lang === "bn" ? ["আলিমা গ্র্যাজুয়েট", "পবিত্রতার ফিকহ", "মেয়েদের ব্যাচ"] : ["Alima Graduate", "Fiqh of Taharah", "Girls Batches"],
      desc: lang === "bn"
        ? "মেয়েদের ও ছোট শিশুদের জন্য নিবেদিত শিক্ষিকা। সাহাবিয়াতদের গল্প এবং চমৎকার উচ্চারণ কৌশলের জন্য পরিচিত।"
        : "Dedicated educator for girls and young children. Known for her nurturing pedagogy, storytelling around Sahabiyat, and crystal-clear phonetic drill techniques.",
      students: lang === "bn" ? "৯৫+ শিক্ষার্থী মেন্টর করেছেন" : "95+ Students Mentored",
      cta: t.faculty.selectAlima,
      type: "female"
    },
    {
      id: 3,
      name: lang === "bn" ? "হাফেজ মাওলানা জুবায়ের" : "Hafiz Mawlana Zubair",
      role: lang === "bn" ? "আশারাহ কিরাআতে ইজাজাহপ্রাপ্ত" : "Ijazah in Asharah Qira’at",
      exp: lang === "bn" ? "৬+ বছরের শিক্ষাদানের অভিজ্ঞতা" : "6+ Years Teaching Experience",
      tags: lang === "bn" ? ["হিফজ বিশেষজ্ঞ", "আশারাহ কিরাআত", "এডভান্সড বয়েজ"] : ["Hifz Specialist", "Asharah Qira'at", "Advanced Boys"],
      desc: lang === "bn"
        ? "অভিজ্ঞ হাফেজ যিনি প্রতিদিনের হিফজ ও পুনরাবৃত্তি পরিচালনা করেন। ঐতিহ্যবাহী মাদ্রাসার কৌশল প্রয়োগ করেন।"
        : "Experienced Hafiz leading daily memorization and mutashabihat retention. Imparts time-tested memory anchors used in classical Quran academies.",
      students: lang === "bn" ? "১৬০+ শিক্ষার্থী মেন্টর করেছেন" : "160+ Students Mentored",
      cta: t.faculty.selectUstadh,
      type: "male"
    }
  ];

  return (
    <section className="w-full bg-[#f0f3ff] dark:bg-[#0B1329] py-12 sm:py-20 transition-colors duration-300" id="faculty-section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs sm:text-sm text-[#006c4a] dark:text-emerald-400 font-bold uppercase tracking-wider">
              {t.faculty.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl text-[#0F2042] dark:text-white font-extrabold tracking-tight">
              {t.faculty.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#444651] dark:text-slate-300 leading-relaxed">
              {t.faculty.sub}
            </p>
          </div>

          <button
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#1E3A8A] dark:text-blue-400 hover:text-[#0F2042] dark:hover:text-blue-300 font-bold shrink-0 hover:underline cursor-pointer"
          >
            <span>{t.faculty.viewAllBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Scholar Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FACULTY.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              className="bg-white dark:bg-[#131F3B] rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-5 border border-[#E5E1D8] dark:border-[#1E293B] group hover:border-[#1E3A8A]/40 dark:hover:border-blue-500/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#dee8ff] dark:bg-[#1E293B] flex items-center justify-center text-[#1E3A8A] dark:text-blue-300 font-bold text-xl overflow-hidden shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    {faculty.type === "female" ? (
                      <UserCheck className="w-8 h-8 text-[#006c4a] dark:text-emerald-400" />
                    ) : (
                      <User className="w-8 h-8 text-[#1E3A8A] dark:text-blue-400" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base sm:text-lg text-[#0F2042] dark:text-white font-extrabold">
                        {faculty.name}
                      </h3>
                      <CheckCircle className="w-4 h-4 text-[#10B981] fill-[#10B981]/20 shrink-0" />
                    </div>
                    <span className="text-xs text-[#006c4a] dark:text-emerald-400 font-bold">
                      {faculty.role}
                    </span>
                    <span className="text-[11px] text-[#444651] dark:text-slate-400">
                      {faculty.exp}
                    </span>
                  </div>
                </div>

                {/* Qualification Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {faculty.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-[#e7eeff] dark:bg-[#1E293B] text-[11px] text-[#0F2042] dark:text-blue-200 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#444651] dark:text-slate-300 leading-relaxed">
                  {faculty.desc}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E5E1D8] dark:border-[#1E293B]">
                <span className="text-xs text-[#006c4a] dark:text-emerald-400 font-bold">
                  {faculty.students}
                </span>
                <button
                  className="text-xs text-[#1E3A8A] dark:text-blue-400 font-bold hover:underline cursor-pointer"
                >
                  {faculty.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}