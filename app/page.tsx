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
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1E293B] relative selection:bg-[#E8F4F7] selection:text-[#164E63]">
      {/* Refined Glassmorphic Header & Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 flex flex-col">
        {/* Editorial High-Impact Dental Hero Section */}
        <Hero />

        {/* Seamless Continuous Horizontal Marquee Announcement Ticker */}
        <MarqueeStrip />

        {/* Visual Showcase & Comprehensive Dental Treatments */}
        <Treatments />

        {/* Patient Experience, European Class-B Sterilization & Gentle Care */}
        <PatientExperience />

        {/* Certified Dental Specialists & Implantologist Roster */}
        <Doctors />

        {/* Prominent Appointment Booking & Interactive Request Form */}
        <AppointmentSection />

        {/* Weekly OPD Timings & Consultation Shifts */}
        <Timings />

        {/* Physical Location, Landmark Directions & Accessibility */}
        <LocationContact />
      </main>

      {/* Polished Dental Luxury Footer */}
      <Footer />

      {/* Subtle Floating WhatsApp Breathing Button */}
      <WhatsAppButton />
    </div>
  );
}
