const fileSystem = require('fs'); // This is a package for reading files

const productName = 'Coffee Star';
// Async Process:
// const getProductByName = (name, cb) => {
//     const data = fileSystem.readFileSync('./data/products.json'); // This works as a sync process, but let's suppose that it's working as an async process
//     // readFileSync returns textual content, not array like normal require
//     const json = JSON.parse(data); // JSON is a built-in class in javascript
//     const product = json.find((product) => product.name === name);
//     if (product) {
//         cb(undefined, product);
//     } else {
//         cb(error, null);
//     }
// };

// Callback and run:
// getProductByName(productName, (error, product) => {
//     if (product) {
//         console.log(product);
//     } else {
//         console.log("Error is:", error.message);
//     }
// });


// The code above portays the normal (first) way of handling async operations .. 
// So now instead of using callbacks >> We're going to use the 2nd way of handling async operations "Promise"
// Promise is like Future in dart >> It's like an agreement (وعد) between the sync process and the async process.
// So that when the async process finished its work >> it (async) will return a result ..
// So we're going to edit the functions above by removing the need of using callbacks:
const getProductByName = (name) => {
    // The promise is either achieved or not >> either resolved or rejected
    return new Promise((resolve, reject) => { // this callback function inside the promise object called "executor"
        const data = fileSystem.readFileSync('./data/products.json');
        const json = JSON.parse(data);
        const product = json.find((product) => product.name === name);
        // The promise is either achieved or not >> either resolved or rejected
        if (product) {
            resolve(product);
        } else {
            const error = { message: "Product isn't found!" };
            reject(error);
        }
    });
};


const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        const data = fileSystem.readFileSync('./data/stores.json');
        const json = JSON.parse(data);
        const store = json.find((store) => store.id === id);
        if (store) {
            resolve(store);
        } else {
            const error = { message: "Store isn't found!" };
            reject(error);
        }
    });
};

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        const data = fileSystem.readFileSync('./data/cities.json');
        const json = JSON.parse(data);
        const city = json.find((city) => city.name === name);
        if (city) {
            resolve(city);
        } else {
            const error = { message: "City isn't found!" };
            reject(error);
        }
    });
};

// Now the promise when returned >> returned with two functions (then and catch) >> then is for resolve and catch is for reject
// getProductByName(productName)
//     .then(product => {
//         console.log("Product is:", product);
//         getStoreById(product.store_id)
//             .then(store => {
//                 console.log("Store is:", store);
//                 getCityByName(store.city)
//                     .then(city => {
//                         console.log("City is:", city);
//                     }).catch(error => {
//                         console.log("Error is: ", error.message);
//                     });
//             }).catch(error => {
//                 console.log("Error is: ", error.message);
//             });
//     })
//     .catch(error => {
//         console.log("Error is: ", error.message);
//     });

// ! The code above is typically the same as the callback hell >> Promise Hell
// So we're going to change the way of writing the code:

getProductByName(productName)
    .then(product => {
        console.log("Product is:", product);
        return getStoreById(product.store_id); // then of getProductByName returns a promise >> so we can return a promise from then
    })
    .then(store => {
        console.log("Store is:", store);
        return getCityByName(store.city); // then of getStoreById returns a promise
    })
    .then(city => {
        console.log("City is:", city);
    })
    .catch(error => {
        console.log("Error is: ", error.message);
    });
// Promise Chain is a chain of promises that are connected together
// * The code above is called "Promise Chain", and it's the same as the code above but it's more readable and more maintainable >> One catch catches all errors that may happen in the chain