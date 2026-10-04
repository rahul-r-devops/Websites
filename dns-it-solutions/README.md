# DNS IT Solutions — Cloudflare Worker Deployment Guide

This project contains the complete website for **DNS IT Solutions** (Computer Rental, AMC, Sales & Service in Bangalore), pre-configured for instant deployment via the **Cloudflare Dashboard UI**.

---

## 🚀 How to Deploy via Cloudflare Dashboard UI

You have **two easy ways** to deploy through the Cloudflare UI. Choose whichever you prefer:

---

### Option 1: Cloudflare Worker (Online Code Editor) — *Recommended*

This method uses Cloudflare's serverless edge Worker to serve the HTML, CSS, SVG favicon, and handle contact form enquiries.

1. **Log into Cloudflare:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com/) and log in.

2. **Create Worker:**
   - In the left sidebar, click **Workers & Pages**.
   - Click the blue **Create application** button.
   - Under the **Workers** tab, click **Create Worker**.
   - Set the Worker name (e.g., `dns-it-solutions`).
   - Click **Deploy**.

3. **Paste Worker Code:**
   - On the deployment success page, click **Edit code**.
   - Open [`worker.js`](./worker.js) from this folder on your computer.
   - Select all (`Cmd + A` / `Ctrl + A`) and copy (`Cmd + C`).
   - In the Cloudflare online code editor, delete any existing code and paste (`Cmd + V`).
   - Click **Save and deploy** in the top right.

4. **Done!**
   - Your site is immediately live at:
     `https://dns-it-solutions.<your-subdomain>.workers.dev`

---

### Option 2: Cloudflare Pages (Direct Upload / Drag & Drop)

If you prefer uploading the folder directly without opening any code editor:

1. **Log into Cloudflare:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com/).
2. **Go to Pages:**
   - Click **Workers & Pages** -> **Create application** -> **Pages** tab.
   - Click **Upload assets** (Direct Upload).
   - Enter project name: `dns-it-solutions`.
3. **Upload the Folder:**
   - Drag and drop this folder (`/Users/rahul/Documents/Rahul/x`) into the upload box (or zip the folder contents and upload the `.zip`).
   - Click **Deploy site**.
4. **Done!**
   - Your site is live at:
     `https://dns-it-solutions.pages.dev`

---

## 🌐 Connecting a Custom Domain (UI Steps)

Once deployed, connect your custom domain (e.g., `dnsitsolutions.com`):

### If deployed via Worker (Option 1):
1. In Cloudflare Dashboard, go to **Workers & Pages** -> Click your Worker (`dns-it-solutions`).
2. Go to **Settings** -> **Domains & Routes**.
3. Under **Custom Domains**, click **Add Custom Domain**.
4. Type your domain (e.g., `dnsitsolutions.com` or `www.dnsitsolutions.com`) and click **Add Custom Domain**.
5. Cloudflare will automatically provision SSL/TLS certificates.

### If deployed via Pages (Option 2):
1. In Cloudflare Dashboard, go to **Workers & Pages** -> Click your Pages project (`dns-it-solutions`).
2. Go to **Custom domains** tab -> Click **Set up a custom domain**.
3. Type your domain name and follow the prompts.

---

## 📋 Features Included

- **Self-Contained Worker (`worker.js`):** Embeds `index.html` and `style.css` so it can run standalone without any external build server or CLI.
- **Smart Asset Binding Support:** Automatically uses `env.ASSETS` if configured with Cloudflare Static Assets or Pages.
- **Contact Form Backend:** Handles `POST /api/contact` and `POST /` with data validation and logging.
- **Interactive Form Feedback:** AJAX form submission with loading, success, and direct WhatsApp fallback if offline.
- **Performance & Caching:** Pre-configured HTTP cache headers (`Cache-Control`) in both `worker.js` and `_headers`.
- **Security Headers:** Strict headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **Inline SVG Favicon:** Clean branded SVG favicon preventing 404 requests.

---

## 🛠️ Making Updates in the Future

If you edit [`index.html`](./index.html) or [`style.css`](./style.css):

1. Run the build script in this directory:
   ```bash
   npm run build
   # or
   node build.js
   ```
2. This refreshes [`worker.js`](./worker.js) with your latest HTML/CSS changes.
3. In the Cloudflare dashboard, paste the updated `worker.js` and click **Save and deploy**!
