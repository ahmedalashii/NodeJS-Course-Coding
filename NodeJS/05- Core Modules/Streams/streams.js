// Streams are used to read and write data in chunks (parts) >> meaning that the data is not read or written all at once
// Streams are used to handle large amounts of data
// Streams are used to handle data that is being streamed from a server (client-server)
// Streams is like opening a channel between two points >> the source and the destination (sender of the data, and the receiver of the data)
// Streams are used in real-time applications
// Streams are used in file uploads and downloads
// Streams can be used when moving data from one file to another


/*
    ~ Types of streams:
    ! 1- Readable streams: used to read data from a source
    ! 2- Writable streams: used to write data to a destination
    ! 3- Duplex streams: used to read and write data from and to a source and a destination
    ! 4- Transform streams: used to modify or transform the data as it is being read or written

    We will take a look at Readable, Writable, and Duplex streams ..

*/

const { createReadStream, createWriteStream } = require('fs');
// Readable stream
const readStream = createReadStream('../data/story.text', { encoding: 'utf8' });
const writeStream = createWriteStream('../data/output.text');

//! The process of reading data and writing data is called piping >> we can pipe the data from the read stream to the write stream >> it's a parallel process
// The read stream runs, take a chunk, and send it to the write stream >> the write stream runs, take the chunk, and write it to the output file.. and so on
// The read stream will read the data in chunks >> and the write stream will write the data in chunks ..

readStream.pipe(writeStream); // this is the way to pipe the data from the read stream to the write stream >> it's like a pipline (channel) between the read stream and the write stream

