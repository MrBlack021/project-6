# Huntifyy - Full-Stack AI & Startup Launchpad with Supabase

This is a full-stack application built with a React frontend (Vite) and a Node.js/Express backend, designed to run as a serverless function on Vercel and integrated with Supabase for the database and file storage.

## Supabase Setup (Required)

This project uses Supabase as its backend-as-a-service. You will need a free Supabase account to run this project.

### 1. Create a New Supabase Project

1.  Go to [supabase.com](https://supabase.com/) and create a new project.
2.  Save your **Project URL** and **`anon` public key**. You will need these for your environment variables.

### 2. Set Up Database Tables

Navigate to the **SQL Editor** in your Supabase project dashboard and run the following queries one by one to create the necessary tables.

**`registrations` table:**
```sql
CREATE TABLE registrations (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  registration_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  program TEXT NOT NULL,
  idea TEXT,
  pitch_deck_url TEXT
);
-- Enable Row Level Security but keep it restricted for now
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
-- For a real app, you would add policies to protect this data.
-- For this project, we'll allow insert for the serverless function.
CREATE POLICY "Enable insert for all users" ON registrations FOR INSERT WITH CHECK (true);
```

**`contacts` table:**
```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL
);
-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable insert for all users" ON contacts FOR INSERT WITH CHECK (true);
```

### 3. Set Up Supabase Storage

1.  Navigate to the **Storage** section in your Supabase dashboard.
2.  Create a new **public** bucket named `pitch_decks`.
3.  Click on the new bucket, go to **Bucket settings**, and add a policy to allow uploads. You can use the "Allow public uploads" policy template for simplicity.

## Local Development Setup

### 1. Environment Variables

Create a new file named `.env` in the root of the project directory (at the same level as `package.json`). Add your Supabase credentials to it:

```
# .env file
SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_PUBLIC_KEY
```
Replace the placeholder values with your actual Supabase Project URL and anon key.

### 2. Install Dependencies

Install the dependencies for both the frontend and the backend server.

```bash
# Install root (frontend) dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..
```

### 3. Run the Application

This project is configured for Vercel, which can run serverless functions locally.

1.  **Install the Vercel CLI:**
    ```bash
    npm i -g vercel
    ```
2.  **Run the development server:**
    ```bash
    vercel dev
    ```
This command will start both the frontend Vite server and the backend serverless function, simulating the Vercel environment. Your application will be available at a local URL (usually `http://localhost:3000`).

## Vercel Deployment

1.  Push your code to a Git repository (GitHub, GitLab, etc.).
2.  Import the project into Vercel. Vercel should automatically detect the Vite frontend.
3.  Go to the project **Settings > Environment Variables** in Vercel.
4.  Add your `SUPABASE_URL` and `SUPABASE_ANON_KEY` as environment variables.
5.  Deploy! Vercel will build the frontend and deploy the `server/index.js` file as a serverless function. The `vercel.json` file will handle routing API requests correctly.