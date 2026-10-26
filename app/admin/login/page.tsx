"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      // Successful login -> Navigate to Admin Dashboard
      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col justify-center items-center p-4 selection:bg-[#E8F4F7] selection:text-[#164E63]">
      {/* Return to website link */}
      <div className="w-full max-w-md mb-4 text-left">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold text-[#164E63] hover:text-[#287D91] transition-colors"
        >
          &larr; <span className="ml-1">Return to Public Website</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-white border border-[#D4E5E9] shadow-soft p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-[#164E63] text-white flex items-center justify-center mx-auto mb-3 shadow-soft">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-normal text-[#164E63] font-display">
            Sai Dental Clinic
          </h1>
          <p className="text-xs text-[#475569] mt-1 font-medium">
            Staff &amp; Doctor CMS Portal
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
            <svg
              className="w-4 h-4 shrink-0 mt-0.5 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <span className="font-semibold">Login Notice:</span> {error}
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="admin-email"
              className="text-xs font-bold text-[#164E63] block"
            >
              Admin Email
            </label>
            <input
              id="admin-email"
              type="email"
              required
              placeholder="e.g. admin@saidental.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="admin-password"
              className="text-xs font-bold text-[#164E63] block"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-[#D4E5E9] bg-white text-xs sm:text-sm text-[#1E293B] focus:border-[#287D91] outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-[#164E63] hover:bg-[#287D91] disabled:bg-slate-400 text-white text-xs font-semibold shadow-soft transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying Credentials...</span>
              </span>
            ) : (
              <span>Sign In to Dashboard &rarr;</span>
            )}
          </button>
        </form>

        {/* Security & Access advisory */}
        <div className="mt-6 pt-4 border-t border-[#D4E5E9]/60 text-[11px] text-[#64748B] space-y-1">
          <p className="flex items-center gap-1.5 font-medium text-[#164E63]">
            <span className="w-1.5 h-1.5 bg-[#22C55E]" />
            <span>Secure Supabase Auth &amp; PostgreSQL RLS Protected</span>
          </p>
          <p>
            Authorized staff and administrator accounts only. Unauthorized access attempts are monitored and recorded.
          </p>
        </div>
      </div>
    </div>
  );
}
