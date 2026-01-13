# Contracts: SEO Optimization & Favicon

This feature does not involve API endpoints or external contracts. It is a static website enhancement that adds meta tags, favicons, and configuration files.

## Static File Contracts

The following files serve as "contracts" between the website and external systems:

### Search Engine Contract (robots.txt)
- Location: `/robots.txt`
- Consumer: Search engine crawlers (Googlebot, Bingbot, etc.)
- Purpose: Define crawling permissions and sitemap location

### Sitemap Contract (sitemap.xml)
- Location: `/sitemap.xml`
- Consumer: Search engine crawlers
- Purpose: List all indexable URLs with metadata

### Social Media Contract (Open Graph & Twitter Cards)
- Location: Meta tags in `<head>` of `index.html`
- Consumer: Facebook, LinkedIn, Twitter/X crawlers
- Purpose: Define how content appears when shared

### Structured Data Contract (JSON-LD)
- Location: `<script type="application/ld+json">` in `index.html`
- Consumer: Search engines (Google, Bing)
- Purpose: Provide machine-readable business information

### Mobile App Contract (site.webmanifest)
- Location: `/site.webmanifest`
- Consumer: Mobile browsers (Chrome, Safari)
- Purpose: Define app behavior when added to home screen

## Validation

All contracts should be validated using:
- robots.txt: Direct access and crawler logs
- sitemap.xml: Google Search Console
- Open Graph: Facebook Sharing Debugger
- Twitter Cards: Twitter Card Validator
- Structured Data: Google Rich Results Test
- Web Manifest: Chrome DevTools Application panel
