const { joiRegisterSchema } = require("./joiRegisterSchema");
const { joiRLoginSchema } = require("./joiLoginSchema");
const { userPatchSchema } = require("./userPatchSchema");

module.exports = {
  joiRegisterSchema,
  joiRLoginSchema,
  userPatchSchema,
};
