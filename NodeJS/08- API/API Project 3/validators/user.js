const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().alphanum().min(4).max(100).required(), // Alphanumeric string of 4-10 characters long (alphanumeric means containing letters and numbers only)
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{4,20}$')).message('Password must be alphanumeric and 4-20 characters long') // the message property is optional and works here only with the pattern method (the function before it)
        .required(),
    // confirmPassword: Joi.ref('password'), // Joi.ref('password') is a reference to the password property
});


const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(4).max(100).required(), // Alphanumeric string of 4-10 characters long (alphanumeric means containing letters and numbers only)
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,20}$')).message('Password must be alphanumeric and 4-20 characters long').required(),
});

module.exports = {
    userSchema,
    loginSchema,
}