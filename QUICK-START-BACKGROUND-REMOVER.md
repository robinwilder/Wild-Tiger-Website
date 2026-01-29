# Quick Start: Background Remover Deployment

## 🎯 Goal
Get your Background Remover tool working in 10 minutes!

---

## ✅ Step 1: Push to GitHub

```bash
cd ~/wild-tiger-design

# Add all files
git add .

# Commit
git commit -m "Add toolbox with background remover and file converter

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push
git push origin main
```

---

## ✅ Step 2: Deploy to Railway

### 2a. Sign Up
1. Go to https://railway.app
2. Click "**Login**" → "**Login with GitHub**"
3. Authorize Railway

### 2b. Create New Project
1. Click "**New Project**"
2. Select "**Deploy from GitHub repo**"
3. Choose your `wild-tiger-design` repository
4. Railway will automatically:
   - Detect Python in `background-remover/`
   - Read `requirements.txt`
   - Install all dependencies
   - Run `main.py`

### 2c. Wait for Deployment
- Takes 5-10 minutes first time
- Watch the logs in Railway dashboard
- Green checkmark = success!

### 2d. Get Your URL
1. Click on your deployment
2. Go to "**Settings**" → "**Networking**"
3. Click "**Generate Domain**"
4. Copy the URL (e.g., `https://background-remover-production.up.railway.app`)

---

## ✅ Step 3: Update Your Code

### 3a. Update API URL
Edit `background-remover/index.html` (line 486):

```javascript
// Change this:
const API_URL = 'YOUR_RAILWAY_URL_HERE';

// To your Railway URL:
const API_URL = 'https://background-remover-production.up.railway.app';
```

### 3b. Commit and Push
```bash
git add background-remover/index.html
git commit -m "Update background remover API URL to production"
git push origin main
```

---

## ✅ Step 4: Test It!

1. Open your website: `toolbox.html`
2. Scroll to "Background Remover"
3. Upload an image
4. Click "Remove Background"
5. ✨ It works!

---

## 🐛 Troubleshooting

### "Failed to fetch"
- Check Railway dashboard - is server running?
- Check API_URL matches your Railway domain
- Check browser console for CORS errors

### "Server Error"
- Check Railway logs for Python errors
- Verify all dependencies installed
- Restart the Railway deployment

### Still not working?
Check Railway logs:
1. Go to Railway dashboard
2. Click your deployment
3. Click "**View Logs**"
4. Look for error messages

---

## 💰 Cost

**Railway Free Tier:**
- 500 hours/month FREE
- $5/month after free tier
- More than enough for testing and small traffic

---

## 🔄 Alternative: Render.com

If Railway doesn't work, try Render:

1. Go to https://render.com
2. Sign up with GitHub
3. Click "**New**" → "**Web Service**"
4. Connect GitHub repo
5. Configure:
   - **Root Directory:** `background-remover`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Deploy!

---

## ✨ You're Done!

Your background remover is now:
- ✅ Live on the internet
- ✅ Accessible from anywhere
- ✅ Fully functional
- ✅ Integrated into your website

Visitors can now use the tool directly on your site!

---

## 📝 Next Steps

After deployment:
1. Test with different images
2. Monitor Railway usage
3. Share with users!
4. Consider adding more tools

---

**Questions?** Check `background-remover/DEPLOYMENT.md` for detailed docs.
