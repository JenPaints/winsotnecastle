-- Quick fix for leads table submission issues
-- Run this in Supabase SQL Editor

-- 1. Check if table exists
SELECT * FROM leads LIMIT 1;

-- 2. Disable RLS temporarily for testing
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- 3. Verify the change
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'leads';

-- After this runs successfully, try submitting the form again
