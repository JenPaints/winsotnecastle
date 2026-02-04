-- Complete fix for Winstone Castle leads table
-- Run this in Supabase SQL Editor

-- 1. Drop all existing policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;
DROP POLICY IF EXISTS "Allow authenticated reads" ON leads;
DROP POLICY IF EXISTS "Enable insert for anon" ON leads;
DROP POLICY IF EXISTS "Enable read for authenticated" ON leads;

-- 2. Disable RLS completely (for testing)
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- 3. Verify RLS is disabled
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'leads';

-- The rowsecurity column should show 'false'
