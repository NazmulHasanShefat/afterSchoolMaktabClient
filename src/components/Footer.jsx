"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, MessageSquare, PlayCircle, Users, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer({ }) {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter form submitted with email:", email);
    // Here you would typically handle the newsletter subscription logic, e.g., sending the email to your backend or an email service.
    setEmail(""); // Clear the input field after submission
  };

  return (
    <footer className="w-full bg-[#0F2042] text-blue-100/80 pt-12 sm:pt-20 pb-8 border-t border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] flex items-center justify-center text-white font-bold shadow-md">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-lg font-extrabold text-white">After School Maktab</span>
            </div>

            <p className="text-xs sm:text-sm text-blue-200/70 max-w-sm leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-blue-200">{t.footer.sanadVerified}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <button
                aria-label="Community Chat"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1E3A8A] text-blue-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                aria-label="Educational Videos"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1E3A8A] text-blue-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
              </button>
              <button
                aria-label="Parent Community"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1E3A8A] text-blue-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Users className="w-4 h-4" />
              </button>
              <button
                aria-label="Admissions Email"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1E3A8A] text-blue-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 3: Tracks */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-extrabold text-white">{t.footer.curriculumTracksTitle}</span>
            <div className="flex flex-col gap-2 text-xs pt-1">
              <a className="hover:text-amber-400 transition-colors" href="#featured-courses">
                Noorani Qaida & Phonics
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#featured-courses">
                Nazirah & Tajweed Rules
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#featured-courses">
                Hifdh & Revision Program
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#featured-courses">
                Classical Arabic Vocabulary
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#featured-courses">
                Islamic Studies & Seerah
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#featured-courses">
                Daily Duas & Fardh Ain
              </a>
            </div>
          </div>

          {/* Col 4: Institute */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-extrabold text-white">{t.footer.instituteTitle}</span>
            <div className="flex flex-col gap-2 text-xs pt-1">
              <a className="hover:text-amber-400 transition-colors" href="#maktab-difference">
                Our Vision & Pedagogy
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#faculty-section">
                Faculty & Asanid
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#curriculum-tracks">
                Term Schedules
              </a>
              <a className="hover:text-amber-400 transition-colors" href="#testimonials-section">
                Parent Testimonials
              </a>
              <button
                className="text-left hover:text-amber-400 transition-colors cursor-pointer"
                type="button"
              >
                Tuition & Sibling Aid
              </button>
              <button
                className="text-left hover:text-amber-400 transition-colors cursor-pointer"
                type="button"
              >
                Safeguarding Policy
              </button>
            </div>
          </div>

          {/* Col 5: Newsletter */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-extrabold text-white">{t.footer.newsletterTitle}</span>
            <p className="text-xs text-blue-200/70 leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
            <form className="flex flex-col gap-2 pt-1" onSubmit={handleNewsletterSubmit}>
              <div className="flex items-center gap-1.5">
                <input
                  className="w-full px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-blue-200/50 text-xs focus:outline-none focus:bg-white/20 transition-all border border-white/10"
                  placeholder={t.footer.placeholderEmail}
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-[#10B981] text-[#0F2042] font-bold text-xs rounded-xl hover:bg-[#059669] hover:text-white transition-all shrink-0 shadow-md glow-emerald cursor-pointer"
                  type="submit"
                >
                  {t.footer.joinBtn}
                </button>
              </div>
              <span className="text-[10px] text-blue-200/60">{t.footer.privacyNotice}</span>
            </form>
          </div>
        </div>

        {/* Bottom Legal Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-blue-200/60 text-[11px]">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <p>{t.footer.copyright}</p>
            <span className="hidden md:inline">•</span>
            <p className="hidden md:inline">{t.footer.nonProfit}</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-white transition-colors cursor-pointer" type="button">
              {t.footer.privacyPolicy}
            </button>
            <button className="hover:text-white transition-colors cursor-pointer" type="button">
              {t.footer.termsOfService}
            </button>
            <button className="hover:text-white transition-colors cursor-pointer" type="button">
              {t.footer.parentHandbook}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}