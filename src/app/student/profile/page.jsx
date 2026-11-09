"use client";

import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCopy,
  FiCheck,
  FiEdit3,
  FiSave,
  FiX,
  FiMapPin,
  FiCalendar,
  FiGlobe,
  FiHome,
  FiChevronRight,
  FiCamera,
  FiHeart,
  FiMessageCircle,
} from "react-icons/fi";
import { HiCheckBadge, HiSparkles } from "react-icons/hi2";

export default function Profile() {
  // Copy state for Referral Code
  const [copied, setCopied] = useState(false);
  const referralCode = "BIBON2422";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Editable Profile State
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    fatherName: "MD. Zahirul Islam",
    age: "26",
    gender: "Male",
    nationality: "Bangladeshi",
  });

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    presentAddress: "House 42, Road 11, Block D, Banani, Dhaka-1213",
    permanentAddress: "Village: Station Road, Upazila: Sadar, District: Natore",
  });

  const [isEditingContact, setIsEditingContact] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "biboni8883@lealking.com",
    phone: "01812134343",
    whatsapp: "+880 1812-134343",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Breadcrumbs */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              <span className="flex items-center gap-1 hover:text-slate-800 cursor-pointer transition-colors">
                <FiHome className="w-3.5 h-3.5 text-slate-400" />
                Home
              </span>
              <FiChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-emerald-600 font-bold">Profile</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
              My Profile
              <HiSparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
            </h1>
          </div>

          {/* Top Quick Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-xs font-medium text-slate-600 self-start sm:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Status: <span className="text-slate-900 font-semibold">Online & Verified</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Profile Card + Referral */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main User Card */}
            <div className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                {/* Avatar with Status */}
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 p-1 shadow-md shadow-emerald-500/10">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-3xl font-bold uppercase tracking-wider relative overflow-hidden group/avatar">
                      <span>BI</span>
                      {/* Overlay Edit Button */}
                      <button className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-opacity duration-200">
                        <FiCamera className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                  {/* Status Indicator Badge */}
                  <div className="absolute bottom-1 right-1 bg-emerald-500 text-white p-1.5 rounded-full ring-4 ring-white shadow-md flex items-center justify-center" title="Account Active">
                    <HiCheckBadge className="w-4 h-4" />
                  </div>
                </div>

                {/* User Info */}
                <h2 className="text-2xl font-bold text-slate-900 capitalize tracking-tight">bibon</h2>
                <div className="flex items-center gap-2 mt-1 mb-4">
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                    user
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Active
                  </span>
                </div>

                {/* Quick Stats Grid */}
                <div className="w-full grid grid-cols-2 gap-3 py-3 my-2 border-y border-slate-100 text-center">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Member Since</p>
                    <p className="text-sm font-bold text-slate-700">2024</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Tier</p>
                    <p className="text-sm font-bold text-emerald-600">Premium</p>
                  </div>
                </div>

                {/* Referral Code Card */}
                <div className="w-full mt-4 p-4 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">My Referral Code</span>
                    <HiSparkles className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/90 rounded-xl p-2.5 border border-slate-700">
                    <span className="font-mono text-lg font-bold tracking-widest text-emerald-300 pl-1">
                      {referralCode}
                    </span>
                    <button
                      onClick={handleCopy}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        copied
                          ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                          : "bg-white/10 hover:bg-white/20 text-white active:scale-95"
                      }`}
                    >
                      {copied ? (
                        <>
                          <FiCheck className="w-3.5 h-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <FiCopy className="w-3.5 h-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-1">Need Any Assistance?</h3>
                <p className="text-xs text-emerald-100 mb-4">Our dedicated support team is available 24/7 to help you with your account.</p>
                <button className="px-4 py-2 bg-white text-emerald-700 hover:bg-emerald-50 text-xs font-bold rounded-xl shadow-sm transition-all duration-200 active:scale-95">
                  Contact Support
                </button>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-15 pointer-events-none">
                <FiHeart className="w-36 h-36 text-white" />
              </div>
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Contact Information</h3>
                    <p className="text-xs text-slate-400">Primary communication details</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditingContact(!isEditingContact)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                >
                  {isEditingContact ? (
                    <>
                      <FiX className="w-3.5 h-3.5 text-rose-500" /> Cancel
                    </>
                  ) : (
                    <>
                      <FiEdit3 className="w-3.5 h-3.5 text-emerald-600" /> Edit
                    </>
                  )}
                </button>
              </div>

              {isEditingContact ? (
                <div className="space-y-4 py-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Email Address</label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Phone Number</label>
                    <input
                      type="text"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">WhatsApp</label>
                    <input
                      type="text"
                      value={contactInfo.whatsapp}
                      onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setIsEditingContact(false)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all duration-200"
                    >
                      <FiSave className="w-3.5 h-3.5" /> Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <FiMail className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Email</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 break-all">{contactInfo.email}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <FiPhone className="w-4 h-4 text-teal-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Phone</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800">{contactInfo.phone}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <FiMessageCircle className="w-4 h-4 text-cyan-500" />
                      <span className="text-xs font-semibold uppercase tracking-wider">WhatsApp</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800">
                      {contactInfo.whatsapp || <span className="text-slate-400 italic font-normal">N/A</span>}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Personal Information Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
                    <p className="text-xs text-slate-400">Identity & personal bio data</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                >
                  {isEditingPersonal ? (
                    <>
                      <FiX className="w-3.5 h-3.5 text-rose-500" /> Cancel
                    </>
                  ) : (
                    <>
                      <FiEdit3 className="w-3.5 h-3.5 text-emerald-600" /> Edit
                    </>
                  )}
                </button>
              </div>

              {isEditingPersonal ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block"> {"Father's Name"} </label>
                    <input
                      type="text"
                      value={personalInfo.fatherName}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, fatherName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Age</label>
                    <input
                      type="text"
                      value={personalInfo.age}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, age: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Gender</label>
                    <select
                      value={personalInfo.gender}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, gender: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Nationality</label>
                    <input
                      type="text"
                      value={personalInfo.nationality}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, nationality: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div className="md:col-span-2 flex justify-end pt-2">
                    <button
                      onClick={() => setIsEditingPersonal(false)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all duration-200"
                    >
                      <FiSave className="w-3.5 h-3.5" /> Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 mt-0.5">
                      <FiUser className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">{"Father's Name"}</span>
                      <p className="text-sm font-bold text-slate-800">{personalInfo.fatherName || "Not specified"}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 mt-0.5">
                      <FiCalendar className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Age</span>
                      <p className="text-sm font-bold text-slate-800">{personalInfo.age ? `${personalInfo.age} Years` : "Not specified"}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 mt-0.5">
                      <FiUser className="w-4 h-4 text-teal-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Gender</span>
                      <p className="text-sm font-bold text-slate-800">{personalInfo.gender || "Not specified"}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 mt-0.5">
                      <FiGlobe className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Nationality</span>
                      <p className="text-sm font-bold text-slate-800">{personalInfo.nationality || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Address Information Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Address Information</h3>
                    <p className="text-xs text-slate-400">Residential and permanent locations</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                >
                  {isEditingAddress ? (
                    <>
                      <FiX className="w-3.5 h-3.5 text-rose-500" /> Cancel
                    </>
                  ) : (
                    <>
                      <FiEdit3 className="w-3.5 h-3.5 text-emerald-600" /> Edit
                    </>
                  )}
                </button>
              </div>

              {isEditingAddress ? (
                <div className="space-y-4 py-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Present Address</label>
                    <textarea
                      rows={2}
                      value={addressInfo.presentAddress}
                      onChange={(e) => setAddressInfo({ ...addressInfo, presentAddress: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Permanent Address</label>
                    <textarea
                      rows={2}
                      value={addressInfo.permanentAddress}
                      onChange={(e) => setAddressInfo({ ...addressInfo, permanentAddress: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm font-medium transition-all"
                    />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setIsEditingAddress(false)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all duration-200"
                    >
                      <FiSave className="w-3.5 h-3.5" /> Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 mt-0.5">
                      <FiMapPin className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Present Address</span>
                      <p className="text-sm font-bold text-slate-800 leading-relaxed">
                        {addressInfo.presentAddress || <span className="text-slate-400 italic font-normal">Not provided</span>}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-400 mt-0.5">
                      <FiHome className="w-4 h-4 text-teal-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Permanent Address</span>
                      <p className="text-sm font-bold text-slate-800 leading-relaxed">
                        {addressInfo.permanentAddress || <span className="text-slate-400 italic font-normal">Not provided</span>}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}