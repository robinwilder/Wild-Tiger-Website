# Deployment Guide: Vercel + Railway

## 🎯 Best Setup: Split Deployment

Deploy your Wild Tiger Design site using **both** Vercel and Railway for the best performance:

---

## 📦 What Goes Where

### Vercel (Frontend)
✅ `toolbox.html`
✅ `index.html`
✅ All HTML pages
✅ `file-converter-module.html`
✅ CSS, JavaScript, images
✅ Everything EXCEPT `background-remover/`

**Why Vercel for frontend:**
- ⚡ Super fast global CDN
- 🆓 Free for static sites
- 🔄 Auto-deploy from GitHub
- 🌐 Great for HTML/CSS/JS

### Railway (Backend)
✅ `background-remover/` folder only
✅ Python FastAPI server
✅ AI processing

**Why Railway for backend:**
- 🐍 Full Python support
- ⏱️ No timeout limits
- 🤖 Handles AI processing
- 💪 Always-on server

---

## 🚀 Deployment Steps

### Step 1: Deploy Frontend to Vercel

**1a. Push to GitHub (if not already done)**
```bash
cd ~/wild-tiger-design
git add .
git commit -m "Add toolbox"
git push origin main
```

**1b. Deploy to Vercel**
1. Go to https://vercel.com
2. Log in with your existing account
3. Click "**Add New Project**"
4. Select your `wild-tiger-design` repository
5. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** (leave empty - it's static)
   - **Output Directory:** `./` (leave as default)
6. Click "**Deploy**"

**1c. Get Your Vercel URL**
- Vercel gives you: `https://wild-tiger-design.vercel.app`
- Or use your custom domain!

---

### Step 2: Deploy Backend to Railway

**2a. Sign Up for Railway**
1. Go to https://railway.app
2. Click "**Login with GitHub**"
3. Authorize Railway

**2b. Create New Project**
1. Click "**New Project**"
2. Select "**Deploy from GitHub repo**"
3. Choose `wild-tiger-design` repository

**2c. Configure Root Directory**
Railway needs to know where the Python app is:

1. Click on your deployment
2. Go to "**Settings**"
3. Find "**Root Directory**"
4. Set to: `background-remover`
5. Save

**2d. Wait for Build**
- Takes 5-10 minutes
- Watch logs for progress
- Green checkmark = success!

**2e. Generate Domain**
1. Go to "**Settings**" → "**Networking**"
2. Click "**Generate Domain**"
3. Copy URL: `https://bg-remover-production.up.railway.app`

---

### Step 3: Connect Frontend to Backend

**3a. Update API URL in Code**

Edit `background-remover/index.html`:
```javascript
// Line 486 - change from:
const API_URL = 'YOUR_RAILWAY_URL_HERE';

// To your Railway URL:
const API_URL = 'https://bg-remover-production.up.railway.app';
```

**3b. Push Update**
```bash
git add background-remover/index.html
git commit -m "Connect background remover to Railway backend"
git push origin main
```

Vercel will **auto-deploy** your update! (takes ~30 seconds)

---

### Step 4: Update CORS (Important!)

The Railway backend needs to allow requests from your Vercel domain.

Edit `background-remover/main.py`:

<function_calls>
<invoke name="Read">
<parameter name="file_path">/Users/wtd/wild-tiger-design/background-remover/main.py