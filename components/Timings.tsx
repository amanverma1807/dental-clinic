import React from "react";

export default function Timings() {
  return (
    <section id="timings" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Shift Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block mb-2">
                Consultation Schedule &bull; Sample Hours
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.12]">
                Clinic OPD & Consultation Timings
              </h2>
            </div>

            <p className="text-base text-[#334744]/90 leading-relaxed font-normal">
              Sai Dental Clinic operates organized morning and evening outpatient consultation shifts Monday through Saturday, accommodating busy workdays, with an accessible Sunday morning session.
            </p>

            {/* Sterilization Break Note */}
            <div className="p-5 bg-white rounded-3xl border border-[#E3E8E3] text-xs text-[#334744] space-y-2 shadow-card">
              <div className="flex items-center gap-2 text-[#0F4F4A] font-bold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Daily Operatory Sterilization Window</span>
              </div>
              <p className="leading-relaxed">
                Between <strong>01:30 PM &ndash; 05:00 PM</strong>, operatory suites undergo continuous Class-B autoclave instrument cycles and hospital-grade surface disinfection prior to evening consultations.
              </p>
            </div>

            {/* Emergency Dental Advisory */}
            <div className="p-5 bg-white rounded-3xl border border-[#E3E8E3] space-y-2 text-xs text-[#334744] shadow-card">
              <span className="font-bold text-[#123B38] uppercase tracking-wider block">
                Acute Dental Pain / Trauma Protocol
              </span>
              <p className="leading-relaxed">
                Patients suffering from severe throbbing tooth pain, chipped teeth from falls, or facial swelling are requested to call reception beforehand so our dental team can prepare the operatory immediately.
              </p>
              <a
                href="tel:+919800000000"
                className="inline-flex items-center gap-1.5 font-bold text-[#0F4F4A] hover:underline pt-1"
              >
                Call Emergency Line: +91 98000 00000 &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Weekly Schedule Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E3E8E3] p-8 sm:p-10 space-y-6 shadow-glow">
              <div className="border-b border-[#E3E8E3]/70 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-normal text-[#123B38] font-display">
                  Weekly Dental Outpatient Consultation Hours
                </h3>
                <span className="text-[11px] font-bold text-[#0F4F4A] bg-[#DCE8DF] px-3 py-1 rounded-full w-max">
                  Sample Timings
                </span>
              </div>

              <div className="divide-y divide-[#E3E8E3]/70 text-sm">
                {/* Morning OPD */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">
                      Morning Dental Consultation Shift
                    </span>
                    <span className="text-xs text-[#334744]/75">
                      Monday &ndash; Saturday (General OPD, Root Canals & Diagnostics)
                    </span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-semibold text-xs sm:text-sm">
                    09:30 AM &ndash; 01:30 PM
                  </div>
                </div>

                {/* Evening OPD */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">
                      Evening Dental Consultation Shift
                    </span>
                    <span className="text-xs text-[#334744]/75">
                      Monday &ndash; Saturday (Aligners, Cosmetic Dentistry & Implants)
                    </span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-semibold text-xs sm:text-sm">
                    05:00 PM &ndash; 08:30 PM
                  </div>
                </div>

                {/* Sunday Slot */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">
                      Sunday Special Morning Clinic
                    </span>
                    <span className="text-xs text-[#334744]/75">
                      Prior Appointments, Aligners checks & Urgent Pain Relief
                    </span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-semibold text-xs sm:text-sm">
                    10:00 AM &ndash; 01:30 PM
                  </div>
                </div>

                {/* Chairside Digital Scans */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">
                      3D Digital Intraoral Scans & OPG X-Rays
                    </span>
                    <span className="text-xs text-[#334744]/75">
                      Available on-site chairside throughout all operating hours
                    </span>
                  </div>
                  <div className="text-[#0F4F4A] sm:text-right font-bold text-xs sm:text-sm">
                    During All OPD Shifts
                  </div>
                </div>
              </div>

              {/* Bottom Quick Help */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-[#E3E8E3]/70">
                <span className="text-[#334744]/80">Confirm specialist availability with reception before visiting:</span>
                <a
                  href="#appointment-booking"
                  className="inline-flex items-center text-[#0F4F4A] hover:text-[#123B38] font-bold"
                >
                  Reserve Your Consultation Time &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
