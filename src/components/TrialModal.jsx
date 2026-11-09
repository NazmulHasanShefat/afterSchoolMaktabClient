"use client";

import React, { useState } from "react";
import { Calendar, X, CheckCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrialModal({ isOpen, onClose, contextTitle, triggerToast }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    parentName: "",
    studentDetails: "",
    phone: "",
    timeSlot: "Weekday Evening (5:00 PM EST)",
    proficiency: "Complete Beginner (Needs Qaida & Makharij)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    triggerToast(
      "Alhamdulillah! Trial Class Booked. An admissions scholar will WhatsApp you within 2 hours."
    );
  };

  return (
    <div className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#E5E1D8] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0F2042] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-amber-400" />
            <span className="font-extrabold text-base sm:text-lg">{t.modal.title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 text-[#0F2042]">
          {/* Selected Track Note */}
          <div className="p-3 bg-[#e7eeff] rounded-xl flex items-center gap-2 text-xs text-[#0F2042] font-semibold border border-blue-200">
            <ShieldCheck className="w-4 h-4 text-[#006c4a] shrink-0" />
            <span>
              {t.modal.selectedTrack} {contextTitle || "General Admissions Evaluation"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#0F2042]">{t.modal.parentNameLabel}</label>
              <input
                type="text"
                required
                placeholder={t.modal.parentNamePlaceholder}
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="px-3.5 py-2.5 text-xs rounded-xl border border-[#E5E1D8] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#0F2042]">{t.modal.studentDetailsLabel}</label>
              <input
                type="text"
                required
                placeholder={t.modal.studentDetailsPlaceholder}
                value={formData.studentDetails}
                onChange={(e) => setFormData({ ...formData, studentDetails: e.target.value })}
                className="px-3.5 py-2.5 text-xs rounded-xl border border-[#E5E1D8] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#0F2042]">{t.modal.phoneLabel}</label>
              <input
                type="tel"
                required
                placeholder={t.modal.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-3.5 py-2.5 text-xs rounded-xl border border-[#E5E1D8] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#0F2042]">{t.modal.slotLabel}</label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="px-3 py-2.5 text-xs rounded-xl border border-[#E5E1D8] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none bg-white font-medium"
              >
                <option value="Weekday Evening (5:00 PM EST)">Weekday Evening (5:00 PM EST)</option>
                <option value="Weekday Evening (6:30 PM EST)">Weekday Evening (6:30 PM EST)</option>
                <option value="Weekend Morning (10:00 AM EST)">Weekend Morning (10:00 AM EST)</option>
                <option value="UK / Europe Evening (6:00 PM GMT)">UK / Europe Evening (6:00 PM GMT)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[#0F2042]">{t.modal.proficiencyLabel}</label>
            <select
              value={formData.proficiency}
              onChange={(e) => setFormData({ ...formData, proficiency: e.target.value })}
              className="px-3 py-2.5 text-xs rounded-xl border border-[#E5E1D8] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none bg-white font-medium"
            >
              <option value="Complete Beginner (Needs Qaida & Makharij)">
                Complete Beginner (Needs Qaida & Makharij)
              </option>
              <option value="Knows Arabic Alphabet (Can blend letters)">
                Knows Arabic Alphabet (Can blend letters)
              </option>
              <option value="Nazirah Reader (Needs Tajweed polishing)">
                Nazirah Reader (Needs Tajweed polishing)
              </option>
              <option value="Hifdh Track (Memorizing Surahs)">
                Hifdh Track (Memorizing Surahs)
              </option>
            </select>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#E5E1D8]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-[#444651] font-semibold hover:text-[#0F2042] transition-colors cursor-pointer"
            >
              {t.modal.cancel}
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#0F2042] text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-1.5 glow-blue cursor-pointer"
            >
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>{t.modal.confirmBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
