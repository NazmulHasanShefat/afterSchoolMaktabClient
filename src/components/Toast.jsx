"use client";

import React, { useEffect } from "react";
import { Check } from "lucide-react";

export default function Toast({ toast, setToast }) {
  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, setToast]);

  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[130] bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 transition-all animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-7 h-7 rounded-full bg-[#10B981] text-[#0F2042] flex items-center justify-center shrink-0 font-bold shadow-md glow-emerald">
        <Check className="w-4 h-4" />
      </div>
      <span className="text-xs font-semibold text-slate-100">
        {toast.message}
      </span>
    </div>
  );
}
