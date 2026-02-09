// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Website Analyzer Logic
const analyzeForm = document.getElementById('analyze-form');
const urlInput = document.getElementById('url-input');
const analyzeBtn = document.getElementById('analyze-btn');
const loadingOverlay = document.getElementById('loading-overlay');
const loadingStatus = document.getElementById('loading-status');
const resultsSection = document.getElementById('results-section');
const downloadPdfBtn = document.getElementById('download-pdf-btn');

// PageSpeed API key (restricted to wildtigerdesign.com domain)
const PAGESPEED_API_KEY = 'AIzaSyAwCl4sPUWqaBgiddfJwPEpeGsuw5sUNrk';

let analysisData = {};

// Hosting Provider Detection Patterns
const HOSTING_PATTERNS = {
    // Cloud Providers - check more specific patterns first
    'amazon.com': 'Amazon Web Services (AWS)',
    'amazon': 'Amazon Web Services (AWS)',
    'aws': 'Amazon Web Services (AWS)',
    'ec2': 'Amazon Web Services (AWS)',
    'cloudfront': 'Amazon CloudFront (AWS)',
    'google cloud': 'Google Cloud Platform',
    'google': 'Google Cloud Platform',
    'googleapis': 'Google Cloud Platform',
    'microsoft': 'Microsoft Azure',
    'azure': 'Microsoft Azure',
    'digitalocean': 'DigitalOcean',
    'linode': 'Linode (Akamai)',
    'akamai': 'Akamai',
    'vultr': 'Vultr',
    'ovh': 'OVH',
    'hetzner': 'Hetzner',

    // CDN/Edge
    'cloudflare': 'Cloudflare',
    'fastly': 'Fastly',
    'stackpath': 'StackPath',

    // Managed WordPress
    'wpengine': 'WP Engine',
    'wp engine': 'WP Engine',
    'kinsta': 'Kinsta',
    'flywheel': 'Flywheel',
    'pantheon': 'Pantheon',
    'pressable': 'Pressable',

    // Shared Hosting
    'godaddy': 'GoDaddy',
    'hostgator': 'HostGator',
    'bluehost': 'Bluehost',
    'siteground': 'SiteGround',
    'dreamhost': 'DreamHost',
    'hostinger': 'Hostinger',
    'namecheap': 'Namecheap',
    'a2hosting': 'A2 Hosting',
    'inmotion': 'InMotion Hosting',

    // Platform-as-a-Service
    'heroku': 'Heroku',
    'vercel': 'Vercel',
    'netlify': 'Netlify',
    'render': 'Render',
    'railway': 'Railway',
    'fly.io': 'Fly.io',

    // Website Builders
    'shopify': 'Shopify',
    'squarespace': 'Squarespace',
    'wix': 'Wix',
    'weebly': 'Weebly',
    'webflow': 'Webflow',

    // Enterprise
    'rackspace': 'Rackspace',
    'ibm': 'IBM Cloud',
    'oracle': 'Oracle Cloud'
};

// Validate and normalize URL
function normalizeUrl(url) {
    url = url.trim();

    // Remove protocol if present
    url = url.replace(/^https?:\/\//i, '');

    // Remove trailing slash
    url = url.replace(/\/$/, '');

    // Add https://
    return 'https://' + url;
}

function isValidUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
        return false;
    }
}

// Show loading overlay
function showLoading(status) {
    loadingStatus.textContent = status;
    loadingOverlay.classList.remove('hidden');
    loadingOverlay.classList.add('flex');
}

// Hide loading overlay
function hideLoading() {
    loadingOverlay.classList.add('hidden');
    loadingOverlay.classList.remove('flex');
}

// Show error message
function showError(message) {
    hideLoading();
    alert(message);
}

// Create score gauge
function createScoreGauge(containerId, score) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    // Determine color based on score
    let color = '#ff4e42'; // red
    if (score >= 90) color = '#0cce6b'; // green
    else if (score >= 50) color = '#ffa400'; // orange

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100');
    svg.setAttribute('height', '100');
    svg.setAttribute('viewBox', '0 0 100 100');

    // Background circle
    const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle.setAttribute('cx', '50');
    bgCircle.setAttribute('cy', '50');
    bgCircle.setAttribute('r', '40');
    bgCircle.setAttribute('fill', 'none');
    bgCircle.setAttribute('stroke', '#e5e7eb');
    bgCircle.setAttribute('stroke-width', '8');
    svg.appendChild(bgCircle);

    // Progress circle
    const progressCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    progressCircle.setAttribute('cx', '50');
    progressCircle.setAttribute('cy', '50');
    progressCircle.setAttribute('r', '40');
    progressCircle.setAttribute('fill', 'none');
    progressCircle.setAttribute('stroke', color);
    progressCircle.setAttribute('stroke-width', '8');
    progressCircle.setAttribute('stroke-linecap', 'round');

    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (score / 100) * circumference;
    progressCircle.setAttribute('stroke-dasharray', circumference);
    progressCircle.setAttribute('stroke-dashoffset', offset);
    svg.appendChild(progressCircle);

    container.appendChild(svg);

    // Score text
    const scoreText = document.createElement('div');
    scoreText.className = 'score-gauge-text';
    scoreText.style.color = color;
    scoreText.textContent = score;
    container.appendChild(scoreText);
}

