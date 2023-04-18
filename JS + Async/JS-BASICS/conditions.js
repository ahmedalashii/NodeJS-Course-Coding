/*
    ! 1. if
    ! 2. if else
    ! 3. if else if
    ! 4. switch
    ! 5. ternary operator
    ! 6. logical operator
    ! 7. short circuit operator
    ! 8. nullish coalescing operator
    ! 9. optional chaining operator
    ! 10. for loop
    ! 11. while loop
    ! 12. do while loop
    ! 13. for in loop
    ! 14. for of loop
    ! 15. break
    ! 16. continue
    ! 17. try catch
*/

// 1. if
let a = 10;
if (a > 5) {
    console.log("a is greater than 5");
}

// 2. if else
let b = 10;
if (b > 5) {
    console.log("b is greater than 5");
} else {
    console.log("b is less than or equal 5");
}

// 3. if else if
let c = 10;
if (c > 5) {
    console.log("c is greater than 5");
} else if (c < 5) {
    console.log("c is less than 5");
} else {
    console.log("c is equal 5");
}

// 4. switch
let d = 10;
switch (d) {
    case 5:
        console.log("d is equal 5");
        break;
    case 10:
        console.log("d is equal 10");
        break;
    default:
        console.log("d is not equal 5 or 10");
}

// 5. ternary operator >> condition ? true : false
let e = 10;
e > 5 ? console.log("e is greater than 5") : console.log("e is less than or equal 5");

// 6. logical operator >> && || !
let f = 10;
if (f > 5 && f < 15) {
    console.log("f is greater than 5 and less than 15");
}
if (f > 5 || f < 15) {
    console.log("f is greater than 5 or less than 15");
}
if (!(f > 5)) {
    console.log("f is not greater than 5");
}

// 7. short circuit operator >> && || >> it means if the first condition is true then it will not check the second condition
let g = 10;
let h = 20;
let i = g && h; // i = 20
let j = g || h; // j = 10
console.log("i =", i);
console.log("j =", j);

// 8. nullish coalescing operator >> ?? >> it means if the first condition is null or undefined then it will check the second condition
let k = null;
let l = 20;
let m = k ?? l; // m = 20
console.log("m =", m);

// 9. optional chaining operator >> ?. >> it allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid
let n = null;
let o = n?.name; // o = undefined
console.log("o =", o);

// 10. for loop
for (let p = 0; p < 10; p++) {
    console.log("p =", p);
}

// 11. while loop
let q = 0;
while (q < 10) {
    console.log("q =", q);
    q++;
}

// 12. do while loop
let r = 0;
do {
    console.log("r =", r);
    r++;
} while (r < 10);

// 13. for in loop
let person = {
    name: "Ahmed Alashi",
    age: 22,
    city: "Gaza",
    gpa: 95.41,
};
for (let property in person) { // in >> to get the properties of the object
    console.log(property, ":", person[property]);
}

// 14. for of loop
let people = [
    {
        name: "Ahmed Alashi",
        age: 22,
        city: "Gaza",
        gpa: 95.41,
    },
    {
        name: "Jane",
        age: 30,
        city: "Paris"
    },
    {
        name: "Jim",
        age: 35,
        city: "New York",
    }
];
for (let person of people) { // of >> to get the values of the array
    console.log(person);
}

// 15. break
let s = 0;
while (s < 10) {
    console.log("s =", s);
    if (s === 5) {
        break;
    }
    s++;
}

// Datatype comparison
// 1. == >> compare the value only
// 2. === >> compare the value and the datatype
// 3. != >> compare the value only
// 4. !== >> compare the value and the datatype

const num = 10;
if (num === "10") {
    console.log("num is equal 10");
}
if (num == "10") {
    console.log("num is equal 10");
}
if (num !== "10") {
    console.log("num is not equal 10");
}