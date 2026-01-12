'use strict';

const customers = [
  { id: 101, name: 'Amina', active: true, tier: 'gold', balance: 120.5, email: 'amina@example.com' },
  { id: 102, name: 'Ben', active: false, tier: 'bronze', balance: 0, email: 'ben@example.com' },
  { id: 103, name: 'Chloe', active: true, tier: 'silver', balance: 42.0, email: 'chloe@example.com' },
  { id: 104, name: 'Diego', active: true, tier: 'bronze', balance: 10.25, email: 'diego@example.com' },
  { id: 105, name: 'Esha', active: false, tier: 'gold', balance: 250, email: 'esha@example.com' }
];

function getActiveCustomers(list) {
  if (!Array.isArray(list)) return [];
  return list.filter((c) => c.active === true);
}

function getCustomerEmails(list) {
  if (!Array.isArray(list)) return [];
  return list.map((c) => c.email);
}

function getTotalBalance(list) {
  if (!Array.isArray(list)) return 0;
  return list.reduce((total, c) => total + Number(c.balance), 0);
}

function findById(list, id) {
  if (!Array.isArray(list)) return null;
  const found = list.find((c) => c.id === id);
  return found ?? null;
}

console.log('--- Lab 02 self-check ---');
console.log('active count:', getActiveCustomers(customers).length, 'expected:', 3);
console.log(
  'emails:',
  getCustomerEmails(customers).join(', '),
  'expected:',
  'amina@example.com, ben@example.com, chloe@example.com, diego@example.com, esha@example.com'
);
console.log('total balance:', getTotalBalance(customers), 'expected:', 422.75);
console.log('find 103:', findById(customers, 103)?.name, 'expected:', 'Chloe');
console.log('find 999:', findById(customers, 999), 'expected:', null);