// Check CNAME record for hosting detection (Vercel, Netlify, etc.)
async function getCNAME(domain) {
    try {
        // Check both www and naked domain
        const domains = [`www.${domain}`, domain];

        for (const d of domains) {
            const response = await fetch(`https://dns.google/resolve?name=${d}&type=CNAME`);
            const data = await response.json();

            if (data.Answer && data.Answer.length > 0) {
                const cnameRecord = data.Answer.find(record => record.type === 5);
                if (cnameRecord) {
                    return cnameRecord.data;
                }
            }
        }
        return null;
    } catch (error) {
        console.error('CNAME lookup failed:', error);
        return null;
    }
}

// Get IP address from domain using Google DNS API
async function getIPAddress(domain) {
    try {
        const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
        const data = await response.json();

        if (data.Answer && data.Answer.length > 0) {
            const aRecord = data.Answer.find(record => record.type === 1);
            return aRecord ? aRecord.data : null;
        }
        return null;
    } catch (error) {
        console.error('DNS lookup failed:', error);
        return null;
    }
}

// Get hosting information from IP using ipinfo.io
async function getHostingInfo(ip) {
    try {
        // Using ipinfo.io which supports HTTPS (free tier: 50k requests/month)
        const response = await fetch(`https://ipinfo.io/${ip}/json`);
        const data = await response.json();

        if (data.ip) {
            // ipinfo.io returns org field with format "AS##### Organization Name"
            const orgParts = (data.org || '').split(' ');
            const asn = orgParts[0] || 'Unknown';
            const orgName = orgParts.slice(1).join(' ') || 'Unknown';

            return {
                country: data.country || 'Unknown',
                region: data.region || 'Unknown',
                city: data.city || 'Unknown',
                isp: orgName,
                org: orgName,
                as: asn
            };
        }
        return null;
    } catch (error) {
        console.error('IP geolocation failed:', error);
        return null;
    }
}

// Detect hosting provider from CNAME or ISP/organization name
function detectHostingProvider(isp, org, asn, cname = null) {
    // First, check CNAME for PaaS platforms (more accurate)
    if (cname) {
        const cnameLower = cname.toLowerCase();
        if (cnameLower.includes('vercel')) return 'Vercel';
        if (cnameLower.includes('netlify')) return 'Netlify';
        if (cnameLower.includes('github.io')) return 'GitHub Pages';
        if (cnameLower.includes('herokuapp')) return 'Heroku';
        if (cnameLower.includes('cloudfront')) return 'Amazon CloudFront (AWS)';
        if (cnameLower.includes('azurewebsites')) return 'Microsoft Azure';
        if (cnameLower.includes('shopify')) return 'Shopify';
        if (cnameLower.includes('squarespace')) return 'Squarespace';
        if (cnameLower.includes('webflow')) return 'Webflow';
        if (cnameLower.includes('wixdns')) return 'Wix';
    }

    // Fall back to ISP/organization detection
    const searchText = `${isp} ${org} ${asn}`.toLowerCase();

    for (const [pattern, provider] of Object.entries(HOSTING_PATTERNS)) {
        if (searchText.includes(pattern.toLowerCase())) {
            return provider;
        }
    }

    // Return ISP name if no specific provider detected
    return isp || 'Unknown';
}

// Infer technology stack from hosting provider
function inferTechnology(hostingProvider) {
    const provider = hostingProvider.toLowerCase();

    // Platform detection based on hosting
    if (provider.includes('shopify')) return 'Shopify';
    if (provider.includes('squarespace')) return 'Squarespace';
    if (provider.includes('wix')) return 'Wix';
    if (provider.includes('weebly')) return 'Weebly';
    if (provider.includes('webflow')) return 'Webflow';
    if (provider.includes('github pages')) return 'Static Site (GitHub Pages)';
    if (provider.includes('vercel')) return 'Next.js / React (likely)';
    if (provider.includes('netlify')) return 'Static Site / JAMstack';
    if (provider.includes('wp engine') || provider.includes('wpengine') ||
        provider.includes('kinsta') || provider.includes('flywheel') ||
        provider.includes('pantheon')) return 'WordPress (likely)';

    return null;
}

