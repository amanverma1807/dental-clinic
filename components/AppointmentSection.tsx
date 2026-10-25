"use client";

import React, { useState } from "react";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "General Dental Checkup & Consultation",
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
    `Hello Sai Dental Clinic, I would like to book an appointment.\nName: ${formData.name || "Patient"}\nPhone: ${formData.phone || "Not provided"}\nService: ${formData.service}\nShift: ${formData.preferredShift}`
  )}`;

  return (
    <section
      id="appointment-booking"
      className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E3E8E3]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F4F4A] block mb-2">
            Easy Clinic Scheduling &bull; Front-Desk Confirmation
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#123B38] font-display tracking-tight leading-[1.12]">
            Book your dental consultation.
          </h2>
          <p className="mt-4 text-base text-[#334744]/90 leading-relaxed font-normal">
            Select your preferred time slot and service. Our clinic reception desk confirms every appointment by phone or WhatsApp to ensure zero waiting time when you arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#F8F6F0] rounded-3xl border border-[#E3E8E3] p-7 sm:p-10 shadow-glow">
            {submitted ? (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#DCE8DF] text-[#0F4F4A] flex items-center justify-center mx-auto shadow-soft">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-normal text-[#123B38] font-display">
                    Appointment Inquiry Recorded
                  </h3>
                  <p className="text-sm text-[#334744]/90 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#123B38]">{formData.name || "Patient"}</strong>. Your request for <span className="font-semibold text-[#0F4F4A]">{formData.service}</span> has been noted for our front desk.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E3E8E3] text-xs text-[#334744] space-y-1.5 text-left max-w-md mx-auto">
                  <strong className="block text-[#123B38] font-semibold">Front-Desk Confirmation Process (Demo Notice)</strong>
                  <p className="text-[#334744]/80">
                    To maintain clinical safety and schedule zero-wait operatory slots, all demo visits are confirmed by receptionist call or WhatsApp message.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-soft transition-all"
                  >
                    Confirm via WhatsApp &rarr;
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 rounded-full bg-white text-[#123B38] border border-[#E3E8E3] text-xs font-semibold hover:bg-[#F8F6F0] transition-all"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#E3E8E3]/80 pb-4 mb-4">
                  <span className="text-xs font-bold text-[#0F4F4A] uppercase tracking-wider block">
                    Patient Appointment Form
                  </span>
                  <p className="text-xs text-[#334744]/75 mt-0.5">
                    Fast reservation with our reception desk.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-bold text-[#123B38] uppercase tracking-wider mb-1.5">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    id="patient-name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E3E8E3] text-sm text-[#123B38] placeholder-[#334744]/40 focus:outline-none focus:ring-2 focus:ring-[#0F4F4A] transition-all"
                  />
                </div>

                {/* Phone & Service Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patient-phone" className="block text-xs font-bold text-[#123B38] uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="patient-phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E3E8E3] text-sm text-[#123B38] placeholder-[#334744]/40 focus:outline-none focus:ring-2 focus:ring-[#0F4F4A] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="patient-service" className="block text-xs font-bold text-[#123B38] uppercase tracking-wider mb-1.5">
                      Service / Concern *
                    </label>
                    <select
                      id="patient-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E3E8E3] text-sm text-[#123B38] focus:outline-none focus:ring-2 focus:ring-[#0F4F4A] transition-all"
                    >
                      <option value="General Dental Checkup & Consultation">General Dental Consultation</option>
                      <option value="Painless Root Canal Treatment">Painless Root Canal (RCT)</option>
                      <option value="Clear Aligners & Invisible Braces">Clear Aligners / Braces</option>
                      <option value="Permanent Dental Implants">Dental Implants</option>
                      <option value="Teeth Whitening & Scaling">Teeth Whitening & Cleaning</option>
                      <option value="Smile Makeover & Veneers">Porcelain Veneers / Makeover</option>
                      <option value="Emergency Tooth Pain Relief">Urgent Tooth Pain / Swelling</option>
                    </select>
                  </div>
                </div>

                {/* Shift & Date Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="patient-shift" className="block text-xs font-bold text-[#123B38] uppercase tracking-wider mb-1.5">
                      Preferred OPD Shift *
                    </label>
                    <select
                      id="patient-shift"
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E3E8E3] text-sm text-[#123B38] focus:outline-none focus:ring-2 focus:ring-[#0F4F4A] transition-all"
                    >
                      <option value="Morning OPD (09:30 AM – 01:30 PM)">Morning OPD (09:30 AM – 01:30 PM)</option>
                      <option value="Evening OPD (05:00 PM – 08:30 PM)">Evening OPD (05:00 PM – 08:30 PM)</option>
                      <option value="Sunday Slot (10:00 AM – 01:30 PM)">Sunday Slot (10:00 AM – 01:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="patient-date" className="block text-xs font-bold text-[#123B38] uppercase tracking-wider mb-1.5">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="patient-date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E3E8E3] text-sm text-[#123B38] focus:outline-none focus:ring-2 focus:ring-[#0F4F4A] transition-all"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full min-h-[50px] inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0F4F4A] hover:bg-[#123B38] text-white text-sm font-semibold shadow-soft hover:shadow-glow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4F4A]"
                >
                  Request Consultation Appointment &rarr;
                </button>

                <p className="text-[11px] text-center text-[#334744]/75">
                  No advance payment needed. Front desk will contact you to confirm timing.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Instant Direct Helpline Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Box */}
            <div className="p-7 rounded-3xl bg-[#F8F6F0] border border-[#E3E8E3] space-y-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-soft">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.535 3.69 1.463 5.215L2 22l4.896-1.428A9.972 9.972 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.257c-1.592 0-3.08-.43-4.364-1.182l-.312-.185-3.23.942.946-3.149-.204-.326A8.22 8.22 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F4F4A] block">
                    Instant Booking
                  </span>
                  <h3 className="text-lg font-bold text-[#123B38]">
                    WhatsApp Front Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#334744]/85 leading-relaxed font-normal">
                Want to book immediately without filling forms? Chat directly with our dental coordinator on WhatsApp for same-day emergency slots or treatment inquiries.
              </p>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-soft transition-all"
              >
                Chat on WhatsApp Now &rarr;
              </a>
            </div>

            {/* Telephone Helpline */}
            <div className="p-7 rounded-3xl bg-[#F8F6F0] border border-[#E3E8E3] space-y-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0F4F4A] text-white flex items-center justify-center shrink-0 shadow-soft">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F4F4A] block">
                    Direct Reception Line
                  </span>
                  <a
                    href="tel:+919800000000"
                    className="text-lg font-bold text-[#123B38] hover:text-[#0F4F4A] transition-colors"
                  >
                    +91 98000 00000
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#334744]/80 leading-relaxed font-normal">
                Helpline active during OPD shifts (09:30 AM – 08:30 PM). If experiencing acute swelling or trauma, alert reception immediately for prioritized doctor attention.
              </p>
            </div>

            {/* Clinical Notice on Transparency */}
            <div className="p-5 rounded-2xl bg-white border border-[#E3E8E3] text-xs text-[#334744] space-y-2">
              <strong className="block text-[#123B38] font-bold">
                Patient Consultation Advisory:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-[#334744]/85">
                <li>Please bring previous dental X-rays (OPGs) or medical history if available.</li>
                <li>Wheelchair ramp access is available at the clinic front entrance.</li>
                <li>Digital X-rays and 3D intraoral scans are performed chairside.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
