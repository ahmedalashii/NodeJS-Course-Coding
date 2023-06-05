const { readFile } = require('fs');
const { promisify } = require('util');

// readFile('./data/products.json', 'utf8', (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     } else {
//         const json = JSON.parse(data);
//         const product = json.find(product => product.name === 'Coffee Star');
//         console.log(product);
//     }
// });

/*

    pure synchronous functions are not promisifiable in order to avoid blockage
    For a method to be promisifiable it needs to be already asynchronous, i.e. return immediately, and also use callbacks upon finish.
    const promisifiedReadFile = promisify(readFileSync);
    ! This is wrong because readFileSync is synchronous and doesn't use callbacks
*/

const promisifiedReadFile = promisify(readFile);

promisifiedReadFile('./data/products.json', 'utf8').then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
