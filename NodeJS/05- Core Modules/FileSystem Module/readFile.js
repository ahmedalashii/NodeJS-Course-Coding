const { readFile, readFileSync } = require('fs');

// readFile is an asynchronous function, so it doesn't block the code execution.
// readFileSync is a synchronous function, so it blocks the code execution.

readFile('../data/story.text', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return
    } else {
        console.log('async', data);
    }
});


const content = readFileSync('../data/story.text', 'utf8');
console.log('sync', content);


// When to use readFile and when to use readFileSync?
// If you want to read a file and do something with the data, use readFile.
// If you want to read a file and return the data, use readFileSync.
// If you want to read a file and do something with the data, but you don't want to block the code execution, use readFile.
// If you want to read a file and return the data, and you don't care about blocking the code execution, use readFileSync.
// If you want to read a small file that it's okay to block the code execution, use readFileSync.
// If you want to read a large file that it's not okay to block the code execution, use readFile.