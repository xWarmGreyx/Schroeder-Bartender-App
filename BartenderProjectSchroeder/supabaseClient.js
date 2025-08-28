const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://gnzujaeiqussehciniam.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduenVqYWVpcXVzc2VoY2luaWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTQ2NDYsImV4cCI6MjA3MTE5MDY0Nn0.iGLFIKVkOlTEM5Ki5dAhvEDO8Rh2XU-AjVwt4H3N6zo';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;