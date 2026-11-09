import React from "react";
import {
  BookOpen,
  Award,
  CheckCircle2,
  HeartHandshake,
  Target,
  Compass,
  GraduationCap,
  Sparkles,
  UserCheck,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  const programs = [
    "Correct Quranic recitation (Noorani Qaida)",
    "Nazeratul Quran (Recitation by sight)",
    "Hifzul Quran (Memorization of full Quran)",
    "Memorization of selected Surahs & 30th Juz",
    "Arabic Language & Grammar",
    "Seerah (Life of the Prophet ﷺ)",
    "Diploma in Islamic Studies",
    "Adkar, Du'a & Masnoon Amal Education",
    "Seerah, Aqeeda, & Fiqh for Children",
    "Adab & Akhlaq (Character building)",
    "Biographies of Prophets & Islamic History",
    "Daily Masa'ala-Masael (Separate classes for men & women)",
  ];

  const features = [
    {
      title: "Qualified Instructors",
      desc: "Run by skilled, talented, and experienced teachers dedicated to authentic guidance.",
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Gender-Segregated Classes",
      desc: "Dedicated male and female instructors for boys, girls, men, and women.",
      icon: <UserCheck className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Flexible Scheduling",
      desc: "Punctual management offering adaptable time slots to fit your busy lifestyle.",
      icon: <Clock className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Parental Engagement",
      desc: "Regular updates, transparent management, and continuous evaluation reports.",
      icon: <MessageSquare className="w-6 h-6 text-amber-600" />,
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-800 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header / Hero Introduction */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Welcome to After School Maktab
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Faith, Knowledge & Character
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Providing accessible, guided, and high-quality online Islamic
            education for children, youth, and adults right from the comfort of
            home.
          </p>
        </div>

        {/* Introduction & Quran Quote Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <BookOpen className="w-5 h-5" />
              <span>Our Foundations</span>
            </div>

            {/* Hadith / Quran Banner */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 space-y-3">
              <p className="italic text-slate-800 font-serif text-base sm:text-lg">
                &ldquo;Read in the name of your Lord who created.&rdquo;
              </p>
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                — Surah Al-Alaq [96:1]
              </p>
              <p className="text-xs text-slate-600 border-t border-amber-200/60 pt-2">
                &ldquo;Seeking (religious) knowledge is obligatory upon every
                Muslim man and woman.&rdquo; — Sunan Ibn Majah 224
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By emphasizing &ldquo;Read&rdquo; first, Allah has highlighted the
              importance of acquiring knowledge in Islam. In essence, it is
              essential for every Muslim to distinguish between Halal and Haram,
              enabling a righteous life.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To bridge the gap created by today&apos;s busy lifestyle,{" "}
              <strong className="text-slate-900">
                After School Maktab Online Institute
              </strong>{" "}
              was established to provide guided, structured online learning for
              you and your loved ones.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-emerald-900/5 border border-emerald-100 p-8 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="space-y-2 z-10">
                <h3 className="text-xl font-bold text-slate-900">
                  Authentic Learning
                </h3>
                <p className="text-sm text-slate-600">
                  Rooted in the Quran and Sunnah, tailored to modern schedules.
                </p>
              </div>
              {/* Background decorative element */}
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
            <h2 className="text-2xl font-bold text-slate-900">Our Goals</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To ensure that students, children, adults, professionals, and
              homemakers can access authentic Islamic knowledge at their
              convenience. We aim to be a platform where lives are illuminated
              by the Quran and Sunnah, fostering a spiritually aware generation.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              After School Maktab Online Institute is more than a name—it is a
              community platform where students grow under the shade of *Ilm*
              (knowledge) and *Amal* (practice). We empower learners to cherish
              and spread the light of Islam worldwide.
            </p>
          </div>
        </div>

        {/* Educational Programs */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm">
              <Award className="w-5 h-5" />
              <span>Curriculum Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Educational Programs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We offer progressive Islamic education tailored for children,
              teenagers, young adults, and adults.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => (
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
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-8 sm:p-12 shadow-lg space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-400/30 text-amber-100 px-3 py-1 rounded-full text-xs font-medium">
              <ShieldCheck className="w-4 h-4" /> Why Learn With Us?
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Why Choose After School Maktab?
            </h2>
            <p className="text-amber-100 text-sm sm:text-base">
              We provide a supportive, structured environment tailored to modern
              family routines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white/95 text-slate-800 p-6 rounded-2xl space-y-3 shadow-md backdrop-blur-sm"
              >
                <div className="p-3 bg-amber-50 rounded-xl w-fit">
                  {feat.icon}
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
              Begin Your Journey of Knowledge Today
            </h2>
            <p className="text-emerald-200 text-sm sm:text-base">
              Join hundreds of students learning authentic Islamic knowledge
              from anywhere in the world.
            </p>
            <div className="pt-2">
              <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 text-sm sm:text-base">
                Enroll Now
              </button>
            </div>
          </div>
          {/* Subtle background overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/40 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function featureIcons() {
  return [
  <>
      <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative w-full max-w-sm bg-[image:var(--bg-url)] bg-cover bg-center aspect-square rounded-2xl border border-emerald-100 p-8 flex flex-col justify-between overflow-hidden shadow-inner"
                style={{
                  "--bg-url": `url('https://img.magnific.com/premium-vector/muslim-boys-group-studying-together-hand-drawn-art_175462-328.jpg?w=1480')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="space-y-2 z-10">
                  <h3 className="text-xl font-bold text-slate-900">
                    {aboutUs.sidebarTitle}
                  </h3>
                  <p className="text-sm text-slate-600">{aboutUs.sidebarDesc}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>
  </>
  ];
}
