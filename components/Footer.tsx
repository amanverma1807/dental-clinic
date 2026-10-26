import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#164E63] text-[#E8F4F7] border-t border-[#287D91]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="w-10 h-10 bg-[#287D91] text-white flex items-center justify-center font-bold shadow-soft">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M7 4c-2.2 0-4 1.8-4 4 0 3 1.5 6 3 9.5 1 2.3 2.5 3.5 4 3.5 1.5 0 2-1.5 2-3 0-1.5.5-2 2-2s2 .5 2 2c0 1.5.5 3 2 3 1.5 0 3-1.2 4-3.5 1.5-3.5 3-6.5 3-9.5 0-2.2-1.8-4-4-4-2 0-3.5 1.2-5 3C9.5 5.2 9 4 7 4z"
                  />
                </svg>
              </span>
              <div>
                <span className="text-xl font-normal tracking-tight text-white font-display block">
                  Sai Dental Clinic
                </span>
                <span className="text-[11px] text-[#E8F4F7]/80 font-medium block">
                  Multi-Speciality & Implant Centre
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#E8F4F7]/85 leading-relaxed max-w-md font-normal">
              Gentle, conservative dentistry crafted for Indian families. Offering single-sitting painless root canals, invisible clear aligners, precision Swiss implants, and smile aesthetics under strict European Class-B sterilization.
            </p>

            <div className="pt-2 text-xs text-[#E8F4F7]/90 space-y-1">
              <div>
                <strong>Clinic Reception & Booking:</strong>{" "}
                <a href="tel:+919800000000" className="underline hover:text-white">
                  +91 98000 00000
                </a>
              </div>
              <div>
                <strong>OPD Schedule:</strong> Mon&ndash;Sat 09:30 AM &ndash; 08:30 PM | Sun 10:00 AM &ndash; 01:30 PM
              </div>
            </div>
          </div>

          {/* Core Dental Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Core Treatments
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E8F4F7]/80">
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Painless Root Canal Treatment
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Clear Aligners & Invisible Braces
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Permanent Swiss Dental Implants
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Cold-Light Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Porcelain Veneers & Smile Design
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Preventive & Pediatric Care
                </a>
              </li>
            </ul>
          </div>

          {/* Demonstration Notice & Medical Advisory */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Demonstration & Clinical Notice
            </span>
            <div className="p-4 bg-white/10 border border-white/10 text-xs text-[#E8F4F7] space-y-2 leading-relaxed">
              <p>
                <strong>Demo Website:</strong> This website is an agency demonstration build for Sai Dental Clinic. All credentials, doctor schedules, and contact details are placeholders designed for portfolio preview.
              </p>
              <p className="text-[#E8F4F7]/80">
                In case of dental emergencies or severe trauma, call our helpline (+91 98000 00000) or visit the nearest emergency facility.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8F4F7]/70">
          <p>&copy; 2026 Sai Dental Clinic & Implant Centre. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>European Class-B Sterilization Standard</span>
            <span>&bull;</span>
            <span>Designed for Portfolio Showcase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
