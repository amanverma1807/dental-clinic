"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero – Sai Dental Clinic"
      className="relative overflow-hidden memo-smooth-gradient text-[#1E293B] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[#D4E5E9]/60"
    >
      {/* ── Ultra-Lightweight Zero-Lag Moving Gradient (Exact memo-galleryy technique) ── */}
      <style>{`
        @keyframes memoGradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .memo-smooth-gradient {
          background: linear-gradient(
            135deg,
            #FAF8F5 0%,
            #60A5FA 22%,
            #CBD5E1 40%,
            #F8FAFC 52%,
            #38BDF8 70%,
            #94A3B8 85%,
            #0284C7 100%
          ) !important;
          background-size: 350% 350% !important;
          animation: memoGradientShift 10s ease infinite !important;
          will-change: background-position;
        }

        @media (prefers-reduced-motion: reduce) {
          .memo-smooth-gradient {
            animation: none !important;
          }
        }
      `}</style>

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* ━━ Left Column: Clean Editorial Headline, Concise Subhead, & Quick CTAs ━━ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Eyebrow Badge - Crisp & Clean */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-[#287D91]/25 text-[#164E63] text-xs font-semibold tracking-wide mb-3 sm:mb-4 shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 bg-[#22C55E]" />
              <span className="text-[#EAB308] font-bold">★ 4.9</span>
              <span className="text-[#94A3B8]">•</span>
              <span>1,200+ Happy Smiles</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-[#0F2937] text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.12] sm:leading-[1.08] tracking-[-0.025em] font-normal mb-3 sm:mb-4">
              Where gentle artistry{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#164E63]">
                meets clinical
              </span>{" "}
              precision.
            </h1>

            {/* Sub-headline Paragraph - Clean & Punchy */}
            <p className="font-sans text-[#334155] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-xl mb-6 sm:mb-8">
              Gentle, pain-free dental care for your family. Advanced single-sitting root canals, invisible clear aligners &amp; precision Swiss implants.
            </p>

            {/* CTAs Row - Sharp & Compact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              {/* Primary Appointment CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#164E63] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_-2px_rgba(22,78,99,0.35)] hover:bg-[#0e3847] hover:shadow-[0_8px_24px_-2px_rgba(22,78,99,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
              >
                <span>Book Appointment</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              {/* Quick Actions Row */}
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 sm:py-3.5 bg-white/90 hover:bg-white text-[#164E63] font-sans text-xs sm:text-sm font-semibold border border-[#287D91]/30 hover:border-[#164E63]/50 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer text-center"
                >
                  <svg className="w-3.5 h-3.5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Clinic</span>
                </a>

                <a
                  href="#treatments"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("treatments");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 sm:py-3.5 bg-white/90 hover:bg-white text-[#164E63] font-sans text-xs sm:text-sm font-semibold border border-[#287D91]/30 hover:border-[#164E63]/50 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer text-center"
                >
                  <span>Treatments</span>
                  <svg
                    className="w-3.5 h-3.5 text-[#287D91]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* ━━ Right Column: Clean Doctor Showcase Card ━━ */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-2 lg:mt-0">
            <div className="relative w-full max-w-[400px] lg:max-w-[460px]">
              
              {/* Main Clinical Card - Clean Sharp Rectangle */}
              <div className="relative bg-white border border-[#D4E5E9] shadow-[0_12px_36px_-6px_rgba(22,78,99,0.14)] overflow-hidden">
                
                {/* Image container */}
                <div className="relative h-68 sm:h-80 lg:h-92 w-full bg-[#164E63]">
                  <Image
                    src="/images/dentist-doctor.jpg"
                    alt="Dr. Vikram Sharma, Senior Dental Surgeon and Implantologist at Sai Dental Clinic"
                    fill
                    priority
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 400px, 460px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2530]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Clean Bottom Overlay: Doctor Identity */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 p-3.5 bg-white/95 backdrop-blur-md border border-[#D4E5E9]/80 shadow-sm flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#164E63] truncate">
                        Dr. Vikram Sharma
                      </div>
                      <div className="text-[11px] text-[#475569] font-medium truncate">
                        BDS, MDS (Prosthodontics &amp; Implants)
                      </div>
                    </div>
                    
                    <div className="shrink-0 text-right">
                      <div className="inline-flex items-center gap-0.5 text-[#EAB308] text-xs font-bold">
                        <span>★</span>
                        <span className="text-[#164E63]">4.9</span>
                      </div>
                      <div className="text-[10px] text-[#64748B] font-medium">
                        Senior Specialist
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
