import React from "react";
import Image from "next/image";

export default function PatientExperience() {
  const PILLARS = [
    {
      title: "6-Step European Class-B Sterilization",
      desc: "Every single handpiece and instrument undergoes ultrasonic cleaning, vacuum sealing in color-changing pouches, and 134°C autoclave sterilization. Sealed pouches are opened strictly in front of you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Chairside Intra-Oral HD Camera",
      desc: "No guesswork. Our high-definition dental camera displays your teeth on the monitor screen in real time. You see exactly what the doctor sees before any treatment plan is agreed upon.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Empathetic, Zero-Pain Numbing",
      desc: "We apply a pleasant-flavored surface numbing gel prior to any gentle local anesthesia. Our gentle approach transforms visits for patients who have experienced past dental anxiety.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Unhurried Consultations & Scheduled Slots",
      desc: "We schedule adequate time for every patient to prevent crowded waiting rooms. You receive undivided clinical focus, clear written treatment estimates, and zero rushed procedures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block mb-2">
            The Patient Comfort Standard &bull; Clinic Protocol
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.12]">
            Dentistry without the fear, sterile without compromise.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#334744]/90 leading-relaxed font-normal">
            We designed Sai Dental Clinic to feel nothing like a clinical hospital. From soothing lounge acoustics and air purification to hospital-standard European sterilization, your safety and peace of mind guide every detail.
          </p>
        </div>

        {/* Featured Clinic Lounge & Operatory Image Frame */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-[#E3E8E3] shadow-glow relative bg-[#123B38]">
          <div className="relative h-80 sm:h-[460px] w-full">
            <Image
              src="/images/dental-suite.jpg"
              alt="Sai Dental Clinic tranquil waiting lounge and glass-enclosed hygienic dental treatment operatory"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center brightness-95"
            />
            {/* Dark gradient for caption readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#123B38]/90 via-[#123B38]/30 to-transparent" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DCE8DF] block mb-1">
                  Private Operatory Suites
                </span>
                <h3 className="text-xl sm:text-2xl font-normal font-display text-white">
                  Designed for relaxation, privacy, and impeccable clinical hygiene.
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>Class-B Autoclave Certified Facility</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-[#E3E8E3] shadow-card hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center mb-5 shadow-xs">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#123B38] mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#334744]/85 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E3E8E3]/60 flex items-center text-[11px] font-bold text-[#0F4F4A]">
                <span>Standard at Every Visit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
