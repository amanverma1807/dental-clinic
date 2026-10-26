"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero – Sai Dental Clinic"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#1E293B] pt-4 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-18"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 70% 50% at 85% 42%, rgba(186, 230, 243, 0.35) 0%, rgba(232, 244, 247, 0.12) 50%, transparent 75%),
          radial-gradient(circle at 10% 15%, rgba(22, 78, 99, 0.035) 0%, transparent 45%),
          linear-gradient(180deg, #FAF8F5 0%, #F5F2EA 100%)
        `,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ━━ Left Column: Editorial Headline, Subhead, CTAs & Clinical Proof ━━ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F4F7] border border-[#287D91]/25 text-[#164E63] text-[11px] sm:text-xs font-semibold tracking-wide mb-3 sm:mb-4 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#287D91] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#164E63]" />
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-[#EAB308] font-bold">★ 4.9/5</span>
                <span className="text-[#64748B]">•</span>
                <span>1,200+ Happy Smiles</span>
                <span className="hidden sm:inline text-[#64748B]">•</span>
                <span className="hidden sm:inline uppercase text-[10px] tracking-wider font-bold text-[#287D91]">Certified Centre</span>
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-[#0F2937] text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.12] sm:leading-[1.08] tracking-[-0.025em] font-normal mb-3 sm:mb-4">
              Where gentle artistry{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#164E63]">
                meets clinical
              </span>{" "}
              precision.
            </h1>

            {/* Sub-headline Paragraph - Clean narrative flow */}
            <p className="font-sans text-[#334155] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-xl mb-5 sm:mb-6">
              Personalized, pain-free dental care for your whole family. Advanced single-sitting root canals, invisible clear aligners, and precision Swiss implants — in a calm, sterile clinic environment.
            </p>

            {/* CTAs Row - Mobile friendly & compact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-6 sm:mb-7 w-full sm:w-auto">
              {/* Primary Appointment CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#164E63] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_-2px_rgba(22,78,99,0.35)] hover:bg-[#0e3847] hover:shadow-[0_8px_24px_-2px_rgba(22,78,99,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
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

              {/* Quick Actions Row on Mobile: Direct Call & Treatments */}
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#E8F4F7] text-[#164E63] font-sans text-xs sm:text-sm font-semibold tracking-wide border border-[#287D91]/30 hover:border-[#164E63]/50 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer text-center"
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
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#E8F4F7] text-[#164E63] font-sans text-xs sm:text-sm font-semibold tracking-wide border border-[#287D91]/30 hover:border-[#164E63]/50 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer text-center"
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

            {/* Reassuring Clinical Trust Highlights - Clean badge pills */}
            <div className="pt-3 border-t border-[#D4E5E9]/70 w-full flex flex-wrap items-center gap-2 sm:gap-x-3 text-xs sm:text-[13px] text-[#475569] font-medium">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 border border-[#D4E5E9]/70 shadow-2xs">
                <svg className="w-3.5 h-3.5 text-[#287D91] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Swiss Titanium Implants</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 border border-[#D4E5E9]/70 shadow-2xs">
                <svg className="w-3.5 h-3.5 text-[#287D91] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Painless Single-Sitting RCT</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 border border-[#D4E5E9]/70 shadow-2xs">
                <svg className="w-3.5 h-3.5 text-[#287D91] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Zero-Wait Scheduled Slots</span>
              </span>
            </div>

          </div>

          {/* ━━ Right Column: Warm, High-Trust Doctor & Clinical Suite Showcase (Mobile & Desktop) ━━ */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-2 lg:mt-0">
            <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
              
              {/* Refined subtle ambient glow behind the card */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#287D91]/15 via-[#164E63]/10 to-transparent blur-xl pointer-events-none"
              />

              {/* Main Clinical Card */}
              <div className="relative bg-white rounded-3xl border border-[#D4E5E9] shadow-[0_12px_36px_-6px_rgba(22,78,99,0.14)] overflow-hidden">
                
                {/* Image container */}
                <div className="relative h-64 sm:h-76 lg:h-84 w-full bg-[#164E63]">
                  <Image
                    src="/images/dentist-doctor.jpg"
                    alt="Dr. Vikram Sharma, Senior Dental Surgeon and Implantologist at Sai Dental Clinic"
                    fill
                    priority
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 480px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2530] via-transparent to-black/20 pointer-events-none" />

                  {/* Top Floating Badge: Verified Clinical Specialist */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/92 backdrop-blur-md border border-[#D4E5E9]/80 shadow-xs text-[11px] font-semibold text-[#164E63]">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span>Accepting New Patients</span>
                  </div>

                  {/* Top Right: Experience Pill */}
                  <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#164E63]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-xs">
                    <span>15+ Yrs Exp</span>
                  </div>

                  {/* Bottom Image Overlay: Doctor Identity */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4E5E9]/80 shadow-sm flex items-center justify-between gap-3">
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
                        Verified Doctor
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Strip inside the card */}
                <div className="p-3.5 bg-[#FAF8F5] border-t border-[#D4E5E9]/60 flex items-center justify-between text-xs text-[#334155]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>European Class-B Sterilization</span>
                  </div>
                  <span className="text-[#287D91] font-semibold text-[11px]">
                    100% Pain-Free
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
