# Deployment Checklist

Follow this checklist to deploy your Wild Tiger Design website with the new Toolbox features.

## ✅ Pre-Deployment Checklist

### 1. Test Locally
- [ ] Open `toolbox.html` in Chrome
- [ ] Test File Converter - Image Conversion
- [ ] Test File Converter - HEIC Conversion
- [ ] Test File Converter - Images to PDF
- [ ] Verify all navigation links work
- [ ] Check mobile responsiveness

### 2. Review Changes
- [ ] All Toolbox navigation links added to pages
- [ ] File converter embedded and working
- [ ] Background remover card has correct link
- [ ] Footer updated with Toolbox link

### 3. Git Repository
- [ ] All files staged for commit
- [ ] Commit message written
- [ ] Repository pushed to GitHub

---

## 🚀 Deployment Steps

### Step 1: Commit Changes to GitHub

```bash
# Navigate to your project
cd ~/wild-tiger-design

# Add all new files
git add .

# Commit with descriptive message
git commit -m "Add Toolbox with File Converter and Background Remover

- Added new Toolbox page with free tools
- Integrated File Converter (JPG/PNG/WebP, HEIC, Images to PDF)
- Added Background Remover tool (requires backend)
- Updated navigation across all pages
- Added deployment documentation

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
git push origin main
```

### Step 2: Deploy Frontend (GitHub Pages)

**If GitHub Pages is already enabled:**
- Changes will deploy automatically after push
- Wait 1-2 minutes for deployment
- Visit your site: `https://yourusername.github.io/wild-tiger-design/`

**If GitHub Pages is NOT enabled:**
1. Go to GitHub.com → Your Repository
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: Select "main" branch
5. Folder: Select "/ (root)"
6. Click "Save"
7. Wait for deployment (check Actions tab)

### Step 3: Test Live Site

Visit your live website and verify:
- [ ] Homepage loads correctly
- [ ] Toolbox link appears in navigation
- [ ] Toolbox page loads and displays both tools
- [ ] File Converter works (try converting an image)
- [ ] Background Remover shows "Open Tool" link

### Step 4: Deploy Background Remover (Optional)

**Choose One Deployment Method:**

#### Option A: Railway (Recommended)
1. Sign up at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `wild-tiger-design` repository
4. Railway will auto-detect Python in `background-remover/`
5. Wait for deployment (5-10 minutes)
6. Copy the deployment URL

#### Option B: Render
1. Sign up at [render.com](https://render.com)
2. New → Web Service
3. Connect your GitHub repo
4. Root directory: `background-remover`
5. Build: `pip install -r requirements.txt`
6. Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. Deploy

#### Option C: Your Own Server
See detailed guide in `background-remover/DEPLOYMENT.md`

### Step 5: Connect Background Remover to Frontend

After deploying the backend:

1. Get your backend URL (e.g., `https://your-app.railway.app`)
2. Update `background-remover/index.html`:
   ```javascript
   // Line 478 - Change from:
   const API_URL = 'http://localhost:8000';

   // To your deployed URL:
   const API_URL = 'https://your-app.railway.app';
   ```
3. Commit and push:
   ```bash
   git add background-remover/index.html
   git commit -m "Update background remover API URL to production"
   git push origin main
   ```

---

## 🧪 Post-Deployment Testing

### File Converter Tests
- [ ] Image format conversion (JPG → PNG)
- [ ] Quality slider works
- [ ] Multiple file upload
- [ ] Download converted files
- [ ] HEIC conversion (if you have HEIC files)
- [ ] Images to PDF creation

### Background Remover Tests (if deployed)
- [ ] Upload an image
- [ ] Background removal processes successfully
- [ ] Before/After slider works
- [ ] Download processed image
- [ ] Try different output formats (PNG, WebP, JPEG)

### Navigation Tests
- [ ] Toolbox link works from all pages
- [ ] Mobile menu includes Toolbox
- [ ] Footer includes Toolbox link
- [ ] All pages load without errors

### Browser Tests
Test on multiple browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iPhone)
- [ ] Mobile Chrome (Android)

---

## 📊 Monitoring

After deployment, monitor:

### GitHub Pages
- Check Actions tab for deployment status
- Monitor any build failures

### Backend (if deployed)
- Check Railway/Render dashboard for:
  - Server status
  - Resource usage
  - Error logs
  - Request counts

### Performance
- Test tool speed with various file sizes
- Monitor browser console for errors
- Check mobile performance

---

## 🐛 Troubleshooting

### "Toolbox page not loading"
- Check GitHub Pages deployment status
- Clear browser cache
- Verify all files were pushed to GitHub

### "File Converter not working"
- Check browser console for JavaScript errors
- Verify CDN scripts are loading (jsPDF, heic2any)
- Test with a different browser

### "Background Remover connection refused"
- Verify backend is deployed and running
- Check API_URL is correct
- Check CORS settings in backend

### "GitHub Pages shows 404"
- Verify branch is set to `main` in Pages settings
- Check file paths are correct (case-sensitive)
- Wait a few minutes for propagation

---

## 🎉 Success Criteria

Deployment is complete when:
- ✅ Website is live on GitHub Pages
- ✅ Toolbox page is accessible
- ✅ File Converter works in production
- ✅ All navigation links function correctly
- ✅ Mobile version displays properly
- ✅ (Optional) Background Remover backend is deployed and connected

---

## 📝 Next Steps

After successful deployment:

1. **Announce the new feature:**
   - Add to homepage
   - Social media announcement
   - Email subscribers

2. **Gather feedback:**
   - Monitor user behavior
   - Collect feature requests
   - Track tool usage

3. **Plan improvements:**
   - Add more tools
   - Enhance UI/UX
   - Optimize performance

---

## 🔄 Future Updates

To add new tools or make changes:

```bash
# Make your changes locally
# Test thoroughly

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main

# GitHub Pages will auto-deploy
# Backend: redeploy if changes affect it
```

---

## 📞 Need Help?

- Review `TOOLBOX-README.md` for detailed documentation
- Check `background-remover/DEPLOYMENT.md` for backend setup
- GitHub repository: [Your Repo URL]
- Website: https://wildtigerdesign.com

---

**Last Updated:** January 2026
