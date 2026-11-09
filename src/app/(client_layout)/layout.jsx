import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import React from "react";

const layout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header/>
      {children}
      <Footer />
    </LanguageProvider>
  );
};

export default layout;
