"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Monitor, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MaktabDifference() {
  const { lang, t } = useLanguage();

  const PILLARS = [
    {
      icon: GraduationCap,
      title: lang === "bn" ? "অনলাইন একাডেমি কার্যক্রম" : "Online Academic Programs",
      desc: lang === "bn"
        ? "কায়দা থেকে নাযিরা পর্যন্ত নির্ধারিত স্তর। স্ট্যান্ডার্ড গ্রেডিং নিশ্চিত করে অভিভাবকরা যেন সন্তানের বর্তমান উন্নতি বুঝতে পারেন।"
        : "Graded levels from Qaida to advanced Nazirah. Standardized benchmarks ensure parents always know their child’s current stage.",
      color: "text-[#1E3A8A]",
      bg: "bg-[#e7eeff]",
    },
    {
      icon: BookOpen,
      title: lang === "bn" ? "সুসংগঠিত পাঠ্যবই" : "Structured Textbooks",
      desc: lang === "bn"
        ? "বয়স উপযোগী ডিজিটাল ইসলামিক স্টাডিজ ওয়ার্কবুক, যেখানে সিরাত, আকিদা ও মাসনুন দোয়া সুবিন্যস্তভাবে অন্তর্ভুক্ত।"
        : "Curated age-appropriate Islamic Studies workbooks delivered digitally, covering Seerah, Aqeedah, and Masnoon Duas systematically.",
      color: "text-[#1E3A8A]",
      bg: "bg-[#e7eeff]",
    },
    {
      icon: Monitor,
      title: lang === "bn" ? "ইন্টারেক্টিভ তিলাওয়াত" : "Interactive Live Recitation",
      desc: lang === "bn"
        ? "এইচডি অডিও ও ডিজিটাল পয়েন্টার শিক্ষককে সরাসরি প্রতিটি হরকতের সঠিক স্থান ও উচ্চারণের স্থান চিহ্নিত করতে সাহায্য করে।"
        : "High-definition audio and digital pointers allow scholars to highlight exact vowel signs and letter joints in real-time.",
      color: "text-[#006c4a]",
      bg: "bg-emerald-500/15",
    },
    {
      icon: ShieldAlert,
      title: lang === "bn" ? "নিরাপদ ও নিবেদিত পরিবেশ" : "Safe & Monitored Space",
      desc: lang === "bn"
        ? "শিশু সুরক্ষা নীতির পূর্ণ মানদণ্ড অনুসরণ। গুণগত মান ও অভিভাবকদের পর্যালোচনার জন্য ক্লাস রেকর্ড রক্ষা করা হয়।"
        : "Full compliance with child safeguarding standards. Sessions are recorded for pedagogical quality assurance and parental review.",
      color: "text-amber-500",
      bg: "bg-amber-500/15",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-20" id="maktab-difference">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2 pb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-sm text-[#1E3A8A] font-bold uppercase tracking-wider">
            {t.difference.tag}
          </span>
          <h2 className="text-2xl sm:text-4xl text-[#0F2042] font-extrabold tracking-tight">
            {t.difference.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
            {t.difference.sub}
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col gap-3 border border-[#E5E1D8] group hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg text-[#0F2042] font-extrabold">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
