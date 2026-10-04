const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
    },
  });
}

export async function onRequestPost({ request }) {
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
