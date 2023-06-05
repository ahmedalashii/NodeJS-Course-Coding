const products = require('./data/products.json'); // require changes the json objects to an array of objects
const stores = require('./data/stores.json');
const cities = require('./data/cities.json');
// Async function >> Search for a product by name:
// const getProductByName = (name) => {
//     setTimeout(() => { // setTimeout is just for the emulation of an async operation
//         const product = products.find((product) => product.name === name); // find is like firstWhere in dart and returns the first object that matches the condition
//         return product;
//     }, 1000);
// };


// const product = getProductByName('Coffee Star');
// console.log(product);

// The line above will print undefined because the function is async and the console.log is executed before the function is finished
// >> so we need to use callbacks to solve this problem .. Another problem is that the javascript engine is single threaded so it can only execute one line of code at a time
// So javascript doesn't see the async functions as async and executes them as if they were sync functions

/*
    ! So,There're three ways of handling async functions in javascript:
    * 1- Callbacks >> call me back when you're done :)
    * 2- Promises
    * 3- Async/Await
*/

// 1- Callbacks:
// ~ A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Async function to be handled by a callback function >> Search for a product by name:
// const getProductByName = (name, cb) => { // this cb is an argument
//     setTimeout(() => {
//         const product = products.find((product) => product.name === name);
//         cb(product);
//     }, 500);
// };
// Callback function or handler function:
// const callbackFunction = (product) => {
//     console.log("Product:", product);
//     console.log("Product Price:", product.price);
// };
// Calling the async function and passing the callback function as an argument:
// getProductByName("Coffee Star", callbackFunction); // callbackFunction is passed as an argument (parameter)
// or : getProductByName("Coffee Star", (product) => {console.log(product);}); // anonymous function



// So Let's take other examples of callbacks:

// Async process >> Example 1:
const getProductByName = (name, cb) => {
    setTimeout(() => {
        const product = products.find((product) => product.name === name);
        cb(product);
    }, 500);
};

// Callback function:
const handleGetProductByName = (product) => {
    console.log("Product:", product);
    console.log("Product Price:", product.price);
};

getProductByName("Coffee Star", handleGetProductByName);

// Async process >> Example 2:
const getStoreById = (id, cb) => {
    setTimeout(() => {
        const store = stores.find((store) => store.id === id);
        cb(store);
    }, 500);
};

// Callback function:
const handleGetStoreById = (store) => {
    console.log("Store:", store);
    console.log("Store Name:", store.name);
};

getStoreById(1, handleGetStoreById);


// Async process >> Example 3:
const getCityByName = (name, cb) => {
    setTimeout(() => {
        const city = cities.find((city) => city.name === name)
        cb(city);
    }, 1500);
};

// Callback function:
const handleGetCityByName = (city) => {
    console.log("City:", city);
    console.log("City Name:", city.name);
};

getCityByName("Gaza", handleGetCityByName);