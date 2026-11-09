"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Extract form data using Object.fromEntries
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Form Submitted Data:", formData);

    const { name, email, password } = formData;

    const { data, error } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
      },
   
    );

    console.log("Sign Up Response:", { data, error });

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignUp = async () => {
    console.log("Continue with Google clicked");
      const data = await authClient.signIn.social({
    provider: "google",
  });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      {/* Main Container Card with Glowing Effect */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_0_50px_-12px_rgba(30,58,138,0.35)] border border-slate-100 overflow-hidden relative z-10 grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Title & Brand Info */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0F2042] via-[#1E3A8A] to-[#0F2042] p-8 sm:p-12  flex-col justify-between text-white relative overflow-hidden hidden md:flex">
          {/* Subtle overlay decorative glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Brand Logo Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-inner">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                After School Maktab
              </span>
            </div>

            <div className="mt-10 sm:mt-16">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full text-emerald-300 text-xs font-medium backdrop-blur-sm mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Sanad-Accredited Online Madrasah
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Start Your Journey to Authentic Knowledge
              </h1>
              <p className="mt-4 text-xs sm:text-sm text-blue-100/70 leading-relaxed">
                Join a structured, tranquil environment where students master
                Quranic recitation with flawless Tajweed and daily Sunnah.
              </p>
            </div>
          </div>

          {/* Left Footer Badges */}
          <div className="mt-10 pt-6 border-t border-white/10 relative z-10 space-y-3">
            <div className="flex items-center gap-2.5 text-xs text-blue-200/80">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Verified Screen-Sharing & Audio Labs</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-blue-200/80">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Interactive Makharij & Nazirah Modules</span>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0F2042]">
              Create Your Free Account
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Get instant access to student portal and curriculum previews
            </p>

            {/* Continue with Google Button */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="mt-6 w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer shadow-sm active:scale-[0.99]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-slate-400 font-medium tracking-wider">
                  Or register with email
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-[#0F2042] mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative rounded-2xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Ahmad Hasan"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Address Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-[#0F2042] mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative rounded-2xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="parent@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-bold text-[#0F2042] mb-1.5"
                >
                  Password
                </label>
                <div className="relative rounded-2xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center pt-1">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-[#047857] focus:ring-[#047857]/20 border-slate-300 rounded accent-[#047857] cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-xs text-slate-600"
                >
                  I agree to the{" "}
                  <Link
                    href="#terms"
                    className="font-semibold text-[#1E3A8A] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#privacy"
                    className="font-semibold text-[#1E3A8A] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#047857] hover:bg-[#059669] shadow-md hover:shadow-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    <>
                      <span>Create Free Student Account</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Link to Login */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#1E3A8A] hover:text-[#0F2042] transition-colors"
                >
                  Sign In to Portal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
