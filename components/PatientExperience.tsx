import React from "react";
import Image from "next/image";

const PROTOCOLS = [
  {
    step: "01",
    title: "6-Step European Class-B Sterilization",
    summary:
      "All surgical handpieces and instruments undergo ultrasonic bath cleaning, chemical disinfection, vacuum sealing in color-changing pouches, and 134°C autoclave sterilization. Sealed pouches are opened strictly before your eyes.",
    badge: "Hospital-Grade Hygiene",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Chairside 4K Intraoral Camera",
    summary:
      "No mystery. Our intraoral micro-camera displays your teeth magnified on the clinical monitor. You see exactly what the doctor sees before any treatment plan is finalized.",
    badge: "Complete Transparency",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Empathetic Pain-Free Numbing Gel",
    summary:
      "Dental anxiety is real, and we take it seriously. We apply a pleasant-flavored surface numbing gel prior to any local anesthetic. Patients often remark they never felt a pinch.",
    badge: "Anxiety-Free Care",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Unhurried Scheduled Consultation",
    summary:
      "We schedule ample time for every patient to prevent crowded waiting areas. You receive undivided clinical focus, detailed written cost estimates, and zero rushed decisions.",
    badge: "Zero Waiting Times",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function PatientExperience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#D4E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4F7] text-[#164E63] text-xs font-semibold mb-3">
            <span>Clinical Hygiene &bull; Patient Comfort Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#164E63] font-display tracking-tight leading-[1.12]">
            Dentistry without the fear, sterile without compromise.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E293B]/85 leading-relaxed font-normal">
            We designed Sai Dental Clinic to feel nothing like a cold, clinical hospital. From soothing lounge acoustics and air purification to European Class-B autoclave sterilization, your safety and peace of mind guide every detail.
          </p>
        </div>

        {/* Featured Clinic Lounge & Operatory Image Frame with Frosted Glass Caption */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-[#D4E5E9] shadow-soft relative bg-[#164E63]">
          <div className="relative h-80 sm:h-[420px] lg:h-[480px] w-full">
            <Image
              src="/images/dental-suite.jpg"
              alt="Sai Dental Clinic peaceful consultation suite with clean ergonomic operatory"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            {/* Cinematic dark teal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/90 via-[#164E63]/25 to-transparent" />

            {/* Bottom Glassmorphic Caption Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider font-bold text-[#E8F4F7] block mb-1">
                  Private Operatory Suites
                </span>
                <h3 className="text-xl sm:text-2xl font-normal font-display text-white">
                  Designed for relaxation, privacy, and impeccable clinical hygiene.
                </h3>
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-surface-dark text-xs font-semibold text-white border border-white/20 shadow-soft">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                <span>Class-B Autoclave Certified Facility</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Protocol Pillars - Asymmetrical Modern Architecture */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROTOCOLS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-[#D4E5E9] shadow-card hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F4F7] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#287D91]">
                    {item.step}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#287D91] block mb-2">
                  {item.badge}
                </span>

                <h4 className="text-lg font-semibold text-[#164E63] font-display leading-snug">
                  {item.title}
                </h4>

                <p className="mt-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#D4E5E9]/60 flex items-center text-[11px] font-semibold text-[#164E63]">
                <span>Standard Clinical Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
