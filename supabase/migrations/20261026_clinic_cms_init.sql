-- ==============================================================================
-- Sai Dental Clinic & Implant Centre - CMS & Admin Dashboard Schema
-- Migration: 20261026_clinic_cms_init.sql
-- ==============================================================================

-- 1. Clinic Admins Table
CREATE TABLE IF NOT EXISTS public.clinic_admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE,
  role text NOT NULL DEFAULT 'admin',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Seed initial admin user if present
INSERT INTO public.clinic_admins (user_id, email, role)
SELECT id, email, 'admin'
FROM auth.users
WHERE email IN ('amanverma.build@gmail.com', 'admin@saidental.com')
ON CONFLICT (email) DO NOTHING;

-- 2. Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  message text,
  source text NOT NULL CHECK (source IN ('website', 'whatsapp', 'phone', 'appointment', 'other')),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved', 'spam')),
  treatment text,
  appointment_preference text,
  admin_notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_source ON public.enquiries(source);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);

-- 3. Treatments Table
CREATE TABLE IF NOT EXISTS public.treatments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  benefit text NOT NULL,
  description text,
  image_path text,
  icon_name text DEFAULT 'tooth',
  published boolean NOT NULL DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_treatments_published_order ON public.treatments(published, display_order ASC);

-- Seed existing treatments
INSERT INTO public.treatments (title, slug, benefit, description, icon_name, published, display_order)
VALUES
  (
    'Painless Root Canal',
    'painless-root-canal',
    'Save your natural tooth in a single 45-minute visit using computer-guided rotary endodontics and gentle numbing.',
    'Advanced single-sitting root canal treatment performed with digital apex locators and computerized rotary instrumentation for zero discomfort and rapid healing.',
    'tooth',
    true,
    1
  ),
  (
    'Invisible Clear Aligners',
    'invisible-clear-aligners',
    'Straighten teeth discreetly and comfortably with removable, transparent trays customized via 3D digital scans.',
    'Custom-fabricated clear aligners utilizing high-resolution 3D intraoral scans for predictable, comfortable alignment without visible brackets or wires.',
    'sparkles',
    true,
    2
  ),
  (
    'Dental Implants',
    'dental-implants',
    'Restore natural chewing power and permanent aesthetics with biocompatible Swiss & German titanium implants.',
    'Precision-placed titanium dental implants designed to fuse permanently with jawbone, restoring full masticatory function and lifelike aesthetics.',
    'shield',
    true,
    3
  ),
  (
    'Teeth Whitening',
    'teeth-whitening',
    'Brighten enamel safely up to 6 shades using gentle in-clinic cold-light technology without post-procedure sensitivity.',
    'Professional in-chair whitening utilizing safe cold-light LED technology to lift deep tea, coffee, and tobacco stains with zero enamel erosion.',
    'sun',
    true,
    4
  ),
  (
    'Porcelain Veneers',
    'porcelain-veneers',
    'Transform chipped, spaced, or stained teeth with handcrafted 0.3mm ultra-thin ceramic laminates.',
    'Micro-thin custom porcelain veneers crafted by master ceramists to correct gaps, chips, and discolorations with minimal tooth preparation.',
    'star',
    true,
    5
  ),
  (
    'Preventive Care',
    'preventive-care',
    'Ultrasonic cleaning, enamel fluoride strengthening, and friendly routine checkups for adults and children.',
    'Comprehensive oral prophylaxis, subgingival ultrasonic plaque removal, and topical remineralization therapy for lifelong dental wellness.',
    'heart',
    true,
    6
  )
ON CONFLICT (slug) DO UPDATE
SET
  title = EXCLUDED.title,
  benefit = EXCLUDED.benefit,
  description = EXCLUDED.description,
  published = EXCLUDED.published,
  display_order = EXCLUDED.display_order;

-- 4. Site Content (Singleton for Doctor Profile and Clinic Settings)
CREATE TABLE IF NOT EXISTS public.site_content (
  key text PRIMARY KEY,
  data jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Seed initial doctor configuration
INSERT INTO public.site_content (key, data, updated_at)
VALUES (
  'clinic_doctor_config',
  '{
    "name": "Dr. Vikram Sharma",
    "qualifications": "BDS, MDS (Prosthodontics & Implants)",
    "experience": "15+ Yrs Practice (Demo)",
    "rating": "4.9",
    "roleLabel": "Senior Specialist (Demo)",
    "imageSrc": "/images/dentist-doctor.jpg",
    "altText": "Dr. Vikram Sharma, Senior Dental Surgeon and Implantologist at Sai Dental Clinic (Demo Placeholder)",
    "bio": "At Sai Dental Clinic, our philosophy centers on conservative dentistry, patient comfort, and strict European Class-B sterilization. From single-visit painless root canals to computer-guided dental implants, we provide honest diagnoses with zero unnecessary treatments.",
    "isDemoPlaceholder": true
  }'::jsonb,
  now()
)
ON CONFLICT (key) DO NOTHING;

