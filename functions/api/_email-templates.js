// Shared email templates for Blink Schoonmaak 010
// Brand: #00859a (teal), Plus Jakarta Sans

const LOGO_URL = 'https://www.blinkschoonmaak.nl/logo.png';
const SITE_URL = 'https://www.blinkschoonmaak.nl';

const emailWrapper = (content) => `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blink Schoonmaak 010</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f5f7; font-family:'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#1a1a1a;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px; width:100%;">

          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#00859a; padding:32px 24px; border-radius:12px 12px 0 0;">
              <img src="${LOGO_URL}" alt="Blink Schoonmaak 010" width="180" style="display:block; max-width:180px; height:auto;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff; padding:36px 32px; border-left:1px solid #e9ecef; border-right:1px solid #e9ecef;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a1a1a; padding:28px 32px; border-radius:0 0 12px 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="color:#cccccc; font-size:13px; line-height:1.6;">
                    <strong style="color:#ffffff; font-size:14px;">Blink Schoonmaak 010</strong><br />
                    Theodoor Colenbranderhof 5, 3059 LS Rotterdam<br />
                    <a href="tel:0611125603" style="color:#5ec4d4; text-decoration:none;">06 1112 5603</a><br />
                    <a href="mailto:info@blinkschoonmaak.nl" style="color:#5ec4d4; text-decoration:none;">info@blinkschoonmaak.nl</a><br />
                    KVK 94000395
                  </td>
                  <td align="right" valign="top" style="padding-left:16px;">
                    <a href="https://www.instagram.com/blinkschoonmaak010/" style="display:inline-block; margin-left:8px;">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" width="28" height="28" style="display:block; border-radius:4px;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px; border-top:1px solid rgba(255,255,255,0.1); margin-top:16px;">
                    <p style="color:#888888; font-size:11px; margin:12px 0 0 0; line-height:1.5;">
                      &copy; 2025 Blink Schoonmaak 010 &mdash; Uw betrouwbare schoonmaakpartner in Rotterdam en omgeving
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

// ─── Contact Form: Admin notification ────────────────────────────────────────

export function contactAdminEmail({ naam, telefoon, email, bericht }) {
  const content = `
    <h1 style="margin:0 0 8px 0; font-size:22px; font-weight:700; color:#1a1a1a;">Nieuw contactbericht</h1>
    <p style="margin:0 0 24px 0; font-size:14px; color:#888888;">Via het contactformulier op blinkschoonmaak.nl</p>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-radius:8px 8px 0 0; border-bottom:1px solid #e9ecef;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Naam</span><br />
          <span style="font-size:15px; font-weight:600; color:#1a1a1a;">${naam}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-bottom:1px solid #e9ecef;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Telefoon</span><br />
          <a href="tel:${telefoon}" style="font-size:15px; font-weight:600; color:#00859a; text-decoration:none;">${telefoon}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-bottom:1px solid #e9ecef;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Email</span><br />
          <a href="mailto:${email}" style="font-size:15px; font-weight:600; color:#00859a; text-decoration:none;">${email}</a>
        </td>
      </tr>
      ${bericht ? `
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-radius:0 0 8px 8px;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Bericht</span><br />
          <span style="font-size:14px; color:#1a1a1a; line-height:1.6;">${bericht}</span>
        </td>
      </tr>` : ''}
    </table>

    <a href="mailto:${email}" style="display:inline-block; background-color:#00859a; color:#ffffff; font-size:14px; font-weight:600; padding:12px 28px; border-radius:8px; text-decoration:none;">Beantwoorden</a>
  `;
  return emailWrapper(content);
}

// ─── Contact Form: Customer confirmation ─────────────────────────────────────

export function contactCustomerEmail({ naam }) {
  const content = `
    <h1 style="margin:0 0 8px 0; font-size:22px; font-weight:700; color:#1a1a1a;">Bedankt voor uw bericht, ${naam}!</h1>
    <p style="margin:0 0 24px 0; font-size:15px; color:#555555; line-height:1.6;">
      Wij hebben uw contactbericht ontvangen en nemen zo snel mogelijk contact met u op. Meestal ontvangt u binnen 24 uur een reactie.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
      <tr>
        <td style="padding:20px 24px; background-color:#f0fafb; border-radius:8px; border-left:4px solid #00859a;">
          <p style="margin:0; font-size:14px; color:#006d7e; line-height:1.6;">
            <strong>Heeft u een dringende vraag?</strong><br />
            Bel ons gerust op <a href="tel:0611125603" style="color:#00859a; font-weight:600; text-decoration:none;">06 1112 5603</a> of stuur een
            <a href="https://wa.me/31611125603" style="color:#00859a; font-weight:600; text-decoration:none;">WhatsApp bericht</a>.
          </p>
        </td>
      </tr>
    </table>

    <a href="${SITE_URL}" style="display:inline-block; background-color:#00859a; color:#ffffff; font-size:14px; font-weight:600; padding:12px 28px; border-radius:8px; text-decoration:none;">Bezoek onze website</a>
  `;
  return emailWrapper(content);
}

// ─── Quote Form: Admin notification ──────────────────────────────────────────

export function quoteAdminEmail({ naam, telefoon, email, adres, diensten, bericht }) {
  const dienstenList = diensten.split(',').map(d => d.trim()).filter(Boolean);
  const dienstenBadges = dienstenList.map(d =>
    `<span style="display:inline-block; background-color:#e6f6f8; color:#006d7e; font-size:13px; font-weight:600; padding:4px 12px; border-radius:20px; margin:2px 4px 2px 0;">${d}</span>`
  ).join(' ');

  const content = `
    <h1 style="margin:0 0 8px 0; font-size:22px; font-weight:700; color:#1a1a1a;">Nieuwe offerte aanvraag</h1>
    <p style="margin:0 0 24px 0; font-size:14px; color:#888888;">Via het offerteformulier op blinkschoonmaak.nl</p>

    <!-- Diensten badges -->
    <div style="margin-bottom:20px;">
      <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em; display:block; margin-bottom:8px;">Gewenste diensten</span>
      ${dienstenBadges}
    </div>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-radius:8px 8px 0 0; border-bottom:1px solid #e9ecef;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Naam</span><br />
          <span style="font-size:15px; font-weight:600; color:#1a1a1a;">${naam}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-bottom:1px solid #e9ecef;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Telefoon</span><br />
          <a href="tel:${telefoon}" style="font-size:15px; font-weight:600; color:#00859a; text-decoration:none;">${telefoon}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-bottom:1px solid #e9ecef;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Email</span><br />
          <a href="mailto:${email}" style="font-size:15px; font-weight:600; color:#00859a; text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; ${bericht ? 'border-bottom:1px solid #e9ecef;' : 'border-radius:0 0 8px 8px;'}">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Adres</span><br />
          <span style="font-size:15px; font-weight:600; color:#1a1a1a;">${adres}</span>
        </td>
      </tr>
      ${bericht ? `
      <tr>
        <td style="padding:12px 16px; background-color:#f8f9fa; border-radius:0 0 8px 8px;">
          <span style="font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Bericht</span><br />
          <span style="font-size:14px; color:#1a1a1a; line-height:1.6;">${bericht}</span>
        </td>
      </tr>` : ''}
    </table>

    <a href="mailto:${email}" style="display:inline-block; background-color:#00859a; color:#ffffff; font-size:14px; font-weight:600; padding:12px 28px; border-radius:8px; text-decoration:none;">Beantwoorden</a>
  `;
  return emailWrapper(content);
}

// ─── Quote Form: Customer confirmation ───────────────────────────────────────

export function quoteCustomerEmail({ naam, diensten, adres }) {
  const dienstenList = diensten.split(',').map(d => d.trim()).filter(Boolean);
  const dienstenItems = dienstenList.map(d =>
    `<li style="padding:4px 0; font-size:14px; color:#1a1a1a;">${d}</li>`
  ).join('');

  const content = `
    <h1 style="margin:0 0 8px 0; font-size:22px; font-weight:700; color:#1a1a1a;">Bedankt voor uw aanvraag, ${naam}!</h1>
    <p style="margin:0 0 24px 0; font-size:15px; color:#555555; line-height:1.6;">
      Wij hebben uw offerte aanvraag ontvangen en gaan hier zo snel mogelijk mee aan de slag. Meestal ontvangt u binnen 24 uur een reactie van ons.
    </p>

    <!-- Summary -->
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td style="padding:16px 20px; background-color:#f8f9fa; border-radius:8px; border:1px solid #e9ecef;">
          <span style="font-size:13px; font-weight:700; color:#1a1a1a; text-transform:uppercase; letter-spacing:0.05em;">Uw aanvraag</span>

          <p style="margin:12px 0 4px 0; font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Diensten</p>
          <ul style="margin:0; padding-left:18px;">
            ${dienstenItems}
          </ul>

          <p style="margin:12px 0 4px 0; font-size:12px; color:#888888; text-transform:uppercase; letter-spacing:0.05em;">Adres</p>
          <p style="margin:0; font-size:14px; color:#1a1a1a;">${adres}</p>
        </td>
      </tr>
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
      <tr>
        <td style="padding:20px 24px; background-color:#f0fafb; border-radius:8px; border-left:4px solid #00859a;">
          <p style="margin:0; font-size:14px; color:#006d7e; line-height:1.6;">
            <strong>Heeft u een dringende vraag?</strong><br />
            Bel ons gerust op <a href="tel:0611125603" style="color:#00859a; font-weight:600; text-decoration:none;">06 1112 5603</a> of stuur een
            <a href="https://wa.me/31611125603" style="color:#00859a; font-weight:600; text-decoration:none;">WhatsApp bericht</a>.
          </p>
        </td>
      </tr>
    </table>

    <a href="${SITE_URL}" style="display:inline-block; background-color:#00859a; color:#ffffff; font-size:14px; font-weight:600; padding:12px 28px; border-radius:8px; text-decoration:none;">Bezoek onze website</a>
  `;
  return emailWrapper(content);
}
