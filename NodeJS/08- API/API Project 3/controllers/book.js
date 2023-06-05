const { dbConnection } = require('../configurations');
const { ObjectId } = require('bson');
const createHttpError = require('http-errors');
const { returnJson } = require('../modules/json_response');

const getBooks = (request, response, next) => {
    const page = parseInt(request.query.page);
    const perPage = parseInt(request.query.per_page);
    if (isNaN(page) || isNaN(perPage)) {
        const error = createHttpError(400, 'Page and PerPage are required and should be positive numbers greater than zero');
        return next(error);
    }

    if (page <= 0 || perPage <= 0) {
        const error = createHttpError(400, 'Page and PerPage should be positive numbers greater than zero');
        return next(error);
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
        try {
            const books = await collection.find().skip((page - 1) * perPage).limit(perPage).toArray();
            const booksCount = await collection.countDocuments();
            const pageCount = Math.ceil(booksCount / perPage);
            return returnJson(response, 200, true, 'Books found', {
                books: books,
                pages: pageCount,
                total: booksCount,
                currentPage: page,
                perPage: perPage
            })
        } catch (error) {
            const err = createHttpError(500, error.message);
            return next(err);
        }
    });
};


const getBookByID = (request, response, next) => {
    if (!ObjectId.isValid(request.params.id)) {
        const error = createHttpError(400, 'Invalid ID');
        return next(error);
    }
    const _id = new ObjectId(request.params.id);
    dbConnection('books', async (collection) => {
        try {
            const book = await collection.findOne({ _id }); // or: { _id: _id }
            if (!book) {
                const error = createHttpError(404, 'Book not found');
                return next(error);
            }
            return returnJson(response, 200, true, 'Book found', book);
        } catch (err) {
            const error = createHttpError(500, err.message);
            return next(error);

        }
    });
};

module.exports = {
    getBooks,
    getBookByID,
};