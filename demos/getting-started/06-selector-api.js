const out = document.querySelector('#out');

function showChecked() {
  // Pseudo-class :checked
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  const values = [...checked].map(c => c.value);
  out.textContent = `Checked interests: ${values.join(', ') || '(none)'}`;
}

function toggleCss() {
  // Attribute selector + value match
  const css = document.querySelector('input[name="interest"][value="css"]');
  css.checked = !css.checked;
  showChecked();
}

document.querySelector('#btnShow').addEventListener('click', showChecked);
document.querySelector('#btnToggle').addEventListener('click', toggleCss);

// Run once on load
showChecked();
