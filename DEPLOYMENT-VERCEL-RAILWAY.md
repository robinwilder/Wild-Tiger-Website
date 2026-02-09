# Deployment Guide: Vercel

## Overview

Wild Tiger Design is deployed entirely on **Vercel**, which handles both the static frontend and the serverless API function for the Website Analyzer.

---

## What Vercel Hosts

### Static Frontend
- All HTML pages (homepage, services, portfolio, toolbox, etc.)
- JavaScript files (`js/website-analyzer.js`)
- CSS (Tailwind via CDN)
- Images and assets

### Serverless Function
- `api/analyze.js` — Secure proxy for Google PageSpeed Insights API
- Reads the `PAGESPEED_API_KEY` environment variable
- Called by the Website Analyzer frontend at `/api/analyze?url=...`

### Why Vercel
- Super fast global CDN for static assets
- Built-in serverless functions for API routes
- Free tier covers static sites and serverless functions
- Auto-deploys from GitHub on every push to `main`
- Clean URLs and routing via `vercel.json`

---

## Deployment Steps

### Step 1: Push to GitHub

```bash
cd ~/wild-tiger-design
git add .
git commit -m "Description of changes"
git push origin main
```

### Step 2: Vercel Auto-Deploys

Vercel is connected to the GitHub repository and automatically deploys when changes are pushed to the `main` branch. Deployments typically complete in under 30 seconds.

### Step 3: Set Environment Variables (First Time Only)

1. Go to [Vercel Dashboard](https://vercel.com/) → your project
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Name:** `PAGESPEED_API_KEY`
   - **Value:** Your Google PageSpeed API key
   - **Environments:** Production, Preview, Development
4. Click **Save**
5. **Redeploy** the project for the variable to take effect

See [PAGESPEED-API-SETUP.md](PAGESPEED-API-SETUP.md) for full API key setup instructions.

### Step 4: Verify Deployment

1. Visit your live site: [https://wildtigerdesign.com](https://wildtigerdesign.com)
2. Test the Website Analyzer: navigate to `/website-analyzer` and analyze a URL
3. Test the API endpoint directly: `https://wildtigerdesign.com/api/analyze?url=https://google.com`

---

## Vercel Configuration

The `vercel.json` file controls routing:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/:path((?!api)(?!.*\\\\.).*)",
      "destination": "/:path.html"
    }
  ],
  "redirects": [
    {
      "source": "/:path*.html",
      "destination": "/:path*",
      "permanent": true
    }
  ],
  "cleanUrls": true
}
```

**What this does:**
- `/api/*` routes are passed through to serverless functions (not rewritten to HTML)
- All other clean paths (e.g., `/about`) are mapped to their HTML files (e.g., `/about.html`)
- Direct `.html` URLs are permanently redirected to clean URLs
- `cleanUrls: true` enables Vercel's built-in clean URL handling

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PAGESPEED_API_KEY` | Google PageSpeed Insights API key | Yes |

**Important:** Environment variables only take effect after a deployment. If you add or change a variable, you must redeploy.

---

## Custom Domain

The site uses a custom domain configured via:
- **CNAME file** in the repository root (for DNS)
- **Vercel Domains settings** (Settings → Domains)
- Domain: `wildtigerdesign.com`

---

## Troubleshooting

### Website Analyzer not working
1. Check that `PAGESPEED_API_KEY` is set in Vercel Environment Variables
2. Make sure you redeployed after adding the variable
3. Test the API endpoint: `https://wildtigerdesign.com/api/analyze?url=https://google.com`
4. Check Vercel function logs for errors

### API returns HTML instead of JSON
- The `/api/:path*` rewrite rule must be listed **before** the HTML rewrite rule in `vercel.json`

### Deployment stuck or failing
- Check Vercel build logs in the Deployments tab
- Verify `vercel.json` has valid JSON syntax
- Ensure `api/analyze.js` exports a default function

### Clean URLs not working
- Verify `"cleanUrls": true` is set in `vercel.json`
- Check that redirect and rewrite rules are correct

---

## Local Development

To test the serverless function locally:

```bash
# Install Vercel CLI
npm i -g vercel

# Run local development server (includes serverless functions)
vercel dev
```

This starts a local server that mimics the Vercel deployment environment, including serverless function support and environment variables from `.env.local`.

---

**Last Updated:** February 2026
