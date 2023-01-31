const Joi = require("joi");

const presenceEmailSchema = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field email",
    });
  }
  next();
};

module.exports = {
  presenceEmailSchema,
};
