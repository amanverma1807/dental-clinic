import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedAdmin } from "@/lib/supabase/adminAuth";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const authCheck = await getAuthenticatedAdmin();
  if (!authCheck.authorized) {
    return NextResponse.json(
      { error: "Unauthorized access: Please sign in as an authorized admin" },
      { status: 401 }
    );
  }

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.trim() || "";
  const status = searchParams.get("status") || "all";
  const source = searchParams.get("source") || "all";
  const sort = searchParams.get("sort") === "oldest" ? "asc" : "desc";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(100, Math.max(5, parseInt(searchParams.get("limit") || "20", 10)));
  const offset = (page - 1) * limit;

  try {
    // 1. Fetch real summary statistics across all enquiries
    const { data: allStats, error: statsError } = await supabase
      .from("enquiries")
      .select("status, source");

    if (statsError) {
      console.error("Enquiry stats error:", statsError);
    }

    const summary = {
      total: allStats?.length || 0,
      new: allStats?.filter((e) => e.status === "new").length || 0,
      whatsapp: allStats?.filter((e) => e.source === "whatsapp").length || 0,
      website: allStats?.filter((e) => e.source === "website").length || 0,
      appointment: allStats?.filter((e) => e.source === "appointment").length || 0,
    };

    // 2. Build filtered and paginated query
    let query = supabase
      .from("enquiries")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: sort === "asc" })
      .range(offset, offset + limit - 1);

    if (status !== "all") {
      query = query.eq("status", status);
    }

    if (source !== "all") {
      query = query.eq("source", source);
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%,treatment.ilike.%${search}%`);
    }

    const { data: enquiries, count, error: listError } = await query;

    if (listError) {
      console.error("List enquiries error:", listError);
      return NextResponse.json(
        { error: "Failed to fetch enquiries: " + listError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      enquiries: enquiries || [],
      totalCount: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
      summary,
    });
  } catch (err: unknown) {
    console.error("Enquiries API exception:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const authCheck = await getAuthenticatedAdmin();
  if (!authCheck.authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  try {
    const { id, status, admin_notes } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Enquiry ID is required" }, { status: 400 });
    }

    const updates: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (status) {
      const validStatuses = ["new", "contacted", "resolved", "spam"];
      if (!validStatuses.includes(status)) {
        return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
      }
      updates.status = status;
    }

    if (admin_notes !== undefined) {
      updates.admin_notes = admin_notes;
    }

    const { data, error } = await supabase
      .from("enquiries")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, enquiry: data });
  } catch (err: unknown) {
    console.error("Enquiry update exception:", err);
    return NextResponse.json({ error: "Failed to update enquiry" }, { status: 500 });
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
      return NextResponse.json({ error: "Enquiry ID is required" }, { status: 400 });
    }

    const { error } = await supabase.from("enquiries").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Enquiry delete exception:", err);
    return NextResponse.json({ error: "Failed to delete enquiry" }, { status: 500 });
  }
}
