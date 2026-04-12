'use strict';

const API_URL = 'http://localhost:5001';

async function loadUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error('Error loading users:', error);
    alert('Error loading users. Make sure the API is running on port 5001.');
  }
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
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    await response.json();

    await loadUsers();
    document.getElementById('addUserForm').reset();
  } catch (error) {
    console.error('Error adding user:', error);
    alert('Error adding user. Please try again.');
  }
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

  if (!validateForm(name, age)) return;

  await addUser({ name, age });
});

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});
