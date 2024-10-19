// Handle Login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username === 'user' && password === 'password') {
        document.getElementById('loginError').textContent = '';
        alert('Welcome, ' + username + '!');
        window.location.hash = '#log-calls';
    } 
    else if (username === 'employee' && password === 'password'){
        alert('Welcome, ' + username + '!');
        window.location.href = 'employee.html'
    }
    else if (username === 'admin' && password === 'password'){
        alert('Welcome, ' + username + '!');
        window.location.href = 'admin.html'
    }
    else {
        document.getElementById('loginError').textContent = 'Incorrect username or password.';
    }
}

// Simulate Call Logging
function startCallLogging() {
    const logMessage = document.getElementById('logMessage');
    const begin = document.getElementById('begin');
    const log = document.getElementById('log');
    logMessage.textContent = 'Logging call...';
    begin.textContent = 'Logging call...';
    log.textContent = ""
    
    setTimeout(() => {
        logMessage.textContent = 'Call logged successfully.';
        begin.textContent = 'Begin a Call';
        log.textContent = "Link to Log"
    }, 10000); // Simulate call logging delay
}

/*
THE CODE FOR THE CLOCK IN AND CLOCK OUT IS BELOW
THIS COUNTS THE SECONDS THEN MINUTES THEN HOURS THEN LETS YOU KNOW HOW LONG YOU CLOCKED IN FOR
*/
const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));
let clockInTime;
let clockInterval;
let isClockedIn = false;
i=3000

function verifyAndClockIn() {
    // Step 1: Show "Verifying Location" for 3 seconds
    if (!isClockedIn) {
        document.getElementById('timeOnClock').innerText = "Verifying location...";
        // setTimeout(function() {
            // Step 2: Show "Location Verified"
        setTimeout(() => {
            document.getElementById('timeOnClock').innerText = "Location Verified";
            i=i+50
            // Step 3: Ask for employee ID
            
                let employeeId = prompt("Please enter your Employee ID:");

            // Step 4: Confirm the employee ID
            if (employeeId) {
                alert("Employee ID " + employeeId + " confirmed.");
                
                // Step 5: Proceed to start the clock
                toggleClock(); // This is your clock function from the original code
            } else {
                alert("Clock-in cancelled. No Employee ID entered.");
            }
        }, (i));
        // }, 3000);  // Wait for 3 seconds before showing the next message
    }
    else{
        toggleClock();
    }
}
    function toggleClock() {
        if (!isClockedIn) {
            // Clock In
            clockInTime = Date.now();
            isClockedIn = true;
            document.getElementById('clockButton').innerText = 'Clock Out';
            startTimer();
        } else {
            // Clock Out
            clearInterval(clockInterval);
            let clockOutTime = Date.now();
            let duration = (clockOutTime - clockInTime) / 1000; // Time in seconds
            let hours = Math.floor(duration / 3600);
            let minutes = Math.floor((duration % 3600) / 60);
            let seconds = Math.floor(duration % 60);
            alert(`You were clocked in for ${hours}h ${minutes}m ${seconds}s`);
            document.getElementById('timeOnClock').innerText = '00:00:00';
            document.getElementById('clockButton').innerText = 'Clock In!';
            isClockedIn = false;
        }
    }

    function startTimer() {
        clockInterval = setInterval(function () {
            let currentTime = Date.now();
            let elapsedTime = (currentTime - clockInTime) / 1000;
            let hours = Math.floor(elapsedTime / 3600);
            let minutes = Math.floor((elapsedTime % 3600) / 60);
            let seconds = Math.floor(elapsedTime % 60);
            
            document.getElementById('timeOnClock').innerText = 
                (hours < 10 ? '0' + hours : hours) + ':' + 
                (minutes < 10 ? '0' + minutes : minutes) + ':' + 
                (seconds < 10 ? '0' + seconds : seconds);
        }, 1000);
    }


    function recordCutScene() {
        // Step 1: Show "Verifying Location" for 3 seconds
            let customer = prompt("Please enter the customers name: ");
            
            // setTimeout(function() {
                // Step 2: Show "Location Verified"
                if (customer) {
                    document.getElementById('timeOnClock').innerText = "Waiting on " + customer + "...";
                    setTimeout(() => {
                        
                        document.getElementById('timeOnClock').innerText = customer + " Has sent their file! Opening in a new tab!";
                        // Step 3: Ask for employee ID
                    }, (5000));
                    setTimeout(() => {
                        
                        window.open('record.html')
                        // Step 3: Ask for employee ID
                    }, (2000));
                    // Step 5: Proceed to start the clock
                    toggleClock(); // This is your clock function from the original code
                } else {
                    alert("Report cancelled. No Customer name entered.");
                }
            
    
                // Step 4: Confirm the employee ID
               
            
            // }, 3000);  // Wait for 3 seconds before showing the next message
    }


    function verify(){
        document.getElementById('label').innerText = "Verifying patient info, please wait...";
        setTimeout(() => {
            document.getElementById('label').innerText = "Patient information verified. This is correct.";
        }, (10000));
    }

    function systemize(){
        document.getElementById('label').innerText = "Connecting to ERIS system... Please wait...";
        setTimeout(() => {
            document.getElementById('label').innerText = "Connected to system, Information Uploaded Successfully.";
        }, (5000));
    }