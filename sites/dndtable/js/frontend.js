// FRONTEND CONTROLLER SCRIPT
// ---------------------------------------------------------------
// This manages local user identity, note-saving, and messaging UI.
// ---------------------------------------------------------------

let username = localStorage.getItem('username');

if (!username) {
    // Show user selector if not set
    document.getElementById('setUserPage').style.display = 'block';
} else {
    // Show main pages
    document.getElementById('notesPage').style.display = 'block';
    document.getElementById('messagingPage').style.display = 'block';
}

// Called when selecting a username from the dropdown
function setUser() {
    const selectedUser = document.getElementById('userSelect').value;
    localStorage.setItem('username', selectedUser);
    location.reload();
}

// Save the user's notes to the server
function saveNotes() {
    const notes = document.getElementById('notesArea').value;
    fetch(`http://localhost:3000/save-notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, notes })
    });
}

// Send a message to another player
function sendMessage() {
    const recipient = document.getElementById('recipientSelect').value;
    const message = document.getElementById('messageInput').value;
    fetch(`http://localhost:3000/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: username, recipient, message })
    });
    document.getElementById('messageInput').value = '';
}

// Load the user’s messages
function loadMessages() {
    fetch(`http://localhost:3000/get-messages?username=${username}`)
        .then(res => res.json())
        .then(messages => {
            const list = document.getElementById('messagesList');
            list.innerHTML = '';
            messages.forEach(msg => {
                const li = document.createElement('li');
                li.textContent = `${msg.sender}: ${msg.message}`;
                list.appendChild(li);
            });
        });
}

// Reload inbox every 3 seconds
setInterval(() => {
    if (username) loadMessages();
}, 3000);
