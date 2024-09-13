// copyBuild.js
const fs = require('fs-extra');
const path = require('path');

// Define the source (build folder) and destination directories
const source = path.join(__dirname, 'build'); // Default build directory
const destination = path.join(__dirname, 'dist'); // Change 'dist' to your desired directory

// Copy function to move files from source to destination
fs.copy(source, destination, { overwrite: true }, (err) => {
  if (err) {
    console.error('Error copying build files:', err);
    process.exit(1);
  } else {
    console.log(`Build files copied to ${destination} successfully!`);
  }
});
