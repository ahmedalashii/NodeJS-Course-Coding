const math = require('./my_modules/math/math');  // import the math module which contains the sum and multiply functions (imported modules)
const iMath = require('./my_modules/math'); // without specifying the index.js file, NodeJS will automatically look for it, if no index.js file is found, it will throw an error
// index.js usually contains the main functionalities of the module

// const sum = require('./my_modules/math/sum'); // import the sum function from sum module
const { sum, multiply } = require('./my_modules/math'); // import the sum and multiply functions from index module >> ES6 syntax
/*
    The curly braces {} in the code indicate object destructuring syntax.
    It tells JavaScript to extract the sum function from the object and assign it to the variable sum.
    It has to be the same key name as the exported function name in the module.
*/

console.log('the sum is', math.sum(4, 8));
console.log('the multiply is', math.multiply(4, 8));

console.log('the sum is', sum(4, 8));
console.log('the multiply is', multiply(4, 8));

console.log("iMath.sum(4, 8) = ", iMath.sum(4, 8));
console.log("iMath.divisionOps.division(4, 8) = ", iMath.divisionOps.division(4, 8));
console.log("iMath.divisionOps.remainder(4, 8) = ", iMath.divisionOps.remainder(4, 8));
// This is called exposing chain of modules or sequence exposure of modules
console.log("iMath.division(4, 8) = ", iMath.division(4, 8));
console.log("iMath.remainder(4, 8) = ", iMath.remainder(4, 8));