// Import the Supabase client creator function
import { createClient } from '@supabase/supabase-js';

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Create and export a Supabase client instance using credentials from environment variables
export const supabase = createClient(
  process.env.SUPABASE_URL, // Supabase project URL
  process.env.SUPABASE_KEY  // Supabase service role or anon key
);
