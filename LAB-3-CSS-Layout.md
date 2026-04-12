# Lab: CSS Layout

Duration: ~60–75 minutes (+ optional stretch)

## Goal
Practise modern layout techniques:
- responsive design + media queries (mobile-first)
- Flexbox for one-dimensional layout (navbars, toolbars)
- CSS Grid for two-dimensional layout (cards, page layout)

Legacy techniques (float/multi-column/absolute positioning) are referenced for awareness, but the labs focus on modern CSS.

---

## Setup
Work in these folders:
- `labs/3-css-layout/lab-301-flexbox-navbar/`
- `labs/3-css-layout/lab-302-grid-cards/`
- `labs/3-css-layout/lab-303-responsive-page/`

Open each `index.html` in a browser.

---

## Lab 301 — Flexbox navbar (modern)

**Folder:** `labs/3-css-layout/lab-301-flexbox-navbar/`

### Requirements
1. Turn the header into a responsive navbar using **Flexbox**:
   - logo on the left
   - nav links in the center (or next to logo)
   - action buttons on the right
2. Use:
   - `display: flex`
   - `justify-content`
   - `align-items`
   - `gap`
   - `flex-wrap` (so it works on small screens)
3. Add a mobile-first breakpoint:
   - on small screens, stack items vertically or wrap cleanly
   - on wider screens, align in a single row

### Stretch
- Use `order` to change the visual order without changing the HTML.
- Make the “Search” input grow to fill space using `flex: 1`.

---

## Lab 302 — Responsive card grid (CSS Grid)

**Folder:** `labs/3-css-layout/lab-302-grid-cards/`

### Requirements
1. Build a responsive card grid using **CSS Grid**.
2. Use either:
   - `grid-template-columns: repeat(auto-fit, minmax(...)))` (preferred)
   - or explicit breakpoints with media queries
3. Ensure cards have consistent spacing and height where possible.

### Stretch
- Add a “featured” card that spans 2 columns at desktop using `grid-column: span 2`.
- Add hover/focus styles.

---

## Lab 303 — Responsive page layout (Grid + media queries)

**Folder:** `labs/3-css-layout/lab-303-responsive-page/`

### Requirements
1. Use **Grid** to create a common page layout:
   - header
   - sidebar
   - main content
   - footer
2. Mobile-first:
   - On small screens: single column (sidebar below header or below main).
   - On wider screens: 2-column layout with a sidebar.
3. Add at least **two** breakpoints using `@media (min-width: ...)`.

### Stretch
- Use `position: sticky` for the sidebar on desktop.
- Add a print stylesheet section: `@media print { ... }`.

---

## Solutions
- `solutions/3-css-layout/solution-301-flexbox-navbar/`
- `solutions/3-css-layout/solution-302-grid-cards/`
- `solutions/3-css-layout/solution-303-responsive-page/`
