import React from "react";
import Navbar from "@/components/Navbar";
import MarqueeStrip from "@/components/MarqueeStrip";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import PatientExperience from "@/components/PatientExperience";
import Doctors from "@/components/Doctors";
import AppointmentSection from "@/components/AppointmentSection";
import Timings from "@/components/Timings";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#334744] relative">
      {/* Top Header & Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 flex flex-col">
        {/* Split-Layout Art-Directed Hero Section */}
        <Hero />

        {/* Required Animation: Continuous Horizontal Announcement Ticker */}
        <MarqueeStrip />

        {/* Comprehensive Dental Treatments & Cosmetic Aligners */}
        <Treatments />

        {/* Patient Experience, Pain-Free Philosophy & Class-B Sterilization */}
        <PatientExperience />

        {/* Certified Dental Specialists & Implantologist Roster */}
        <Doctors />

        {/* Prominent Appointment Booking & Interactive Request Form */}
        <AppointmentSection />

        {/* Weekly OPD Timings & Outpatient Consultation Shifts */}
        <Timings />

        {/* Physical Location, Landmark Directions & Accessibility */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Required Animation: Fixed Floating WhatsApp Breathing Button */}
      <WhatsAppButton />
    </div>
  );
}
