# Wild Tiger Design

A professional portfolio website showcasing web design, web hosting, and AI consulting services — with an integrated suite of free web tools.

## About

Wild Tiger Design is a full-service digital agency offering comprehensive web and AI solutions for businesses of all sizes. This website serves as our portfolio and service catalog, featuring a modern dark theme design with teal accents and jungle-inspired visuals.

## Live Site

**Website:** [https://wildtigerdesign.com](https://wildtigerdesign.com)
**Hosted on:** Vercel (auto-deploys from GitHub)

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern Dark Theme**: Professional dark mode design with teal (#146765) primary color
- **Tailwind CSS**: Built with Tailwind CSS for consistent, maintainable styling
- **Service Pages**: Dedicated pages for each service offering with detailed pricing
- **Contact Form**: Integrated contact form using Formspree for reliable email delivery
- **Portfolio Section**: Showcase of recent projects with detailed project pages
- **AI Consulting**: Interactive carousel showcasing AI consulting services
- **Website Analyzer**: Free tool for analyzing website performance, hosting, and SEO
- **Toolbox**: Suite of 10 free client-side web tools
- **Fast Loading**: Optimized images and clean code for quick page loads

## Services Offered

### Web Design
- Landing Pages: $150
- Basic Business Websites: $500
- Premium Business Sites: $1,200
- Custom pricing for advanced features

### Web Hosting Management
- Setup Fee: $150 (one-time)
- Monthly Management: $25/month
- Includes account setup, ongoing management, and site migration

### AI Consulting
- Hourly Rate: $50/hour
- No long-term contracts required
- Services include: AI strategy, workflow automation, team training, tools integration, custom solutions, competitive analysis, process optimization, and ongoing support

## Website Analyzer

A free tool that provides comprehensive website analysis including:

- **Performance Scores**: Lighthouse scores for Performance, Accessibility, Best Practices, and SEO
- **Core Web Vitals**: FCP, LCP, TBT, CLS metrics
- **Improvement Opportunities**: Top recommendations with estimated time savings
- **Hosting Detection**: IP address, hosting provider, server location, and organization via DNS lookups
- **Technology Stack Inference**: Platform detection based on hosting provider patterns
- **Security Checks**: HTTPS verification
- **SEO Basics**: Meta description, page title, and viewport checks
- **PDF Reports**: Downloadable professional analysis reports

**Architecture:**
- Frontend: `website-analyzer.html` + `js/website-analyzer.js`
- Backend: Vercel serverless function at `api/analyze.js` (securely proxies Google PageSpeed API)
- API key stored as Vercel environment variable (`PAGESPEED_API_KEY`)

See [PAGESPEED-API-SETUP.md](PAGESPEED-API-SETUP.md) for API key configuration.

## Free Toolbox

10 client-side tools — all run entirely in the browser with no server required:

1. **Case Converter** - Transform text between uppercase, lowercase, title case, and more
2. **Color Picker** - Pick colors and convert between HEX, RGB, HSL formats
3. **Email Signature Generator** - Create professional HTML email signatures
4. **File Converter** - Convert between image formats (JPG, PNG, WebP, HEIC)
5. **Gradient Generator** - Create CSS gradients with a visual editor
6. **Image Compressor** - Reduce image file sizes
7. **Image Resizer** - Resize images to custom dimensions
8. **PDF Merger** - Combine multiple PDF files into one
9. **PDF Splitter** - Split PDF files into individual pages
10. **Word Counter** - Count words, characters, sentences, and reading time

See [TOOLBOX-README.md](TOOLBOX-README.md) for detailed toolbox documentation.

## Technology Stack

- **HTML5**: Semantic markup and accessibility
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: No dependencies, lightweight interactions
- **Vercel**: Hosting, serverless functions, and auto-deployment from GitHub
- **Formspree**: Contact form backend integration
- **Google PageSpeed API**: Website performance analysis (via serverless proxy)
- **Google DNS API**: Domain and hosting lookups
- **ipinfo.io**: IP geolocation for hosting detection
- **jsPDF**: Client-side PDF report generation
- **Inter Font**: Modern, readable typography via Google Fonts

## Portfolio Projects

- **Custom Controls of GA**: Professional website for UL 508A certified panel shop specializing in automated industry solutions
- **DrParkRx**: Modern online pharmacy platform with prescription services, transfers, and patient portal integration
- **Central Delivery**: Comprehensive food delivery platform with restaurant management dashboard and mobile app

## File Structure

```
wildtigerdesign.com/
├── index.html                      # Homepage with hero and services overview
├── about.html                      # About page with company information
├── portfolio.html                  # Portfolio showcase page
├── portfolio-customcontrols.html   # Custom Controls of GA project page
├── portfolio-drparkrx.html         # DrParkRx project page
├── portfolio-centraldelivery.html  # Central Delivery project page
├── web-design.html                 # Web design services page
├── prices.html                     # Web design pricing page
├── web-hosting.html                # Web hosting services page
├── ai-consulting.html              # AI consulting services page
├── website-analyzer.html           # Website Analyzer tool
├── privacy-policy.html             # Privacy policy
├── terms-of-service.html           # Terms of service
├── 404.html                        # Custom 404 error page
├── api/
│   └── analyze.js                  # Vercel serverless function (PageSpeed API proxy)
├── js/
│   └── website-analyzer.js         # Website Analyzer frontend logic
├── toolbox/
│   ├── case-converter.html         # Case Converter tool
│   ├── color-picker.html           # Color Picker tool
│   ├── email-signature-generator.html # Email Signature Generator
│   ├── file-converter.html         # File Converter tool
│   ├── gradient-generator.html     # Gradient Generator tool
│   ├── image-compressor.html       # Image Compressor tool
│   ├── image-resizer.html          # Image Resizer tool
│   ├── pdf-merger.html             # PDF Merger tool
│   ├── pdf-splitter.html           # PDF Splitter tool
│   └── word-counter.html           # Word Counter tool
├── images/
│   └── portfolio/                  # Portfolio project screenshots
├── vercel.json                     # Vercel routing configuration
├── CNAME                           # Custom domain configuration
└── README.md                       # This file
```

## Deployment

This site is deployed on **Vercel** with automatic deployments from the `main` branch.

### Vercel Configuration

The `vercel.json` file configures:
- **Clean URLs**: Removes `.html` extensions from URLs
- **API routing**: Ensures `/api/*` routes go to serverless functions
- **HTML rewrites**: Maps clean paths to their `.html` files

### Environment Variables

The following environment variable must be set in Vercel project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `PAGESPEED_API_KEY` | Google PageSpeed Insights API key | Yes (for Website Analyzer) |

### Deploying Changes

```bash
# Make your changes locally
# Commit and push to main branch
git add .
git commit -m "Description of changes"
git push origin main

# Vercel auto-deploys from main (~30 seconds)
```

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/robinwilder/wild-tiger-design.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wild-tiger-design
   ```

3. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```

Note: The Website Analyzer's serverless function (`/api/analyze`) only works when deployed to Vercel. For local development, you can use the Vercel CLI:
```bash
npm i -g vercel
vercel dev
```

## Contact Form Setup

The contact form uses Formspree for email delivery:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `index.html` with your Formspree form ID
4. Submissions go to: robin@wildtigerdesign.com

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Color Scheme

- **Background**: #0a0a0f (near black)
- **Cards**: #1a1a2e (dark lighter)
- **Primary**: #146765 (teal)
- **Accent**: #4d65ff (blue)
- **Text**: #ffffff (white)
- **Secondary Text**: #9ca3af (gray)
- **Typography**: Inter (sans-serif)

## Security Considerations

- API keys are stored server-side in Vercel environment variables (never exposed to browser)
- Contact form uses Formspree (HTTPS, spam protection)
- No client-side authentication or data storage
- External links properly validated
- HTTPS enforced via Vercel
- Toolbox tools process files entirely in-browser (no data sent to servers)

## Future Enhancements

- [ ] Add blog section for industry insights
- [ ] Implement client testimonials
- [ ] Create detailed case studies for featured projects
- [ ] Add analytics tracking
- [ ] Implement newsletter subscription
- [ ] Add more portfolio projects
- [ ] Expand Website Analyzer with SSL validation, security headers, and structured data checks
- [ ] Add more toolbox tools

## License

Copyright 2026 Wild Tiger Design. All rights reserved.

## Contact

For inquiries about our services:
- Email: robin@wildtigerdesign.com
- Website: https://wildtigerdesign.com

---

**Wild Tiger Design** - Professional Web & AI Solutions
