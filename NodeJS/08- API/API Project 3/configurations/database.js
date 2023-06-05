const { MongoClient } = require('mongodb');
require('dotenv').config();
const _uri = process.env.DB_STRING || 'mongodb://127.0.0.1:27017';

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            const db = client.db(process.env.DB_NAME || 'nodejs-project');
            const data = db.collection(collection); // This will return the collection object
            await cb(data);
            client.close(); // This is important to close the connection
        }).catch((error) => {
            console.log("Error is:", error);
        });
};

module.exports = dbConnection;