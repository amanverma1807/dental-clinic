import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Dental Clinic & Implant Centre | Modern, Painless Dentistry (Demo)",
  description:
    "Experience calm, compassionate, and pain-free dentistry in India. Advanced single-sitting root canals, invisible aligners, Swiss dental implants, and smile makeovers with European Class-B sterilization.",
  keywords: [
    "dental clinic",
    "dentist in India",
    "Sai Dental Clinic",
    "painless root canal",
    "dental implants",
    "clear aligners",
    "teeth whitening",
    "cosmetic dentistry",
  ],
};

export const viewport: Viewport = {
  themeColor: "#164e63",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans bg-[#F7F4EE] text-[#1E293B] selection:bg-[#E8F4F7] selection:text-[#164E63]"
      >
        {children}
      </body>
    </html>
  );
}
