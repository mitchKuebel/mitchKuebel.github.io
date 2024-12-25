const fs = require('fs');
const path = require('path');

// Adjust this path to match your directory structure
const imgDir = path.join(__dirname, 'img');

// Read the files in the img directory
const files = fs.readdirSync(imgDir).filter(file => {
    return /\.(jpg|jpeg|png|gif)$/i.test(file); // Filter for image files
});

// Build the list of image URLs
const baseURL = 'https://mitchkuebel.github.io/sites/PictureFrame/img/';
const imageList = files.map(file => `${baseURL}${file}`);

// Write the JSON file
const outputPath = path.join(__dirname, 'imageList.json');
fs.writeFileSync(outputPath, JSON.stringify(imageList, null, 4));

console.log('Image list updated:', imageList);
