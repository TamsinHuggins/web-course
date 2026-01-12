const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

const port = 5001;

const users = [
  { name: 'Tim', age: 21 },
  { name: 'Caprice', age: 23 }
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:name', (req, res) => {
  const matchingUser = users.find((u) => u.name === req.params.name);
  if (matchingUser) return res.status(200).json(matchingUser);
  return res.status(404).json({ message: `No matching user ${req.params.name}` });
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  return res.status(201).json({ message: `Added user ${newUser.name}` });
});

app.put('/users/:name', (req, res) => {
  const index = users.findIndex((u) => u.name === req.params.name);
  if (index === -1) return res.status(404).json({ message: `No matching user ${req.params.name}` });

  users[index] = req.body;
  return res.status(200).json({ message: `Updated user ${req.body.name}` });
});

app.delete('/users/:name', (req, res) => {
  const index = users.findIndex((u) => u.name === req.params.name);
  if (index === -1) return res.status(404).json({ message: `No matching user ${req.params.name}` });

  users.splice(index, 1);
  return res.status(200).json({ message: 'deleted the user' });
});

app.listen(port, () => {
  console.log('server running on port ' + port);
});
