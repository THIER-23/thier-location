import {createClient } from "@supabase/supabase-js"
const supabaseUrl ="https://cgowywufenjtphbwlxli.supabase.co"
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnb3d5d3VmZW5qdHBoYndseGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MTM4NDQsImV4cCI6MjA5NDE4OTg0NH0.NnAZ-kMQJX0X8NPkVMqtNACwsY0wTv8tjeJ9zfm0_98"
export const supabase = createClient(supabaseUrl, supabaseKey)