// ! The 3rd way of handling async operations "Async/Await":
// ~ Async/await pattern allows us to write asynchronous code that looks synchronous. 
// ~ It preserves the code structure of synchronous code and eliminates the need for callbacks.

// ? How to use Async/Await?
// * Async/Await is a syntactic sugar over promises.
// * Async/Await is built on top of promises.
// * Async/Await is a non-blocking pattern.
// ~ Here's how to use Async/Await:
// * First, we need to define an async function.
// * Then, we need to call the async function.
// * Inside the async function, we need to use the await keyword to wait for the promise to resolve.
// const asyncFunction = async () => {
//     const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population'); // fetch is considerd as an async process (I/O) operation
// };
// asyncFunction();




// Async Process:
const getUSData = async () => {
    // ! All code inside the async function is considered as a synchronous code >> has to be blocking code.
    // Any async process in the async function has to be preceded by the await keyword. >> to make an async process blocking. It means = "await for response"
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population'); // fetch is considerd as an async process (I/O) operation
    if (response.status !== 200) {
        const error = { message: "Unable to fetch data" };
        // return error; // if error returned using return, it will be handled by the .then() method.
        throw new Error('Unable to fetch data'); // if error thrown using throw, it will be handled by the .catch() method. >> throw is used to throw an error.
        // throw is the correct way of returning an error in an async function.
    }
    const json = await response.json();
    // this json has to be awaited for the response to be resolved. >> because it depends on the response.
    // The method returns a promise, so you have to wait for the JSON: await response.json()
    return json;
};
// Calling the async function doesn't need to be preceded by the await keyword. If it's inside another async function, it has to be preceded by the await keyword.
// const data = getUSData(); // ! we can't do this because it's an async function. It returns a promise.
// const data = await getUSData(); // ! we can't do this until we call the async function inside another async function.
// console.log(data); // Output: Promise { <pending> }

// Calling the async function as a promise (using .then() and .catch()): // any return inside the async function will be considered as a promise.
getUSData().then(data => console.log("Data is:", data)).catch(error => console.log("Error is:", error));
// So now we have two ways of handling an async/await function >> handling returned promise >> or handling the data inside the async function and don't return anything.


// This is the 3rd way of handling async functions and just to confirm, it doesn't yet mix with the Promise way .. When returned promise it still async/await way.
// To mix >> see async_await_promise.js file.