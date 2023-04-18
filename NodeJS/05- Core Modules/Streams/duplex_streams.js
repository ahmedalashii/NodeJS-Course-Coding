// Realtime communication between client and server >> we can use streams to handle the data that is being streamed from the server to the client
// Realtime is not like a request and response, it is a constant stream of data
// Realtime means that the data is being sent to the client as it is being generated on the server >> at the same time
// Realtime uses streams to handle the data that is being streamed from the server to the client, or called socket 
// Socket is the concept of realtime communication between client and server >> it's a constant stream of data >> one connection between the client and the server
// Duplex streams are used to handle realtime communication between client and server >> it's a constant stream of data >> one connection between the client and the server

const { createServer } = require('http');

const server = createServer();

server.listen(3000); // url: http://localhost:3000/

server.on('connection', (socket) => {
    console.log(socket); // socket is the duplex stream
});

