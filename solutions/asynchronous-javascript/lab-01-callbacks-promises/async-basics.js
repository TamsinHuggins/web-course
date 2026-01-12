'use strict';

function waitMs(ms, callback) {
  setTimeout(() => {
    callback(`waited ${ms}ms`);
  }, ms);
}

function waitMsPromise(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`waited ${ms}ms`), ms);
  });
}

function nowLabel() {
  return new Date().toLocaleTimeString();
}

function doStepsWithCallbacks() {
  console.log('callbacks start:', nowLabel());

  waitMs(500, () => {
    console.log('step 1:', nowLabel());

    waitMs(500, () => {
      console.log('step 2:', nowLabel());

      waitMs(500, () => {
        console.log('step 3:', nowLabel());
        console.log('callbacks done:', nowLabel());
      });
    });
  });
}

function doStepsWithPromises() {
  console.log('promises start:', nowLabel());

  return waitMsPromise(500)
    .then(() => {
      console.log('step 1:', nowLabel());
      return waitMsPromise(500);
    })
    .then(() => {
      console.log('step 2:', nowLabel());
      return waitMsPromise(500);
    })
    .then(() => {
      console.log('step 3:', nowLabel());
      console.log('promises done:', nowLabel());
    })
    .catch((err) => {
      console.error('promises error:', err);
    });
}

async function doStepsWithAsyncAwait() {
  console.log('async/await start:', nowLabel());

  try {
    await waitMsPromise(500);
    console.log('step 1:', nowLabel());

    await waitMsPromise(500);
    console.log('step 2:', nowLabel());

    await waitMsPromise(500);
    console.log('step 3:', nowLabel());

    console.log('async/await done:', nowLabel());
  } catch (err) {
    console.error('async/await error:', err);
  }
}

console.log('--- Lab 01 self-check ---');

// Run them (comment out if desired)
doStepsWithCallbacks();
doStepsWithPromises();
doStepsWithAsyncAwait();
