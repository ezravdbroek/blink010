# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro -- --help` | Astro CLI help |

## Architecture

This is an **Astro 6** static site for **Blink Schoonmaak 010**, a Rotterdam-based cleaning company. No UI frameworks — pure `.astro` components only. Output is fully static HTML.

**Site URL:** `https://www.blinkschoonmaak.nl`

### Pages (9 total)

| Route | File | Purpose |
|-------|------|---------|
| `/` | `index.astro` | Homepage with hero video, services, reviews |
| `/over-ons` | `over-ons.astro` | About page |
| `/contact` | `contact.astro` | Contact form + details |
| `/offerte-aanvragen` | `offerte-aanvragen.astro` | Multi-step quote request form (CTA page) |
| `/kantoren-schoonmaak` | `kantoren-schoonmaak.astro` | Office cleaning service page |
| `/particuliere-schoonmaak` | `particuliere-schoonmaak.astro` | Residential cleaning service page |
| `/restaurant-schoonmaak` | `restaurant-schoonmaak.astro` | Restaurant cleaning service page |
| `/schoonmaak-recreatiewoning` | `schoonmaak-recreatiewoning.astro` | Holiday home cleaning service page |
| `/opleveringsschoonmaak` | `opleveringsschoonmaak.astro` | End-of-tenancy cleaning service page |

### Key directories

- `src/pages/` — File-based routing (each `.astro` file becomes a route)
- `src/layouts/` — `BaseLayout.astro`: HTML shell with nav, footer, WhatsApp button, scroll-reveal script
- `src/components/` — 15 reusable components (see below)
- `src/styles/global.css` — Design tokens (CSS custom properties), global resets, utility classes
- `src/assets/` — Imported images (optimized to `.webp` at build time)
- `public/` — Static assets: `logo.png`, `favicon.svg`, `favicon.ico`, `hero-video.mp4`

### Components

| Component | Purpose |
|-----------|---------|
| `Navigation.astro` | Sticky transparent navbar; turns white on scroll; desktop dropdown + mobile slide-in panel |
| `Footer.astro` | Site footer with links and contact info |
| `WhatsAppButton.astro` | Floating WhatsApp CTA button |
| `HomeHero.astro` | Full-screen video hero for the homepage |
| `HeroBanner.astro` | Inner-page hero banner with breadcrumbs |
| `USPStrip.astro` | Horizontal strip of unique selling points |
| `ServiceCard.astro` | Card component used in service grids |
| `CTABlock.astro` | Full-width call-to-action section (defaults to `/offerte-aanvragen`) |
| `ProcessSteps.astro` | Numbered step-by-step process section |
| `StatsCounter.astro` | Animated counter stats strip |
| `ReviewCard.astro` | Single review/testimonial card |
| `ReviewsSection.astro` | Grid of review cards |
| `ContactForm.astro` | Contact form (Web3Forms) |
| `QuoteForm.astro` | Multi-step quote form with progress bar (Web3Forms) |
| `ScrollReveal.astro` | Intersection-observer reveal wrapper |

### Branding & design

- **Primary color:** `#00859a` (teal) with dark variant `#006f81`
- **Font:** Plus Jakarta Sans (400, 600, 700, 800) — loaded from Google Fonts
- **Logo:** White PNG at `public/logo.png`; inverted to black when navbar is scrolled
- Zero client-side JS except nav interactions, scroll-reveal, and form logic

### Forms — Web3Forms

Both `ContactForm.astro` and `QuoteForm.astro` submit to the Web3Forms API. The access key is hardcoded as a placeholder:

```
YOUR_WEB3FORMS_ACCESS_KEY
```

Replace this value in both components before going live. Sign up for a free key at https://web3forms.com.

### Deployment

Deployed as a static site on **Cloudflare Pages**.

- `astro.config.mjs` sets `output: 'static'` and `site: 'https://www.blinkschoonmaak.nl'`
- No server-side rendering; the entire `dist/` directory is uploaded
- Build command: `npm run build` | Output directory: `dist`

## TypeScript

Strict mode enabled via `astro/tsconfigs/strict`. Type definitions auto-generated in `.astro/`.
