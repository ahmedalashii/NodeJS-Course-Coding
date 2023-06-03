const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
require('dotenv').config(); // This is to load the .env file variables into the process.env object
const { ObjectId } = require('bson');


const veriftToken = (request, response, next) => {
    var token = request.headers.authorization; // Bearer Token
    if (!token) {
        const error = createHttpError(403, 'A token is required for authentication'); // 403 status code means forbidden
        return next(error);
    }
    token.startsWith('Bearer ') ? token = token.slice(7, token.length).trimLeft() : null;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        request._user_id = decoded._id;
        request._reviewer_id = new ObjectId(decoded._reviewer_id);
        return next();
    } catch (error) {
        return next(createHttpError(401, error.message || 'Invalid token'));
    }
};

module.exports = veriftToken;