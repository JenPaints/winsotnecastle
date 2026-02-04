-- Winstone Castle Supabase Setup
-- Run this in your Supabase SQL Editor

-- 1. Create the leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies if any
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;
DROP POLICY IF EXISTS "Allow authenticated reads" ON leads;

-- 4. Create policy to allow anyone to insert leads (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- 5. Create policy to allow authenticated users to read leads (for admin)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT 
  TO authenticated
  USING (true);

-- 6. Verify the setup
SELECT 
  tablename, 
  policyname, 
  permissive, 
  roles, 
  cmd 
FROM pg_policies 
WHERE tablename = 'leads';
