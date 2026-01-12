'use strict';

// Lab 01 — Callbacks + Promises
// Complete the TODOs. Refresh the page and check the console.

/**
 * Calls callback after ms milliseconds.
 * @param {number} ms
 * @param {(message: string) => void} callback
 */
function waitMs(ms, callback) {
  // TODO: use setTimeout
}

/**
 * Returns a Promise that resolves after ms milliseconds.
 * @param {number} ms
 * @returns {Promise<string>}
 */
function waitMsPromise(ms) {
  // TODO: return new Promise((resolve) => {...})
}

function nowLabel() {
  // show time for easier understanding of async order
  return new Date().toLocaleTimeString();
}

function doStepsWithCallbacks() {
  console.log('callbacks start:', nowLabel());

  // TODO: wait 500ms, then log "step 1"
  // TODO: inside that callback, wait 500ms, then log "step 2"
  // TODO: inside that callback, wait 500ms, then log "step 3"
  // Note: nesting shows why callbacks can become hard to read.
}

function doStepsWithPromises() {
  console.log('promises start:', nowLabel());

  // TODO: chain 3 waits using .then()
  // Example:
  // return waitMsPromise(500)
  //  .then(() => { ... })
}

async function doStepsWithAsyncAwait() {
  console.log('async/await start:', nowLabel());

  // TODO: await 3 waits in sequence
}

// ----------------------
// Self-check / test area
// ----------------------
console.log('--- Lab 01 self-check ---');

// Uncomment one at a time to observe behavior:
// doStepsWithCallbacks();
// doStepsWithPromises();
// doStepsWithAsyncAwait();

// If you want: run all three (their logs will interleave):
// doStepsWithCallbacks();
// doStepsWithPromises();
// doStepsWithAsyncAwait();
