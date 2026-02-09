# Deployment Checklist

Follow this checklist to deploy the Wild Tiger Design website on Vercel.

## Pre-Deployment Checklist

### 1. Test Locally
- [ ] Open `index.html` in Chrome and verify all pages load
- [ ] Test Website Analyzer (requires Vercel CLI for local serverless function testing)
- [ ] Test all Toolbox tools in `toolbox/` folder
- [ ] Verify all navigation links work
- [ ] Check mobile responsiveness

### 2. Review Environment Variables
- [ ] `PAGESPEED_API_KEY` is set in Vercel project settings (Settings → Environment Variables)
- [ ] API key is valid and the PageSpeed Insights API is enabled in Google Cloud Console
- [ ] Variable is enabled for Production (and optionally Preview/Development)

### 3. Review Vercel Configuration
- [ ] `vercel.json` has correct rewrite rules for `/api/*` routes
- [ ] `vercel.json` has correct HTML rewrite rules (excluding `/api/` and static files)
- [ ] Clean URLs enabled

### 4. Git Repository
- [ ] All files staged for commit
- [ ] No sensitive data (API keys, passwords) in committed files
- [ ] `.gitignore` excludes `.env`, `.env.local`, and `node_modules/`

---

## Deployment Steps

### Step 1: Commit and Push to GitHub

```bash
cd ~/wild-tiger-design

# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# Push to main branch
git push origin main
```

Vercel automatically deploys when changes are pushed to `main`.

### Step 2: Verify Deployment

1. Go to [Vercel Dashboard](https://vercel.com/) → your project → Deployments
2. Wait for the latest deployment to show a green checkmark
3. Click the deployment URL to preview

### Step 3: Test Live Site

#### Core Pages
- [ ] Homepage loads correctly
- [ ] All service pages load (web-design, web-hosting, ai-consulting)
- [ ] Portfolio pages load with project details
- [ ] Contact form submits to Formspree
- [ ] 404 page displays for invalid URLs
- [ ] Clean URLs work (e.g., `/about` instead of `/about.html`)

#### Website Analyzer
- [ ] Navigate to `/website-analyzer`
- [ ] Enter a URL and click Analyze
- [ ] Performance scores display correctly
- [ ] Core Web Vitals metrics appear
- [ ] Improvement opportunities are listed
- [ ] Hosting information is detected
- [ ] Technology stack inference works
- [ ] PDF report downloads successfully

#### Toolbox
- [ ] All 10 tools load from the toolbox page
- [ ] Case Converter works
- [ ] Color Picker works
- [ ] Email Signature Generator works
- [ ] File Converter works (test image format conversion)
- [ ] Gradient Generator works
- [ ] Image Compressor works
- [ ] Image Resizer works
- [ ] PDF Merger works
- [ ] PDF Splitter works
- [ ] Word Counter works

#### API Endpoint
- [ ] Test directly: `https://wildtigerdesign.com/api/analyze?url=https://google.com`
- [ ] Returns JSON with Lighthouse data (not a 500 error)

### Step 4: Browser Testing

- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

---

## Troubleshooting

### Website Analyzer returns "Server configuration error"
- Check that `PAGESPEED_API_KEY` is set in Vercel Environment Variables
- **Important:** Redeploy after adding/changing environment variables
- Check Vercel function logs: Deployments → latest → Functions → `/api/analyze`

### Clean URLs not working
- Verify `vercel.json` has the correct rewrite and redirect rules
- Check that `"cleanUrls": true` is set

### API routes returning HTML instead of JSON
- Ensure `vercel.json` has the `/api/:path*` rewrite rule listed **before** the HTML rewrite rule
- The HTML rewrite pattern must exclude `/api/` paths

### Deployment fails
- Check Vercel build logs for errors
- Verify no syntax errors in `vercel.json`
- Ensure `api/analyze.js` exports a valid serverless function

### Toolbox tools not loading
- Clear browser cache
- Check browser console for JavaScript errors
- Verify CDN scripts are accessible (Tailwind CSS, jsPDF, etc.)

---

## Post-Deployment Monitoring

- Check Vercel Analytics for traffic and performance
- Monitor Vercel function logs for API errors
- Review Google Cloud Console for PageSpeed API usage and quota
- Test the Website Analyzer periodically to ensure it's working

---

**Last Updated:** February 2026
