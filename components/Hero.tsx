import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] py-16 lg:py-24">
      {/* Subtle ambient light gradient background inspired by reference */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#DCE8DF]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-80 h-80 bg-[#0F4F4A]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE8DF]/80 text-[#0F4F4A] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F4F4A]" aria-hidden="true" />
              Compassionate Care, Every Day
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-normal tracking-tight text-[#123B38] font-display leading-[1.08]">
              A healthier life begins with the right care.
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-[#334744]/90 max-w-xl leading-relaxed font-normal">
              Thoughtful medical care for you and your family, bringing trusted doctors and multiple specialties together.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#appointment-notice"
                className="inline-flex items-center justify-center min-h-[50px] px-7 py-3 rounded-full bg-[#0F4F4A] hover:bg-[#123B38] text-white font-semibold text-sm shadow-soft hover:shadow-glow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A] focus-visible:ring-offset-2"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book an Appointment
              </a>

              <a
                href="#doctors"
                className="inline-flex items-center justify-center min-h-[50px] px-6 py-3 rounded-full bg-white/80 hover:bg-white text-[#123B38] font-semibold text-sm shadow-soft border border-[#E3E8E3]/60 hover:border-[#0F4F4A]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
              >
                Meet Our Doctors
              </a>
            </div>

            {/* Subtle Trust Line */}
            <div className="pt-4 border-t border-[#E3E8E3]/70">
              <p className="text-xs sm:text-sm text-[#334744]/80 font-medium">
                Patient-focused care &middot; Multiple medical specialties.
              </p>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with 3D Bio-Cellular Elements */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Soft Translucent Backing Frame */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#DCE8DF]/50 to-[#FFFFFF]/60 -rotate-1 hidden sm:block shadow-soft"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E3E8E3]/80 shadow-glow bg-white">
                <Image
                  src="/images/doctor-hero-bio.jpg"
                  alt="Senior Indian physician with stethoscope surrounded by 3D cellular science imagery in modern clinic"
                  width={640}
                  height={480}
                  priority
                  className="w-full h-auto object-cover aspect-[4/3] block"
                />

                {/* Glassmorphic floating caption pill */}
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#E3E8E3]/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#0F4F4A] uppercase tracking-wider block">
                      Consultant On Duty
                    </span>
                    <span className="text-xs text-[#334744] font-medium">
                      Multi-Specialty Clinical Medicine
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-[#DCE8DF] text-[#0F4F4A] rounded-full">
                    OPD Active
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
