import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY;

console.log("supabase", { supabaseKey, supabaseUrl });

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
