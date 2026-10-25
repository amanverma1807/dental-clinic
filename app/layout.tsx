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
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarePoint Clinic | Multi-Specialty Healthcare (Demo)",
  description:
    "A healthier life begins with the right care. Expert medical care for you and your family, bringing trusted doctors and multiple specialties together.",
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
      className={`${dmSerif.variable} ${plusJakarta.variable} h-full antialiased`}
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
