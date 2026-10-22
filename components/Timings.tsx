import React from "react";

export default function Timings() {
  return (
    <section id="timings" className="py-16 lg:py-24 bg-[#F8F6F0] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DCE8DF] text-[#0F4F4A] text-xs font-bold uppercase tracking-wider">
              Operating Schedule &bull; Sample Hours
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B38] tracking-tight">
              Clinic & OPD Timings
            </h2>
            <p className="text-base text-[#334744] leading-relaxed">
              CarePoint Clinic operates scheduled morning and evening outpatient consultation shifts Monday through Saturday, with a morning session on Sunday.
            </p>

            <div className="p-4 bg-white border border-[#E3E8E3] rounded-xl text-xs text-[#334744] space-y-1">
              <strong className="block font-bold text-[#123B38]">Sample Hours Notice</strong>
              <p>
                The hours listed below represent the standard operational framework. Patients are encouraged to call reception to confirm specialist doctor availability for specific days.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E3E8E3] rounded-xl space-y-2">
              <span className="text-xs font-bold text-[#123B38] uppercase tracking-wider block">
                Emergency Medical Guidance
              </span>
              <p className="text-xs text-[#334744] leading-relaxed">
                CarePoint Clinic is an outpatient care facility and does not provide 24-hour casualty or ICU emergency services. In severe or life-threatening situations, please call <strong>112</strong> or <strong>108</strong>, or proceed immediately to the nearest hospital casualty department.
              </p>
            </div>
          </div>

          {/* Right Column: Schedule Table */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E3E8E3] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-[#123B38] border-b border-[#E3E8E3] pb-3 flex items-center justify-between">
                <span>Weekly Outpatient Consultation Schedule</span>
                <span className="text-xs font-semibold text-[#0F4F4A] bg-[#DCE8DF] px-2 py-0.5 rounded">Sample Timings</span>
              </h3>

              <div className="divide-y divide-[#E3E8E3] text-sm">
                {/* General Medicine OPD */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block">General Medicine & Family Health</span>
                    <span className="text-xs text-[#334744]/80">Monday &ndash; Saturday</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    08:00 AM &ndash; 01:00 PM<br />
                    04:30 PM &ndash; 08:00 PM
                  </div>
                </div>

                {/* Specialist OPD */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block">Specialist Clinics (Pediatrics, Orthopedics, Gynae)</span>
                    <span className="text-xs text-[#334744]/80">Scheduled Clinic Days</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    05:00 PM &ndash; 08:00 PM
                  </div>
                </div>

                {/* Sunday OPD */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block">Sunday Morning OPD</span>
                    <span className="text-xs text-[#334744]/80">Routine follow-ups & urgent outpatient visits</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    09:00 AM &ndash; 01:00 PM
                  </div>
                </div>

                {/* Lab Diagnostics */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-[#123B38] block">Diagnostic Blood & Urine Sample Collection</span>
                    <span className="text-xs text-[#334744]/80">Monday &ndash; Saturday (Fasting preferred early)</span>
                  </div>
                  <div className="text-[#334744] sm:text-right font-medium text-xs sm:text-sm">
                    07:30 AM &ndash; 02:00 PM
                  </div>
                </div>
              </div>

              {/* Bottom Quick Help */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-[#E3E8E3]">
                <span className="text-[#334744]">Need to confirm doctor timings before visiting?</span>
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center text-[#0F4F4A] hover:text-[#123B38] font-bold focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1"
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
