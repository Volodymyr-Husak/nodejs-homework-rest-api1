const Joi = require("joi");

const contactsPostSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
const contactsPutSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string(),
  phone: Joi.string(),
})
  .required()
  .min(1);

module.exports = {
  contactsPostSchema,
  contactsPutSchema,
};
