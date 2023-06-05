const { dbConnection } = require('../configurations');
class Reviewer {
    constructor(reviewerData) {
        this.reviewerData = reviewerData;
    }

    save(cb) {
        dbConnection('reviewers', async (collection) => {
            try {

                // const reviewer = await collection.findOne({
                //     name: this.reviewerData.name,
                //     _user_id: null // $ne: null >> ne: not equal >> 
                // });

                // // if reviewer exists, update it
                // if (reviewer) {
                //     await collection.updateOne({
                //         name: this.reviewerData.name,
                //     }, { $set: { _user_id: this.reviewData._user_id } });
                //     cb({
                //         status: true,
                //     });
                //     return;
                // }
                // // if reviewer not exists, insert it
                // await collection.insertOne(this.reviewerData);
                // cb({
                //     status: true,
                // });

                await collection.updateOne(
                    {
                        name: this.reviewerData.name,
                        _user_id: null,
                    },
                    { $set: { _user_id: this.reviewerData._user_id, name: this.reviewerData.name } },
                    { upsert: true }
                    // upsert: true >> if reviewer exists, update it, if not, insert it
                );

                cb({
                    status: true,
                });
            } catch (error) {
                cb({
                    status: false,
                    message: error.message,
                });
            }
        });
    }
}

module.exports = Reviewer;