const { dbConnection } = require('../configurations');
const { ObjectId } = require('bson');
const createHttpError = require('http-errors');
const { Review, Book } = require('../models');
const { returnJson } = require('../modules/json_response');

const add = (request, response, next) => {
    const reviewData = request.body;
    // _book_id, _reviewer_id, rating, comment >> //* _reviewer_id will come from the auth middleware >> if the token is valid then it's not sent explicitly ..
    const validation = Review.validateData(reviewData);
    if (validation.error) {
        const error = createHttpError(400, validation.error.message);
        return next(error);
    }
    reviewData._reviewer_id = request._reviewer_id; // came from the middleware

    if (!ObjectId.isValid(reviewData._book_id)) {
        const error = createHttpError(400, 'The book is is invalid!');
        return next(error);
    } else if (!ObjectId.isValid(reviewData._reviewer_id)) {
        const error = createHttpError(400, 'The reviewer id is invalid!');
        return next(error);
    }
    reviewData._book_id = new ObjectId(reviewData._book_id);
    // We don't need to construct a new ObjectId for the _reviewer_id because it's already done in the auth middelware
    const review = new Review(reviewData);
    review.save((result) => {
        if (!result.status) {
            const error = createHttpError(500, result.message);
            return next(error);
        }
        Book.refreshAverageRating(reviewData._book_id);
        return returnJson(response, 200, true, result.message, review);
    });
}

const remove = (request, response, next) => {
    var _id = request.params.id;
    if (!ObjectId.isValid(_id)) {
        const error = createHttpError(400, 'The review id is invalid!');
        return next(error);
    }
    _id = new ObjectId(_id);
    Review.findById(_id)
        .then((result) => {

            if (!result.data && result.status == false) {
                const error = createHttpError(404, 'Review not found!');
                return next(error);
            }
            const reviewData = result.data;

            if (reviewData._reviewer_id.toString() != request._reviewer_id.toString()) {
                const error = createHttpError(403, 'You are not allowed to delete this review!');
                return next(error);
            }
            Review.remove(_id, (result) => {
                if (!result.status) {
                    const error = createHttpError(500, result.message);
                    return next(error);
                }
                Book.refreshAverageRating(reviewData._book_id);
                return returnJson(response, 200, true, result.message, null);
            });
        })
        .catch((error) => {
            const err = createHttpError(500, error.message);
            return next(err);
        });
};
module.exports = {
    add,
    remove,
}