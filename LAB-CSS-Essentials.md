# Lab: CSS Essentials (Module 3)

Duration: ~45–60 minutes (+ optional stretch)

## Goal
Apply CSS to a provided HTML page to practise:
- CSS terminology (rules, selectors, declarations)
- simple selectors (element, class, id, `*`)
- relational selectors (descendant/child/sibling)
- attribute selectors
- chaining + grouping
- pseudo-classes and pseudo-elements
- basic visuals: backgrounds, borders, colour, text

---

## Setup
Work in:
- `labs/css-essentials/lab-01-selectors/index.html`
- `labs/css-essentials/lab-01-selectors/styles.css`

Open `index.html` in a browser and refresh as you make changes.

---

## Lab 01 — Selectors playground

### Part A — Warm-up (terminology)
1. Open `styles.css`.
2. Add a comment at the top explaining:
   - what a **selector** is
   - what a **declaration block** is
   - what a **declaration** is

### Part B — Simple selectors
Add rules that:
1. Style *all* paragraphs using an **element selector** (e.g. set `line-height` or `color`).
2. Style the item with class `.highlight` using a **class selector**.
3. Style the element with id `#pageTitle` using an **id selector**.
4. Use the **universal selector** `*` to apply `box-sizing: border-box`.

### Part C — Relational selectors (combinators)
Add rules that:
1. Use a **descendant selector** so links inside the `<nav>` look different from links elsewhere.
2. Use a **child selector** to target only direct `<li>` children of the main list.
3. Use an **adjacent sibling selector** to style the first paragraph after each `<h2>`.

### Part D — Attribute selectors
Add rules that:
1. Select any element with a `data-level` attribute.
2. Select elements where `data-level="advanced"`.
3. Select links where `href` starts with `https://`.

### Part E — Grouping and chaining
1. Group selectors so `h2` and `h3` share the same color.
2. Chain selectors so only a `<button>` with both classes `.btn` and `.primary` gets special styling.

### Part F — Pseudo-classes and pseudo-elements
1. Style `a:hover` and `a:visited` (note: ordering matters).
2. Style `input:focus`.
3. Use `li:first-child` or `li:nth-child(2)` to demonstrate position selectors.
4. Add a `::before` pseudo-element to `.tag` that inserts `#`.

---

## Lab 02 — Box + text effects

Work in:
- `labs/css-essentials/lab-02-box-effects/index.html`
- `labs/css-essentials/lab-02-box-effects/styles.css`

### Requirements
1. Add rounded corners to the card using `border-radius`.
2. Add drop shadows using `box-shadow`.
3. Add an outline using `outline` and `outline-offset`.
4. Add an overflow demo where the container uses `overflow: auto`.
5. Style text:
   - `text-indent`
   - `text-shadow`

---

## Stretch activities
- Add a `:root` block with CSS variables and use them.
- Add `::after` content showing the value of an attribute using `attr(...)`.
- Use `:nth-child(odd)` to add zebra striping.

---

## Solutions
- `solutions/css-essentials/lab-01-selectors/`
- `solutions/css-essentials/lab-02-box-effects/`
