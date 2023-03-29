/*
    ! Arrays are a special type of object. They are a list of values, but the values don’t have to be the same type.
    * Arrays are created with square brackets [ and ].
    * Values in an array are separated by commas.
    * Arrays can contain any type of value, including other arrays.
    * Arrays can also be empty.
    * The length property tells you how many values are in the array.
    * The values in an array are numbered, starting at zero.
    * You can access an array value by using its number in square brackets.
    * You can change an array value by accessing it and assigning a new value to it.
    * Arrays have a push method that adds a value to the end of the array.
    * Arrays have a pop method that removes the value at the end of the array.
    * Arrays have a shift method that removes the value at the start of the array.
    * Arrays have an unshift method that adds a value to the start of the array.
    * Splice method can be used to remove elements from an array. >> example: array.splice(2, 1); >> it removes the element at index 2
    * Splice method can be used to add elements to an array. >> example: array.splice(2, 0, "new element"); >> it adds the element at index 2
    * Splice method can be used to replace elements in an array. >> example: array.splice(2, 1, "new element"); >> it replaces the element at index 2
    * Arrays have a concat method that combines two arrays into a new one.
    * Arrays have a join method that creates a string from an array.
    * Arrays have a reverse method that changes the order of the elements in an array.
    * Arrays have a sort method that sorts the elements in an array.
    * Arrays have a slice method that copies a given part of an array.
    * Arrays have a indexOf method that returns the position of the first occurrence of a given value.
    * Arrays have a lastIndexOf method that returns the position of the last occurrence of a given value.
    * Arrays have a toString method that converts an array to a string.
    * Arrays have a forEach method that calls a function for each element in the array.
    * Arrays have a map method that calls a function for each element in the array and returns a new array with the results.
    * Arrays have a filter method that calls a function for each element in the array and returns a new array with the elements for which the function returned true.
    * Arrays have a reduce method that calls a function for each element in the array and returns a single value.
    *   
*/

let array = [];
array = [1, 2, 3, 4, 5];
console.log("array =", array); // [ 1, 2, 3, 4, 5 ]
array.push(6);
console.log("array =", array); // [ 1, 2, 3, 4, 5, 6 ]
array.pop();
console.log("array =", array); // [ 1, 2, 3, 4, 5 ]
array.unshift(0);
console.log("array =", array); // [ 0, 1, 2, 3, 4, 5 ]
array.shift(); // removes the first element
console.log("array =", array); // [ 1, 2, 3, 4, 5 ]
array.splice(2, 1); // removes the element at index 2
console.log("array =", array); // [ 1, 2, 4, 5 ]
array.splice(2, 0, "new element"); // adds the element at index 2
console.log("array =", array); // [ 1, 2, 'new element', 4, 5 ]
// the last item :
console.log("array[array.length - 1] =", array[array.length - 1]); // 5