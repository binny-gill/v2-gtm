# Connecting GitHub Repository to Vercel

## Problem
Vercel is not showing `https://github.com/binny-gill/v2-gtm` in the repository list.

## Solution: Connect GitHub Account to Vercel

### Step 1: Access Vercel GitHub Integration Settings

1. Go to [vercel.com](https://vercel.com) and log in to your account (`binny-kognitoscoms-projects`)

2. Click on your **profile icon** (top right) → **Settings**

3. In the left sidebar, click **"Git"** or **"Integrations"**

4. Look for **"GitHub"** in the list of Git providers

### Step 2: Connect or Reconfigure GitHub

**If GitHub is NOT connected:**
1. Click **"Connect GitHub"** or **"Install GitHub App"**
2. You'll be redirected to GitHub
3. Choose **"Select account"** and make sure `binny-gill` is selected
4. Grant Vercel access to repositories (or select specific repositories)
5. Click **"Install"** or **"Authorize"**

**If GitHub IS already connected but showing wrong account:**
1. Click **"Configure"** or **"Manage"** next to GitHub
2. Click **"Reconfigure"** or **"Change account"**
3. Select `binny-gill` account
4. Update repository access permissions

### Step 3: Grant Repository Access

When configuring the GitHub App, you can either:

**Option A: Grant access to all repositories**
- Select "All repositories"
- This gives Vercel access to all repos under `binny-gill`

**Option B: Grant access to specific repositories**
- Select "Only select repositories"
- Add `v2-gtm` to the list
- Click "Save" or "Update"

### Step 4: Refresh Vercel Dashboard

1. Go back to Vercel dashboard
2. Click **"New Project"**
3. The repository `binny-gill/v2-gtm` should now appear in the list

### Step 5: Import and Deploy

1. Click on `binny-gill/v2-gtm` repository
2. Vercel will auto-detect Next.js
3. Review settings:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
4. Click **"Deploy"**

## Alternative: Manual Import via URL

If the repository still doesn't appear:

1. In Vercel, click **"New Project"**
2. Look for **"Import Git Repository"** or **"Import from URL"**
3. Enter: `https://github.com/binny-gill/v2-gtm`
4. Click **"Continue"**
5. Follow the prompts to authorize access

## Troubleshooting

### If you see "Repository not found"
- Make sure you're logged into the correct GitHub account (`binny-gill`)
- Verify the repository exists at https://github.com/binny-gill/v2-gtm
- Check that the repository is Public (or you've granted Vercel access if it's Private)

### If GitHub account doesn't appear in Vercel
- Make sure you're logged into Vercel with the correct account
- Try disconnecting and reconnecting GitHub integration
- Clear browser cache and cookies, then try again

### If repository appears but deployment fails
- Check that `package.json` exists and has correct dependencies
- Verify `next.config.js` is present
- Check build logs in Vercel dashboard for specific errors

## Quick Check Commands

Verify your repository is accessible:
```bash
# Check remote URL
git remote -v

# Verify repository exists
gh repo view binny-gill/v2-gtm
```

## Need Help?

- Vercel Docs: https://vercel.com/docs/concepts/git
- GitHub App Settings: https://github.com/settings/installations
- Vercel Support: https://vercel.com/support

