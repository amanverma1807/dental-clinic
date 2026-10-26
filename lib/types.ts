export type EnquirySource = 'website' | 'whatsapp' | 'phone' | 'appointment' | 'other';
export type EnquiryStatus = 'new' | 'contacted' | 'resolved' | 'spam';

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  source: EnquirySource;
  status: EnquiryStatus;
  treatment?: string | null;
  appointment_preference?: string | null;
  admin_notes?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Treatment {
  id: string;
  title: string;
  slug: string;
  benefit: string;
  description?: string | null;
  image_path?: string | null;
  icon_name?: string | null;
  published: boolean;
  display_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface DoctorProfile {
  name: string;
  qualifications: string;
  experience: string;
  rating: string;
  roleLabel: string;
  imageSrc: string;
  altText: string;
  bio?: string;
  isDemoPlaceholder: boolean;
}
