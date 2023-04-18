const { readFile, readFileSync } = require('fs');

// readFile is an asynchronous function, so it doesn't block the code execution.
// readFileSync is a synchronous function, so it blocks the code execution.

readFile('../data/story.text', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    } else {
        console.log('async', data);
    }
});

const content = readFileSync('../data/story.text', 'utf8');
console.log('sync', content);