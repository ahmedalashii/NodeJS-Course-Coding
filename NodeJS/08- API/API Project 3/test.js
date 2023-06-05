// const express = require('express');

// const app = express();

// app.use((request, response, next) => {
//     console.log('Middleware 1');
// });

// app.use((request, response, next) => {
//     setTimeout(() => {
//         console.log('Middleware 2');
//     }
//         , 500);
// });

// app.use((request, response, next) => {
//     console.log('Middleware 3');
// });


// // Output:
// // Middleware 1
// // Because it's the first middleware and there's no next() function to pass the request to the next middleware


// // get request to localhost:3000
// app.get('/', (request, response, next) => {
//     response.send('<h1>Hello from Express!</h1>');
// });
// app.listen(3000, () => {
//     console.log('Server is running...');
// });



const printText = (name) => {
    console.log('My Text is ' + name);
}

process.nextTick(printText, 'Ahmed');
printText('Mohamed');
setTimeout(() => {
    printText('Ali');
});
printText('Mahmoud');
