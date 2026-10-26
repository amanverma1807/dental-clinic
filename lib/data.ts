import { createClient } from "@supabase/supabase-js";
import { CLINIC_DOCTOR_CONFIG } from "@/components/doctorAsset";
import { Treatment, DoctorProfile } from "./types";

function getPublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return null;
  return createClient(supabaseUrl, supabaseKey);
}

export const DEFAULT_TREATMENTS: Treatment[] = [
  {
    id: "1",
    title: "Painless Root Canal",
    slug: "painless-root-canal",
    benefit: "Save your natural tooth in a single 45-minute visit using computer-guided rotary endodontics and gentle numbing.",
    description: "Advanced single-sitting root canal treatment performed with digital apex locators and computerized rotary instrumentation for zero discomfort and rapid healing.",
    icon_name: "tooth",
    published: true,
    display_order: 1,
  },
  {
    id: "2",
    title: "Invisible Clear Aligners",
    slug: "invisible-clear-aligners",
    benefit: "Straighten teeth discreetly and comfortably with removable, transparent trays customized via 3D digital scans.",
    description: "Custom-fabricated clear aligners utilizing high-resolution 3D intraoral scans for predictable, comfortable alignment without visible brackets or wires.",
    icon_name: "sparkles",
    published: true,
    display_order: 2,
  },
  {
    id: "3",
    title: "Dental Implants",
    slug: "dental-implants",
    benefit: "Restore natural chewing power and permanent aesthetics with biocompatible Swiss & German titanium implants.",
    description: "Precision-placed titanium dental implants designed to fuse permanently with jawbone, restoring full masticatory function and lifelike aesthetics.",
    icon_name: "shield",
    published: true,
    display_order: 3,
  },
  {
    id: "4",
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    benefit: "Brighten enamel safely up to 6 shades using gentle in-clinic cold-light technology without post-procedure sensitivity.",
    description: "Professional in-chair whitening utilizing safe cold-light LED technology to lift deep tea, coffee, and tobacco stains with zero enamel erosion.",
    icon_name: "sun",
    published: true,
    display_order: 4,
  },
  {
    id: "5",
    title: "Porcelain Veneers",
    slug: "porcelain-veneers",
    benefit: "Transform chipped, spaced, or stained teeth with handcrafted 0.3mm ultra-thin ceramic laminates.",
    description: "Micro-thin custom porcelain veneers crafted by master ceramists to correct gaps, chips, and discolorations with minimal tooth preparation.",
    icon_name: "star",
    published: true,
    display_order: 5,
  },
  {
    id: "6",
    title: "Preventive Care",
    slug: "preventive-care",
    benefit: "Ultrasonic cleaning, enamel fluoride strengthening, and friendly routine checkups for adults and children.",
    description: "Comprehensive oral prophylaxis, subgingival ultrasonic plaque removal, and topical remineralization therapy for lifelong dental wellness.",
    icon_name: "heart",
    published: true,
    display_order: 6,
  },
];

export async function getDoctorProfile(): Promise<DoctorProfile> {
  try {
    const supabase = getPublicClient();
    if (!supabase) return CLINIC_DOCTOR_CONFIG;

    const { data, error } = await supabase
      .from("site_content")
      .select("data")
      .eq("key", "clinic_doctor_config")
      .maybeSingle();

    if (error || !data?.data) {
      return CLINIC_DOCTOR_CONFIG;
    }

    return {
      ...CLINIC_DOCTOR_CONFIG,
      ...data.data,
    };
  } catch {
    return CLINIC_DOCTOR_CONFIG;
  }
}

export async function getTreatments(): Promise<Treatment[]> {
  try {
    const supabase = getPublicClient();
    if (!supabase) return DEFAULT_TREATMENTS;

    const { data, error } = await supabase
      .from("treatments")
      .select("*")
      .eq("published", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_TREATMENTS;
    }

    return data as Treatment[];
  } catch {
    return DEFAULT_TREATMENTS;
  }
}
