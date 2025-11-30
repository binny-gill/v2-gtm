# Deployment Guide - GitHub & Vercel Setup

## Step 1: Authenticate with GitHub CLI

Run this command and follow the prompts:
```bash
gh auth login
```

When prompted:
- Choose "GitHub.com"
- Choose your preferred authentication method (HTTPS recommended)
- Authenticate via browser or token

## Step 2: Create GitHub Repository

After authentication, run:
```bash
gh repo create v2-gtm --public --source=. --remote=origin --push
```

This will:
- Create a repository named `v2-gtm` under your `binny-gill` GitHub account
- Add it as the `origin` remote
- Push your code to GitHub

## Step 3: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and log in to your account (binny-kognitoscoms-projects)

2. Click **"New Project"**

3. You'll see a list of your GitHub repositories. If you don't see `binny-gill/v2-gtm`:
   - Click **"Adjust GitHub App Permissions"** or **"Configure GitHub App"**
   - Make sure `binny-gill` account is connected
   - Grant necessary permissions

4. Select the `v2-gtm` repository

5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

6. Click **"Deploy"**

## Alternative: Manual GitHub Setup

If you prefer to create the repo manually:

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `v2-gtm`
3. Choose Public or Private
4. **Don't** initialize with README (we already have one)
5. Click "Create repository"

Then run:
```bash
git remote add origin https://github.com/binny-gill/v2-gtm.git
git push -u origin main
```

## Verify Deployment

After deployment, Vercel will provide you with:
- Production URL: `https://v2-gtm.vercel.app` (or your custom domain)
- Preview URLs for each branch/PR

Your site will automatically redeploy on every push to the `main` branch!

