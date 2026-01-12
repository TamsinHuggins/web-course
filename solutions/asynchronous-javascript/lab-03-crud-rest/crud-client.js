'use strict';

const API_URL = 'http://localhost:5001';

let originalUserName = '';

function showMessage(message, type = 'success') {
  const messageBox = document.getElementById('messageBox');
  messageBox.textContent = message;
  messageBox.className = `message-box ${type}`;
  messageBox.style.display = 'block';

  setTimeout(() => {
    messageBox.style.display = 'none';
  }, 2500);
}

function displayUsers(users) {
  const tableBody = document.getElementById('usersTableBody');
  tableBody.innerHTML = '';

  users.forEach((user) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>
        <div class="action-buttons">
          <button class="btn-update" data-action="edit" data-name="${user.name}" data-age="${user.age}">Edit</button>
          <button class="btn-delete" data-action="delete" data-name="${user.name}">Delete</button>
        </div>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

async function loadUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const users = await response.json();
    displayUsers(users);
  } catch (err) {
    console.error('loadUsers failed:', err);
    showMessage('Error loading users. Is the API running on port 5001?', 'error');
  }
}

async function addUser(userData) {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const result = await response.json();
    showMessage(result.message, 'success');

    await loadUsers();
    document.getElementById('addUserForm').reset();
  } catch (err) {
    console.error('addUser failed:', err);
    showMessage('Error adding user.', 'error');
  }
}

async function deleteUser(name) {
  const ok = confirm(`Are you sure you want to delete "${name}"?`);
  if (!ok) return;

  try {
    const response = await fetch(`${API_URL}/users/${encodeURIComponent(name)}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const result = await response.json();
    showMessage(result.message, 'success');
    await loadUsers();
  } catch (err) {
    console.error('deleteUser failed:', err);
    showMessage('Error deleting user.', 'error');
  }
}

function showUpdateForm(name, age) {
  originalUserName = name;

  document.getElementById('updateUserName').value = name;
  document.getElementById('updateUserAge').value = String(age);

  document.getElementById('addUserSection').classList.add('hidden');
  document.getElementById('updateUserSection').classList.remove('hidden');

  document.getElementById('updateUserSection').scrollIntoView({ behavior: 'smooth' });
}

function cancelUpdate() {
  document.getElementById('addUserSection').classList.remove('hidden');
  document.getElementById('updateUserSection').classList.add('hidden');
  originalUserName = '';
}

async function updateUser(originalName, userData) {
  try {
    const response = await fetch(`${API_URL}/users/${encodeURIComponent(originalName)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const result = await response.json();
    showMessage(result.message, 'success');

    await loadUsers();
    cancelUpdate();
  } catch (err) {
    console.error('updateUser failed:', err);
    showMessage('Error updating user.', 'error');
  }
}

function validate(name, age, prefix) {
  document.getElementById(`${prefix}NameError`).textContent = '';
  document.getElementById(`${prefix}AgeError`).textContent = '';

  let valid = true;

  if (!name || name.trim().length < 2) {
    document.getElementById(`${prefix}NameError`).textContent = 'Name must be at least 2 characters long';
    valid = false;
  }

  if (!age || age < 1 || age > 120) {
    document.getElementById(`${prefix}AgeError`).textContent = 'Age must be between 1 and 120';
    valid = false;
  }

  return valid;
}

document.getElementById('addUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('addUserName').value.trim();
  const age = parseInt(document.getElementById('addUserAge').value);

  if (!validate(name, age, 'add')) return;

  await addUser({ name, age });
});

document.getElementById('updateUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('updateUserName').value.trim();
  const age = parseInt(document.getElementById('updateUserAge').value);

  if (!validate(name, age, 'update')) return;

  await updateUser(originalUserName, { name, age });
});

document.getElementById('btnCancelUpdate').addEventListener('click', () => {
  cancelUpdate();
});

document.getElementById('usersTableBody').addEventListener('click', async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  if (!action) return;

  if (action === 'delete') {
    const name = target.dataset.name;
    if (!name) return;
    await deleteUser(name);
  }

  if (action === 'edit') {
    const name = target.dataset.name;
    const age = Number(target.dataset.age);
    if (!name) return;
    showUpdateForm(name, age);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});
