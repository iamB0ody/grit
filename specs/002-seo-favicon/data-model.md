# Data Model: SEO Optimization & Favicon

**Feature**: 002-seo-favicon
**Date**: 2026-01-13

## Overview

This feature involves static file entities rather than database models. The "data model" defines the structure and relationships of configuration files, meta tags, and assets required for SEO optimization.

---

## Entity: Meta Tags

HTML meta elements in the `<head>` section providing page information to browsers and crawlers.

### Primary Meta Tags

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Page title (max 60 chars) |
| `description` | string | Yes | Page description (70-160 chars) |
| `viewport` | string | Yes | Responsive viewport settings |
| `charset` | string | Yes | Character encoding (UTF-8) |
| `robots` | string | Yes | Crawler directives (index, follow) |
| `canonical` | URL | Yes | Canonical page URL |
| `author` | string | No | Site author/company name |

### Open Graph Tags

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `og:type` | string | Yes | Content type ("website") |
| `og:url` | URL | Yes | Page URL |
| `og:title` | string | Yes | Share title |
| `og:description` | string | Yes | Share description |
| `og:image` | URL | Yes | Share image (1200x630) |
| `og:image:width` | number | Yes | Image width |
| `og:image:height` | number | Yes | Image height |
| `og:image:alt` | string | Yes | Image alt text |
| `og:site_name` | string | Yes | Site name |
| `og:locale` | string | No | Locale (en_US) |

### Twitter Card Tags

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `twitter:card` | string | Yes | Card type ("summary_large_image") |
| `twitter:url` | URL | Yes | Page URL |
| `twitter:title` | string | Yes | Tweet title |
| `twitter:description` | string | Yes | Tweet description |
| `twitter:image` | URL | Yes | Tweet image |
| `twitter:image:alt` | string | Yes | Image alt text |
| `twitter:site` | string | No | Twitter handle |

---

## Entity: Favicon Package

Collection of icon files derived from the brand logo.

### Files

| File | Size | Format | Purpose | Location |
|------|------|--------|---------|----------|
| `favicon.ico` | 32x32 | ICO | Legacy browsers | `/favicon.ico` |
| `favicon-16x16.png` | 16x16 | PNG | Browser tabs | `/assets/` |
| `favicon-32x32.png` | 32x32 | PNG | Browser tabs (retina) | `/assets/` |
| `apple-touch-icon.png` | 180x180 | PNG | iOS home screen | `/assets/` |
| `android-chrome-192x192.png` | 192x192 | PNG | Android home screen | `/assets/` |
| `android-chrome-512x512.png` | 512x512 | PNG | Android splash | `/assets/` |

### HTML Links

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

---

## Entity: Web App Manifest

JSON file describing the web application for mobile devices.

### Schema: site.webmanifest

```json
{
  "name": "string (required) - Full application name",
  "short_name": "string (required) - Short name for app launcher",
  "description": "string - Application description",
  "start_url": "string (required) - URL when app is launched",
  "display": "string (required) - Display mode (standalone)",
  "background_color": "string - Splash screen background (#0a0a0a)",
  "theme_color": "string - Browser toolbar color (#a1cd40)",
  "icons": [
    {
      "src": "string - Icon path",
      "sizes": "string - Icon dimensions",
      "type": "string - MIME type (image/png)",
      "purpose": "string - Icon purpose (any, maskable)"
    }
  ]
}
```

---

## Entity: Structured Data (JSON-LD)

Machine-readable business information for search engines.

### Schema: LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "string (required)",
  "description": "string",
  "url": "URL (required)",
  "logo": {
    "@type": "ImageObject",
    "url": "URL"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "string",
    "addressCountry": "string (SA)"
  },
  "telephone": "string (placeholder)",
  "email": "string (placeholder)",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "string",
        "description": "string"
      }
    ]
  }
}
```

---

## Entity: Robots.txt

Text file providing crawler directives.

### Schema

```text
User-agent: {bot-name|*}
{Allow|Disallow}: {path}

Sitemap: {sitemap-url}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| User-agent | string | Bot identifier or * for all |
| Allow | path | Paths to allow crawling |
| Disallow | path | Paths to block crawling |
| Sitemap | URL | Sitemap location |

---

## Entity: XML Sitemap

XML file listing URLs for search engine indexing.

### Schema

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>{URL}</loc>
    <lastmod>{YYYY-MM-DD}</lastmod>
    <changefreq>{frequency}</changefreq>
    <priority>{0.0-1.0}</priority>
  </url>
</urlset>
```

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| loc | URL | Yes | Page URL |
| lastmod | date | No | Last modification date |
| changefreq | enum | No | Update frequency |
| priority | float | No | Relative priority (0.0-1.0) |

---

## Entity: Social Share Image

Image displayed when site is shared on social platforms.

### Requirements

| Property | Value |
|----------|-------|
| Filename | `og-image.jpg` |
| Size | 1200x630 pixels |
| Format | JPEG |
| Location | `/assets/` |
| Content | GRIT logo with brand colors |

---

## Relationships

```
index.html
├── references → favicon.ico (root)
├── references → site.webmanifest
├── contains → Meta Tags (in <head>)
├── contains → Favicon links (in <head>)
└── contains → Structured Data JSON-LD (in <head>)

site.webmanifest
└── references → Android Chrome icons (in assets/)

robots.txt
└── references → sitemap.xml

sitemap.xml
└── lists → index.html URL

Meta Tags (og:image, twitter:image)
└── reference → og-image.jpg
```

---

## Validation Rules

### Meta Tags
- Title must be <= 60 characters
- Description must be 70-160 characters
- All URLs must be absolute and use HTTPS
- OG image dimensions must be 1200x630

### Favicon Files
- favicon.ico must be exactly 32x32
- PNG files must match specified dimensions
- All icons must be derived from same source logo

### Structured Data
- Must pass Google Rich Results Test
- Required fields cannot be null or empty
- URLs must be valid and accessible

### robots.txt
- Must be at site root
- Sitemap URL must be absolute

### sitemap.xml
- Must be valid XML with UTF-8 encoding
- All URLs must be absolute
- lastmod should reflect actual last modification
