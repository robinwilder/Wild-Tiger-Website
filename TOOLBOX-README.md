# Wild Tiger Design - Free Toolbox

A collection of free, web-based tools for image editing and file conversion.

## 🛠️ Available Tools

### 1. **File Converter** ✅ (Works Immediately)
- **Image Converter**: Convert between JPG, PNG, WebP formats with quality control
- **HEIC to JPG/PNG**: Convert iPhone photos to standard formats
- **Images to PDF**: Combine multiple images into a single PDF document

**Features:**
- ✅ 100% client-side processing (no uploads to server)
- ✅ Privacy-focused - files never leave your browser
- ✅ Works offline after initial page load
- ✅ Drag & drop interface
- ✅ Batch processing support

**How to Use:**
1. Open `toolbox.html` in your browser
2. Select the converter tab you need
3. Drag and drop files or click to browse
4. Choose your output format and quality
5. Convert and download!

---

### 2. **Background Remover** 🔧 (Requires Setup)
AI-powered background removal using the U2-Net model.

**Features:**
- 🤖 AI-powered for high-quality results
- 📸 Perfect for product photos and portraits
- 🎨 Export as PNG, WebP, or JPEG
- 🔄 Before/After comparison slider

**Status:** Requires backend server deployment (see instructions below)

---

## 🚀 Quick Start

### For File Converter (No Setup Required)

Simply open `toolbox.html` in any modern web browser. All tools work immediately!

```bash
# Option 1: Double-click toolbox.html in Finder

# Option 2: Open in Chrome from Terminal
open -a "Google Chrome" toolbox.html
```

### For Background Remover (Setup Required)

See the detailed deployment guide: [`background-remover/DEPLOYMENT.md`](background-remover/DEPLOYMENT.md)

**Quick Local Test:**
```bash
cd background-remover
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

Then open `background-remover/index.html` in your browser.

---

## 📦 Deployment Options

### File Converter
The file converter is ready to deploy as-is:
- Works on any static hosting (GitHub Pages, Netlify, Vercel, etc.)
- No server required
- No environment variables needed

### Background Remover
Requires a Python backend. Recommended options:

1. **Railway.app** (Easiest)
   - Free tier available
   - Auto-deploys from GitHub
   - See `background-remover/DEPLOYMENT.md`

2. **Render.com** (Also Easy)
   - Free tier available
   - Simple GitHub integration

3. **Your Own VPS** (Most Control)
   - DigitalOcean, Linode, etc.
   - Full deployment guide included

---

## 🌐 Deploying to Your Website

### Step 1: Push to GitHub

```bash
cd wild-tiger-design
git add .
git commit -m "Add toolbox with file converter and background remover"
git push origin main
```

### Step 2: Deploy Frontend (GitHub Pages)

**Option A: Via GitHub.com**
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from main branch
4. Select `/` (root) folder
5. Save

Your site will be live at: `https://yourusername.github.io/wild-tiger-design/`

**Option B: Via Command Line**
```bash
# If you have GitHub Pages enabled, just push
git push origin main

# Or use gh-pages branch
git checkout -b gh-pages
git push origin gh-pages
```

### Step 3: Deploy Background Remover Backend (Optional)

If you want the background remover to work:
1. Follow `background-remover/DEPLOYMENT.md`
2. Deploy to Railway, Render, or your VPS
3. Update the API URL in `background-remover/index.html`

---

## 🔧 Configuration

### File Converter
No configuration needed! It works out of the box.

### Background Remover
Update the API URL in `background-remover/index.html`:

```javascript
// Line 478
const API_URL = 'http://localhost:8000';  // For local testing

// For production, change to:
const API_URL = 'https://your-backend.railway.app';
```

---

## 📁 Project Structure

```
wild-tiger-design/
├── toolbox.html                    # Main toolbox page
├── file-converter-module.html      # File converter component
├── background-remover/             # Background remover tool
│   ├── index.html                  # Frontend
│   ├── main.py                     # Backend API
│   ├── requirements.txt            # Python dependencies
│   ├── Procfile                    # For Railway/Render
│   ├── runtime.txt                 # Python version
│   ├── DEPLOYMENT.md               # Deployment guide
│   └── README.md                   # Tool documentation
├── TOOLBOX-README.md               # This file
└── ...                             # Other website files
```

---

## 🎨 Customization

### Change Colors
The file converter uses CSS variables. Update in `file-converter-module.html`:

```css
.fc-module {
  --fc-teal: rgb(20, 103, 101);      /* Your brand color */
  --fc-bg-card: rgba(26, 26, 26, 0.7);
  /* ... other variables */
}
```

### Add More Tools
Tools are modular! To add a new tool:
1. Create a new section in `toolbox.html`
2. Add a card in the "Image Tools Overview" section
3. Create the tool interface (similar to file converter)

---

## 🔍 Browser Support

### File Converter
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Background Remover
- ✅ All modern browsers
- ⚠️ Requires backend server

---

## 📊 Performance

### File Converter
- Processing: Instant to 2 seconds (depending on image size)
- No server load - all processing in browser
- Works offline after first load

### Background Remover
- First request: 5-10 seconds (model download)
- Subsequent requests: 2-5 seconds
- Server-side processing

---

## 🐛 Troubleshooting

### File Converter Issues

**"Tools not showing up"**
- Make sure you're viewing `toolbox.html` not `file-converter-module.html`
- Try refreshing the page

**"File conversion fails"**
- Check browser console for errors
- Ensure file is a valid image format
- Try a smaller file size

**"HEIC conversion not working"**
- HEIC support requires the heic2any library
- Check that the CDN scripts are loading

### Background Remover Issues

**"Connection refused"**
- Make sure the backend server is running
- Check the API_URL matches your server

**"Slow processing"**
- First request downloads the AI model (~176MB)
- Subsequent requests should be faster
- Consider upgrading server resources

---

## 📄 License

- File Converter: MIT License
- Background Remover: MIT License
- rembg (AI library): MIT License
- U2-Net model: Apache 2.0 License

Free to use for personal and commercial projects!

---

## 🤝 Contributing

Want to add more tools? Here's how:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/new-tool`
3. Add your tool following the existing structure
4. Test thoroughly
5. Submit a pull request

---

## 📞 Support

Need help?
- Check the `DEPLOYMENT.md` for detailed deployment instructions
- Review this README for usage information
- Open an issue on GitHub
- Visit [wildtigerdesign.com](https://wildtigerdesign.com)

---

## 🎯 Roadmap

Future tools under consideration:
- [ ] Image resizer/cropper
- [ ] PDF to Images converter
- [ ] Image compression tool
- [ ] Watermark tool
- [ ] Batch rename utility
- [ ] Color palette generator

---

**Built with ❤️ by Wild Tiger Design**
