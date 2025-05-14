// BACKEND SERVER FOR DND TABLE
// ---------------------------------------------------------------
// Saves notes, sends messages, and loads messages for players
// ---------------------------------------------------------------

const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// SAVE NOTES
app.post('/save-notes', (req, res) => {
    const { username, notes } = req.body;
    const path = `../data/${username}/notes.json`;
    try {
        fs.writeFileSync(path, JSON.stringify({ notes }));
        res.sendStatus(200);
    } catch (err) {
        console.error('Error saving notes:', err);
        res.sendStatus(500);
    }
});

// SEND MESSAGE
app.post('/send-message', (req, res) => {
    const { sender, recipient, message } = req.body;
    const path = `../data/${recipient}/messages.json`;
    let messages = [];
    if (fs.existsSync(path)) {
        try {
            messages = JSON.parse(fs.readFileSync(path));
        } catch (err) {
            console.error('Error parsing JSON in messages.json:', err);
            messages = [];
        }
    }
    messages.push({ sender, message });
    try {
        fs.writeFileSync(path, JSON.stringify(messages, null, 2));
        res.sendStatus(200);
    } catch (err) {
        console.error('Error writing messages to file:', err);
        res.sendStatus(500);
    }
});

// GET MESSAGES
app.get('/get-messages', (req, res) => {
    const { username } = req.query;
    const path = `../data/${username}/messages.json`;
    let messages = [];
    if (fs.existsSync(path)) {
        try {
            messages = JSON.parse(fs.readFileSync(path));
        } catch (err) {
            console.error('Error parsing JSON in messages.json:', err);
            messages = [];
        }
    }
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(`Backend is running at http://localhost:${PORT}`);
});

