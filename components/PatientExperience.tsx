import React from "react";

const REASONS = [
  {
    title: "Class-B Autoclave Sterilization",
    desc: "Hospital-grade vacuum sterilization. Sealed sterile instrument pouches are opened strictly in front of you.",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Gentle Pain-Free Numbing",
    desc: "Topical surface numbing gel applied prior to treatment transforms visits for anxious patients and children.",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Chairside 4K Intraoral Camera",
    desc: "See your teeth in high definition on the chairside monitor before any treatment plan is finalized.",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Scheduled Zero-Wait Slots",
    desc: "Pre-booked appointment times ensure your operatory suite is prepped with zero crowded waiting.",
    icon: (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function PatientExperience() {
  return (
    <section id="why-us" className="py-12 sm:py-16 bg-white border-b border-[#D4E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Concise Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#287D91] block mb-1.5">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#164E63] font-display tracking-tight">
            Clinical standards designed for your peace of mind.
          </h2>
        </div>

        {/* 4 Crisp Reassurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#F7F4EE] border border-[#D4E5E9] flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-white text-[#287D91] flex items-center justify-center mb-4 border border-[#D4E5E9]/60 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#164E63] font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
