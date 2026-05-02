# fatjonmeci.com

Static personal website for Fatjon Meci.

This version is designed for simple Namecheap/cPanel hosting: upload the files in this repository to `public_html`, or use cPanel Git deployment to pull the repository and serve it directly.

## Files

- `index.html` - the complete single-page website
- `styles.css` - responsive visual system and mobile layouts
- `script.js` - lightweight interactions and the desktop signal map
- `assets/fatjon-hero.jpg` - local hero image asset
- `robots.txt`, `sitemap.xml`, `llms.txt` - crawler and AI context files

## DNS / hosting note

Only point the web root to these static files. Do not remove MX, SPF, DKIM, or DMARC records because the domain is used for email.
