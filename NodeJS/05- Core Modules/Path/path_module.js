const path = require('path');


console.log(__filename);
// Base file name (path_module.js) using path.basename()
console.log(path.basename(__filename));
// Directory name (Path) using path.dirname()
console.log(path.dirname(__filename));
// File extension (.js) using path.extname()
console.log(path.extname(__filename));
// Create path object using path.parse()
console.log(path.parse(__filename));
// Concatenate paths using path.join()
console.log(path.join(__dirname, 'test', 'hello.html'));
// Get the absolute path using path.resolve()
console.log(path.resolve(__dirname, 'test', 'hello.html'));