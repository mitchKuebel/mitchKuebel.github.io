const fs = require('fs');
const path = require('path');

// Path to the image folder
const imgFolder = './img';

// Get all image files in the folder
const images = fs.readdirSync(imgFolder)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.png'))
    .map(file => `https://mitchkuebel.github.io/sites/PictureFrame/img/${file}`);

// Create the JSON structure
const data = {
    count: images.length,
    images: images
};

// Write to JSON file
fs.writeFileSync('imageList.json', JSON.stringify(data, null, 4));
console.log('imageList.json updated!');
