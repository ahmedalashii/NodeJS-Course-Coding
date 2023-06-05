const path = require('path');
// console.log(__dirname); // this is the path from the root directory to the current directoy
// console.log(__filename); // this is the path from the root directory to the current file

console.log("File name Dir: ", __filename);
// Base file name (path_module.js) using path.basename()
console.log("Base (Real File Name)", path.basename(__filename));
// Directory name (Path) using path.dirname()
console.log("Directory", path.dirname(__filename)); // equivalent to __dirname
// File extension (.js) using path.extname()
console.log("Extension", path.extname(__filename));
// Create path object using path.parse()
console.log("Filename", path.parse(__filename));
// Concatenate paths using path.join()
console.log(path.join('../data', 'story.text'));
// Concatenate paths using path.join()
console.log("Concatenate", path.join(__dirname, '../data', 'story.text'));
// Get the absolute path using path.resolve()
console.log("Absolute", path.resolve(__dirname, '../data', 'story.text'));

const { readFile } = require('fs');
readFile(path.join(__dirname, '../data', 'story.text'), 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// path.join is useful when you want to concatenate paths regardless of the OS you are using.