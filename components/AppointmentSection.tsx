"use client";

import React, { useState } from "react";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Painless Single-Sitting Root Canal",
    preferredShift: "Morning OPD (09:30 AM – 01:30 PM)",
    preferredDate: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/919800000000?text=${encodeURIComponent(
    `Hello Sai Dental Clinic, I would like to confirm my consultation booking.\nName: ${formData.name || "Patient"}\nPhone: ${formData.phone || "Not provided"}\nTreatment: ${formData.service}\nPreferred Shift: ${formData.preferredShift}\nDate: ${formData.preferredDate || "Earliest available"}`
  )}`;

  return (
    <section
      id="appointment-booking"
      className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#D4E5E9]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4F7] text-[#164E63] text-xs font-semibold mb-3">
            <span>Priority Consultation &bull; Front-Desk Confirmation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#164E63] font-display tracking-tight leading-[1.12]">
            Book your dental consultation.
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            Select your preferred treatment and time slot. Our reception desk confirms every appointment directly to guarantee zero waiting time when you walk in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Expectation Setting & Patient Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#D4E5E9] shadow-card space-y-5">
              <h3 className="text-xl font-normal text-[#164E63] font-display">
                What to expect during your visit
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#1E293B]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    1
                  </div>
                  <div>
                    <strong className="block text-[#164E63]">Zero Waiting Policy</strong>
                    <span className="text-[#475569]">Scheduled slots ensure your operatory chair is sanitized and ready.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    2
                  </div>
                  <div>
                    <strong className="block text-[#164E63]">Intraoral 4K Camera View</strong>
                    <span className="text-[#475569]">Watch your teeth on chairside monitor before any treatment is begun.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    3
                  </div>
                  <div>
                    <strong className="block text-[#164E63]">Clear Written Estimates</strong>
                    <span className="text-[#475569]">No surprise fees. You receive itemized options before proceeding.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#E8F4F7] text-[#164E63] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    4
                  </div>
                  <div>
                    <strong className="block text-[#164E63]">Painless Numbing Gel</strong>
                    <span className="text-[#475569]">Topical anesthetic applied to ensure comfortable, painless procedures.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Quick Card */}
            <div className="bg-[#164E63] text-white p-7 rounded-3xl space-y-4 shadow-soft">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F4F7] block">
                Immediate Assistance
              </span>
              <p className="text-sm text-[#E8F4F7]/90 leading-relaxed">
                Need urgent assistance for acute toothache or facial swelling? Call our dental triage desk directly.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919800000000"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#164E63] text-xs font-bold hover:bg-[#E8F4F7] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call +91 98000 00000</span>
                </a>
                <a
                  href="https://wa.me/919800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#287D91] text-white text-xs font-bold hover:bg-[#287D91]/80 transition-colors"
                >
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Form with Tasteful Glass Surface */}
          <div className="lg:col-span-7 glass-surface rounded-3xl border border-white/90 p-7 sm:p-10 shadow-glass">
            {submitted ? (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#E8F4F7] text-[#164E63] flex items-center justify-center mx-auto shadow-soft">
                  <svg className="w-8 h-8 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-[#164E63] font-display">
                    Consultation Request Recorded
                  </h3>
                  <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#164E63]">{formData.name || "Patient"}</strong>. Your request for <span className="font-semibold text-[#287D91]">{formData.service}</span> has been logged with our front desk.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#D4E5E9] text-xs text-[#1E293B] space-y-1.5 text-left max-w-md mx-auto">
                  <strong className="block text-[#164E63] font-semibold">Front-Desk Confirmation (Demo Notice)</strong>
                  <p className="text-[#475569]">
                    To maintain clinical scheduling and avoid waiting times, all visits are confirmed by our receptionist via phone call or WhatsApp message.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#22C55E] hover:bg-[#1eb353] text-white text-xs font-semibold shadow-soft transition-all"
                  >
                    Confirm via WhatsApp &rarr;
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 rounded-full bg-white text-[#164E63] border border-[#D4E5E9] text-xs font-semibold hover:bg-[#F7F4EE] transition-all cursor-pointer"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#D4E5E9]/80 pb-4 mb-4">
                  <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block">
                    Patient Appointment Form
                  </span>
                  <p className="text-xs text-[#475569] mt-0.5">
                    Fast reservation with our reception desk.
                  </p>
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="patient-name" className="text-xs font-bold text-[#164E63] block">
                      Full Name *
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Ankit Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4E5E9] bg-white text-sm text-[#1E293B] focus:border-[#287D91] focus:ring-1 focus:ring-[#287D91] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="patient-phone" className="text-xs font-bold text-[#164E63] block">
                      Phone Number *
                    </label>
                    <input
                      id="patient-phone"
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4E5E9] bg-white text-sm text-[#1E293B] focus:border-[#287D91] focus:ring-1 focus:ring-[#287D91] outline-none"
                    />
                  </div>
                </div>

                {/* Treatment Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="service-select" className="text-xs font-bold text-[#164E63] block">
                    Dental Specialty or Treatment *
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D4E5E9] bg-white text-sm text-[#1E293B] focus:border-[#287D91] focus:ring-1 focus:ring-[#287D91] outline-none"
                  >
                    <option value="Painless Single-Sitting Root Canal">Painless Single-Sitting Root Canal Treatment</option>
                    <option value="Invisible Clear Aligners">Invisible Clear Aligners & Invisible Braces</option>
                    <option value="Swiss & German Dental Implants">Swiss & German Dental Implants</option>
                    <option value="Ultra-Thin Porcelain Veneers">Porcelain Veneers & Smile Makeovers</option>
                    <option value="Teeth Whitening">In-Office Cold-Light Teeth Whitening</option>
                    <option value="General Checkup & Scaling">General Dental Checkup & Ultrasonic Cleaning</option>
                    <option value="Acute Dental Pain / Emergency">Acute Tooth Pain / Emergency Relief</option>
                  </select>
                </div>

                {/* Preferred Shift & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="shift-select" className="text-xs font-bold text-[#164E63] block">
                      Preferred OPD Shift
                    </label>
                    <select
                      id="shift-select"
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4E5E9] bg-white text-sm text-[#1E293B] focus:border-[#287D91] focus:ring-1 focus:ring-[#287D91] outline-none"
                    >
                      <option value="Morning OPD (09:30 AM – 01:30 PM)">Morning OPD (09:30 AM – 01:30 PM)</option>
                      <option value="Evening OPD (05:00 PM – 08:30 PM)">Evening OPD (05:00 PM – 08:30 PM)</option>
                      <option value="Sunday Clinic (10:00 AM – 01:30 PM)">Sunday Clinic (10:00 AM – 01:30 PM)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="appointment-date" className="text-xs font-bold text-[#164E63] block">
                      Preferred Date
                    </label>
                    <input
                      id="appointment-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D4E5E9] bg-white text-sm text-[#1E293B] focus:border-[#287D91] focus:ring-1 focus:ring-[#287D91] outline-none"
                    />
                  </div>
                </div>

                {/* Optional Notes */}
                <div className="space-y-1.5">
                  <label htmlFor="notes" className="text-xs font-bold text-[#164E63] block">
                    Describe your dental concern (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    placeholder="e.g. Sensitivity to cold water on lower right molar"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D4E5E9] bg-white text-sm text-[#1E293B] focus:border-[#287D91] focus:ring-1 focus:ring-[#287D91] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-full bg-[#164E63] hover:bg-[#287D91] text-white text-sm font-semibold shadow-soft hover:shadow-glow transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <span>Submit Appointment Reservation</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-[11px] text-center text-[#475569] pt-1">
                  We maintain strict patient medical confidentiality &bull; No spam calls
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
