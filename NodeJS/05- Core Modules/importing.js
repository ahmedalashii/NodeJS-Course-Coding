const fs = require('fs'); // import the fs module >> fs directly not as ./fs >> it's a core module not local one >> so we don't need to specify the path
// the core module could start with @ or end with / >> @moduleName or moduleName/
const { readFile } = require('fs'); // object destructuring syntax

fs.readFile('path', 'utf8', (error, data) => { });
readFile('path', 'utf8', (error, data) => { });