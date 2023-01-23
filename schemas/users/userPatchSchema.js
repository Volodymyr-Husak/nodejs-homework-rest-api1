const Joi = require("joi");

const userPatchSchema = (req, res, next) => {
  const schema = Joi.object({
    subscription: Joi.string().required(),
  }).required();

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field subscription",
    });
  }
  next();
};

module.exports = {
  userPatchSchema,
};
