const { open, readFile } = require('fs'); // This function is used to open a file for reading. If the file doesn't exist, it will throw an error.

open('../data/story.text', 'r', (error, fd) => { // fd means file descriptor
    if (error) {
        console.log(error);
        return;
    }

    readFile(fd, 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(data);
    });
});

// open method tries to open the file for reading, and if it is successful, it will call the callback function with the file descriptor as the second parameter. 