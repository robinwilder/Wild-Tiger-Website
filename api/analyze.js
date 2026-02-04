export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { url } = req.query;

    // Validate URL parameter
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    // Get API key from environment variable (never exposed to browser)
    const API_KEY = process.env.PAGESPEED_API_KEY;

    if (!API_KEY) {
        // Log available env var names (not values) to help debug
        const envVarNames = Object.keys(process.env).filter(key =>
            key.includes('PAGESPEED') || key.includes('API') || key.includes('KEY')
        );
        console.error('PAGESPEED_API_KEY not found. Similar env vars:', envVarNames);
        return res.status(500).json({
            error: 'Server configuration error',
            hint: 'Environment variable PAGESPEED_API_KEY not found',
            availableSimilar: envVarNames
        });
    }

    try {
        // Build the PageSpeed API URL
        const pagespeedUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
        pagespeedUrl.searchParams.set('url', url);
        pagespeedUrl.searchParams.set('key', API_KEY);
        pagespeedUrl.searchParams.set('strategy', 'mobile');
        pagespeedUrl.searchParams.set('category', 'performance');
        pagespeedUrl.searchParams.append('category', 'accessibility');
        pagespeedUrl.searchParams.append('category', 'best-practices');
        pagespeedUrl.searchParams.append('category', 'seo');

        // Fetch from Google PageSpeed API
        const response = await fetch(pagespeedUrl.toString());
        const data = await response.json();

        // Pass through the response status
        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error('PageSpeed API error:', error);
        return res.status(500).json({
            error: 'Failed to analyze website',
            message: error.message
        });
    }
}
