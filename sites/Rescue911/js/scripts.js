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

function signy(event) {
    const email= document.getElementById("email").value
    const user= document.getElementById("username").value
    const emailer = document.getElementById('emailer');
    const welcome = document.getElementById('welcome');
    emailer.textContent = email;
    welcome.textContent = "Welcome to ERIS, " + user;

    document.getElementById("signupform").style.display="none";
	document.getElementById("signedUp").style.display="block";
}

function generateReport(){
    window.location.href = 'report.html'
}

function report(event) {
    event.preventDefault();
    const casenum= document.getElementById("caseNum").value;
    const date= document.getElementById("date").value;
    const report = document.getElementById('reportingOff').value;
    const prepped = document.getElementById('preparedby').value;
    const incident = document.getElementById('incident').value;
    const sumsy = document.getElementById("sum").value;
    const acts = document.getElementById("actions").value;
    const deets = document.getElementById("detail").value;

    const casenumb1= document.getElementById("casenm");
    const date1 = document.getElementById("dates");
    const report1 = document.getElementById('repor');
    const prepped1 = document.getElementById('prepped');
    const incident1 = document.getElementById('incy');
    const sumsy1 = document.getElementById("sumsy");
    const acts1 = document.getElementById("acts");
    const deets1 = document.getElementById("deets");

    casenumb1.textContent = casenum;
    date1.textContent = date;
    report1.textContent = report;
    prepped1.textContent = prepped;
    incident1.textContent = incident;
    sumsy1.textContent = sumsy;
    acts1.textContent = acts;
    deets1.textContent = deets;


    alert(deets + " " + acts + " " + sumsy + " " + incident + " " + prepped + " " + report + " " + date + " " + casenum)
    document.getElementById("reporttype").style.display="none";
	document.getElementById("official").style.display="block";
}
const form = document.getElementById("signupform");
const reports = document.getElementById("Case-Report-Form");

form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Your JavaScript code to handle the form data
  // For example, you can get the form data like this:
  const formData = new FormData(form);
  const name = formData.get("name");

  // Do something with the data, e.g., send it to an API
  console.log("Form data:", name); 
});

// Simulate Call Logging
function startCallLogging() {
    const logMessage = document.getElementById('logMessage');
    const begin = document.getElementById('begin');
    const log = document.getElementById('log');
    logMessage.textContent = 'Logging call...';
    begin.textContent = 'Logging call...';
    log.textContent = "";
    
    setTimeout(() => {
        logMessage.textContent = 'Call logged successfully.';
        begin.textContent = 'Begin a Call';
        log.textContent = "Link to Log";
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