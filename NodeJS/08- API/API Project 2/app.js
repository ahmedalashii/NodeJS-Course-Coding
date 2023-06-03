const express = require('express');
const middleware = require('./middlewares');
const routes = require("./routes");
const { dbConnection } = require('./configurations');
const app = express();
// dbConnection('books', () => {
//     console.log('Connected to database Specifically Books Collection');
// });
app.use(express.json()); // instead of body-parser.json()

middleware(app);

routes(app);

module.exports = app;