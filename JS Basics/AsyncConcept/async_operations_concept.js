/*
    ! Asynchronous is non-blocking >> it doesn't wait for the function to finish executing before moving on to the next line of code
    ! Asynchronous functions always return a promise
    ! Promises are objects that represent the eventual completion or failure of an asynchronous operation
    ! Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. >> Tasks can run simultaneously
    ! Promises are a way to handle asynchronous operations in JavaScript.
    ! Synchronous is blocking >> it waits for the function to finish executing before moving on to the next line of code.
    ! Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.
    ~ Callback function >> is a function that is passed as an argument to another function and is executed after some operation has been completed
    ~ It's a function that's executed after another function execution.

    ? What is asynchronous JavaScript?
    ~ Asynchronous JavaScript is a way to write non-blocking code. It allows long-running actions to run in the background without stopping the code execution.
    ~ When you use asynchronous JavaScript, you can send a request to a server and continue to execute code while waiting for the response.
    ? What is a callback function?
    ~ A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
    ~ Callback functions are used to give a function the ability to call another function.
    ? What is a synchronous function?
    ~ A synchronous function is a function that is executed line by line, one after the other.
    ~ Synchronous functions are blocking, which means that the next line of code won't be executed until the current line of code has finished executing.
    ? What is an asynchronous function?
    ~ An asynchronous function is a function that is executed in a non-blocking way, so the execution of one task isn't dependent on another.
    ~ Asynchronous functions are non-blocking, which means that the next line of code will be executed even if the current line of code hasn't finished executing.

    & JavaScript is a single-threaded language, which means that only one thing can happen at a time.
    ? Multithreading >> is a computer programming concept in which two or more parts of a program execute concurrently.
    ? Single-threading >> is a computer programming model in which the execution of multiple processes or threads occurs in a sequential manner.
    & JavaScript is a synchronous language, which means that code is executed line by line, one after the other.
    & JavaScript is a non-blocking language, which means that asynchronous actions don't block the execution of code.
    & JavaScript is an asynchronous and concurrent programming language that offers a lot of flexibility. It's single-threaded like sync, but also non-blocking like async. 
    & Although it's synchronous by nature, JavaScript benefits from asynchronous code.
    ~ It has two executions: synchronous and asynchronous. >> Synchronous is blocking, and asynchronous is non-blocking.
    * Synchronous >> code is executed line by line, one after the other.
    * Asynchronous >> code is executed in a non-blocking way, so the execution of one task isn't dependent on another. >> Tasks can run simultaneously

    ? When the operation considered as a non-blocking operation (asynchronous)?
    ~ When the operation takes a long time to complete, it's considered as a non-blocking operation (asynchronous).
    ~ Therefore, We have 5 asynchronous operations in JavaScript:
    * 1. Timer >> setTimeout, setInterval
    * 2. Long-time process >> Fetching data from a server (API calls) , etc..
    * 3. I/O Operations >> Reading/writing files, database, API calls (Fetching data from a server)
    * 4. Tell the function explicitly to run asynchronously >> Callbacks, Promises, Async/Await (async)
    * 5. Event Listeners >> Clicking a button, scrolling, etc.. >> this is special to front-end development
*/

console.log(1);
console.log(2);
const callbackFunction = () => {
    console.log('Callback function fired');
};
setTimeout(callbackFunction, 2000); // setTimeout is a built-in function that takes a callback function and a time in milliseconds
// It's an asynchronous function that waits for the specified time before executing the callback function
// It doesn't block the execution of the code >> it's non-blocking
console.log(3);
console.log(4);
