import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">Clinic.com</span>
                <span className="ml-2 text-[10px] font-semibold bg-slate-800 text-teal-300 px-1.5 py-0.5 rounded border border-slate-700">
                  Demo Portal
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              A modern, patient-first outpatient clinic concept designed for accessible consultations, family health care, and routine preventive diagnostics.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div><strong>Emergency / Ambulance:</strong> Dial 112 or 108 across India</div>
              <div><strong>Demo Reception Desk:</strong> +91 98000 00000</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#specialties" className="hover:text-teal-400 transition-colors focus-visible:ring-1 focus-visible:ring-teal-400 rounded px-0.5">
                  Specialties & Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-teal-400 transition-colors focus-visible:ring-1 focus-visible:ring-teal-400 rounded px-0.5">
                  Doctors & Consultants
                </a>
              </li>
              <li>
                <a href="#timings" className="hover:text-teal-400 transition-colors focus-visible:ring-1 focus-visible:ring-teal-400 rounded px-0.5">
                  Clinic OPD Timings
                </a>
              </li>
              <li>
                <a href="#appointment-notice" className="hover:text-teal-400 transition-colors focus-visible:ring-1 focus-visible:ring-teal-400 rounded px-0.5">
                  Appointment Notice
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors focus-visible:ring-1 focus-visible:ring-teal-400 rounded px-0.5">
                  Clinic Address & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Important Medical Disclaimer
            </span>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                <strong>Preview Demonstration:</strong> This website is an architectural demo for <em>clinic.com</em>. Information presented here does not constitute medical advice, diagnosis, or establish a doctor-patient relationship.
              </p>
              <p>
                If you or someone around you is facing a critical or life-threatening medical emergency, immediately proceed to the nearest casualty / hospital emergency department or dial emergency services (112 / 108).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Clinic.com. All demonstration rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Phase 1 Frontend Preview</span>
            <span>&bull;</span>
            <span>Next.js App Router & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
