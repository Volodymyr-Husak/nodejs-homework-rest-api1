const express = require("express");

const { register, login, logout } = require("../../controllers");
const { auth } = require("../../middlewares");

const { userSchemes } = require("../../schemas");
const { joiRegisterSchema, joiRLoginSchema } = userSchemes;

const router = express.Router();

router.post("/register", joiRegisterSchema, register);
router.post("/login", joiRLoginSchema, login);
router.get("/logout", auth, logout);

module.exports = router;
