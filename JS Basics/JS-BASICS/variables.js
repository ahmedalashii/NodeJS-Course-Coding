//! There are many ways to declare variables in JavaScript:

//~ The most common way is to use the var keyword
var firstName = "Ahmed";

//~ You can also declare variables without using the var keyword
middleName = "Hesham";

//~ You can also declare variables using the let keyword
let lastName = "Alashi";

//~ You can also declare variables using the const keyword
const age = 22; // You cannot reassign a value to a const variable
//!The difference between let and const is that let can be reassigned and const cannot be reassigned
// age = 23; // TypeError: Assignment to constant variable.
//~ You can also declare variables using the var keyword without assigning a value
var address;
console.log("Address is:", address); // undefined because it is not assigned a value >> undefined = undeclared
// The declaration of a variable is by giving it a value .. >> default value is undefined (undeclared) if not assigned a value
//~ You can also declare variables using the let keyword without assigning a value
let streetName;

// The difference between var and let is that var is function scoped and let is block scoped
// block scoped variables are only accessible within the block they are declared in and not outside of the block, example:
// {
//     let myVariable = 10;
// }
console.log("Middle name is:", middleName); // ReferenceError: myVariable is not defined
middleName = "Rami";
console.log("Middle name is:", middleName); // ReferenceError: myVariable is not defined