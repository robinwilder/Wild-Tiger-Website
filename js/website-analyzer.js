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

// API Key - You'll need to add your Google PageSpeed API key here
const PAGESPEED_API_KEY = 'YOUR_API_KEY_HERE';

let analysisData = {};

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

// Analyze website
async function analyzeWebsite(url) {
    try {
        showLoading('Fetching performance data...');

        // Fetch PageSpeed data
        const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${PAGESPEED_API_KEY}&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo`;

        const response = await fetch(pagespeedUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch PageSpeed data. Please check your API key.');
        }

        const data = await response.json();

        // Extract data
        const lighthouse = data.lighthouseResult;
        const categories = lighthouse.categories;
        const audits = lighthouse.audits;

        analysisData = {
            url: url,
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
            opportunities: []
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

    // Display Hosting Info (placeholder)
    document.getElementById('hosting-info').innerHTML = `
        <div class="col-span-2 text-center py-8">
            <p class="text-gray-400 mb-2">🚀 More hosting details coming soon!</p>
            <p class="text-sm text-gray-500">IP lookup, server location, and hosting provider detection</p>
        </div>
    `;

    // Display Tech Stack (placeholder)
    document.getElementById('tech-stack').innerHTML = `
        <div class="text-center py-8">
            <p class="text-gray-400 mb-2">🛠️ Technology detection coming soon!</p>
            <p class="text-sm text-gray-500">CMS, frameworks, and third-party integrations</p>
        </div>
    `;

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

    // CTA
    doc.setFontSize(12);
    doc.setTextColor(20, 103, 101);
    doc.text('Want a Complete Professional Audit?', 20, 230);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Contact Wild Tiger Design for a comprehensive analysis:', 20, 240);
    doc.text('Email: robin@wildtigerdesign.com', 20, 248);
    doc.text('Phone: 706-567-5373', 20, 254);
    doc.text('Web: wildtigerdesign.com', 20, 260);

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
