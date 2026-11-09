"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full bg-[#f0f3ff] py-12 sm:py-20" id="testimonials-section">
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
            <span className="text-xs sm:text-sm text-[#006c4a] font-bold uppercase tracking-wider">
              {t.testimonials.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl text-[#0F2042] font-extrabold tracking-tight">
              {t.testimonials.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#444651]">
              {t.testimonials.sub}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E5E1D8] shrink-0 shadow-xs">
            <span className="text-xs sm:text-sm text-[#0F2042] font-bold">{t.testimonials.rating}</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary Dual-Language Parent Card */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-5 md:col-span-2 border border-[#E5E1D8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs text-[#006c4a] font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {t.testimonials.verifiedParent}
                </span>
              </div>

              {/* Bengali Testimonial Quote */}
              <blockquote className="text-base sm:text-xl text-[#0F2042] font-semibold leading-relaxed">
                “আমাদের ছেলে অনেক দিন যাবত After school Maktab এ পড়ছে। মাশাল্লাহ অনেক ভালো শিক্ষক... আল্লাহ তাদের
                নেক হায়াত দান করুন ও ইলম দান করুন। আমিন।”
              </blockquote>

              {/* English Translation */}
              <p className="text-xs sm:text-sm text-[#444651] italic leading-relaxed bg-[#f9f9ff] p-4 rounded-xl border border-[#E5E1D8]">
                “Our son has been enrolled at After School Maktab for a long time now. Masha’Allah, the teachers are
                exceptionally capable and patient with school-going children. May Allah bless their life and grant
                them abundant sacred knowledge. Ameen.”
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#E5E1D8] gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dee8ff] flex items-center justify-center font-bold text-[#1E3A8A] shrink-0 shadow-inner">
                  RA
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-[#0F2042] font-extrabold">Rabeya Akter</span>
                  <span className="text-[11px] text-[#444651]">Parent of Zayan (Age 9) • New York, USA</span>
                </div>
              </div>
              <span className="text-xs px-3 py-1 bg-[#e7eeff] rounded-lg text-[#0F2042] font-semibold self-start sm:self-center">
                Batch: Boys Level 2
              </span>
            </div>
          </motion.div>

          {/* UK Parent Testimonial */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-5 border border-[#E5E1D8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>

              <h4 className="text-base sm:text-lg text-[#0F2042] font-extrabold leading-snug">
                {t.testimonials.ukTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                {lang === "bn"
                  ? "“আমাদের মেয়ের জন্য সপ্তাহের ক্লাসের সাথে স্কুলের পড়াশোনার সামঞ্জস্য করা খুব কঠিন হচ্ছিল। উস্তাধা তানিয়ার অনলাইন ৪৫ মিনিটের ক্লাসটি আমাদের সব সহজ করে দিয়েছে। তার উচ্চারণ আগের চেয়ে অনেক স্পষ্ট!”"
                  : "“Balancing UK primary school with weekend Quran classes was stressing our daughter. After School Maktab’s 45-minute evening slots with Ustadha Tania changed everything. Her Makharij are clearer than ever!”"}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#E5E1D8]">
              <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center font-bold text-[#006c4a] shrink-0 shadow-inner">
                FK
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-[#0F2042] font-extrabold">Farhan & Khadijah</span>
                <span className="text-[11px] text-[#444651]">Parents of Maryam (Age 7) • London, UK</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Student Milestones Ticker Bar */}
        <motion.div
          className="mt-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-[#E5E1D8]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-[#0F2042] text-xs sm:text-sm font-bold shrink-0">
            <Trophy className="w-5 h-5 text-[#006c4a]" />
            <span>{t.testimonials.milestonesTag}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#444651]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>
                <strong>Anisha Rahman</strong> (Sylhet) completed Qaida Lesson 14
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
              <span>
                <strong>Rafiqul Islam</strong> (Dhaka) passed Juz 30 Exam
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>
                <strong>Ayesha Siddiqua</strong> memorized Surah Al-Mulk
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
