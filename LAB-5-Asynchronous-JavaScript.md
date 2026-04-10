# LAB: Asynchronous JavaScript (Fetch + REST APIs)

**Module goal:** understand asynchronous JavaScript using **callbacks**, **promises**, and **async/await**, then apply it to calling a REST API.

## What you will practice
- Passing and invoking callbacks
- Creating and consuming promises (`then` / `catch`)
- `fetch()` for GET/POST/PUT/DELETE
- `async` / `await` with `try` / `catch`
- Updating the DOM with API data

## Setup (API server)
A small practice API is included in this module.

1. Open a terminal in `labs/5-asynchronous-javascript/api/`
2. Install dependencies:
   - `npm install`
3. Start the server:
   - `node app.js`

You should see: `server running on port 5001`

Verify in a browser:
- `http://localhost:5001/users`

---

## Lab 501 — Callbacks + Promises (no REST)
**Folder:** `labs/5-asynchronous-javascript/lab-501-callbacks-promises/`

### Your tasks
Open `index.html` and complete the TODOs in `async-basics.js`.

You will implement:
1. `waitMs(ms, callback)`
   - Calls the callback **after** `ms` milliseconds.
2. `waitMsPromise(ms)`
   - Returns a **Promise** that resolves after `ms` milliseconds.
3. `doStepsWithPromises()`
   - Runs 3 waits **in sequence** using promise chaining.
4. `doStepsWithAsyncAwait()`
   - Runs the same 3 waits using `async/await`.

### Stretch
- Add a function that runs 3 waits **in parallel** using `Promise.all()`.

---

## Lab 502 — Fetch + REST API (GET + POST)
**Folder:** `labs/5-asynchronous-javascript/lab-502-fetch-rest/`

### Your tasks
You’ll build a *basic* web client (GET + POST only) against the provided API.

Open `index.html` and complete the TODOs in `client.js`:
1. `loadUsers()`
   - GET `/users`
   - Convert the response to JSON
   - Render the table
2. `addUser(user)`
   - POST `/users` with JSON body
   - Refresh the table after the add succeeds
3. Form handling
   - Validate name (min 2 chars) and age (1–120)
   - Prevent the default submit behavior

### Stretch
- Display a status message on the page instead of using `alert()`.

---

## Lab 503 — Fetch + REST API (Full CRUD)
**Folder:** `labs/5-asynchronous-javascript/lab-503-crud-rest/`

### Your tasks
You’ll implement GET/POST/PUT/DELETE and basic UI state.

Open `index.html` and complete the TODOs in `crud-client.js`:
- GET: load and render users on page load
- POST: add user
- DELETE: delete user when the “Delete” button is clicked
- PUT: edit/update user (show update form, submit PUT)
- Error handling: show an error message when a request fails

### Stretch
- Confirm before delete.
- Disable submit buttons while a request is in flight.

---

## Turning in
- Your completed files should run by opening `index.html` pages in a browser.
- Keep async code readable:
  - prefer small functions
  - `try/catch` around awaited requests
  - check `response.ok` and handle error cases
