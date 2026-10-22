import React from "react";

export default function LocationContact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DCE8DF] text-[#0F4F4A] text-xs font-bold uppercase tracking-wider mb-3">
            Contact & Address &bull; Sample Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B38] tracking-tight">
            Clinic Location & Contact Details
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334744] leading-relaxed">
            Reach out to our front desk for appointment guidance, consultant OPD schedules, or diagnostic collection instructions.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Card */}
          <div className="lg:col-span-6 bg-[#F8F6F0] rounded-2xl border border-[#E3E8E3] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#123B38] uppercase tracking-wider">
                    Physical Clinic Address
                  </span>
                  <span className="text-[10px] font-semibold bg-[#DCE8DF] text-[#0F4F4A] px-1.5 py-0.5 rounded">
                    Sample Address
                  </span>
                </div>
                <p className="text-sm font-bold text-[#123B38] leading-snug">
                  CarePoint Clinic, Ground Floor, 14th Cross
                </p>
                <p className="text-xs text-[#334744]">
                  Main Clinic Road, Indiranagar / Sector 18, City, State &ndash; 560038 (Demo PIN)
                </p>
                <p className="text-xs text-[#334744]/80 pt-0.5">
                  Landmark: [Sample Landmark: Near Metro Station Exit / Main Market Circle]
                </p>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="flex items-start gap-4 pt-4 border-t border-[#E3E8E3]">
              <div className="w-11 h-11 rounded-xl bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#123B38] uppercase tracking-wider block">
                  OPD Registration & Helpline
                </span>
                <a
                  href="tel:+919800000000"
                  className="text-base font-bold text-[#0F4F4A] hover:text-[#123B38] transition-colors inline-block focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded"
                >
                  +91 98000 00000
                </a>
                <p className="text-xs text-[#334744]/80">
                  Open Mon&ndash;Sat during morning and evening OPD sessions.
                </p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="flex items-start gap-4 pt-4 border-t border-[#E3E8E3]">
              <div className="w-11 h-11 rounded-xl bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#123B38] uppercase tracking-wider block">
                  Email Desk
                </span>
                <a
                  href="mailto:contact@carepointclinic.com"
                  className="text-sm font-semibold text-[#123B38] hover:text-[#0F4F4A] transition-colors inline-block focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded"
                >
                  contact@carepointclinic.com
                </a>
                <p className="text-xs text-[#334744]/80">
                  [Sample Contact Email Placeholder]
                </p>
              </div>
            </div>
          </div>

          {/* Facility Access Card */}
          <div className="lg:col-span-6 bg-[#F8F6F0] rounded-2xl border border-[#E3E8E3] p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="text-lg font-bold text-[#123B38] border-b border-[#E3E8E3] pb-3">
              Facility Accessibility & Arrival
            </h3>

            {/* Map Placeholder Frame */}
            <div className="rounded-xl bg-white border border-[#E3E8E3] h-48 sm:h-56 flex flex-col items-center justify-center p-6 text-center text-[#334744] relative overflow-hidden">
              <svg className="w-10 h-10 text-[#0F4F4A] mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-xs font-bold text-[#123B38] uppercase tracking-wider">
                Map Location &bull; Sample Preview
              </span>
              <p className="text-xs text-[#334744] mt-1 max-w-sm">
                In production, this area will feature an embedded Google Maps view centered on the clinic&apos;s physical address.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#334744]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4F4A] shrink-0" aria-hidden="true" />
                <span>Ground-floor entrance with step-free wheelchair ramp access.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F4F4A] shrink-0" aria-hidden="true" />
                <span>Direct vehicle drop-off zone at the clinic front gate.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
