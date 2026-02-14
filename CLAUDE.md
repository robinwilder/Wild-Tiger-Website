# Wild Tiger Design - Project Context for Claude Code

> **This file is automatically read by Claude Code at session start.** It provides full project context so you can pick up where you left off.

## Start Here - Copy/Paste Prompt for New Sessions

Copy and paste this into a new Claude Code session to get started:

```
I'm working on the Wild Tiger Design website at /Users/wtd/wild-tiger-design.
Read CLAUDE.md for full project context — it has the file map, tech stack,
architecture, known issues, and TODO list. Check the TODO section and ask me
what I'd like to work on today.
```

---

## Quick Summary

Professional portfolio website for Wild Tiger Design, a digital agency offering web design, web hosting, AI consulting, and software development. The site includes a **Website Analyzer** tool (Google PageSpeed API) and a **Toolbox** with 10 free browser-based tools. Deployed on **Vercel** with auto-deploy from GitHub `main` branch.

**Live site:** https://wildtigerdesign.com
**Repo:** https://github.com/robinwilder/Wild-Tiger-Website
**Hosting:** Vercel (auto-deploys from `main` in ~30 seconds)
**Domain:** wildtigerdesign.com (configured via CNAME + Vercel Domains)

---

## Tech Stack

- **HTML5 + Vanilla JavaScript** (no frameworks for main site)
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`) on every page
- **Google Fonts** - Inter (weights 400-800)
- **Vercel** - hosting, clean URLs, serverless functions
- **Formspree** - contact form (`https://formspree.io/f/xkgpljwq` → robin@wildtigerdesign.com)
- **Google PageSpeed API** - called directly from frontend JS (API key is domain-restricted)
- **Google DNS API** + **ipinfo.io** - hosting/DNS lookups in Website Analyzer
- **jsPDF** + **jsPDF-autotable** - PDF report generation
- **pdf-lib** - PDF merge/split tools
- **heic2any** - HEIC image conversion

---

## Architecture

```
wildtigerdesign.com (Vercel)
├── Static HTML pages (17 pages + toolbox.html + file-converter-module.html)
├── /toolbox/ (10 client-side tools, no server needed)
├── /api/analyze.js (Vercel serverless function - PageSpeed API proxy, CURRENTLY UNUSED)
├── /js/website-analyzer.js (calls Google PageSpeed API directly with domain-restricted key)
└── vercel.json (routing: clean URLs, API passthrough, .html redirects)
```

**Important:** The serverless function at `api/analyze.js` exists but is **not currently used**. The Website Analyzer calls the Google PageSpeed API directly from the browser using a domain-restricted API key hardcoded in `js/website-analyzer.js` (line 25). This was changed because the serverless proxy approach had persistent deployment issues with environment variables.

---

## Services (4 total)

| Service | Page | Pricing |
|---------|------|---------|
| Web Design | `web-design.html` | Starter $1,200-$2,500 / Professional $3,500-$6,000 / Premium $8,000-$15,000 |
| Web Hosting | `web-hosting.html` | $150 setup + $25/mo |
| AI Consulting | `ai-consulting.html` | $50/hour |
| Software Development | `software-development.html` | Custom quoted per project |

**Software Development** covers: mobile apps (iOS & Android), web apps, desktop apps, and custom SaaS/CRMs for enterprise businesses.

The homepage (`index.html`) displays all 4 services in a **2x2 grid** (`md:grid-cols-2`).
The pricing page (`prices.html`) has web design tiers + an "Additional Services" section for hosting, AI consulting, and software dev.

---

## Environment Variables (Vercel)

| Variable | Value | Status |
|----------|-------|--------|
| `PAGESPEED_API_KEY` | Set in Vercel dashboard | Exists but NOT used by current code (serverless function is bypassed) |

The API key `AIzaSyAwCl4sPUWqaBgiddfJwPEpeGsuw5sUNrk` is hardcoded in `js/website-analyzer.js` line 25 and restricted to the wildtigerdesign.com domain.

---

## File Map

### Main Pages
| File | Purpose |
|------|---------|
| `index.html` | Homepage - hero, 4 services (2x2 grid), contact form (Formspree) |
| `about.html` | Company story, mission/vision, values carousel (6 items, auto-rotate) |
| `portfolio.html` | Project showcase (3 projects: Custom Controls, DrParkRx, Clinic Networking) |
| `portfolio-customcontrols.html` | Custom Controls of GA project detail → https://customcontrolsga.com/ |
| `portfolio-drparkrx.html` | DrParkRx pharmacy project detail → https://drsparkrx.com/ |
| `portfolio-clinicnetworking.html` | Clinic Networking IT services detail → https://clinicnetworking.com/ |
| `web-design.html` | Web design services page |
| `web-hosting.html` | Web hosting services page |
| `ai-consulting.html` | AI consulting services with values carousel |
| `software-development.html` | Software development services (mobile, web, desktop, SaaS/CRM) |
| `prices.html` | Web design pricing tiers + Additional Services section |
| `website-analyzer.html` | Free website analysis tool |
| `toolbox.html` | Landing page linking to all 10 toolbox tools |
| `privacy-policy.html` | Privacy policy |
| `terms-of-service.html` | Terms of service |
| `404.html` | Custom 404 with floating animation |

