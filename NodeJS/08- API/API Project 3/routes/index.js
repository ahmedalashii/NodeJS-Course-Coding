const bookRouter = require('./book');
const authRouter = require('./auth');
const reviewRouter = require('./review');

const { auth } = require('../middlewares');

const routes = (app) => {
    app.get('/', (request, response, next) => {
        response.send('Welcome to my API');
    });

    app.use('/auth', authRouter);

    app.use('/books', auth, bookRouter);

    app.use('/reviews', auth, reviewRouter);
};

module.exports = routes;