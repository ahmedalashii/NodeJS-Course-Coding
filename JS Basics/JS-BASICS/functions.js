/*
    ! Functions are first class citizens in JavaScript and can be used as values.
    ! Functions are objects and can be assigned to variables, passed as arguments to other functions, and returned from functions.
    ! Functions can be declared as:
    * 1- function declarations
    * 2- function expressions
    * 3- arrow functions
    * 4- async functions
*/

// 1. function declaration
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

// 2. function expression >> anonymous function >> is a function without a name 
const subtract = function (a, b) {
    return a - b;
}
console.log(subtract(1, 2));
// 3. arrow function >> lambda function
// const multiply = (a, b) => {
//     return a * b;
// }
// or can be written as
const multiply = (a, b) => a * b; // implicit return >> if the function body is a single expression, the return keyword can be omitted
console.log(multiply(1, 2));
// 4. async function
async function divide(a, b) { // async functions always return a promise
    return a / b;
}
// Asynchronous functions are non-blocking >> they don't wait for the function to finish executing before moving on to the next line of code
divide(1, 2).then((result) => {
    console.log("Divide of 1/2 is:", result);
});

// 5. IIFE >> Immediately Invoked Function Expression >> is a function that is executed immediately after it is created >> it doesn't have to be called to be executed
(function () {
    console.log('IIFE');
})();

// 6. Closures >> is a function that has access to the parent scope, even after the parent function has closed
function outer() {
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    incrementCounter();
}
outer();

// 7. Recursion >> is a function that calls itself until it doesn't >> fibonacci sequence
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci is:", fibonacci(6));

// 8. Default parameters >> is a parameter that is assigned a default value if no value or undefined is passed
function interest(principal, rate = 3.5, years = 5) { // rate and years are default parameters
    return principal * rate / 100 * years; // this function is for simple interest calculation
}
console.log("Interest is:", interest(10000));

// 9. Getters and Setters >> are used to define accessors on objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    // or can be written as
    // fullName: () => {
    //     return `${person.firstName} ${person.lastName}`;
    // },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};
person.fullName = 'Mary Smith';
console.log(person);
console.log(person.fullName); // getter >> to read the value of a property
// console.log(person.fullName()); // if the propery fullName is a function (not a getter >> if a getter it can be called by the attribute), it can be called like this