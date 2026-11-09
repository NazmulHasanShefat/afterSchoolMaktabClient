"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  User,
  Menu,
  X,
  ChevronRight,
  MessageCircle,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { ThemeSwitch } from "./theme/ThemeSwitch";

export default function Header() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState("General Admission");
  const pathname = usePathname();

  // User login state (default is false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const triggerTrialModal = (contextTitle) => {
    setModalContext(contextTitle || "General Admission");
    setTrialModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((isOpen) => !isOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Lock body scroll when offcanvas menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const { data: session, isPending, error, refetch } = authClient.useSession();

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-zinc-800 transition-colors duration-200">
        <div className="h-16 sm:h-20 w-full max-w-7xl mx-auto px-3 sm:px-6 xl:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3 cursor-pointer group"
          >
            <Image
              alt="After School Maktab Official Crest"
              className="h-8 w-8 sm:h-11 sm:w-11 object-contain shrink-0 transition-transform group-hover:scale-105"
              src="https://i.ibb.co/v47RkJ3K/Logo-3-Edited.png"
              width={44}
              height={44}
              priority
              quality={100}
              onError={(event) => {
                event.currentTarget.hidden = true;
              }}
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-xs sm:text-lg text-slate-900 dark:text-white font-extrabold leading-tight tracking-tight">
                After School Maktab
              </span>
              <span className="hidden sm:block truncate text-[10px] sm:text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                {t.nav.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="hidden xl:flex items-center gap-4 2xl:gap-6 pl-2"
          >
            {t.links.map((link) => (
              <Link
                key={link.name}
                className={`whitespace-nowrap text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Language Toggle Button */}
            <button
              onClick={() => {
                toggleLanguage();
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full bg-slate-100 dark:bg-zinc-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-zinc-700 text-xs font-bold hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all cursor-pointer shadow-xs whitespace-nowrap"
              title="Switch Language (English / বাংলা)"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden min-[420px]:inline">
                {lang === "en" ? "বাংলা" : "English"}
              </span>
            </button>

            <button
              className="hidden xl:flex items-center gap-1 px-3.5 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors"
            >
              {t.nav.portal}
            </button>

            {/* Conditional Rendering: User Profile Icon vs Register Button */}
            {session ? (
              <Link
                href="/student/profile"
                className="hidden xl:flex w-9 h-9 rounded-full bg-emerald-600 dark:bg-emerald-700 items-center justify-center shrink-0 text-white cursor-pointer hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-sm"
                title="Parent Account"
              >
                <User className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href="/register"
                className="hidden xl:inline-flex items-center justify-center px-4 py-2 rounded-xl text-slate-800 dark:text-slate-100 hover:text-white font-bold text-xs sm:text-sm shadow-md bg-slate-100 dark:bg-zinc-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-all whitespace-nowrap"
              >
                Register
              </Link>
            )}

            <Link
              className="hidden min-[420px]:flex items-center justify-center px-3 sm:px-4 2xl:px-5 py-2 sm:py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
              href="/demo-class"
            >
              <span className="2xl:hidden">{t.nav.freeTrialShort}</span>
            </Link>
            
            <ThemeSwitch />

            {/* Mobile Navigation Toggle Button */}
            <button
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="xl:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas Mobile Navigation Drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-visibility duration-300 ${
          mobileMenuOpen ? "visible" : "invisible delay-300"
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Offcanvas Panel Container */}
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className={`fixed inset-y-0 right-0 w-full max-w-xs sm:w-80 bg-white dark:bg-black shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out transform border-l border-slate-200 dark:border-zinc-800 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header Bar inside Offcanvas */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-zinc-800">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              aria-label="Close navigation menu"
              className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors"
              onClick={closeMobileMenu}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links List */}
          <nav
            aria-label="Mobile offcanvas navigation"
            className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-1"
          >
            {t.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                  pathname === link.href
                    ? "bg-slate-100 dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400"
                    : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </Link>
            ))}
          </nav>

          {/* Action Footer inside Offcanvas */}
          <div className="p-5 border-t border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/50 flex flex-col gap-2.5">
            {!isLoggedIn && (
              <Link
                href="/register"
                onClick={closeMobileMenu}
                className="w-full py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-700 text-white font-bold text-sm text-center shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all"
              >
                Register
              </Link>
            )}
            <button
              className="w-full py-2.5 rounded-xl bg-slate-200 dark:bg-zinc-800 text-slate-800 dark:text-slate-100 font-semibold text-sm text-center hover:bg-slate-300 dark:hover:bg-zinc-700 transition-colors"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              {t.nav.portal}
            </button>
            <button
              className="w-full py-2.5 rounded-xl bg-emerald-600 dark:bg-emerald-700 text-white font-bold text-sm text-center shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all"
              onClick={() => {
                closeMobileMenu();
                triggerTrialModal("Mobile Nav Trial");
              }}
            >
              {t.nav.bookTrial}
            </button>
            <a
              className="w-full py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 text-slate-800 dark:text-slate-200 font-semibold text-xs text-center flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors border border-slate-200 dark:border-zinc-800"
              href="https://wa.me/18005550199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> WhatsApp
              Admissions Desk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}