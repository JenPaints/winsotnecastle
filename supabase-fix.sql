-- Temporary fix: Disable RLS to test connection
-- Run this in Supabase SQL Editor

-- First, let's see what we have
SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'leads';

-- Disable RLS temporarily
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- Test if table exists and is accessible
SELECT COUNT(*) FROM leads;
