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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Clinical Specialties & Services */}
        <Specialties />

        {/* Doctor Roster (Demo Placeholders) */}
        <Doctors />

        {/* Appointment Notice & Contact Flow */}
        <AppointmentNotice />

        {/* Clinic & Consultation Schedule */}
        <Timings />

        {/* Physical Location & Contact Channels */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
