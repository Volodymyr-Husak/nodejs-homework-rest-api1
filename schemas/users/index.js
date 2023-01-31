const { joiRegisterSchema } = require("./joiRegisterSchema");
const { joiRLoginSchema } = require("./joiLoginSchema");
const { userPatchSchema } = require("./userPatchSchema");
const { presenceEmailSchema } = require("./presenceEmailSchema");

module.exports = {
  joiRegisterSchema,
  joiRLoginSchema,
  userPatchSchema,
  presenceEmailSchema,
};
