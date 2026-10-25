"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] py-8 sm:py-12 lg:py-16">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[#E8F4F7] rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4 opacity-80"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5 z-10">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#164E63] font-display leading-[1.1] tracking-tight">
              Where gentle artistry <br className="hidden sm:inline" />
              <span className="italic text-[#287D91]">meets clinical</span> precision.
            </h1>

            {/* Mobile Visual Card (Right after headline on small screens) */}
            <div className="block lg:hidden relative my-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-soft bg-white aspect-[16/10] w-full">
                <Image
                  src="/images/dental-hero.jpg"
                  alt="Senior dental surgeon at Sai Dental Clinic modern operatory suite"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl glass-surface-dark text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span className="font-semibold text-white">OPD Open &bull; Indiranagar</span>
                  </div>
                  <span className="text-[11px] text-[#E8F4F7]">Dr. Vikram Sharma</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1E293B]/85 max-w-xl leading-relaxed font-normal">
              Personalized, pain-free dental care for your whole family. Advanced single-sitting root canals, invisible clear aligners, and precision Swiss implants in a calm, sterile clinic environment.
            </p>

            {/* CTAs: 1 Primary + 1 Secondary Link */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white font-semibold text-xs tracking-wide shadow-soft transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Book Appointment</span>
                <svg
                  className="w-3.5 h-3.5 ml-2"
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
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("treatments");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center text-xs font-semibold text-[#164E63] hover:text-[#287D91] transition-colors py-2 cursor-pointer"
              >
                <span>View Key Treatments &darr;</span>
              </a>
            </div>
          </div>

          {/* Desktop Visual Card */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/90 shadow-[0_20px_45px_-10px_rgba(22,78,99,0.18)] bg-white aspect-[4/3] w-full">
              <Image
                src="/images/dental-hero.jpg"
                alt="Modern ergonomic dental operatory suite with professional dental surgeon at Sai Dental Clinic"
                fill
                priority
                sizes="45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-surface-dark text-white flex items-center justify-between text-xs shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8F4F7] block">
                      OPD Active
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Indiranagar Clinic Open
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="px-3 py-1 rounded-lg bg-white text-[#164E63] hover:bg-[#E8F4F7] text-[11px] font-bold transition-colors"
                >
                  Book Slot &rarr;
                </a>
              </div>
            </div>

            {/* Doctor Bio Badge */}
            <div className="absolute -top-5 -right-4 glass-surface px-3 py-2.5 rounded-2xl border border-white/90 shadow-glass flex items-center gap-2.5 max-w-[240px]">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-[#287D91]/30">
                <Image
                  src="/images/dentist-doctor.jpg"
                  alt="Dr. Vikram Sharma, Senior Implantologist"
                  fill
                  sizes="36px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-[#164E63] leading-tight block">
                  Dr. Vikram Sharma
                </span>
                <span className="text-[10px] text-[#475569]">
                  BDS, MDS &bull; 15+ Yrs Exp
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
