# dental-clinic

Sai Dental Clinic & Implant Centre - Modern dental clinic website and CMS admin dashboard built with Next.js 16, TypeScript, Tailwind CSS, and Supabase.

## Features
- **Public Website**: Modern, high-converting dental practice landing page with treatments showcase, doctor credentials, painless dentistry highlights, interactive WhatsApp booking, and responsive appointment enquiry form.
- **Admin CMS Dashboard**: Protected `/admin` panel to manage patient enquiries, update clinical treatments, and manage doctor profile details.
- **Supabase Integration**: PostgreSQL with Row-Level Security (RLS), Supabase Auth, and Storage buckets for media assets.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website, or [http://localhost:3000/admin](http://localhost:3000/admin) for the admin portal.
