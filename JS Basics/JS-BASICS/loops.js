/*
    ! Loops in JavaScript are used to iterate over a block of code a number of times.
    ! Loops are handy, if you want to run the same code over and over again, each time with a different value.
    ! There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.
    ! JavaScript supports different kinds of loops:
    * 1- for - loops through a block of code a number of times
    * 2- for/in - loops through the properties of an object
    * 3- for/of - loops through the values of an iterable object
    * 4- while - loops through a block of code while a specified condition is true
    * 5- do/while - also loops through a block of code while a specified condition is true
    * 6- break - breaks out of the loop and continues executing the code after the loop (if any)
    * 7- continue - breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop
    * 8- for await of - loops through an async iterable object
    * 9- for await in - loops through the properties of an async iterable object
    * 10- for each - loops through the values of an iterable object
    * 11- for each in - loops through the properties of an object
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. for loop
const length = array.length;
for (let i = 0; i < length; i++) {
    console.log(array[i]);
}

// 2. for/in loop
for (const index in array) {
    console.log("index: ", index);
    console.log("value: ", array[index]);
}

// 3. for/of loop
for (const value of array) {
    console.log(value);
}

// 4. while loop
let i = 0;
while (i < length) {
    console.log(array[i]);
    i++;
}

// 5. do while loop
let j = 0;
do {
    console.log(array[j]);
    j++;
} while (j < length);

array.forEach((value, index) => {
    console.log("index: ", index);
    console.log("value: ", value);
});

array.forEach((value) => {
    console.log(value);
});