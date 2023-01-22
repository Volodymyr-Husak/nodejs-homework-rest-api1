const express = require("express");

const { getCurrentUser } = require("../../controllers");

const { auth } = require("../../middlewares");

// const { userSchemes } = require("../../schemas");
// const { joiRegisterSchema, joiRLoginSchema } = userSchemes;

const router = express.Router();

router.get("/current", auth, getCurrentUser);

module.exports = router;
