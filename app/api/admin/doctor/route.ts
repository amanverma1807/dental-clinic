import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/supabase/adminAuth";
import { createClient } from "@/lib/supabase/server";
import { CLINIC_DOCTOR_CONFIG } from "@/components/doctorAsset";

export async function GET() {
  const authCheck = await getAuthenticatedAdmin();
  if (!authCheck.authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("data")
      .eq("key", "clinic_doctor_config")
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const doctorProfile = {
      ...CLINIC_DOCTOR_CONFIG,
      ...(data?.data || {}),
    };

    return NextResponse.json({ success: true, doctor: doctorProfile });
  } catch (err: unknown) {
    console.error("Doctor profile GET exception:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authCheck = await getAuthenticatedAdmin();
  if (!authCheck.authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const body = await req.json();
    const {
      name,
      qualifications,
      experience,
      rating,
      roleLabel,
      imageSrc,
      altText,
      bio,
      isDemoPlaceholder,
    } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Doctor name is required" }, { status: 400 });
    }

    if (!imageSrc || typeof imageSrc !== "string" || !imageSrc.trim()) {
      return NextResponse.json({ error: "Doctor photo URL or path is required" }, { status: 400 });
    }

    const doctorData = {
      name: name.trim(),
      qualifications: qualifications ? qualifications.trim() : "",
      experience: experience ? experience.trim() : "",
      rating: rating ? rating.trim() : "4.9",
      roleLabel: roleLabel ? roleLabel.trim() : "Senior Specialist",
      imageSrc: imageSrc.trim(),
      altText: altText ? altText.trim() : `${name.trim()}, Specialist at Sai Dental Clinic`,
      bio: bio ? bio.trim() : "",
      isDemoPlaceholder: Boolean(isDemoPlaceholder),
    };

    const { error } = await supabase
      .from("site_content")
      .upsert(
        {
          key: "clinic_doctor_config",
          data: doctorData,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "key" }
      );

    if (error) {
      console.error("Doctor config upsert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, doctor: doctorData });
  } catch (err: unknown) {
    console.error("Doctor profile POST exception:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
