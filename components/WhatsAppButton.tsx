"use client";

import React, { useState, useEffect } from "react";

/**
 * CLINIC WHATSAPP CONFIGURATION
 * Replace CLINIC_PHONE_NUMBER with your registered WhatsApp Business number for production.
 * Format: Country code without '+' followed by phone digits (e.g., '919800000000' for India).
 */
const CLINIC_PHONE_NUMBER = "919800000000"; // Configurable demo placeholder
const DEFAULT_MESSAGE = "Hello Sai Dental Clinic, I would like to inquire about booking a dental consultation.";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("General Dental Inquiry");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const directWhatsappUrl = `https://wa.me/${CLINIC_PHONE_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  const handlePreChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (cleanPhone.length < 8) {
      setErrorMessage("Please enter a valid phone number (min 8 digits).");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save explicitly into Supabase with source 'whatsapp'
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          treatment: treatment,
          message: `WhatsApp consultation request from website visitor for ${treatment}.`,
          source: "whatsapp",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not record enquiry");
      }

      // 2. Format prefilled WhatsApp message with patient's name and treatment
      const customMessage = `Hello Sai Dental Clinic, my name is ${name.trim()}. I would like to consult with the doctor regarding ${treatment}. Phone: ${phone.trim()}`;
      const targetUrl = `https://wa.me/${CLINIC_PHONE_NUMBER}?text=${encodeURIComponent(customMessage)}`;

      // 3. Open WhatsApp and close modal
      setModalOpen(false);
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving consultation request";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        data-whatsapp-rounded="true"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip on Desktop Hover - Rounded Pill */}
        <div
          style={{ borderRadius: "9999px" }}
          className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#164E63] text-white text-xs font-medium shadow-md border border-white/20 transition-all duration-300 ${
            isHovered && !modalOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
          role="tooltip"
          id="whatsapp-tooltip"
        >
          <span
            style={{ borderRadius: "9999px" }}
            className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"
            aria-hidden="true"
          />
          <span>Chat with Clinic Reception</span>
        </div>

        {/* Floating Breathing Button - Strictly Circular */}
        <button
          type="button"
          onClick={() => setModalOpen(!modalOpen)}
          aria-label="Open WhatsApp consultation desk"
          aria-describedby="whatsapp-tooltip"
          style={{ borderRadius: "9999px" }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] animate-whatsapp-float transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2 cursor-pointer"
        >
          {/* Subtle breathing glowing halo */}
          <span
            style={{ borderRadius: "9999px" }}
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

          {/* Small live active indicator dot - Circular */}
          <span
            style={{ borderRadius: "9999px" }}
            className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs"
            aria-hidden="true"
          >
            <span
              style={{ borderRadius: "9999px" }}
              className="w-2.5 h-2.5 rounded-full bg-[#164E63]"
            />
          </span>
        </button>
      </div>

      {/* Pre-Chat Consultation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs">
          <div
            className="w-full max-w-md bg-white border border-[#D4E5E9] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            {/* Header */}
            <div className="bg-[#164E63] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257z" />
                  </svg>
                </div>
                <div>
                  <h3 id="whatsapp-modal-title" className="text-sm font-bold text-white">
                    Sai Dental Clinic &bull; WhatsApp Desk
                  </h3>
                  <p className="text-[11px] text-[#E8F4F7]/80">
                    Direct reception consultation &bull; Typical reply: 5 mins
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-white/80 hover:text-white p-1 text-sm font-bold cursor-pointer"
                aria-label="Close WhatsApp dialog"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handlePreChatSubmit} className="p-5 space-y-3.5 bg-white text-[#1E293B]">
              <p className="text-xs text-[#475569] leading-relaxed">
                Enter your details to connect with our clinical team. Your inquiry will be logged securely for faster doctor triage.
              </p>

              {errorMessage && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#164E63] block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#164E63] block">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98000 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#164E63] block">
                  Treatment / Reason for Visit
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none bg-white"
                >
                  <option value="General Dental Inquiry">General Dental Inquiry</option>
                  <option value="Painless Root Canal">Painless Root Canal</option>
                  <option value="Invisible Clear Aligners">Invisible Clear Aligners</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Porcelain Veneers">Porcelain Veneers</option>
                  <option value="Tooth Pain / Emergency">Tooth Pain / Emergency</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center min-h-[42px] px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] disabled:bg-slate-300 text-white text-xs font-bold shadow-soft transition-colors cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Connecting to WhatsApp...</span>
                  </span>
                ) : (
                  <span>Continue to WhatsApp Chat &rarr;</span>
                )}
              </button>

              <div className="text-center pt-1 border-t border-[#D4E5E9]/60">
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setModalOpen(false)}
                  className="text-[11px] text-[#287D91] hover:underline inline-block pt-1"
                >
                  Skip &amp; open WhatsApp directly without saving details &rarr;
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
