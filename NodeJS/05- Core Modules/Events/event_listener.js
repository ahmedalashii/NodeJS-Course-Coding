// An event is a signal that something has happened in our application.
// Events are used to communicate between different parts of our application.
// The event listener is a function that will be called when an event is raised.
// The event emitter is an object that will raise an event. >> emitter in arabic is مُنْشِط or محفز
// Example: 1- When a user clicks a button, we want to show a message to the user.
// Example: 2- When a user clicks a button, we want to send an email to the user.
// Example: 3- When a user clicks a button, we want to save the user to the database.
// Example: 4- When a user clicks a button, we want to validate the user input.
// Example: 5- When a user clicks a button, we want to log a message to the console.
// Example: 6- When a server receives a request, we want to log a message to the console.
// Example: 7- When a server receives a request, we want to send a response to the client.
// ..
// Usually this signal doesn't come from our code, it comes from the outside world.
// It doesn't usually happen in the sync part of the code (callstack).

// Event differs from async function that the event is signaled when it starts (at the beginning of the process), and the async function is signaled when it ends.
// The event has to be waited for (event listener = observer), and the async function doesn't have to be waited for.

const http = require('http');
const server = http.createServer();


server.on('listening', () => { // the event listener runs asynchronously >> non-blocking
    console.log('Server is listening now ..');
}); // two parameters: 1- event name, 2- event handler (callback function)
// It's preferred to declare the event listener before the event is raised.
server.listen(3000); // Event emitter >> the event is raised here >> the event listener is above this line

// or can be written as:
// server.listen(3000, () => {
//     console.log('Server is listening now ..');
// });
