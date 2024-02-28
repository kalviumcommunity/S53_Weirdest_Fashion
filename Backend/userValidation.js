const Joi = require("joi");

const UserValidationSchema = Joi.object({
  Name: Joi.string().min(3).max(20).required(),
  userName: Joi.string().min(4).max(20).required(),
  emailId: Joi.string().email().required(),
  Password: Joi.string()
    .pattern(
      new RegExp(
        '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      )
    )
    .required()
    .messages({
      'string.pattern.base': 'Password must be at least 8 characters long and include at least one letter, one number, and one special character.'
    }),
  Favourites: Joi.array().items(Joi.string())
});

const DataValidationSchema = Joi.object({
  Name: Joi.string().min(3).max(20).required(),
  Event: Joi.string().min(2).max(200).required(),
  Date_Of_Event: Joi.date().iso().required(),
  Description: Joi.string().min(5).max(3000).required(),
  Image_Link: Joi.string().uri()
});

module.exports = { UserValidationSchema, DataValidationSchema };
