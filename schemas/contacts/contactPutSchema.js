const Joi = require("joi");

const contactPutSchema = (req, res, next) => {
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

module.exports = {
  contactPutSchema,
};
