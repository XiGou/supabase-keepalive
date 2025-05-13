const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseTableName = process.env.TABLE_NAME || "test";
const supabase = createClient(supabaseUrl, supabaseKey);

// Example query: Fetch all users from a 'users' table
async function queryUsers() {
  try {
    const { data, error } = await supabase
      .from(supabaseTableName) // Replace 'users' with your actual table name
      .select('*')
      .limit(10); // Limit to 10 records for demo purposes

    if (error) {
      console.error('Error fetching data:', error.message);
      process.exit(1);
    }

    console.log('Query Results:', data);
  } catch (err) {
    console.error('Unexpected error:', err.message);
    process.exit(1);
  }
}

// Run the query
queryUsers();