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
  hasPhoto?: boolean;
}

const DENTAL_SPECIALISTS: Doctor[] = [
  {
    id: "dr-vikram-sharma",
    name: "Dr. Vikram Sharma",
    qualification: "BDS, MDS (Prosthodontics & Oral Implantology)",
    designation: "Senior Dental Surgeon & Implantologist",
    specialty: "Dental Implants, Full-Mouth Rehab, Zirconia Crowns",
    experience: "15+ Years Clinical Practice (Demo)",
    councilRegistration: "State Dental Council Reg. #[Demo-Dent-01]",
    consultationDays: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM",
    clinicalFocus: "Computer-guided implant placement, complex full-arch rehabilitation, aesthetic crowns and bridges, bone grafting procedures.",
    hasPhoto: true,
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    qualification: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    designation: "Consultant Orthodontist & Aligner Specialist",
    specialty: "Clear Aligners, Ceramic Braces, Jaw Alignment",
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
    <section id="specialists" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E3E8E3]/70">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block mb-2">
              Clinical Team &bull; Sample Dentist Roster
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.12]">
              Meet our master dental specialists.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#334744]/85 max-w-md leading-relaxed font-normal">
            Specialist care means your root canal is performed by an endodontist, your aligners by an orthodontist, and your implants by an implantologist.
          </p>
        </div>

        {/* Lead Specialist Hero Profile: Dr. Vikram Sharma */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-[#F8F6F0] border border-[#E3E8E3] shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[450px] w-full bg-[#123B38]">
              <Image
                src="/images/dentist-doctor.jpg"
                alt="Portrait of Dr. Vikram Sharma, Senior Dental Surgeon and Implantologist at Sai Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
            </div>

            {/* Profile Bio Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#0F4F4A] text-[#F8F6F0] px-2.5 py-1 rounded-full">
                  Lead Clinical Director &bull; Demo Profile
                </span>
                <span className="text-xs font-medium text-[#334744]/75">15+ Years Clinical Practice</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#123B38] font-display">
                  Dr. Vikram Sharma
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#0F4F4A] mt-1">
                  BDS, MDS (Prosthodontics & Oral Implantology)
                </p>
                <p className="text-xs text-[#334744]/75 font-mono mt-0.5">
                  State Dental Council Reg. #[Demo-Dent-01] &bull; Indian Dental Association Member (Demo)
                </p>
              </div>

              <p className="text-sm text-[#334744]/90 leading-relaxed">
                Specializing in restorative implantology and complex aesthetic rehabilitation. Dr. Sharma has dedicated his clinical career to delivering natural-looking, functional smiles using minimally invasive, flapless keyhole techniques.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#E3E8E3] space-y-2 text-xs">
                <span className="font-bold text-[#123B38] block uppercase tracking-wider text-[11px]">
                  Core Clinical Expertise:
                </span>
                <p className="text-[#334744] leading-relaxed">
                  Titanium & Ceramic Dental Implants, Full-Mouth Fixed Teeth, Bone Augmentation, and Precision Computer-Aided Occlusion Balancing.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-[#E3E8E3]/70">
                <div className="text-[#334744]">
                  <strong className="text-[#123B38]">Consultation Shifts:</strong> Mon–Sat (Morning & Evening OPD)
                </div>
                <a
                  href="#appointment-booking"
                  className="inline-flex items-center font-bold text-[#0F4F4A] hover:text-[#123B38] transition-colors"
                >
                  Schedule with Dr. Sharma &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Specialist Team Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {DENTAL_SPECIALISTS.slice(1).map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-3xl p-7 bg-[#F8F6F0]/60 hover:bg-[#F8F6F0] border border-[#E3E8E3] shadow-card hover:shadow-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E3E8E3]/70 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F4F4A] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    {doctor.name.split(" ")[1]?.charAt(0) || "D"}
                  </div>
                  <span className="text-[10px] font-bold text-[#0F4F4A] bg-[#DCE8DF] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Demo Specialist
                  </span>
                </div>

                <h3 className="text-xl font-normal text-[#123B38] font-display">
                  {doctor.name}
                </h3>
                <p className="text-xs font-bold text-[#0F4F4A] mt-0.5">
                  {doctor.qualification}
                </p>
                <p className="text-xs text-[#334744]/75 font-medium mt-1">
                  {doctor.designation}
                </p>

                <div className="mt-4 pt-3 border-t border-[#E3E8E3]/60 space-y-2 text-xs">
                  <div>
                    <span className="text-[#334744]/75 font-medium block">Specialty:</span>
                    <span className="font-semibold text-[#123B38]">{doctor.specialty}</span>
                  </div>
                  <div>
                    <span className="text-[#334744]/75 font-medium block">Council Registration:</span>
                    <span className="font-mono text-[#334744] bg-white px-2 py-0.5 rounded border border-[#E3E8E3]/60 inline-block text-[11px]">
                      {doctor.councilRegistration}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#334744]/75 font-medium block">Clinical Scope:</span>
                    <p className="text-[#334744] leading-relaxed bg-white/70 p-2.5 rounded-xl border border-[#E3E8E3]/50">
                      {doctor.clinicalFocus}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3E8E3]/60">
                <span className="text-[11px] text-[#334744]/75 block mb-2">
                  {doctor.consultationDays}
                </span>
                <a
                  href="#appointment-booking"
                  className="w-full inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full bg-white hover:bg-[#0F4F4A] text-[#123B38] hover:text-white border border-[#E3E8E3] hover:border-[#0F4F4A] text-xs font-semibold transition-all shadow-xs"
                >
                  Book with Specialist &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F8F6F0] border border-[#E3E8E3] text-xs text-[#334744] flex items-start gap-3 shadow-xs">
          <svg className="w-5 h-5 text-[#0F4F4A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <strong className="text-[#123B38]">Dental Council Demonstration Compliance:</strong> The practitioner profiles and council registration numbers shown on this demonstration website represent sample clinic personnel. In production, verified registration numbers issued by the respective State Dental Council and the Dental Council of India (DCI) will be displayed.
          </div>
        </div>
      </div>
    </section>
  );
}
