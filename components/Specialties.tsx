import React from "react";

interface Specialty {
  id: string;
  name: string;
  icon: React.ReactNode;
  summary: string;
  scope: string[];
  days: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: "general-medicine",
    name: "General Medicine & Family Health",
    icon: (
      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    summary:
      "Diagnosis and management of acute illnesses, seasonal fevers, and long-term metabolic conditions.",
    scope: ["Viral & Bacterial Fevers", "Hypertension & Diabetes", "Thyroid Disorders", "Preventive Health Checkups"],
    days: "Mon – Sat (Morning & Evening OPD)",
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Health",
    icon: (
      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    summary:
      "Compassionate healthcare for infants, toddlers, and adolescents including routine immunizations.",
    scope: ["Routine Vaccination", "Growth & Nutrition Tracking", "Pediatric Respiratory Care", "Common Childhood Fevers"],
    days: "Mon – Sat (By OPD Schedule)",
  },
  {
    id: "gynecology",
    name: "Obstetrics & Women's Health",
    icon: (
      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    summary:
      "Routine gynecological evaluations, antenatal guidance, and preventive screenings for women.",
    scope: ["Antenatal & Postnatal Checks", "Menstrual Irregularities", "PCOS & Hormonal Guidance", "Preventive Well-Woman Screenings"],
    days: "Mon, Wed, Fri (Afternoon / Evening)",
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    icon: (
      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    summary:
      "Non-surgical assessment for joint pain, arthritis, postural strain, and acute musculoskeletal sprains.",
    scope: ["Knee & Joint Arthritis", "Cervical & Lumbar Spine Pain", "Sprains & Sports Injuries", "Bone Mineral Density Review"],
    days: "Tue, Thu, Sat (Evening OPD)",
  },
  {
    id: "cardiology",
    name: "Cardiology & Hypertension",
    icon: (
      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    summary:
      "Outpatient cardiovascular screening, blood pressure monitoring, and resting ECG review.",
    scope: ["Hypertension Management", "Resting 12-Lead ECG", "Lipid & Cholesterol Review", "Preventive Cardiovascular Risk"],
    days: "Tue & Friday (By Prior Booking)",
  },
  {
    id: "dermatology",
    name: "Dermatology & Skin Wellness",
    icon: (
      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    summary:
      "Clinical diagnosis and medical management of skin, hair, and allergic dermatological conditions.",
    scope: ["Acne & Pigmentation", "Eczema & Allergic Dermatitis", "Fungal & Bacterial Infections", "Hair Fall & Scalp Assessment"],
    days: "Mon & Thursday (Evening OPD)",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Outpatient Services • Demo Listing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinical Specialties & Outpatient Care
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our clinic offers routine consultation and preventive screening across key medical disciplines. All consultations follow established outpatient clinical standards.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-teal-500/60 hover:shadow-md transition-all group"
            >
              <div>
                {/* Icon & Days */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-100/60 transition-colors">
                    {spec.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {spec.days}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {spec.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {spec.summary}
                </p>

                {/* Scope of Treatment */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Common Consultation Focus:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {spec.scope.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Demo Department</span>
                <a
                  href="#appointment-notice"
                  className="inline-flex items-center text-xs font-semibold text-teal-700 hover:text-teal-900 focus-visible:ring-1 focus-visible:ring-teal-700 rounded px-1"
                >
                  Schedule for OPD &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Diagnostics */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-slate-900">
              Laboratory & Diagnostic Sample Collection (Demo)
            </h4>
            <p className="text-xs text-slate-600">
              Routine diagnostic tests (complete blood counts, blood sugar, lipid profiles, thyroid panel, urine routine) available during morning OPD hours (07:30 AM – 02:00 PM).
            </p>
          </div>
          <a
            href="tel:+919800000000"
            className="shrink-0 inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
          >
            Inquire Lab Timings
          </a>
        </div>
      </div>
    </section>
  );
}
