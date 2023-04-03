const sum = require('./my_modules/math/sum');
const multiply = require('./my_modules/math/multiply');
console.log('the sum is', sum(4, 8));
console.log('the multiply is', multiply(4, 8));

// So, we know now that each file is a module and we can import it using require() function
// And also we reach that each module here contains and exports only one function

