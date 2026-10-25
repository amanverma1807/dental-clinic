import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#123B38] text-[#E3E8E3] border-t border-[#0F4F4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#0F4F4A] text-white flex items-center justify-center font-bold shadow-soft">
                <svg
                  className="w-5 h-5"
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
                <span className="text-[11px] text-[#DCE8DF]/75 font-medium block">
                  Advanced Multispeciality & Implant Centre
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#DCE8DF]/80 leading-relaxed max-w-md font-normal">
              Gentle, conservative dentistry crafted for Indian families. Offering painless single-sitting root canals, invisible clear aligners, precision dental implants, and smile aesthetics under strict European Class-B sterilization.
            </p>

            <div className="pt-2 text-xs text-[#DCE8DF]/90 space-y-1">
              <div><strong>Clinic Reception & Booking:</strong> +91 98000 00000</div>
              <div><strong>OPD Schedule:</strong> Mon&ndash;Sat 09:30 AM &ndash; 08:30 PM | Sun 10 AM &ndash; 1:30 PM</div>
            </div>
          </div>

          {/* Quick Dental Services */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Core Treatments
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DCE8DF]/80">
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
                  Permanent Dental Implants
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Teeth Whitening & Air Polishing
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Porcelain Veneers & Smile Makeovers
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Preventive & Pediatric Dentistry
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Demonstration Disclaimer */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Clinical Disclaimer & Guidelines
            </span>
            <div className="p-4 rounded-2xl bg-[#0F4F4A]/60 border border-[#0F4F4A] text-xs text-[#DCE8DF] space-y-2 leading-relaxed">
              <p>
                <strong>Demonstration Preview:</strong> This website is an architectural design presentation for Sai Dental Clinic. Information presented is intended for client preview and does not establish a clinical contract or medical relationship.
              </p>
              <p>
                In case of dental trauma, knocked-out teeth, or extreme facial swelling, please call our emergency desk (+91 98000 00000) or visit the nearest hospital emergency room.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#0F4F4A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE8DF]/70">
          <p>&copy; 2026 Sai Dental Clinic & Implant Centre. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Sterilization: European Class-B Standard</span>
            <span>&bull;</span>
            <span>Next.js App Router & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
