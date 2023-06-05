const { dbConnection } = require('../configurations');
const { userValidator, loginValidator } = require('../validators');
const { hashSync, compareSync } = require('bcryptjs');

class User {
    constructor(userData) {
        this.userData = userData;
    }

    save(cb) {
        dbConnection('users', async (collection) => {
            try {
                // const hashedPassword = hashSync(this.userData.password, 10);
                const hashedPassword = await hash(this.userData.password, 10);
                this.userData.password = hashedPassword;
                // await collection.insertOne(this.userData).then((result) => {
                //     cb({
                //         status: true,
                //         _user_id: result.insertedId,
                //     });
                // });
                const result = await collection.insertOne(this.userData);
                cb({
                    status: true,
                    _user_id: result.insertedId,
                });
            } catch (error) {
                cb(
                    {
                        status: false,
                        message: error.message,
                    }
                );
            }
        });
    }

    isExist() {
        return new Promise((resolve, reject) => {
            dbConnection('users', async (collection) => {
                try {
                    const user = await collection.findOne({
                        $or: [
                            { email: this.userData.email },
                            { username: this.userData.username }
                        ]
                    });
                    if (!user) {
                        const data = {
                            check: false,
                        };
                        // We used the async handler resolve to return the data to the sync function .. we have two async handlers here .. the first one is the async handler of the isExist function (promise) and the second one is the async handler of the dbConnection function .. when we can use the async handler resolve or the async-await syntax to return the data to the sync function ..
                        return resolve(data);
                    } else {
                        const data = {
                            check: true,
                        };
                        if (user.email === this.userData.email) {
                            data.message = 'Email already exists';
                        } else if (user.username === this.userData.username) {
                            data.message = 'Username already exists';
                        }
                        return resolve(data);
                    }
                } catch (error) {
                    return reject(error);
                }
            });
        });
    }

    static validateData(userData) {
        try {
            const validationResult = userValidator.validate(userData);
            return validationResult;
        } catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }

    static login(loginData) {
        return new Promise((resolve, reject) => {
            const validation = loginValidator.validate(loginData);
            if (validation.error) {
                return resolve({
                    status: false,
                    message: validation.error.message,
                    statusCode: 400,
                });
            }
            dbConnection('users', async (collection) => {
                try {
                    //* Here we got the reviewer data from the user collection by another dbConnection inside the dbConnection 

                    // const user = await collection.findOne({
                    //     username: loginData.username,
                    // },
                    //     // {
                    //     // projection: { username: 1, email: 1, password: 1, _id: 1 },
                    //     // }
                    // );
                    // const isMatch = compareSync(loginData.password, user.password);
                    // if (!user || !isMatch) {
                    //     return resolve({
                    //         status: false,
                    //         message: 'Login failed',
                    //     });
                    // } else if(user && isMatch){
                    //     dbConnection('reviewers', async (relatedCollection) => {
                    //         const reviewer = await relatedCollection.findOne({
                    //             _user_id: user._id,
                    //         });
                    //         if (reviewer) {
                    //             user.reviewer = reviewer;
                    //         }
                    //         user.password = undefined;
                    //         return resolve(
                    //             {
                    //                 status: true,
                    //                 data: user,
                    //             }
                    //         );
                    //     });
                    // }

                    //* Here we got the reviewer data from the user collection by using aggregate method

                    const dbResult = await collection.aggregate( // this will return an array of objects
                        [
                            {
                                $lookup: {
                                    from: 'reviewers', // this is the related collection name (reviewers)
                                    localField: '_id', // this is the _id of the main collection (users)
                                    foreignField: '_user_id', // this is the _user_id of the related collection (reviewers)
                                    as: 'reviewer', // this is the name of the field that will be added to the main collection (users)
                                },
                            },
                            {
                                $match: {
                                    username: loginData.username,
                                },
                            },
                            {
                                $limit: 1,
                            },
                            // {
                            //     $project: {
                            //         username: 1,
                            //         email: 1,
                            //         password: 1,
                            //         reviewer: {
                            //             $cond: {
                            //                 if: { $eq: [{ $size: '$reviewer' }, 0] },
                            //                 then: null,
                            //                 else: {
                            //                     $arrayElemAt: ['$reviewer', 0],
                            //                 },
                            //             },
                            //         },
                            //     },
                            // },
                        ]
                    ).toArray();

                    if (dbResult) {
                        const user = dbResult[0];
                        user.reviewer = user.reviewer ? user.reviewer[0] : null;
                        const isMatch = compareSync(loginData.password, user.password);

                        if (!user || !isMatch) {
                            return resolve({
                                status: false,
                                message: 'Login failed',
                            });
                        } else if (isMatch && user) {
                            user.password = undefined;
                            return resolve({
                                status: true,
                                data: user,
                            });
                        }
                    } else {
                        return resolve({
                            status: false,
                            message: 'Login failed',
                            statusCode: 401,
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
}

module.exports = User;