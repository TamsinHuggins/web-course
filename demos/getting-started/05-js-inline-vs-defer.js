console.log('Deferred script: DOM is parsed, body is', document.body);

const btn = document.querySelector('#btnDefer');
const statusEl = document.querySelector('#status');

btn.addEventListener('click', () => {
  const now = new Date();
  statusEl.textContent = `Status: clicked at ${now.toLocaleTimeString()}`;
});
