# Sai Dental Clinic — Website & Admin Dashboard

A modern, responsive dental clinic website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- Responsive dental clinic website
- Treatment listings managed through Supabase
- Appointment and enquiry forms
- Admin dashboard for managing enquiries
- Enquiry status updates, search, filters, and internal notes
- Doctor profile and image management
- Treatment management with publish/unpublish controls
- Supabase Authentication and Row Level Security (RLS)
- Image uploads using Supabase Storage

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Supabase (Database, Authentication, Storage)
- `@supabase/ssr`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Never commit `.env.local` or secret/service-role keys to GitHub.

### 3. Set up the database

Run the SQL migration from:

`supabase/migrations/20261026_clinic_cms_init.sql`

in your Supabase project's SQL Editor.

Create an administrator account and configure its admin access before using the dashboard.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
```

## Important Notes

- Doctor details and clinic content may contain demo placeholders. Verify them before using this website for a real clinic.
- WhatsApp enquiry logging does not automatically receive incoming WhatsApp messages. That requires a separately configured WhatsApp Business API integration.
- Keep Supabase Row Level Security enabled.

## Status

Portfolio/demo project. Production readiness depends on database setup, authentication, security, and deployment verification.