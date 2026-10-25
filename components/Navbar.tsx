"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E3E8E3]/80">
      {/* Top Advisory & Helpline Strip */}
      <div className="bg-[#123B38] text-[#E3E8E3] text-[11px] py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#DCE8DF] text-[#123B38] uppercase tracking-wider">
              Demo Portal
            </span>
            <span className="text-[#DCE8DF]/90">
              Immediate Tooth Pain & Emergency Dental Helpline: <strong>+91 98000 00000</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline text-[#DCE8DF]/75">
              OPD Hours: Mon–Sat 9:30 AM – 8:30 PM
            </span>
            <span className="hidden sm:inline text-[#DCE8DF]/40">&bull;</span>
            <a
              href="https://wa.me/919800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DCE8DF] font-semibold hover:text-white transition-colors underline decoration-[#DCE8DF]/40 underline-offset-2"
            >
              WhatsApp Us &rarr;
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
          className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-[#0F4F4A] rounded-xl p-1"
        >
          {/* Custom Stylized Tooth / Dental Crown Icon */}
          <div className="w-11 h-11 rounded-2xl bg-[#0F4F4A] text-white flex items-center justify-center shadow-soft group-hover:bg-[#123B38] transition-all duration-300">
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
                strokeWidth={1.8}
                d="M7 4c-2.2 0-4 1.8-4 4 0 3 1.5 6 3 9.5 1 2.3 2.5 3.5 4 3.5 1.5 0 2-1.5 2-3 0-1.5.5-2 2-2s2 .5 2 2c0 1.5.5 3 2 3 1.5 0 3-1.2 4-3.5 1.5-3.5 3-6.5 3-9.5 0-2.2-1.8-4-4-4-2 0-3.5 1.2-5 3C9.5 5.2 9 4 7 4z"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-normal tracking-tight text-[#123B38] font-display">
                Sai Dental Clinic
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-[#DCE8DF] text-[#0F4F4A] px-1.5 py-0.5 rounded">
                Demo
              </span>
            </div>
            <span className="block text-[11px] text-[#334744]/80 font-medium tracking-wide">
              Advanced Multispeciality & Implant Centre
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#334744]">
          <a
            href="#treatments"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Treatments
          </a>
          <a
            href="#experience"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Comfort & Sterilization
          </a>
          <a
            href="#specialists"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Dental Specialists
          </a>
          <a
            href="#timings"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            OPD Timings
          </a>
          <a
            href="#location"
            className="hover:text-[#0F4F4A] transition-colors focus-visible:ring-1 focus-visible:ring-[#0F4F4A] rounded px-1 py-1"
          >
            Location
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+919800000000"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123B38] hover:text-[#0F4F4A] px-3 py-2 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-[#0F4F4A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+91 98000 00000</span>
          </a>

          <a
            href="#appointment-booking"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-[#0F4F4A] hover:bg-[#123B38] text-white text-xs font-semibold shadow-soft hover:shadow-glow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A] focus-visible:ring-offset-2"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-xl text-[#123B38] hover:bg-[#F8F6F0] transition-colors focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
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
        <div className="lg:hidden border-t border-[#E3E8E3] bg-[#FFFFFF] px-5 pt-4 pb-7 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1.5 font-medium text-[#123B38]">
            <a
              href="#treatments"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F8F6F0] transition-colors text-sm"
            >
              Dental Treatments & Procedures
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F8F6F0] transition-colors text-sm"
            >
              Comfort & Sterilization Standards
            </a>
            <a
              href="#specialists"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F8F6F0] transition-colors text-sm"
            >
              Our Dental Specialists
            </a>
            <a
              href="#timings"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F8F6F0] transition-colors text-sm"
            >
              OPD Timings & Shifts
            </a>
            <a
              href="#location"
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-xl hover:bg-[#F8F6F0] transition-colors text-sm"
            >
              Clinic Location & Directions
            </a>
          </div>

          <div className="pt-3 border-t border-[#E3E8E3] flex flex-col gap-2.5">
            <a
              href="#appointment-booking"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center min-h-[48px] px-4 py-2.5 rounded-full bg-[#0F4F4A] text-white text-sm font-semibold shadow-soft"
            >
              Book Consultation Now
            </a>
            <a
              href="tel:+919800000000"
              className="w-full inline-flex items-center justify-center min-h-[48px] px-4 py-2.5 rounded-full border border-[#E3E8E3] text-[#123B38] text-sm font-semibold hover:bg-[#F8F6F0]"
            >
              Call Clinic Desk: +91 98000 00000
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
