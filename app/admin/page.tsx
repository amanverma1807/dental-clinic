import { redirect } from "next/navigation";
import { getAuthenticatedAdmin } from "@/lib/supabase/adminAuth";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin Dashboard | Sai Dental Clinic & Implant Centre",
  description: "Secure CMS and Patient Enquiry Management Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const authCheck = await getAuthenticatedAdmin();

  if (!authCheck.authorized) {
    redirect("/admin/login");
  }

  return (
    <AdminDashboard
      userEmail={authCheck.user?.email || "Admin User"}
      userRole={authCheck.role || "admin"}
    />
  );
}
