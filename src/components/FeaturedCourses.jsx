"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, CalendarDays } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FeaturedCourses({ triggerTrialModal }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const { lang, t } = useLanguage();

  const COURSES = [
    {
      id: 1,
      category: "quran",
      title: lang === "bn" ? "তাজবীদের নিয়মসহ কুরআন পাঠ" : "Quran Reading with Tajweed Rules",
      badge: lang === "bn" ? "লেভেল ১ • বয়স ৫+" : "Level 1 • Ages 5+",
      tag: lang === "bn" ? "বিগিনার ফ্রেন্ডলি" : "Beginner Friendly",
      tagBg: "bg-[#006c4a] text-white",
      rating: "4.98",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCnjJWpz-IDMqjOGwOxCe3ho9ULfHQ3ZAhs4KP3gksxi_kdMJexK5wdaCMoe1BtXMj0voEtSja7vHVXciLEjQ_LOkhyZx89luCZrmJA1NsDEuUO7uhE0FBf0_6_6H6H38JiQqG5iXJftkAtr5f2SNlL8NzGUik3KxvTdS4YjdF6rjNa7Q1bWoDgdXVS-JcmW0OtWdBlQWcdiI-4dokpw_i_cUq9hnoHTS-6xZc-RB2KNokmeK_VP-3R",
      description:
        lang === "bn"
          ? "নূরানী কায়দার মাধ্যমে ধ্বনি শিক্ষা, বর্ণ চেনা, মাখরাজ স্থান চর্চা এবং ধীরে ধীরে ৩০ পারার সাবলীল নাযিরা শিক্ষা।"
          : "Phonetics through Noorani Qaida, letter recognition, articulation points (Makharij), and progressing to fluent Nazirah of the 30 Juz.",
      duration: "45 mins",
      frequency: lang === "bn" ? "সপ্তাহে ৩ দিন" : "3x/wk",
      price: "$65",
    },
    {
      id: 2,
      category: "islamic",
      title: lang === "bn" ? "শিশু ও কিশোরদের জন্য ইসলামিক এসেনশিয়ালস" : "Islamic Essentials for Kids & Teens",
      badge: lang === "bn" ? "কিশোর • বয়স ৭-১৫" : "Youth • Ages 7-15",
      tag: lang === "bn" ? "কোর ট্র্যাক" : "Core Track",
      tagBg: "bg-[#1E3A8A] text-white",
      rating: "4.92",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB1FCod8bcvcIecBlhMdjryJrjdunkIWpd7yJI69ozF_CW7Eobh0BzyB2HbRwXzhwBl5tazWdcLmZibvkvkX1XCAx_w9aesWlPoDoSbe9-Hr1IEl-gskmzebIBitYVKYIpJYEd-RXPW_xaum-J8NP4FYubKEYZsgr7kJJyNyz8gfeDssJA-nzxxDmfiGWvlaoNigWTM42W2zc1eRsFdNxH1WriGmT1CSlLdKINa8C8NpSkVt9VjUIZV",
      description:
        lang === "bn"
          ? "নামাজের ফিকহ, দৈনন্দিন সকাল-সন্ধ্যার আজকার, নববী সিরাত, আদব-বায়াত এবং আধুনিক যুগে ইসলামের সঠিক অনুশীলন।"
          : "Practical Fiqh of Salah, essential daily morning/evening Adhkar, prophetic Seerah, respectful etiquette (Adab), and living Islam in modern times.",
      duration: "50 mins",
      frequency: lang === "bn" ? "সপ্তাহে ২ দিন" : "2x/wk",
      price: "$55",
    },
    {
      id: 3,
      category: "quran",
      title: lang === "bn" ? "হিফজ ও কুরআন মুখস্থকরণ" : "Hifdh & Quran Memorization",
      badge: lang === "bn" ? "এডভান্সড • বয়স ৮+" : "Advanced • Ages 8+",
      tag: lang === "bn" ? "হিফজ ট্র্যাকার" : "Hifz Tracker",
      tagBg: "bg-amber-500 text-[#0F2042]",
      rating: "5.0",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQPqqUsw-_KV2u9lfNpMXKVzqZvNotFNWK0PCyjf8Nxks6o2xFikXYlwiTZrFbm_FZdKic0jk6hzPGjGb4VIryndiysqjWiKtjjzmoM4hqo5F9GIOUU0CeqWf-2DFHkJqbs9ytr8UelfpYD0BYBOXrdoKarbknSTeKMjuleq2RWIOMtGouOltDryImyaaFDjTyU_T8khKkXLXmr2K-F7VwqNtVhkNnE0tVVxCNW-5rSbmQDmgIOXd5",
      description:
        lang === "bn"
          ? "সনদপ্রাপ্ত হাফেজদের সরাসরি তত্ত্বাবধানে নতুন পড়া (সবক), পেছনের পড়া (সবকী) এবং মজবুত রিভিশন (মনজিল) চক্র।"
          : "Rigorous Sabaq (new lesson), Sabqi (recent revisions), and Manzil (retention) cycle supervised by certified Huffaz with Mutashabihat mastery.",
      duration: "60 mins",
      frequency: lang === "bn" ? "সপ্তাহে ৪ বা ৫ দিন" : "4x or 5x/wk",
      price: "$90",
    },
    {
      id: 4,
      category: "arabic",
      title: lang === "bn" ? "ক্লাসিক্যাল আরবি ভাষা ও ব্যাকরণ" : "Classical Arabic Language & Grammar",
      badge: lang === "bn" ? "ভাষা • বয়স ১০+" : "Language • Ages 10+",
      tag: lang === "bn" ? "বোধগম্যতা" : "Comprehension",
      tagBg: "bg-[#006c4a] text-white",
      rating: "4.89",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPuonMBDLf4S_bWiHmNNtQ-fPFPhYBOFWSSwz0Z5nGcGDWZpa-i1MmOhzCMTtdUkfI6SxswHYxZZguv77MrA3Saoag-1w3cCOAoASoGB2qRb68SF4AhR5bXV-s0M9IAzlnh38dEmwl-gmsQwXuCULZTJjYlb5x3KnCa4ekNZntgItA9jL8Plef4ukfRmZLjElH3yD_b7msgRMGVB3fJEGMUnCidOyz9-GPamXkymEoqLHLPqFISrid",
      description:
        lang === "bn"
          ? "কুরআনের ভাষা অনুধাবনের সুযোগ। নحو (বাক্যরীতি), صرف (শব্দরূপ) এবং কুরআনের গুরুত্বপূর্ণ শব্দভাণ্ডার শিক্ষা।"
          : "Unlock the language of the Quran. Foundational Nahw (syntax), Sarf (morphology), and common Quranic vocabulary building blocks for young learners.",
      duration: "45 mins",
      frequency: lang === "bn" ? "সপ্তাহে ২ দিন" : "2x/wk",
      price: "$60",
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  return (
    <section className="w-full bg-[#FAF8F5] dark:bg-[#0B1329] py-12 sm:py-20 transition-colors duration-300" id="featured-courses">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title & Dynamic Filter Tabs */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm text-[#1E3A8A] dark:text-blue-400 font-bold uppercase tracking-wider">
              {t.courses.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl text-[#0F2042] dark:text-white font-extrabold tracking-tight">
              {t.courses.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#444651] dark:text-slate-300">
              {t.courses.sub}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#e7eeff] dark:bg-[#1E293B] p-1.5 rounded-2xl border border-blue-200 dark:border-blue-900/50 shadow-inner">
            {[
              { id: "all", label: t.courses.tabAll },
              { id: "quran", label: t.courses.tabQuran },
              { id: "islamic", label: t.courses.tabIslamic },
              { id: "arabic", label: t.courses.tabArabic },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-white dark:bg-[#131F3B] text-[#0F2042] dark:text-white shadow-md glow-blue"
                    : "text-[#444651] dark:text-slate-400 hover:text-[#0F2042] dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#131F3B] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-xl transition-all border border-[#E5E1D8] dark:border-[#1E293B] group hover:border-[#1E3A8A]/40 dark:hover:border-blue-500/40"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={course.image}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-[#0F2042]/90 backdrop-blur-md rounded-lg text-xs font-bold text-[#0F2042] dark:text-white shadow-xs">
                      {course.badge}
                    </span>
                    <span
                      className={`absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-xs ${course.tagBg}`}
                    >
                      {course.tag}
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex flex-col gap-2.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                      <span className="text-xs text-[#444651] dark:text-slate-400 font-semibold ml-1">
                        ({course.rating})
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F2042] dark:text-white leading-snug group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-xs text-[#444651] dark:text-slate-300 leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[#E5E1D8] dark:border-[#1E293B] text-[#444651] dark:text-slate-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5 text-[#006c4a] dark:text-emerald-400" /> {course.frequency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pricing Footer */}
                <div className="p-4 bg-[#f0f3ff] dark:bg-[#1B2A4A] flex items-center justify-between border-t border-[#E5E1D8] dark:border-[#1E293B]">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#444651] dark:text-slate-400 font-medium">{t.courses.monthlyBatches}</span>
                    <span className="text-lg text-[#0F2042] dark:text-white font-extrabold">
                      {course.price} <span className="text-xs font-normal text-[#444651] dark:text-slate-400">/mo</span>
                    </span>
                  </div>
                  <button
                    className="px-4 py-2 bg-[#1E3A8A] dark:bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-[#0F2042] dark:hover:bg-emerald-500 transition-colors shadow-md cursor-pointer"
                    onClick={() => triggerTrialModal(course.title)}
                  >
                    {t.courses.freeTrial}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}