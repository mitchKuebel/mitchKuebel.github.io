// Handle Login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginError').textContent = '';
        alert('Welcome, ' + username + '!');
        window.location.hash = '#log-calls';
    } else {
        document.getElementById('loginError').textContent = 'Incorrect username or password.';
    }
}

// Simulate Call Logging
function startCallLogging() {
    const logMessage = document.getElementById('logMessage');
    logMessage.textContent = 'Logging call...';
    
    setTimeout(() => {
        logMessage.textContent = 'Call logged successfully.';
    }, 2000); // Simulate call logging delay
}
