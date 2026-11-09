import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import { Hind_Siliguri, Inter, Noto_Serif_Bengali } from 'next/font/google';


const banglaFont = Noto_Serif_Bengali({
  weight: ['400', '700'],
  subsets: ['bengali'],
  variable: '--font-bangla',
});

const englishFont = Inter({
  subsets: ['latin'],
  variable: '--font-english',
});


export const metadata = {
  title: "After School Maktab - Interactive Prototype & Design Presentation System",
  description: "Sanad-Accredited Online Evening Madrasah for School-Going Youth. Learn Quran, Tajweed, Islamic Foundations, and Classical Arabic.",
  icons: {
    icon: "https://lh3.googleusercontent.com/aida/AEtjO1UsilmhSOQmn3Ry2Pm-es-zuFFcElPM-nd_mnGrlg_oiR0Q-LdeGJD0BN30gWpuF4fu4L4TYeC8m1A0rPvkOBxxDvlpypNwJwmEM7mTBKlOwkgSs9FEE6wOzyx5jK_6a46hRmq_VjuVwW3GSIzTZCcUIL6SC_SVKLLdMSaAugwlyDaWIwr-v8xmmpcQb8lc3fwZRnHHo4VWAt0DSUTJTUDq6g1CX5ZZPXyaZyzmjA56DfFE9bEkojG4rA",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="light">
      <body className={`${banglaFont.variable} ${englishFont.variable} font-sans bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider
         attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
