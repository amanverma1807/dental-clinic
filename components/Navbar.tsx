"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Advisory Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-400 text-slate-950 uppercase tracking-wider">
              Demo Portal
            </span>
            <span>Emergency / Ambulance Services in India: Dial <strong>112</strong> or <strong>108</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400">OPD Desk (Demo):</span>
            <a
              href="tel:+919800000000"
              className="text-teal-300 font-semibold hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-teal-400 rounded px-1"
            >
              +91 98000 00000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shadow-xs group-hover:bg-teal-800 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
                Clinic.com
              </span>
              <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                Demo
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Outpatient & Family Health Clinic
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a
            href="#specialties"
            className="hover:text-teal-700 transition-colors focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1"
          >
            Specialties & Services
          </a>
          <a
            href="#doctors"
            className="hover:text-teal-700 transition-colors focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1"
          >
            Doctors
          </a>
          <a
            href="#timings"
            className="hover:text-teal-700 transition-colors focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1"
          >
            Clinic Timings
          </a>
          <a
            href="#contact"
            className="hover:text-teal-700 transition-colors focus-visible:ring-1 focus-visible:ring-teal-600 rounded px-1"
          >
            Location & Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#appointment-notice"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-teal-600"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1 font-medium text-slate-800">
            <a
              href="#specialties"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Specialties & Services
            </a>
            <a
              href="#doctors"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Doctors
            </a>
            <a
              href="#timings"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Clinic Timings
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Location & Contact
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#appointment-notice"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-semibold shadow-xs"
            >
              Book Appointment (Demo Notice)
            </a>
            <a
              href="tel:+919800000000"
              className="w-full inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-semibold hover:bg-slate-50"
            >
              Call Clinic Desk: +91 98000 00000
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
