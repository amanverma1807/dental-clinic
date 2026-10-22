import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarePoint Clinic | Multi-Specialty Healthcare (Demo)",
  description:
    "Expert medical care for you and your family, with trusted doctors and personalized attention under one roof. Modern multi-specialty outpatient clinic.",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-[#F8F6F0] text-[#334744] selection:bg-[#DCE8DF] selection:text-[#0F4F4A]"
      >
        {children}
      </body>
    </html>
  );
}
