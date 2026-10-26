"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Enquiry, Treatment, DoctorProfile } from "@/lib/types";

interface AdminDashboardProps {
  userEmail: string;
  userRole: string;
}

export default function AdminDashboard({ userEmail, userRole }: AdminDashboardProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "enquiries" | "doctor" | "treatments">("overview");

  // Notifications
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // -------------------------------------------------------------
  // ENQUIRIES STATE
  // -------------------------------------------------------------
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryError, setEnquiryError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Statistics
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    whatsapp: 0,
    website: 0,
    appointment: 0,
  });

  // Selected enquiry for details drawer
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [notesInput, setNotesInput] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Fetch enquiries
  const fetchEnquiries = useCallback(async () => {
    setEnquiryLoading(true);
    setEnquiryError(null);
    try {
      const params = new URLSearchParams({
        search,
        status: statusFilter,
        source: sourceFilter,
        sort: sortOrder,
        page: page.toString(),
        limit: "15",
      });

      const res = await fetch(`/api/admin/enquiries?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to load enquiries");
      }

      setEnquiries(data.enquiries || []);
      setTotalPages(data.totalPages || 1);
      setTotalCount(data.totalCount || 0);
      if (data.summary) {
        setStats(data.summary);
      }
    } catch (err: unknown) {
      setEnquiryError(err instanceof Error ? err.message : "Error loading enquiries");
    } finally {
      setEnquiryLoading(false);
    }
  }, [search, statusFilter, sourceFilter, sortOrder, page]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  // Update enquiry status
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setIsUpdatingStatus(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");

      showToast(`Status updated to ${newStatus}`);
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, status: newStatus as any });
      }
      fetchEnquiries();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Update failed", "error");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Save admin notes
  const handleSaveNotes = async (id: string) => {
    setIsSavingNotes(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, admin_notes: notesInput }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");

      showToast("Notes updated");
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, admin_notes: notesInput });
      }
      fetchEnquiries();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Save failed", "error");
    } finally {
      setIsSavingNotes(false);
    }
  };

  // Delete enquiry
  const handleDeleteEnquiry = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");

      showToast("Enquiry deleted");
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(null);
      }
      setConfirmDeleteId(null);
      fetchEnquiries();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Delete failed", "error");
    }
  };

  // -------------------------------------------------------------
  // DOCTOR PROFILE STATE
  // -------------------------------------------------------------
  const [doctorForm, setDoctorForm] = useState<DoctorProfile>({
    name: "",
    qualifications: "",
    experience: "",
    rating: "4.9",
    roleLabel: "Senior Specialist",
    imageSrc: "/images/dentist-doctor.jpg",
    altText: "",
    bio: "",
    isDemoPlaceholder: true,
  });
  const [doctorLoading, setDoctorLoading] = useState(false);
  const [doctorSaving, setDoctorSaving] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  // Fetch doctor profile
  const fetchDoctorProfile = useCallback(async () => {
    setDoctorLoading(true);
    try {
      const res = await fetch("/api/admin/doctor");
      const data = await res.json();
      if (res.ok && data.doctor) {
        setDoctorForm(data.doctor);
      }
    } catch (err) {
      console.error("Doctor fetch error:", err);
    } finally {
      setDoctorLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "doctor") {
      fetchDoctorProfile();
    }
  }, [activeTab, fetchDoctorProfile]);

  // Handle local image file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Upload image to Supabase Storage
  const handleUploadImage = async () => {
    if (!selectedFile) return null;
    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("folder", "doctors");

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Image upload failed");

      return data.publicUrl as string;
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Upload failed", "error");
      return null;
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Save Doctor Profile
  const handleSaveDoctor = async (e: React.FormEvent) => {
    e.preventDefault();
    setDoctorSaving(true);

    try {
      let finalImageSrc = doctorForm.imageSrc;

      if (selectedFile) {
        const uploadedUrl = await handleUploadImage();
        if (!uploadedUrl) {
          throw new Error("Could not upload doctor image. Please try again.");
        }
        finalImageSrc = uploadedUrl;
      }

      const res = await fetch("/api/admin/doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...doctorForm,
          imageSrc: finalImageSrc,
          isDemoPlaceholder: false, // Updated with actual clinic config
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");

      setDoctorForm(data.doctor);
      setSelectedFile(null);
      setPreviewUrl(null);
      showToast("Doctor profile & media updated everywhere on website!");
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Failed to save profile", "error");
    } finally {
      setDoctorSaving(false);
    }
  };

  // -------------------------------------------------------------
  // TREATMENTS STATE
  // -------------------------------------------------------------
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [treatmentsLoading, setTreatmentsLoading] = useState(false);
  const [editingTreatment, setEditingTreatment] = useState<Treatment | null>(null);
  const [isTreatmentModalOpen, setIsTreatmentModalOpen] = useState(false);
  const [treatmentSaving, setTreatmentSaving] = useState(false);
  const [confirmDeleteTreatmentId, setConfirmDeleteTreatmentId] = useState<string | null>(null);

  // Fetch treatments
  const fetchTreatments = useCallback(async () => {
    setTreatmentsLoading(true);
    try {
      const res = await fetch("/api/admin/treatments");
      const data = await res.json();
      if (res.ok && data.treatments) {
        setTreatments(data.treatments);
      }
    } catch (err) {
      console.error("Treatments fetch error:", err);
    } finally {
      setTreatmentsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "treatments") {
      fetchTreatments();
    }
  }, [activeTab, fetchTreatments]);

  // Save treatment
  const handleSaveTreatment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTreatment) return;
    setTreatmentSaving(true);

    try {
      const res = await fetch("/api/admin/treatments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingTreatment),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save treatment");

      showToast(editingTreatment.id ? "Treatment updated!" : "New treatment added!");
      setIsTreatmentModalOpen(false);
      setEditingTreatment(null);
      fetchTreatments();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Error saving treatment", "error");
    } finally {
      setTreatmentSaving(false);
    }
  };

  // Toggle treatment publish
  const handleTogglePublish = async (treatment: Treatment) => {
    try {
      const res = await fetch("/api/admin/treatments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: treatment.id,
          title: treatment.title,
          slug: treatment.slug,
          benefit: treatment.benefit,
          published: !treatment.published,
          display_order: treatment.display_order,
        }),
      });

      if (!res.ok) throw new Error("Toggle failed");
      showToast(`Treatment ${!treatment.published ? "Published" : "Hidden from website"}`);
      fetchTreatments();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Action failed", "error");
    }
  };

  // Delete treatment
  const handleDeleteTreatment = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/treatments?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");

      showToast("Treatment deleted successfully");
      setConfirmDeleteTreatmentId(null);
      fetchTreatments();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Delete failed", "error");
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Format date helper
  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  // Clean phone for WhatsApp / tel
  const getCleanPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10) return `91${digits}`;
    return digits;
  };

  // Source Badge renderer
  const renderSourceBadge = (source: string) => {
    switch (source) {
      case "whatsapp":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
            <span>🟢</span>
            <span>WhatsApp</span>
          </span>
        );
      case "appointment":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
            <span>📅</span>
            <span>Appointment Form</span>
          </span>
        );
      case "phone":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">
            <span>📞</span>
            <span>Phone Call</span>
          </span>
        );
      case "website":
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300">
            <span>🌐</span>
            <span>Website Form</span>
          </span>
        );
    }
  };

  // Status Badge renderer
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
            New
          </span>
        );
      case "contacted":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
            Contacted
          </span>
        );
      case "resolved":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
            Resolved
          </span>
        );
      case "spam":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 bg-rose-100 text-rose-800 text-[11px] font-bold uppercase tracking-wider">
            Spam
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1E293B] flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 border shadow-lg text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200 ${
            toastMessage.type === "success"
              ? "bg-[#164E63] text-white border-[#287D91]"
              : "bg-red-600 text-white border-red-700"
          }`}
        >
          <span>{toastMessage.type === "success" ? "✓" : "⚠"}</span>
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-[#164E63] text-white border-b border-[#287D91]/40 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#287D91] text-white flex items-center justify-center font-bold shadow-soft">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight block leading-tight">
                Sai Dental Clinic &bull; Admin CMS
              </span>
              <span className="text-[10px] text-[#E8F4F7]/80 block">
                {userEmail} &bull; <strong className="text-[#22C55E] uppercase">{userRole}</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-[#E8F4F7] transition-colors"
            >
              <span>View Live Website</span>
              <span className="text-xs">&nearr;</span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-red-600/80 hover:bg-red-600 text-white transition-colors cursor-pointer"
            >
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto border-t border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === "overview"
                ? "border-white text-white bg-white/10"
                : "border-transparent text-[#E8F4F7]/70 hover:text-white"
            }`}
          >
            <span>📊</span>
            <span>Dashboard Overview</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("enquiries")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === "enquiries"
                ? "border-white text-white bg-white/10"
                : "border-transparent text-[#E8F4F7]/70 hover:text-white"
            }`}
          >
            <span>📬</span>
            <span>Enquiry Management</span>
            {stats.new > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-amber-400 text-slate-900 text-[10px] font-bold">
                {stats.new} new
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("doctor")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === "doctor"
                ? "border-white text-white bg-white/10"
                : "border-transparent text-[#E8F4F7]/70 hover:text-white"
            }`}
          >
            <span>👨‍⚕️</span>
            <span>Doctor Profile &amp; Photo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("treatments")}
            className={`py-3 px-4 font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === "treatments"
                ? "border-white text-white bg-white/10"
                : "border-transparent text-[#E8F4F7]/70 hover:text-white"
            }`}
          >
            <span>🩺</span>
            <span>Treatment Services</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* ========================================================= */}
        {/* TAB 1: OVERVIEW                                           */}
        {/* ========================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D4E5E9] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
                  Reception &amp; Clinic Overview
                </h2>
                <p className="text-xs text-[#475569]">
                  Real-time database statistics and patient enquiry trends.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fetchEnquiries()}
                  className="px-3 py-1.5 bg-white text-[#164E63] border border-[#D4E5E9] hover:bg-[#E8F4F7] text-xs font-semibold cursor-pointer"
                >
                  ↻ Refresh Data
                </button>
              </div>
            </div>

            {/* 5 Real Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {/* Total Enquiries */}
              <div className="bg-white p-4 border border-[#D4E5E9] shadow-soft">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#475569] block">
                  Total Enquiries
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#164E63] block mt-1">
                  {stats.total}
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Logged in PostgreSQL
                </span>
              </div>

              {/* New / Unread */}
              <div className="bg-white p-4 border border-blue-200 bg-blue-50/20 shadow-soft">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block">
                  New / Unread
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-blue-700 block mt-1">
                  {stats.new}
                </span>
                <span className="text-[11px] text-blue-600 block mt-0.5">
                  Requires reception follow-up
                </span>
              </div>

              {/* WhatsApp Enquiries */}
              <div className="bg-white p-4 border border-emerald-200 bg-emerald-50/20 shadow-soft">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  🟢 WhatsApp
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-emerald-700 block mt-1">
                  {stats.whatsapp}
                </span>
                <span className="text-[11px] text-emerald-600 block mt-0.5">
                  Pre-chat consultation leads
                </span>
              </div>

              {/* Website Form */}
              <div className="bg-white p-4 border border-slate-200 shadow-soft">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#475569] block">
                  🌐 Website Form
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#164E63] block mt-1">
                  {stats.website}
                </span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  General inquiries
                </span>
              </div>

              {/* Appointment Booking */}
              <div className="bg-white p-4 border border-sky-200 bg-sky-50/20 shadow-soft col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                  📅 Appointments
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-sky-700 block mt-1">
                  {stats.appointment}
                </span>
                <span className="text-[11px] text-sky-600 block mt-0.5">
                  Scheduled slot bookings
                </span>
              </div>
            </div>

            {/* Quick Actions & Recent Enquiries Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Recent Enquiries */}
              <div className="lg:col-span-8 bg-white border border-[#D4E5E9] shadow-soft p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-[#D4E5E9] pb-3 mb-4">
                  <h3 className="text-base font-bold text-[#164E63]">
                    Recent Inquiries
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab("enquiries")}
                    className="text-xs font-semibold text-[#287D91] hover:underline cursor-pointer"
                  >
                    View All Enquiries &rarr;
                  </button>
                </div>

                {enquiryLoading && (
                  <div className="py-8 text-center text-xs text-[#64748B]">
                    Loading recent enquiries...
                  </div>
                )}

                {!enquiryLoading && enquiries.length === 0 && (
                  <div className="py-8 text-center text-xs text-[#64748B]">
                    No enquiries recorded yet. Once patients submit forms or WhatsApp inquiries, they will appear here.
                  </div>
                )}

                <div className="space-y-3">
                  {enquiries.slice(0, 5).map((enq) => (
                    <div
                      key={enq.id}
                      onClick={() => {
                        setSelectedEnquiry(enq);
                        setNotesInput(enq.admin_notes || "");
                        setActiveTab("enquiries");
                      }}
                      className="p-3.5 bg-[#FAF8F5] border border-[#D4E5E9] hover:border-[#287D91] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#164E63] truncate">
                            {enq.name}
                          </span>
                          {renderStatusBadge(enq.status)}
                        </div>
                        <div className="text-xs text-[#475569] mt-0.5 flex flex-wrap items-center gap-2">
                          <span>📞 {enq.phone}</span>
                          <span>&bull;</span>
                          <span className="text-[#164E63] font-medium">{enq.treatment || "General Consultation"}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {renderSourceBadge(enq.source)}
                        <span className="text-[11px] text-[#64748B]">
                          {formatDate(enq.created_at)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: CMS Quick Jumps & Shortcuts */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white border border-[#D4E5E9] shadow-soft p-5 space-y-3">
                  <h3 className="text-sm font-bold text-[#164E63] uppercase tracking-wider">
                    Quick Navigation
                  </h3>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab("enquiries")}
                      className="w-full text-left p-3 bg-[#FAF8F5] hover:bg-[#E8F4F7] border border-[#D4E5E9] text-xs font-semibold text-[#164E63] flex items-center justify-between cursor-pointer"
                    >
                      <span>Manage Patient Enquiries</span>
                      <span>&rarr;</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("doctor")}
                      className="w-full text-left p-3 bg-[#FAF8F5] hover:bg-[#E8F4F7] border border-[#D4E5E9] text-xs font-semibold text-[#164E63] flex items-center justify-between cursor-pointer"
                    >
                      <span>Update Doctor Photo &amp; Bio</span>
                      <span>&rarr;</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("treatments")}
                      className="w-full text-left p-3 bg-[#FAF8F5] hover:bg-[#E8F4F7] border border-[#D4E5E9] text-xs font-semibold text-[#164E63] flex items-center justify-between cursor-pointer"
                    >
                      <span>Manage Treatments &amp; Services</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>

                {/* WhatsApp Architecture Notice */}
                <div className="bg-[#FAF8F5] border border-[#D4E5E9] p-5 text-xs text-[#475569] space-y-2">
                  <span className="font-bold text-[#164E63] block">
                    WhatsApp Architecture Note
                  </span>
                  <p className="leading-relaxed">
                    Our pre-chat form saves lead details to PostgreSQL with source <strong className="text-emerald-700">🟢 WhatsApp</strong> before opening WhatsApp.
                  </p>
                  <p className="text-[11px] text-[#64748B]">
                    Automatically reading patient replies inside WhatsApp requires Meta Cloud API webhooks. Our pre-chat flow ensures you never lose contact numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: ENQUIRY MANAGEMENT (HIGHEST PRIORITY)             */}
        {/* ========================================================= */}
        {activeTab === "enquiries" && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4E5E9] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
                  Patient Enquiries Desk
                </h2>
                <p className="text-xs text-[#475569]">
                  Central repository of web forms, appointment requests, and WhatsApp leads ({totalCount} total).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fetchEnquiries()}
                  className="px-3 py-1.5 bg-white text-[#164E63] border border-[#D4E5E9] hover:bg-[#E8F4F7] text-xs font-semibold cursor-pointer"
                >
                  ↻ Refresh
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 border border-[#D4E5E9] shadow-soft grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Search */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#164E63] block uppercase tracking-wider">
                  Search Patient / Phone
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh or +91..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-1.5 border border-[#D4E5E9] text-xs text-[#1E293B] focus:border-[#287D91] outline-none"
                />
              </div>

              {/* Status Filter */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#164E63] block uppercase tracking-wider">
                  Filter by Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-1.5 border border-[#D4E5E9] text-xs text-[#1E293B] focus:border-[#287D91] outline-none bg-white"
                >
                  <option value="all">All Statuses ({stats.total})</option>
                  <option value="new">New / Unread ({stats.new})</option>
                  <option value="contacted">Contacted</option>
                  <option value="resolved">Resolved</option>
                  <option value="spam">Spam</option>
                </select>
              </div>

              {/* Source Filter */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#164E63] block uppercase tracking-wider">
                  Filter by Source
                </label>
                <select
                  value={sourceFilter}
                  onChange={(e) => {
                    setSourceFilter(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-3 py-1.5 border border-[#D4E5E9] text-xs text-[#1E293B] focus:border-[#287D91] outline-none bg-white"
                >
                  <option value="all">All Sources</option>
                  <option value="whatsapp">🟢 WhatsApp ({stats.whatsapp})</option>
                  <option value="appointment">📅 Appointment Form ({stats.appointment})</option>
                  <option value="website">🌐 Website Form ({stats.website})</option>
                  <option value="phone">📞 Phone</option>
                </select>
              </div>

              {/* Sort Order */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-[#164E63] block uppercase tracking-wider">
                  Sort Date
                </label>
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value as "newest" | "oldest");
                    setPage(1);
                  }}
                  className="w-full px-3 py-1.5 border border-[#D4E5E9] text-xs text-[#1E293B] focus:border-[#287D91] outline-none bg-white"
                >
                  <option value="newest">Newest First (Default)</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Error state */}
            {enquiryError && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs">
                {enquiryError}
              </div>
            )}

            {/* Enquiries List */}
            <div className="bg-white border border-[#D4E5E9] shadow-soft overflow-hidden">
              {enquiryLoading ? (
                <div className="py-16 text-center text-xs text-[#64748B]">
                  <span className="w-5 h-5 border-2 border-[#164E63]/30 border-t-[#164E63] rounded-full animate-spin inline-block mr-2" />
                  Loading enquiries...
                </div>
              ) : enquiries.length === 0 ? (
                <div className="py-16 text-center text-xs text-[#64748B] space-y-2">
                  <p className="font-semibold text-sm text-[#164E63]">No matching enquiries found.</p>
                  <p>Try clearing filters or search keywords.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#D4E5E9]">
                  {enquiries.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedEnquiry(item);
                        setNotesInput(item.admin_notes || "");
                      }}
                      className={`p-4 sm:p-5 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        selectedEnquiry?.id === item.id
                          ? "bg-[#E8F4F7]/60 border-l-4 border-l-[#164E63]"
                          : item.status === "new"
                          ? "bg-white hover:bg-[#FAF8F5] border-l-4 border-l-blue-500"
                          : "bg-white hover:bg-[#FAF8F5]"
                      }`}
                    >
                      {/* Patient & Contact Info */}
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="text-sm font-bold text-[#164E63]">
                            {item.name}
                          </span>
                          {renderStatusBadge(item.status)}
                          {renderSourceBadge(item.source)}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#475569]">
                          <span className="font-semibold text-[#164E63]">
                            📞 {item.phone}
                          </span>
                          {item.treatment && (
                            <>
                              <span>&bull;</span>
                              <span className="text-[#287D91] font-medium">
                                {item.treatment}
                              </span>
                            </>
                          )}
                          {item.appointment_preference && (
                            <>
                              <span>&bull;</span>
                              <span className="text-slate-600">
                                {item.appointment_preference}
                              </span>
                            </>
                          )}
                        </div>

                        {item.message && (
                          <p className="text-xs text-[#64748B] line-clamp-1 italic pt-0.5">
                            &ldquo;{item.message}&rdquo;
                          </p>
                        )}
                      </div>

                      {/* Right Meta & Quick Actions */}
                      <div className="flex items-center gap-3 shrink-0 justify-between md:justify-end border-t md:border-t-0 pt-2 md:pt-0 border-slate-100">
                        <span className="text-[11px] text-[#64748B]">
                          {formatDate(item.created_at)}
                        </span>

                        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {/* Quick Call Link */}
                          <a
                            href={`tel:${item.phone}`}
                            title="Call Patient"
                            className="p-2 bg-[#E8F4F7] hover:bg-[#d8ecf0] text-[#164E63] text-xs font-semibold border border-[#D4E5E9]"
                          >
                            📞 Call
                          </a>

                          {/* Quick WhatsApp Link */}
                          <a
                            href={`https://wa.me/${getCleanPhone(item.phone)}?text=${encodeURIComponent(
                              `Hello ${item.name}, thank you for contacting Sai Dental Clinic. How can our dental team assist you today?`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Message on WhatsApp"
                            className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200"
                          >
                            🟢 WhatsApp
                          </a>

                          <button
                            type="button"
                            onClick={() => {
                              setSelectedEnquiry(item);
                              setNotesInput(item.admin_notes || "");
                            }}
                            className="px-2.5 py-2 bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-semibold"
                          >
                            View &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="p-4 bg-[#FAF8F5] border-t border-[#D4E5E9] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">
                    Page {page} of {totalPages} ({totalCount} total)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={page <= 1}
                      onClick={() => setPage(page - 1)}
                      className="px-3 py-1.5 bg-white border border-[#D4E5E9] disabled:opacity-40 font-semibold text-[#164E63] cursor-pointer"
                    >
                      &larr; Previous
                    </button>
                    <button
                      type="button"
                      disabled={page >= totalPages}
                      onClick={() => setPage(page + 1)}
                      className="px-3 py-1.5 bg-white border border-[#D4E5E9] disabled:opacity-40 font-semibold text-[#164E63] cursor-pointer"
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Expandable Enquiry Drawer / Modal */}
            {selectedEnquiry && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
                <div
                  className="w-full max-w-2xl bg-white border border-[#D4E5E9] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
                  role="dialog"
                  aria-modal="true"
                >
                  {/* Drawer Header */}
                  <div className="bg-[#164E63] text-white p-4 sm:p-5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8F4F7]/80 block">
                        Patient Enquiry Dossier
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {selectedEnquiry.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedEnquiry(null)}
                      className="text-white/80 hover:text-white p-1 text-sm font-bold cursor-pointer"
                    >
                      ✕ Close
                    </button>
                  </div>

                  {/* Drawer Body */}
                  <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-[#1E293B]">
                    {/* Primary metadata row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF8F5] p-3.5 border border-[#D4E5E9]">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#64748B] block">Status</span>
                        <div className="mt-1">{renderStatusBadge(selectedEnquiry.status)}</div>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#64748B] block">Source</span>
                        <div className="mt-1">{renderSourceBadge(selectedEnquiry.source)}</div>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#64748B] block">Received</span>
                        <span className="text-xs font-semibold text-[#164E63] block mt-1">
                          {formatDate(selectedEnquiry.created_at)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#64748B] block">Phone</span>
                        <span className="text-xs font-bold text-[#164E63] block mt-1">
                          {selectedEnquiry.phone}
                        </span>
                      </div>
                    </div>

                    {/* Quick Communication Actions */}
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      <a
                        href={`tel:${selectedEnquiry.phone}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E8F4F7] text-[#164E63] text-xs font-bold border border-[#D4E5E9] hover:bg-[#d4ecf0]"
                      >
                        <span>📞 Call Patient Directly</span>
                      </a>

                      <a
                        href={`https://wa.me/${getCleanPhone(selectedEnquiry.phone)}?text=${encodeURIComponent(
                          `Hello ${selectedEnquiry.name}, this is reception from Sai Dental Clinic following up on your inquiry.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a]"
                      >
                        <span>🟢 Start WhatsApp Chat</span>
                      </a>
                    </div>

                    {/* Specific details */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-bold text-[#164E63] block mb-1">
                          Treatment / Service Requested
                        </span>
                        <p className="text-xs sm:text-sm text-[#1E293B] bg-slate-50 p-2.5 border border-[#D4E5E9]">
                          {selectedEnquiry.treatment || "General Dental Consultation"}
                        </p>
                      </div>

                      {selectedEnquiry.appointment_preference && (
                        <div>
                          <span className="text-xs font-bold text-[#164E63] block mb-1">
                            OPD Shift &amp; Appointment Preference
                          </span>
                          <p className="text-xs sm:text-sm text-[#1E293B] bg-slate-50 p-2.5 border border-[#D4E5E9]">
                            {selectedEnquiry.appointment_preference}
                          </p>
                        </div>
                      )}

                      {selectedEnquiry.message && (
                        <div>
                          <span className="text-xs font-bold text-[#164E63] block mb-1">
                            Message / Patient Notes
                          </span>
                          <p className="text-xs sm:text-sm text-[#1E293B] bg-slate-50 p-2.5 border border-[#D4E5E9] whitespace-pre-wrap">
                            {selectedEnquiry.message}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Status updater */}
                    <div className="pt-3 border-t border-[#D4E5E9] space-y-2">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Update Enquiry Status:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {(["new", "contacted", "resolved", "spam"] as const).map((st) => (
                          <button
                            key={st}
                            type="button"
                            disabled={isUpdatingStatus || selectedEnquiry.status === st}
                            onClick={() => handleUpdateStatus(selectedEnquiry.id, st)}
                            className={`px-3 py-1.5 text-xs font-semibold capitalize cursor-pointer border ${
                              selectedEnquiry.status === st
                                ? "bg-[#164E63] text-white border-[#164E63]"
                                : "bg-white text-[#475569] border-[#D4E5E9] hover:bg-[#FAF8F5]"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Internal admin notes */}
                    <div className="pt-3 border-t border-[#D4E5E9] space-y-2">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Internal Staff Notes:
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Add notes e.g., 'Called patient, appointment fixed for Saturday morning shift.'"
                        value={notesInput}
                        onChange={(e) => setNotesInput(e.target.value)}
                        className="w-full p-2.5 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                      <button
                        type="button"
                        disabled={isSavingNotes}
                        onClick={() => handleSaveNotes(selectedEnquiry.id)}
                        className="px-4 py-1.5 bg-[#287D91] hover:bg-[#164E63] text-white text-xs font-semibold cursor-pointer"
                      >
                        {isSavingNotes ? "Saving Notes..." : "Save Internal Notes"}
                      </button>
                    </div>

                    {/* Delete action */}
                    <div className="pt-4 border-t border-rose-100 flex items-center justify-between">
                      <span className="text-[11px] text-rose-600">
                        Destructive action: Permanently removes record from database.
                      </span>

                      {confirmDeleteId === selectedEnquiry.id ? (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleDeleteEnquiry(selectedEnquiry.id)}
                            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
                          >
                            Yes, Confirm Delete
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(null)}
                            className="px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(selectedEnquiry.id)}
                          className="px-3 py-1.5 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 text-xs font-semibold cursor-pointer"
                        >
                          Delete Enquiry
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: DOCTOR PROFILE & PHOTO MANAGEMENT                  */}
        {/* ========================================================= */}
        {activeTab === "doctor" && (
          <div className="space-y-6">
            <div className="border-b border-[#D4E5E9] pb-4">
              <h2 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
                Doctor Profile &amp; Website Media
              </h2>
              <p className="text-xs text-[#475569]">
                Configured photo and credentials update everywhere: Hero Card, About Section, and Doctors Section.
              </p>
            </div>

            {doctorLoading ? (
              <div className="py-16 text-center text-xs text-[#64748B]">
                Loading doctor profile...
              </div>
            ) : (
              <form onSubmit={handleSaveDoctor} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Photo Upload & Preview Card */}
                <div className="lg:col-span-5 bg-white border border-[#D4E5E9] p-6 shadow-soft space-y-4">
                  <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block">
                    Doctor Portrait Photo
                  </span>

                  {/* Card Preview */}
                  <div className="relative h-72 sm:h-80 w-full bg-[#164E63] border border-[#D4E5E9] overflow-hidden">
                    <Image
                      src={previewUrl || doctorForm.imageSrc}
                      alt={doctorForm.altText || doctorForm.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2530]/85 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-xs border border-[#D4E5E9] text-xs">
                      <div className="font-bold text-[#164E63] truncate">{doctorForm.name || "Doctor Name"}</div>
                      <div className="text-[11px] text-[#475569] truncate">{doctorForm.qualifications || "Degrees & Certifications"}</div>
                    </div>
                  </div>

                  {/* File Upload Selector */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-semibold text-[#164E63] block">
                      Choose New Photo (JPEG, PNG, WebP up to 5MB):
                    </label>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/svg+xml"
                      onChange={handleFileChange}
                      className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:border-0 file:text-xs file:font-semibold file:bg-[#E8F4F7] file:text-[#164E63] hover:file:bg-[#d5ebef] cursor-pointer"
                    />
                    {previewUrl && (
                      <p className="text-[11px] text-emerald-700 font-semibold">
                        ✓ Image selected for upload. Click &ldquo;Save Doctor Profile&rdquo; to persist to Supabase Storage.
                      </p>
                    )}
                  </div>

                  {/* Demo Placeholder Notice */}
                  {doctorForm.isDemoPlaceholder && (
                    <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] leading-relaxed">
                      <strong>Current status:</strong> Using agency demo placeholder photo. Uploading a verified clinic portrait will automatically replace this everywhere on the website.
                    </div>
                  )}
                </div>

                {/* Right Column: Credentials & Bio Fields */}
                <div className="lg:col-span-7 bg-white border border-[#D4E5E9] p-6 sm:p-7 shadow-soft space-y-4">
                  <span className="text-xs font-bold text-[#164E63] uppercase tracking-wider block border-b border-[#D4E5E9] pb-2">
                    Professional Credentials &amp; Bio
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Doctor Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={doctorForm.name}
                        onChange={(e) => setDoctorForm({ ...doctorForm, name: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Role / Seniority Label
                      </label>
                      <input
                        type="text"
                        value={doctorForm.roleLabel}
                        onChange={(e) => setDoctorForm({ ...doctorForm, roleLabel: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#164E63] block">
                      Qualifications &amp; Degrees
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BDS, MDS (Prosthodontics & Implants)"
                      value={doctorForm.qualifications}
                      onChange={(e) => setDoctorForm({ ...doctorForm, qualifications: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Practice Experience Badge
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15+ Yrs Practice"
                        value={doctorForm.experience}
                        onChange={(e) => setDoctorForm({ ...doctorForm, experience: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Displayed Rating
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 4.9"
                        value={doctorForm.rating}
                        onChange={(e) => setDoctorForm({ ...doctorForm, rating: e.target.value })}
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#164E63] block">
                      Image Alt Text (Accessibility)
                    </label>
                    <input
                      type="text"
                      value={doctorForm.altText}
                      onChange={(e) => setDoctorForm({ ...doctorForm, altText: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#164E63] block">
                      Doctor Clinical Bio / Philosophy
                    </label>
                    <textarea
                      rows={4}
                      value={doctorForm.bio}
                      onChange={(e) => setDoctorForm({ ...doctorForm, bio: e.target.value })}
                      className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={doctorSaving || isUploadingImage}
                    className="w-full inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-[#164E63] hover:bg-[#287D91] disabled:bg-slate-400 text-white text-xs font-bold shadow-soft transition-colors cursor-pointer"
                  >
                    {doctorSaving || isUploadingImage ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Saving to Supabase Database &amp; Storage...</span>
                      </span>
                    ) : (
                      <span>Save Doctor Profile Everywhere &rarr;</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: TREATMENT MANAGEMENT                               */}
        {/* ========================================================= */}
        {activeTab === "treatments" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4E5E9] pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
                  Treatment Services CMS
                </h2>
                <p className="text-xs text-[#475569]">
                  Edit, add, hide, or rearrange treatments published on the public website.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditingTreatment({
                      id: "",
                      title: "",
                      slug: "",
                      benefit: "",
                      description: "",
                      icon_name: "tooth",
                      published: true,
                      display_order: treatments.length + 1,
                    });
                    setIsTreatmentModalOpen(true);
                  }}
                  className="px-4 py-2 bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-bold shadow-soft cursor-pointer flex items-center gap-1.5"
                >
                  <span>+</span>
                  <span>Add Treatment</span>
                </button>
              </div>
            </div>

            {treatmentsLoading ? (
              <div className="py-16 text-center text-xs text-[#64748B]">
                Loading clinic treatments...
              </div>
            ) : treatments.length === 0 ? (
              <div className="bg-white border border-[#D4E5E9] p-8 text-center text-xs text-[#64748B] space-y-2">
                <p className="font-semibold text-sm text-[#164E63]">No treatments in database.</p>
                <p>Click &ldquo;Add Treatment&rdquo; to create your first clinical service.</p>
              </div>
            ) : (
              <div className="bg-white border border-[#D4E5E9] shadow-soft overflow-hidden">
                <div className="divide-y divide-[#D4E5E9]">
                  {treatments.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold text-[#64748B] bg-slate-100 px-2 py-0.5">
                            #{item.display_order}
                          </span>
                          <h3 className="text-sm font-bold text-[#164E63]">
                            {item.title}
                          </h3>
                          {item.published ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800">
                              Published
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-200 text-slate-700">
                              Hidden
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#475569] line-clamp-2 max-w-2xl leading-relaxed">
                          {item.benefit || item.description}
                        </p>

                        <div className="text-[11px] text-[#64748B] flex items-center gap-3">
                          <span>Slug: <code className="bg-slate-100 px-1 py-0.5 text-slate-700">{item.slug}</code></span>
                          <span>&bull;</span>
                          <span>Icon: {item.icon_name || "tooth"}</span>
                        </div>
                      </div>

                      {/* Treatment Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        {/* Publish Toggle Button */}
                        <button
                          type="button"
                          onClick={() => handleTogglePublish(item)}
                          className={`px-3 py-1.5 text-xs font-semibold border cursor-pointer ${
                            item.published
                              ? "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                              : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                          }`}
                        >
                          {item.published ? "Hide from Site" : "Publish to Site"}
                        </button>

                        {/* Edit Button */}
                        <button
                          type="button"
                          onClick={() => {
                            setEditingTreatment(item);
                            setIsTreatmentModalOpen(true);
                          }}
                          className="px-3 py-1.5 bg-[#E8F4F7] text-[#164E63] border border-[#D4E5E9] hover:bg-[#d5ebef] text-xs font-semibold cursor-pointer"
                        >
                          Edit
                        </button>

                        {/* Delete Button */}
                        {confirmDeleteTreatmentId === item.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleDeleteTreatment(item.id)}
                              className="px-2.5 py-1.5 bg-rose-600 text-white text-xs font-bold cursor-pointer"
                            >
                              Confirm
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteTreatmentId(null)}
                              className="px-2 py-1.5 bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteTreatmentId(item.id)}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 text-xs font-semibold cursor-pointer"
                            title="Delete Treatment"
                          >
                            🗑
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Treatment Add / Edit Modal */}
            {isTreatmentModalOpen && editingTreatment && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
                <div
                  className="w-full max-w-lg bg-white border border-[#D4E5E9] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                  role="dialog"
                  aria-modal="true"
                >
                  <div className="bg-[#164E63] text-white p-4 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {editingTreatment.id ? "Edit Treatment Service" : "Add New Clinical Treatment"}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsTreatmentModalOpen(false)}
                      className="text-white/80 hover:text-white p-1 text-sm font-bold cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSaveTreatment} className="p-5 space-y-4 text-[#1E293B]">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Treatment Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Precision Dental Implants"
                        value={editingTreatment.title}
                        onChange={(e) =>
                          setEditingTreatment({ ...editingTreatment, title: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#164E63] block">
                          URL Slug
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. dental-implants"
                          value={editingTreatment.slug}
                          onChange={(e) =>
                            setEditingTreatment({ ...editingTreatment, slug: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#164E63] block">
                          Display Order
                        </label>
                        <input
                          type="number"
                          value={editingTreatment.display_order}
                          onChange={(e) =>
                            setEditingTreatment({
                              ...editingTreatment,
                              display_order: parseInt(e.target.value, 10) || 1,
                            })
                          }
                          className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Icon Symbol
                      </label>
                      <select
                        value={editingTreatment.icon_name || "tooth"}
                        onChange={(e) =>
                          setEditingTreatment({ ...editingTreatment, icon_name: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none bg-white"
                      >
                        <option value="tooth">🦷 Tooth / Dental General</option>
                        <option value="sparkles">✨ Sparkles / Aligners</option>
                        <option value="shield">🛡️ Shield / Titanium Implants</option>
                        <option value="sun">☀️ Sun / Whitening Cold-Light</option>
                        <option value="star">⭐ Star / Porcelain Veneers</option>
                        <option value="heart">❤️ Heart / Preventive &amp; Pediatric Care</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Patient Benefit / Short Summary *
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Concise patient benefit shown on the card grid"
                        value={editingTreatment.benefit}
                        onChange={(e) =>
                          setEditingTreatment({ ...editingTreatment, benefit: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#164E63] block">
                        Full Clinical Description
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Detailed clinical procedure description"
                        value={editingTreatment.description || ""}
                        onChange={(e) =>
                          setEditingTreatment({ ...editingTreatment, description: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-[#D4E5E9] text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="publish-toggle"
                        checked={editingTreatment.published}
                        onChange={(e) =>
                          setEditingTreatment({ ...editingTreatment, published: e.target.checked })
                        }
                        className="w-4 h-4 text-[#164E63] rounded-xs cursor-pointer"
                      />
                      <label htmlFor="publish-toggle" className="text-xs font-semibold text-[#164E63] cursor-pointer">
                        Publish on Live Website
                      </label>
                    </div>

                    <div className="pt-3 border-t border-[#D4E5E9] flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setIsTreatmentModalOpen(false)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={treatmentSaving}
                        className="px-5 py-2 bg-[#164E63] hover:bg-[#287D91] text-white text-xs font-bold shadow-soft cursor-pointer"
                      >
                        {treatmentSaving ? "Saving..." : "Save Treatment"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
