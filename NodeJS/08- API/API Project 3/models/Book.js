const { dbConnection } = require('../configurations');

class Book {
    static refreshAverageRating(_book_id) {
        try {
            dbConnection('reviews', async (collection) => {
                const reviews = await collection.find({ _book_id: _book_id }).toArray();
                // const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
                let sum = 0;
                for (let i = 0; i < reviews.length; i++) {
                    if (reviews[i].rating && isNaN(reviews[i].rating) === false) {
                        sum += reviews[i].rating;
                    }
                }
                const averageRating = reviews.length == 0 ? 0 : Math.round((sum / reviews.length) * 100) / 100; // round to 2 decimal places

                dbConnection('books', async (collection) => {
                    await collection.updateOne({ _id: _book_id }, {
                        $set: { avg_rating: averageRating }
                    });
                });
            });
        } catch (error) {
            cb({
                status: false,
                message: error.message,
            });
        }


    }
}

module.exports = Book;