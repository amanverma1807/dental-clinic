import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#123B38] text-[#E3E8E3] border-t border-[#0F4F4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-[#0F4F4A] text-white flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <span>
                <span className="text-xl font-bold tracking-tight text-white font-display">CarePoint Clinic</span>
                <span className="ml-2 text-[10px] font-semibold bg-[#0F4F4A] text-[#DCE8DF] px-1.5 py-0.5 rounded border border-[#0F4F4A]">
                  Demo
                </span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#DCE8DF]/80 leading-relaxed max-w-md">
              A modern, patient-first outpatient clinic providing compassionate, high-quality primary care, specialist consultations, and preventive health checkups under one roof.
            </p>

            <div className="pt-2 text-xs text-[#DCE8DF]/90 space-y-1">
              <div><strong>National Emergency / Ambulance:</strong> Dial 112 or 108 across India</div>
              <div><strong>Clinic Reception Desk (Demo):</strong> +91 98000 00000</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DCE8DF]/80">
              <li>
                <a href="#specialties" className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-[#DCE8DF] rounded px-0.5">
                  Medical Specialties
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-[#DCE8DF] rounded px-0.5">
                  Our Consultant Doctors
                </a>
              </li>
              <li>
                <a href="#timings" className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-[#DCE8DF] rounded px-0.5">
                  Clinic & OPD Timings
                </a>
              </li>
              <li>
                <a href="#appointment-notice" className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-[#DCE8DF] rounded px-0.5">
                  Appointment Information
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-[#DCE8DF] rounded px-0.5">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Medical Disclaimer
            </span>
            <div className="p-4 rounded-xl bg-[#0F4F4A]/60 border border-[#0F4F4A] text-xs text-[#DCE8DF] space-y-2 leading-relaxed">
              <p>
                <strong>Preview Demonstration:</strong> This website is an architectural demo for CarePoint Clinic. Content presented is for informational purposes only and does not establish a medical contract or doctor-patient relationship.
              </p>
              <p>
                For urgent or life-threatening medical emergencies, please immediately visit the nearest hospital emergency room or dial emergency services (<strong>112 / 108</strong>).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#0F4F4A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE8DF]/70">
          <p>&copy; 2026 CarePoint Clinic. All demonstration rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Modern Indian Multi-Specialty Healthcare</span>
            <span>&bull;</span>
            <span>Next.js App Router & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
