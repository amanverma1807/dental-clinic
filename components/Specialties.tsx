import React from "react";
import Image from "next/image";

interface Specialty {
  id: string;
  number: string;
  name: string;
  summary: string;
  scope: string[];
  days: string;
}

const SPECIALTIES: Specialty[] = [
  {
    id: "general-medicine",
    number: "01",
    name: "General Medicine",
    summary:
      "Comprehensive diagnostic evaluations, management of fevers, chronic lifestyle conditions, diabetes, and preventive checkups.",
    scope: ["Viral & Infection Care", "Diabetes & Hypertension", "Preventive Health Panels", "Thyroid Evaluations"],
    days: "Mon – Sat: Morning & Evening",
  },
  {
    id: "pediatrics",
    number: "02",
    name: "Pediatrics & Child Health",
    summary:
      "Nurturing medical care for newborns, toddlers, and young adults, including national immunization schedules and growth tracking.",
    scope: ["Immunization Schedules", "Growth & Nutrition", "Pediatric Respiratory Care", "Childhood Infections"],
    days: "Mon – Sat: Scheduled OPD",
  },
  {
    id: "gynecology",
    number: "03",
    name: "Gynecology & Women's Health",
    summary:
      "Routine well-woman consultations, prenatal guidance, menstrual health assessment, and preventive wellness screenings.",
    scope: ["Routine Antenatal Care", "Menstrual Health", "PCOS & Hormonal Guidance", "Well-Woman Panels"],
    days: "Mon, Wed, Fri: Afternoon & Evening",
  },
  {
    id: "orthopedics",
    number: "04",
    name: "Orthopedics & Joint Care",
    summary:
      "Specialized assessment and non-surgical management of joint discomfort, spine pain, osteoarthritis, and minor musculoskeletal strains.",
    scope: ["Osteoarthritis Care", "Cervical & Spine Health", "Sprains & Sports Injuries", "Bone Density Consults"],
    days: "Tue, Thu, Sat: Evening OPD",
  },
  {
    id: "cardiology",
    number: "05",
    name: "Cardiology",
    summary:
      "Outpatient cardiovascular screening, blood pressure regulation, cholesterol monitoring, and resting 12-lead ECG review.",
    scope: ["Hypertension Protocols", "12-Lead ECG Analysis", "Cardiovascular Risk Review", "Lipid Management"],
    days: "Tue & Fri: Scheduled OPD",
  },
  {
    id: "dermatology",
    number: "06",
    name: "Dermatology",
    summary:
      "Clinical diagnosis and medical care for skin allergies, acute eczema, acne, fungal conditions, and scalp health.",
    scope: ["Acne & Rosacea Care", "Allergic Dermatitis", "Fungal & Skin Infections", "Hair & Scalp Health"],
    days: "Mon & Thu: Evening OPD",
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E3E8E3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header: Inspired by reference editorial hierarchy */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block mb-2">
            Clinical Disciplines &bull; Sample Listing
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.15]">
            One connected view of your health.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#334744]/90 leading-relaxed font-normal">
            CarePoint Clinic brings together experienced consultants across primary care and core specialties, offering thoughtful, coordinated medicine under one roof.
          </p>
        </div>

        {/* Featured Visual Banner (Inspired by the Reference's wide 3D cellular diagnostic band) */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-r from-[#123B38] to-[#0F4F4A] text-white shadow-soft border border-[#0F4F4A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DCE8DF] block">
                Integrated Outpatient Diagnostics
              </span>
              <h3 className="text-2xl sm:text-4xl font-normal text-white font-display leading-tight">
                Start with a clearer picture.
              </h3>
              <p className="text-sm sm:text-base text-[#DCE8DF]/90 max-w-lg leading-relaxed">
                From morning fasting blood panels and routine sugar tests to 12-lead ECGs, our on-site sample collection delivers clear, reliable clinical data for your doctor.
              </p>
              <div className="pt-2">
                <a
                  href="#timings"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 px-5 py-2.5 rounded-full border border-white/20 transition-all"
                >
                  View Sample Collection Hours &rarr;
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full min-h-[220px] relative">
              <Image
                src="/images/teal-cells-banner.jpg"
                alt="Translucent 3D cellular bio-cluster in deep teal representing diagnostic clinical clarity"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Specialties Grid: Varied layout, subtle borders, whitespace-first */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              className="rounded-2xl p-7 bg-[#F8F6F0]/50 hover:bg-[#F8F6F0] border border-[#E3E8E3]/60 hover:border-[#0F4F4A]/30 transition-all flex flex-col justify-between group shadow-soft hover:shadow-glow"
            >
              <div>
                {/* Number & Schedule */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3E8E3]/60 mb-5">
                  <span className="text-sm font-mono font-bold text-[#0F4F4A]/70">
                    {spec.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#123B38] bg-[#DCE8DF]/70 px-2.5 py-0.5 rounded-full">
                    {spec.days}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#123B38] group-hover:text-[#0F4F4A] transition-colors">
                  {spec.name}
                </h3>

                {/* Summary */}
                <p className="mt-2 text-sm text-[#334744]/85 leading-relaxed font-normal">
                  {spec.summary}
                </p>

                {/* Scope */}
                <div className="mt-5 pt-4 border-t border-[#E3E8E3]/50">
                  <span className="text-[11px] font-bold text-[#123B38] uppercase tracking-wider block mb-2">
                    Key Consultation Areas:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#334744]">
                    {spec.scope.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F4F4A]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-[#E3E8E3]/50 flex items-center justify-between">
                <span className="text-[11px] text-[#334744]/70 font-medium">Outpatient Consultation</span>
                <a
                  href="#appointment-notice"
                  className="inline-flex items-center text-xs font-bold text-[#0F4F4A] hover:text-[#123B38] transition-colors"
                >
                  Consultation Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
