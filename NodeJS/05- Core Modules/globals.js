// Globals classes (built-in classes) are available in NodeJS or JS without importing them >> already available in NodeJS >> we don't need to import/require them

// ~ Global Exmaples:
// 1- Math
const absValue = Math.abs(-5); // absValue = 5
console.log(absValue);

// 2- fetch
// const apiResponse = require('url');

// 3- variables
console.log(__dirname); // D:\University\Bachelor's degree\4- Senior\Second Semester\Software Development Frameworks (Node JS + Vue JS)\Documents\NodeJS Course Coding\NodeJS\05- Core Modules
// console.log(global); // global object provides access to global variables in NodeJS
global.appname = 'My App'; // we can add a property to the global object >> we can access it from anywhere in the app (appname here)

// console.log(process.env); // process object provides info about the node js application >> here we can access the environment variables
console.log(process.argv); // info about the current process 
console.log(process.memoryUsage()); // it returns an object that contains info about the memory usage ..

