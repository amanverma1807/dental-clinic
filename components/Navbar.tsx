"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#D4E5E9]/80 shadow-[0_4px_24px_-4px_rgba(22,78,99,0.08)]"
          : "bg-white/80 backdrop-blur-sm border-b border-[#D4E5E9]/50"
      }`}
    >
      {/* Top Advisory Bar */}
      <div className="bg-[#164E63] text-white text-xs py-2 px-4 sm:px-6 border-b border-[#287D91]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#287D91]/60 text-white text-[10px] font-semibold tracking-wide border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
              <span>Demo Preview</span>
            </span>
            <span className="text-[#E8F4F7]/90 text-[11px] hidden sm:inline">
              Emergency Dental Helpline:{" "}
              <a href="tel:+919800000000" className="font-semibold text-white hover:text-[#E8F4F7] underline underline-offset-2">
                +91 98000 00000
              </a>
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] text-[#E8F4F7]/85">
            <span className="hidden md:inline">
              OPD: Mon–Sat 9:30 AM – 8:30 PM &bull; Sun 10:00 AM – 1:30 PM
            </span>
            <a
              href="https://wa.me/919800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#E8F4F7] font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-[#22C55E]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257z" />
              </svg>
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-6"
        aria-label="Main Navigation"
      >
        {/* Brand Identity / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-[#287D91] rounded-xl p-1"
        >
          {/* Refined Dental Insignia */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#164E63] to-[#287D91] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(22,78,99,0.22)] group-hover:shadow-[0_8px_24px_rgba(40,125,145,0.35)] transition-all duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M7 4c-2.2 0-4 1.8-4 4 0 3 1.5 6 3 9.5 1 2.3 2.5 3.5 4 3.5 1.5 0 2-1.5 2-3 0-1.5.5-2 2-2s2 .5 2 2c0 1.5.5 3 2 3 1.5 0 3-1.2 4-3.5 1.5-3.5 3-6.5 3-9.5 0-2.2-1.8-4-4-4-2 0-3.5 1.2-5 3C9.5 5.2 9 4 7 4z"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-normal text-[#164E63] font-display tracking-tight leading-none">
                Sai Dental Clinic
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-[#E8F4F7] text-[#164E63] px-1.5 py-0.5 rounded-full border border-[#D4E5E9]">
                Demo
              </span>
            </div>
            <span className="text-[11px] text-[#475569] font-medium tracking-wide mt-0.5">
              Multi-Speciality & Implant Centre
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#1E293B]">
          <a
            href="#treatments"
            className="text-[#1E293B] hover:text-[#164E63] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#287D91] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
          >
            Treatments
          </a>
          <a
            href="#experience"
            className="text-[#1E293B] hover:text-[#164E63] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#287D91] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
          >
            Hygiene & Standards
          </a>
          <a
            href="#specialists"
            className="text-[#1E293B] hover:text-[#164E63] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#287D91] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
          >
            Specialists
          </a>
          <a
            href="#timings"
            className="text-[#1E293B] hover:text-[#164E63] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#287D91] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
          >
            OPD Timings
          </a>
          <a
            href="#location"
            className="text-[#1E293B] hover:text-[#164E63] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#287D91] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
          >
            Clinic Location
          </a>
        </div>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3.5">
          <a
            href="tel:+919800000000"
            className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#164E63] hover:text-[#287D91] transition-colors px-3 py-2"
          >
            <svg className="w-4 h-4 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+91 98000 00000</span>
          </a>

          <a
            href="#appointment-booking"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white font-semibold text-xs tracking-wide shadow-[0_4px_16px_rgba(22,78,99,0.2)] hover:shadow-[0_6px_22px_rgba(40,125,145,0.3)] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287D91]"
          >
            <span>Book Consultation</span>
            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#appointment-booking"
            className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-full bg-[#164E63] text-white text-[11px] font-semibold"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#164E63] hover:bg-[#E8F4F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#287D91]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D4E5E9] bg-white/95 backdrop-blur-xl px-5 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4 text-base font-medium text-[#1E293B]">
            <a
              href="#treatments"
              onClick={closeMenu}
              className="py-2 border-b border-[#E8F4F7] hover:text-[#164E63] transition-colors flex items-center justify-between"
            >
              <span>Treatments & Aligners</span>
              <span className="text-xs text-[#287D91]">&rarr;</span>
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="py-2 border-b border-[#E8F4F7] hover:text-[#164E63] transition-colors flex items-center justify-between"
            >
              <span>Hygiene & European Autoclave</span>
              <span className="text-xs text-[#287D91]">&rarr;</span>
            </a>
            <a
              href="#specialists"
              onClick={closeMenu}
              className="py-2 border-b border-[#E8F4F7] hover:text-[#164E63] transition-colors flex items-center justify-between"
            >
              <span>Dental Specialists</span>
              <span className="text-xs text-[#287D91]">&rarr;</span>
            </a>
            <a
              href="#timings"
              onClick={closeMenu}
              className="py-2 border-b border-[#E8F4F7] hover:text-[#164E63] transition-colors flex items-center justify-between"
            >
              <span>OPD Consultation Timings</span>
              <span className="text-xs text-[#287D91]">&rarr;</span>
            </a>
            <a
              href="#location"
              onClick={closeMenu}
              className="py-2 border-b border-[#E8F4F7] hover:text-[#164E63] transition-colors flex items-center justify-between"
            >
              <span>Clinic Location & Directions</span>
              <span className="text-xs text-[#287D91]">&rarr;</span>
            </a>

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#appointment-booking"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center min-h-[46px] rounded-xl bg-[#164E63] text-white font-semibold text-sm shadow-soft"
              >
                Book Dental Consultation
              </a>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#D4E5E9] text-xs font-semibold text-[#164E63] bg-white"
                >
                  <svg className="w-3.5 h-3.5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Reception</span>
                </a>
                <a
                  href="https://wa.me/919800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#22C55E]/40 text-xs font-semibold text-[#164E63] bg-[#E8F4F7]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
