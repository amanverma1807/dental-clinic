"use client";

import React, { useState } from "react";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Painless Root Canal",
    preferredShift: "Morning OPD (09:30 AM – 01:30 PM)",
    preferredDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/919800000000?text=${encodeURIComponent(
    `Hello Sai Dental Clinic, I would like to book an appointment for ${formData.name}. Treatment: ${formData.service}. Shift: ${formData.preferredShift}. Phone: ${formData.phone}`
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#FAF8F5] border-b border-[#D4E5E9] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#287D91] block mb-1.5">
            Book Visit &amp; Location
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#164E63] font-display tracking-tight">
            Schedule your appointment or visit our clinic.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Essential Clinic Info & Timings - Sharp Rectangles */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 border border-[#D4E5E9] shadow-soft space-y-5">
            <div>
              <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block mb-1">
                Clinic Address &amp; Connectivity
              </span>
              <p className="text-sm font-semibold text-[#164E63]">
                Sai Dental Clinic &amp; Implant Centre
              </p>
              <p className="text-xs text-[#475569] mt-0.5">
                Ground Floor, 12th Main Road, Indiranagar, Bengaluru &ndash; 560038
              </p>
              <p className="text-xs text-[#287D91] mt-1 font-medium">
                Landmark: Opposite Central Park, 150m from Metro Exit 2
              </p>
              <p className="text-[11px] text-[#475569] mt-1">
                &bull; Ground-floor step-free access &bull; Dedicated parking
              </p>
            </div>

            <div className="pt-4 border-t border-[#D4E5E9]/70">
              <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block mb-1.5">
                OPD Consultation Timings
              </span>
              <div className="space-y-1 text-xs text-[#1E293B]">
                <div className="flex justify-between">
                  <span className="text-[#475569]">Morning Shift:</span>
                  <span className="font-semibold text-[#164E63]">09:30 AM &ndash; 01:30 PM (Mon&ndash;Sat)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Evening Shift:</span>
                  <span className="font-semibold text-[#164E63]">05:00 PM &ndash; 08:30 PM (Mon&ndash;Sat)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Sunday Clinic:</span>
                  <span className="font-semibold text-[#287D91]">10:00 AM &ndash; 01:30 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4E5E9]/70 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:+919800000000"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#E8F4F7] text-[#164E63] text-xs font-bold border border-[#D4E5E9] hover:bg-[#DCE8DF] transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98000 00000</span>
              </a>

              <a
                href="https://wa.me/919800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#22C55E]/15 text-[#164E63] text-xs font-bold border border-[#22C55E]/30 hover:bg-[#22C55E]/25 transition-colors"
              >
                <span className="w-2 h-2 bg-[#22C55E]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Appointment Booking Form - Sharp Rectangles */}
          <div id="appointment-booking" className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#D4E5E9] shadow-soft">
            {submitted ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-12 h-12 bg-[#E8F4F7] text-[#164E63] flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-[#287D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-normal text-[#164E63] font-display">
                    Appointment Request Recorded
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Thank you, <strong className="text-[#164E63]">{formData.name || "Patient"}</strong>. Our reception desk will confirm your slot for <span className="font-semibold text-[#164E63]">{formData.service}</span>.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[42px] px-5 py-2 bg-[#22C55E] text-white text-xs font-semibold shadow-soft hover:bg-[#1eb353] transition-colors"
                  >
                    Confirm via WhatsApp &rarr;
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[42px] px-4 py-2 bg-[#F7F4EE] text-[#164E63] border border-[#D4E5E9] text-xs font-semibold hover:bg-white transition-colors cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4E5E9]/60 pb-3">
                  <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider">
                    Quick Reservation Form
                  </span>
                  <span className="text-[11px] text-[#475569]">Zero Waiting Slots</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="name-input" className="text-xs font-bold text-[#164E63] block">
                      Patient Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone-input" className="text-xs font-bold text-[#164E63] block">
                      Phone Number *
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="treatment-input" className="text-xs font-bold text-[#164E63] block">
                    Treatment Needed *
                  </label>
                  <select
                    id="treatment-input"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                  >
                    <option value="Painless Root Canal">Painless Single-Sitting Root Canal</option>
                    <option value="Invisible Clear Aligners">Invisible Clear Aligners &amp; Braces</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Teeth Whitening">In-Clinic Teeth Whitening</option>
                    <option value="Porcelain Veneers">Porcelain Veneers &amp; Smile Design</option>
                    <option value="Preventive &amp; Kids Care">General Checkup &amp; Preventive Care</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="shift-input" className="text-xs font-bold text-[#164E63] block">
                      Preferred OPD Shift
                    </label>
                    <select
                      id="shift-input"
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                    >
                      <option value="Morning OPD (09:30 AM – 01:30 PM)">Morning Shift (09:30 AM &ndash; 01:30 PM)</option>
                      <option value="Evening OPD (05:00 PM – 08:30 PM)">Evening Shift (05:00 PM &ndash; 08:30 PM)</option>
                      <option value="Sunday Clinic (10:00 AM – 01:30 PM)">Sunday Morning (10:00 AM &ndash; 01:30 PM)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="date-input" className="text-xs font-bold text-[#164E63] block">
                      Preferred Date
                    </label>
                    <input
                      id="date-input"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-semibold shadow-soft transition-all duration-200 cursor-pointer active:scale-98"
                >
                  <span>Request Appointment</span>
                  <span className="ml-1.5">&rarr;</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
