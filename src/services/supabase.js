import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qndasgicwcjeyulqnwrg.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZGFzZ2ljd2NqZXl1bHFud3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MTcyNzUsImV4cCI6MjAwODA5MzI3NX0.yen-JllO8Rkujjuh-cDgAbF8ABe7Hcfal5uLGLt-nkM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
