import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublicKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabasePublicKey);

export default supabase;