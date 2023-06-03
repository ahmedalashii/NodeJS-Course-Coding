const checkLang = (app) => {
    app.use((request, response, next) => {
        const lang = request.query.lang;
        if (lang && (lang == "ar" || lang == "en")) {
            return next();
        }

        return response.status(400).json({
            error: "Lang is Required",
        });
    });

    app.use((request, response, next) => {
        if (request.url.startsWith('/auth')) {
            return next();
        }

        // some task
        return next();
    });
};

module.exports = checkLang;