### Toolbox Tools (all client-side, self-contained HTML)
| File | Tool | Key Libraries |
|------|------|---------------|
| `toolbox/case-converter.html` | Case Converter | Vanilla JS |
| `toolbox/color-picker.html` | Color Picker | Vanilla JS |
| `toolbox/email-signature-generator.html` | Email Signature Generator | jsPDF |
| `toolbox/file-converter.html` | File Converter (JPG/PNG/WebP/HEIC) | jsPDF, heic2any |
| `toolbox/gradient-generator.html` | CSS Gradient Generator | Vanilla JS |
| `toolbox/image-compressor.html` | Image Compressor | Canvas API |
| `toolbox/image-resizer.html` | Image Resizer | Canvas API |
| `toolbox/pdf-merger.html` | PDF Merger | pdf-lib |
| `toolbox/pdf-splitter.html` | PDF Splitter | pdf-lib |
| `toolbox/word-counter.html` | Word Counter | Vanilla JS |

### JavaScript & API
| File | Purpose |
|------|---------|
| `js/website-analyzer.js` | All Website Analyzer logic (704 lines): form handling, PageSpeed API calls, DNS lookups, hosting detection, score gauges, PDF generation |
| `api/analyze.js` | Vercel serverless function (60 lines) - **EXISTS BUT UNUSED** - was a PageSpeed API proxy |

### Config
| File | Purpose |
|------|---------|
| `vercel.json` | Routing: /api passthrough, clean URLs, .html redirects |
| `.htaccess` | Apache rewrite rules (mirrors vercel.json for non-Vercel hosting) |
| `CNAME` | Custom domain: wildtigerdesign.com |
| `.gitignore` | Excludes: .env, node_modules, __pycache__, dist/build, IDE files |

### Other Files
| File | Purpose |
|------|---------|
| `file-converter-module.html` | Embeddable file converter component (used within toolbox) |

### Images (root directory)
| File | Size | Used? |
|------|------|-------|
| `tigerlogoforweb.png` | 34KB | Yes - main logo on all pages |
| `tigerfacetransparentwhite.png` | 8KB | Yes - alternative logo |
| `jungleimagehero.jpg` | 153KB | Yes - homepage hero background |
| `jungleimage3.jpg` | 276KB | Yes - contact section background |
| `codejungle.png` | 1.5MB | Yes - hero background on web-design.html and software-development.html |
| `junglehut.png` | 1.5MB | Yes - hero background on web-hosting.html |
| `robotinjungle.png` | 1.2MB | Yes - hero background on ai-consulting.html |
| `favicon.png` | 114KB | Yes |
| `favicon-32x32.png` | 1KB | Yes |
| `favicon-16x16.png` | 1KB | Yes |
| `apple-touch-icon.png` | 19KB | Yes |
| `jungleimagehero.png` | 1.2MB | Duplicate of .jpg version |
| `jungleimage3.png` | 1.6MB | Duplicate of .jpg version |
| `laptoptiger.png` | 1.1MB | Unused |
| `firewall.png` | 1.4MB | Unused |
| `tigerupclose.jpg` | 201KB | Unused |
| `tigerlogoforweb-backup.png` | 455KB | Backup only |

### Portfolio Images (`images/portfolio/`)
- Screenshots for 3 client projects: Custom Controls of GA, DrParkRx, Clinic Networking
- Key files: `customcontrolsofgasite.png`, `drparkrx.png`, `clinicnetworkingsite.png`
- Legacy Central Delivery screenshots still exist but are no longer linked

### Documentation
| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `PAGESPEED-API-SETUP.md` | Google PageSpeed API key setup guide |
| `DEPLOYMENT-CHECKLIST.md` | Pre/post deployment checklist |
| `DEPLOYMENT-VERCEL-RAILWAY.md` | Vercel deployment guide |
| `TOOLBOX-README.md` | Toolbox tools documentation |

---

## Navigation Structure (consistent across all pages)

**Desktop:** Logo | Home | Portfolio | Services | Website Analyzer | Toolbox | About | Contact (button)
**Mobile:** Hamburger menu with same links
**Footer:** Company info, Quick Links, Services (Web Design, Web Hosting, AI Consulting, Software Development) + Privacy Policy / Terms of Service

