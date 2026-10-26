import React from "react";

export default function Timings() {
  return (
    <section id="timings" className="py-20 lg:py-28 bg-white border-b border-[#D4E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Context & Shift Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1  bg-[#E8F4F7] text-[#164E63] text-xs font-semibold mb-3">
                <span>Outpatient Schedule &bull; Sample Hours</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#164E63] font-display tracking-tight leading-[1.12]">
                Clinic OPD & consultation timings.
              </h2>
            </div>

            <p className="text-base text-[#475569] leading-relaxed font-normal">
              Sai Dental Clinic operates organized morning and evening outpatient consultation shifts Monday through Saturday, accommodating working schedules, with a Sunday morning session.
            </p>

            {/* Sterilization Window Card */}
            <div className="p-6 bg-[#F7F4EE]  border border-[#D4E5E9] text-xs text-[#1E293B] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#164E63] font-bold">
                <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Daily Operatory Autoclave & Sterilization Window</span>
              </div>
              <p className="text-[#475569] leading-relaxed">
                Between <strong>01:30 PM &ndash; 05:00 PM</strong>, all operatory suites undergo rigorous vacuum autoclave cycles, medical pouch heat-sealing, and hospital-grade surface disinfection prior to evening consultations.
              </p>
            </div>

            {/* Acute Pain Protocol */}
            <div className="p-6 bg-[#E8F4F7]  border border-[#D4E5E9] space-y-2 text-xs text-[#1E293B]">
              <span className="font-bold text-[#164E63] uppercase tracking-wider block">
                Acute Dental Pain & Emergency Protocol
              </span>
              <p className="text-[#475569] leading-relaxed">
                Experiencing sudden throbbing tooth pain, chipped teeth, or facial swelling? Contact our emergency helpline so the operatory suite can be prepared prior to your arrival.
              </p>
              <a
                href="tel:+919800000000"
                className="inline-flex items-center gap-1.5 font-bold text-[#164E63] hover:text-[#287D91] pt-1"
              >
                <span>Call Emergency Helpline: +91 98000 00000 &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Weekly Schedule Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F4EE]  border border-[#D4E5E9] p-8 sm:p-10 space-y-6 shadow-soft">
              <div className="border-b border-[#D4E5E9] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
                  Weekly Consultation Shifts
                </h3>
                <span className="text-[11px] font-bold text-[#164E63] bg-white px-3 py-1  border border-[#D4E5E9] w-max">
                  Demo Hours
                </span>
              </div>

              <div className="divide-y divide-[#D4E5E9]/70 text-sm">
                
                {/* Morning Shift */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-[#164E63] block text-base">
                      Morning Dental Consultation Shift
                    </span>
                    <span className="text-xs text-[#475569]">
                      Monday &ndash; Saturday &bull; Root Canals, Checkups & Digital Scans
                    </span>
                  </div>
                  <div className="text-[#164E63] sm:text-right font-semibold text-xs sm:text-sm bg-white px-3 py-1.5  border border-[#D4E5E9] w-max">
                    09:30 AM &ndash; 01:30 PM
                  </div>
                </div>

                {/* Sterilization Break Note */}
                <div className="py-3 flex items-center justify-between text-xs text-[#475569] bg-white/40 px-3  my-1">
                  <span>Operatory Sterilization Break</span>
                  <span className="font-mono text-[#287D91]">01:30 PM &ndash; 05:00 PM</span>
                </div>

                {/* Evening Shift */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-[#164E63] block text-base">
                      Evening Dental Consultation Shift
                    </span>
                    <span className="text-xs text-[#475569]">
                      Monday &ndash; Saturday &bull; Clear Aligners, Implants & Cosmetic Veneers
                    </span>
                  </div>
                  <div className="text-[#164E63] sm:text-right font-semibold text-xs sm:text-sm bg-white px-3 py-1.5  border border-[#D4E5E9] w-max">
                    05:00 PM &ndash; 08:30 PM
                  </div>
                </div>

                {/* Sunday Special Clinic */}
                <div className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-[#164E63] block text-base">
                      Sunday Special Morning Clinic
                    </span>
                    <span className="text-xs text-[#475569]">
                      Consultations & Emergency Follow-ups by Prior Appointment
                    </span>
                  </div>
                  <div className="text-[#287D91] sm:text-right font-semibold text-xs sm:text-sm bg-white px-3 py-1.5  border border-[#D4E5E9] w-max">
                    10:00 AM &ndash; 01:30 PM
                  </div>
                </div>

              </div>

              {/* Pre-Booking Advisory */}
              <div className="p-4  bg-white border border-[#D4E5E9] text-xs text-[#475569] flex items-center justify-between gap-4">
                <span>Walk-ins accommodated during OPD shifts based on operatory availability.</span>
                <a
                  href="#appointment-booking"
                  className="font-bold text-[#164E63] hover:text-[#287D91] shrink-0"
                >
                  Reserve Slot &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
