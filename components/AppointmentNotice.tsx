import React from "react";

export default function AppointmentNotice() {
  return (
    <section
      id="appointment-notice"
      className="py-16 lg:py-20 bg-gradient-to-b from-white to-teal-50/50 border-b border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-teal-200 shadow-lg overflow-hidden">
          {/* Header Banner */}
          <div className="bg-slate-900 px-6 sm:px-8 py-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-300 mb-1">
                Development Roadmap: Phase 1 Preview
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Appointment Booking Notice
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-teal-800 text-teal-100 rounded-full border border-teal-600">
              Supabase Integration in Phase 2
            </span>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Status Advisory */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3.5 text-sm text-amber-950">
              <svg
                className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <strong className="block font-semibold">
                  Online Self-Scheduling Currently in Development
                </strong>
                <p className="mt-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  To maintain genuine clinical integrity, we do not provide a simulated or fake booking form. An automated patient scheduling and slot confirmation portal powered by Supabase will launch in <strong>Phase 2</strong>.
                </p>
              </div>
            </div>

            {/* Practical Contact Options */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                How to Book or Inquire Today (Demo Channels)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Telephone */}
                <a
                  href="tel:+919800000000"
                  className="flex items-center justify-between p-4 bg-teal-50 border border-teal-200 rounded-2xl hover:bg-teal-100/70 transition-colors group focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-teal-800 font-medium">Telephone OPD Helpline</span>
                      <div className="text-base font-bold text-slate-900">+91 98000 00000</div>
                      <span className="text-[11px] text-slate-500">[Configurable Demo Phone]</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 bg-white border border-teal-300 rounded-lg text-teal-800 group-hover:border-teal-400">
                    Call Desk
                  </span>
                </a>

                {/* WhatsApp or Walk-in */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium">In-Person Outpatient Token</span>
                      <div className="text-sm font-bold text-slate-900">Direct Walk-In Registration</div>
                      <span className="text-[11px] text-slate-500">OPD Desk, Ground Floor</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700">
                    Token at Desk
                  </span>
                </div>
              </div>
            </div>

            {/* Patient Checklist */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="font-semibold text-slate-800 text-sm">
                Patient Checklist for OPD Visits:
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Please carry previous medical prescriptions and recent lab reports if available.</li>
                <li>Fast-track morning tokens for fasting blood sugar and lab investigations start from 07:30 AM.</li>
                <li>Senior citizens and pediatric emergencies are given priority assistance at the reception counter.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
