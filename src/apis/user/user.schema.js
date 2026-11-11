const Joi = require("joi");

module.exports = {
  createUser: {
    body: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      password: Joi.string().required(),
      age: Joi.number().required(),
    },
  },
};
