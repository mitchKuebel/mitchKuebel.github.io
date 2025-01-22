// Example script for dynamically adding text to the terminal
const output = document.querySelector('.output');

// Add a line of text
function addLine(text) {
  output.innerHTML += `${text}<br>`;
}

// Example usage
addLine("Initializing...");
addLine("Ready for input...");
