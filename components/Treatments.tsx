"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TreatmentData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  comfort: string;
  technology: string;
  image: string;
  benefits: string[];
}

const TREATMENTS_LIST: TreatmentData[] = [
  {
    id: "root-canal",
    tag: "Tooth Preservation",
    title: "Painless Single-Sitting Root Canal",
    subtitle: "Save your natural tooth with computer-guided rotary endodontics",
    description:
      "Modern root canal treatment is completely painless. Using high-precision apex locators, computerized rotary files, and gentle surface numbing gels, our endodontists remove infection and seal the root canal in a single 45-minute sitting.",
    duration: "45–60 mins (Single Visit)",
    comfort: "100% Pain-Free Numbing",
    technology: "Digital Apex Locator & Rotary Files",
    image: "/images/dental-hero.jpg",
    benefits: [
      "Done in 95% single visit without repeat hospital trips",
      "Sterilized rubber-dam isolation keeps treatment 100% clean",
      "Digital X-ray sensor for sub-millimeter precision",
      "Finished with durable natural-shade Zirconia ceramic crown",
    ],
  },
  {
    id: "clear-aligners",
    tag: "Aesthetic Orthodontics",
    title: "Invisible Clear Aligners",
    subtitle: "Straighten crowded or spaced teeth discreetly without metallic wires",
    description:
      "Clear aligners are virtually invisible, removable transparent trays that gently move your teeth into perfect alignment. Eat whatever Indian foods you love, brush normally, and attend business meetings with complete confidence.",
    duration: "Bi-weekly tray switches",
    comfort: "Smooth, zero wire ulcers",
    technology: "3D Digital Intraoral Scan",
    image: "/images/dental-smile.jpg",
    benefits: [
      "Custom 3D digital smile simulation before you start",
      "Removable while eating, brushing, and attending occasions",
      "No food restrictions—enjoy all your favorite meals",
      "Fewer clinic checkups compared to traditional braces",
    ],
  },
  {
    id: "dental-implants",
    tag: "Permanent Tooth Replacement",
    title: "Swiss & German Dental Implants",
    subtitle: "Restore natural chewing power and facial contours with titanium fixtures",
    description:
      "The gold standard for missing teeth. Biocompatible titanium implants integrate permanently with your jawbone, eliminating the need to cut down neighboring healthy teeth as required for traditional bridges.",
    duration: "30–45 mins per implant",
    comfort: "Gentle local anesthesia",
    technology: "Keyhole Computer Guided",
    image: "/images/dental-suite.jpg",
    benefits: [
      "Lifelong titanium integration with jawbone",
      "Zero grinding or damage to adjacent healthy teeth",
      "Restores 100% natural bite strength for tough foods",
      "Prevents bone loss and preserves natural facial volume",
    ],
  },
  {
    id: "teeth-whitening",
    tag: "Cosmetic Brightening",
    title: "Cold-Light In-Office Teeth Whitening",
    subtitle: "Erase years of coffee, tea, and turmeric stains in under an hour",
    description:
      "Safe, enamel-friendly in-clinic whitening using European cold-light LED technology and protective gum barriers. Brighten your teeth up to 6 shades without enamel erosion or post-procedure tooth sensitivity.",
    duration: "45 mins single session",
    comfort: "Protected gum barrier",
    technology: "LED Cold-Light Technology",
    image: "/images/dental-smile.jpg",
    benefits: [
      "Noticeable 4 to 6 shade brightening in one session",
      "Protective gingival barrier shields sensitive gums",
      "Air-flow polishing cleans deep micro-stains",
      "Enamel-safe pH balanced dental formulation",
    ],
  },
  {
    id: "smile-makeover",
    tag: "Cosmetic Restoration",
    title: "Ultra-Thin Porcelain Veneers",
    subtitle: "Correct chips, gaps, and severe discoloration with bespoke ceramic laminates",
    description:
      "Handcrafted by master dental ceramists, 0.3mm ultra-thin porcelain veneers bond seamlessly over your natural teeth to create a radiant, harmonious smile. Pre-visualized digitally to match your exact facial symmetry.",
    duration: "2 clinical visits",
    comfort: "Minimal preparation",
    technology: "Digital Smile Design CAD/CAM",
    image: "/images/dental-hero.jpg",
    benefits: [
      "Ultra-thin 0.3mm porcelain preserves natural tooth enamel",
      "Stain-resistant glass ceramic that never dulls or yellows",
      "Complete aesthetic harmony with your facial proportions",
      "Digital mock-up review before final bonding",
    ],
  },
  {
    id: "preventive-care",
    tag: "Family Dentistry",
    title: "Preventive & Pediatric Care",
    subtitle: "Gentle ultrasonic cleaning, enamel sealants, and cavity defense",
    description:
      "Comprehensive preventive care for children and adults. Ultrasonic painless calculus removal, fluoride remineralization treatments, and cavity sealants to keep your family smiling without unexpected toothaches.",
    duration: "30 mins checkup",
    comfort: "Pleasant ultrasonic tip",
    technology: "Sub-gingival Ultrasonic Clean",
    image: "/images/dental-suite.jpg",
    benefits: [
      "Gentle ultrasonic plaque and tartar removal",
      "Fluoride varnish strengthens weakening tooth enamel",
      "Child-friendly atmosphere to eliminate dental anxiety",
      "Early orthodontic monitoring for growing children",
    ],
  },
];

