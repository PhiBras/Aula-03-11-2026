const SUPABASE_URL = "https://zehtisoahyomgeujlfoi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_z-U5fG1-Aqqox3bYtl0V3Q_Jy5CkmoI";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
