# Blink Schoonmaak 010 — Website Redesign Spec

## Overview

Complete redesign of blinkschoonmaak.nl built in Astro 6. The goal is a professional, visually striking website that surpasses the current site's animations while maintaining clean, minimal text and strong branding.

## Branding

- **Primary color:** #00859a
- **Secondary:** #fff (white), #000/#111 (black/near-black)
- **Logo:** White on transparent (`public/logo.png`)
- **Font:** Plus Jakarta Sans (Google Fonts) — weights: 400 (body), 600 (semi-bold), 700 (bold), 800 (extra-bold for headings)
- **Tone:** Professional, betrouwbaar, modern

## Pages (9 total)

1. Homepage
2. Over Ons (About)
3. Contact (with form)
4. Offerte Aanvragen (Multi-step quote request form)
5. Kantoren Schoonmaak (Office cleaning)
6. Particuliere Schoonmaak (Residential cleaning)
7. Restaurant Schoonmaak (Restaurant cleaning)
8. Recreatiewoning Schoonmaak (Holiday home cleaning)
9. Opleveringsschoonmaak (Handover cleaning)

No standalone "Diensten" overview page — "Diensten" in the nav is a dropdown-only label (not clickable). Breadcrumbs on service pages show: Home > [Dienstnaam] (no Diensten parent link).

## Shared Components

### Navigation
- Sticky transparent navbar that transitions to solid (white with subtle shadow) on scroll
- Logo left, menu links right
- Links: Home, Diensten (dropdown-only with 5 services), Over Ons, Offerte Aanvragen, Contact
- Mobile: hamburger menu with slide-in panel
- Smooth transition animation on scroll state change (opacity + background-color, 0.3s ease)

