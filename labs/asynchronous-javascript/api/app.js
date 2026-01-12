const express = require('express');

const app = express();
app.use(express.json());

// Enable CORS to allow the HTML pages to make requests to this API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Allow preflight requests to succeed quickly
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

const port = 5001;

// In-memory data (resets when server restarts)
const users = [
  { name: 'Tim', age: 21 },
  { name: 'Caprice', age: 23 }
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:name', (req, res) => {
  const matchingUser = users.find((u) => u.name === req.params.name);

  if (matchingUser) {
    return res.status(200).json(matchingUser);
  }

  return res.status(404).json({ message: `No matching user ${req.params.name}` });
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  return res.status(201).json({ message: `Added user ${newUser.name}` });
});

app.put('/users/:name', (req, res) => {
  const matchingUserIndex = users.findIndex((u) => u.name === req.params.name);

  if (matchingUserIndex !== -1) {
    users[matchingUserIndex] = req.body;
    return res.status(200).json({ message: `Updated user ${req.body.name}` });
  }

  return res.status(404).json({ message: `No matching user ${req.params.name}` });
});

app.delete('/users/:name', (req, res) => {
  const matchingUserIndex = users.findIndex((u) => u.name === req.params.name);

  if (matchingUserIndex !== -1) {
    users.splice(matchingUserIndex, 1);
    return res.status(200).json({ message: 'deleted the user' });
  }

  return res.status(404).json({ message: `No matching user ${req.params.name}` });
});

app.listen(port, () => {
  console.log('server running on port ' + port);
});
