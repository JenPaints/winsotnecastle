# Winstone Castle - Supabase Setup Guide

## Step 1: Get Your API Keys

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/widaonzldthxstmrcugd
2. Click **Settings** (gear icon) in the left sidebar
3. Click **API** in the settings menu
4. Under "Project API keys", you'll see two keys:
   - **anon public** - Copy this (it's a long JWT token starting with `eyJhbG...`)
   - **service_role** - DO NOT use this in frontend

## Step 2: Run the Database Setup

1. In your Supabase Dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy and paste the entire contents of `supabase-setup.sql`
4. Click **Run** or press `Ctrl+Enter`
5. You should see "Success. No rows returned" - this is correct!

## Step 3: Update Environment Variables

1. Open the `.env.local` file in your project
2. Replace the `NEXT_PUBLIC_SUPABASE_ANON_KEY` with the **anon public** key you copied in Step 1
3. It should look like this:

```env
NEXT_PUBLIC_SUPABASE_URL=https://widaonzldthxstmrcugd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZGFvbnpsZHRoeHN0bXJjdWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2NTk2NTAsImV4cCI6MjA1NDIzNTY1MH0.XXXXXXXXXXXXXXXXXXXXXXXXX
```

(The X's should be replaced with your actual key)

## Step 4: Restart Your Dev Server

Stop and restart your development server to pick up the new environment variables.

## Step 5: Test the Form

1. Open your website at http://localhost:3000
2. Click "Request Private Access" or any CTA button
3. Fill out the form and submit
4. Check your Supabase Dashboard → **Table Editor** → **leads** table
5. You should see your submission!

## Troubleshooting

### Still getting 401 errors?

1. Make sure you copied the **anon** key, not the service_role key
2. Make sure you restarted the dev server after updating .env.local
3. Check that the RLS policies were created by running:
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'leads';
   ```
   You should see 2 policies listed.

### Can't find the anon key?

The anon key is in: **Settings → API → Project API keys → anon (public)**

It's a very long string (200+ characters) that starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
