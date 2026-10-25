import React from "react";

interface MarqueeStripProps {
  className?: string;
}

const MARQUEE_ITEMS = [
  "Gentle Dental Care",
  "Personalized Treatment",
  "Your Smile Matters",
  "Painless Single-Sitting RCT",
  "Invisible Clear Aligners",
  "Swiss Titanium Implants",
  "European Class-B Sterilization",
  "Digital 3D Intraoral Scans",
  "Zero-Wait Scheduled Slots",
  "Book Your Visit Today",
];

export default function MarqueeStrip({ className = "" }: MarqueeStripProps) {
  return (
    <aside
      aria-label="Clinic Highlights Announcement Ticker"
      className={`relative w-full overflow-hidden bg-[#164E63] text-white py-3.5 border-y border-[#287D91]/40 marquee-container select-none ${className}`}
    >
      {/* Edge gradient fade masks for smooth entrance/exit */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#164E63] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#164E63] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Continuously moving track with exact duplicate for seamless infinite scrolling */}
      <div className="flex animate-marquee-smooth items-center text-xs sm:text-sm font-medium tracking-wide">
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`seq1-${idx}`} className="inline-flex items-center gap-3 mx-4 sm:mx-6">
              <span className="text-[#287D91] text-base leading-none">✦</span>
              <span className="text-[#E8F4F7] tracking-wide whitespace-nowrap font-normal">
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* Track 2 (Exact clone for seamless loop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`seq2-${idx}`} className="inline-flex items-center gap-3 mx-4 sm:mx-6">
              <span className="text-[#287D91] text-base leading-none">✦</span>
              <span className="text-[#E8F4F7] tracking-wide whitespace-nowrap font-normal">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
