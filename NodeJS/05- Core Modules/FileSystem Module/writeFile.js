const { open, writeFile } = require('fs');
// writeFile('../data/story.text', 'This is a story about NodeJS', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File is created');
// });

// If we want to overwrite an existing file >> we can use open
// open('../data/story.text', 'w', (err, fd) => { // the 2nd parameter is the open mode (flag) >> w: write, a: append, r: read
//     if (err) {
//         console.log(err);
//         return;
//     }
//     writeFile(fd, 'This is a story about NodeJS', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('File is overwritten');
//     });
// });

open('../data/story.text', 'a+', (error, fd) => { // a: append >> will append the new content to the existing file
    if (error) {
        console.log(error);
        return;
    }
    writeFile(fd, 'This is a story about NodeJS', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File is appended');
    });
});