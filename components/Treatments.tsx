import React from "react";
import Image from "next/image";

interface Treatment {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  features: string[];
  sessionTime: string;
  comfortLevel: string;
}

const TREATMENTS: Treatment[] = [
  {
    id: "root-canal",
    number: "01",
    title: "Painless Root Canal Treatment (RCT)",
    category: "Tooth Preservation",
    summary:
      "Save your natural, infected tooth in just a single sitting using digital apex locators, rotary endodontic files, and soothing computer-aided local anesthesia.",
    features: [
      "95% done in single 45-minute sitting",
      "Sterilized rubber-dam isolation",
      "Digital X-ray apex precision",
      "Zirconia or ceramic crown fitting",
    ],
    sessionTime: "45–60 mins",
    comfortLevel: "100% Pain-Free Numbing",
  },
  {
    id: "dental-implants",
    number: "02",
    title: "Permanent Dental Implants",
    category: "Missing Tooth Replacement",
    summary:
      "Restore your natural chewing power and facial contours with biocompatible titanium implants from premier Swiss and German implant systems.",
    features: [
      "Lifelong titanium integration",
      "No grinding of adjacent healthy teeth",
      "Flapless keyhole computer-guided surgery",
      "Natural shade-matched ceramic crowns",
    ],
    sessionTime: "30–45 mins per implant",
    comfortLevel: "Mild pressure, zero sharp pain",
  },
  {
    id: "teeth-whitening",
    number: "03",
    title: "Teeth Whitening & Air Polishing",
    category: "Cosmetic Brightening",
    summary:
      "Erase years of turmeric, tea, coffee, and lifestyle staining with safe cold-light bleaching gels that brighten enamel up to 6 shades without sensitivity.",
    features: [
      "In-office safe enamel brightening",
      "Gingival barrier gum protection",
      "Air-flow stain polishing",
      "Long-lasting shine maintenance kit",
    ],
    sessionTime: "45 mins single session",
    comfortLevel: "Completely comfortable",
  },
  {
    id: "braces-ortho",
    number: "04",
    title: "Braces & Transparent Aligners",
    category: "Teeth Alignment",
    summary:
      "Correct crowded, overlapping, or forward-placed teeth for teenagers and adults using tooth-colored ceramic brackets or virtually invisible aligners.",
    features: [
      "Custom 3D digital tooth movement map",
      "Ceramic, metallic & lingual bracket options",
      "No food restrictions with removable aligners",
      "Gentle low-force wire technologies",
    ],
    sessionTime: "Monthly 20-min checks",
    comfortLevel: "Smooth & frictionless",
  },
  {
    id: "preventive-pediatric",
    number: "05",
    title: "Preventive & Pediatric Dentistry",
    category: "Family Dental Health",
    summary:
      "Gentle cavity prevention, scaling, fluoride treatments, and pit-and-fissure sealants designed to make children look forward to every dentist visit.",
    features: [
      "Gentle ultrasonic calculus removal",
      "Fluoride varnish to strengthen enamel",
      "Child-friendly welcoming atmosphere",
      "Early orthodontic growth monitoring",
    ],
    sessionTime: "30 mins",
    comfortLevel: "Gentle & kid-approved",
  },
  {
    id: "veneers-makeover",
    number: "06",
    title: "Smile Makeovers & Porcelain Veneers",
    category: "Aesthetic Restoration",
    summary:
      "Transform chipped, uneven, or discolored front teeth with bespoke ultra-thin porcelain veneers and digital smile designing tailored to your facial harmony.",
    features: [
      "Ultra-thin 0.3mm porcelain laminates",
      "Pre-treatment 3D aesthetic simulation",
      "Minimal to zero tooth structure removal",
      "Handcrafted by master dental ceramists",
    ],
    sessionTime: "2 clinical visits",
    comfortLevel: "Zero downtime",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E3E8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E3E8E3]/70">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block mb-2">
              Comprehensive Dental Care &bull; Specialized Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.12]">
              Precision treatments designed for lifelong dental health.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#334744]/85 max-w-md leading-relaxed font-normal">
            Every procedure at Sai Dental Clinic is guided by conservative dentistry—protecting your natural tooth structure first and using biocompatible materials.
          </p>
        </div>

        {/* Featured Visual Spotlight: Clear Aligners & Smile Design */}
        <div className="mt-12 rounded-3xl overflow-hidden bg-[#F8F6F0] border border-[#E3E8E3] shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image Column */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[460px] w-full">
              <Image
                src="/images/dental-smile.jpg"
                alt="Radiant healthy smile of patient next to custom clear aligners tray at Sai Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 lg:hidden bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0F4F4A]">
                Invisible Smile Correction
              </div>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE8DF] text-[#0F4F4A] text-xs font-bold uppercase tracking-wider">
                Featured Specialty &bull; Cosmetic Dentistry
              </div>

              <h3 className="text-2xl sm:text-4xl font-normal text-[#123B38] font-display leading-tight">
                Clear Aligners & Digital Smile Design
              </h3>

              <p className="text-sm sm:text-base text-[#334744]/90 leading-relaxed font-normal">
                Straighten your teeth comfortably without traditional wires or metallic brackets. Using advanced 3D intraoral scans, we map your entire smile journey before you even start wearing your custom, transparent trays.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#E3E8E3]">
                  <span className="text-xs font-bold text-[#0F4F4A] block mb-1">Discreet & Invisible</span>
                  <p className="text-xs text-[#334744]/80">No one notices you are wearing aligners during meetings or social events.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E3E8E3]">
                  <span className="text-xs font-bold text-[#0F4F4A] block mb-1">Eat Everything</span>
                  <p className="text-xs text-[#334744]/80">Simply remove the trays while enjoying your favorite Indian meals and brush normally.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#appointment-booking"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#0F4F4A] hover:bg-[#123B38] text-white text-xs sm:text-sm font-semibold transition-all shadow-soft"
                >
                  Book Free 3D Scan Consultation &rarr;
                </a>
                <span className="text-xs text-[#334744]/70 font-medium">
                  Easy Monthly EMI Options Available (Demo)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Treatments Cards Grid: Asymmetric, Content-Rich, Varied Hierarchy */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="rounded-3xl p-7 sm:p-8 bg-[#F8F6F0]/60 hover:bg-[#F8F6F0] border border-[#E3E8E3] hover:border-[#0F4F4A]/40 transition-all duration-200 flex flex-col justify-between group shadow-card hover:shadow-glow"
            >
              <div>
                {/* Header: Number & Category Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3E8E3]/70 mb-5">
                  <span className="text-sm font-mono font-bold text-[#0F4F4A]/80">
                    {treatment.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#123B38] bg-[#DCE8DF] px-3 py-1 rounded-full">
                    {treatment.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-normal text-[#123B38] font-display group-hover:text-[#0F4F4A] transition-colors leading-snug">
                  {treatment.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-[#334744]/90 leading-relaxed font-normal">
                  {treatment.summary}
                </p>

                {/* Clinical Features List */}
                <div className="mt-5 pt-4 border-t border-[#E3E8E3]/60">
                  <span className="text-[11px] font-bold text-[#123B38] uppercase tracking-wider block mb-2.5">
                    Procedure Highlights:
                  </span>
                  <ul className="space-y-2 text-xs text-[#334744]">
                    {treatment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F4F4A] shrink-0 mt-1.5" aria-hidden="true" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Specs: Session Time & Comfort */}
              <div className="mt-6 pt-4 border-t border-[#E3E8E3]/60 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#334744]/75 font-medium">Session:</span>
                  <span className="font-semibold text-[#123B38]">{treatment.sessionTime}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#334744]/75 font-medium">Comfort:</span>
                  <span className="font-semibold text-[#0F4F4A]">{treatment.comfortLevel}</span>
                </div>

                <a
                  href="#appointment-booking"
                  className="w-full inline-flex items-center justify-center min-h-[42px] px-4 py-2 rounded-full bg-white hover:bg-[#0F4F4A] text-[#123B38] hover:text-white border border-[#E3E8E3] hover:border-[#0F4F4A] text-xs font-semibold transition-all duration-200 mt-2 shadow-xs"
                >
                  Book Treatment Consultation &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
