const math = require('./my_modules/math/math');

// console.log('the sum is', math[0](5, 9)); // This is if we export the module as an array
console.log('the sum is', math.sum(4, 8));
console.log('the multiply is', math.multi(4, 8));
console.log('the divide is', math.divide(4, 8));
console.log('the subtract is', math.subtract(4, 8));
console.log('the pi is', math.pi);