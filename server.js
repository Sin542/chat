const express = require('express');
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Chat Backend!');
});

// Define another route, e.g., /api/messages
app.get('/api/messages', (req, res) => {
  res.json({ message: "This is the messages endpoint." });
});

// Make sure the server is running on port 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
