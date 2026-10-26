import React from "react";
import { Treatment } from "@/lib/types";
import { DEFAULT_TREATMENTS } from "@/lib/data";

function renderTreatmentIcon(iconName?: string | null, title?: string) {
  const name = iconName?.toLowerCase() || "";
  const t = title?.toLowerCase() || "";

  if (name === "sparkles" || t.includes("aligner") || t.includes("brace")) {
    return (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === "shield" || t.includes("implant")) {
    return (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0 0h6m-6 0v-1.5m6 1.5v-1.5" />
      </svg>
    );
  }
  if (name === "sun" || t.includes("whitening")) {
    return (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (name === "star" || t.includes("veneer") || t.includes("smile")) {
    return (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  }
  if (name === "heart" || t.includes("preventive") || t.includes("clean") || t.includes("checkup")) {
    return (
      <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  // Default tooth/dental icon
  return (
    <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

export default function Treatments({ treatments }: { treatments?: Treatment[] }) {
  const displayItems = treatments && treatments.length > 0 ? treatments : DEFAULT_TREATMENTS;

  return (
    <section id="treatments" className="py-12 sm:py-16 bg-white border-b border-[#D4E5E9] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Concise Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#287D91] block mb-1.5">
            Key Treatments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#164E63] font-display tracking-tight">
            Comprehensive dental care, gently delivered.
          </h2>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-6 bg-[#F7F4EE]/70 border border-[#D4E5E9] hover:border-[#287D91]/60 hover:bg-[#F7F4EE] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-white text-[#287D91] flex items-center justify-center mb-4 border border-[#D4E5E9]/60 shadow-xs">
                  {renderTreatmentIcon(item.icon_name, item.title)}
                </div>
                <h3 className="text-lg font-semibold text-[#164E63] font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.benefit || item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D4E5E9]/50">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-[#164E63] hover:text-[#287D91] transition-colors"
                >
                  <span>Book Consultation</span>
                  <span className="ml-1 text-[#287D91]">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
