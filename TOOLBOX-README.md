# Wild Tiger Design - Free Toolbox

A collection of 10 free, browser-based tools for web professionals and content creators. All tools run entirely in the browser — no files are uploaded to any server.

## Available Tools

### 1. Case Converter
Transform text between uppercase, lowercase, title case, sentence case, and more.

### 2. Color Picker
Pick colors visually and convert between HEX, RGB, and HSL formats. Copy values to clipboard.

### 3. Email Signature Generator
Create professional HTML email signatures with customizable fields, social links, and branding.

### 4. File Converter
Convert between image formats including JPG, PNG, WebP, and HEIC with quality control.

### 5. Gradient Generator
Create CSS linear and radial gradients with a visual editor. Copy CSS code directly.

### 6. Image Compressor
Reduce image file sizes while maintaining quality. Supports batch processing.

### 7. Image Resizer
Resize images to custom dimensions with aspect ratio lock and multiple output formats.

### 8. PDF Merger
Combine multiple PDF files into a single document. Drag and drop to reorder pages.

### 9. PDF Splitter
Split PDF files into individual pages or custom page ranges.

### 10. Word Counter
Count words, characters, sentences, paragraphs, and estimate reading time.

---

## Key Features

- **100% Client-Side**: All processing happens in the browser — no files are uploaded to any server
- **Privacy-Focused**: Your files never leave your device
- **No Account Required**: All tools are free to use without registration
- **Works Offline**: Tools work after the initial page load (CDN scripts must load first)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Theme**: Consistent with the Wild Tiger Design brand

---

## Quick Start

All tools are accessible from the toolbox page on the live site or locally:

```bash
# Open any tool directly in your browser
open toolbox/case-converter.html
open toolbox/color-picker.html
open toolbox/file-converter.html
# etc.
```

Or visit the live site: [https://wildtigerdesign.com](https://wildtigerdesign.com)

---

## File Structure

```
toolbox/
├── case-converter.html              # Case Converter
├── color-picker.html                # Color Picker
├── email-signature-generator.html   # Email Signature Generator
├── file-converter.html              # File Converter
├── gradient-generator.html          # Gradient Generator
├── image-compressor.html            # Image Compressor
├── image-resizer.html               # Image Resizer
├── pdf-merger.html                  # PDF Merger
├── pdf-splitter.html                # PDF Splitter
└── word-counter.html                # Word Counter
```

Each tool is a self-contained HTML file with embedded CSS and JavaScript.

---

## Deployment

The toolbox tools are static HTML files and require no server or build step:
- Works on any static hosting (Vercel, Netlify, GitHub Pages, etc.)
- No environment variables needed
- No server-side processing required

The Wild Tiger Design site is currently deployed on **Vercel**, which serves these files via a global CDN.

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## External Dependencies

Tools load the following libraries via CDN:
- **Tailwind CSS** — Styling
- **jsPDF** — PDF generation and manipulation
- **pdf-lib** — PDF merging and splitting
- **heic2any** — HEIC image conversion
- **Google Fonts (Inter)** — Typography

---

## Customization

### Change Brand Colors
Each tool uses CSS variables for consistent theming. The primary brand color is `#146765` (teal).

### Add a New Tool
1. Create a new HTML file in the `toolbox/` directory
2. Follow the structure of an existing tool for consistent layout and styling
3. Add a link to the new tool from the main toolbox navigation
4. Commit and push — Vercel auto-deploys

---

## Troubleshooting

### Tool not loading
- Clear browser cache and refresh
- Check browser console for JavaScript errors
- Verify CDN scripts are accessible (not blocked by ad blockers or firewalls)

### File conversion fails
- Ensure the file is a valid format
- Try a smaller file size
- Test in a different browser

### PDF tools not working
- Verify pdf-lib and jsPDF CDN scripts loaded successfully
- Check browser console for errors
- Some browsers have limitations with large PDF files

---

**Built by Wild Tiger Design** | [wildtigerdesign.com](https://wildtigerdesign.com)