---

## Portfolio

| Project | Detail Page | Live Site | Screenshot |
|---------|-------------|-----------|------------|
| Custom Controls of GA | `portfolio-customcontrols.html` | https://customcontrolsga.com/ | `images/portfolio/customcontrolsofgasite.png` |
| DrParkRx | `portfolio-drparkrx.html` | https://drsparkrx.com/ | `images/portfolio/drparkrx.png` |
| Clinic Networking | `portfolio-clinicnetworking.html` | https://clinicnetworking.com/ | `images/portfolio/clinicnetworkingsite.png` |

Each portfolio detail page has: back link, title, project overview, "Visit Website" external link, screenshot, and back button.

---

## new-site/ Directory

A **separate React + TypeScript + Vite project** exists at `new-site/`. It is NOT deployed and NOT part of the live site. It appears to be a future redesign with:
- React 19, TypeScript 5.9, Vite 7.2, Tailwind CSS 3.4
- 15 page components, React Router, Framer Motion
- Has `node_modules` installed

**Status:** Development/exploration only. The main site remains static HTML.

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` (near black) |
| Cards | `#1a1a2e` (dark lighter) |
| Primary | `#146765` (teal) |
| Accent | `#4d65ff` (blue) |
| Text | `#ffffff` (white) |
| Secondary text | `#9ca3af` (gray) |
| Font | Inter (sans-serif) |
| Navbar | Fixed top, transparent → opaque on scroll with backdrop blur |

---

## Known Issues & Debt

1. **api/analyze.js is orphaned** - Serverless function exists but isn't called. Could be removed or kept as fallback.
2. **~4MB of unused images** in root (laptoptiger.png, firewall.png, duplicate .png versions of .jpg hero images).
3. **file-converter-module.html** at root level - unclear if it's linked from anywhere or orphaned.
4. **PAGESPEED-API-SETUP.md** still documents the serverless approach but the code now calls the API directly.
5. **Error message in website-analyzer.js line 407** still references "added a valid Google PageSpeed API key in the JavaScript file" - leftover from old architecture.
6. **Legacy Central Delivery images** still exist in `images/portfolio/` but are no longer linked from any page.

---

## Recent Work History

| Date | Commit | What Changed |
|------|--------|-------------|
| Feb 13 | `a59aab8` | **Portfolio update + Software Development service** - Added Clinic Networking to portfolio, removed Central Delivery, added live site links to all portfolio pages, created Software Development service page, updated homepage to 2x2 services grid, added Additional Services to pricing page, updated footer on all 26 pages |
| Feb 9 | `e5ada49` | **Fixed Website Analyzer** - switched from broken serverless proxy to direct Google API calls |
| Feb 9 | `200345b` | Updated all documentation for current architecture |
| Feb 4 | `bbee689` | Added debugging for missing env var |
| Feb 4 | `f213ed6` | Fixed vercel.json invalid functions config |
| Feb 4 | `9ca8d82` | Fixed vercel.json to exclude /api from HTML rewrites |
| Jan 30 | `9ba938b` | Added serverless proxy for API key security (later bypassed) |
| Jan 29 | `523a01c` | Removed background-remover tool |
| Jan 29 | `8e455ac` | Added Email Signature Generator + fixed toolbox nav |
| Jan 29 | `953ef12` | Added hosting detection + tech stack inference |

---

## TODO - Future Work

### High Priority
- [ ] Clean up orphaned api/analyze.js serverless function (remove or document why it stays)
- [ ] Remove unused large images (~4MB) or move to a separate assets branch
- [ ] Remove legacy Central Delivery images from images/portfolio/
- [ ] Verify Website Analyzer is working end-to-end on production
- [ ] Update PAGESPEED-API-SETUP.md to match current direct-API approach

### Features to Add
- [ ] Blog section for industry insights
- [ ] Client testimonials section
- [ ] Detailed case studies for portfolio projects
- [ ] Analytics tracking (Google Analytics or Plausible)
- [ ] Newsletter subscription
- [ ] More portfolio projects
- [ ] Website Analyzer enhancements: SSL certificate validation, security headers analysis, structured data checks, robots.txt validation, sitemap verification
- [ ] Additional toolbox tools

### Improvements
- [ ] Optimize image assets (compress or convert large PNGs to WebP)
- [ ] Add Open Graph / social media meta tags to all pages
- [ ] Add structured data (JSON-LD) for local business SEO
- [ ] Consider migrating to the React/Vite setup in new-site/ for better maintainability
- [ ] Add loading states and better error handling to Website Analyzer
- [ ] Improve PDF report design with more visual elements
