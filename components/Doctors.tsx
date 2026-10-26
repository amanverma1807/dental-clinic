"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_DOCTOR_CONFIG } from "./doctorAsset";
import { DoctorProfile } from "@/lib/types";

export default function Doctors({ doctor }: { doctor?: DoctorProfile }) {
  const doc = doctor || CLINIC_DOCTOR_CONFIG;

  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F7F4EE] border-b border-[#D4E5E9] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-[#D4E5E9] overflow-hidden shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Doctor Portrait Column - Uses centralized doctor asset config */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-[400px] w-full bg-[#164E63]">
              <Image
                src={doc.imageSrc}
                alt={doc.altText || doc.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#164E63]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 glass-surface-dark text-white text-xs flex items-center justify-between">
                <span className="font-semibold text-white">{doc.qualifications}</span>
                <span className="text-[11px] text-[#E8F4F7]">{doc.experience}</span>
              </div>
            </div>

            {/* Clinic & Doctor Bio Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#287D91] block">
                About The Clinic &amp; Doctor
              </span>

              <h2 className="text-2xl sm:text-3xl font-normal text-[#164E63] font-display tracking-tight">
                Led by {doc.name} &amp; Consultant Specialists
              </h2>

              <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed font-normal">
                {doc.bio || "At Sai Dental Clinic, our philosophy centers on conservative dentistry, patient comfort, and strict European Class-B sterilization. From single-visit painless root canals to computer-guided dental implants, we provide honest diagnoses with zero unnecessary treatments."}
              </p>

              {/* Core Clinical Focus Badges - Sharp Rectangles */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 bg-[#E8F4F7] text-[#164E63] text-xs font-semibold border border-[#D4E5E9]">
                  Dental Implants
                </span>
                <span className="px-3 py-1 bg-[#E8F4F7] text-[#164E63] text-xs font-semibold border border-[#D4E5E9]">
                  Painless Root Canals
                </span>
                <span className="px-3 py-1 bg-[#E8F4F7] text-[#164E63] text-xs font-semibold border border-[#D4E5E9]">
                  Clear Aligners
                </span>
                <span className="px-3 py-1 bg-[#E8F4F7] text-[#164E63] text-xs font-semibold border border-[#D4E5E9]">
                  Smile Makeovers
                </span>
              </div>

              <div className="pt-3 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center min-h-[42px] px-5 py-2 bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-semibold transition-all duration-200"
                >
                  <span>Book Consultation With Doctor</span>
                  <span className="ml-1.5">&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
