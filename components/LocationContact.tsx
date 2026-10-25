import React from "react";

export default function LocationContact() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#D4E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4F7] text-[#164E63] text-xs font-semibold mb-3">
            <span>Location & Accessibility &bull; Sample Clinic Address</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#164E63] font-display tracking-tight leading-[1.12]">
            Visit Sai Dental Clinic & Implant Centre.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            Centrally located with convenient dedicated parking, step-free ground-floor access for senior citizens, and rapid metro station connectivity.
          </p>
        </div>

        {/* Location & Directions Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#D4E5E9] p-8 sm:p-10 space-y-7 shadow-soft flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 border border-[#D4E5E9]">
                  <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider">
                      Physical Clinic Address
                    </span>
                    <span className="text-[10px] font-semibold bg-[#E8F4F7] text-[#164E63] px-2 py-0.5 rounded-full">
                      Sample Address
                    </span>
                  </div>
                  <p className="text-base font-bold text-[#164E63] leading-snug">
                    Sai Dental Clinic & Implant Centre, Ground Floor, 12th Main Road
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Near Metro Station Exit 2, Indiranagar, Bengaluru, Karnataka &ndash; 560038 (Demo PIN)
                  </p>
                  <p className="text-xs text-[#287D91] pt-0.5">
                    Landmark: Opposite Central Park, Near Main Commercial Circle
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#D4E5E9]/70">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 border border-[#D4E5E9]">
                  <svg className="w-5 h-5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block">
                    OPD Registration & Helpline
                  </span>
                  <a
                    href="tel:+919800000000"
                    className="text-lg font-bold text-[#164E63] hover:text-[#287D91] transition-colors inline-block"
                  >
                    +91 98000 00000
                  </a>
                  <p className="text-xs text-[#475569]">
                    Active during morning (09:30 AM–01:30 PM) & evening (05:00 PM–08:30 PM) shifts.
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Channel */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#D4E5E9]/70">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 border border-[#D4E5E9]">
                  <svg className="w-5 h-5 fill-[#22C55E]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block">
                    WhatsApp Clinic Desk
                  </span>
                  <a
                    href="https://wa.me/919800000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#164E63] hover:text-[#287D91] transition-colors inline-block"
                  >
                    Message +91 98000 00000 &rarr;
                  </a>
                  <p className="text-xs text-[#475569]">
                    Send previous X-rays or request slot confirmations directly.
                  </p>
                </div>
              </div>

            </div>

            {/* Accessibility Chips */}
            <div className="pt-4 border-t border-[#D4E5E9]/70 flex flex-wrap gap-2 text-xs text-[#164E63]">
              <span className="px-3 py-1 rounded-full bg-[#E8F4F7] font-medium border border-[#D4E5E9]">
                ✓ Ground Floor Step-Free Access
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E8F4F7] font-medium border border-[#D4E5E9]">
                ✓ Dedicated Patient Car Parking
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E8F4F7] font-medium border border-[#D4E5E9]">
                ✓ 2-Min Walk From Metro Exit
              </span>
            </div>
          </div>

          {/* Directions & Navigation Guide Card */}
          <div className="lg:col-span-6 bg-[#164E63] text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-soft flex flex-col justify-between">
            <div className="space-y-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F4F7] block">
                How to Reach Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal font-display text-white">
                Convenient travel from anywhere in the city.
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#E8F4F7]/90">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <strong className="block text-white">By Metro:</strong>
                  <p className="text-[#E8F4F7]/80">
                    Take the Purple Line to Indiranagar Metro Station. Take Exit 2 and walk 150 meters towards 12th Main Road.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <strong className="block text-white">By Car / Cab:</strong>
                  <p className="text-[#E8F4F7]/80">
                    Valet parking and dedicated clinic car bays are available directly in front of the clinic entrance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <strong className="block text-white">Wheelchair & Elder Access:</strong>
                  <p className="text-[#E8F4F7]/80">
                    Ramp access from parking directly into the clinic reception with zero steps or stairs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
              <a
                href="#appointment-booking"
                className="px-6 py-2.5 rounded-full bg-white text-[#164E63] hover:bg-[#E8F4F7] text-xs font-bold transition-colors"
              >
                Schedule Appointment First &rarr;
              </a>
              <span className="text-xs text-[#E8F4F7]/70">
                Reception assistance: +91 98000 00000
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
