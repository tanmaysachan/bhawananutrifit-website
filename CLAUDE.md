# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BhawanaNutriFit - Nutrition and dietitian services website for Dietitian Bhawana Sachan. Static website built with plain HTML, CSS, and JavaScript (no frameworks or build tools).

## Development

### Running Locally

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Open http://localhost:8000 in browser.

### Deployment

Static files - deploy to any hosting (Netlify, Vercel, GitHub Pages, traditional hosting).

## Architecture

```
/
├── index.html          # Homepage
├── services.html       # All diet programs
├── about.html          # About Bhawana Sachan & team
├── contact.html        # Contact form & locations
├── blog.html           # Blog listing
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── images/             # Site images
```

## Business Context

- **Owner**: Dietitian Bhawana Sachan (15+ years experience)
- **Services**: 20+ diet programs (weight loss/gain, diabetes, PCOS, thyroid, sports nutrition, pregnancy, heart health, etc.)
- **Address**: A-2649, IIIrd Floor, Green Fields Colony, Faridabad, Haryana 121010
- **Phone**: (+91) 981-172-2287
- **Email**: bhawana.sachan78@gmail.com

## Asset Source

Original WordPress assets available at `~/Downloads/public_html/wp-content/uploads/` - use for additional images as needed.
