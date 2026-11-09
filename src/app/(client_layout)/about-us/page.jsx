"use client";

import React from "react";
import {
  BookOpen,
  Award,
  CheckCircle2,
  Target,
  Compass,
  GraduationCap,
  Sparkles,
  UserCheck,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function AboutSection() {
  const { t } = useLanguage();
  const { aboutUs } = t;

  // Map icon components dynamically to the translated feature list
  const featureIcons = [
    <GraduationCap key="1" className="w-6 h-6 text-amber-600" />,
    <UserCheck key="2" className="w-6 h-6 text-amber-600" />,
    <Clock key="3" className="w-6 h-6 text-amber-600" />,
    <MessageSquare key="4" className="w-6 h-6 text-amber-600" />,
  ];

  return (
    <section className="bg-slate-50 text-slate-800 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header / Hero Introduction */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" /> {aboutUs.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {aboutUs.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {aboutUs.description}
          </p>
        </div>

        {/* Introduction & Quran Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <BookOpen className="w-5 h-5" />
              <span>{aboutUs.foundationsLabel}</span>
            </div>

            {/* Hadith / Quran Banner */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 space-y-3">
              <p className="italic text-slate-800 font-serif text-base sm:text-lg">
                {aboutUs.quranQuote}
              </p>
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                {aboutUs.quranReference}
              </p>
              <p className="text-xs text-slate-600 border-t border-amber-200/60 pt-2">
                {aboutUs.hadithReference}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutUs.foundationText1}
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutUs.foundationText2}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative w-full max-w-sm bg-center aspect-square rounded-2xl border border-emerald-100 p-8 flex flex-col justify-between overflow-hidden shadow-inner"
          
            >
              <div className="py-3 px-3 w-max rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <BookOpen className="" />
              </div>
              <div className="space-y-2 z-10">
                  <Image src="https://img.magnific.com/premium-vector/muslim-boys-group-studying-together-hand-drawn-art_175462-328.jpg?w=1480" alt="Logo" width={302} height={302} className="inline-block w-full object-cover mt-5" />
              
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Goals & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Goals */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {aboutUs.goalsTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutUs.goalsDesc}
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {aboutUs.visionTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {aboutUs.visionDesc}
            </p>
          </div>
        </div>

        {/* Educational Programs */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Award className="w-5 h-5" />
              <span>{aboutUs.curriculumTag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {aboutUs.curriculumTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {aboutUs.curriculumSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutUs.programs.map((program, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors group"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-800 leading-snug">
                  {program}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-8 sm:p-12 shadow-lg space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-400/30 text-amber-100 px-3 py-1 rounded-full text-xs font-medium">
              <ShieldCheck className="w-4 h-4" /> {aboutUs.whyTag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {aboutUs.whyTitle}
            </h2>
            <p className="text-amber-100 text-sm sm:text-base">
              {aboutUs.whySub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutUs.features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/95 text-slate-800 p-6 rounded-2xl space-y-3 shadow-md backdrop-blur-sm"
              >
                <div className="p-3 bg-green-100 rounded-xl w-fit">
                  {featureIcons[i]}
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="text-center bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {aboutUs.ctaTitle}
            </h2>
            <p className="text-emerald-200 text-sm sm:text-base">
              {aboutUs.ctaDesc}
            </p>
            <div className="pt-2">
              <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 text-sm sm:text-base">
                {aboutUs.ctaBtn}
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/40 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
