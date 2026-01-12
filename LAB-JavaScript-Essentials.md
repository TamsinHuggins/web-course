# LAB — JavaScript Essentials

**Module goal:** get comfortable with core JavaScript syntax and problem solving before we start heavy DOM work and async.

## What you will practice
- `let` / `const`, primitive types, basic objects
- Strict equality and common pitfalls
- Arrays and basic array methods
- Functions (declarations vs expressions), default parameters
- Arrow functions and callbacks
- Basic error handling (`try`/`catch`)

## Rules / constraints
- No frameworks.
- Use the browser DevTools **Console** for most tests.
- Prefer **small functions** and test them often.

---

## Lab 01 — JS Basics: small utilities
**Folder:** `labs/javascript-essentials/lab-01-js-basics/`

### Your tasks
Open `index.html` and implement the TODOs in `script.js`.

You will implement:
1. `toTitleCase(text)`
2. `isEmailLike(text)` (simple checks only; do not attempt full RFC validation)
3. `formatCurrency(amount)`
4. `sum(numbers)` and `average(numbers)`

### Stretch
- Add `min(numbers)` and `max(numbers)`.
- Make `formatCurrency` optionally accept a currency code.

---

## Lab 02 — Functions + Arrays: process data
**Folder:** `labs/javascript-essentials/lab-02-functions-and-arrays/`

### Your tasks
Open `index.html` and implement the TODOs in `app.js`.

You will implement:
1. `getActiveCustomers(customers)`
2. `getCustomerEmails(customers)`
3. `getTotalBalance(customers)`
4. `findById(customers, id)`

### Stretch
- Implement `groupByTier(customers)` that returns an object like `{ bronze: [...], silver: [...], gold: [...] }`.

---

## Lab 03 — Intro DOM + Events: a simple counter
**Folder:** `labs/javascript-essentials/lab-03-dom-events/`

### Your tasks
This lab is intentionally small: you will wire up click handlers and update text in the DOM.

Implement the TODOs in `counter.js`:
- Increment / decrement buttons
- Reset button
- Disable decrement when the value is `0`

### Stretch
- Add an input to set the counter value to a specific number.

---

## Turning in
- Your completed files should run by opening `index.html` in a browser.
- Keep your code readable: consistent names, small functions, and comments where helpful.
