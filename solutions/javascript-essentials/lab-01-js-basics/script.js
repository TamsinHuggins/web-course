'use strict';

function toTitleCase(text) {
  if (typeof text !== 'string') return '';

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const first = word.slice(0, 1).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return first + rest;
    })
    .join(' ');
}

function isEmailLike(text) {
  if (typeof text !== 'string') return false;

  const trimmed = text.trim();
  const parts = trimmed.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;
  if (!local || !domain) return false;

  // domain must contain a dot not at the edges
  const dotIndex = domain.indexOf('.');
  if (dotIndex <= 0) return false;
  if (dotIndex === domain.length - 1) return false;

  return true;
}

function formatCurrency(amount) {
  // handle strings that contain numbers
  const n = Number(amount);
  if (!Number.isFinite(n)) return '$0.00';
  return `$${n.toFixed(2)}`;
}

function sum(numbers) {
  if (!Array.isArray(numbers)) return 0;
  return numbers.reduce((total, n) => total + Number(n), 0);
}

function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

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