export default function Treatments() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTreatment = TREATMENTS_LIST[activeTab];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white border-b border-[#D4E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#D4E5E9]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4F7] text-[#164E63] text-xs font-semibold mb-3">
              <span>Comprehensive Dental Specialties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#164E63] font-display tracking-tight leading-[1.12]">
              Precision treatments designed for lifelong dental health.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#475569] leading-relaxed">
            Every procedure at Sai Dental Clinic is guided by conservative dentistry—preserving your natural tooth structure first with computer-guided technology and biocompatible materials.
          </p>
        </div>

        {/* Treatment Interactive Navigation Tabs */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {TREATMENTS_LIST.map((treatment, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#164E63] text-white shadow-soft"
                    : "bg-[#F7F4EE] text-[#475569] hover:text-[#164E63] hover:bg-[#E8F4F7]"
                }`}
              >
                {treatment.title.split(" ")[0]} {treatment.title.split(" ")[1] || ""}
              </button>
            );
          })}
        </div>

        {/* Featured Treatment Spotlight Showcase (Asymmetrical Editorial Display) */}
        <div className="mt-8 rounded-3xl bg-[#F7F4EE] border border-[#D4E5E9] overflow-hidden shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] w-full bg-[#164E63]">
              <Image
                src={currentTreatment.image}
                alt={currentTreatment.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/85 via-[#164E63]/25 to-transparent pointer-events-none" />

              {/* In-Frame Frosted Glass Clinical Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-surface-dark text-white border border-white/20 shadow-glass flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F4F7] block">
                    Session Duration
                  </span>
                  <span className="text-sm font-bold text-white">
                    {currentTreatment.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F4F7] block">
                    Comfort Level
                  </span>
                  <span className="text-sm font-bold text-white">
                    {currentTreatment.comfort}
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Details Column */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#287D91] bg-white px-3 py-1 rounded-full border border-[#D4E5E9]">
                    {currentTreatment.tag}
                  </span>
                  <span className="text-xs text-[#475569]">
                    {currentTreatment.technology}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#164E63] font-display leading-tight">
                  {currentTreatment.title}
                </h3>

                <p className="text-sm sm:text-base text-[#1E293B]/90 leading-relaxed font-normal">
                  {currentTreatment.description}
                </p>

                {/* Benefits Checklist */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#164E63] block mb-3">
                    Clinical Advantages
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#1E293B]">
                    {currentTreatment.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#D4E5E9]/60">
                        <svg className="w-4 h-4 text-[#287D91] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="pt-4 border-t border-[#D4E5E9]/70 flex flex-wrap items-center gap-4">
                <a
                  href="#appointment-booking"
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-semibold shadow-soft transition-all duration-200"
                >
                  <span>Book Consultation for this Treatment</span>
                  <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href={`https://wa.me/919800000000?text=${encodeURIComponent(`Hello Sai Dental Clinic, I am inquiring about ${currentTreatment.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164E63] hover:text-[#287D91] transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#22C55E]" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257z" />
                  </svg>
                  <span>Quick WhatsApp Query</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Editorial Treatments Directory - Clean Table-Inspired Layout */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
              All Available Dental Procedures
            </h4>
            <span className="text-xs text-[#475569]">
              Transparent consultation &bull; Written estimates
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS_LIST.map((t, idx) => (
              <div
                key={t.id}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  activeTab === idx
                    ? "bg-[#E8F4F7]/70 border-[#287D91] shadow-soft"
                    : "bg-[#F7F4EE]/60 border-[#D4E5E9] hover:bg-[#F7F4EE] hover:border-[#164E63]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D4E5E9]/60 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#287D91]">
                      {t.tag}
                    </span>
                    <span className="text-xs font-mono text-[#475569]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h5 className="text-lg font-semibold text-[#164E63] font-display">
                    {t.title}
                  </h5>
                  <p className="text-xs text-[#475569] mt-2 line-clamp-2 leading-relaxed">
                    {t.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D4E5E9]/60 flex items-center justify-between text-xs">
                  <span className="text-[#164E63] font-medium">{t.duration}</span>
                  <span className="text-[#287D91] font-bold group-hover:translate-x-1 transition-transform">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
