import React from "react";

export default function AppointmentNotice() {
  return (
    <section
      id="appointment-notice"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E3E8E3]/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F8F6F0] rounded-3xl border border-[#E3E8E3]/80 shadow-glow overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#123B38] to-[#0F4F4A] px-7 sm:px-10 py-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DCE8DF] mb-1.5">
                Phase 1 Preview &bull; Patient Information
              </span>
              <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-white font-display">
                How to Book an Appointment
              </h2>
            </div>
            <span className="text-xs font-semibold px-3.5 py-1 bg-white/15 text-[#DCE8DF] rounded-full border border-white/20">
              Online Booking Coming in Phase 2
            </span>
          </div>

          {/* Body Content */}
          <div className="p-7 sm:p-10 space-y-7">
            {/* Status Advisory */}
            <div className="p-5 bg-white rounded-2xl border border-[#E3E8E3]/70 flex items-start gap-4 text-sm text-[#123B38] shadow-soft">
              <svg
                className="w-5 h-5 text-[#0F4F4A] shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <strong className="block font-bold text-base text-[#123B38]">
                  Direct Reception Desk Booking Active
                </strong>
                <p className="mt-1 text-xs sm:text-sm text-[#334744]/90 leading-relaxed font-normal">
                  CarePoint Clinic schedules consultations directly through our front-desk reception counter and phone helpline. In accordance with clinical safety principles, a full self-service patient portal with database slot locking will launch in the upcoming development phase.
                </p>
              </div>
            </div>

            {/* Channels */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#123B38] mb-3 block">
                Appointment Scheduling Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telephone */}
                <a
                  href="tel:+919800000000"
                  className="flex items-center justify-between p-5 bg-white rounded-2xl border border-[#E3E8E3]/70 hover:border-[#0F4F4A]/40 hover:shadow-soft transition-all group focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F4F4A] text-white flex items-center justify-center font-bold shadow-soft">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-[#0F4F4A] font-bold block">Phone Helpline</span>
                      <div className="text-base font-bold text-[#123B38]">+91 98000 00000</div>
                      <span className="text-[11px] text-[#334744]/70">[Configurable Phone]</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 bg-[#DCE8DF] text-[#0F4F4A] rounded-full group-hover:bg-[#0F4F4A] group-hover:text-white transition-colors">
                    Call Desk
                  </span>
                </a>

                {/* Walk-in */}
                <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-[#E3E8E3]/70 shadow-soft">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#123B38] text-white flex items-center justify-center font-bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs text-[#334744]/80 font-bold block">Walk-in OPD Token</span>
                      <div className="text-sm font-bold text-[#123B38]">Front Desk Registration</div>
                      <span className="text-[11px] text-[#334744]/70">Tokens issued during OPD shifts</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#F8F6F0] rounded-full text-[#123B38]">
                    In-Person
                  </span>
                </div>
              </div>
            </div>

            {/* Practical Advice */}
            <div className="p-5 bg-white rounded-2xl border border-[#E3E8E3]/60 text-xs text-[#334744] space-y-2">
              <span className="font-bold text-[#123B38] block text-sm">
                Patient Consultation Guidelines:
              </span>
              <ul className="list-disc list-inside space-y-1.5 text-[#334744]/85 leading-relaxed">
                <li>Please bring your previous medical prescriptions, surgical history, and recent investigation reports.</li>
                <li>Fasting lab samples (blood sugar, lipid profile, liver function) are collected between 07:30 AM &ndash; 10:30 AM.</li>
                <li>Elderly patients, pregnant women, and pediatric cases receive priority assistance at the registration counter.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
