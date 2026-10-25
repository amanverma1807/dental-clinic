import React from "react";

interface MarqueeStripProps {
  className?: string;
}

const MARQUEE_ITEMS = [
  "Gentle Dental Care",
  "Your Smile Matters",
  "Painless Root Canal Treatment",
  "Invisible Clear Aligners",
  "Personalized Treatment Plans",
  "European Class-B Sterilization",
  "Digital Smile Design",
  "Book Your Visit Today",
  "Swiss & German Dental Implants",
  "Gentle Care for Kids & Adults",
];

export default function MarqueeStrip({ className = "" }: MarqueeStripProps) {
  return (
    <aside
      aria-label="Clinic Highlights Announcement Ticker"
      className={`relative w-full overflow-hidden bg-[#0F4F4A] text-[#F8F6F0] py-3.5 border-y border-[#123B38] marquee-container select-none ${className}`}
    >
      {/* Subtle edge fade overlays for premium cinematic presentation */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0F4F4A] to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0F4F4A] to-transparent z-10"
        aria-hidden="true"
      />

      <div className="flex animate-marquee items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
        {/* Sequence 1 */}
        <div className="flex items-center gap-8 shrink-0">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`seq1-${idx}`} className="inline-flex items-center gap-3">
              <span className="text-[#DCE8DF] font-serif text-sm">✦</span>
              <span className="text-[#F8F6F0] tracking-wide whitespace-nowrap font-normal">
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* Sequence 2 for seamless infinite loop */}
        <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`seq2-${idx}`} className="inline-flex items-center gap-3">
              <span className="text-[#DCE8DF] font-serif text-sm">✦</span>
              <span className="text-[#F8F6F0] tracking-wide whitespace-nowrap font-normal">
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* Sequence 3 to ensure wide desktop screens never see empty gap */}
        <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`seq3-${idx}`} className="inline-flex items-center gap-3">
              <span className="text-[#DCE8DF] font-serif text-sm">✦</span>
              <span className="text-[#F8F6F0] tracking-wide whitespace-nowrap font-normal">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
