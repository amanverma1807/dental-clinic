"use client";

import React, { useState } from "react";

/**
 * CLINIC WHATSAPP CONFIGURATION
 * Replace CLINIC_PHONE_NUMBER with your registered WhatsApp Business number for production.
 * Format: Country code without '+' followed by phone digits (e.g., '919800000000' for India).
 */
const CLINIC_PHONE_NUMBER = "919800000000"; // Configurable demo placeholder
const DEFAULT_MESSAGE = "Hello Sai Dental Clinic, I would like to inquire about booking a dental consultation.";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${CLINIC_PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on Desktop Hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#164E63] text-white text-xs font-medium shadow-md border border-white/20 transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
        role="tooltip"
        id="whatsapp-tooltip"
      >
        <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
        <span>Chat with Clinic Reception</span>
      </div>

      {/* Floating Breathing Button with subtle zoom-in/zoom-out */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sai Dental Clinic on WhatsApp for appointments and inquiries"
        aria-describedby="whatsapp-tooltip"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] animate-whatsapp-float transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2"
      >
        {/* Subtle breathing glowing halo */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/25 -z-10 blur-sm scale-110 pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257zm4.524-6.177c-.248-.124-1.466-.723-1.694-.805-.227-.082-.393-.124-.559.124-.165.248-.641.805-.786.971-.144.165-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.737-.658-1.235-1.47-1.38-1.718-.144-.248-.015-.382.109-.505.112-.111.248-.29.372-.435.124-.144.165-.248.248-.413.082-.165.041-.31-.021-.435-.062-.124-.559-1.346-.765-1.844-.201-.486-.405-.419-.559-.427-.144-.007-.31-.009-.476-.009-.165 0-.435.062-.662.31-.227.248-.869.849-.869 2.071 0 1.222.89 2.403 1.014 2.568.124.165 1.751 2.673 4.242 3.748.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.478-.071 1.466-.599 1.673-1.178.207-.579.207-1.075.144-1.178-.062-.103-.227-.165-.475-.289z" />
        </svg>

        {/* Small live active indicator dot */}
        <span
          className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs"
          aria-hidden="true"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#164E63]" />
        </span>
      </a>
    </div>
  );
}
