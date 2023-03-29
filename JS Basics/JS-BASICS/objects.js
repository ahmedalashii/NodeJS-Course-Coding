/*
    ! Objects are a collection of properties and methods that are related to each other.
    * Properties are variables that are part of an object.
    * Methods are functions that are part of an object.
*/
let person = {
    name: "Ahmed Alashi",
    age: 22,
    city: "Gaza",
    gpa: 95.41,
};
person.hobbies = ["Programming", "Reading", "Writing"]; // add new property >> or person["hobbies"] = ["Programming", "Reading", "Writing"];
console.log("person =", person);
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
]; // array of objects
console.log("people =", people);
console.log("people[0].name =", people[0].name); // or people[0]["name"]