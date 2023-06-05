const { opendir, opendirSync } = require('fs'); // This function is used to open a directory for reading.
// opendir is an asynchronous function, so it doesn't block the code execution.

opendir('./', async (error, dir) => { // the callback is also an asynchronous function, so it has to be preceded by the keyword async. and the await keyword is used to wait for the result of the asynchronous function.
    if (error) {
        console.log(error);
        return;
    } else {
        for await (const dirent of dir) { // for await is used to iterate over the directory.
            console.log(dirent.name);
        }
    }
}); // 2 Parameters: The path of the directory to be opened, and the callback function.