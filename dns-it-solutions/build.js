/**
 * Build script for DNS IT Solutions Cloudflare Worker
 * Embeds index.html and style.css into worker.js so it can be deployed directly
 * through the Cloudflare Worker Web UI editor without external dependencies.
 */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf-8');
const css = fs.readFileSync(path.join(dir, 'style.css'), 'utf-8');

const workerCode = `/**
 * DNS IT Solutions - Cloudflare Worker
 * =====================================
 * This Worker serves the static landing page and handles contact enquiries.
 * 
 * Deployment options:
 * 1. Cloudflare Dashboard UI (Quick Edit / Edit Code):
 *    Copy this entire file and paste into the Cloudflare Worker web editor, then click "Save and deploy".
 * 2. Cloudflare Workers Static Assets / Pages:
 *    If env.ASSETS is configured, it automatically serves static files via the asset binding.
 */

// Embedded assets for zero-dependency standalone Cloudflare Worker deployment
const HTML_CONTENT = ${JSON.stringify(html)};
const CSS_CONTENT = ${JSON.stringify(css)};

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const method = request.method;

    // Handle contact form submission
    if (url.pathname === '/api/contact' || (url.pathname === '/' && method === 'POST')) {
      if (method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept',
          },
        });
      }

      if (method === 'POST') {
        return handleContactEnquiry(request);
      }
    }

    // Health check endpoint
    if (url.pathname === '/health' || url.pathname === '/api/health') {
      return new Response(JSON.stringify({
        status: 'ok',
        service: 'DNS IT Solutions',
        timestamp: new Date().toISOString(),
      }), {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
          ...SECURITY_HEADERS,
        },
      });
    }

    // If Cloudflare Static Assets binding is active, use it
    if (env && env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      const assetRes = await env.ASSETS.fetch(request);
      if (assetRes.status !== 404) {
        return assetRes;
      }
    }

    // Serve stylesheet
    if (url.pathname === '/style.css') {
      return new Response(CSS_CONTENT, {
        headers: {
          'Content-Type': 'text/css; charset=utf-8',
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
          ...SECURITY_HEADERS,
        },
      });
    }

    // Serve favicon
    if (url.pathname === '/favicon.ico') {
      const svgFavicon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#070b18"/><path d="M16 18h18c9.9 0 18 7.2 18 14s-8.1 14-18 14H16V18zm10 9v19h8c5 0 9-3.6 9-9.5s-4-9.5-9-9.5h-8z" fill="#22d3ee"/><circle cx="48" cy="45" r="5" fill="#ff8a3d"/></svg>\`;
      return new Response(svgFavicon, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=604800',
          ...SECURITY_HEADERS,
        },
      });
    }

    // Redirect /home or /index to /
    if (url.pathname === '/home' || url.pathname === '/index') {
      return Response.redirect(\`\${url.origin}/\`, 301);
    }

    // Serve home page
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML_CONTENT, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=0, must-revalidate',
          ...SECURITY_HEADERS,
        },
      });
    }

    // Fallback: 404 or serve index.html for SPA/friendly routing
    return new Response(HTML_CONTENT, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
        ...SECURITY_HEADERS,
      },
    });
  },
};

/**
 * Process contact form submissions
 */
async function handleContactEnquiry(request) {
  let data = {};
  const contentType = request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Invalid request body'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...SECURITY_HEADERS,
      },
    });
  }

  const { name, phone, service, message } = data;

  if (!name || !phone) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Name and phone are required fields'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...SECURITY_HEADERS,
      },
    });
  }

  // Log enquiry in Cloudflare real-time logs
  console.log('[NEW ENQUIRY RECEIVED]', {
    timestamp: new Date().toISOString(),
    name,
    phone,
    service: service || 'Not specified',
    message: message || '',
  });

  return new Response(JSON.stringify({
    success: true,
    message: 'Thank you for reaching out! Our team will contact you shortly.',
    data: { name, phone, service: service || 'Computer / Laptop Rental' }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      ...SECURITY_HEADERS,
    },
  });
}
`;

fs.writeFileSync(path.join(dir, 'worker.js'), workerCode, 'utf-8');
console.log('Successfully generated worker.js (' + Buffer.byteLength(workerCode, 'utf8') + ' bytes)');
