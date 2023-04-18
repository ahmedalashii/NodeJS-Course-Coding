const { stat } = require('fs'); // It works asynchronusly >> it is for getting information about a file or directory.

stat('./opendir.js', (error, data) => {
    if (error) {
        console.log(error);
        return;
    } else {
        console.log(data);
    }
});