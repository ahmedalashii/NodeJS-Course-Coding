const bookRouter = require('./book');
module.exports = (app) => {
    app.get('/', (request, response, next) => {
        response.send('Welcome to my API');
    });

    app.use('/books', bookRouter);
};
