# Google PageSpeed API Setup Instructions

The Website Analyzer requires a Google PageSpeed Insights API key to function.

## Steps to Get Your API Key:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Click on "Enable APIs and Services"
4. Search for "PageSpeed Insights API"
5. Click "Enable"
6. Go to "Credentials" in the left sidebar
7. Click "Create Credentials" → "API Key"
8. Copy your API key

## Add API Key to the Website:

1. Open `/js/website-analyzer.js`
2. Find line 20: `const PAGESPEED_API_KEY = 'YOUR_API_KEY_HERE';`
3. Replace `YOUR_API_KEY_HERE` with your actual API key
4. Save the file

## Example:
```javascript
const PAGESPEED_API_KEY = 'AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
```

## Rate Limits:
- Free tier: 25,000 queries per day
- No per-minute limit

## Optional: Restrict Your API Key
For security, you can restrict your API key to:
- Only work with PageSpeed Insights API
- Only work from your domain (wildtigerdesign.com)

To do this:
1. Click on your API key in the Credentials page
2. Under "API restrictions", select "Restrict key"
3. Select "PageSpeed Insights API"
4. Under "Website restrictions", add your domain
