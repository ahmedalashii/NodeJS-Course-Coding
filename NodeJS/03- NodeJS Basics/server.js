const http = require('http'); // Import the http module
// http package is a package for creating a server and listening to requests and responses
// http is a core module, so no need to install it using npm

const someError = false; // Create a variable to simulate an error >> if true then the server will not start
if (someError) {
    process.exit(1); // Exit the process with an error code >> either 0 or any number other than 0 >> 0 means no error, any other number means an error
}
const server = http.createServer((request, response) => {  // Create a server object
    // request is an object that contains information about the request
    // How to detect the URL of the request (Endpoint)?
    switch (request.url) { // request.url contains the URL of the request
        case '/': // If the URL is '/'
            response.write(
                `<html>
                    <head>
                        <title>Home Page</title>
                    </head>
                    <body>
                        <h1>Home Page</h1>
                    </body>
                </html>`
            ); // Write a response
            response.end(); // End the response
            // or response.end('<html><head><title>Home Page</title></head><body><h1>Home Page</h1></body></html>') directly;
            break;
        case '/about': // If the URL is '/about'
            response.write('About Page'); // Write a response
            response.end(); // End the response
            break;
        default: // If the URL is not '/'
            response.write('404 Page Not Found'); // Write a response
            response.end(); // End the response
            break;
    }
});
const port = 5050; // Port to listen on
server.listen(port, () => { // Listen on port 5050
    console.log(`Server started on port ${port}`);
});

// http://localhost:5050/ >> This is the URL to access the server