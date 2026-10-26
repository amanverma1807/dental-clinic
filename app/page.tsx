import React from "react";
import Navbar from "@/components/Navbar";
import MarqueeStrip from "@/components/MarqueeStrip";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Doctors from "@/components/Doctors";
import PatientExperience from "@/components/PatientExperience";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getDoctorProfile, getTreatments } from "@/lib/data";

export const instant = false;

export default async function Home() {
  const [doctor, treatments] = await Promise.all([
    getDoctorProfile(),
    getTreatments(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EE] text-[#1E293B] relative selection:bg-[#E8F4F7] selection:text-[#164E63]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section with dynamic doctor profile */}
        <Hero doctor={doctor} />

        {/* Continuous Announcement Ticker */}
        <MarqueeStrip />

        {/* 2. Key Treatments loaded dynamically from Supabase database */}
        <Treatments treatments={treatments} />

        {/* 3. About the Dentist & Clinic */}
        <Doctors doctor={doctor} />

        {/* 4. Why Choose Us (4 clear clinical standards) */}
        <PatientExperience />

        {/* 5. Appointment & Contact (Unified with Timings & Location) */}
        <AppointmentSection />
      </main>

      {/* 6. Polished Footer */}
      <Footer />

      {/* Floating WhatsApp Breathing Button with Pre-Chat Form */}
      <WhatsAppButton />
    </div>
  );
}
