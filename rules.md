# Development Rules

## Analytics & Tracking

**Every page must include Vercel Analytics tracking code:**
```html
<script defer src="https://cdn.vercel-analytics.com/v1/script.js"></script>
```
Place in the `<head>` section before closing `</head>` tag.

**Every high-value action must have custom event tracking:**
- Form submissions
- CTA button clicks (Work, Services, Contact links)
- Navigation interactions
- Download/engagement actions

Use: `window.va?.track('event-name')` for custom events.

---

## Responsive Design

**Required breakpoints:**
- **Mobile:** 640px and below (320-640px viewport)
- **Tablet:** 641px to 960px
- **Desktop:** 961px and above

**CSS media query structure:**
```css
/* Mobile-first approach */
[data-layout="..."] {
  /* Mobile styles */
}

@media (min-width: 641px) {
  [data-layout="..."] {
    /* Tablet styles */
  }
}

@media (min-width: 961px) {
  [data-layout="..."] {
    /* Desktop styles */
  }
}
```

**Grid layouts:**
- Hero sections: 2 columns desktop, 1 column mobile/tablet
- Secondary grids: 4 columns desktop, 2 columns tablet, 1 column mobile
- Tertiary with sidebar: 3 columns desktop, 1 column mobile/tablet

---

## Page Structure

**All pages must include:**
1. Navigation (Nav.jsx component)
2. Vercel Analytics tracking script
3. Responsive CSS media queries
4. Proper semantic HTML structure
5. Mobile-friendly viewport meta tag

**Navigation menu links:**
- Link to Work page from all pages
- Work page accessible from main nav
- Case studies linked from Work page

---

## Design System

**Typography:**
- Headers: serif fonts
- Body text: system fonts
- Monospace: supporting text, nav labels

**Colors:**
- Use CSS custom properties: `--bg`, `--text`, `--rule`, `--muted`, `--accent`
- Orange accent (`--accent`) for CTAs and section headers

**Spacing:**
- Vertical padding: 1.75rem
- Horizontal padding: 2rem (container)
- Card gap: 2rem

---

## Testing Checklist

Before marking a page/feature complete:
- [ ] Vercel Analytics script included in `<head>`
- [ ] All responsive breakpoints tested (640px, 960px, 1200px+)
- [ ] No horizontal scroll on mobile
- [ ] Images scale properly on all viewports
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Text is readable on all screen sizes
- [ ] Navigation is accessible on mobile (menu collapses/expands)
- [ ] Forms are usable on mobile (proper input sizing, labels)
- [ ] High-value actions have tracking code implemented

