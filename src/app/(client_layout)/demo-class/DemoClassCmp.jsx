"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function DemoClassCmp() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Extract all form inputs dynamically using Object.fromEntries
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Demo Class Booking Submitted Data:", formData);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      
      {/* Background Theme Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#047857]/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Main Container Card with Theme Glow */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-[0_0_50px_-12px_rgba(30,58,138,0.35)] border border-slate-100 p-6 sm:p-10 relative z-10">
        
        {/* Form Header */}
        <div className="border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#1E3A8A] flex items-center justify-center text-white shadow-md shadow-blue-950/20">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F2042]">
                  Book Free Demo Class
                </h1>
                <p className="text-xs text-slate-500">
                  Experience our 1-to-1 live interactive Tajweed classroom
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              1-to-1 Session
            </span>
          </div>

          {/* Course Summary Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Selected Course
              </span>
              <span className="text-sm font-bold text-[#0F2042]">
                তাাজভীদ ও সহীহ কুরআন শিক্ষা (Tajweed & Sahih Quran)
              </span>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Format
              </span>
              <span className="text-xs font-semibold text-[#1E3A8A]">
                1-to-1 Online Class
              </span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Row 1: Your Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#0F2042] mb-1.5">
                Your Name
              </label>
              <div className="relative rounded-2xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Nazmul Hasan"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all shadow-xs"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#0F2042] mb-1.5">
                Your Email
              </label>
              <div className="relative rounded-2xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="mdnazmulhasan22323@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Present Address */}
          <div>
            <label htmlFor="address" className="block text-xs font-bold text-[#0F2042] mb-1.5">
              Present Address
            </label>
            <div className="relative rounded-2xl">
              <div className="absolute top-3 left-3.5 flex items-start pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4" />
              </div>
              <textarea
                id="address"
                name="address"
                rows={2}
                required
                placeholder="লক্ষ্মীপুর হাট (Lakshmipur Hat)"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all resize-none shadow-xs"
              />
            </div>
          </div>

          {/* Row 3: Gender & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="gender" className="block text-xs font-bold text-[#0F2042] mb-1.5">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                defaultValue=""
                required
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all cursor-pointer shadow-xs"
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label htmlFor="age" className="block text-xs font-bold text-[#0F2042] mb-1.5">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="4"
                max="90"
                required
                placeholder="e.g. 18"
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Row 4: Preferred Date & Time & WhatsApp Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateTime" className="block text-xs font-bold text-[#0F2042] mb-1.5">
                Preferred Date & Time
              </label>
              <div className="relative rounded-2xl">
                <input
                  id="dateTime"
                  name="dateTime"
                  type="datetime-local"
                  required
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all shadow-xs cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-xs font-bold text-[#0F2042] mb-1.5">
                WhatsApp Number
              </label>
              <div className="relative rounded-2xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="e.g. +8801XXXXXXXXX"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#047857] hover:bg-[#059669] shadow-lg shadow-emerald-900/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all cursor-pointer disabled:opacity-70 active:scale-[0.99]"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Request...
                </span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Submit Booking Request</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}