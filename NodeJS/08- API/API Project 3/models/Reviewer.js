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
                //     _user_id: null // $ne: null >> means not null
                // });

                // // if reviewer exists, update it
                // if (reviewer) {
                //     await collection.updateOne({
                //         name: this.reviewerData.name,
                //     }, { $set: { ...this.reviewerData } });
                //     cb({
                //         status: true,
                //     });
                //     return;
                // }


                await collection.updateOne({
                    name: this.reviewerData.name,
                    _user_id: null, // $ne: null >> means not null
                }, { $set: { _user_id: this.reviewerData._user_id, name: this.reviewerData.name } }, { upsert: true }); // upsert: true >> if reviewer exists, update it, if not, insert it

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