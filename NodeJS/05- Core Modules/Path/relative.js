// Relative path for a local module or file has to start with './' or '../' to differentiate from core modules
// Relative path is the path from the current file to the file or module we want to import
// Relative path for the "fs" is relative to //! the current directory we run the code from
// './' means the current directory
// '../' means the parent directory
// './' and '../' are called relative paths
// Example: './data/story.txt' means the story.txt file is in the data folder which is in the same directory as the current file we run the code from
// Absolute path is the path from the root directory to the file or module we want to import

// const story = require('../data/story.text'); // Relative path for the require function is relative to the file, so wherever we run the code from, it will work
// console.log(story);

const { readFile } = require('fs');

// Relative path >> if we run this file from the root directory, it will not work because the data folder is not in the root directory
// If we run this file from the 05- Core Modules\Path Module directory, it will work because the data folder is in the same directory as the current file
readFile('../data/story.text', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
