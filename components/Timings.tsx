import React from "react";

export default function Timings() {
  return (
    <section id="timings" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              Operating Schedule • Demo Data
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Clinic & Consultation Timings
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We operate standard morning and evening outpatient consultation batches to accommodate working professionals and families.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1">
              <strong className="block font-semibold">Demo Schedule Notice</strong>
              <p>
                The hours listed here are representative placeholders. Prior confirmation via phone is recommended before visiting for specific specialist consultations.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Emergency Medical Guidance
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our clinic is an outpatient facility and does not provide 24/7 ICU or critical polytrauma services. For acute medical emergencies, please call <strong>112</strong> or <strong>108</strong>, or proceed immediately to the nearest tertiary hospital casualty ward.
              </p>
            </div>
          </div>

          {/* Right Column: Schedule Table */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>Weekly Outpatient Schedule</span>
                <span className="text-xs font-medium text-slate-500">[Demo Timings]</span>
              </h3>

              <div className="divide-y divide-slate-200 text-sm">
                {/* General OPD */}
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-semibold text-slate-900 block">General Medicine & Family OPD</span>
                    <span className="text-xs text-slate-500">Monday to Saturday</span>
                  </div>
                  <div className="text-slate-700 sm:text-right font-medium">
                    08:00 AM – 01:00 PM<br />
                    04:30 PM – 08:00 PM
                  </div>
                </div>

                {/* Specialist OPD */}
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-semibold text-slate-900 block">Specialist Consultations (Pediatrics, Ortho, Gynae)</span>
                    <span className="text-xs text-slate-500">Designated Days (As per Doctor Roster)</span>
                  </div>
                  <div className="text-slate-700 sm:text-right font-medium">
                    05:00 PM – 08:00 PM
                  </div>
                </div>

                {/* Sunday OPD */}
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-semibold text-slate-900 block">Sunday Outpatient Clinic</span>
                    <span className="text-xs text-slate-500">Routine follow-ups & urgent consultations</span>
                  </div>
                  <div className="text-slate-700 sm:text-right font-medium">
                    09:00 AM – 01:00 PM
                  </div>
                </div>

                {/* Lab Diagnostics */}
                <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-semibold text-slate-900 block">Diagnostic Blood & Urine Sample Collection</span>
                    <span className="text-xs text-slate-500">Monday to Saturday (Fasting tests preferred early)</span>
                  </div>
                  <div className="text-slate-700 sm:text-right font-medium">
                    07:30 AM – 02:00 PM
                  </div>
                </div>
              </div>

              {/* Bottom Quick Help */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">Need confirmation before leaving home?</span>
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center text-teal-700 hover:text-teal-900 font-semibold focus-visible:ring-1 focus-visible:ring-teal-700 rounded px-1"
                >
                  Call OPD Desk: +91 98000 00000 &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
