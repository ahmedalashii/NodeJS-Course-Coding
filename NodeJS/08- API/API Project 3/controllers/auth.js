const { User, Reviewer } = require('../models');
const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');
const { returnJson } = require('../modules/json_response');
require("dotenv").config(); // This is to load the .env file and make the variables accessible via process.env
const { readFileSync } = require('fs');
/*
    An authentication token is a piece of information that is used to verify the identity of a user or entity in a computer system or network.
    It serves as a credential or proof of authorization to access certain resources, services, or perform specific actions.
*/
// JWT is a standard for creating tokens that can be used for authentication and authorization.

const signUp = async (request, response, next) => {
    const userData = request.body;
    const validation = User.validateData(userData);
    // Check Validation Data
    if (validation.error || validation.status === false) {
        const error = createHttpError(400, validation.error.message.replace(/"/g, '') || validation.status.message);
        return next(error);
    }
    // Check if user already exists
    const user = new User(userData);
    // This is a better way to handle the async-await syntax
    try {
        const result = await user.isExist();

        if (result.check) {
            const error = createHttpError(409, result.message);
            return next(error);
        }
    } catch (error) {
        const err = createHttpError(500, error.message);
        return next(err);
    }
    // or:
    // user.isExist()
    //     .then((result) => {
    //         if (result.check) {
    //             const error = createHttpError(409, result.message); // 409 status code means conflict with the current state of the resource
    //             return next(error);
    //         }
    //     }).catch(error => {
    //         const err = createHttpError(500, error.message);
    //         return next(err);
    //     });

    user.save((status) => {
        if (status.status) {
            // Create a reviewer
            const reviewerData = {
                name: userData.name,
                _user_id: status._user_id,
            };
            const reviewer = new Reviewer(reviewerData);
            reviewer.save((result) => {
                if (result.status) {
                    return returnJson(response, 201, true, 'User and reviewer created successfully', null);
                } else {
                    return returnJson(response, 201, true, 'User created successfully But reviewer not created', null);
                }
            });
        } else {
            const error = createHttpError(500, status.message);
            return next(error);
        }
    });

    // insert reviewer
    // name, user_id
}

const login = async (request, response, next) => {
    try {
        const result = await User.login(request.body);
        if (result.status == false) {
            const error = createHttpError(result.statusCode, result.message);
            return next(error);
        }
        const secretKey = readFileSync('./configurations/jwt_secret_key.key', 'utf8');
        const token = jwt.sign({
            _id: result.data._id,
            _reviewer_id: result.data.reviewer._id,
        }, secretKey);
        return returnJson(response, 200, true, 'User Logged In Successfully!', {
            toke: token,
            user: result.data,
        });
    } catch (error) {
        const err = createHttpError(500, error.message);
        return next(err);
    }
    // Or: 
    // User.login(request.body)
    //     .then((result) => {
    //         if (result.status) {
    //             // create a token

    //             // const secretKey = process.env.JWT_SECRET_KEY; //! This has to be in a .env file and accessed using process.env via .dotenv package
    //             // or via reading a normal file
    //             const secretKey = readFileSync('./configurations/jwt_secret_key.key', 'utf8');
    //             const token = jwt.sign({
    //                 _id: result.data._id,
    //                 _reviewer_id: result.data.reviewer._id,
    //             }, secretKey);
    //             // send token to client
    //             return returnJson(response, 200, true, 'User logged in successfully', {
    //                 token: token,
    //                 user: result.data,
    //             });
    //         } else {
    //             // send error to client
    //             const error = createHttpError(result.statusCode, result.message);
    //             return next(error);
    //         }
    //     })
    //     .catch((err) => {
    //         const error = createHttpError(500, err.message);
    //         return next(error);
    //     });
}

module.exports = {
    signUp,
    login,
}

