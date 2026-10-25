import React from "react";
import Image from "next/image";

interface Doctor {
  id: string;
  name: string;
  qualification: string;
  designation: string;
  specialty: string;
  experience: string;
  councilRegistration: string;
  consultationDays: string;
  clinicalFocus: string;
}

const SPECIALISTS: Doctor[] = [
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    qualification: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    designation: "Consultant Orthodontist & Aligner Specialist",
    specialty: "Clear Aligners, Ceramic Braces, Bite Correction",
    experience: "12+ Years Clinical Practice (Demo)",
    councilRegistration: "State Dental Council Reg. #[Demo-Dent-02]",
    consultationDays: "Mon, Wed, Fri, Sat: 04:00 PM – 08:30 PM",
    clinicalFocus: "Invisible clear aligner smile design, self-ligating aesthetic braces for teenagers and adults, space closure, and bite correction.",
  },
  {
    id: "dr-ananya-sen",
    name: "Dr. Ananya Sen",
    qualification: "BDS, MDS (Conservative Dentistry & Endodontics)",
    designation: "Consultant Endodontist & Smile Specialist",
    specialty: "Single-Sitting RCT, Porcelain Veneers, Micro-Endodontics",
    experience: "10+ Years Clinical Practice (Demo)",
    councilRegistration: "State Dental Council Reg. #[Demo-Dent-03]",
    consultationDays: "Mon – Sat: 10:00 AM – 02:00 PM & 05:30 PM – 08:00 PM",
    clinicalFocus: "Painless single-visit root canals with rotary files, re-RCT management, composite cosmetic bonding, and ultra-thin porcelain veneers.",
  },
  {
    id: "dr-rohan-mehta",
    name: "Dr. Rohan Mehta",
    qualification: "BDS (General Dental Surgery), Fellowship in Pediatric Dentistry",
    designation: "General Dental Surgeon & Pediatric Care",
    specialty: "Preventive Dentistry, Kids Dentistry, Gum Health",
    experience: "8+ Years Clinical Practice (Demo)",
    councilRegistration: "State Dental Council Reg. #[Demo-Dent-04]",
    consultationDays: "Mon – Sat: 09:30 AM – 01:30 PM & 04:30 PM – 07:30 PM",
    clinicalFocus: "Ultrasonic scaling, air-polishing, tooth decay restorations, child habit-breaking appliances, fluoride treatments, and wisdom tooth evaluations.",
  },
];

export default function Doctors() {
  return (
    <section id="specialists" className="py-20 lg:py-28 bg-white border-b border-[#D4E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D4E5E9]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4F7] text-[#164E63] text-xs font-semibold mb-3">
              <span>Clinical Leadership &bull; Dentist Roster (Demo)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#164E63] font-display tracking-tight leading-[1.12]">
              Specialist dental surgeons you can rely on.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#475569] leading-relaxed">
            Specialist care means your root canal is performed by an endodontist, your aligners by an orthodontist, and your implants by an experienced implantologist.
          </p>
        </div>

        {/* Lead Specialist Hero Profile: Dr. Vikram Sharma */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-[#F7F4EE] border border-[#D4E5E9] shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Doctor Portrait */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[480px] w-full bg-[#164E63]">
              <Image
                src="/images/dentist-doctor.jpg"
                alt="Portrait of Dr. Vikram Sharma, Senior Dental Surgeon and Implantologist at Sai Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Registration Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl glass-surface-dark text-white text-xs flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#E8F4F7]">
                  State Dental Council Reg. #[Demo-Dent-01]
                </span>
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#287D91] bg-white px-3 py-1 rounded-full border border-[#D4E5E9]">
                  Chief Dental Surgeon &bull; Implantology
                </span>
                <span className="text-xs text-[#475569]">
                  15+ Years Clinical Practice (Demo)
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#164E63] font-display">
                  Dr. Vikram Sharma
                </h3>
                <span className="text-sm font-semibold text-[#287D91] block mt-1">
                  BDS, MDS (Prosthodontics & Oral Implantology)
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed">
                With over a decade and a half of clinical focus on aesthetic full-mouth rehabilitation and Swiss-guided dental implants, Dr. Vikram Sharma champions conservative dentistry where patient peace of mind and natural tooth structure always come first.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#D4E5E9] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#164E63] font-bold">
                  <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Consultation Shifts: Mon – Sat (09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM)</span>
                </div>
                <p className="text-[#475569]">
                  <strong>Clinical Focus:</strong> Computer-guided implant placement, full-arch zirconia rehabilitation, aesthetic smile design, and bone regeneration.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#appointment-booking"
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-semibold shadow-soft transition-all duration-200"
                >
                  <span>Book Consultation with Dr. Vikram</span>
                  <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <span className="text-xs text-[#475569]">
                  Zero waiting with prior appointment
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Specialists Team Grid */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
              Consultant Specialists
            </h4>
            <span className="text-xs text-[#475569]">
              Specialist consultation by prior appointment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALISTS.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#D4E5E9] shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4E5E9]/60 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#287D91]">
                      {doc.specialty.split(",")[0]}
                    </span>
                    <span className="text-[10px] text-[#475569] font-mono">
                      {doc.experience}
                    </span>
                  </div>

                  <h5 className="text-xl font-normal text-[#164E63] font-display">
                    {doc.name}
                  </h5>
                  <span className="text-xs font-medium text-[#287D91] block mt-0.5">
                    {doc.qualification}
                  </span>
                  <span className="text-xs text-[#475569] block mt-0.5">
                    {doc.designation}
                  </span>

                  <p className="mt-4 text-xs text-[#1E293B]/80 leading-relaxed">
                    {doc.clinicalFocus}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#D4E5E9]/60 space-y-2">
                  <div className="text-[11px] text-[#475569]">
                    <strong>OPD:</strong> {doc.consultationDays}
                  </div>
                  <a
                    href="#appointment-booking"
                    className="inline-flex items-center text-xs font-bold text-[#164E63] hover:text-[#287D91] transition-colors"
                  >
                    Request Slot &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
