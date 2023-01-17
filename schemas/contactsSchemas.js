const Joi = require("joi");

const contactsPostSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing required name field",
    });
  }
  next();
};

const contactsPutSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30),
    email: Joi.string(),
    phone: Joi.string(),
  })
    .required()
    .min(1);

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing fields",
    });
  }
  next();
};

const contactsPatchSchema = (req, res, next) => {
  const schema = Joi.object({
    favorite: Joi.boolean().required(),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field favorite",
    });
  }
  next();
};

module.exports = {
  contactsPostSchema,
  contactsPutSchema,
  contactsPatchSchema,
};
