const mod = require('./modules/mod'); // requiring of a js file (which is not a module (it doesn't export/expose anything)) will run the code in that file

console.log(process.cwd()); // this will give you the path of the current working directory of the process