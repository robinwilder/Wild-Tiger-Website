# Google PageSpeed API Setup Instructions

The Website Analyzer uses a secure serverless proxy (`/api/analyze.js`) to call the Google PageSpeed Insights API. The API key is stored as a Vercel environment variable and is never exposed to the browser.

## Architecture

```
Browser → /api/analyze?url=... → Vercel Serverless Function → Google PageSpeed API
                                   (reads PAGESPEED_API_KEY
                                    from environment variable)
```

## Steps to Get Your API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Click on "Enable APIs and Services"
4. Search for "PageSpeed Insights API"
5. Click "Enable"
6. Go to "Credentials" in the left sidebar
7. Click "Create Credentials" → "API Key"
8. Copy your API key

## Add API Key to Vercel

The API key must be set as an environment variable in your Vercel project:

1. Go to [Vercel Dashboard](https://vercel.com/) → your project
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `PAGESPEED_API_KEY`
   - **Value:** Your Google PageSpeed API key
   - **Environments:** Production, Preview, Development (select all)
4. Click **Save**
5. **Important:** Redeploy your project for the variable to take effect
   - Go to the **Deployments** tab → latest deployment → **Redeploy**
   - Or push a new commit to trigger automatic redeployment

## How It Works

- The frontend (`js/website-analyzer.js`) calls `/api/analyze?url=<target_url>`
- The Vercel serverless function (`api/analyze.js`) reads `process.env.PAGESPEED_API_KEY`
- The function forwards the request to Google PageSpeed API with the key attached
- Results are passed back to the browser for display
- The API key is never sent to or visible in the browser

## Verifying the Setup

Test the API endpoint directly after deployment:

```
https://wildtigerdesign.com/api/analyze?url=https://google.com
```

- **Success:** Returns JSON with Lighthouse performance data
- **Missing API key:** Returns `{"error": "Server configuration error", "hint": "Environment variable PAGESPEED_API_KEY not found"}`
- **Invalid API key:** Returns a Google API error with status 400 or 403

## Rate Limits

- Free tier: 25,000 queries per day
- No per-minute limit

## Optional: Restrict Your API Key

For additional security, restrict your API key in the Google Cloud Console:

1. Click on your API key in the Credentials page
2. Under "API restrictions", select "Restrict key"
3. Select "PageSpeed Insights API"
4. Under "Application restrictions", you can restrict by HTTP referrer or IP
   - Note: Since the key is used server-side on Vercel, IP restrictions may not be practical

## Troubleshooting

### "Server configuration error" / API key not found
- Verify the environment variable is named exactly `PAGESPEED_API_KEY` in Vercel
- Make sure you redeployed after adding the variable
- Check the Vercel function logs for debugging output

### "Failed to analyze website"
- Verify the target URL is accessible
- Check Vercel function logs for error details
- Ensure the PageSpeed Insights API is enabled in your Google Cloud project

### API returns 403 Forbidden
- Your API key may be invalid or expired
- The PageSpeed Insights API may not be enabled
- You may have hit rate limits
