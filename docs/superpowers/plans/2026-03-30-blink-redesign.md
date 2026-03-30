# Blink Schoonmaak 010 Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, animated, professional website for Blink Schoonmaak 010 (cleaning company) with 9 pages in Astro 6.

**Architecture:** Static site with Astro 6, custom CSS (no framework), vanilla JS for scroll animations and form logic. File-based routing, scoped styles per component, Web3Forms for form submissions. All animations CSS-driven with Intersection Observer triggers.

**Tech Stack:** Astro 6, TypeScript (strict), custom CSS, vanilla JS, Web3Forms, Google Fonts (Plus Jakarta Sans), Cloudflare Pages deployment.

**Spec document:** `docs/superpowers/specs/2026-03-30-blink-redesign-design.md`

---

## File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro          # HTML shell, fonts, meta, global styles
├── components/
│   ├── Navigation.astro          # Sticky navbar + mobile menu
│   ├── Footer.astro              # Multi-column footer
│   ├── WhatsAppButton.astro      # Fixed floating WhatsApp button
│   ├── HomeHero.astro            # Homepage hero (video, particles, effects)
│   ├── HeroBanner.astro          # Reusable short hero for subpages
│   ├── USPStrip.astro            # 4 USP icons row
│   ├── ServiceCard.astro         # Single service card with hover
│   ├── ProcessSteps.astro        # 3-step process section
│   ├── StatsCounter.astro        # Stats section with counters
│   ├── ReviewCard.astro          # Single review card
│   ├── ReviewsSection.astro      # Reviews section with mobile carousel
│   ├── CTABlock.astro            # Full-width CTA section
│   ├── ContactForm.astro         # Simple contact form
│   ├── QuoteForm.astro           # Multi-step offerte form
│   └── ScrollReveal.astro        # Scroll-triggered animation wrapper
├── pages/
│   ├── index.astro               # Homepage
│   ├── over-ons.astro            # About page
│   ├── contact.astro             # Contact page
│   ├── offerte-aanvragen.astro   # Quote request page
│   ├── kantoren-schoonmaak.astro
│   ├── particuliere-schoonmaak.astro
│   ├── restaurant-schoonmaak.astro
│   ├── schoonmaak-recreatiewoning.astro
│   └── opleveringsschoonmaak.astro
├── styles/
│   └── global.css                # CSS custom properties, reset, typography, utilities
└── assets/
    └── (existing foto's)
public/
├── logo.png
├── hero-video.mp4
├── favicon.ico
└── favicon.svg
```

---

## Task 1: Global Styles & Base Layout

**Files:**
- Create: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro` (rewrite from current `Layout.astro`)
- Delete: `src/components/Welcome.astro`, `src/pages/index.astro` (will recreate), `src/assets/astro.svg`, `src/assets/background.svg`

- [ ] **Step 1: Create `src/styles/global.css`**

```css
/* CSS Custom Properties */
:root {
  --color-primary: #00859a;
  --color-primary-light: #5ec4d4;
  --color-primary-dark: #006d7e;
  --color-white: #ffffff;
  --color-black: #111111;
  --color-gray-50: #f8f9fa;
  --color-gray-100: #e9ecef;
  --color-gray-400: #888888;
  --color-gray-800: #1a1a1a;
  --color-gray-900: #111111;

  --font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  --max-width: 1200px;
  --nav-height: 80px;

  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.6s ease-out;
}

/* Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  font-weight: var(--font-weight-regular);
  color: var(--color-black);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* Typography */
h1, h2, h3, h4 {
  font-weight: var(--font-weight-extrabold);
  line-height: 1.1;
}

h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.5rem); }

/* Container */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* Section spacing */
.section {
  padding: 80px 0;
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }
}

/* Section heading */
.section-heading {
  text-align: center;
  margin-bottom: 48px;
}

/* Scroll reveal initial state */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--transition-slow), transform var(--transition-slow);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .reveal, .reveal-item {
    opacity: 1;
    transform: none;
  }
}

/* Button base */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 10px;
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
  box-shadow: 0 4px 20px rgba(0, 133, 154, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 6px 28px rgba(0, 133, 154, 0.45);
}

.btn-white {
  background: var(--color-white);
  color: var(--color-primary);
}

.btn-white:hover {
  box-shadow: 0 6px 28px rgba(255, 255, 255, 0.3);
}

/* Focus visible */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

- [ ] **Step 2: Rewrite `src/layouts/BaseLayout.astro`**

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Professionele schoonmaakdiensten in Rotterdam en omgeving. Kantoren, particulier, restaurant en meer.' } = Astro.props;
const fullTitle = `${title} | Blink Schoonmaak 010`;
---

<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content={description} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
    <title>{fullTitle}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  @import '../styles/global.css';
</style>

<script>
  // Scroll reveal — Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Stagger children with .reveal-item
          const items = entry.target.querySelectorAll('.reveal-item');
          items.forEach((item, i) => {
            (item as HTMLElement).style.transitionDelay = `${i * 0.15}s`;
            item.classList.add('visible');
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
</script>
```

- [ ] **Step 3: Delete starter files**

```bash
rm src/components/Welcome.astro src/assets/astro.svg src/assets/background.svg
```

- [ ] **Step 4: Create placeholder `src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Home">
  <main>
    <h1>Blink Schoonmaak 010</h1>
    <p>Website in aanbouw</p>
  </main>
</BaseLayout>
```

- [ ] **Step 5: Verify dev server runs**

Run: `npm run dev`
Expected: Site loads at localhost:4321, shows "Blink Schoonmaak 010" with Plus Jakarta Sans font.

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: Build succeeds, output in `dist/`.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: set up base layout, global styles, and typography"
```

---

## Task 2: Navigation Component

**Files:**
- Create: `src/components/Navigation.astro`

- [ ] **Step 1: Create `src/components/Navigation.astro`**

The navigation needs:
- Transparent by default, becomes white with shadow on scroll (JS scroll listener)
- Logo left (`/logo.png`), menu links right
- "Diensten" is a dropdown (CSS hover + aria), not a link
- Mobile: hamburger icon toggles a slide-in panel
- All keyboard-navigable, aria-expanded on dropdown/mobile menu

```astro
---
const services = [
  { name: 'Kantoren Schoonmaak', href: '/kantoren-schoonmaak' },
  { name: 'Particuliere Schoonmaak', href: '/particuliere-schoonmaak' },
  { name: 'Restaurant Schoonmaak', href: '/restaurant-schoonmaak' },
  { name: 'Recreatiewoning Schoonmaak', href: '/schoonmaak-recreatiewoning' },
  { name: 'Opleveringsschoonmaak', href: '/opleveringsschoonmaak' },
];
---

<nav class="nav" id="main-nav" aria-label="Hoofdnavigatie">
  <div class="nav-inner">
    <a href="/" class="nav-logo" aria-label="Blink Schoonmaak 010 - Home">
      <img src="/logo.png" alt="Blink Schoonmaak 010" width="180" height="50" />
    </a>

    <ul class="nav-links" id="nav-links">
      <li><a href="/">Home</a></li>
      <li class="nav-dropdown">
        <button
          class="nav-dropdown-toggle"
          aria-expanded="false"
          aria-haspopup="true"
        >
          Diensten
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        <ul class="nav-dropdown-menu" role="menu">
          {services.map((service) => (
            <li role="menuitem"><a href={service.href}>{service.name}</a></li>
          ))}
        </ul>
      </li>
      <li><a href="/over-ons">Over Ons</a></li>
      <li><a href="/offerte-aanvragen" class="nav-cta">Offerte Aanvragen</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu openen" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 0 24px;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    transition: background-color var(--transition-medium), box-shadow var(--transition-medium);
  }

  .nav.scrolled {
    background: rgba(255, 255, 255, 0.97);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  }

  .nav-inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo img {
    height: 40px;
    width: auto;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 8px;
    align-items: center;
  }

  .nav-links a,
  .nav-dropdown-toggle {
    color: var(--color-white);
    font-weight: var(--font-weight-semibold);
    font-size: 0.95rem;
    padding: 8px 16px;
    border-radius: 8px;
    transition: color var(--transition-fast), background var(--transition-fast);
    position: relative;
  }

  .nav.scrolled .nav-links a,
  .nav.scrolled .nav-dropdown-toggle {
    color: var(--color-black);
  }

  .nav-links a:hover,
  .nav-dropdown-toggle:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .nav.scrolled .nav-links a:hover,
  .nav.scrolled .nav-dropdown-toggle:hover {
    background: var(--color-gray-50);
  }

  .nav-cta {
    background: var(--color-primary) !important;
    color: var(--color-white) !important;
  }

  .nav-cta:hover {
    background: var(--color-primary-dark) !important;
  }

  /* Dropdown */
  .nav-dropdown {
    position: relative;
  }

  .nav-dropdown-toggle {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: inherit;
    cursor: pointer;
  }

  .nav-dropdown-toggle svg {
    transition: transform var(--transition-fast);
  }

  .nav-dropdown:hover .nav-dropdown-toggle svg,
  .nav-dropdown-toggle[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  .nav-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 260px;
    background: var(--color-white);
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    padding: 8px;
    list-style: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(8px);
    transition: opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast);
  }

  .nav-dropdown:hover .nav-dropdown-menu,
  .nav-dropdown-toggle[aria-expanded="true"] + .nav-dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-dropdown-menu a {
    display: block;
    padding: 10px 16px;
    color: var(--color-black) !important;
    border-radius: 8px;
    font-size: 0.9rem;
  }

  .nav-dropdown-menu a:hover {
    background: var(--color-gray-50) !important;
    color: var(--color-primary) !important;
  }

  /* Hamburger */
  .nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    z-index: 1001;
  }

  .nav-hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-white);
    border-radius: 2px;
    transition: transform var(--transition-medium), opacity var(--transition-medium);
  }

  .nav.scrolled .nav-hamburger span {
    background: var(--color-black);
  }

  .nav-hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .nav-hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .nav-hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  /* Mobile */
  @media (max-width: 1024px) {
    .nav-hamburger {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 300px;
      max-width: 80vw;
      background: var(--color-white);
      flex-direction: column;
      padding: 100px 32px 32px;
      gap: 4px;
      align-items: stretch;
      transform: translateX(100%);
      transition: transform var(--transition-medium);
      box-shadow: -4px 0 30px rgba(0, 0, 0, 0.1);
    }

    .nav-links.open {
      transform: translateX(0);
    }

    .nav-links a,
    .nav-dropdown-toggle {
      color: var(--color-black) !important;
      padding: 12px 16px;
      font-size: 1rem;
    }

    .nav-dropdown-menu {
      position: static;
      box-shadow: none;
      opacity: 1;
      visibility: visible;
      transform: none;
      padding-left: 16px;
      display: none;
    }

    .nav-dropdown-toggle[aria-expanded="true"] + .nav-dropdown-menu {
      display: block;
    }
  }
