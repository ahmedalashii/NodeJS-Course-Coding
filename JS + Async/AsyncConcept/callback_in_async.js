const fs = require('fs');

const getProductByName = async (productName, cb) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            cb(error, null);
        } else {
            const json = JSON.parse(data);
            const product = json.find(product => product.name === productName);
            cb(undefined, product);
        }
    });
};

const callBack = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
};

const productName = "Coffee Star";
getProductByName(productName, callBack); // if we don't need to handle it using promise (then and catch), we can use the callback function