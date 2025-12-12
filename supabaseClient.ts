import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xkvhnapuheuvqdypllni.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdmhuYXB1aGV1dnFkeXBsbG5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1NTc1MTgsImV4cCI6MjA4MTEzMzUxOH0.yJEQsSJSCe5zPOFGbxGmgDEsZPyGeQ9XjL7RCjlJhfI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);