</style>

<script>
  // Scroll state
  const nav = document.getElementById('main-nav')!;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const hamburger = document.getElementById('nav-hamburger')!;
  const navLinks = document.getElementById('nav-links')!;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Dropdown toggle (keyboard/mobile)
  document.querySelectorAll('.nav-dropdown-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });
</script>
```

- [ ] **Step 2: Add Navigation to BaseLayout**

Add `import Navigation from '../components/Navigation.astro';` and place `<Navigation />` before `<slot />` in BaseLayout.

- [ ] **Step 3: Verify navigation renders**

Run: `npm run dev`
Expected: Transparent navbar on page load, turns white on scroll, hamburger works on mobile width, dropdown opens on hover/click.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add sticky navigation with dropdown and mobile menu"
```

---

## Task 3: Footer & WhatsApp Button

**Files:**
- Create: `src/components/Footer.astro`
- Create: `src/components/WhatsAppButton.astro`
- Modify: `src/layouts/BaseLayout.astro` (add imports)

- [ ] **Step 1: Create `src/components/Footer.astro`**

4-column footer with dark background, logo, diensten links, nav links, contactinfo, social icons (Instagram + WhatsApp), bottom bar with KVK. Full code as per spec. Use SVG icons for Instagram and WhatsApp (inline, no icon library).

- [ ] **Step 2: Create `src/components/WhatsAppButton.astro`**

Fixed bottom-right green circle with WhatsApp SVG icon. Links to `https://wa.me/31611125603`. Pulse animation on load (CSS keyframes), tooltip on hover. `aria-label="Chat met ons op WhatsApp"`.

- [ ] **Step 3: Add both to BaseLayout**

Import Footer and WhatsAppButton, place Footer after `<slot />` and WhatsAppButton after Footer.

- [ ] **Step 4: Verify**

Run: `npm run dev`
Expected: Footer shows 4 columns with correct info, stacks on mobile. WhatsApp button fixed bottom-right, pulses, tooltip on hover.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: add footer and WhatsApp floating button"
```

---

## Task 4: ScrollReveal Component

**Files:**
- Create: `src/components/ScrollReveal.astro`

- [ ] **Step 1: Create `src/components/ScrollReveal.astro`**

A simple wrapper that adds `.reveal` class. Accepts `tag` prop (default `div`) and optional `class` and `delay` props. No JS needed here — the BaseLayout script handles observation.

```astro
---
interface Props {
  tag?: string;
  class?: string;
  delay?: string;
}

const { tag: Tag = 'div', class: className = '', delay } = Astro.props;
const style = delay ? `transition-delay: ${delay}` : undefined;
---

<Tag class:list={['reveal', className]} style={style}>
  <slot />
</Tag>
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add ScrollReveal wrapper component"
```

---

## Task 5: CTABlock Component

**Files:**
- Create: `src/components/CTABlock.astro`

- [ ] **Step 1: Create `src/components/CTABlock.astro`**

Full-width branded section (#00859a background). Props: `heading`, `subtext`, `buttonText`, `buttonLink`. White text, white button with #00859a text. Wrapped in ScrollReveal. Responsive padding.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add CTABlock component"
```

---

## Task 6: HeroBanner Component (subpages)

**Files:**
- Create: `src/components/HeroBanner.astro`

- [ ] **Step 1: Create `src/components/HeroBanner.astro`**

Reusable short hero for subpages. Props: `title`, `breadcrumbs` (array of {label, href}), `backgroundImage` (Astro image import). Height 40-50vh. Dark overlay, centered white title, breadcrumb below. Ken Burns zoom on background (subtler, scale 1.03). Use Astro `<Image>` component for optimized images.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add HeroBanner component for subpages"
```

---

## Task 7: Homepage Hero

**Files:**
- Create: `src/components/HomeHero.astro`

- [ ] **Step 1: Create `src/components/HomeHero.astro`**

Full viewport hero. This is the most complex component:

- `<video>` element: autoplay, muted, loop, playsinline, poster attribute (foto1). `<source>` for hero-video.mp4. Wrap in media query check: only show video on desktop (>768px), show `<Image>` of foto1 with Ken Burns on mobile.
- Branded overlay: two gradients (left branded, bottom dark) via `::before` and `::after` pseudo-elements.
- Light sweep: extra div with diagonal gradient, `translateX` animation 6s infinite.
- 5 particle divs: small circles, positioned right side, CSS `float` animation with staggered delays.
- Corner glow: div with radial-gradient, pulse animation.
- Content: badge pill, h1 title ("010" wrapped in `<span>` for accent color), subtitle p, CTA link button. Each with `animation-delay` for stagger.
- Scroll indicator: mouse SVG with dot animation at bottom center.

All animations defined in scoped `<style>`.

- [ ] **Step 2: Test on dev server**

Run: `npm run dev`
Expected: Video plays on desktop, foto1 with zoom on mobile. All effects visible: light sweep, particles, glow. Text staggers in. Scroll indicator animates.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add homepage hero with video, particles, and staggered animations"
```

---

## Task 8: USPStrip Component

**Files:**
- Create: `src/components/USPStrip.astro`

- [ ] **Step 1: Create `src/components/USPStrip.astro`**

4 items in a row (2x2 on mobile). Each item: inline SVG icon (simple line icons for: calendar/clock, checkmark/shield, leaf/recycle, speech/flag) + label text. Wrapped in `.reveal` container, each item has `.reveal-item` class for staggered animation. Light background section.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add USP strip component"
```

---

## Task 9: ServiceCard + Diensten Section

**Files:**
- Create: `src/components/ServiceCard.astro`

- [ ] **Step 1: Create `src/components/ServiceCard.astro`**

Props: `title`, `description`, `image` (Astro image import), `href`. Uses Astro `<Image>` for optimized photo. Card with photo background, dark gradient overlay at bottom, title. On hover: photo `scale(1.05)`, overlay darkens, description text + "Meer info →" appears. Entire card is an `<a>` tag. Aspect ratio ~3:2. `.reveal-item` class for stagger.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add ServiceCard component with hover effects"
```

---

## Task 10: ProcessSteps Component

**Files:**
- Create: `src/components/ProcessSteps.astro`

- [ ] **Step 1: Create `src/components/ProcessSteps.astro`**

3 steps with numbered circles (60px, border #00859a), connecting line between them. Horizontal on desktop, vertical on mobile. Each step: number, title, description. Uses Intersection Observer in `<script>` to trigger sequential animation: line draws (scaleX), circles fill, text fades in. Light gray background (#f8f9fa).

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add process steps component with line-draw animation"
```

---

## Task 11: StatsCounter Component

**Files:**
- Create: `src/components/StatsCounter.astro`

- [ ] **Step 1: Create `src/components/StatsCounter.astro`**

Dark background section. 4 stats in a row (2x2 mobile). Each stat: large number + suffix ("+", "%", or "/7"), label below. JS counter animation: Intersection Observer triggers counting from 0 to target over 2s with easeOut. "24/7" has no counter — just fades in. Numbers in white or #00859a, labels in #888 uppercase. Subtle parallax on background via CSS `background-attachment: fixed` or `transform` on scroll.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add stats counter component with count-up animation"
```

---

## Task 12: ReviewCard + ReviewsSection

**Files:**
- Create: `src/components/ReviewCard.astro`
- Create: `src/components/ReviewsSection.astro`

- [ ] **Step 1: Create `src/components/ReviewCard.astro`**

Props: `stars`, `quote`, `name`, `type`. Shows gold stars (★), italic quote, avatar circle with initials (extracted from name), name + type. `.reveal-item` class.

- [ ] **Step 2: Create `src/components/ReviewsSection.astro`**

Contains 3 ReviewCards with placeholder content from spec. Desktop: 3 cards side by side in grid. Mobile: horizontal scroll-snap carousel with dots below. CSS scroll-snap for native swipe. Dots indicate active card via Intersection Observer on each card. No auto-advance, no arrows.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add reviews section with mobile carousel"
```

---

## Task 13: Assemble Homepage

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Rewrite `src/pages/index.astro`**

Import and assemble all homepage sections in order:
1. HomeHero
2. USPStrip (wrapped in ScrollReveal)
3. Diensten section heading + 5 ServiceCards in a grid (wrapped in ScrollReveal, each card with `.reveal-item`)
4. ProcessSteps
5. StatsCounter
6. ReviewsSection (wrapped in ScrollReveal)
7. CTABlock

Import foto1-8 for ServiceCards using Astro image imports.

- [ ] **Step 2: Full visual test**

Run: `npm run dev`
Expected: Complete homepage with all 7 sections. Scroll through to verify all animations trigger correctly. Test mobile responsive at 768px and below.

- [ ] **Step 3: Build test**

Run: `npm run build`
Expected: Build succeeds without errors.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: assemble complete homepage with all sections"
```

---

## Task 14: Service Pages (5 pages)

**Files:**
- Create: `src/pages/kantoren-schoonmaak.astro`
- Create: `src/pages/particuliere-schoonmaak.astro`
- Create: `src/pages/restaurant-schoonmaak.astro`
- Create: `src/pages/schoonmaak-recreatiewoning.astro`
- Create: `src/pages/opleveringsschoonmaak.astro`

- [ ] **Step 1: Create all 5 service pages**

Each page follows the same template:
1. HeroBanner with service-specific photo and title
2. Content section: 2-sentence intro + 3-4 bullet items with inline SVG icons
3. Optional content photo (two-column layout on desktop)
4. CTABlock with service-specific heading

Use placeholder Dutch copy based on the current site (shortened). Import relevant photos per spec photo assignments.

- [ ] **Step 2: Verify all pages render**

Run: `npm run dev`
Visit each URL: `/kantoren-schoonmaak`, `/particuliere-schoonmaak`, `/restaurant-schoonmaak`, `/schoonmaak-recreatiewoning`, `/opleveringsschoonmaak`.
Expected: All pages render with hero, content, CTA. Scroll animations work.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add 5 service pages with shared template"
```

---

## Task 15: Over Ons Page

**Files:**
- Create: `src/pages/over-ons.astro`

- [ ] **Step 1: Create `src/pages/over-ons.astro`**

1. HeroBanner with branded background or foto4.png
2. Two-column section: text left (2 short paragraphs about the company), photo right (foto7.png)
3. Photo slides in from right on scroll (add custom animation class)
4. CTABlock at bottom

- [ ] **Step 2: Verify**

Run: `npm run dev`, visit `/over-ons`
Expected: Page renders, photo slides in on scroll, CTA works.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add over ons page"
```

---

## Task 16: Contact Form Component

**Files:**
- Create: `src/components/ContactForm.astro`

- [ ] **Step 1: Create `src/components/ContactForm.astro`**

Form fields: naam, telefoon, email, bericht (textarea). All required except bericht. Posts to Web3Forms API (`https://api.web3forms.com/submit`). Hidden input for `access_key` (placeholder value — user needs to register and replace). Hidden input `from_name` = "Blink Schoonmaak 010 - Contact". Client-side JS: prevent default submit, fetch POST, show success message or error inline. Success replaces form with "Bedankt! We nemen zo snel mogelijk contact met u op." Clean styling with labels above inputs, branded focus states.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add contact form component with Web3Forms"
```

---

## Task 17: Contact Page

**Files:**
- Create: `src/pages/contact.astro`

- [ ] **Step 1: Create `src/pages/contact.astro`**

1. HeroBanner with "Contact" title
2. Two-column layout:
   - Left: ContactForm (wrapped in ScrollReveal, slides from left)
   - Right: Contact details card (adres with icon, telefoon click-to-call, email mailto, KVK) + Google Maps iframe embed (Theodoor Colenbranderhof 5, Rotterdam) + WhatsApp button "Direct chatten? Stuur ons een bericht op WhatsApp" (wrapped in ScrollReveal, slides from right)

- [ ] **Step 2: Verify**

Run: `npm run dev`, visit `/contact`
Expected: Form renders, details card with map, scroll animations work.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add contact page with form and map"
```

---

## Task 18: Multi-Step Quote Form

**Files:**
- Create: `src/components/QuoteForm.astro`

- [ ] **Step 1: Create `src/components/QuoteForm.astro`**

This is the most complex form component:

**HTML structure:**
- Progress bar: 3 steps with labels, active step gets `.active` class, completed steps get `.completed` class. Fill line animates width.
- Step 1 container: 5 service selection cards in grid. Each card: icon + service name, checkbox hidden, clicking toggles `.selected` class + checkmark. "Volgende →" button disabled until ≥1 selected.
- Step 2 container: Form fields (naam, telefoon, email, adres, postcode+woonplaats). "← Vorige" + "Volgende →" buttons. Client-side validation before proceeding.
- Step 3 container: Textarea + summary of selected services + entered details. "← Vorige" + "Versturen" button.
- Only active step is visible, others hidden via `translateX` + `opacity`.

**JS:**
- Step navigation: track current step (1-3), update progress bar, slide steps with CSS transitions.
- Service selection: toggle selected state, update hidden checkboxes/values.
- Validation: step 2 validates required fields before allowing next.
- Submit: collect all data, POST to Web3Forms, show success/error state.

**CSS:**
- Step containers: `position: absolute` in a relative wrapper, transition `translateX` and `opacity` 0.4s ease.
- Progress bar: `.progress-fill` width transitions from 33% → 66% → 100%.
- Service cards: border-color transition, scale pulse on select.
- Success: checkmark SVG with stroke-dashoffset draw animation.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: add multi-step quote form with animations"
```

---

## Task 19: Offerte Aanvragen Page

**Files:**
- Create: `src/pages/offerte-aanvragen.astro`

- [ ] **Step 1: Create `src/pages/offerte-aanvragen.astro`**

1. HeroBanner with "Offerte Aanvragen" title
2. QuoteForm component (centered, max-width ~700px)
3. Trust indicators strip below form: small stats (10+ jaar, 100% garantie, 24/7 bereikbaar) — reuse simplified version of StatsCounter or just static HTML

- [ ] **Step 2: Full test of multi-step form**

Run: `npm run dev`, visit `/offerte-aanvragen`
Test: Select services → next → fill fields → next → review summary → submit (will fail without real API key but should POST correctly). Test "vorige" navigation, step transitions, progress bar.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: add offerte aanvragen page with multi-step form"
```

---

## Task 20: Final Polish & Build Verification

**Files:**
- Modify: `astro.config.mjs` (add Cloudflare adapter if needed, or keep static)
- Modify: `src/layouts/BaseLayout.astro` (final meta tags)
- Modify: `CLAUDE.md` (update with final architecture)

- [ ] **Step 1: Update `astro.config.mjs` for Cloudflare Pages**

Cloudflare Pages supports static sites natively. Set `output: 'static'` (default) and `site` URL if known. No adapter needed for static.

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.blinkschoonmaak.nl',
  output: 'static',
});
```

- [ ] **Step 2: Full responsive test**

Run: `npm run dev`
Test all 9 pages at: desktop (1440px), tablet (1024px), mobile (375px).
Check: navigation, hero video/fallback, all animations, forms, footer, WhatsApp button.

- [ ] **Step 3: Build and preview**

```bash
npm run build && npm run preview
```

Expected: Build succeeds. Preview at localhost:4321 shows production version. All pages work.

- [ ] **Step 4: Update CLAUDE.md**

Update with final architecture, component list, and any notes.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: final polish, config, and docs update"
```
