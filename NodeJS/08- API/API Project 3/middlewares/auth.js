const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
require('dotenv').config(); // This is to load the .env file variables into the process.env object
const { ObjectId } = require('bson');

const verifyToken = (request, response, next) => {
    try {
        var token = request.headers.authorization; // Bearer Token
        if (!token) {
            // 403 Forbidden
            const error = createHttpError(403, 'A token is required for authentication');
            return next(error);
        }
        token.startsWith('Bearer ') ? token = token.slice(7, token.length).trimLeft() : null;

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        request._user_id = decoded._id;
        request._reviewer_id = new ObjectId(decoded._reviewer_id);
        return next();
    } catch (error) {
        // 401 Unauthorized
        const err = createHttpError(401, error.message || 'Invalid token');
        return next(err);
    }
};

module.exports = verifyToken;