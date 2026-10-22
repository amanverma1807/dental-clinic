import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] py-14 lg:py-20 border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DCE8DF] text-[#0F4F4A] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0F4F4A]" aria-hidden="true" />
              Compassionate Care, Every Day
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#123B38] leading-[1.12]">
              Your Health, Our Priority.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#334744] max-w-xl leading-relaxed">
              Expert medical care for you and your family, with trusted doctors and personalized attention under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#appointment-notice"
                className="inline-flex items-center justify-center min-h-[50px] px-7 py-3 rounded-xl bg-[#0F4F4A] hover:bg-[#123B38] text-white font-semibold text-base shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A] focus-visible:ring-offset-2"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                className="inline-flex items-center justify-center min-h-[50px] px-6 py-3 rounded-xl bg-white border border-[#E3E8E3] hover:border-[#0F4F4A] text-[#123B38] font-semibold text-base shadow-xs hover:bg-[#DCE8DF]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
              >
                Explore Our Doctors
              </a>
            </div>

            {/* Subtle Trust Line */}
            <div className="pt-3 border-t border-[#E3E8E3]/80">
              <p className="text-xs sm:text-sm text-[#334744]/90 font-medium">
                Patient-focused care &middot; Multiple medical specialties.
              </p>
            </div>
          </div>

          {/* Right Column: Doctor Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Subtle Backing Plate */}
              <div
                className="absolute -inset-2.5 rounded-3xl bg-[#DCE8DF]/60 -rotate-1 hidden sm:block"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E3E8E3] shadow-lg bg-white">
                <Image
                  src="/images/doctor-hero.jpg"
                  alt="Professional Indian doctor in a bright, modern clinic consultation room"
                  width={640}
                  height={480}
                  priority
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[4/3] block"
                />

                {/* Subdued Info Bar beneath photo */}
                <div className="p-4 bg-white border-t border-[#E3E8E3] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#0F4F4A] uppercase tracking-wider block">
                      Consultant On Duty
                    </span>
                    <span className="text-xs text-[#334744] font-medium">
                      General & Preventive Medicine
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#F8F6F0] text-[#123B38] border border-[#E3E8E3] rounded-md">
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
