"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-4 pb-14 sm:pt-8 sm:pb-18 lg:pt-14 lg:pb-24">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] bg-[#E8F4F7] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4 opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] lg:w-[550px] lg:h-[550px] bg-[#287D91]/10 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: 7 cols content, 5 cols image on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7 z-10">
            
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#E8F4F7] border border-[#D4E5E9] text-[#164E63] text-xs font-semibold shadow-xs w-max">
              <span className="w-2 h-2 rounded-full bg-[#287D91] animate-pulse" aria-hidden="true" />
              <span>Modern Painless Dentistry &bull; Indiranagar, Bengaluru</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-normal text-[#164E63] font-display leading-[1.08] tracking-tight">
              Where gentle artistry <br className="hidden sm:inline" />
              <span className="italic text-[#287D91]">meets clinical</span> precision.
            </h1>

            {/* MOBILE ONLY: High-Impact Visual Card right after headline */}
            <div className="block lg:hidden relative my-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-[0_12px_36px_rgba(22,78,99,0.18)] bg-white aspect-[4/3] w-full">
                <Image
                  src="/images/dental-hero.jpg"
                  alt="Senior dental surgeon at Sai Dental Clinic modern operatory suite"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Mobile In-Photo Live Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-surface-dark text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-[#E8F4F7] block">
                        Clinic OPD Active
                      </span>
                      <span className="text-xs font-bold text-white">
                        Indiranagar &bull; 15+ Yrs Exp
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white text-[#164E63] px-2.5 py-1 rounded-lg font-bold">
                    Class-B Sterile
                  </span>
                </div>
              </div>
            </div>

            {/* Reassuring Body Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#1E293B]/90 max-w-xl leading-relaxed font-normal">
              Experience calm, unhurried dental care crafted around your comfort. From single-visit painless root canals to invisible clear aligners and Swiss titanium implants—performed under hospital-grade European Class-B sterilization.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#appointment-booking"
                className="inline-flex items-center justify-center min-h-[50px] px-7 py-3 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white font-semibold text-sm shadow-[0_6px_20px_rgba(22,78,99,0.22)] hover:shadow-[0_8px_26px_rgba(40,125,145,0.32)] transition-all duration-200 group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287D91]"
              >
                <span>Book Priority Consultation</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center min-h-[50px] px-6 py-3 rounded-full glass-surface text-[#164E63] hover:text-[#287D91] hover:bg-white font-semibold text-sm border border-[#D4E5E9] transition-all duration-200 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287D91]"
              >
                <span>Explore Treatments</span>
                <svg className="w-3.5 h-3.5 ml-2 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust Ribbons - 3 Clear Clinical Promises */}
            <div className="pt-5 border-t border-[#D4E5E9]/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 border border-[#D4E5E9]">
                  <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#164E63]">100% Pain-Free</span>
                  <span className="text-[11px] text-[#475569]">Gentle numbing gel</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 border border-[#D4E5E9]">
                  <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#164E63]">Class-B Autoclave</span>
                  <span className="text-[11px] text-[#475569]">Sealed sterile pouches</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 border border-[#D4E5E9]">
                  <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#164E63]">Zero Wait Slots</span>
                  <span className="text-[11px] text-[#475569]">Pre-scheduled OPD</span>
                </div>
              </div>
            </div>

          </div>

          {/* DESKTOP ONLY: Right Column Layered Photography Composition */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Outer halo */}
            <div
              className="absolute -inset-5 rounded-[36px] bg-gradient-to-tr from-[#164E63]/10 to-[#287D91]/15 -rotate-1 pointer-events-none"
              aria-hidden="true"
            />

            {/* Primary Frame */}
            <div className="relative rounded-[32px] overflow-hidden border border-white/90 shadow-[0_24px_55px_-12px_rgba(22,78,99,0.22)] bg-white">
              <div className="relative aspect-[4/3] xl:aspect-[5/4] w-full">
                <Image
                  src="/images/dental-hero.jpg"
                  alt="Modern ergonomic dental operatory suite with professional dental surgeon at Sai Dental Clinic"
                  fill
                  priority
                  sizes="45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/75 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* In-Frame Live OPD Status Ribbon */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-surface-dark text-white flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8F4F7] block">
                      Consultation Active
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Indiranagar Clinic OPD Open
                    </span>
                  </div>
                </div>

                <a
                  href="#appointment-booking"
                  className="px-3.5 py-1.5 rounded-xl bg-white text-[#164E63] hover:bg-[#E8F4F7] text-xs font-bold transition-colors shrink-0"
                >
                  Book Slot &rarr;
                </a>
              </div>
            </div>

            {/* Layered Floating Glass Badge 1: Doctor Bio Pill */}
            <div className="absolute -top-7 -right-5 glass-surface p-3.5 rounded-2xl border border-white/90 shadow-[0_12px_36px_rgba(22,78,99,0.15)] flex items-center gap-3 max-w-[270px] z-20">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-[#287D91]/30">
                <Image
                  src="/images/dentist-doctor.jpg"
                  alt="Dr. Vikram Sharma, Senior Implantologist"
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#287D91] block">
                  Lead Implantologist
                </span>
                <span className="text-xs font-bold text-[#164E63] leading-snug block">
                  Dr. Vikram Sharma
                </span>
                <span className="text-[10px] text-[#475569]">
                  BDS, MDS &bull; 15+ Yrs Exp
                </span>
              </div>
            </div>

            {/* Layered Floating Glass Badge 2: Class-B Sterilization Pill */}
            <div className="absolute -bottom-7 -left-5 glass-surface px-4 py-3 rounded-2xl border border-white/90 shadow-[0_12px_36px_rgba(22,78,99,0.15)] flex items-center gap-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-[#164E63] text-white flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#E8F4F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#164E63] block">
                  European Class-B Protocol
                </span>
                <span className="text-xs font-bold text-[#1E293B]">
                  100% Sterile Sealed Pouches
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
