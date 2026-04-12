'use strict';

// Fetch + REST (GET + POST)

// API Base URL - this lab API runs on port 5001
const API_URL = 'http://localhost:5001';

async function loadUsers() {
  // TODO:
  // 1) fetch `${API_URL}/users`
  // 2) await response.json()
  // 3) call displayUsers(users)
  // 4) handle errors with try/catch (and show alert for now)
}

function displayUsers(users) {
  const tableBody = document.getElementById('usersTableBody');
  tableBody.innerHTML = '';

  users.forEach((user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.age}</td>
    `;
    tableBody.appendChild(row);
  });
}

async function addUser(userData) {
  // TODO:
  // POST `${API_URL}/users`
  // method: 'POST'
  // headers: { 'Content-Type': 'application/json' }
  // body: JSON.stringify(userData)
  // Then refresh by calling await loadUsers();
}

function validateForm(name, age) {
  document.getElementById('nameError').textContent = '';
  document.getElementById('ageError').textContent = '';

  let isValid = true;

  if (!name || name.trim().length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
    isValid = false;
  }

  if (!age || age < 1 || age > 120) {
    document.getElementById('ageError').textContent = 'Age must be between 1 and 120';
    isValid = false;
  }

  return isValid;
}

document.getElementById('addUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('userName').value.trim();
  const age = parseInt(document.getElementById('userAge').value);

  if (!validateForm(name, age)) {
    return;
  }

  const userData = { name, age };

  // TODO: call addUser(userData)
});

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});
