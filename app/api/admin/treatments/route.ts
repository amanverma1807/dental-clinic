import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/supabase/adminAuth";
import { createClient } from "@/lib/supabase/server";

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
      .from("treatments")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, treatments: data || [] });
  } catch (err: unknown) {
    console.error("Treatments GET exception:", err);
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
      id,
      title,
      slug,
      benefit,
      description,
      image_path,
      icon_name,
      published,
      display_order,
    } = body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "Treatment title is required" }, { status: 400 });
    }

    // Auto-generate slug if not provided
    const cleanSlug = (slug || title)
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const treatmentPayload: Record<string, unknown> = {
      title: title.trim(),
      slug: cleanSlug,
      benefit: benefit ? benefit.trim() : "",
      description: description ? description.trim() : null,
      image_path: image_path || null,
      icon_name: icon_name || "tooth",
      published: published !== undefined ? Boolean(published) : true,
      display_order: typeof display_order === "number" ? display_order : 0,
      updated_at: new Date().toISOString(),
    };

    if (id) {
      // Update existing treatment
      const { data, error } = await supabase
        .from("treatments")
        .update(treatmentPayload)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, treatment: data });
    } else {
      // Create new treatment
      const { data, error } = await supabase
        .from("treatments")
        .insert([treatmentPayload])
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, treatment: data });
    }
  } catch (err: unknown) {
    console.error("Treatment POST exception:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const authCheck = await getAuthenticatedAdmin();
  if (!authCheck.authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Treatment ID is required" }, { status: 400 });
    }

    const { error } = await supabase.from("treatments").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Treatment DELETE exception:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
