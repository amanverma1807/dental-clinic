"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    // Small delay ensures mobile drawer is closed and DOM reflow has completed
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 60);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#D4E5E9]/80 shadow-[0_4px_20px_-2px_rgba(22,78,99,0.08)]"
          : "bg-white/90 backdrop-blur-sm border-b border-[#D4E5E9]/60"
      }`}
    >
      {/* Top Advisory Bar */}
      <div className="bg-[#164E63] text-white text-[11px] py-1.5 px-3 sm:px-6 border-b border-[#287D91]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
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
        className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-[#287D91] rounded-xl shrink min-w-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#164E63] to-[#287D91] text-white flex items-center justify-center shadow-soft shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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

          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-xl font-normal text-[#164E63] font-display tracking-tight leading-tight truncate">
              Sai Dental Clinic
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#475569] font-medium tracking-wide truncate hidden xs:block">
              Indiranagar, Bengaluru
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1E293B]">
          <a
            href="#treatments"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("treatments");
            }}
            className="hover:text-[#164E63] transition-colors cursor-pointer"
          >
            Treatments
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="hover:text-[#164E63] transition-colors cursor-pointer"
          >
            About Clinic
          </a>
          <a
            href="#why-us"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("why-us");
            }}
            className="hover:text-[#164E63] transition-colors cursor-pointer"
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hover:text-[#164E63] transition-colors cursor-pointer"
          >
            Contact & Timings
          </a>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Main Book Appointment Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center justify-center min-h-[36px] sm:min-h-[40px] px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white font-semibold text-xs tracking-wide shadow-soft transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap touch-manipulation"
          >
            <span className="inline sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Appointment</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-[#164E63] hover:bg-[#E8F4F7] active:bg-[#E8F4F7] transition-colors cursor-pointer shrink-0 border border-[#D4E5E9]/70 touch-manipulation"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D4E5E9] bg-white/98 backdrop-blur-xl px-4 py-4 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-2.5 text-sm font-medium text-[#1E293B]">
            <a
              href="#treatments"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("treatments");
              }}
              className="py-2 text-left border-b border-[#E8F4F7] flex items-center justify-between text-[#1E293B] hover:text-[#164E63] cursor-pointer touch-manipulation"
            >
              <span>Treatments</span>
              <span className="text-[#287D91] text-xs">&rarr;</span>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="py-2 text-left border-b border-[#E8F4F7] flex items-center justify-between text-[#1E293B] hover:text-[#164E63] cursor-pointer touch-manipulation"
            >
              <span>About Clinic & Doctor</span>
              <span className="text-[#287D91] text-xs">&rarr;</span>
            </a>
            <a
              href="#why-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("why-us");
              }}
              className="py-2 text-left border-b border-[#E8F4F7] flex items-center justify-between text-[#1E293B] hover:text-[#164E63] cursor-pointer touch-manipulation"
            >
              <span>Why Choose Us</span>
              <span className="text-[#287D91] text-xs">&rarr;</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="py-2 text-left border-b border-[#E8F4F7] flex items-center justify-between text-[#1E293B] hover:text-[#164E63] cursor-pointer touch-manipulation"
            >
              <span>Appointment & Location</span>
              <span className="text-[#287D91] text-xs">&rarr;</span>
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="w-full inline-flex items-center justify-center min-h-[42px] rounded-xl bg-[#164E63] text-white text-xs font-semibold shadow-soft cursor-pointer touch-manipulation"
              >
                Book Appointment Now &rarr;
              </a>
              <div className="flex items-center justify-between text-xs text-[#475569] pt-1">
                <a href="tel:+919800000000" className="font-semibold text-[#164E63]">
                  Call: +91 98000 00000
                </a>
                <span className="text-[#22C55E] font-semibold">&bull; OPD Open</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
