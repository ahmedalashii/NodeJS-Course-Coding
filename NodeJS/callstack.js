// Call Stack is a data structure that uses the Last In First Out (LIFO) principle to temporarily store and manage function invocation (call).
// Call Stack is a LIFO data structure that is used for function calls that record where we are in the program.
// JavaScript is a single-threaded programming language, which means it can do one thing at a time, and it has one Call Stack.
// Single Threaded means that only one thing can happen at a time.
// Single Thread = One/Single Call Stack = Synchronous = Blocking = Single Call/Task at a time
const cee = () => {
    console.log("output from cee");
};

const boo = () => {
    console.log("output from boo");
    cee();
};

const foo = () => {
    console.log("output from foo");
    boo();
};

console.log("output is running");
cee();
foo();

// https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o
/*

    In Node.js, the V8 engine is responsible for executing JavaScript code. The call stack is a data structure that tracks the execution context of a running JavaScript program. It is used to keep track of function calls, and it is used to manage the order in which functions are called.
    When a function is called in Node.js, the V8 engine creates a new stack frame for that function and pushes it onto the call stack. The stack frame contains information about the function, including its arguments, local variables, and the line of code where the function was called from.
    As the function executes, it may call other functions, which in turn push new stack frames onto the call stack. Each function call creates a new stack frame, which is added to the top of the stack.
    When a function completes, its stack frame is popped off the call stack, and control returns to the function that called it. The call stack is then updated to reflect the new state of the program.
    In this way, the call stack keeps track of the execution context of a JavaScript program in Node.js, and it is a crucial component of the V8 engine.
    When the V8 engine encounters an error, it prints a stack trace. A stack trace is basically the state of the Call Stack.

*/

// You have to see the Microsoft whiteboard to understand the call stack in V8 engine.