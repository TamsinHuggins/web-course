'use strict';

//  Fetch + REST (Full CRUD)
// API Base URL - this lab API runs on port 5001
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
  // TODO: GET /users, parse json, displayUsers
  // - include response.ok check
  // - on error: showMessage('...', 'error')
}

async function addUser(userData) {
  // TODO: POST /users with JSON
  // - on success: showMessage(...)
  // - then await loadUsers(); reset form
}

async function deleteUser(name) {
  // TODO: DELETE /users/:name
  // - confirm before delete (stretch)
  // - on success: showMessage(...), await loadUsers()
}

function showUpdateForm(name, age) {
  // TODO:
  // - set originalUserName
  // - populate update inputs
  // - hide add section, show update section
  // - scroll into view
}

function cancelUpdate() {
  document.getElementById('addUserSection').classList.remove('hidden');
  document.getElementById('updateUserSection').classList.add('hidden');
  originalUserName = '';
}

async function updateUser(originalName, userData) {
  // TODO: PUT /users/:originalName with JSON
  // - on success: showMessage(...)
  // - await loadUsers(); cancelUpdate()
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

  // TODO: await addUser({ name, age })
});

document.getElementById('updateUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('updateUserName').value.trim();
  const age = parseInt(document.getElementById('updateUserAge').value);

  if (!validate(name, age, 'update')) return;

  // TODO: await updateUser(originalUserName, { name, age })
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
    // TODO: await deleteUser(name)
  }

  if (action === 'edit') {
    const name = target.dataset.name;
    const age = Number(target.dataset.age);
    if (!name) return;
    // TODO: showUpdateForm(name, age)
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});
