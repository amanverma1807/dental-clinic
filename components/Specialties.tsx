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
    name: "General Medicine",
    icon: (
      <svg className="w-6 h-6 text-[#0F4F4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    summary:
      "Primary health assessments, acute illness management, viral fevers, diabetes, and hypertension control.",
    scope: ["Fever & Infection Care", "Diabetes & Hypertension Management", "Preventive Health Checkups", "Thyroid Evaluations"],
    days: "Mon – Sat (Morning & Evening OPD)",
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Health",
    icon: (
      <svg className="w-6 h-6 text-[#0F4F4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    summary:
      "Comprehensive medical care for infants, children, and adolescents, including immunization tracking.",
    scope: ["Routine Vaccination", "Growth & Nutrition Monitoring", "Pediatric Respiratory Care", "Childhood Infection Management"],
    days: "Mon – Sat (Designated OPD Hours)",
  },
  {
    id: "gynecology",
    name: "Gynecology & Women's Health",
    icon: (
      <svg className="w-6 h-6 text-[#0F4F4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    summary:
      "Routine well-woman consultations, antenatal checkups, and management of common gynecological concerns.",
    scope: ["Routine Antenatal Care", "Menstrual Health Guidance", "PCOS / PCOD Management", "Well-Woman Health Screenings"],
    days: "Mon, Wed, Fri (Afternoon & Evening)",
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    icon: (
      <svg className="w-6 h-6 text-[#0F4F4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    summary:
      "Specialized diagnosis and conservative care for back, neck, knee pain, osteoarthritis, and minor sprains.",
    scope: ["Osteoarthritis Assessment", "Spine & Cervical Pain", "Musculoskeletal Sprains", "Bone Density Consultations"],
    days: "Tue, Thu, Sat (Evening OPD)",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: (
      <svg className="w-6 h-6 text-[#0F4F4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    summary:
      "Outpatient cardiac evaluation, blood pressure monitoring, cholesterol regulation, and resting ECGs.",
    scope: ["Hypertension Management", "Resting 12-Lead ECG Review", "Cardiovascular Risk Profiling", "Lipid & Cholesterol Care"],
    days: "Tue & Fri (Scheduled OPD)",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: (
      <svg className="w-6 h-6 text-[#0F4F4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    summary:
      "Clinical evaluation of skin, hair, and nail conditions, acute allergies, eczema, and acne management.",
    scope: ["Acne & Rosacea Care", "Allergic Dermatitis & Eczema", "Fungal & Bacterial Infections", "Hair & Scalp Health"],
    days: "Mon & Thu (Evening OPD)",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-16 lg:py-24 bg-[#FFFFFF] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DCE8DF] text-[#0F4F4A] text-xs font-bold uppercase tracking-wider mb-3">
            Clinical Disciplines &bull; Demo Listing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B38] tracking-tight">
            Our Medical Specialties
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334744] leading-relaxed">
            CarePoint Clinic brings together experienced consultants across primary care and key outpatient specialties, ensuring coordinated healthcare for all family members.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="rounded-2xl border border-[#E3E8E3] bg-[#F8F6F0]/40 p-6 sm:p-7 flex flex-col justify-between hover:border-[#0F4F4A]/60 hover:bg-[#FFFFFF] hover:shadow-md transition-all group"
            >
              <div>
                {/* Icon & Days */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DCE8DF] flex items-center justify-center group-hover:bg-[#0F4F4A] group-hover:text-white transition-colors text-[#0F4F4A]">
                    {spec.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#123B38] bg-[#DCE8DF]/70 px-2.5 py-1 rounded-md">
                    {spec.days}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#123B38] group-hover:text-[#0F4F4A] transition-colors">
                  {spec.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-[#334744] leading-relaxed">
                  {spec.summary}
                </p>

                {/* Scope of Treatment */}
                <div className="mt-5 pt-4 border-t border-[#E3E8E3]">
                  <span className="text-xs font-bold text-[#123B38] uppercase tracking-wider block mb-2">
                    Common Consultation Focus:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#334744]">
                    {spec.scope.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F4F4A] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-[#E3E8E3] flex items-center justify-between">
                <span className="text-xs text-[#334744]/70 font-medium">Outpatient Care</span>
                <a
                  href="#appointment-notice"
                  className="inline-flex items-center text-xs font-bold text-[#0F4F4A] hover:text-[#123B38] focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-0.5"
                >
                  Consultation Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostics Info Box */}
        <div className="mt-10 p-5 rounded-xl bg-[#F8F6F0] border border-[#E3E8E3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-[#123B38]">
              On-Site Diagnostic Sample Collection (Demo Facility)
            </h4>
            <p className="text-xs text-[#334744]">
              Basic blood pathology, blood sugar, lipid panel, thyroid profile, and routine urine diagnostics are collected on-site during morning clinic hours (07:30 AM &ndash; 02:00 PM).
            </p>
          </div>
          <a
            href="tel:+919800000000"
            className="shrink-0 inline-flex items-center justify-center min-h-[42px] px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-[#E3E8E3] text-[#123B38] hover:bg-[#DCE8DF]/40 transition-colors"
          >
            Inquire Lab Timings
          </a>
        </div>
      </div>
    </section>
  );
}
