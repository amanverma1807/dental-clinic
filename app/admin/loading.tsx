import React from "react";

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex items-center justify-center p-4">
      <div className="bg-white border border-[#D4E5E9] p-8 shadow-soft text-center space-y-3 max-w-sm w-full">
        <div className="w-8 h-8 border-3 border-[#164E63]/20 border-t-[#164E63] rounded-full animate-spin mx-auto" />
        <h3 className="text-sm font-bold text-[#164E63]">
          Authenticating Staff Portal...
        </h3>
        <p className="text-xs text-[#64748B]">
          Connecting securely to Sai Dental Clinic database.
        </p>
      </div>
    </div>
  );
}
