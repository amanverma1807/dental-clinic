import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Demo Notice Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" aria-hidden="true" />
              Demo Website Preview • Phase 1 Production Prototype
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              Accessible, Trustworthy Healthcare for You & Your Family.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Providing patient-first outpatient consultations, routine preventive checkups, and diagnostic sample testing across core clinical departments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#appointment-notice"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base shadow-sm hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
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
                Book Appointment (Notice)
              </a>

              <a
                href="#specialties"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-base shadow-2xs hover:bg-slate-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                View Specialties & Services
              </a>
            </div>

            {/* Quick Consultation Notes */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Qualified Medical Practitioners</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Morning & Evening OPD Sessions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Hygienic Outpatient Facility</span>
              </div>
            </div>
          </div>

          {/* Quick Schedule & Facility Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-7 space-y-6">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Clinic Snapshot
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                    Consultation & Desk Hours
                  </h2>
                </div>
                <span className="text-xs px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-md font-semibold">
                  Demo Data
                </span>
              </div>

              {/* Schedule Details */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-600 font-medium">Monday – Saturday</span>
                  <span className="font-semibold text-slate-900 text-right">
                    08:00 AM – 01:00 PM<br />04:30 PM – 08:00 PM
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-2 border-t border-slate-100">
                  <span className="text-slate-600 font-medium">Sunday (General OPD)</span>
                  <span className="font-semibold text-slate-900">09:00 AM – 01:00 PM</span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-2 border-t border-slate-100">
                  <span className="text-slate-600 font-medium">Lab Sample Collection</span>
                  <span className="font-semibold text-slate-900">07:30 AM – 02:00 PM</span>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Clinic Reception Desk
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-slate-900">+91 98000 00000</div>
                    <div className="text-xs text-slate-500">[Demo Phone Placeholder]</div>
                  </div>
                  <a
                    href="tel:+919800000000"
                    className="inline-flex items-center justify-center min-h-[40px] px-3.5 py-1.5 text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                  >
                    Direct Dial
                  </a>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-slate-500 leading-normal">
                <strong>Emergency Notice:</strong> This outpatient clinic does not manage critical trauma or ICU emergencies. In acute situations, immediately visit the nearest hospital emergency department or dial <strong>112 / 108</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
