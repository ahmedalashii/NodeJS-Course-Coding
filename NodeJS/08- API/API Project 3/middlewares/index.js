const express = require('express');
const middlewares = (app) => {

    app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));

    app.use((request, response, next) => {
        // Some task
        return next();
    });
};

module.exports = {
    middlewares,
    auth: require('../middlewares/auth'),
};