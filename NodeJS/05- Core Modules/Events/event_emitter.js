// NodeJs is event-driven. It means that everything that happens in NodeJs is an event.

// The event emitter is an object that will raise/create an event. >> emitter in arabic is مُنْشِط or محفز or مُشغّل

const { EventEmitter } = require('events'); // EventEmitter is a class
const myEmitter = new EventEmitter(); // emitter is an object

myEmitter.on('greeting', () => {
    console.log('Hello World!');
});
// It could be more than one event listener for the same event.
myEmitter.on('greeting', (name, age, university) => { // the parameter has to be passed in the emit method
    console.log(`Hello ${name}, you're ${age} years old and you study at ${university}.`);
});
// It could be more than one event emitter for the same event.
myEmitter.emit('greeting', 'Ahmed', 22, 'IUG'); // emit is a method // emit is a method that raises an event >> emit in arabic is إطلاق or إصدار or بعث
// myEmitter.emit('greeting', 'Ahmed', 23, 'IUG'); // emit is a method // emit is a method that raises an event >> emit in arabic is إطلاق or إصدار or بعث

// The event name is 'greeting' and the event handler is the anonymous function >> the event name has to be the same as the event name in the emit method

//? When to use event emitter?
// When we want to raise an event and we want to notify other parts of our application that this event has happened.
// Use case: When we want to track a specific asynchronous operation/process. >> at the beginning of the process, middle of the process, and at the end of the process.
// Use case 2 : When there's a change in the state of an object. >> Example: When a user is created, updated, or deleted.