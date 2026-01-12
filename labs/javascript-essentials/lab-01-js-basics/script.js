'use strict';

// Lab 01 — JS Basics
// Complete the TODOs. Use the console output at the bottom to self-check.

/**
 * Convert a string to Title Case.
 * Example: "hello world" -> "Hello World"
 */
function toTitleCase(text) {
  // TODO
}

/**
 * Very simple "email-like" check.
 * Requirements:
 * - contains exactly one @
 * - at least 1 char before @
 * - at least 1 char after @
 * - after @ there is a dot somewhere (e.g. a@b.com)
 */
function isEmailLike(text) {
  // TODO
}

/**
 * Format a number as currency (USD) to 2 decimals.
 * Examples:
 * - 12 -> "$12.00"
 * - 12.5 -> "$12.50"
 */
function formatCurrency(amount) {
  // TODO
}

function sum(numbers) {
  // TODO
}

function average(numbers) {
  // TODO (tip: reuse sum)
}

// ----------------------
// Self-check / test area
// ----------------------
console.log('--- Lab 01 self-check ---');

console.log('toTitleCase:', toTitleCase('hello world'), 'expected:', 'Hello World');
console.log('toTitleCase:', toTitleCase('javaScript is fun'), 'expected:', 'JavaScript Is Fun');

console.log('isEmailLike:', isEmailLike('a@b.com'), 'expected:', true);
console.log('isEmailLike:', isEmailLike('abc'), 'expected:', false);
console.log('isEmailLike:', isEmailLike('@example.com'), 'expected:', false);
console.log('isEmailLike:', isEmailLike('alice@example'), 'expected:', false);

console.log('formatCurrency:', formatCurrency(12), 'expected:', '$12.00');
console.log('formatCurrency:', formatCurrency(12.5), 'expected:', '$12.50');

console.log('sum:', sum([1, 2, 3]), 'expected:', 6);
console.log('average:', average([1, 2, 3]), 'expected:', 2);
