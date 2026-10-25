import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Refined ambient architectural lighting glows */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#DCE8DF]/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-[-5%] w-[420px] h-[420px] bg-[#0F4F4A]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Asymmetric Editorial Typography & Action Anchor */}
          <div className="lg:col-span-7 space-y-7 z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#DCE8DF] text-[#0F4F4A] text-xs font-semibold tracking-wider uppercase border border-[#0F4F4A]/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0F4F4A] animate-pulse" aria-hidden="true" />
              <span>Painless Dentistry &bull; Indian Dental Council Standards</span>
            </div>

            {/* Distinctive Hero Headline with intentional line breaks */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-normal tracking-tight text-[#123B38] font-display leading-[1.08]">
              Gentle Dental Artistry.
              <span className="block text-[#0F4F4A] italic font-serif mt-1">
                Confidence In Every Smile.
              </span>
            </h1>

            {/* Refined, empathetic supporting copy */}
            <p className="text-base sm:text-lg text-[#334744]/90 max-w-xl leading-relaxed font-normal">
              From single-sitting painless root canals and invisible aligners to precision German dental implants. Experience stress-free clinical care in a tranquil, hospital-grade sanitized environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#appointment-booking"
                className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 rounded-full bg-[#0F4F4A] hover:bg-[#123B38] text-white font-semibold text-sm shadow-soft hover:shadow-glow transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A] focus-visible:ring-offset-2"
              >
                <span>Book Dental Consultation</span>
                <svg
                  className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center min-h-[52px] px-7 py-3.5 rounded-full bg-white text-[#123B38] font-semibold text-sm shadow-soft border border-[#E3E8E3] hover:border-[#0F4F4A]/40 hover:bg-[#F8F6F0] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
              >
                <span>Explore Treatments</span>
              </a>
            </div>

            {/* Trust Badges - 3 Key Dental Assurances */}
            <div className="pt-6 border-t border-[#E3E8E3]/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-xs">
                  <strong className="block text-[#123B38] font-semibold">100% Pain-Free</strong>
                  <span className="text-[#334744]/75">Gentle Numbing Gel</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <strong className="block text-[#123B38] font-semibold">Class-B Autoclave</strong>
                  <span className="text-[#334744]/75">Sealed Pouches Opened Before You</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <strong className="block text-[#123B38] font-semibold">Clear Explanations</strong>
                  <span className="text-[#334744]/75">No Hidden Treatment Costs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Dental Operatory Visual Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Soft decorative ambient shadow frame */}
              <div
                className="absolute -inset-3.5 rounded-3xl bg-gradient-to-tr from-[#DCE8DF]/60 to-[#FFFFFF]/70 -rotate-1.5 hidden sm:block shadow-soft"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E3E8E3] shadow-glow bg-white">
                <Image
                  src="/images/dental-hero.jpg"
                  alt="Doctor Priya Sharma, Senior Dental Surgeon at Sai Dental Clinic in modern operatory with ergonomic dental chair and digital intraoral scan screen"
                  width={640}
                  height={480}
                  priority
                  className="w-full h-auto object-cover aspect-[4/3] block"
                />

                {/* Floating Glassmorphic Clinical Pill Overlay */}
                <div className="p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#E3E8E3] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0F4F4A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0F4F4A] uppercase tracking-wider block">
                        Now Consulting
                      </span>
                      <span className="text-xs sm:text-sm text-[#123B38] font-semibold">
                        Digital Smile Preview & Aligners
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold px-3 py-1 bg-[#DCE8DF] text-[#0F4F4A] rounded-full whitespace-nowrap">
                    OPD Active
                  </span>
                </div>
              </div>

              {/* Floating Testimonial/Badge Tag */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-[#123B38] text-white px-4 py-3 rounded-2xl shadow-lg border border-[#0F4F4A] hidden sm:flex items-center gap-3 max-w-[240px]">
                <div className="w-8 h-8 rounded-xl bg-[#0F4F4A] text-[#DCE8DF] flex items-center justify-center shrink-0">
                  ✦
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-[#DCE8DF] font-medium block">Dental Care Standard</span>
                  <span className="text-xs font-semibold leading-tight block">Zero-Waiting Scheduled Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
