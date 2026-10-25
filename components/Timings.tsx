import React from "react";

export default function Timings() {
  return (
    <section id="timings" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#E3E8E3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block">
              Operating Schedule &bull; Sample Hours
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.15]">
              Clinic & OPD Timings
            </h2>
            <p className="text-base text-[#334744]/90 leading-relaxed font-normal">
              CarePoint Clinic operates structured morning and evening outpatient consultation shifts Monday through Saturday, with an accessible morning session on Sunday.
            </p>

            <div className="p-5 bg-white rounded-2xl border border-[#E3E8E3]/70 text-xs text-[#334744] space-y-1 shadow-soft">
              <strong className="block font-bold text-sm text-[#123B38]">Sample Hours Notice</strong>
              <p className="leading-relaxed">
                The hours listed below represent the standard operational schedule. Patients are encouraged to call reception to confirm doctor availability before visiting.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#E3E8E3]/70 space-y-2 text-xs text-[#334744] shadow-soft">
              <span className="font-bold text-[#123B38] uppercase tracking-wider block">
                Emergency Medical Guidance
              </span>
              <p className="leading-relaxed">
                CarePoint Clinic is an outpatient care facility and does not provide 24-hour casualty or ICU emergency services. In severe or life-threatening situations, please call <strong>112</strong> or <strong>108</strong>, or proceed immediately to the nearest hospital emergency room.
              </p>
            </div>
          </div>

          {/* Right Column: Schedule Table */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E3E8E3]/80 p-8 sm:p-10 space-y-6 shadow-glow">
              <h3 className="text-xl font-normal text-[#123B38] font-display border-b border-[#E3E8E3]/60 pb-4 flex items-center justify-between">
                <span>Weekly Outpatient Consultation Schedule</span>
                <span className="text-xs font-semibold text-[#0F4F4A] bg-[#DCE8DF] px-2.5 py-0.5 rounded-full">Sample Timings</span>
              </h3>

              <div className="divide-y divide-[#E3E8E3]/60 text-sm">
                {/* General Medicine OPD */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">General Medicine & Family Health</span>
                    <span className="text-xs text-[#334744]/75">Monday &ndash; Saturday</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    08:00 AM &ndash; 01:00 PM<br />
                    04:30 PM &ndash; 08:00 PM
                  </div>
                </div>

                {/* Specialist OPD */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">Specialist Clinics (Pediatrics, Orthopedics, Gynae)</span>
                    <span className="text-xs text-[#334744]/75">Scheduled Clinic Days</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    05:00 PM &ndash; 08:00 PM
                  </div>
                </div>

                {/* Sunday OPD */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">Sunday Morning OPD</span>
                    <span className="text-xs text-[#334744]/75">Routine follow-ups & urgent outpatient visits</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    09:00 AM &ndash; 01:00 PM
                  </div>
                </div>

                {/* Lab Diagnostics */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block text-base">Diagnostic Blood & Urine Sample Collection</span>
                    <span className="text-xs text-[#334744]/75">Monday &ndash; Saturday (Fasting tests early morning)</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    07:30 AM &ndash; 02:00 PM
                  </div>
                </div>
              </div>

              {/* Bottom Quick Help */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-[#E3E8E3]/60">
                <span className="text-[#334744]/80">Confirm specialist timings with reception before visiting:</span>
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center text-[#0F4F4A] hover:text-[#123B38] font-bold"
                >
                  Call Reception: +91 98000 00000 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
