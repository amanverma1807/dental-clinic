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
          ? "bg-white/90 backdrop-blur-md border-b border-[#D4E5E9]/80 shadow-[0_4px_20px_-2px_rgba(22,78,99,0.08)]"
          : "bg-white/80 backdrop-blur-sm border-b border-[#D4E5E9]/50"
      }`}
    >
      {/* Top Advisory Bar */}
      <div className="bg-[#164E63] text-white text-[11px] py-1.5 px-4 sm:px-6 border-b border-[#287D91]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#287D91]/60 text-white text-[10px] font-semibold border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
              <span>Demo</span>
            </span>
            <span className="text-[#E8F4F7]/90 hidden sm:inline">
              Helpline:{" "}
              <a href="tel:+919800000000" className="font-semibold text-white hover:text-[#E8F4F7]">
                +91 98000 00000
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#E8F4F7]/85">
            <span className="hidden md:inline">Mon–Sat 9:30 AM–8:30 PM &bull; Sun 10 AM–1:30 PM</span>
            <a
              href="https://wa.me/919800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-[#E8F4F7] font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-[#22C55E]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-6"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#287D91] rounded-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#164E63] to-[#287D91] text-white flex items-center justify-center shadow-soft">
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
                strokeWidth={1.75}
                d="M7 4c-2.2 0-4 1.8-4 4 0 3 1.5 6 3 9.5 1 2.3 2.5 3.5 4 3.5 1.5 0 2-1.5 2-3 0-1.5.5-2 2-2s2 .5 2 2c0 1.5.5 3 2 3 1.5 0 3-1.2 4-3.5 1.5-3.5 3-6.5 3-9.5 0-2.2-1.8-4-4-4-2 0-3.5 1.2-5 3C9.5 5.2 9 4 7 4z"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-normal text-[#164E63] font-display tracking-tight leading-tight">
              Sai Dental Clinic
            </span>
            <span className="text-[10px] text-[#475569] font-medium tracking-wide">
              Multi-Speciality & Implant Centre
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1E293B]">
          <a href="#treatments" className="hover:text-[#164E63] transition-colors">
            Treatments
          </a>
          <a href="#about" className="hover:text-[#164E63] transition-colors">
            About Clinic
          </a>
          <a href="#why-us" className="hover:text-[#164E63] transition-colors">
            Why Choose Us
          </a>
          <a href="#contact" className="hover:text-[#164E63] transition-colors">
            Contact & Timings
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[40px] px-5 py-2 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white font-semibold text-xs tracking-wide shadow-soft transition-all duration-200 active:scale-95"
          >
            <span>Book Appointment</span>
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#164E63] hover:bg-[#E8F4F7] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D4E5E9] bg-white/98 backdrop-blur-xl px-5 py-5 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#1E293B]">
            <a href="#treatments" onClick={closeMenu} className="py-2 border-b border-[#E8F4F7]">
              Treatments
            </a>
            <a href="#about" onClick={closeMenu} className="py-2 border-b border-[#E8F4F7]">
              About Clinic & Dentist
            </a>
            <a href="#why-us" onClick={closeMenu} className="py-2 border-b border-[#E8F4F7]">
              Why Choose Us
            </a>
            <a href="#contact" onClick={closeMenu} className="py-2 border-b border-[#E8F4F7]">
              Appointment & Location
            </a>
            <div className="pt-2 flex items-center justify-between text-xs text-[#475569]">
              <a href="tel:+919800000000" className="font-semibold text-[#164E63]">
                Call: +91 98000 00000
              </a>
              <span className="text-[#22C55E] font-semibold">OPD Open</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
