const sum = require('./sum'); // import the sum function from another module
const multiply = require('./multiply'); // import the multiply function from another module
// This is called exposing chain of modules

module.exports = { sum, multiply }; // export an object containing the above functions as a module