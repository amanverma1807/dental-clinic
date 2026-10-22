"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E3E8E3]">
      {/* Top Advisory Strip */}
      <div className="bg-[#123B38] text-[#E3E8E3] text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#DCE8DF] text-[#123B38] uppercase tracking-wider">
              Demo Portal
            </span>
            <span>Emergency / Ambulance Assistance in India: Dial <strong>112</strong> or <strong>108</strong></span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline text-slate-300">OPD Desk Enquiries:</span>
            <a
              href="tel:+919800000000"
              className="text-[#DCE8DF] font-semibold hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-[#DCE8DF] rounded px-1"
            >
              +91 98000 00000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#0F4F4A] rounded-lg p-1"
        >
          <span className="w-11 h-11 rounded-xl bg-[#0F4F4A] text-white flex items-center justify-center shadow-xs group-hover:bg-[#123B38] transition-colors">
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
          </span>
          <span>
            <span className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-[#123B38]">
                CarePoint Clinic
              </span>
              <span className="text-[10px] font-semibold bg-[#DCE8DF] text-[#0F4F4A] px-1.5 py-0.5 rounded border border-[#E3E8E3]">
                Demo
              </span>
            </span>
            <span className="block text-xs text-[#334744]/80 font-medium">
              Multi-Specialty Healthcare
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#334744]">
          <a
            href="#specialties"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Specialties
          </a>
          <a
            href="#doctors"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Our Doctors
          </a>
          <a
            href="#timings"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Clinic Timings
          </a>
          <a
            href="#contact"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Location & Contact
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#appointment-notice"
            className="inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 rounded-xl bg-[#0F4F4A] hover:bg-[#123B38] text-white text-sm font-semibold shadow-xs hover:shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A] focus-visible:ring-offset-2"
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
            Book an Appointment
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-lg text-[#123B38] hover:bg-[#F8F6F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
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
        <div className="lg:hidden border-t border-[#E3E8E3] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1 font-medium text-[#123B38]">
            <a
              href="#specialties"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F6F0] transition-colors"
            >
              Specialties
            </a>
            <a
              href="#doctors"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F6F0] transition-colors"
            >
              Our Doctors
            </a>
            <a
              href="#timings"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F6F0] transition-colors"
            >
              Clinic Timings
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-lg hover:bg-[#F8F6F0] transition-colors"
            >
              Location & Contact
            </a>
          </div>

          <div className="pt-2 border-t border-[#E3E8E3] flex flex-col gap-2.5">
            <a
              href="#appointment-notice"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center min-h-[46px] px-4 py-2.5 rounded-xl bg-[#0F4F4A] text-white text-sm font-semibold shadow-xs hover:bg-[#123B38]"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+919800000000"
              className="w-full inline-flex items-center justify-center min-h-[46px] px-4 py-2.5 rounded-xl border border-[#E3E8E3] text-[#123B38] text-sm font-semibold hover:bg-[#F8F6F0]"
            >
              Call Clinic Desk: +91 98000 00000
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
