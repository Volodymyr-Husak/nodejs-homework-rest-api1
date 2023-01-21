const Joi = require("joi");

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
  contactsPatchSchema,
};
