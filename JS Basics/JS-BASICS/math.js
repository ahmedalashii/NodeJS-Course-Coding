/*
    ! 1- Arithmetic Operators:
    * + - * / %
    ! 2- Math Functions
    * Math.abs() >> absolute value of a number >> Math.abs(-10) = 10
    * Math.ceil() >> rounds a number up to the nearest integer >> Math.ceil(4.2) = 5
    * Math.floor() >> rounds a number down to the nearest integer >> Math.floor(4.2) = 4
    * Math.round() >> rounds a number to the nearest integer >> Math.round(4.2) = 4
    * Math.max() >> returns the number with the highest value
    * Math.min() >> returns the number with the lowest value
    * Math.pow() >> returns the value of a number to a specified power 
    * Math.sqrt() >> returns the square root of a number
    * Math.random() >> returns a random number between 0 (inclusive), and 1 (exclusive)
    ! 3- Increment & Decrement
    * ++ --
    ! 4- Assignment Operators
    * += -= *= /= %=
    ! 5- Comparison Operators
    * == != > < >= <=
    ! 6- Logical Operators
    * && || !
    ! 7- Ternary Operator
    * condition ? true : false
    ! 8- Math constants
    * Math.PI
*/

let num1 = 10;
let num2 = 20;
console.log("num1 + num2 =", num1 + num2); // 30 >> the + operator is used to add two numbers
console.log("num1 - num2 =", num1 - num2); // -10 >> the - operator is used to subtract two numbers
console.log("num1 * num2 =", num1 * num2); // 200 >> the * operator is used to multiply two numbers
console.log("num1 / num2 =", num1 / num2); // 0.5 >> the / operator is used to divide two numbers
console.log("num1 % num2 =", num1 % num2); // 10 >> the % operator is used to get the remainder of two numbers
const result = 4 + 2 * 3; // 10 >> the * operator has a higher precedence than the + operator
console.log("result =", result);
const val = 5.2;
console.log("Math.abs(val) =", Math.abs(val)); // 5.2 >> Math.abs() returns the absolute value of a number
console.log("Math.ceil(val) =", Math.ceil(val)); // 6 >> Math.ceil() rounds a number up to the nearest integer
console.log("Math.floor(val) =", Math.floor(val)); // 5 >> Math.floor() rounds a number down to the nearest integer
console.log("Math.round(val) =", Math.round(val)); // 5 >> Math.round() rounds a number to the nearest integer