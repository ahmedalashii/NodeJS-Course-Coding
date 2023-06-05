const fs = require('fs');
const { promisify } = require('util');
const getProductByName = (productName, callback) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            callback(error, null);
        } else {
            const json = JSON.parse(data);
            const product = json.find(product => product.name === productName);
            callback(undefined, product);
        }
    });
};

// Promisify is converting a function to a promise function, but this function has to receive a callback and this callback function has (error, data) as parameters >> error for the reject and data for the resolve

const findProduct = promisify(getProductByName); // promisify getProductByName function >> it can be used with any function that has a callback function as a parameter
// Make findProduct function as a promise function 

// here we don't want to pass the callback function >> pass all the arguments except the callback function
findProduct('Coffee Star')
    .then(product => {
        console.log(product);
    })
    .catch(error => {
        console.log(error);
    });
