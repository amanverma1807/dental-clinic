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
  title: "Sai Dental Clinic & Implant Centre | Gentle, World-Class Dentistry (Demo)",
  description:
    "Experience calm, compassionate, and pain-free dentistry in India. Advanced root canals, invisible aligners, dental implants, and smile makeovers with European Class-B sterilization.",
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
  themeColor: "#0f4f4a",
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
        className="min-h-full flex flex-col font-sans bg-[#F8F6F0] text-[#334744] selection:bg-[#DCE8DF] selection:text-[#0F4F4A]"
      >
        {children}
      </body>
    </html>
  );
}
