const studentRouter = require('./student');

const routes = (app) => {
    app.get('/home', (request, response, next) => {
        const html = `<h1>Home Page</h1>`;
        return response.send(html);
    });

    app.get('/profile', (request, response, next) => {
        const html = `<h1>Profile Page</h1>`;
        return response.send(html);
    });

    // get, post, put, delete
    app.get('/data', (request, response, next) => {
        console.log(request.query);
        const lang = request.query.lang;

        console.log(request.headers);
        const host = request.get('Host');
        return response.status(200).json([
            {
                id: 1,
                name: "Ahmed",
            },
            {
                id: 2,
                name: "Mohamed",
            }
        ]);
    });

    app.use('/student', studentRouter);
};

module.exports = routes;