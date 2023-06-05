const express = require('express');
const app = express();
const routes = require('./routes');
const { middlewares } = require('./middlewares');
const createHttpError = require('http-errors');
const { returnJson } = require('./modules/json_response');

process.on('unhandledRejection', (reason) => { // To catch unhandled promise rejections
    console.log('Unhandled Rejection at:', reason.stack || reason);
    process.exit(1); // To exit with a 'failure' code
});
global.returnJson = returnJson; // To make the returnJson function available globally

/*
    * The request life cycle:
    1- Request comes in
    2- We need to validate the request
    3- If there's a problem, we need to stop the request and send back a response
    4- If everything is OK, we need to pass the request along to the route handler
    5- Route handler might do some database stuff
    6- We need to respond with some JSON

    * The request goes through a series of layers:
    1- Request comes in
    2- It first goes to the first middleware
    3- If its api endpoint found, Then it goes to the router handler
    4- If its api endpoint not found, Then it goes to the not found error handler middleware which in turn will be passed and handled by the global error handler middleware
*/


/*
*  Middlewares
*/
middlewares(app);
/*
*  Routes
*/
routes(app);


/*
* Not Found Error Handler 
*/

app.use((request, response, next) => {
    const error = createHttpError(404, 'Endpoint Not Found');
    return next(error); // Which in turn will be handled by the global error handler middleware
});


/*
* Global Error Handler
*/
//^ This is a global error handler middleware
app.use((error, request, response, next) => {
    return returnJson(response, error.statusCode || 500, false, error.message, null);
});



module.exports = app;