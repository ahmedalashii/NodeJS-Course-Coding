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

const promisifiedReadFile = promisify(readFile);

promisifiedReadFile('./data/products.json', 'utf8').then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
