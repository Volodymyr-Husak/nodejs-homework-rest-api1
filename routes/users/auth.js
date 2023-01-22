const express = require("express");

const { register, login } = require("../../controllers");

const { userSchemes } = require("../../schemas");
const { joiRegisterSchema, joiRLoginSchema } = userSchemes;

const router = express.Router();

router.post("/register", joiRegisterSchema, register);
router.post("/login", joiRLoginSchema, login);

module.exports = router;
