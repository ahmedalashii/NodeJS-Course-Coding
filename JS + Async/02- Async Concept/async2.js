const products = require('./data/products.json'); // require changes the json objects to an array of objects
const stores = require('./data/stores.json');
const cities = require('./data/cities.json');

// Async processes:
const getProductByName = (name, cb) => {
    setTimeout(() => {
        const product = products.find(product => product.name === name);
        if (product) {
            cb(undefined, product);
        } else {
            const error = { message: "Product not found" };
            cb(error, null);
        }
    }, 500);
};
const getStoreById = (id, cb) => {
    setTimeout(() => {
        const store = stores.find((store) => store.id === id);
        if (store) {
            cb(undefined, store);
        } else {
            const error = { message: "Store not found" };
            cb(error, null);
        }
    }, 500);
};
const getCityByName = (name, cb) => {
    setTimeout(() => {
        const city = cities.find((city) => city.name === name)
        if (city) {
            cb(undefined, city);
        } else {
            const error = { message: "City not found" };
            cb(error, null);
        }
    }, 500);
};

// We now want to get the store by store_id in the product object and then get the city by name in the store object:
// So we need to nest the callbacks: (callback hell) (callback pyramid of doom) (callback pyramid of death):

const productName = "Coffee Star";

getProductByName(productName, (error, product) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Product: ", product);
        const storeId = product.store_id;
        getStoreById(storeId, (error, store) => {
            if (error) {
                console.log(error.message);
            } else {
                console.log("Store: ", store);
                const cityName = store.city;
                getCityByName(cityName, (error, city) => {
                    if (error) {
                        console.log(error.message);
                    } else {
                        console.log("City: ", city);
                    }
                });
            }
        });
    }
});


// The previous code is called callback hell or callback pyramid of doom or callback pyramid of death because it is very hard to read and understand.
// So we need to use promises to avoid callback hell and pyramid of doom in promise.js file
// See this picture: https://miro.medium.com/v2/resize:fit:828/format:webp/1*VH2f5KmjKwlBaEYyOmSE2g.png