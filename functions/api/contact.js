import { contactAdminEmail, contactCustomerEmail } from './_email-templates.js';

const RESEND_API_KEY = 're_24tMFyEB_Ciw2b4xt2wFXYLjWEseyfZnt';
const FROM_EMAIL = 'Blink Schoonmaak <info@blinkschoonmaak.nl>';
const ADMIN_EMAIL = 'info@blinkschoonmaak.nl';
const BCC_EMAIL = 'info@brandways.nl';

async function sendEmail({ from, to, bcc, replyTo, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, bcc, reply_to: replyTo, subject, html }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Resend API error: ${res.status} - ${error}`);
  }

  return res.json();
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { naam, telefoon, email, bericht } = body;

    if (!naam || !telefoon || !email) {
      return new Response(JSON.stringify({ error: 'Verplichte velden ontbreken.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send admin notification
    await sendEmail({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      bcc: [BCC_EMAIL],
      replyTo: email,
      subject: `Nieuw contactbericht van ${naam}`,
      html: contactAdminEmail({ naam, telefoon, email, bericht }),
    });

    // Send customer confirmation
    await sendEmail({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Bedankt voor uw bericht — Blink Schoonmaak 010',
      html: contactCustomerEmail({ naam }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Er is iets misgegaan.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
