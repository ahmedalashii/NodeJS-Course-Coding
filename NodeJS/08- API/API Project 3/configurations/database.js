const { MongoClient } = require('mongodb');

const _uri = 'mongodb://127.0.0.1:27017';

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            const db = client.db('nodejs-project');
            const data = db.collection(collection);
            await cb(data);
            client.close(); // This is important to close the connection
        })
        .catch((error) => {
            console.log("Error is:", error);
        });
};

module.exports = dbConnection;