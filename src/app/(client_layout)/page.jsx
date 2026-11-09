"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredibilityBanner from "@/components/CredibilityBanner";
import CurriculumTracks from "@/components/CurriculumTracks";
import InstitutionalStatement from "@/components/InstitutionalStatement";
import FeaturedCourses from "@/components/FeaturedCourses";
import FacultyShowcase from "@/components/FacultyShowcase";
import MaktabDifference from "@/components/MaktabDifference";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionsBanner from "@/components/AdmissionsBanner";
import Footer from "@/components/Footer";
import TrialModal from "@/components/TrialModal";
import Toast from "@/components/Toast";
import { LanguageProvider } from "@/context/LanguageContext";

function MainContent() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState("General Admission");
  const [toast, setToast] = useState({ visible: false, message: "" });

  const triggerToast = (message) => {
    setToast({ visible: true, message });
  };

  const triggerTrialModal = (contextTitle) => {
    setModalContext(contextTitle || "General Admission");
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F2042] flex flex-col font-sans selection:bg-[#10B981] selection:text-white">
      {/* Main Clean Navigation Header */}


      {/* Main Page Sections */}
      <main className="w-full bg-[#FAF8F5] flex-1">
        <HeroSection triggerTrialModal={triggerTrialModal} />
        <CredibilityBanner />
        <CurriculumTracks triggerTrialModal={triggerTrialModal} />
        <InstitutionalStatement />
        <FeaturedCourses triggerTrialModal={triggerTrialModal} />
        <FacultyShowcase
          triggerTrialModal={triggerTrialModal}
          triggerToast={triggerToast}
        />
        <MaktabDifference />
        <TestimonialsSection />
        <AdmissionsBanner triggerTrialModal={triggerTrialModal} />
      </main>

      {/* Footer */}

      {/* Interactive Booking Trial Modal */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        contextTitle={modalContext}
        triggerToast={triggerToast}
      />

      {/* Floating Notification Toast */}
      <Toast toast={toast} setToast={setToast} />
    </div>
  );
}

export default function Home() {
  return <MainContent />;
}