### Footer (uitgebreid)
- Dark background (#111 or #1a1a1a)
- Multi-column layout (4 columns, stack on mobile)
- Column 1: Logo + short tagline ("Uw betrouwbare schoonmaakpartner in Rotterdam en omgeving")
- Column 2: Diensten-links (all 5 services)
- Column 3: Navigatie-links (Home, Over Ons, Offerte, Contact)
- Column 4: Contactinfo (adres, telefoon, email)
- Social media: Instagram (https://www.instagram.com/blinkschoonmaak010/), WhatsApp (https://wa.me/31611125603)
- Bottom bar: © 2025 Blink Schoonmaak 010 | KVK 94000395

### WhatsApp Floating Button
- Fixed bottom-right corner
- Green WhatsApp icon, rounded
- Links to https://wa.me/31611125603
- Subtle pulse animation on load, then static
- Tooltip on hover: "Chat met ons op WhatsApp"
- Visible on all pages

### Base Layout
- HTML shell with meta tags, Open Graph, Plus Jakarta Sans font loading
- Page title pattern: "[Pagina] | Blink Schoonmaak 010"
- Meta description per page (Dutch, SEO-focused)
- Max content width ~1200px
- Responsive breakpoints: 768px (mobile), 1024px (tablet)
- `prefers-reduced-motion` media query disables/reduces all animations

## Homepage — 7 Sections

### Section 1: Hero (full viewport)
- **Background:** `hero-video.mp4` autoplaying muted looped on desktop, `foto1.jpeg` with Ken Burns zoom on mobile (performance fallback). Video element gets `poster` attribute with first frame or foto1 for instant display before video loads.
- **Overlay:** Branded gradient from left (rgba(0,133,154,0.55) → rgba(0,133,154,0.2) at 35% → transparent at 65%), plus bottom gradient (rgba(0,0,0,0.6) → transparent) for text readability
- **Effects:**
  - *Light sweep:* Diagonal gradient (transparent → rgba(255,255,255,0.04) → transparent) animating translateX from -100% to 250% over 6s, infinite, ease-in-out
  - *Particles:* 5 small circles (3-6px) in rgba(0,133,154,0.35), positioned on right side of hero, floating up/down with staggered delays (CSS animation, no JS canvas needed)
  - *Corner glow:* Bottom-left radial gradient in rgba(0,133,154,0.2), subtle pulse animation (opacity 0.5 → 1, 4s)
- **Content (staggered fade-in, translateY 20px → 0):**
  1. Badge: "Schoonmaakbedrijf Rotterdam" (small pill, 0.3s delay)
  2. Title: "Blink Schoonmaak 010" (44px extra-bold, "010" in #5ec4d4, 0.6s delay)
  3. Subtitle: "Professionele schoonmaak op maat — geen zorgen, wij regelen het." (0.9s delay)
  4. CTA button: "Offerte aanvragen →" (#00859a bg, white text, 1.2s delay)
- **Scroll indicator** at bottom center (animated mouse icon with dot, 1.6s delay)
- Ken Burns: scale(1) → scale(1.06) over 18s, infinite alternate

### Section 2: USP Strip
- Light background (white or #f8f9fa)
- 4 items in a row (2x2 grid on mobile)
- Each: SVG/CSS icon + short label (max 4 words)
  1. Flexibele planning
  2. Betrouwbaar & stipt
  3. Duurzame werkwijze
  4. 100% Nederlandstalig
- Icons: simple line icons or minimal SVG (not emoji)
- **Animation:** Fade-in from below on scroll (Intersection Observer), 0.15s stagger per item

### Section 3: Diensten (Services)
- White background
- Section heading: "Onze Diensten" (centered)
- 5 cards in responsive grid (3 columns desktop, 2 on tablet, 1 on mobile)
- Each card:
  - Photo background (assigned below), aspect ratio ~3:2
  - Dark gradient overlay at bottom
  - Service name in white at bottom
  - Hover: photo scale(1.05) over 0.4s, overlay darkens, short description text appears + "Meer info →"
  - Entire card links to service page
- **Animation:** Staggered fade-in on scroll, 0.1s per card
- Card photo assignments:
  - Kantoren Schoonmaak → foto2.jpeg
  - Particuliere Schoonmaak → foto3.jpeg
  - Restaurant Schoonmaak → foto1.jpeg
  - Recreatiewoning Schoonmaak → foto8.png (meeting room as placeholder, replace later)
  - Opleveringsschoonmaak → foto7.png

### Section 4: Hoe het werkt (Process)
- Light gray background (#f8f9fa)
- Section heading: "Hoe het werkt" (centered)
- 3 steps horizontally connected by a line (vertical on mobile with vertical line)
  1. Circle "1" + "Offerte aanvragen" + "Vul het formulier in"
  2. Circle "2" + "Kennismaking" + "We bespreken uw wensen"
  3. Circle "3" + "Schoonmaak" + "Wij gaan aan de slag"
- Circles: 60px, border 2px #00859a, number in #00859a
- Connecting line: 2px solid #00859a between circles
- **Animation:** Line draws itself (scaleX 0→1) on scroll, then circles fill (bg becomes #00859a, number becomes white), then text fades in. Sequential, ~0.5s per step.

### Section 5: Cijfers (Stats)
- Dark background (#111) with subtle branded overlay/parallax
- 4 stats in a row (2x2 on mobile)
  - "10+" → counter counts 0→10, then "+" appears | "Jaar ervaring"
  - "100%" → counter counts 0→100, then "%" appears | "Garantie op werk"
  - "24/7" → no counter, just fade-in | "Bereikbaar"
  - "500+" → counter counts 0→500, then "+" appears | "Tevreden klanten"
- Numbers: large (48-56px), extra-bold, #00859a or white
- Labels: smaller, uppercase, #888
- **Animation:** Counters triggered by Intersection Observer, ~2s duration, easeOut. Each stat staggers 0.15s.
- Subtle parallax: background moves at 0.5x scroll speed

### Section 6: Reviews
- White background
- Section heading: "Wat onze klanten zeggen" (centered)
- 3 review cards side by side (swipeable carousel on mobile with dots navigation, no auto-advance)
- Each card:
  - 5 gold stars (★★★★★)
  - Quote text in italic
  - Reviewer: avatar circle with initials (bg #00859a22, color #00859a) + name + type
- Placeholder reviews (to be replaced with real ones):
  1. "Erg tevreden over de schoonmaak van ons kantoor. Flexibel en betrouwbaar team." — Jan V., Kantoor Rotterdam
  2. "Onze vakantiewoning is altijd perfect schoon als gasten aankomen. Top service!" — Maria K., Recreatiewoning
  3. "Fijne samenwerking, ze denken echt met je mee. Aanrader!" — Peter B., Particulier
- **Animation:** Fade-in staggered on scroll, 0.15s per card
- Mobile carousel: swipe with touch, dots below, no arrows, smooth snap scroll

### Section 7: CTA Block
- Full-width, branded background (#00859a)
- Heading: "Klaar voor een schone start?" (white, bold)
- Subtext: "Vraag vrijblijvend een offerte aan" (white, semi-transparent)
- Large white CTA button: "Offerte aanvragen →" (white bg, #00859a text)
- **Animation:** Fade-in on scroll

## Service Page Template (5 pages)

All 5 service pages share the same layout:

### Hero Banner
- Shorter hero (40-50vh) with relevant photo as background
- Dark overlay (rgba(0,0,0,0.5)) + service name as large heading (centered)
- Breadcrumb below heading: Home > [Dienstnaam]
- Ken Burns zoom on the background photo (same as homepage hero but subtler)

### Content Section
- Short intro paragraph (2-3 sentences max, placeholder Dutch copy for now)
- "Wat wij bieden" — 3-4 items with simple line icons and short descriptions
- Two-column layout on desktop: text left, photo right (or alternating)
- **Animation:** Fade-in sections on scroll

### CTA Block
- Same component as homepage section 7
- Custom heading: "Interesse in [dienstnaam]? Vraag een offerte aan."

### Photo assignments (initial, adjustable)
- Kantoren: hero=foto2.jpeg, content=foto4.png, foto5.png
- Particulier: hero=foto3.jpeg, content=foto8.png
- Restaurant: hero=foto1.jpeg
- Recreatiewoning: hero=foto8.png (placeholder, replace later)
- Oplevering: hero=foto7.png, content=foto6.png

### Placeholder content per service
Use brief, professional Dutch copy based on the current site's content but shortened significantly. Each service gets:
- 2-sentence intro
- 3-4 bullet items with icons (e.g. "Dagelijkse schoonmaak", "Flexibele planning", "Duurzame middelen")
- Copy can be refined later by client

## Over Ons Page
- Hero banner (40vh, branded #00859a background with subtle pattern or foto4.png with overlay)
- Section: "Over Blink Schoonmaak 010"
- Two-column: text left, photo right (foto7.png — receptie)
- Text: 2 short paragraphs about being a jong familiebedrijf, passie, divers team, korte lijnen (placeholder Dutch copy based on current site, condensed)
- **Animation:** Fade-in on scroll, photo slides in from right
- CTA block at bottom (same component)

## Contact Page
- Hero banner (40vh, branded background)
- Two-column layout:
  - Left: Contact form (naam, telefoon, email, bericht) — simple single-step form
  - Right: Contact details card (adres, telefoon with click-to-call, email with mailto, KVK) + embedded Google Maps iframe (Theodoor Colenbranderhof 5, Rotterdam)
- WhatsApp highlighted: "Direct chatten? Stuur ons een bericht op WhatsApp" with green button linking to wa.me/31611125603
- **Form submission:** Web3Forms (free tier, sends to info@blinkschoonmaak.nl). Form posts to https://api.web3forms.com/submit with access_key. Success state: inline thank-you message replacing the form.
- **Animation:** Form and contact card fade in from left/right on scroll

## Offerte Aanvragen Page — Multi-Step Form
- Hero banner (40vh, branded background)
- **Progress bar** at top of form: 3 steps with labels, active step highlighted in #00859a

### Step 1: "Welke dienst?"
- Visual selection: 5 service cards in a grid
- Each card: icon + service name, clickable, selected state with #00859a border + checkmark
- Multiple selection allowed
- "Volgende →" button (disabled until at least 1 selected)

### Step 2: "Uw gegevens"
- Fields: Naam*, Telefoon*, Email*, Adres*, Postcode + Woonplaats*
- Clean form styling with floating labels or top-aligned labels
- "← Vorige" and "Volgende →" buttons

### Step 3: "Extra informatie"
- Textarea: "Waarmee kunnen wij u van dienst zijn?" (optional)
- Summary of selected services and contact details (reviewable)
- "← Vorige" and "Versturen" button (#00859a, prominent)

### Transitions
- Steps slide left/right with smooth CSS transition (translateX + opacity)
- Progress bar animates fill between steps

### On Submit
- Web3Forms submission (same as contact form, sends to info@blinkschoonmaak.nl)
- Success state: form replaced with "Bedankt! We nemen zo snel mogelijk contact met u op." message with checkmark animation
- Error state: inline error message, form stays visible

### Trust indicators
- Below the form: small stats strip (10+ jaar, 100% garantie, 24/7 bereikbaar) as social proof

## Animation Strategy

**Philosophy:** Every animation has a purpose — guide attention, reveal content naturally, create premium feel. Uitgebreid but doelgericht: no animation without a reason.

### On Page Load (Hero only)
- Video/photo Ken Burns zoom (continuous, 18s)
- Light sweep (continuous, 6s, diagonal gradient translateX)
- Floating particles (continuous, 8s float, CSS only, 5 elements)
- Corner glow pulse (continuous, 4s)
- Content staggered fade-in (translateY 20px → 0, opacity 0 → 1, 0.3s intervals)

### On Scroll (all sections)
- **Intersection Observer** with threshold 0.15 — trigger when 15% of element enters viewport
- Sections fade in from below (translateY 30px → 0, opacity 0 → 1, 0.6s ease-out)
- Cards/items within sections stagger (0.1-0.15s delay per item)
- Counter animation for stats section (2s, easeOut)
- Process steps: line draws (scaleX), circles fill, text appears (sequential)
- Over Ons: photo slides in from right
- Contact: form and card from left/right

### On Hover (interactive elements)
- Buttons: translateY(-2px) + box-shadow increase (0.2s ease)
- Service cards: photo scale(1.05) + overlay appearance (0.4s ease)
- Nav links: underline grows from center (scaleX 0→1)
- CTA buttons: slight brightness increase or shadow glow
- Footer links: color transition to #00859a

### Multi-Step Form
- Step transitions: translateX(-100%/0/100%) + opacity, 0.4s ease
- Progress bar: width transition 0.3s ease
- Service card selection: border-color + scale pulse (0.2s)
- Submit success: checkmark draw animation (SVG stroke-dashoffset)

### Performance
- CSS animations preferred (GPU accelerated via transform/opacity)
- Intersection Observer for scroll triggers (no scroll event listeners)
- `prefers-reduced-motion`: disable Ken Burns, particles, light sweep, stagger delays; keep simple fade-ins
- Video only on desktop (matchMedia check), poster frame for instant display
- Lazy load images below fold (loading="lazy")

## Available Assets

### In `public/`
- `logo.png` — White logo on transparent
- `hero-video.mp4` — Hero background video (optimize: compress to <10MB if possible, consider WebM format for smaller size)
- `favicon.ico`, `favicon.svg`

### In `src/assets/`
- `foto1.jpeg` — Mop close-up on blue floor (hero mobile fallback, restaurant service)
- `foto2.jpeg` — Person mopping large office hall (kantoren service)
- `foto3.jpeg` — Vacuum close-up on carpet (particulier service)
- `foto4.png` — Clean office corridor, own work (kantoren content)
- `foto5.png` — Office workspace with monitors, own work (kantoren content)
- `foto6.png` — Clean medical/dental room, own work (oplevering content)
- `foto7.png` — Reception desk with polished floors, own work (oplevering hero, over ons)
- `foto8.png` — Meeting/lounge room, own work (recreatiewoning placeholder, particulier content)

Note: `astro.svg` and `background.svg` are Astro starter defaults — can be removed.

## Technical Notes

- Built with Astro 6 (`.astro` components, no React/Vue needed)
- Scoped CSS with `<style>` tags in components
- No CSS framework — custom CSS (full control over animations, minimal bundle)
- Font: Plus Jakarta Sans via Google Fonts (`<link>` in base layout)
- Forms: Web3Forms (https://web3forms.com) — free tier, no backend needed, sends email to info@blinkschoonmaak.nl
- TypeScript strict mode enabled
- File-based routing via `src/pages/`
- Deployment: Cloudflare Pages (static output, `astro build` → `dist/`)
- Accessibility: WCAG 2.1 AA target — alt text on all images, aria-labels on interactive elements, keyboard-navigable menu, focus-visible styles, sufficient color contrast

## Component List

- `Navigation.astro` — Sticky navbar with scroll transition and mobile menu
- `Footer.astro` — Multi-column footer
- `HeroBanner.astro` — Reusable hero with props (title, subtitle, background, height, showScrollIndicator)
- `HomeHero.astro` — Homepage-specific hero with video, particles, effects
- `ServiceCard.astro` — Diensten card with hover effect
- `ProcessStep.astro` — Numbered step with circle and description
- `StatsCounter.astro` — Animated counter with label
- `ReviewCard.astro` — Review with stars, quote, author
- `CTABlock.astro` — Full-width branded CTA section (props: heading, subtext, buttonText, buttonLink)
- `ContactForm.astro` — Simple contact form (Web3Forms)
- `QuoteForm.astro` — Multi-step offerte form (Web3Forms)
- `WhatsAppButton.astro` — Fixed floating WhatsApp button
- `USPStrip.astro` — 4 USP items
- `ScrollReveal.astro` — Wrapper component for scroll-triggered animations (Intersection Observer)
- `BaseLayout.astro` — HTML shell, meta, fonts, global styles

## Contact Information (for footer/contact pages)
- Bedrijf: Blink Schoonmaak 010
- Adres: Theodoor Colenbranderhof 5, 3059 LS Rotterdam
- Telefoon: 0611125603
- Email: info@blinkschoonmaak.nl
- KVK: 94000395
- Instagram: https://www.instagram.com/blinkschoonmaak010/
- WhatsApp: https://wa.me/31611125603
