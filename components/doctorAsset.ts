/**
 * CLINIC DOCTOR & ASSET CONFIGURATION (DEMO / PLACEHOLDER)
 * 
 * To replace the placeholder photo with the actual clinic doctor or specialist photo:
 * 1. Place the new photo into `/public/images/` (e.g., `dr-profile.jpg`).
 * 2. Update `imageSrc` below with the relative path (`/images/dr-profile.jpg`).
 * 3. Update the credentials, name, and experience to reflect actual verified clinic details.
 */

export interface DoctorAssetConfig {
  /** Relative path to doctor portrait image in /public/images/ */
  imageSrc: string;
  /** Accessible alt description for the portrait */
  altText: string;
  /** Doctor full professional name */
  name: string;
  /** Clinical degrees and specializations */
  qualifications: string;
  /** Overall clinical experience badge label */
  experience: string;
  /** Rating score placeholder */
  rating: string;
  /** Role or seniority label */
  roleLabel: string;
  /** Clinical bio / philosophy text */
  bio?: string;
  /** Flag noting this is a demo placeholder for portfolio preview */
  isDemoPlaceholder: boolean;
}

export const CLINIC_DOCTOR_CONFIG: DoctorAssetConfig = {
  // Demo placeholder photo path (replace with actual doctor's portrait)
  imageSrc: "/images/dentist-doctor.jpg",
  altText: "Dr. Vikram Sharma, Senior Dental Surgeon and Implantologist at Sai Dental Clinic (Demo Placeholder)",
  name: "Dr. Vikram Sharma",
  qualifications: "BDS, MDS (Prosthodontics & Implants)",
  experience: "15+ Yrs Practice (Demo)",
  rating: "4.9",
  roleLabel: "Senior Specialist (Demo)",
  isDemoPlaceholder: true,
};
