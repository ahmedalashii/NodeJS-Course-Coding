const fs = require('fs');

const getProductByName = async (name, callback) => {
    fs.readFile('./data/products.json', 'utf8', (error, data) => {
        if (error) {
            await callback(error, null);
        } else {
            const json = JSON.parse(data);
            const product = json.find((product) => product.name === name);
            await callback(undefined, product);
        }
    });
};


const handleGetProductByName = async (error, product) => { // the callback itself could be async function
    if (error) {
        console.log(error);
    } else {
        await fs.readFile('./data/stores.json', 'utf8', (error, data) => {
            if (error) {
                console.log(error);
            } else {
                const json = JSON.parse(data);
                const store = json.find(store => store.id === product.store_id);
                console.log(store);
            }
        });
    }
}

getProductByName('Coffee Star', handleGetProductByName);