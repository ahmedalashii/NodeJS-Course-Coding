const { dbConnection } = require('../configurations');
const { reviewValidator } = require('../validators');
const createHttpError = require('http-errors');

class Review {
    constructor(reviewData) {
        this.reviewData = reviewData;
    }

    save(cb) {
        dbConnection('reviews', async (collection) => {
            try {
                const data = await collection.updateOne(
                    { _book_id: this.reviewData._book_id, _reviewer_id: this.reviewData._reviewer_id },
                    {
                        $set: {
                            _book_id: this.reviewData._book_id,
                            _reviewer_id: this.reviewData._reviewer_id,
                            rating: this.reviewData.rating,
                            comment: this.reviewData.comment,
                        },
                    },
                    {
                        upsert: true,
                    },
                );
                cb({
                    status: true,
                    message: 'Review added successfully',
                });
            } catch (error) {
                cb({
                    status: false,
                    message: error.message,
                });
            }
        });
    }

    static findById(_id) {
        return new Promise((resolve, reject) => {
            dbConnection('reviews', async (collection) => {
                try {
                    const review = await collection.findOne({ _id });
                    if (review) {
                        return resolve({
                            status: true,
                            data: review,
                        });
                    } else {
                        return resolve({
                            status: false,
                            message: 'Review not found!',
                        });
                    }
                } catch (error) {
                    return reject({
                        status: false,
                        message: error.message,
                    });
                }
            });
        });
    }


    static remove(_id, cb) {
        dbConnection('reviews', async (collection) => {
            try {
                await collection.deleteOne({ _id }); // _id is the review id
                cb({
                    status: true,
                    message: 'Review deleted successfully',
                });
            } catch (error) {
                cb({
                    status: false,
                    message: error.message,
                });
            }
        });
    }

    static validateData(reviewData) {
        const validation = reviewValidator.validate(reviewData);
        return validation;
    }
}

module.exports = Review;