const Joi = require("joi");

const joiRLoginSchema = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(10).required(),
    email: Joi.string().required(),
    subscription: Joi.string(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "Bad Request",
      code: 400,
      message: error.message,
    });
  }
  next();
};

module.exports = {
  joiRLoginSchema,
};
