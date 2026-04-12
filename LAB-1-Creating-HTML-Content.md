# Lab: Creating HTML Content (Module 1)

Duration: ~30 minutes (+ optional stretch)

## Goal
Create a single HTML5 page that demonstrates:
- semantic mark-up tags
- traditional HTML elements used alongside semantic tags
- custom `data-*` attributes
- an HTML5 form using fieldsets and modern input types/attributes

**Important:** This module is **HTML-focused** (no CSS required). JavaScript is optional stretch.

---

## Setup
Work in:
- `labs/1-creating-html-content/index.html`

Open the file in a browser as you go.

---

## Part A — Semantic mark-up structure
In `index.html`, build this high-level structure using semantic tags:

- `<header>`
  - page heading `<h1>`
  - a short intro paragraph
- `<nav>`
  - 3 links (they can be `#` placeholders)
- `<main>`
  - at least **two** `<section>` elements
  - at least **one** `<article>` inside a section
- `<aside>`
  - a small “Did you know?” panel or glossary
- `<footer>`
  - copyright line and a `<time>` element

### Requirements
- Use headings in a sensible hierarchy (`h1` then `h2` etc).
- Include at least one traditional element such as `<div>`, `<span>`, or `<hr>` appropriately.

### Stretch
- Add a `<figure>` with a `<figcaption>` (you can use a placeholder image URL).
- Add an ordered list (`<ol>`) and a definition list (`<dl>`).

---

## Part B — Custom data attributes (`data-*`)
Add a small list of items (e.g. “Course modules”, “Resources”, “Books”).

For each item, add at least **two** custom data attributes, for example:
- `data-level="intro|core|advanced"`
- `data-duration="30"` (minutes)
- `data-topic="forms"`

### Requirements
- Use valid attribute names with the `data-` prefix.
- Make sure the values are realistic and consistent.

### Stretch (optional JavaScript)
Add a script that reads one of your `data-*` attributes via `element.dataset` and logs something to the console.
Example idea:
- log all items where `data-level === "intro"`

---

## Part C — HTML5 forms
Create a form that collects registration details.

### Requirements
1. Use `<form>` containing **two** `<fieldset>` groups:
   - “Personal details”
   - “Preferences”
2. Each `<fieldset>` should have a `<legend>`.
3. Include at least these controls (choose appropriate `type`):
   - name (text)
   - email (email)
   - phone (tel)
   - start date (date)
   - preferred contact method (radio buttons)
   - topics (checkboxes)
4. Use at least **four** HTML5 attributes across your inputs:
   - `required`
   - `placeholder`
   - `min` / `max`
   - `pattern`
   - `autocomplete`
   - `autofocus`

### Stretch
- Add a `<datalist>` to provide auto-suggestions.
- Add `aria-describedby` for help text under one field.

---

## Done criteria
You’re done when:
- the page uses semantic structure correctly
- you have meaningful content (not just empty tags)
- you have multiple `data-*` attributes in use
- the form has fieldsets + modern input types/attributes

---

## Solution
See: `solutions/1-creating-html-content/index.html`
