import React from "react";

export default function LocationContact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Contact & Address • Demo Placeholders
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Location & Contact
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Please use the contact details below for clinic queries, doctor availability, or token collection guidance.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Physical Clinic Address
                  </span>
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded">
                    Demo Placeholder
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  Clinic.com Health Centre, Ground Floor, 14th Cross
                </p>
                <p className="text-xs text-slate-600">
                  Main Clinic Road, Indiranagar / Sector 18, City, State – 560038 (Demo PIN)
                </p>
                <p className="text-xs text-slate-500 pt-0.5">
                  Landmark: [Demo: Near Central Market Circle / Metro Station Exit]
                </p>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  OPD Desk & General Enquiries
                </span>
                <a
                  href="tel:+919800000000"
                  className="text-base font-bold text-teal-800 hover:text-teal-900 transition-colors inline-block focus-visible:ring-1 focus-visible:ring-teal-700 rounded"
                >
                  +91 98000 00000
                </a>
                <p className="text-xs text-slate-500">
                  Available Mon–Sat during clinic operating hours.
                </p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Email Correspondence
                </span>
                <a
                  href="mailto:desk@clinic.com"
                  className="text-sm font-semibold text-slate-800 hover:text-teal-800 transition-colors inline-block focus-visible:ring-1 focus-visible:ring-teal-700 rounded"
                >
                  desk@clinic.com
                </a>
                <p className="text-xs text-slate-500">
                  [Demo Contact Email Placeholder]
                </p>
              </div>
            </div>
          </div>

          {/* Map & Facility Overview (Right Column) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Facility Access & Parking
            </h3>

            {/* Visual Location Frame */}
            <div className="rounded-xl bg-slate-100 border border-slate-200 h-48 sm:h-56 flex flex-col items-center justify-center p-6 text-center text-slate-600 relative overflow-hidden">
              <svg className="w-10 h-10 text-teal-600 mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Map Preview • Demo Placeholder
              </span>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                Interactive Google Maps embed will be integrated with the confirmed clinic geo-coordinates in production.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" aria-hidden="true" />
                <span>Ground-floor step-free patient entrance with wheelchair ramp access.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" aria-hidden="true" />
                <span>Designated drop-off area directly at front reception gate.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
