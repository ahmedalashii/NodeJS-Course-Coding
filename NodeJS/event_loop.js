// Node.js is a single-threaded event-driven platform that is capable of running non-blocking, asynchronous programming.
// Event loop is a mechanism that allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — It is done by assigning operations to the operating system whenever and wherever possible.
// Libuv (Async execution =>> Async handler >> Multi-thread) >> It's a cross-platform asynchronous I/O library.
// Libuv has a component called the event loop, which is the central piece of the library.
// https://www.geeksforgeeks.org/node-js-event-loop/
const { pbkdf2 } = require('crypto');
const { createServer } = require('http');
/*
    The curly braces {} in the code indicate object destructuring syntax.
    It tells JavaScript to extract the pbkdf2 function from the crypto object and assign it to the variable pbkdf2.
*/
const start = Date.now();
const hash = () => {
    pbkdf2('password', '##', 10000, 1000, 'sha256', () => {
        console.log('Hash:', Date.now() - start);
    });
    // pbkdf2 is a function that takes 6 arguments. >> It's an asynchronous function.
    // 1st argument is the password.
    // 2nd argument is the salt. >> is a random string that is used to make the hash more secure. >> ## is a random string.
    // 3rd argument is the number of iterations. >> is the number of times the hash function is executed. >> 10000 is a good number.
    // 4th argument is the key length. >> is the length of the generated hash in bytes. >> 1000 is a good number.
    // 5th argument is the digest algorithm. >> is the algorithm used to generate the hash. >> sha256 is a good algorithm.
    // 6th argument is the callback function. >> is the function that is executed when the hash is generated.
};
const listen = () => {
    createServer().listen(3000, () => {
        console.log("Server is listening on port 3000", Date.now() - start);
    });
};
hash();
hash();
hash();
hash();
// You have to see the Microsoft whiteboard to understand the event loop.
listen();

/*
    Output:
    Hash: 347
    Hash: 351
    Hash: 354
    Hash: 359

    Explanation: In the above example, the 1st hash() is pushed to the call stack, then pushed to the
    and the task is popped from the stack when it passes it to a thread in libuv. Next, the 2nd hash() is pushed to the queue and the task is sent to the Operating system.
    This task is then popped from the stack when it passes it to a thread in libuv. Next, the 3rd hash() is pushed to the call stack, and the task is popped from the stack when it passes it to a thread in libuv.

    When the 1st hash() function finished its execution, the callback is sent to the event queue.
    The event loop on finding the call stack empty takes the task at the top of the event queue and sends it to the call stack.
    The callback function for the hash() function runs the instruction and “Hash: 347" is logged on the console and the task is popped from the stack.
    and so on to other hash() functions
*/

// So, we have two places where we can run our code:
// 1. Call Stack
// 2. Event Loop
// 3. Operating System (OS Delegation)

// Loop tick =>> The event loop is a loop that runs continuously and checks the call stack and event queue.
// If the call stack is empty, it takes the first task from the event queue and pushes it to the call stack.
// This process is called a loop tick.

/*
    Very simple and short way of Event Loop tick is:
    It is used by node internal mechanism where when set of requests on a queue is processed then tick is initiated which represents the completion of a task ..
    It represent an iteration of event loop.
*/


/*
                        ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
                       THE EVENT LOOP (Loop tick)
                        └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
                       ┌───────────────────────────┐
                    ┌─>│           timers          │    1st Priortity to be checked >> these are the callbacks that are scheduled to be executed after a certain delay. >> setTimeout() and setInterval()
                    │  └─────────────┬─────────────┘
                    │  ┌─────────────┴─────────────┐
                    │  │     pending callbacks     │    2nd Priortity to be checked >> these are the callbacks that are deferred/postponed to the next loop iteration. >> they are still/waiting/processing/in-thread
                    │  └─────────────┬─────────────┘
                    │  ┌─────────────┴─────────────┐
                    │  │       idle, prepare       │    >> these are only used internally.
                    │  └─────────────┬─────────────┘      ┌───────────────┐
                    │  ┌─────────────┴─────────────┐      │   incoming:   │
                    │  │           poll            │<─────┤  connections, │  3rd Priortity to be checked >> these are the callbacks that are ready to be executed. >> THEY ARE Done/Ready/Finished/Processed >> they are waiting for the event loop to pick them up to pass them to message queue and then to call stack.
                    │  └─────────────┬─────────────┘      │   data, etc.  │
                    │  ┌─────────────┴─────────────┐      └───────────────┘
                    │  │           check           │    4th Priortity to be checked >> these are setImmediate() callbacks. >> setImmediate() is a special function that runs a callback at the end of the current loop or on the next loop iteration, after I/O events. process.nextTick() is similar, but it runs the callback before any I/O events (the highest priority).
                    │  └─────────────┬─────────────┘
                    │  ┌─────────────┴─────────────┐
                    └──┤      close callbacks      │
                       └───────────────────────────┘
        Note: the priorities of the event loop is on the level of the event loop, not on the level of whole node.js application.

        process.nextTick() vs setImmediate():
        process.nextTick() fires immediately on the same phase
        setImmediate() fires on the following iteration or 'tick' of the event loop
*/

/*
    The event loop (in Node.js) is an execution model where aspects of a script are executed in a cyclical manner according to a defined schedule.

    It [event loop] is made up of a number of phases (as illustrated above). Each phase contains (1) a call stack, and (2) a callback queue.
    The call stack is where code is executed (on a LIFO basis), while the callback queue is where code is scheduled (on a FIFO basis)
    for later placement in the call stack for execution.

*/
// The first thing that happens when the event loop starts is that it checks the call stack to see if there are any functions waiting to be executed.
// If there are, it executes them. If not, it checks the event queue to see if there are any functions waiting to be executed.