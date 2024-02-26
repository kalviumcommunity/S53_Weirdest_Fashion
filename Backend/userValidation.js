const Joi = require("joi");

const UserValidationSchema = Joi.object({
  Name: Joi.string().min(3).max(20).required(),
  userName: Joi.string().min(4).max(20).required(),
  emailId: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  Password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  Favourites: Joi.array().items(Joi.string())
});

const DataValidationSchema = Joi.object({
    Name: Joi.string().min(3).max(20).required(),
    Event: Joi.string().min(2).max(200).required(),
    Date_Of_Event: Joi.string().required(),
    Description: Joi.string().min(5).max(3000).required(),
    Image_Link : Joi.string().uri(),
  });

module.exports = {UserValidationSchema,DataValidationSchema}