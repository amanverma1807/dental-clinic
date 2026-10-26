import { createClient } from "./server";

export async function getAuthenticatedAdmin() {
  const supabase = await createClient();
  if (!supabase) {
    return { authorized: false, user: null, reason: "not_configured" };
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { authorized: false, user: null, reason: "unauthenticated" };
  }

  // Verify against clinic_admins database table
  const { data: adminRecord, error: adminError } = await supabase
    .from("clinic_admins")
    .select("id, role, email")
    .or(`user_id.eq.${user.id},email.eq.${user.email}`)
    .maybeSingle();

  if (adminError || !adminRecord) {
    // If not found in clinic_admins table, check if email is an authorized seed email
    const allowedEmails = ["amanverma.build@gmail.com", "admin@saidental.com"];
    if (user.email && allowedEmails.includes(user.email.toLowerCase())) {
      return { authorized: true, user, role: "admin" };
    }
    return { authorized: false, user, reason: "unauthorized" };
  }

  return { authorized: true, user, role: adminRecord.role };
}
