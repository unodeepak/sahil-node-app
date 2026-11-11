const { createValidator } = require("express-joi-validation");
const Joi = require("joi");

const validator = createValidator({ passError: true });

const validateForm = (schema) => (req, res, next) => {
  try {
    const validators = [];

    if (schema?.body) {
      validators.push(validator.body(Joi.object(schema.body)));
    }
    if (schema?.query) {
      validators.push(validator.query(Joi.object(schema.query)));
    }
    if (schema?.params) {
      validators.push(validator.params(Joi.object(schema.params)));
    }

    const runValidators = (index) => {
      if (index < validators.length) {
        validators[index](req, res, (err) => {
          if (err) {
            return res.status(400).json({
              err: "Validation Error",
              msg: err.error.message,
            });
          }
        });
        runValidators(index + 1);
      } else {
        next();
      }
    };

    runValidators(0);
  } catch (err) {
    console.log("Getting Error : ", err);
  }
};

module.exports = validateForm;
