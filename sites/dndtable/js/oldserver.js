const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Message store — in memory (reset every server restart)
const messages = {};

// Send a message
app.post('/send', (req, res) => {
  const { to, from, text } = req.body;

  if (!messages[to]) messages[to] = [];
  messages[to].push({ from, text, time: Date.now() });

  res.json({ status: 'ok' });
});

// Get messages for a user
app.get('/inbox/:name', (req, res) => {
  const name = req.params.name;
  res.json(messages[name] || []);
  messages[name] = []; // Clear inbox after retrieval
});

app.listen(PORT, () => {
  console.log(`📨 Messaging server running at http://localhost:${PORT}`);
});
