import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Doctors from "@/components/Doctors";
import AppointmentNotice from "@/components/AppointmentNotice";
import Timings from "@/components/Timings";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#334744]" suppressHydrationWarning>
      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 flex flex-col">
        {/* Split-Layout Hero Section */}
        <Hero />

        {/* Clinical Specialties & Services */}
        <Specialties />

        {/* Consultant Doctor Roster (Sample Profiles) */}
        <Doctors />

        {/* Appointment Notice & Scheduling Information */}
        <AppointmentNotice />

        {/* Clinic & Outpatient Consultation Timings */}
        <Timings />

        {/* Physical Location & Contact Details */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