// Analyze website
async function analyzeWebsite(url) {
    try {
        showLoading('Fetching performance data...');

        // Extract domain from URL
        const domain = new URL(url).hostname;

        // Fetch PageSpeed data directly from Google API
        const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${PAGESPEED_API_KEY}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`;

        const response = await fetch(pagespeedUrl);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || 'Failed to fetch PageSpeed data.');
        }

        const data = await response.json();

        // Extract data
        const lighthouse = data.lighthouseResult;
        const categories = lighthouse.categories;
        const audits = lighthouse.audits;

        analysisData = {
            url: url,
            domain: domain,
            timestamp: new Date().toLocaleString(),
            scores: {
                performance: Math.round(categories.performance.score * 100),
                accessibility: Math.round(categories.accessibility.score * 100),
                bestPractices: Math.round(categories['best-practices'].score * 100),
                seo: Math.round(categories.seo.score * 100)
            },
            metrics: {
                fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
                lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
                tbt: audits['total-blocking-time']?.displayValue || 'N/A',
                cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
                speedIndex: audits['speed-index']?.displayValue || 'N/A'
            },
            seoChecks: {
                hasMetaDescription: audits['meta-description']?.score === 1,
                hasTitle: audits['document-title']?.score === 1,
                hasViewport: audits['viewport']?.score === 1
            },
            opportunities: [],
            hosting: null,
            technology: null
        };

        // Get top 5 opportunities
        const opportunities = lighthouse.audits;
        const oppKeys = Object.keys(opportunities).filter(key => {
            const audit = opportunities[key];
            return audit.score !== null && audit.score < 1 && audit.details?.overallSavingsMs > 0;
        }).sort((a, b) => {
            return opportunities[b].details.overallSavingsMs - opportunities[a].details.overallSavingsMs;
        }).slice(0, 5);

        analysisData.opportunities = oppKeys.map(key => {
            const audit = opportunities[key];
            return {
                title: audit.title,
                description: audit.description,
                savings: audit.displayValue || ''
            };
        });

        // Fetch hosting information
        showLoading('Checking hosting information...');

        // Check CNAME first (more accurate for PaaS platforms)
        const cname = await getCNAME(domain);
        const ip = await getIPAddress(domain);

        if (ip) {
            const hostingInfo = await getHostingInfo(ip);

            if (hostingInfo) {
                const hostingProvider = detectHostingProvider(hostingInfo.isp, hostingInfo.org, hostingInfo.as, cname);
                const detectedTech = inferTechnology(hostingProvider);

                analysisData.hosting = {
                    ip: ip,
                    provider: hostingProvider,
                    location: `${hostingInfo.city}, ${hostingInfo.region}, ${hostingInfo.country}`,
                    organization: hostingInfo.org
                };

                analysisData.technology = detectedTech;
            }
        }

        hideLoading();
        displayResults();

    } catch (error) {
        console.error('Analysis error:', error);
        showError('Failed to analyze website. Please make sure you have added a valid Google PageSpeed API key in the JavaScript file. Error: ' + error.message);
    }
}

// Display results
function displayResults() {
    // Update header
    document.getElementById('analyzed-url').textContent = `Results for ${analysisData.url}`;
    document.getElementById('analyzed-time').textContent = `Analyzed: ${analysisData.timestamp}`;

    // Create score gauges
    createScoreGauge('performance-gauge', analysisData.scores.performance);
    createScoreGauge('accessibility-gauge', analysisData.scores.accessibility);
    createScoreGauge('best-practices-gauge', analysisData.scores.bestPractices);
    createScoreGauge('seo-gauge', analysisData.scores.seo);

    // Display Core Web Vitals
    const webVitalsHtml = `
        <div class="text-sm">
            <span class="text-gray-400">First Contentful Paint:</span>
            <span class="font-semibold ml-2">${analysisData.metrics.fcp}</span>
        </div>
        <div class="text-sm">
            <span class="text-gray-400">Largest Contentful Paint:</span>
            <span class="font-semibold ml-2">${analysisData.metrics.lcp}</span>
        </div>
        <div class="text-sm">
            <span class="text-gray-400">Total Blocking Time:</span>
            <span class="font-semibold ml-2">${analysisData.metrics.tbt}</span>
        </div>
        <div class="text-sm">
            <span class="text-gray-400">Cumulative Layout Shift:</span>
            <span class="font-semibold ml-2">${analysisData.metrics.cls}</span>
        </div>
    `;
    document.getElementById('web-vitals').innerHTML = webVitalsHtml;

    // Display Opportunities
    if (analysisData.opportunities.length > 0) {
        document.getElementById('opportunities-section').classList.remove('hidden');
        const opportunitiesHtml = analysisData.opportunities.map(opp => `
            <div class="border-l-4 border-primary pl-4">
                <p class="font-semibold">${opp.title}</p>
                <p class="text-sm text-gray-400">${opp.description}</p>
                ${opp.savings ? `<p class="text-sm text-primary mt-1">${opp.savings}</p>` : ''}
            </div>
        `).join('');
        document.getElementById('opportunities-list').innerHTML = opportunitiesHtml;
    }

    // Display Hosting Info
    if (analysisData.hosting) {
        document.getElementById('hosting-info').innerHTML = `
            <div class="text-sm">
                <span class="text-gray-400">IP Address:</span>
                <span class="font-semibold ml-2">${analysisData.hosting.ip}</span>
            </div>
            <div class="text-sm">
                <span class="text-gray-400">Hosting Provider:</span>
                <span class="font-semibold ml-2">${analysisData.hosting.provider}</span>
            </div>
            <div class="text-sm">
                <span class="text-gray-400">Server Location:</span>
                <span class="font-semibold ml-2">${analysisData.hosting.location}</span>
            </div>
            <div class="text-sm">
                <span class="text-gray-400">Organization:</span>
                <span class="font-semibold ml-2">${analysisData.hosting.organization}</span>
            </div>
        `;
    } else {
        document.getElementById('hosting-info').innerHTML = `
            <div class="col-span-2 text-center py-4">
                <p class="text-gray-400 text-sm">Unable to retrieve hosting information</p>
            </div>
        `;
    }

    // Display Tech Stack
    let techStackHtml = '';

    if (analysisData.technology) {
        techStackHtml += `
            <div class="mb-4">
                <span class="text-gray-400">Detected Platform:</span>
                <span class="font-semibold ml-2 text-primary">${analysisData.technology}</span>
            </div>
        `;
    }

    techStackHtml += `
        <div class="text-sm text-gray-400 mb-3">For detailed technology breakdown:</div>
        <div class="flex flex-wrap gap-3">
            <a href="https://builtwith.com/${analysisData.domain}" target="_blank"
               class="inline-flex items-center px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg hover:border-primary transition-colors text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                View on BuiltWith
            </a>
            <a href="https://www.wappalyzer.com/lookup/${analysisData.domain}" target="_blank"
               class="inline-flex items-center px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg hover:border-primary transition-colors text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                View on Wappalyzer
            </a>
        </div>
    `;

    document.getElementById('tech-stack').innerHTML = techStackHtml;

    // Display Security Info
    const isHttps = analysisData.url.startsWith('https://');
    document.getElementById('security-info').innerHTML = `
        <div class="flex items-center">
            <span class="${isHttps ? 'text-green-400' : 'text-red-400'} text-2xl mr-3">${isHttps ? '✓' : '✗'}</span>
            <span>HTTPS ${isHttps ? 'is working' : 'is not detected'}</span>
        </div>
        <div class="mt-4 p-4 bg-dark rounded-lg border border-gray-700">
            <p class="text-sm text-gray-400 mb-2">🔒 Additional security features coming soon:</p>
            <ul class="text-sm text-gray-500 space-y-1 ml-4">
                <li>• SSL certificate validation</li>
                <li>• Security headers analysis</li>
                <li>• Vulnerability scanning</li>
            </ul>
        </div>
    `;

    // Display SEO Checks
    const seoChecksHtml = `
        <div class="flex items-center">
            <span class="${analysisData.seoChecks.hasMetaDescription ? 'text-green-400' : 'text-red-400'} text-2xl mr-3">
                ${analysisData.seoChecks.hasMetaDescription ? '✓' : '✗'}
            </span>
            <span>Has meta description</span>
        </div>
        <div class="flex items-center">
            <span class="${analysisData.seoChecks.hasTitle ? 'text-green-400' : 'text-red-400'} text-2xl mr-3">
                ${analysisData.seoChecks.hasTitle ? '✓' : '✗'}
            </span>
            <span>Has valid page title</span>
        </div>
        <div class="flex items-center">
            <span class="${analysisData.seoChecks.hasViewport ? 'text-green-400' : 'text-red-400'} text-2xl mr-3">
                ${analysisData.seoChecks.hasViewport ? '✓' : '✗'}
            </span>
            <span>Mobile-friendly viewport</span>
        </div>
        <div class="col-span-2 mt-4 p-4 bg-dark rounded-lg border border-gray-700">
            <p class="text-sm text-gray-400 mb-2">📋 More SEO checks coming soon:</p>
            <ul class="text-sm text-gray-500 space-y-1 ml-4">
                <li>• Structured data analysis</li>
                <li>• Sitemap verification</li>
                <li>• Robots.txt validation</li>
            </ul>
        </div>
    `;
    document.getElementById('seo-checks').innerHTML = seoChecksHtml;

    // Show results section
    resultsSection.classList.remove('hidden');

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Generate PDF report
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add branding
    doc.setFontSize(20);
    doc.setTextColor(20, 103, 101); // Primary color
    doc.text('Wild Tiger Design', 20, 20);

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Website Analysis Report', 20, 30);

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`URL: ${analysisData.url}`, 20, 40);
    doc.text(`Generated: ${analysisData.timestamp}`, 20, 46);

    // Performance Scores
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Performance Scores', 20, 60);

    doc.setFontSize(10);
    doc.text(`Performance: ${analysisData.scores.performance}/100`, 25, 70);
    doc.text(`Accessibility: ${analysisData.scores.accessibility}/100`, 25, 76);
    doc.text(`Best Practices: ${analysisData.scores.bestPractices}/100`, 25, 82);
    doc.text(`SEO: ${analysisData.scores.seo}/100`, 25, 88);

    // Core Web Vitals
    doc.setFontSize(14);
    doc.text('Core Web Vitals', 20, 105);

    doc.setFontSize(10);
    doc.text(`First Contentful Paint: ${analysisData.metrics.fcp}`, 25, 115);
    doc.text(`Largest Contentful Paint: ${analysisData.metrics.lcp}`, 25, 121);
    doc.text(`Total Blocking Time: ${analysisData.metrics.tbt}`, 25, 127);
    doc.text(`Cumulative Layout Shift: ${analysisData.metrics.cls}`, 25, 133);

    // Improvement Opportunities
    if (analysisData.opportunities.length > 0) {
        doc.setFontSize(14);
        doc.text('Top Improvement Opportunities', 20, 150);

        doc.setFontSize(9);
        let y = 160;
        analysisData.opportunities.slice(0, 3).forEach((opp, index) => {
            doc.text(`${index + 1}. ${opp.title}`, 25, y);
            y += 6;
            if (opp.savings) {
                doc.setTextColor(20, 103, 101);
                doc.text(`   ${opp.savings}`, 25, y);
                doc.setTextColor(0, 0, 0);
                y += 8;
            }
        });
    }

    // Hosting Information
    if (analysisData.hosting) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Hosting Information', 20, 185);

        doc.setFontSize(10);
        doc.text(`IP Address: ${analysisData.hosting.ip}`, 25, 195);
        doc.text(`Provider: ${analysisData.hosting.provider}`, 25, 201);
        doc.text(`Location: ${analysisData.hosting.location}`, 25, 207);
    }

    // Technology Stack
    doc.setFontSize(14);
    doc.text('Technology Stack', 20, 220);

    doc.setFontSize(10);
    if (analysisData.technology) {
        doc.text(`Detected Platform: ${analysisData.technology}`, 25, 230);
    } else {
        doc.text('Platform: Not automatically detected', 25, 230);
    }

    // CTA
    doc.setFontSize(12);
    doc.setTextColor(20, 103, 101);
    doc.text('Want a Complete Professional Audit?', 20, 245);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Contact Wild Tiger Design for a comprehensive analysis:', 20, 255);
    doc.text('Email: robin@wildtigerdesign.com', 20, 263);
    doc.text('Phone: 706-567-5373', 20, 269);
    doc.text('Web: wildtigerdesign.com', 20, 275);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Generated by Wild Tiger Design Website Analyzer', 20, 285);

    // Save PDF
    const domain = new URL(analysisData.url).hostname;
    const date = new Date().toISOString().split('T')[0];
    doc.save(`website-analysis-${domain}-${date}.pdf`);
}

// Form submit handler
analyzeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const url = urlInput.value.trim();

    if (!url) {
        showError('Please enter a website URL');
        return;
    }

    const normalizedUrl = normalizeUrl(url);

    if (!isValidUrl(normalizedUrl)) {
        showError('Please enter a valid URL (e.g., example.com)');
        return;
    }

    await analyzeWebsite(normalizedUrl);
});

// Download PDF button
downloadPdfBtn.addEventListener('click', () => {
    generatePDF();
});