-- 5. Helper Function: Is Current User An Admin
CREATE OR REPLACE FUNCTION public.is_clinic_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.clinic_admins
    WHERE user_id = auth.uid()
       OR email = (auth.jwt() ->> 'email')
  );
$$;

REVOKE EXECUTE ON FUNCTION public.is_clinic_admin() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.is_clinic_admin() TO authenticated;

-- 6. Row Level Security Policies

-- Enable RLS
ALTER TABLE public.clinic_admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- clinic_admins policies
DROP POLICY IF EXISTS "clinic_admins_select_admins" ON public.clinic_admins;
CREATE POLICY "clinic_admins_select_admins"
  ON public.clinic_admins
  FOR SELECT
  TO authenticated
  USING (public.is_clinic_admin());

-- enquiries policies
-- Public / Anon can insert enquiries (website form, whatsapp pre-chat form, etc.)
DROP POLICY IF EXISTS "enquiries_insert_public" ON public.enquiries;
CREATE POLICY "enquiries_insert_public"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated clinic admins can view enquiries
DROP POLICY IF EXISTS "enquiries_select_admins" ON public.enquiries;
CREATE POLICY "enquiries_select_admins"
  ON public.enquiries
  FOR SELECT
  TO authenticated
  USING (public.is_clinic_admin());

-- Only authenticated clinic admins can update enquiries (status, notes)
DROP POLICY IF EXISTS "enquiries_update_admins" ON public.enquiries;
CREATE POLICY "enquiries_update_admins"
  ON public.enquiries
  FOR UPDATE
  TO authenticated
  USING (public.is_clinic_admin())
  WITH CHECK (public.is_clinic_admin());

-- Only authenticated clinic admins can delete enquiries
DROP POLICY IF EXISTS "enquiries_delete_admins" ON public.enquiries;
CREATE POLICY "enquiries_delete_admins"
  ON public.enquiries
  FOR DELETE
  TO authenticated
  USING (public.is_clinic_admin());

-- treatments policies
-- Public can view published treatments
DROP POLICY IF EXISTS "treatments_select_public" ON public.treatments;
CREATE POLICY "treatments_select_public"
  ON public.treatments
  FOR SELECT
  TO anon, authenticated
  USING (published = true OR public.is_clinic_admin());

-- Only admins can insert treatments
DROP POLICY IF EXISTS "treatments_insert_admins" ON public.treatments;
CREATE POLICY "treatments_insert_admins"
  ON public.treatments
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_clinic_admin());

-- Only admins can update treatments
DROP POLICY IF EXISTS "treatments_update_admins" ON public.treatments;
CREATE POLICY "treatments_update_admins"
  ON public.treatments
  FOR UPDATE
  TO authenticated
  USING (public.is_clinic_admin())
  WITH CHECK (public.is_clinic_admin());

-- Only admins can delete treatments
DROP POLICY IF EXISTS "treatments_delete_admins" ON public.treatments;
CREATE POLICY "treatments_delete_admins"
  ON public.treatments
  FOR DELETE
  TO authenticated
  USING (public.is_clinic_admin());

-- site_content policies
-- Public can read site_content
DROP POLICY IF EXISTS "site_content_select_public" ON public.site_content;
CREATE POLICY "site_content_select_public"
  ON public.site_content
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only admins can modify site_content
DROP POLICY IF EXISTS "site_content_modify_admins" ON public.site_content;
CREATE POLICY "site_content_modify_admins"
  ON public.site_content
  FOR ALL
  TO authenticated
  USING (public.is_clinic_admin())
  WITH CHECK (public.is_clinic_admin());

-- 7. Storage Bucket Setup
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'clinic-media',
  'clinic-media',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO UPDATE
SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];

-- Storage Policies for clinic-media
DROP POLICY IF EXISTS "clinic_media_public_read" ON storage.objects;
CREATE POLICY "clinic_media_public_read"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'clinic-media');

DROP POLICY IF EXISTS "clinic_media_admin_insert" ON storage.objects;
CREATE POLICY "clinic_media_admin_insert"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'clinic-media' AND public.is_clinic_admin());

DROP POLICY IF EXISTS "clinic_media_admin_update" ON storage.objects;
CREATE POLICY "clinic_media_admin_update"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'clinic-media' AND public.is_clinic_admin())
  WITH CHECK (bucket_id = 'clinic-media' AND public.is_clinic_admin());

DROP POLICY IF EXISTS "clinic_media_admin_delete" ON storage.objects;
CREATE POLICY "clinic_media_admin_delete"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'clinic-media' AND public.is_clinic_admin());
