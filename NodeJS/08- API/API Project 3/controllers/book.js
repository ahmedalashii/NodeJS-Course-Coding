const { dbConnection } = require('../configurations');

const getBooks = (request, response, next) => {
    const page = parseInt(request.query.page);
    const perPage = parseInt(request.query.per_page);
    if (isNaN(page) || isNaN(perPage)) {
        return response.status(400).json({ message: 'Page and PerPage are required and should be positive numbers greater than zero' });
    }

    if (page <= 0) {
        return response.status(400).json({ message: 'Page should be positive number greater than zero' });
    }

    /*
        Page      PerPage (Limit)     Offset (Skip)
        1         10                  0
        2         10                  10
        3         10                  20
        4         10                  30
        5         10                  40
        6         10                  50
        7         10                  60
        ...      ...                 ...
    */

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).skip((page - 1) * perPage).limit(perPage).toArray();
        const booksCount = await collection.countDocuments({});
        const pageCount = Math.ceil(booksCount / perPage);
        return response.json({
            books: books,
            pages: pageCount,
            total: booksCount,
            currentPage: page,
            perPage: perPage
        });
    });
};


const getBookByID = (request, response, next) => {
    const _id = request.params.id;

};

module.exports = {
    getBooks,
    getBookByID,
};