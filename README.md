# Wild Tiger Design

A professional portfolio website showcasing web design, web hosting, and AI consulting services.

## About

Wild Tiger Design is a full-service digital agency offering comprehensive web and AI solutions for businesses of all sizes. This website serves as our portfolio and service catalog, featuring a modern dark theme design with teal accents and jungle-inspired visuals.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern Dark Theme**: Professional dark mode design with teal (#146765) primary color
- **Tailwind CSS**: Built with Tailwind CSS for consistent, maintainable styling
- **Service Pages**: Dedicated pages for each service offering with detailed pricing
- **Contact Form**: Integrated contact form using Formspree for reliable email delivery
- **Portfolio Section**: Showcase of recent projects and work samples with detailed project pages
- **AI Consulting**: Interactive carousel showcasing 8 different AI consulting services
- **Fast Loading**: Optimized images and clean code for quick page loads
- **Professional Footer**: Comprehensive footer with Privacy Policy and Terms of Service

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

## Technology Stack

- **HTML5**: Semantic markup and accessibility
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: No dependencies, lightweight interactions
- **Formspree**: Contact form backend integration
- **Inter Font**: Modern, readable typography via Google Fonts

## Portfolio Projects

Our portfolio showcases real-world projects we've built for clients:

- **Custom Controls of GA**: Professional website for UL 508A certified panel shop specializing in automated industry solutions
- **DrParkRx**: Modern online pharmacy platform with prescription services, transfers, and patient portal integration
- **Central Delivery**: Comprehensive food delivery platform with restaurant management dashboard and mobile app

## File Structure

```
wildtigerdesign.com/
├── index.html                      # Homepage with hero and services overview
├── about.html                      # About page with company information
├── portfolio.html                  # Portfolio showcase page with project cards
├── portfolio-customcontrols.html   # Custom Controls of GA portfolio page
├── portfolio-drparkrx.html         # DrParkRx portfolio page
├── portfolio-centraldelivery.html  # Central Delivery portfolio page
├── web-design.html                 # Web design services landing page
├── prices.html                     # Web design pricing page
├── web-hosting.html                # Web hosting services page
├── ai-consulting.html              # AI consulting services page with carousel
├── privacy-policy.html             # Privacy policy page
├── terms-of-service.html           # Terms of service page
├── 404.html                        # Custom 404 error page
├── favicon-32x32.png               # Favicon (32x32)
├── favicon-16x16.png               # Favicon (16x16)
├── apple-touch-icon.png            # Apple touch icon (180x180)
├── favicon.png                     # General favicon
├── tigerlogoforweb.png             # Main logo
├── jungleimagehero.png             # Homepage hero background
├── codejungle.png                  # Web design page background
├── junglehut.png                   # Web hosting page background
├── robotinjungle.png               # AI consulting page background
├── images/
│   └── portfolio/                  # Portfolio project screenshots
│       ├── customcontrolsofgasite.png
│       ├── drparkrx.png
│       └── centraldeliverysite.png
└── README.md                       # This file
```

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/robinwilder/wildtigerdesign.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wildtigerdesign
   ```

3. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```

## Deployment

This site can be deployed on any static hosting platform:

### GitHub Pages
1. Go to repository Settings → Pages
2. Under "Source", select the `main` branch
3. Click Save
4. Your site will be published at the URL shown

### Other Platforms
- Netlify: Drag and drop the folder
- Vercel: Connect your Git repository
- AWS S3: Upload files to an S3 bucket configured for static hosting

## Contact Form Setup

The contact form uses Formspree for email delivery:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `index.html` with your Formspree form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Configure the email address where you want to receive submissions

Current form endpoint: `https://formspree.io/f/xkgpljwq`
Submissions go to: `robin@wildtigerdesign.com`

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

## Key Design Patterns

### Navigation
- Fixed top navigation with scroll effect
- Transparent initially, becomes opaque with backdrop blur on scroll
- Responsive hamburger menu for mobile devices
- Consistent across all pages

### Hero Sections
- Full-width hero with background images at 20% opacity
- Jungle-themed imagery for visual consistency
- Large, bold typography with teal accent color
- Call-to-action buttons prominently placed

### Service Cards
- Consistent card design with hover effects
- Icon, heading, and description pattern
- Border color transitions to teal on hover
- Elevated shadow on hover for depth

### Footer
- Three-column layout (Company Info, Quick Links, Services)
- Links to Privacy Policy and Terms of Service
- Copyright information
- Hover effects on all links

## Security Considerations

- No sensitive information exposed in source code
- Contact form uses Formspree (HTTPS, spam protection)
- No client-side authentication or data storage
- External links properly validated
- HTTPS enforced when deployed
- No inline JavaScript execution vulnerabilities
- Form validation on both client and server side (via Formspree)

## Future Enhancements

- [ ] Add blog section for industry insights
- [ ] Implement client testimonials
- [ ] Create detailed case studies for featured projects
- [ ] Add analytics tracking (Google Analytics or Plausible)
- [ ] Implement newsletter subscription
- [ ] Add more portfolio projects
- [ ] Create video demos for services
- [ ] Add live chat support widget

## License

Copyright © 2025 Wild Tiger Design. All rights reserved.

## Contact

For inquiries about our services:
- Email: robin@wildtigerdesign.com
- Website: https://wildtigerdesign.com

---

**Wild Tiger Design** - Professional Web & AI Solutions
