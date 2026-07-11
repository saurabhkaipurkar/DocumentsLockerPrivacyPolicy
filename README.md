# Smart Doc Organizer — Privacy Policy Website

Professional static website for **Google Play Console** privacy compliance.

**App:** Smart Doc Organizer  
**Package:** `com.myapp.microservice`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full Privacy Policy (use this URL in Play Console) |
| `terms.html` | Terms of Service |
| `styles.css` | Premium dark theme styling |
| `script.js` | TOC highlight, mobile nav, back-to-top |

## Before you publish (required edits)

Search for `TODO` and `example.com` in the HTML files and replace:

1. **Developer / company legal name**
2. **Privacy email** (`privacy@example.com`)
3. **Support email** (`support@example.com`)
4. **Country / address** (optional but recommended)
5. **Governing law** country/state in Terms

Also double-check that the Privacy Policy still matches your **published APK** (permissions, SDKs, any cloud features).

## Preview locally

Open in browser:

```bash
open "/Users/hemant/Desktop/privacy policy/index.html"
```

Or use VS Code: right-click `index.html` → **Open with Live Server** (if installed).

## Host online (required for Play Console)

Google Play needs a **public HTTPS URL**. Free options:

### Option A — GitHub Pages
1. Create a GitHub repo (e.g. `smart-doc-organizer-privacy`)
2. Upload these files
3. Settings → Pages → Deploy from `main` branch
4. URL will look like:  
   `https://YOUR_USERNAME.github.io/smart-doc-organizer-privacy/`

### Option B — Netlify Drop
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this entire folder
3. Copy the generated HTTPS URL

### Option C — Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase init hosting
# set public directory to this folder
firebase deploy
```

## Google Play Console steps

1. Open **Play Console → Your app → Policy → App content → Privacy policy**
2. Paste your hosted URL (must load in a browser without login)
3. Complete **Data safety** using the mapping table in section **14** of the Privacy Policy
4. Ensure store listing app name matches **Smart Doc Organizer**
5. Keep contact email consistent with the website

## Design notes

- Dark, modern vault aesthetic aligned with the app brand (purple `#6D4AFF`)
- Sticky table of contents for long-form transparency
- Mobile responsive
- Print-friendly for legal review

---

© Smart Doc Organizer
