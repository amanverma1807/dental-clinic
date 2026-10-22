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
    focus: "Adult fever evaluations, diabetes management, chronic hypertension, preventive health",
  },
  {
    id: "dr-nambiar",
    name: "Dr. Meera Nambiar",
    qualification: "DNB (Pediatrics), DCH, MBBS",
    specialty: "Consultant Pediatrician",
    experience: "12+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-02]",
    consultationDays: "Mon – Sat: 09:30 AM – 01:30 PM & 05:30 PM – 07:30 PM",
    focus: "Infant immunization, childhood respiratory illnesses, growth monitoring, adolescent health",
  },
  {
    id: "dr-iyer",
    name: "Dr. Rajesh S. Iyer",
    qualification: "MS (Orthopedics), MBBS",
    specialty: "Consultant Orthopedic Surgeon",
    experience: "14+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-03]",
    consultationDays: "Tue, Thu, Sat: 05:30 PM – 08:00 PM",
    focus: "Degenerative joint disease, cervical and lumbar spondylosis, non-surgical sports injury care",
  },
  {
    id: "dr-mukherjee",
    name: "Dr. Ananya Mukherjee",
    qualification: "DGO, MBBS",
    specialty: "Consultant Gynecologist",
    experience: "10+ Years Clinical Practice (Demo)",
    registration: "State Medical Council Reg. #[Demo-Reg-04]",
    consultationDays: "Mon, Wed, Fri: 04:00 PM – 07:00 PM",
    focus: "Routine antenatal care, menstrual health, PCOS / hormonal management, well-woman screening",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-[#F8F6F0] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#DCE8DF] text-[#0F4F4A] text-xs font-bold uppercase tracking-wider mb-3">
            Physician Directory &bull; Sample Roster
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B38] tracking-tight">
            Our Consultant Doctors
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#334744] leading-relaxed">
            All practitioner profiles shown below are structured sample representations. In the production deployment, this directory will display verified clinic doctors registered with their respective State Medical Council.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DEMO_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-[#E3E8E3] p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Badge & Avatar Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0F4F4A] text-white flex items-center justify-center font-bold text-lg shadow-inner">
                      {doc.name.split(" ")[1]?.charAt(0) || "D"}
                    </div>
                    <div>
                      <div className="inline-block text-[11px] font-semibold text-[#0F4F4A] bg-[#DCE8DF] border border-[#E3E8E3] px-2 py-0.5 rounded mb-1">
                        Sample Profile
                      </div>
                      <h3 className="text-xl font-bold text-[#123B38]">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-[#0F4F4A]">
                        {doc.qualification}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-specialty & Credentials */}
                <div className="space-y-2.5 pt-3 border-t border-[#E3E8E3] text-xs text-[#334744]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#334744]/80 font-medium">Designation:</span>
                    <span className="font-semibold text-[#123B38]">{doc.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#334744]/80 font-medium">Clinical Experience:</span>
                    <span className="font-medium text-[#123B38]">{doc.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#334744]/80 font-medium">Medical Council:</span>
                    <span className="font-mono text-[#334744] bg-[#F8F6F0] px-1.5 py-0.5 rounded border border-[#E3E8E3]">
                      {doc.registration}
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#334744]/80 font-medium block mb-1">Clinical Areas:</span>
                    <p className="text-[#334744] leading-relaxed bg-[#F8F6F0] p-3 rounded-lg border border-[#E3E8E3]">
                      {doc.focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Timings & CTA */}
              <div className="mt-6 pt-4 border-t border-[#E3E8E3] space-y-3">
                <div className="text-xs">
                  <span className="text-[#334744]/80 font-medium block">Consultation Days:</span>
                  <span className="font-semibold text-[#123B38]">{doc.consultationDays}</span>
                </div>

                <a
                  href="#appointment-notice"
                  className="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-xs font-semibold rounded-xl bg-[#0F4F4A] hover:bg-[#123B38] text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
                >
                  Consultation Details & Booking Info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#E3E8E3] text-xs text-[#334744] flex items-start gap-3">
          <svg className="w-5 h-5 text-[#0F4F4A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <strong className="text-[#123B38]">Medical Compliance Notice:</strong> Doctor consultation hours are subject to hospital rounds, emergency duties, and prior clinic confirmation. Patients are advised to contact the reception desk prior to visiting.
          </div>
        </div>
      </div>
    </section>
  );
}
