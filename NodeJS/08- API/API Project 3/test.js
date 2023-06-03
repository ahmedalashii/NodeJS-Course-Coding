const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('Middleware 1');
});

app.use((request, response, next) => {
    setTimeout(() => {
        console.log('Middleware 2');
    }
        , 500);
});

app.use((request, response, next) => {
    console.log('Middleware 3');
});


// get request to localhost:3000
app.get('/', (request, response, next) => {
    response.send('<h1>Hello from Express!</h1>');
});
app.listen(3000, () => {
    console.log('Server is running...');
});



// Output:
// Middleware 1
// Middleware 3
// Middleware 2
