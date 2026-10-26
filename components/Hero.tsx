"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero – Sai Dental Clinic"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#1E293B] pt-4 pb-10 sm:pt-6 sm:pb-14 lg:pt-8 lg:pb-16"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 70% 50% at 85% 42%, rgba(186, 230, 243, 0.4) 0%, rgba(232, 244, 247, 0.15) 50%, transparent 75%),
          radial-gradient(circle at 10% 15%, rgba(22, 78, 99, 0.035) 0%, transparent 45%),
          linear-gradient(180deg, #FAF8F5 0%, #F5F2EA 100%)
        `,
      }}
    >
      {/* ── Scoped CSS for Keyframes and Mask Treatment ── */}
      <style>{`
        @keyframes heroGlowPulse {
          0% {
            transform: scale(0.96) translate(0, 0);
            opacity: 0.88;
          }
          50% {
            transform: scale(1.04) translate(0.5%, -0.5%);
            opacity: 1;
          }
          100% {
            transform: scale(0.96) translate(0, 0);
            opacity: 0.88;
          }
        }

        .hero-glow-anim {
          animation: heroGlowPulse 6s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-glow-anim {
            animation: none !important;
          }
        }

        /* Jaw visual treatment:
           The mask reaches 100% transparency at 48% radius from center,
           meaning the square boundaries and corners of the JPEG never get painted.
           The jaw itself (located within 32% radius) blends via screen over the deep-blue aura. */
        .hero-jaw-img {
          display: block;
          width: 100%;
          height: auto;
          mix-blend-mode: screen;
          filter: brightness(1.2) contrast(1.25);
          -webkit-mask-image: radial-gradient(ellipse 45% 35% at 50% 50%, black 20%, rgba(0,0,0,0.9) 32%, transparent 48%);
          mask-image: radial-gradient(ellipse 45% 35% at 50% 50%, black 20%, rgba(0,0,0,0.9) 32%, transparent 48%);
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* ━━ Left Column: Editorial Headline, Subhead, CTAs & Clinical Proof ━━ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4F7] border border-[#287D91]/25 text-[#164E63] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#287D91] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#164E63]" />
              </span>
              <span>Sai Dental Clinic &amp; Implant Centre</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-[#0F2937] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.08] tracking-[-0.025em] font-normal mb-3 sm:mb-4">
              Where gentle artistry{" "}
              <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#164E63]">
                meets clinical
              </span>{" "}
              precision.
            </h1>

            {/* ━━ Mobile Only: Balanced Jaw Visual (Sized for First Screen Visibility) ━━ */}
            <div className="block lg:hidden w-full my-2">
              <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[340px] flex items-center justify-center">
                {/* Luminous blue gradient glow */}
                <div
                  aria-hidden="true"
                  className="hero-glow-anim absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 65% 55% at 50% 50%, #0d3846 0%, #164E63 32%, #287D91 54%, rgba(56, 189, 248, 0.42) 66%, rgba(200, 230, 240, 0.2) 75%, transparent 84%)",
                    filter: "blur(20px)",
                    transformOrigin: "center center",
                  }}
                />
                
                {/* Jaw X-ray image with screen blend and feathered mask */}
                <div className="relative z-10 w-full flex items-center justify-center">
                  <Image
                    src="/images/jaw_x_ray.jpeg"
                    alt="3D digital dental jaw scan and tooth anatomy"
                    width={800}
                    height={800}
                    priority
                    sizes="(max-width: 768px) 80vw, 340px"
                    className="hero-jaw-img"
                  />
                </div>

                {/* Micro tech badge */}
                <div className="absolute -bottom-1 right-1 sm:right-3 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D4E5E9] shadow-xs text-[10px] sm:text-[11px] font-semibold text-[#164E63]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#287D91]" />
                  <span>3D Digital Diagnostics</span>
                </div>
              </div>
            </div>

            {/* Sub-headline Paragraph */}
            <p className="font-sans text-[#334155] text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-xl mb-5 sm:mb-6">
              Personalized, pain-free dental care for your whole family. Advanced single-sitting root canals, invisible clear aligners, and precision Swiss implants — in a calm, sterile clinic environment.
            </p>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              {/* Primary Appointment CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#164E63] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_16px_-2px_rgba(22,78,99,0.35)] hover:bg-[#0e3847] hover:shadow-[0_8px_24px_-2px_rgba(22,78,99,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
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

              {/* Secondary Treatments CTA */}
              <a
                href="#treatments"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("treatments");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/80 hover:bg-[#E8F4F7] text-[#164E63] font-sans text-xs sm:text-sm font-semibold tracking-wide border border-[#287D91]/30 hover:border-[#164E63]/50 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
              >
                <span>View Treatments</span>
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

            {/* Reassuring Clinical Trust Highlights */}
            <div className="pt-3.5 border-t border-[#D4E5E9]/70 w-full flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-xs sm:text-[13px] text-[#475569] font-medium">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#287D91] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Swiss Titanium Implants
              </span>
              <span className="hidden sm:inline text-[#CBD5E1]">&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#287D91] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Painless Single-Sitting RCT
              </span>
              <span className="hidden sm:inline text-[#CBD5E1]">&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#287D91] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Zero-Wait Scheduled Slots
              </span>
            </div>

          </div>

          {/* ━━ Right Column: Desktop Oversized Jaw Visual ━━ */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[500px] xl:max-w-[560px] flex items-center justify-center">
              
              {/* Subtle animated blue gradient glow behind visual */}
              <div
                aria-hidden="true"
                className="hero-glow-anim absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 65% 55% at 50% 50%, #0d3846 0%, #164E63 32%, #287D91 54%, rgba(56, 189, 248, 0.42) 66%, rgba(200, 230, 240, 0.22) 76%, transparent 85%)",
                  filter: "blur(28px)",
                  transformOrigin: "center center",
                }}
              />

              {/* Jaw X-ray image with screen blend and feathered mask */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <Image
                  src="/images/jaw_x_ray.jpeg"
                  alt="3D digital dental jaw scan and tooth anatomy"
                  width={800}
                  height={800}
                  priority
                  sizes="(min-width: 1024px) 44vw, 0vw"
                  className="hero-jaw-img transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Floating diagnostic detail badge */}
              <div className="absolute -bottom-2 left-2 xl:left-4 z-20 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/92 backdrop-blur-md border border-[#D4E5E9]/80 shadow-[0_8px_20px_-4px_rgba(22,78,99,0.12)] text-xs font-semibold text-[#164E63]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#287D91] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#287D91]" />
                </span>
                <div>
                  <div className="text-[11px] font-bold text-[#164E63] leading-none">3D CBCT Guided</div>
                  <div className="text-[10px] font-normal text-[#64748B] mt-0.5">Sub-millimeter implant mapping</div>
                </div>
              </div>

              {/* Top right quality badge */}
              <div className="absolute top-2 right-2 xl:right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#D4E5E9]/70 shadow-2xs text-[11px] font-medium text-[#475569]">
                <span className="text-[#287D91] font-bold text-xs">99.4%</span>
                <span>Clinical Success Rate</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
