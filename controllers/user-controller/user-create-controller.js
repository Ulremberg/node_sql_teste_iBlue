const Joi = require('joi');

const createUserSchema = Joi.object().keys({
  name: Joi.string().alphanum().min(5).max(30).required().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'any.required': `"name" is a required field`
  }),
  birth_date: Joi.date().required().messages({
    'string.base': `"birth_date" should be a type of 'text'`,
    'string.empty': `"birth_date" cannot be an empty field`,
    'string.min': `"birth_date" should have a minimum length of {#limit}`,
    'any.required': `"birth_date" is a required field`
  }),
})

const validateFieldsCreateUser = (req, res) => {
  const validation = createUserSchema.validate(req.body);

  const { error } = validation;
  if (error) {
    res.status(500).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    });
  }
  return true;
}

module.exports = validateFieldsCreateUser;