"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    aboutUs: {
      badge: "Welcome to After School Maktab",
      title: "Nurturing Faith, Knowledge & Character",
      description: "Providing accessible, guided, and high-quality online Islamic education for children, youth, and adults right from the comfort of home.",
      foundationsLabel: "Our Foundations",
      quranQuote: "“Read in the name of your Lord who created.”",
      quranReference: "— Surah Al-Alaq [96:1]",
      hadithReference: "“Seeking (religious) knowledge is obligatory upon every Muslim man and woman.” — Sunan Ibn Majah 224",
      foundationText1: "By emphasizing “Read” first, Allah has highlighted the importance of acquiring knowledge in Islam. In essence, it is essential for every Muslim to distinguish between Halal and Haram, enabling a righteous life.",
      foundationText2: "To bridge the gap created by today's busy lifestyle, After School Maktab Online Institute was established to provide guided, structured online learning for you and your loved ones.",
      sidebarTitle: "Authentic Learning",
      sidebarDesc: "Rooted in the Quran and Sunnah, tailored to modern schedules.",
      goalsTitle: "Our Goals",
      goalsDesc: "To ensure that students, children, adults, professionals, and homemakers can access authentic Islamic knowledge at their convenience. We aim to be a platform where lives are illuminated by the Quran and Sunnah, fostering a spiritually aware generation.",
      visionTitle: "Our Vision",
      visionDesc: "After School Maktab Online Institute is more than a name—it is a community platform where students grow under the shade of *Ilm* (knowledge) and *Amal* (practice). We empower learners to cherish and spread the light of Islam worldwide.",
      curriculumTag: "Curriculum Showcase",
      curriculumTitle: "Our Educational Programs",
      curriculumSub: "We offer progressive Islamic education tailored for children, teenagers, young adults, and adults.",
      whyTag: "Why Learn With Us?",
      whyTitle: "Why Choose After School Maktab?",
      whySub: "We provide a supportive, structured environment tailored to modern family routines.",
      ctaTitle: "Begin Your Journey of Knowledge Today",
      ctaDesc: "Join hundreds of students learning authentic Islamic knowledge from anywhere in the world.",
      ctaBtn: "Enroll Now",
      programs: [
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
        "Daily Masa'ala-Masael (Separate classes for men & women)"
      ],
      features: [
        {
          title: "Qualified Instructors",
          desc: "Run by skilled, talented, and experienced teachers dedicated to authentic guidance."
        },
        {
          title: "Gender-Segregated Classes",
          desc: "Dedicated male and female instructors for boys, girls, men, and women."
        },
        {
          title: "Flexible Scheduling",
          desc: "Punctual management offering adaptable time slots to fit your busy lifestyle."
        },
        {
          title: "Parental Engagement",
          desc: "Regular updates, transparent management, and continuous evaluation reports."
        }
      ]
    },

    // end about
    links:[
      {name: "Home", href: "/"},
      {name: "Courses", href: "/courses"},
      {name: "Teachers", href: "/teachers"},
      {name: "Curriculum", href: "/curriculum"},
      {name: "About Us", href: "/about-us"},
      {name: "Reviews", href: "/reviews"},
    ],
    nav: {
      home: "Home",
      courses: "Courses",
      teachers: "Teachers",
      curriculum: "Curriculum",
      aboutUs: "About Us",
      reviews: "Reviews",
      portal: "Portal",
      bookTrial: "Book Free Trial Class",
      freeTrialShort: "Free Trial",
      subtitle: "Foundations & Classical Arabic"
    },
    hero: {
      rating: "4.9 / 5.0 (180+ Global Parents)",
      trust: "Serving Muslim Families Since 2024",
      subhead: "Sanad-Accredited Online Evening Madrasah",
      heading: "We Ensure Certified Islamic Scholars For School-Going Youth",
      headingHighlight: "School-Going Youth",
      desc: "After School Maktab provides a structured, tranquil environment every evening where children master Quranic recitation with flawless Tajweed, absorb daily Sunnah, and cultivate righteous Akhlaaq—harmonized seamlessly with Western school timetables.",
      bookTrialBtn: "Book Free Trial Class",
      exploreTracksBtn: "Explore All 6 Tracks",
      activeStudentsCount: "2,200+ Active Students",
      activeStudentsCountries: "Across USA, UK, Canada, Australia & 8 other nations",
      separateBatches: "Separate Boys & Girls Batches",
      liveIndicator: "Live Evening Sessions Enrolling",
      virtualTitle: "Virtual Classroom Environment",
      virtualSubtitle: "Interactive Audio-Visual Makharij & Nazirah",
      virtualDesc: "One-on-one attention with verified screen-sharing & interactive Tajweed markers.",
      ratio: "1 : 1 or 1 : 4",
      ratioLabel: "Intimate Teacher Ratios",
      femaleBatches: "100% Female Batches",
      femaleBatchesLabel: "Certified Alima Mentors",
      tajweedLab: "Tajweed Pronunciation Lab",
      tajweedLabDesc: "Vocal articulators diagrammed & practiced live",
      included: "Included"
    },
    credibility: {
      stat1Val: "2,200+",
      stat1Title: "Students Educated Globally",
      stat1Desc: "UK, USA, Europe, GCC & Asia",
      stat2Val: "100%",
      stat2Title: "Certified Alim & Alima Tutors",
      stat2Desc: "Dars-e-Nizami & Sanad Verified",
      stat3Val: "Separate",
      stat3Title: "Gender-Segregated Classes",
      stat3Desc: "Boys with Ustad & Girls with Alima",
      stat4Val: "Flexible",
      stat4Title: "Evening & Weekend Timings",
      stat4Desc: "30m, 45m & 60m time slots daily"
    },
    curriculum: {
      tag: "Parallel Scholarly Tracks",
      title: "Two Structured Pathways For Comprehensive Islamic Growth",
      desc: "Families can enroll in single or combined tracks. Both tracks include weekly homework tracking, monthly examinations, and personalized tutor feedback reports.",
      dashboardTag: "Parental Progress Dashboard Included",
      track1Badge: "TRACK 01 • AGES 6-16",
      track1Freq: "2 Sessions / Week",
      track1Title: "Online Islamic Foundations Course",
      track1Sub: "Systematic Fardh-ul-Ayn knowledge designed for contemporary students",
      track1Desc: "Comprehensive curriculum balancing doctrinal Aqeedah, practical daily Sunnah, prophetic Seerah, and jurisprudence of Taharah, Wudu, and Salah. Designed to fortify young minds with clear Islamic worldviews.",
      track1F1: "Correct Aqeedah & Tawheed",
      track1F2: "40 Essential Daily Masnoon Duas",
      track1F3: "Fiqh of Cleanliness & 5 Prayers",
      track1F4: "Interactive Seerah of Rasulullah ﷺ",
      track1Format: "45 Mins • Cohort Batches",
      track1Btn: "View Islamic Syllabus",

      track2Badge: "TRACK 02 • ALL AGES",
      track2Freq: "3 to 5 Sessions / Week",
      track2Title: "Online Quran Tutors & Tajweed",
      track2Sub: "From Noorani Qaida phonics to effortless Nazirah & Hifdh",
      track2Desc: "Taught by vetted scholars with continuous Asanid (chains of transmission). We ensure sound articulation of every letter (Makhraj), strict Tajweed application, and melodic recitation under personalized supervision.",
      track2F1: "Noorani Qaida with Phonics",
      track2F2: "Tajweed Rules (Madd, Ghunnah)",
      track2F3: "Memorization Tracking (Juz Amma)",
      track2F4: "1-on-1 Focus Sessions Available",
      track2Format: "30-45 Mins • 1-on-1 or Small Cohort",
      track2Btn: "View Quran Tutors"
    },
    statement: {
      tag: "AUTHENTICITY • COMPASSION • ADAB",
      quote: "“After School Maktab Online Institute is not just an evening academy, but a sanctuary where young students of knowledge flourish beneath the harmonious shade of sacred Ilm and transformative Amal.”",
      author: "— Academic Board of After School Maktab",
      g1Title: "Gender-Segregated Batches",
      g1Desc: "In complete accordance with traditional etiquette, girls study under qualified female Alima scholars, while boys learn under verified male Alim teachers in dedicated, safe virtual rooms.",
      g2Title: "Rigorous Sanad Accreditation",
      g2Desc: "Every faculty member holds formal degrees from recognized institutions (Dars-e-Nizami, Al-Azhar, or Jamia) with continuous recited chains of transmission in the Holy Quran.",
      g3Title: "Balanced with Regular School",
      g3Desc: "Curated specifically for students enrolled in demanding Western schools. Manageable homework, bite-sized daily revision routines, and no burn-out."
    },
    courses: {
      tag: "Curriculum Catalog",
      title: "Featured Courses For Fall Semester",
      sub: "Select an authentic study path matched with your child’s current proficiency level.",
      tabAll: "All Courses",
      tabQuran: "Quran & Tajweed",
      tabIslamic: "Islamic Studies",
      tabArabic: "Arabic",
      monthlyBatches: "Monthly Batches",
      freeTrial: "Free Trial"
    },
    faculty: {
      tag: "Sanad-Accredited Educators",
      title: "Meet Our Verified Alim & Alima Mentors",
      sub: "Our instructors undergo strict academic, Tajweed, and pedagogical vetting. Each educator is deeply patient, DBS/background-checked, and skilled in engaging youth.",
      viewAllBtn: "View All 24 Faculty Members",
      selectUstadh: "Select Ustadh →",
      selectAlima: "Select Alima →"
    },
    difference: {
      tag: "The Maktab Difference",
      title: "Why Muslim Families Choose Our Online Maktab",
      sub: "We combine the rigorous adab of traditional brick-and-mortar makateeb with the interactive convenience of modern screen ergonomics."
    },
    testimonials: {
      tag: "Community Voice",
      title: "Trusted By Parents Across Continents",
      sub: "Hear genuine reflections from diaspora families in North America, the United Kingdom, and Bangladesh.",
      rating: "4.9 Star Rating",
      verifiedParent: "Verified Parent • Fall Semester",
      ukTitle: "“Effortless Evening Routine”",
      milestonesTag: "Recent Student Milestones:"
    },
    admissions: {
      tag: "Enrollment Open For All Levels",
      title: "Begin With A Complimentary 30-Minute Trial Evaluation Class",
      desc: "Meet a dedicated Alim or Alima teacher live. We will assess your child’s current Arabic phonetics, suggest the exact batch level, and demonstrate our interactive maktab whiteboard.",
      reassurance1: "Zero Obligation",
      reassurance2: "No Credit Card Required",
      reassurance3: "Custom Schedule Match",
      fastTrack: "Fast-Track Admissions",
      fastTrackSub: "Connect directly with our admissions coordinator",
      chatWhatsapp: "Chat on Admissions WhatsApp",
      bookCalendar: "Book Online via Calendar",
      hotline: "Hotline Assistance: +1 (800) 555-0199"
    },
    footer: {
      desc: "An authentic, structured evening Islamic supplementary school nurturing righteous character, fluent Quranic recitation with Tajweed, and classical Arabic comprehension for youth.",
      sanadVerified: "Traditional Sanad & Ijazah Verified Tutors",
      curriculumTracksTitle: "Curriculum Tracks",
      instituteTitle: "Institute",
      newsletterTitle: "Maktab Newsletter",
      newsletterDesc: "Receive term dates, guest Ustadh webinars, and daily revision tips directly.",
      placeholderEmail: "Parent's Email",
      joinBtn: "Join",
      privacyNotice: "We respect your privacy. No spam.",
      copyright: "© 2024 After School Maktab Institute. All rights reserved.",
      nonProfit: "A Registered 501(c)(3) Educational Non-Profit",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      parentHandbook: "Parent Handbook"
    },
    modal: {
      title: "Schedule 30-Min Evaluation Class",
      selectedTrack: "Selected Track:",
      parentNameLabel: "Parent's Full Name",
      parentNamePlaceholder: "e.g. Farhan Rahman",
      studentDetailsLabel: "Student's Age & Gender",
      studentDetailsPlaceholder: "e.g. 8 Years • Boy",
      phoneLabel: "Parent WhatsApp / Phone",
      phonePlaceholder: "+1 (555) 000-0000",
      slotLabel: "Preferred Time Slot",
      proficiencyLabel: "Child's Current Arabic/Quran Proficiency",
      cancel: "Cancel",
      confirmBtn: "Confirm Free Trial Class"
    }
  },
  bn: {
    aboutUs: {
      badge: "আফটার স্কুল মাকতাবে স্বাগতম",
      title: "ঈমান, জ্ঞান ও চরিত্র গঠন",
      description: "বাড়ি বসেই শিশু, কিশোর এবং প্রাপ্তবয়স্কদের জন্য সহজলভ্য, নির্দেশিত এবং উচ্চমানের অনলাইন ইসলামিক শিক্ষা প্রদান।",
      foundationsLabel: "আমাদের ভিত্তি",
      quranQuote: "“পড়ুন আপনার রবের নামে যিনি সৃষ্টি করেছেন।”",
      quranReference: "— সূরা আল-আলাক [৯৬:১]",
      hadithReference: "“জ্ঞান অন্বেষণ করা প্রত্যেক মুসলিম নর-নারীর ওপর ফরজ।” — সুনান ইবনে মাজাহ ২২৪",
      foundationText1: "আল্লাহ তাআলা প্রথমে “পড়ুন” বলে ইসলামে জ্ঞানার্জনের গুরুত্ব তুলে ধরেছেন। মূলত একজন মুসলিমের জন্য হালাল ও হারামের মধ্যে পার্থক্য করার মাধ্যমে একটি নেক জীবনযাপন করা অপরিহার্য।",
      foundationText2: "আজকের ব্যস্ত জীবনের ব্যবধান দূর করতে, আপনার এবং আপনার প্রিয়জনদের জন্য নির্দেশিত ও কাঠামোগত অনলাইন শিক্ষা প্রদান করতে ‘আফটার স্কুল মাকতাব অনলাইন ইনস্টিটিউট’ প্রতিষ্ঠিত হয়েছে।",
      sidebarTitle: "প্রামাণিক শিক্ষা",
      sidebarDesc: "কুরআন ও সুন্নাহর আলোকে, আধুনিক সময়সূচির সাথে সামঞ্জস্যপূর্ণ।",
      goalsTitle: "আমাদের লক্ষ্য",
      goalsDesc: "শিক্ষার্থী, শিশু, প্রাপ্তবয়স্ক, পেশাজীবী এবং গৃহিণীরা যাতে তাদের সুবিধাজনক সময়ে সঠিক ইসলামিক জ্ঞান অর্জন করতে পারেন তা নিশ্চিত করা। আমরা এমন একটি প্ল্যাটফর্ম হতে চাই যেখানে জীবন কুরআন ও সুন্নাহ দ্বারা আলোকিত হয়।",
      visionTitle: "আমাদের দৃষ্টিভঙ্গি",
      visionDesc: "আফটার স্কুল মাকতাব কেবল একটি নাম নয়—এটি একটি কমিউনিটি প্ল্যাটফর্ম যেখানে শিক্ষার্থীরা ইলম (জ্ঞান) এবং আমলের ছায়ায় বিকশিত হয়। আমরা বিশ্বজুড়ে ইসলামের আলো ছড়িয়ে দিতে শিক্ষার্থীদের ক্ষমতায়ন করি।",
      curriculumTag: "কারিকুলাম শোকেস",
      curriculumTitle: "আমাদের শিক্ষামূলক প্রোগ্রামসমূহ",
      curriculumSub: "আমরা শিশু, কিশোর, তরুণ এবং প্রাপ্তবয়স্কদের জন্য উপযোগী প্রগতিশীল ইসলামিক শিক্ষা প্রদান করি।",
      whyTag: "কেন আমাদের থেকে শিখবেন?",
      whyTitle: "কেন আফটার স্কুল মাকতাব বেছে নেবেন?",
      whySub: "আমরা আধুনিক পারিবারিক রুটিনের সাথে মানানসই একটি সহায়ক ও সুশৃঙ্খল পরিবেশ প্রদান করি।",
      ctaTitle: "আজই আপনার জ্ঞান অর্জনের যাত্রা শুরু করুন",
      ctaDesc: "বিশ্বের যেকোনো প্রান্ত থেকে শত শত শিক্ষার্থীর সাথে যোগ দিন যারা প্রামাণিক ইসলামিক জ্ঞান অর্জন করছে।",
      ctaBtn: "ভর্তি হন",
      programs: [
        "শুদ্ধ কুরআন তিলাওয়াত (নূরানী কায়দা)",
        "নাযিরাতুল কুরআন (দেখে দেখে তিলাওয়াত)",
        "হিফজুল কুরআন (সম্পূর্ণ কুরআন মুখস্থ)",
        "নির্বাচিত সূরা ও ৩০তম পারা মুখস্থকরণ",
        "আরবি ভাষা ও ব্যাকরণ",
        "সিরাত (নবীজীর জীবনচরিত ﷺ)",
        "ইসলামিক স্টাডিজে ডিপ্লোমা",
        "আযকার, দোয়া ও মাসনুন আমল শিক্ষা",
        "শিশুদের জন্য সিরাত, আকিদা ও ফিকহ",
        "আদব ও আখলাক (চরিত্র গঠন)",
        "নবীগণের জীবনী ও ইসলামিক ইতিহাস",
        "দৈনিক মাসয়ালা-মাসায়েল (পুরুষ ও নারীদের জন্য পৃথক ক্লাস)"
      ],
      features: [
        {
          title: "যোগ্য শিক্ষকবৃন্দ",
          desc: "প্রামাণিক নির্দেশনার জন্য নিবেদিত দক্ষ, মেধাবী এবং অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত।"
        },
        {
          title: "লিঙ্গভিত্তিক পৃথক ক্লাস",
          desc: "বালক, বালিকা, পুরুষ এবং নারীদের জন্য ডেডিকেটেড পুরুষ ও নারী শিক্ষক।"
        },
        {
          title: "নমনীয় সময়সূচী",
          desc: "আপনার ব্যস্ত জীবনধারার সাথে মানানসই পরিবর্তনশীল সময় স্লট।"
        },
        {
          title: "অভিভাবকদের সম্পৃক্ততা",
          desc: "নিয়মিত আপডেট, স্বচ্ছ ব্যবস্থাপনা এবং ধারাবাহিক মূল্যায়ন প্রতিবেদন।"
        }
      ]
    },
    //end about
    links: [
      { name: "হোম", href: "/" },
      { name: "কোর্সসমূহ", href: "/courses" },
      { name: "শিক্ষকগণ", href: "/teachers" },
      { name: "পাঠ্যক্রম", href: "/curriculum" },
      { name: "আমাদের সম্পর্কে", href: "/about-us" },
      { name: "রিভিউ", href: "/reviews" },
    ],
    nav: {
      home: "হোম",
      courses: "কোর্সসমূহ",
      teachers: "শিক্ষকবৃন্দ",
      curriculum: "কারিকুলাম",
      aboutUs: "আমাদের সম্পর্কে",
      reviews: "মতামত",
      portal: "পোর্টাল",
      bookTrial: "ফ্রি ট্রায়াল ক্লাস বুক করুন",
      freeTrialShort: "ফ্রি ট্রায়াল",
      subtitle: "ফাউন্ডেশন ও ক্লাসিক্যাল আরবি"
    },
    hero: {
      rating: "৪.৯ / ৫.০ (১৮০+ বৈশ্বিক অভিভাবক)",
      trust: "২০২৪ থেকে মুসলিম পরিবারের সেবায়",
      subhead: "সনদ-স্বীকৃত অনলাইন সান্ধ্যকালীন মাদ্রাসা",
      heading: "স্কুলগামী শিশুদের জন্য আমরা নিশ্চিত করি সার্টিফাইড ইসলামিক স্কলার",
      headingHighlight: "স্কুলগামী শিশু",
      desc: "আফটার স্কুল মাকতাব প্রতিদিন সন্ধ্যায় একটি সুশৃঙ্খল ও প্রশান্ত পরিবেশ প্রদান করে যেখানে শিশুরা সঠিক তাজবীদ সহ কুরআন তিলাওয়াত, দৈনন্দিন সুন্নাহ অর্জন এবং চরিত্র গঠন করে—যা পশ্চিমা স্কুলের সময়সূচীর সাথে চমৎকারভাবে সামঞ্জস্যপূর্ণ।",
      bookTrialBtn: "ফ্রি ট্রায়াল ক্লাস বুক করুন",
      exploreTracksBtn: "সব ৬টি ট্র্যাক দেখুন",
      activeStudentsCount: "২,২০০+ সক্রিয় শিক্ষার্থী",
      activeStudentsCountries: "যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া এবং ৮টি দেশে",
      separateBatches: "ছেলেদের ও মেয়েদের পৃথক ব্যাচ",
      liveIndicator: "লাইভ ইভনিং সেশন ভর্তি চলছে",
      virtualTitle: "ভার্চুয়াল ক্লাসরুম পরিবেশ",
      virtualSubtitle: "ইন্টারেক্টিভ অডিও-ভিজ্যুয়াল মাখরাজ ও নাযিরা",
      virtualDesc: "যাচাইকৃত স্ক্রিন-শেয়ারিং এবং ইন্টারেক্টিভ তাজবীদ নির্দেশকসহ ওয়ান-অন-ওয়ান বিশেষ নজর।",
      ratio: "১ : ১ অথবা ১ : ৪",
      ratioLabel: "ছোট ব্যাচে নিবিড় শিক্ষক অনুপাত",
      femaleBatches: "১০০% নারী ব্যাচ",
      femaleBatchesLabel: "সার্টিফাইড আলিমা মেন্টর",
      tajweedLab: "তাজবীদ উচ্চারণ ল্যাব",
      tajweedLabDesc: "মাখরাজ স্থানসমূহ ডায়াগ্রামের মাধ্যমে সরাসরি অনুশীলন",
      included: "অন্তর্বুক্ত"
    },
    credibility: {
      stat1Val: "২,২০০+",
      stat1Title: "বিশ্বব্যাপী শিক্ষিত শিক্ষার্থী",
      stat1Desc: "যুক্তরাজ্য, যুক্তরাষ্ট্র, ইউরোপ, জিসিসি ও এশিয়া",
      stat2Val: "১০০%",
      stat2Title: "সার্টিফাইড আলিম ও আলিমা টিউটর",
      stat2Desc: "দরসে নিজামী ও সনদ যাচাইকৃত",
      stat3Val: "পৃথক",
      stat3Title: "লিঙ্গ-ভিত্তিক পৃথক ক্লাস",
      stat3Desc: "ছেলেদের ওস্তাদ এবং মেয়েদের আলিমা শিক্ষিকা",
      stat4Val: "নমনীয়",
      stat4Title: "সান্ধ্যকালীন ও উইকএন্ড সময়সূচী",
      stat4Desc: "প্রতিদিন ৩০ মি, ৪৫ মি ও ৬০ মিনিটের স্লট"
    },
    curriculum: {
      tag: "সমান্তরাল পান্ডিত্যপূর্ণ পথ",
      title: "পূর্ণাঙ্গ ইসলামিক বৃদ্ধির জন্য দুটি সুসংগঠিত ট্র্যাক",
      desc: "অভিভাবকরা একক বা যৌথ ট্র্যাকে ভর্তি করাতে পারেন। উভয় ট্র্যাকে সাপ্তাহিক হোমওয়ার্ক ট্র্যacking, মাসিক পরীক্ষা এবং ব্যক্তিগতকৃত টিউটর ফিডব্যাক রিপোর্ট অন্তর্ভুক্ত।",
      dashboardTag: "অভিভাবকদের প্রগ্রেস ড্যাশবোর্ড অন্তর্ভুক্ত",
      track1Badge: "ট্র্যাক ০১ • বয়স ৬-১৬",
      track1Freq: "সপ্তাহে ২ দিন",
      track1Title: "অনলাইন ইসলামিক ফাউন্ডেশনস কোর্স",
      track1Sub: "সমসাময়িক শিক্ষার্থীদের জন্য প্রণীত পদ্ধতিগত ফরজে আইন জ্ঞান",
      track1Desc: "সহিহ আকিদা, দৈনন্দিন সুন্নাহ, নববী সিরাত এবং তাহরাত, ওজু ও সালাতের ফিকহ সমৃদ্ধ পূর্ণাঙ্গ কারিকুলাম। স্পষ্ট ইসলামিক দৃষ্টিভঙ্গি গঠনের জন্য নির্মিত।",
      track1F1: "সহিহ আকিদা ও তাওহীদ",
      track1F2: "৪০টি প্রাত্যহিক মাসনুন দোয়া",
      track1F3: "পবিত্রতা ও ৫ ওয়াক্ত নামাজের ফিকহ",
      track1F4: "রাসূলুল্লাহ ﷺ-এর জীবন ও সিরাত",
      track1Format: "৪৫ মিনিট • কোহর্ট ব্যাচ",
      track1Btn: "ইসলামিক সিলেবাস দেখুন",

      track2Badge: "ট্র্যাক ০২ • সকল বয়সের জন্য",
      track2Freq: "সপ্তাহে ৩ থেকে ৫ দিন",
      track2Title: "অনলাইন কুরআন টিউটর ও তাজবীদ",
      track2Sub: "নূরানী কায়দা থেকে সহজ নাযিরা ও হিফজ",
      track2Desc: "ধারাবাহিক সনদপ্রাপ্ত অভিজ্ঞ আলেমদের দ্বারা পাঠদান। প্রতিটি অক্ষরের সঠিক মাখরাজ, তাজবীদের নিয়ম এবং মধুর সুরময় তিলাওয়াত নিশ্চিত করা হয়।",
      track2F1: "ধ্বনিসহ নূরানী কায়দা",
      track2F2: "তাজবীদের নিয়ম (মাদ্দ, গুন্নাহ)",
      track2F3: "মুখস্থকরণ ট্র্যাকিং (জুয আম্মা)",
      track2F4: "১-অন-১ স্পেশাল ফোকাস সেশন",
      track2Format: "৩০-৪৫ মিনিট • ১-অন-১ বা ছোট ব্যাচ",
      track2Btn: "কুরআন টিউটরদের দেখুন"
    },
    statement: {
      tag: "বিশ্বাসযোগ্যতা • সহানুভূতি • আদব",
      quote: "“আফটার স্কুল মাকতাব কেবল একটি সান্ধ্যকালীন একাডেমি নয়, বরং এটি একটি পবিত্র স্থান যেখানে কোমলমতি জ্ঞানপিপাসু শিক্ষার্থীরা ইলম ও আমলের ছায়ায় বিকশিত হয়।”",
      author: "— আফটার স্কুল মাকতাবের একাডেমিক বোর্ড",
      g1Title: "লিঙ্গ-ভিত্তিক পৃথক ব্যাচ",
      g1Desc: "ঐতিহ্যবাহী আদব অনুসরণ করে, মেয়েরা যোগ্যতাসম্পন্ন আলিমা শিক্ষিকাদের কাছে এবং ছেলেরা নিবেদিত ভার্চুয়াল রুমে আলিম শিক্ষকদের কাছে শিক্ষা গ্রহণ করে।",
      g2Title: "কঠোর সনদ স্বীকৃতি",
      g2Desc: "প্রত্যেক শিক্ষক দরসে নিজামী, আল-আজহার বা স্বীকৃত জামিয়া থেকে সনদপ্রাপ্ত এবং পবিত্র কুরআনের সনদধারী।",
      g3Title: "স্কুলের সাথে চমৎকার ভারসাম্য",
      g3Desc: "পশ্চিমা স্কুলে অধ্যয়নরত শিক্ষার্থীদের জন্য বিশেষভাবে তৈরি। সহজ হোমওয়ার্ক, ছোট রিভিশন রুটিন এবং পড়াশোনার চাপমুক্ত।"
    },
    courses: {
      tag: "কারিকুলাম ক্যাটালগ",
      title: "ফল সেমিস্টারের জন্য বিশেষ কোর্সসমূহ",
      sub: "আপনার সন্তানের বর্তমান দক্ষতা অনুযায়ী সঠিক কোর্স নির্বাচন করুন।",
      tabAll: "সকল কোর্স",
      tabQuran: "কুরআন ও তাজবীদ",
      tabIslamic: "ইসলামিক স্টাডিজ",
      tabArabic: "আরবি ভাষা",
      monthlyBatches: "মাসিক ফি",
      freeTrial: "ফ্রি ট্রায়াল"
    },
    faculty: {
      tag: "সনদপ্রাপ্ত শিক্ষকবৃন্দ",
      title: "আমাদের যাচাইকৃত আলিম ও আলিমা মেন্টরদের সাথে পরিচিত হন",
      sub: "আমাদের শিক্ষকমণ্ডলী কঠোর একাডেমিক ও শিক্ষাদান পদ্ধতির মাধ্যমে নির্বাচিত। প্রতিটি শিক্ষক অত্যন্ত ধৈর্যশীল এবং তরুণদের শেখাতে দক্ষ।",
      viewAllBtn: "সকল ২৪ জন শিক্ষকের তালিকা দেখুন",
      selectUstadh: "ওস্তাদ নির্বাচন করুন →",
      selectAlima: "আলিমা নির্বাচন করুন →"
    },
    difference: {
      tag: "মাকতাবের স্বতন্ত্রতা",
      title: "কেন অভিভাবকরা আমাদের অনলাইন মাকতাব নির্বাচন করেন",
      sub: "আমরা ঐতিহ্যবাহী মাকতাবের আদব এবং আধুনিক ডিজিটাল ক্লাসরুমের সুবিধাকে একত্রে যুক্ত করেছি।"
    },
    testimonials: {
      tag: "অভিভাবকদের অভিজ্ঞতা",
      title: "বিশ্বজুড়ে অভিভাবকদের নিকট বিশ্বস্ত",
      sub: "উত্তর আমেরিকা, যুক্তরাজ্য এবং বাংলাদেশের পরিবারগুলির মতামত শুনুন।",
      rating: "৪.৯ স্টার রেটিং",
      verifiedParent: "যাচাইকৃত অভিভাবক • ফল সেমিস্টার",
      ukTitle: "“সহজ সান্ধ্যকালীন রুটিন”",
      milestonesTag: "সাম্প্রতিক শিক্ষার্থীদের সাফল্য:"
    },
    admissions: {
      tag: "সকল স্তরে ভর্তি চলছে",
      title: "বিনামূল্যে ৩০ মিনিটের ট্রায়াল মূল্যায়ন ক্লাস দিয়ে শুরু করুন",
      desc: "সরাসরি একজন আলিম বা আলিমা শিক্ষকের সাথে যুক্ত হন। আমরা আপনার সন্তানের আরবি বর্ণমালা মূল্যায়ন করব এবং সঠিক ব্যাচ স্তরের পরামর্শ দেব।",
      reassurance1: "কোনো বাধ্যবাধকতা নেই",
      reassurance2: "ক্রেডিট কার্ডের প্রয়োজন নেই",
      reassurance3: "কাস্টম সময়সূচী ম্যাচিং",
      fastTrack: "দ্রুত ভর্তি সহায়তা",
      fastTrackSub: "সরাসরি আমাদের ভর্তি কো-অর্ডিনেটরের সাথে যোগাযোগ করুন",
      chatWhatsapp: "হোয়াটসঅ্যাপে চ্যাট করুন",
      bookCalendar: "অনলাইনে ক্যালেন্ডার বুক করুন",
      hotline: "হটলাইন সহায়তা: +১ (৮০০) ৫৫৫-০১৯৯"
    },
    footer: {
      desc: "একটি সুসংগঠিত সান্ধ্যকালীন ইসলামিক শিক্ষা প্রতিষ্ঠান যা শিশুদের সঠিক চরিত্র, তাজবীদসহ কুরআন তিলাওয়াত এবং আরবি ভাষা শেখায়।",
      sanadVerified: "সনদ ও ইজাজাহ যাচাইকৃত টিউটরগণ",
      curriculumTracksTitle: "কারিকুলাম ট্র্যাক",
      instituteTitle: "ইনস্টিটিউট",
      newsletterTitle: "মাকতাব নিউজলেটার",
      newsletterDesc: "টার্মের তারিখ, ওয়েবিনার এবং রিভিশন টিপস সরাসরি পেতে যুক্ত হোন।",
      placeholderEmail: "অভিভাবকের ইমেইল",
      joinBtn: "যুক্ত হোন",
      privacyNotice: "আমরা আপনার গোপনীয়তাকে সম্মান করি। কোনো স্প্যাম নেই।",
      copyright: "© ২০২৪ আফটার স্কুল মাকতাব ইনস্টিটিউট। সর্বস্বত্ব সংরক্ষিত।",
      nonProfit: "একটি নিবন্ধিত ৫০১(সি)(৩) শিক্ষামূলক অলাভজনক প্রতিষ্ঠান",
      privacyPolicy: "প্রাইভেসি পলিসি",
      termsOfService: "শর্তাবলী",
      parentHandbook: "প্যারেন্ট হ্যান্ডবুক"
    },
    modal: {
      title: "৩০ মিনিটের ট্রায়াল ক্লাস সময়সূচী নির্ধারণ করুন",
      selectedTrack: "নির্বাচিত ট্র্যাক:",
      parentNameLabel: "অভিভাবকের পুরো নাম",
      parentNamePlaceholder: "যেমন: ফারহান রহমান",
      studentDetailsLabel: "শিক্ষার্থীর বয়স ও লিঙ্গ",
      studentDetailsPlaceholder: "যেমন: ৮ বছর • ছেলে",
      phoneLabel: "অভিভাবকের হোয়াটসঅ্যাপ / ফোন",
      phonePlaceholder: "+১ (৫৫৫) ০০০-০০০০",
      slotLabel: "পছন্দসই সময়সূচী",
      proficiencyLabel: "সন্তানের বর্তমান আরবি/কুরআন দক্ষতা",
      cancel: "বাতিল করুন",
      confirmBtn: "ফ্রি ট্রায়াল ক্লাস নিশ্চিত করুন"
    }
  }
};

export function LanguageProvider({ children }) {
  // Initialize state with stored language or fallback to 'en'
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferred_language");
      return savedLang && translations[savedLang] ? savedLang : "en";
    }
    return "en";
  });

  // Sync language changes with localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_language", lang);
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = translations[lang] || translations["en"];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}