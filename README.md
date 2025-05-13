# Supabase Query Script

This Node.js script queries a Supabase table and is automated to run daily via a GitHub Action. Follow the steps below to fork the project, configure environment variables, and enable the GitHub Action.

## Forking the Project

1. **Fork the Repository**:
   - Go to the original repository on GitHub.
   - Click the **Fork** button at the top-right to create a copy in your GitHub account.
   - Clone your forked repository:
     ```bash
     git clone https://github.com/your-username/your-repo-name.git
     cd your-repo-name
     ```

2. **Install Dependencies**:
   - Ensure Node.js (version 16 or higher) is installed.
   - Install the required package:
     ```bash
     npm install @supabase/supabase-js
     ```

## Configuring GitHub Action Environment Variables

The GitHub Action (`daily-supabase-query.yml`) requires three environment variables to query a Supabase table. Set them up in your forked repository:

1. **Navigate to GitHub Secrets**:
   - In your forked repository, go to **Settings > Secrets and variables > Actions > Secrets**.
   - Click **New repository secret** for each variable below.

2. **Add the Following Secrets**:
   - **NEXT_PUBLIC_SUPABASE_URL**:
     - **Description**: Your Supabase project URL.
     - **Example Value**: `https://fakexxxxxxxxxx.supabase.co`
     - **How to Find**: Get this from your Supabase project dashboard under **Settings > API > Project URL**.
   - **NEXT_PUBLIC_SUPABASE_ANON_KEY**:
     - **Description**: Your Supabase public anon key for read-only access.
     - **Example Value**: `efadfaseeEFDSDFSnR5cCI6IkpXVCJ9...` (use your actual key).
     - **How to Find**: Get this from your Supabase project dashboard under **Settings > API > Anon public key**.
   - **TABLE_NAME**:
     - **Description**: The name of the Supabase table to query (defaults to `test` if not set).
     - **Example Value**: `test`
     - **How to Find**: Use the name of an existing table in your Supabase database.

3. **Save Secrets**:
   - Enter each variable’s name and value, then click **Add secret**.

## Enabling the GitHub Action

The GitHub Action is pre-configured in `.github/workflows/daily-supabase-query.yml` to run daily at midnight UTC. To ensure it works:

1. **Verify the Workflow File**:
   - Check that `.github/workflows/daily-supabase-query.yml` exists in your forked repository. It should match the provided configuration, which uses the secrets you set.

2. **Push Changes**:
   - If you modify the repository (e.g., update the script or workflow), commit and push:
     ```bash
     git add .
     git commit -m "Set up GitHub Action"
     git push origin main
     ```

3. **Check Action Execution**:
   - Go to the **Actions** tab in your GitHub repository.
   - Confirm the **Daily Supabase Query** workflow is listed and runs daily.
   - You can manually trigger it by clicking **Run workflow** under the **Actions** tab.

## Notes

- Ensure your Supabase table exists and is accessible with the anon key. Disable row-level security.

## License

MIT License
