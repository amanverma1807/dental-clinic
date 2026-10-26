import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message, source, treatment, appointment_preference } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Patient name is required" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().replace(/\D/g, "").length < 8) {
      return NextResponse.json(
        { error: "A valid phone number (at least 8 digits) is required" },
        { status: 400 }
      );
    }

    const validSources = ["website", "whatsapp", "phone", "appointment", "other"];
    const verifiedSource = validSources.includes(source) ? source : "website";

    const supabase = await createClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Database service is not configured. Please check server settings." },
        { status: 503 }
      );
    }

    const { error } = await supabase
      .from("enquiries")
      .insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          email: email ? email.trim() : null,
          message: message ? message.trim() : null,
          source: verifiedSource,
          status: "new",
          treatment: treatment || null,
          appointment_preference: appointment_preference || null,
        },
      ]);

    if (error) {
      console.error("Supabase insert enquiry error:", error);
      return NextResponse.json(
        { error: "Failed to record enquiry in database: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry successfully recorded in database",
    });
  } catch (err: unknown) {
    console.error("Enquiry API exception:", err);
    return NextResponse.json(
      { error: "Internal server error processing enquiry" },
      { status: 500 }
    );
  }
}
