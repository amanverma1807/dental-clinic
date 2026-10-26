import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase connection is not configured in environment variables" },
        { status: 503 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error || !data.user) {
      return NextResponse.json(
        { error: error?.message || "Invalid email or password" },
        { status: 401 }
      );
    }

    // Server-side authorization check: Ensure user is authorized in clinic_admins
    const allowedEmails = ["amanverma.build@gmail.com", "admin@saidental.com"];
    const isDirectAllowed = data.user.email && allowedEmails.includes(data.user.email.toLowerCase());

    const { data: adminRecord } = await supabase
      .from("clinic_admins")
      .select("id, role")
      .or(`user_id.eq.${data.user.id},email.eq.${data.user.email}`)
      .maybeSingle();

    if (!adminRecord && !isDirectAllowed) {
      // User signed in via Supabase Auth, but is not an authorized clinic admin
      await supabase.auth.signOut();
      return NextResponse.json(
        { error: "Access denied: Your account is not authorized as a Clinic Administrator." },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        role: adminRecord?.role || "admin",
      },
    });
  } catch (err: unknown) {
    console.error("Admin login API exception:", err);
    return NextResponse.json(
      { error: "Server error during authentication" },
      { status: 500 }
    );
  }
}
