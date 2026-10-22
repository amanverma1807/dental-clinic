import React from "react";

interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  experience: string;
  registration: string;
  consultationDays: string;
  focus: string;
}

const DEMO_DOCTORS: Doctor[] = [
  {
    id: "dr-verma",
    name: "Dr. A. K. Verma",
    qualification: "MD (General Medicine), MBBS",
    specialty: "Senior Consultant Physician",
    experience: "15+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-01]",
    consultationDays: "Mon – Sat: 08:30 AM – 01:00 PM & 05:00 PM – 08:00 PM",
    focus: "Adult fevers, diabetes management, hypertension, preventive health",
  },
  {
    id: "dr-nambiar",
    name: "Dr. Meera Nambiar",
    qualification: "DNB (Pediatrics), DCH, MBBS",
    specialty: "Consultant Pediatrician",
    experience: "12+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-02]",
    consultationDays: "Mon – Sat: 09:30 AM – 01:30 PM & 05:30 PM – 07:30 PM",
    focus: "Child immunization, newborn wellness, pediatric infections & growth",
  },
  {
    id: "dr-iyer",
    name: "Dr. Rajesh S. Iyer",
    qualification: "MS (Orthopedics), MBBS",
    specialty: "Consultant Orthopedic Surgeon",
    experience: "14+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-03]",
    consultationDays: "Tue, Thu, Sat: 05:30 PM – 08:00 PM",
    focus: "Joint pain, osteoarthritis, neck and lumbar spine disorders, sports sprains",
  },
  {
    id: "dr-mukherjee",
    name: "Dr. Ananya Mukherjee",
    qualification: "DGO, MBBS",
    specialty: "Consultant Gynecologist",
    experience: "10+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-04]",
    consultationDays: "Mon, Wed, Fri: 04:00 PM – 07:00 PM",
    focus: "Antenatal wellness, menstrual health, PCOS management, well-woman care",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            Demo Practitioner Roster
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consultant Physicians & Doctors
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            All profiles shown below are structured demonstration placeholders. In production, these will represent verified medical practitioners registered with their respective State Medical Council.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DEMO_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Badge & Avatar Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold text-lg shadow-inner">
                      {doc.name.split(" ")[1]?.charAt(0) || "D"}
                    </div>
                    <div>
                      <div className="inline-block text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mb-1">
                        Demo Profile
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-teal-700">
                        {doc.qualification}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-specialty & Credentials */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Designation:</span>
                    <span className="font-semibold text-slate-900">{doc.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Experience:</span>
                    <span className="font-medium text-slate-900">{doc.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Registration:</span>
                    <span className="font-mono text-slate-600">{doc.registration}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-slate-500 font-medium block mb-1">Clinical Areas:</span>
                    <p className="text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {doc.focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Timings & CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs">
                  <span className="text-slate-500 font-medium block">OPD Schedule:</span>
                  <span className="font-semibold text-slate-900">{doc.consultationDays}</span>
                </div>

                <a
                  href="#appointment-notice"
                  className="w-full inline-flex items-center justify-center min-h-[42px] px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  Consultation Request (Demo)
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Roster Policy Note */}
        <div className="mt-8 p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 text-xs text-teal-950 flex items-start gap-3">
          <svg className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <span className="font-bold">Medical Council Compliance Note:</span> All medical consultations are conducted by registered medical practitioners. Doctor consultation hours are subject to emergency duty and prior confirmation.
          </div>
        </div>
      </div>
    </section>
  );
}
