/*
    ! String Methods
    * string.toUpperCase()
    * string.toLowerCase()
    * string.indexOf()
    * string.lastIndexOf()
    * string.slice()
    * string.substring()
    * string.substr()
    ! String Properties
    * string.length
    ! String Concatenation
    * string.concat()
    * string + string
    * string += string
    * string.concat(string, string, string)
    * `${string} ${string} ${string}`
    ! String Comparison
    * string1 == string2
    * string1 != string2
    * string1 > string2
    * string1 < string2
    * string1 >= string2
    * string1 <= string2
    ! String Search
    * string.search()
    * string.match()
    * string.includes()
    * string.startsWith()
    ! String '' vs "" vs ``
    * '' >> single quotes
    * "" >> double quotes
    * `` >> backticks
*/

const firstName = "Ahmed";
const middleName = 'Hesham';
const firstNameMiddleName = firstName + " " + middleName; // "Ahmed Hesham"
const lastName = `Alashi`;
// const fullName = firstNameMiddleName.concat(" ", lastName); // "Ahmed Hesham Alashi"
//~ or: const fullName = firstName + " " + middleName + " " + lastName;
const fullName = `${firstName} ${middleName} ${lastName}`; // backticks >> `` >> it allows us to use variables inside a string (String interpolation)
//! ${} >> it's called a template literal >> it has to be inside backticks >> `` >> it has to include curly bracket {}
console.log("fullName =", fullName);
console.log("fullName.length =", fullName.length); // 15

// indexing >> accessing a character in a string
console.log("fullName[0] =", fullName[0]); // A

const story = "Once upon a time..\nthere was a brave princess who...";
console.log(story);
// using backticks >> it allows us to write multiline strings
const story2 = `Once upon a time..
there was a brave princess who...`;
console.log(story2);