const { userSchema, loginSchema } = require('./user');

module.exports = {
    userValidator: userSchema,
    loginValidator: loginSchema,
    reviewValidator: require('./review'),
};