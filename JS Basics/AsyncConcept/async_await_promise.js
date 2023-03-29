const fileSystem = require('fs'); // This is a package for reading files


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

const productName = 'Coffee Star';
// getProductByName(productName)
//     .then(product => {
//         console.log("Product is:", product);
//         return getStoreById(product.store_id);
//     }).then(store => {
//         console.log("Store is:", store);
//         return getCityByName(store.city);
//     }).then(city => {
//         console.log("City is:", city);
//     }).catch(error => {
//         console.log("Error is: ", error.message);
//     });

//! The code above using the Promise chain way of handling promises, Now we will use the async/await way:

const getCityByProductName = async (productName) => {
    try {
        const product = await getProductByName(productName); // wheen await is preceded by a promise >> it will wait until the promise is resolved and get the result of then function and assign it to the variable
        console.log("Product is:", product);
        const store = await getStoreById(product.store_id);
        console.log("Store is:", store);
        const city = await getCityByName(store.city);
        console.log("City is:", city);
        // retrun city; // or return await getCityByName(store.city); >> this will return a promise >> so it will be handled by then and catch functions ..
    } catch (error) {
        console.log("Error is: ", error.message);
    }
    // we used try/catch to handle the error in case of rejection of the promise
};

getCityByProductName(productName);

// This is the way of handling promises by mixing both the async/await and promise.