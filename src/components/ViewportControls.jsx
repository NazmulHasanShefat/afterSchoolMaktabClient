"use client";

import React from "react";
import { Monitor, Tablet, Smartphone, Frame, ZoomIn, RotateCcw } from "lucide-react";

export default function ViewportControls({
  currentViewport,
  setViewport,
  isBezelActive,
  setIsBezelActive,
  currentZoom,
  setZoom,
  resetView,
  triggerToast
}) {
  const getIndicatorText = () => {
    if (currentViewport === "desktop") {
      return "Active Viewport: Fluid Desktop (100% / Max 1440px container)";
    } else if (currentViewport === "tablet") {
      return "Active Viewport: Tablet / iPad Screen Preview (820px Width)";
    } else if (currentViewport === "mobile") {
      return "Active Viewport: Mobile iPhone/Android Preview (390px Width)";
    }
    return "";
  };

  const handleBezelToggle = () => {
    const newState = !isBezelActive;
    setIsBezelActive(newState);
    triggerToast(newState ? "Realistic device bezel enabled" : "Realistic bezel disabled (Fluid mode)");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md px-4 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        {/* Left: Brand & Prototype Label */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-slate-950 font-bold shadow-md shadow-emerald-500/20 glow-emerald">
            ASM
          </div>
          <div>
            <span className="font-semibold text-slate-100 tracking-wide text-xs">
              After School Maktab
            </span>
            <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Interactive Prototype
            </span>
          </div>
        </div>

        {/* Center: Viewport Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewport("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentViewport === "desktop"
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 glow-blue"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setViewport("tablet")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentViewport === "tablet"
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 glow-blue"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              currentViewport === "mobile"
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 glow-blue"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right: Bezel Frame Toggle, Zoom, Reset */}
        <div className="flex items-center gap-2">
          {/* Bezel Toggle */}
          <button
            onClick={handleBezelToggle}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs transition-all ${
              isBezelActive
                ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold"
                : "border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
            }`}
            title="Toggle Realistic Device Bezel Frame"
          >
            <Frame className="w-3.5 h-3.5" />
            <span>Bezel: {isBezelActive ? "On" : "Off"}</span>
          </button>

          {/* Zoom Selector */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1">
            <ZoomIn className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={currentZoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer"
            >
              <option value="1.0" className="bg-slate-900 text-slate-200">100%</option>
              <option value="0.9" className="bg-slate-900 text-slate-200">90%</option>
              <option value="0.8" className="bg-slate-900 text-slate-200">80%</option>
              <option value="0.75" className="bg-slate-900 text-slate-200">75%</option>
            </select>
          </div>

          {/* Reset View */}
          <button
            onClick={resetView}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
            title="Reset Prototype View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sub-bar: Active Viewport text */}
      <div className="text-center pt-1.5 text-[11px] text-slate-400 font-mono tracking-wide">
        {getIndicatorText()}
      </div>
    </header>
  );
}
