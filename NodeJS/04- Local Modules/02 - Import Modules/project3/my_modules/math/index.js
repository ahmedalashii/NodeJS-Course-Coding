const multiply = require('./multiply');
const divisions = require('./division');

module.exports = {
    sum: require('./sum'),
    multiply,
    divisionOps, // ES6 syntax
    division: divisionOps.division,
    remainder: require('./division').remainder
};
// or store the imported module in a variable (sum for example for the first one) and export it