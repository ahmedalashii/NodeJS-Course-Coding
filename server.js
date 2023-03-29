const http = require('http'); // Import the http module
const server = http.createServer((req, res) => {  // Create a server object
    res.end("Hello World!");
});
const port = 5050; // Port to listen on
server.listen(port, () => { // Listen on port 5050
    console.log(`Server started on port ${port}`);
});


// http://localhost:5050/ >> This is the URL to access the server